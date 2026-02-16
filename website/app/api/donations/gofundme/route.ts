import { NextResponse } from 'next/server';
import { updateGoFundMeOffset } from '@/lib/donations';

/**
 * POST /api/donations/gofundme
 *
 * Admin-only endpoint to update the GoFundMe donation offset.
 * Since GoFundMe doesn't have a public API, this allows manual
 * updates of the GoFundMe total to show combined fundraising progress.
 *
 * Headers:
 *   x-admin-key: Must match ADMIN_SECRET env var
 *
 * Body:
 *   { amount: number, donorCount: number }
 */
export async function POST(request: Request) {
  try {
    // Verify admin secret
    const adminKey = request.headers.get('x-admin-key');
    const adminSecret = process.env.ADMIN_SECRET;

    if (!adminSecret) {
      return NextResponse.json(
        { error: 'Admin endpoint not configured' },
        { status: 503 }
      );
    }

    if (adminKey !== adminSecret) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { amount, donorCount } = body;

    if (typeof amount !== 'number' || amount < 0) {
      return NextResponse.json(
        { error: 'Invalid amount. Must be a non-negative number.' },
        { status: 400 }
      );
    }

    const donors = typeof donorCount === 'number' ? donorCount : 0;

    await updateGoFundMeOffset(amount, donors);

    return NextResponse.json({
      success: true,
      gofundmeOffset: amount,
      gofundmeDonorCount: donors,
      updatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('GoFundMe offset update error:', error);
    return NextResponse.json(
      { error: 'Failed to update GoFundMe offset' },
      { status: 500 }
    );
  }
}

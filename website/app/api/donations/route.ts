/**
 * GET /api/donations
 * Returns the current donation totals (raised amount, count, goal)
 */

import { NextResponse } from 'next/server';
import { getDonationTotals } from '@/lib/donations';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const totals = await getDonationTotals();
    return NextResponse.json(totals);
  } catch (error) {
    console.error('Error fetching donation totals:', error);
    return NextResponse.json(
      { error: 'Failed to fetch donation totals' },
      { status: 500 }
    );
  }
}

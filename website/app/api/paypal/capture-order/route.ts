/**
 * POST /api/paypal/capture-order
 * Captures (completes) a PayPal order after the user approves payment
 * Records the donation in our tracking system
 */

import { NextRequest, NextResponse } from 'next/server';
import { recordDonation } from '@/lib/donations';

const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET;
const PAYPAL_API_URL = process.env.PAYPAL_MODE === 'live'
  ? 'https://api-m.paypal.com'
  : 'https://api-m.sandbox.paypal.com';

async function getPayPalAccessToken(): Promise<string> {
  const auth = Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`).toString('base64');

  const response = await fetch(`${PAYPAL_API_URL}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${auth}`,
      'Content-Type': 'application/json',
    },
    body: 'grant_type=client_credentials',
  });

  if (!response.ok) {
    throw new Error(`PayPal auth failed: ${response.status}`);
  }

  const data = await response.json();
  return data.access_token;
}

export async function POST(request: NextRequest) {
  try {
    if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
      return NextResponse.json(
        { error: 'PayPal is not configured' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { orderID } = body;

    if (!orderID) {
      return NextResponse.json(
        { error: 'Missing orderID' },
        { status: 400 }
      );
    }

    const accessToken = await getPayPalAccessToken();

    // Capture the order
    const captureResponse = await fetch(
      `${PAYPAL_API_URL}/v2/checkout/orders/${orderID}/capture`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!captureResponse.ok) {
      const errorData = await captureResponse.json();
      console.error('PayPal capture failed:', errorData);
      return NextResponse.json(
        { error: 'Failed to capture payment' },
        { status: 500 }
      );
    }

    const captureData = await captureResponse.json();

    // Extract payment details
    const capture = captureData.purchase_units?.[0]?.payments?.captures?.[0];
    const amount = parseFloat(capture?.amount?.value || '0');
    const currency = capture?.amount?.currency_code || 'USD';
    const payer = captureData.payer;

    // Record the donation
    const donation = await recordDonation({
      amount,
      currency,
      paypalOrderId: orderID,
      payerName: payer?.name
        ? `${payer.name.given_name} ${payer.name.surname}`
        : undefined,
      payerEmail: payer?.email_address,
      status: 'completed',
    });

    return NextResponse.json({
      success: true,
      donation: {
        id: donation.id,
        amount: donation.amount,
        timestamp: donation.timestamp,
      },
    });
  } catch (error) {
    console.error('Error capturing PayPal order:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

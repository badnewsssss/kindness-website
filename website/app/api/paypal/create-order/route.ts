/**
 * POST /api/paypal/create-order
 * Creates a PayPal order for the given donation amount
 */

import { NextRequest, NextResponse } from 'next/server';

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
      'Content-Type': 'application/x-www-form-urlencoded',
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
        { error: 'PayPal is not configured. Please set PAYPAL_CLIENT_ID and PAYPAL_CLIENT_SECRET environment variables.' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { amount } = body;

    if (!amount || isNaN(amount) || amount < 1) {
      return NextResponse.json(
        { error: 'Invalid donation amount. Minimum is $1.' },
        { status: 400 }
      );
    }

    const accessToken = await getPayPalAccessToken();

    const orderResponse = await fetch(`${PAYPAL_API_URL}/v2/checkout/orders`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'USD',
              value: amount.toFixed(2),
            },
            description: 'Donation to Kindness for Autism',
          },
        ],
        application_context: {
          brand_name: 'Kindness for Autism',
          shipping_preference: 'NO_SHIPPING',
          user_action: 'PAY_NOW',
        },
      }),
    });

    if (!orderResponse.ok) {
      const errorData = await orderResponse.json();
      console.error('PayPal order creation failed:', errorData);
      return NextResponse.json(
        { error: 'Failed to create PayPal order' },
        { status: 500 }
      );
    }

    const orderData = await orderResponse.json();
    return NextResponse.json({ id: orderData.id });
  } catch (error) {
    console.error('Error creating PayPal order:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

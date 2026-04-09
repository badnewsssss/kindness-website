'use client';

import { type FC, useState, useCallback } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { cn, formatCurrency } from '@/lib/utils';
import { Heart, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export interface PayPalDonationFormProps {
  className?: string;
  onDonationComplete?: (amount: number) => void;
}

const PRESET_AMOUNTS = [10, 25, 50, 100, 250, 500];

const paypalClientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || '';

/**
 * Full PayPal donation form with custom amount input and PayPal Smart Buttons.
 * Handles order creation, payment capture, and donation recording.
 */
export const PayPalDonationForm: FC<PayPalDonationFormProps> = ({
  className,
  onDonationComplete,
}) => {
  const [amount, setAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isCustom, setIsCustom] = useState(false);
  const [status, setStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [donatedAmount, setDonatedAmount] = useState(0);

  const effectiveAmount = isCustom ? parseFloat(customAmount) || 0 : amount;

  const handlePresetClick = (value: number) => {
    setAmount(value);
    setIsCustom(false);
    setCustomAmount('');
    setStatus('idle');
    setMessage('');
  };

  const handleCustomClick = () => {
    setIsCustom(true);
    setStatus('idle');
    setMessage('');
  };

  const handleCustomChange = (value: string) => {
    const sanitized = value.replace(/[^0-9.]/g, '');
    // Prevent multiple decimal points
    const parts = sanitized.split('.');
    const cleaned = parts.length > 2 ? parts[0] + '.' + parts.slice(1).join('') : sanitized;
    setCustomAmount(cleaned);
  };

  const createOrder = useCallback(async () => {
    try {
      const response = await fetch('/api/paypal/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: effectiveAmount }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create order');
      }

      return data.id;
    } catch (error) {
      console.error('Error creating order:', error);
      setStatus('error');
      setMessage('Could not start the payment. Please try again.');
      throw error;
    }
  }, [effectiveAmount]);

  const onApprove = useCallback(async (data: { orderID: string }) => {
    try {
      setStatus('processing');
      setMessage('Processing your donation...');

      const response = await fetch('/api/paypal/capture-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderID: data.orderID }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Payment capture failed');
      }

      setStatus('success');
      setDonatedAmount(result.donation.amount);
      setMessage(`Thank you for your generous donation of ${formatCurrency(result.donation.amount)}!`);
      onDonationComplete?.(result.donation.amount);
    } catch (error) {
      console.error('Error capturing order:', error);
      setStatus('error');
      setMessage('Something went wrong processing your payment. Please try again or contact us.');
    }
  }, [onDonationComplete]);

  const onError = useCallback(() => {
    setStatus('error');
    setMessage('Payment was cancelled or encountered an error. No charge was made.');
  }, []);

  const isValidAmount = effectiveAmount >= 1;
  const isPayPalConfigured = !!paypalClientId;

  // Success state
  if (status === 'success') {
    return (
      <div className={cn('rounded-2xl border-2 border-green-200 bg-green-50 p-8 text-center', className)}>
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>
        <h3 className="mb-2 text-2xl font-bold text-green-800">Thank You!</h3>
        <p className="mb-4 text-lg text-green-700">{message}</p>
        <p className="text-sm text-green-600">
          Your generosity helps spread kindness and support the autism community.
        </p>
        <button
          onClick={() => {
            setStatus('idle');
            setMessage('');
          }}
          className="mt-6 rounded-lg bg-green-600 px-6 py-2 text-white transition-colors hover:bg-green-700"
        >
          Make Another Donation
        </button>
      </div>
    );
  }

  return (
    <div className={cn('rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-lg md:p-8', className)}>
      <div className="mb-6 text-center">
        <h3 className="mb-2 text-2xl font-bold text-[var(--color-foreground)]">
          Make a Donation
        </h3>
        <p className="text-[var(--color-muted-foreground)]">
          Choose an amount or enter your own. Every dollar makes a difference.
        </p>
      </div>

      {/* Preset Amount Buttons */}
      <div className="mb-6 grid grid-cols-3 gap-3">
        {PRESET_AMOUNTS.map((value) => (
          <button
            key={value}
            onClick={() => handlePresetClick(value)}
            className={cn(
              'rounded-xl border-2 px-4 py-3 text-center font-bold transition-all duration-200',
              'hover:shadow-md hover:-translate-y-0.5',
              'focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2',
              !isCustom && amount === value
                ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white shadow-md'
                : 'border-gray-200 bg-white text-gray-900 hover:border-[var(--color-primary)]'
            )}
            aria-pressed={!isCustom && amount === value}
          >
            ${value}
          </button>
        ))}
      </div>

      {/* Custom Amount */}
      <div className="mb-6">
        {isCustom ? (
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <span className="text-xl font-bold text-[var(--color-muted-foreground)]">$</span>
            </div>
            <input
              type="text"
              inputMode="decimal"
              value={customAmount}
              onChange={(e) => handleCustomChange(e.target.value)}
              placeholder="Enter amount"
              className="w-full rounded-xl border-2 border-[var(--color-primary)] bg-white py-4 pl-10 pr-4 text-2xl font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              aria-label="Enter custom donation amount in dollars"
              autoFocus
            />
            <button
              onClick={() => { setIsCustom(false); setCustomAmount(''); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={handleCustomClick}
            className="w-full rounded-xl border-2 border-dashed border-[var(--color-border)] px-4 py-3 text-center font-semibold text-[var(--color-muted-foreground)] transition-all hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
          >
            Custom Amount
          </button>
        )}
      </div>

      {/* Selected Amount Display */}
      {isValidAmount && (
        <div className="mb-6 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10 py-3">
          <Heart className="h-5 w-5 text-[var(--color-primary)]" />
          <span className="text-lg font-bold text-[var(--color-foreground)]">
            Donating {formatCurrency(effectiveAmount)}
          </span>
        </div>
      )}

      {/* Error Message */}
      {status === 'error' && (
        <div className="mb-4 flex items-start gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{message}</span>
        </div>
      )}

      {/* Processing State */}
      {status === 'processing' && (
        <div className="mb-4 flex items-center justify-center gap-2 rounded-lg bg-blue-50 p-3 text-sm text-blue-700">
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>{message}</span>
        </div>
      )}

      {/* PayPal Buttons */}
      {isPayPalConfigured && isValidAmount ? (
        <div className="mb-4">
          <PayPalScriptProvider
            options={{
              clientId: paypalClientId,
              currency: 'USD',
              intent: 'capture',
              components: 'buttons',
            }}
          >
            <PayPalButtons
              key={effectiveAmount}
              style={{
                layout: 'vertical',
                color: 'gold',
                shape: 'rect',
                label: 'donate',
                height: 48,
              }}
              createOrder={createOrder}
              onApprove={onApprove}
              onError={onError}
              onCancel={() => {
                setStatus('idle');
                setMessage('');
              }}
              disabled={!isValidAmount || status === 'processing'}
            />
          </PayPalScriptProvider>
        </div>
      ) : !isPayPalConfigured ? (
        <div className="mb-4 rounded-xl border-2 border-dashed border-amber-300 bg-amber-50 p-6 text-center">
          <p className="mb-2 font-semibold text-amber-800">PayPal Setup Needed</p>
          <p className="text-sm text-amber-700">
            To accept donations, add your PayPal API credentials to the environment variables:
          </p>
          <code className="mt-2 block text-xs text-amber-600">
            NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_client_id<br />
            PAYPAL_CLIENT_SECRET=your_secret
          </code>
        </div>
      ) : (
        <div className="mb-4 rounded-lg bg-[var(--color-muted)] p-4 text-center text-sm text-[var(--color-muted-foreground)]">
          Please select or enter an amount of at least $1 to continue.
        </div>
      )}

      {/* Security Note */}
      <div className="flex items-center justify-center gap-2 text-xs text-[var(--color-muted-foreground)]">
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0110 0v4" />
        </svg>
        <span>Secure payment powered by PayPal. Your information is encrypted.</span>
      </div>
    </div>
  );
};

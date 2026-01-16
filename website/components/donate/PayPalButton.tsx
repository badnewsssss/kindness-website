'use client';

import { type FC } from 'react';
import { cn } from '@/lib/utils';

export interface PayPalButtonProps {
  amount?: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * PayPal donation button (placeholder implementation)
 * In production, this would integrate with PayPal's SDK
 */
export const PayPalButton: FC<PayPalButtonProps> = ({
  amount,
  className,
  size = 'md',
}) => {
  const handleClick = () => {
    // Placeholder: In production, this would redirect to PayPal or open PayPal modal
    const message = amount
      ? `Redirecting to PayPal to donate $${amount}...`
      : 'Redirecting to PayPal...';
    alert(message);

    // Example production URL (replace with actual PayPal configuration):
    // window.location.href = `https://www.paypal.com/donate?hosted_button_id=YOUR_BUTTON_ID&amount=${amount}`;
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200',
        'bg-[#0070BA] text-white hover:bg-[#005EA6] active:bg-[#003087]',
        'focus:outline-none focus:ring-2 focus:ring-[#0070BA] focus:ring-offset-2',
        'shadow-md hover:shadow-lg hover:-translate-y-0.5',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0',
        sizes[size],
        className
      )}
      aria-label={amount ? `Donate $${amount} via PayPal` : 'Donate via PayPal'}
    >
      {/* PayPal Logo */}
      <svg
        className={cn(
          'fill-current',
          size === 'sm' && 'h-4 w-4',
          size === 'md' && 'h-5 w-5',
          size === 'lg' && 'h-6 w-6'
        )}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M20.067 8.478c.492.88.556 2.014.3 3.327-.74 3.806-3.276 5.12-6.514 5.12h-.5a.805.805 0 00-.794.68l-.04.22-.63 3.993-.028.15a.806.806 0 01-.795.68H7.748c-.414 0-.72-.35-.64-.76l1.991-12.62c.065-.413.424-.72.844-.72h4.538c1.473 0 2.57.305 3.25.904.315.278.572.607.762.978z" />
        <path d="M11.916 3c.837 0 1.6.103 2.289.308.688.205 1.297.51 1.827.915.53.405.95.92 1.26 1.545.246.49.416 1.038.51 1.643.094.605.112 1.265.054 1.98-.02.24-.048.49-.084.75-.74 3.806-3.276 5.12-6.514 5.12h-.5a.805.805 0 00-.794.68l-.79 5.013c-.07.448-.457.76-.917.76H4.684c-.414 0-.72-.35-.64-.76L6.036 3.72c.065-.413.424-.72.844-.72h5.036z" opacity=".6" />
      </svg>

      <span>Donate with PayPal</span>
    </button>
  );
};

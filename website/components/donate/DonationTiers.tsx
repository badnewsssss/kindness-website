'use client';

import { type FC, useState } from 'react';
import { cn, formatCurrency } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

export interface DonationTier {
  amount: number;
  label: string;
  description: string;
  impact: string;
  popular?: boolean;
}

export interface DonationTiersProps {
  onSelectTier?: (amount: number) => void;
  className?: string;
}

const tiers: DonationTier[] = [
  {
    amount: 25,
    label: 'Supporter',
    description: 'Every dollar counts',
    impact: 'Provides educational materials for one family',
  },
  {
    amount: 50,
    label: 'Advocate',
    description: 'Make a difference',
    impact: 'Funds a support group session for families',
  },
  {
    amount: 100,
    label: 'Champion',
    description: 'Be a champion',
    impact: 'Sponsors a child\'s participation in a community event',
    popular: true,
  },
  {
    amount: 250,
    label: 'Leader',
    description: 'Lead the change',
    impact: 'Supports a full awareness workshop at a local school',
  },
  {
    amount: 500,
    label: 'Hero',
    description: 'Be a hero',
    impact: 'Funds comprehensive resources for multiple families',
  },
];

/**
 * Donation tier cards with predefined amounts and custom option
 * Accessible with keyboard navigation and screen reader support
 */
export const DonationTiers: FC<DonationTiersProps> = ({
  onSelectTier,
  className,
}) => {
  const [selectedTier, setSelectedTier] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [showCustomInput, setShowCustomInput] = useState(false);

  const handleTierSelect = (amount: number) => {
    setSelectedTier(amount);
    setShowCustomInput(false);
    setCustomAmount('');
    onSelectTier?.(amount);
  };

  const handleCustomClick = () => {
    setShowCustomInput(true);
    setSelectedTier(null);
  };

  const handleCustomAmountChange = (value: string) => {
    // Allow only numbers and decimal point
    const sanitized = value.replace(/[^0-9.]/g, '');
    setCustomAmount(sanitized);

    const amount = parseFloat(sanitized);
    if (!isNaN(amount) && amount > 0) {
      onSelectTier?.(amount);
    }
  };

  return (
    <div className={cn('w-full', className)}>
      <div className="mb-8 text-center">
        <h2 className="mb-2 text-2xl font-bold text-[var(--color-foreground)] md:text-3xl">
          Choose Your Impact
        </h2>
        <p className="text-[var(--color-muted-foreground)] md:text-lg">
          Select a donation amount or enter your own
        </p>
      </div>

      {/* Tier Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tiers.map((tier) => (
          <button
            key={tier.amount}
            onClick={() => handleTierSelect(tier.amount)}
            className={cn(
              'group relative rounded-xl border-2 p-6 text-left transition-all duration-200',
              'hover:shadow-lg hover:-translate-y-1',
              'focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2',
              selectedTier === tier.amount
                ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/5 shadow-md'
                : 'border-[var(--color-border)] bg-[var(--color-surface)]',
              tier.popular && 'ring-2 ring-[var(--color-autism-gold)]'
            )}
            aria-pressed={selectedTier === tier.amount}
            aria-label={`Donate ${formatCurrency(tier.amount)}: ${tier.label} - ${tier.impact}`}
          >
            {/* Popular badge */}
            {tier.popular && (
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--color-autism-gold)] px-3 py-1 text-xs font-bold text-white shadow-md"
                aria-label="Most popular donation tier"
              >
                MOST POPULAR
              </div>
            )}

            {/* Amount */}
            <div className="mb-3 flex items-baseline gap-1">
              <span className="text-3xl font-bold text-[var(--color-foreground)] md:text-4xl">
                {formatCurrency(tier.amount, { maximumFractionDigits: 0 })}
              </span>
            </div>

            {/* Label */}
            <div className="mb-1 text-lg font-semibold text-[var(--color-primary)]">
              {tier.label}
            </div>

            {/* Description */}
            <div className="mb-3 text-sm text-[var(--color-muted-foreground)]">
              {tier.description}
            </div>

            {/* Impact */}
            <div className="flex items-start gap-2 rounded-lg bg-[var(--color-muted)] p-3">
              <span className="text-xl" aria-hidden="true">💙</span>
              <div className="text-sm text-[var(--color-foreground)]">
                {tier.impact}
              </div>
            </div>

            {/* Checkmark for selected */}
            {selectedTier === tier.amount && (
              <div
                className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-primary)] text-white"
                aria-hidden="true"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            )}
          </button>
        ))}

        {/* Custom Amount Card */}
        <div
          className={cn(
            'relative rounded-xl border-2 p-6 transition-all duration-200',
            showCustomInput
              ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/5 shadow-md'
              : 'border-[var(--color-border)] bg-[var(--color-surface)]'
          )}
        >
          <div className="mb-3 text-3xl font-bold text-[var(--color-foreground)] md:text-4xl">
            Custom
          </div>
          <div className="mb-1 text-lg font-semibold text-[var(--color-primary)]">
            Your Choice
          </div>
          <div className="mb-3 text-sm text-[var(--color-muted-foreground)]">
            Enter any amount
          </div>

          {showCustomInput ? (
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-lg text-[var(--color-muted-foreground)]">$</span>
              </div>
              <input
                type="text"
                inputMode="decimal"
                value={customAmount}
                onChange={(e) => handleCustomAmountChange(e.target.value)}
                placeholder="0.00"
                className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] py-2 pl-8 pr-3 text-lg focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                aria-label="Enter custom donation amount"
                autoFocus
              />
            </div>
          ) : (
            <Button
              variant="outline"
              className="w-full"
              onClick={handleCustomClick}
              aria-label="Enter a custom donation amount"
            >
              Enter Amount
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

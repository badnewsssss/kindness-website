'use client';

import { type FC, useState } from 'react';
import { cn, formatCurrency } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Heart, Repeat, Zap } from 'lucide-react';

export interface DonationTier {
  amount: number;
  label: string;
  description: string;
  impact: string;
  monthlyImpact?: string;
  popular?: boolean;
}

export interface DonationTiersProps {
  onSelectTier?: (amount: number, isMonthly: boolean) => void;
  className?: string;
}

const tiers: DonationTier[] = [
  {
    amount: 25,
    label: 'Supporter',
    description: 'Every dollar counts',
    impact: 'Provides educational materials for one family',
    monthlyImpact: 'Supplies 12 families with resources yearly',
  },
  {
    amount: 50,
    label: 'Advocate',
    description: 'Make a difference',
    impact: 'Funds a support group session for families',
    monthlyImpact: 'Hosts monthly support groups all year',
  },
  {
    amount: 100,
    label: 'Champion',
    description: 'Be a champion',
    impact: 'Sponsors a child\'s participation in a community event',
    monthlyImpact: 'Sponsors 12 children in events yearly',
    popular: true,
  },
  {
    amount: 250,
    label: 'Leader',
    description: 'Lead the change',
    impact: 'Supports a full awareness workshop at a local school',
    monthlyImpact: 'Funds workshops in 12 schools yearly',
  },
  {
    amount: 500,
    label: 'Hero',
    description: 'Be a hero',
    impact: 'Funds comprehensive resources for multiple families',
    monthlyImpact: 'Transforms an entire community yearly',
  },
];

/**
 * Donation tier cards with predefined amounts, monthly/one-time toggle, and custom option
 * Accessible with keyboard navigation and screen reader support
 */
export const DonationTiers: FC<DonationTiersProps> = ({
  onSelectTier,
  className,
}) => {
  const [selectedTier, setSelectedTier] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [isMonthly, setIsMonthly] = useState(false);

  const handleTierSelect = (amount: number) => {
    setSelectedTier(amount);
    setShowCustomInput(false);
    setCustomAmount('');
    onSelectTier?.(amount, isMonthly);
  };

  const handleCustomClick = () => {
    setShowCustomInput(true);
    setSelectedTier(null);
  };

  const handleCustomAmountChange = (value: string) => {
    const sanitized = value.replace(/[^0-9.]/g, '');
    setCustomAmount(sanitized);

    const amount = parseFloat(sanitized);
    if (!isNaN(amount) && amount > 0) {
      onSelectTier?.(amount, isMonthly);
    }
  };

  const handleFrequencyChange = (monthly: boolean) => {
    setIsMonthly(monthly);
    if (selectedTier) {
      onSelectTier?.(selectedTier, monthly);
    } else if (customAmount) {
      const amount = parseFloat(customAmount);
      if (!isNaN(amount) && amount > 0) {
        onSelectTier?.(amount, monthly);
      }
    }
  };

  return (
    <div className={cn('w-full', className)}>
      <div className="mb-8 text-center">
        <h2 className="mb-2 text-2xl font-bold text-[var(--color-foreground)] md:text-3xl animate-fade-in-up">
          Choose Your Impact
        </h2>
        <p className="text-[var(--color-muted-foreground)] md:text-lg animate-fade-in-up animation-delay-100">
          Select a donation amount or enter your own
        </p>
      </div>

      {/* Frequency Toggle */}
      <div className="mb-8 flex justify-center animate-fade-in-up animation-delay-200">
        <div className="inline-flex rounded-xl bg-[var(--color-muted)] p-1.5 shadow-inner">
          <button
            onClick={() => handleFrequencyChange(false)}
            className={cn(
              'relative flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-300',
              !isMonthly
                ? 'bg-white text-[var(--color-primary)] shadow-md scale-105'
                : 'text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]'
            )}
            aria-pressed={!isMonthly}
          >
            <Zap className={cn('h-4 w-4 transition-transform', !isMonthly && 'animate-pulse-slow')} />
            One-Time
          </button>
          <button
            onClick={() => handleFrequencyChange(true)}
            className={cn(
              'relative flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-300',
              isMonthly
                ? 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white shadow-md scale-105'
                : 'text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]'
            )}
            aria-pressed={isMonthly}
          >
            <Repeat className={cn('h-4 w-4 transition-transform', isMonthly && 'animate-spin-slow')} />
            Monthly
            {isMonthly && (
              <span className="ml-1 rounded-full bg-white/20 px-2 py-0.5 text-xs animate-bounce-subtle">
                Best Value
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Monthly benefit message */}
      {isMonthly && (
        <div className="mb-8 text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10 px-4 py-2 text-sm">
            <Heart className="h-4 w-4 text-[var(--color-error)] animate-heartbeat" />
            <span className="text-[var(--color-foreground)]">
              Monthly donors create <strong>12x the impact</strong> and help us plan ahead!
            </span>
          </div>
        </div>
      )}

      {/* Tier Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tiers.map((tier, index) => (
          <button
            key={tier.amount}
            onClick={() => handleTierSelect(tier.amount)}
            className={cn(
              'group relative rounded-xl border-2 p-6 text-left transition-all duration-300',
              'hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]',
              'focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2',
              'animate-fade-in-up',
              selectedTier === tier.amount
                ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/5 shadow-lg'
                : 'border-[var(--color-border)] bg-[var(--color-surface)]',
              tier.popular && 'ring-2 ring-[var(--color-autism-gold)] animate-glow'
            )}
            style={{ animationDelay: `${(index + 3) * 100}ms` }}
            aria-pressed={selectedTier === tier.amount}
            aria-label={`Donate ${formatCurrency(tier.amount)}${isMonthly ? ' monthly' : ''}: ${tier.label} - ${isMonthly ? tier.monthlyImpact : tier.impact}`}
          >
            {/* Popular badge */}
            {tier.popular && (
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[var(--color-autism-gold)] to-[var(--color-warning)] px-4 py-1 text-xs font-bold text-white shadow-lg animate-bounce-subtle"
                aria-label="Most popular donation tier"
              >
                <span className="flex items-center gap-1">
                  <span className="animate-sparkle">✨</span>
                  MOST POPULAR
                  <span className="animate-sparkle animation-delay-200">✨</span>
                </span>
              </div>
            )}

            {/* Amount */}
            <div className="mb-3 flex items-baseline gap-1">
              <span className="text-3xl font-bold text-[var(--color-foreground)] md:text-4xl transition-transform group-hover:scale-110">
                {formatCurrency(tier.amount, { maximumFractionDigits: 0 })}
              </span>
              {isMonthly && (
                <span className="text-sm text-[var(--color-muted-foreground)] animate-fade-in">/month</span>
              )}
            </div>

            {/* Label */}
            <div className="mb-1 text-lg font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-primary-dark)] transition-colors">
              {tier.label}
            </div>

            {/* Description */}
            <div className="mb-3 text-sm text-[var(--color-muted-foreground)]">
              {tier.description}
            </div>

            {/* Impact */}
            <div className="flex items-start gap-2 rounded-lg bg-[var(--color-muted)] p-3 transition-all group-hover:bg-[var(--color-primary)]/10">
              <span className="text-xl transition-transform group-hover:scale-125 group-hover:animate-bounce-subtle" aria-hidden="true">
                {isMonthly ? '🌟' : '💙'}
              </span>
              <div className="text-sm text-[var(--color-foreground)]">
                {isMonthly ? tier.monthlyImpact : tier.impact}
              </div>
            </div>

            {/* Yearly total for monthly */}
            {isMonthly && (
              <div className="mt-3 text-center text-xs text-[var(--color-muted-foreground)] animate-fade-in">
                {formatCurrency(tier.amount * 12)}/year total
              </div>
            )}

            {/* Checkmark for selected */}
            {selectedTier === tier.amount && (
              <div
                className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-primary)] text-white shadow-lg animate-scale-in"
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
            'relative rounded-xl border-2 p-6 transition-all duration-300 animate-fade-in-up',
            'hover:shadow-xl hover:-translate-y-2',
            showCustomInput
              ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/5 shadow-lg'
              : 'border-[var(--color-border)] bg-[var(--color-surface)]'
          )}
          style={{ animationDelay: '800ms' }}
        >
          <div className="mb-3 text-3xl font-bold text-[var(--color-foreground)] md:text-4xl">
            Custom
          </div>
          <div className="mb-1 text-lg font-semibold text-[var(--color-primary)]">
            Your Choice
          </div>
          <div className="mb-3 text-sm text-[var(--color-muted-foreground)]">
            Enter any amount {isMonthly && '(monthly)'}
          </div>

          {showCustomInput ? (
            <div className="relative animate-fade-in">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-lg text-[var(--color-muted-foreground)]">$</span>
              </div>
              <input
                type="text"
                inputMode="decimal"
                value={customAmount}
                onChange={(e) => handleCustomAmountChange(e.target.value)}
                placeholder="0.00"
                className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] py-2 pl-8 pr-3 text-lg focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all"
                aria-label="Enter custom donation amount"
                autoFocus
              />
              {isMonthly && customAmount && parseFloat(customAmount) > 0 && (
                <div className="mt-2 text-xs text-[var(--color-muted-foreground)] animate-fade-in">
                  {formatCurrency(parseFloat(customAmount) * 12)}/year total
                </div>
              )}
            </div>
          ) : (
            <Button
              variant="outline"
              className="w-full group"
              onClick={handleCustomClick}
              aria-label="Enter a custom donation amount"
            >
              <span className="group-hover:scale-110 transition-transform">Enter Amount</span>
            </Button>
          )}
        </div>
      </div>

      {/* Selected amount summary */}
      {(selectedTier || (customAmount && parseFloat(customAmount) > 0)) && (
        <div className="mt-8 text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] px-6 py-3 text-white shadow-lg">
            <Heart className="h-5 w-5 animate-heartbeat" />
            <span className="font-semibold">
              You&apos;re giving {formatCurrency(selectedTier || parseFloat(customAmount))}
              {isMonthly ? '/month' : ' one-time'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

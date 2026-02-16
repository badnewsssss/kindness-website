'use client';

import { type FC, useEffect, useState, useCallback } from 'react';
import { cn, formatCurrency } from '@/lib/utils';

export interface LiveDonationTotalProps {
  className?: string;
  refreshTrigger?: number; // Increment to force a refresh
}

interface DonationTotals {
  totalRaised: number;
  paypalTotal: number;
  gofundmeTotal: number;
  donationCount: number;
  paypalDonorCount: number;
  gofundmeDonorCount: number;
  goal: number;
  gofundmeLastUpdated: string | null;
}

/**
 * Live-updating donation total that fetches from the API.
 * Automatically refreshes every 30 seconds and when refreshTrigger changes.
 */
export const LiveDonationTotal: FC<LiveDonationTotalProps> = ({
  className,
  refreshTrigger = 0,
}) => {
  const [totals, setTotals] = useState<DonationTotals | null>(null);
  const [displayRaised, setDisplayRaised] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchTotals = useCallback(async () => {
    try {
      const response = await fetch('/api/donations', { cache: 'no-store' });
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      setTotals(data);
      setError(false);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch on mount, on refreshTrigger change, and every 30s
  useEffect(() => {
    fetchTotals();
    const interval = setInterval(fetchTotals, 30000);
    return () => clearInterval(interval);
  }, [fetchTotals, refreshTrigger]);

  // Animate the counter when totals change
  useEffect(() => {
    if (!totals) return;

    const target = totals.totalRaised;
    const start = displayRaised;
    const diff = target - start;

    if (diff === 0) return;

    const duration = 1500;
    const steps = 60;
    const stepDuration = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      if (step >= steps) {
        setDisplayRaised(target);
        clearInterval(timer);
      } else {
        // Ease-out animation
        const progress = 1 - Math.pow(1 - step / steps, 3);
        setDisplayRaised(start + diff * progress);
      }
    }, stepDuration);

    return () => clearInterval(timer);
    // Only animate when totals change, not displayRaised
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totals?.totalRaised]);

  if (loading) {
    return (
      <div className={cn('animate-pulse rounded-2xl bg-[var(--color-muted)] p-8', className)}>
        <div className="mx-auto h-12 w-48 rounded bg-[var(--color-border)]" />
        <div className="mx-auto mt-4 h-6 w-full max-w-md rounded bg-[var(--color-border)]" />
      </div>
    );
  }

  if (error || !totals) {
    return null; // Silently hide if API unavailable
  }

  const percentage = Math.min((totals.totalRaised / totals.goal) * 100, 100);
  const displayPercentage = Math.min((displayRaised / totals.goal) * 100, 100);

  return (
    <div
      className={cn('w-full', className)}
      role="group"
      aria-label="Fundraising progress"
    >
      {/* Stats */}
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <div className="text-3xl font-bold text-[var(--color-foreground)] md:text-5xl">
            {formatCurrency(displayRaised, { maximumFractionDigits: 0 })}
          </div>
          <div className="text-sm text-[var(--color-muted-foreground)] md:text-base">
            raised of {formatCurrency(totals.goal, { maximumFractionDigits: 0 })} goal
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-[var(--color-primary)] md:text-3xl">
            {totals.donationCount}
          </div>
          <div className="text-sm text-[var(--color-muted-foreground)]">
            {totals.donationCount === 1 ? 'donor' : 'donors'}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative">
        <div
          className="h-6 w-full overflow-hidden rounded-full bg-[var(--color-muted)]"
          role="progressbar"
          aria-valuenow={Math.round(percentage)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${percentage.toFixed(1)}% of fundraising goal reached`}
        >
          <div
            className="h-full rounded-full bg-gradient-to-r from-[var(--color-secondary)] via-[var(--color-primary)] to-[var(--color-autism-blue)] transition-all duration-500 ease-out"
            style={{ width: `${Math.max(displayPercentage, 0.5)}%` }}
          >
            <div
              className="h-full w-full animate-pulse bg-gradient-to-r from-transparent via-white/20 to-transparent"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Milestone markers */}
        <div className="mt-2 flex justify-between text-xs text-[var(--color-muted-foreground)]">
          <span>$0</span>
          <span className="hidden sm:inline">{formatCurrency(totals.goal / 2, { maximumFractionDigits: 0 })}</span>
          <span>{formatCurrency(totals.goal, { maximumFractionDigits: 0 })}</span>
        </div>
      </div>

      {/* Source breakdown */}
      {(totals.paypalTotal > 0 || totals.gofundmeTotal > 0) && (
        <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-600">
          {totals.paypalTotal > 0 && (
            <span className="flex items-center gap-1">
              <span className="inline-block h-2 w-2 rounded-full bg-blue-500" />
              PayPal: {formatCurrency(totals.paypalTotal, { maximumFractionDigits: 0 })}
              {' '}({totals.paypalDonorCount} {totals.paypalDonorCount === 1 ? 'donor' : 'donors'})
            </span>
          )}
          {totals.gofundmeTotal > 0 && (
            <span className="flex items-center gap-1">
              <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
              GoFundMe: {formatCurrency(totals.gofundmeTotal, { maximumFractionDigits: 0 })}
              {' '}({totals.gofundmeDonorCount} {totals.gofundmeDonorCount === 1 ? 'donor' : 'donors'})
            </span>
          )}
        </div>
      )}

      <div className="mt-3 text-center">
        <p className="text-sm text-[var(--color-muted-foreground)]">
          {percentage >= 100
            ? 'We reached our goal! Thank you to all our supporters!'
            : `${(100 - percentage).toFixed(0)}% to go — every donation brings us closer!`}
        </p>
      </div>
    </div>
  );
};

'use client';

import { type FC, useEffect, useState } from 'react';
import { cn, formatCurrency } from '@/lib/utils';

export interface FundraisingProgressProps {
  raised: number;
  goal: number;
  className?: string;
  animate?: boolean;
}

/**
 * Progress bar showing fundraising progress with animated fill
 * Accessible with ARIA attributes for screen readers
 */
export const FundraisingProgress: FC<FundraisingProgressProps> = ({
  raised,
  goal,
  className,
  animate = true,
}) => {
  const [displayRaised, setDisplayRaised] = useState(animate ? 0 : raised);
  const percentage = Math.min((raised / goal) * 100, 100);
  const [displayPercentage, setDisplayPercentage] = useState(animate ? 0 : percentage);

  // Animate the progress bar and numbers on mount
  useEffect(() => {
    if (!animate) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;
    const raisedIncrement = raised / steps;
    const percentageIncrement = percentage / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setDisplayRaised(raised);
        setDisplayPercentage(percentage);
        clearInterval(timer);
      } else {
        setDisplayRaised(Math.floor(raisedIncrement * currentStep));
        setDisplayPercentage(percentageIncrement * currentStep);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [raised, percentage, animate]);

  return (
    <div
      className={cn('w-full', className)}
      role="group"
      aria-label="Fundraising progress"
    >
      {/* Stats */}
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <div className="text-3xl font-bold text-[var(--color-foreground)] md:text-4xl">
            {formatCurrency(displayRaised, { maximumFractionDigits: 0 })}
          </div>
          <div className="text-sm text-[var(--color-muted-foreground)] md:text-base">
            raised of {formatCurrency(goal, { maximumFractionDigits: 0 })} goal
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-[var(--color-primary)] md:text-3xl">
            {displayPercentage.toFixed(1)}%
          </div>
          <div className="text-sm text-[var(--color-muted-foreground)]">
            complete
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative">
        {/* Background track */}
        <div
          className="h-6 w-full overflow-hidden rounded-full bg-[var(--color-muted)]"
          role="progressbar"
          aria-valuenow={Math.round(displayPercentage)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${displayPercentage.toFixed(1)}% of fundraising goal reached`}
        >
          {/* Filled portion */}
          <div
            className="h-full rounded-full bg-gradient-to-r from-[var(--color-secondary)] via-[var(--color-primary)] to-[var(--color-autism-blue)] transition-all duration-300 ease-out"
            style={{ width: `${displayPercentage}%` }}
          >
            {/* Animated shimmer effect */}
            <div
              className="h-full w-full animate-pulse bg-gradient-to-r from-transparent via-white/20 to-transparent"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Milestone markers */}
        <div className="mt-2 flex justify-between text-xs text-[var(--color-muted-foreground)]">
          <span>$0</span>
          <span className="hidden sm:inline">$125k</span>
          <span>{formatCurrency(goal, { maximumFractionDigits: 0 })}</span>
        </div>
      </div>

      {/* Donor count (optional) */}
      <div className="mt-4 text-center">
        <p className="text-sm text-[var(--color-muted-foreground)]">
          Thank you to all our generous supporters!
        </p>
      </div>
    </div>
  );
};

'use client';

import { type FC, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export interface AllocationCategory {
  name: string;
  percentage: number;
  color: string;
  description: string;
  icon: string;
}

export interface FundAllocationProps {
  className?: string;
  animate?: boolean;
}

const allocations: AllocationCategory[] = [
  {
    name: 'Autism Advocacy & Awareness',
    percentage: 40,
    color: '#3b9af4', // Primary blue
    description: 'Autism advocacy, rights protection, and community awareness initiatives',
    icon: '💙',
  },
  {
    name: 'Family Support & Education',
    percentage: 35,
    color: '#22c55e', // Secondary green
    description: 'Family support resources, autism education, and kindness-based outreach programs',
    icon: '🤝',
  },
  {
    name: 'Stewardship & Transparency',
    percentage: 25,
    color: '#ffc425', // Autism gold
    description: 'Professional accounting, responsible financial stewardship, and legal compliance',
    icon: '✓',
  },
];

/**
 * Visual breakdown of fund allocation with animated pie chart
 * Shows how donations are distributed across different categories
 */
export const FundAllocation: FC<FundAllocationProps> = ({
  className,
  animate = true,
}) => {
  const [displayPercentages, setDisplayPercentages] = useState<number[]>(
    animate ? allocations.map(() => 0) : allocations.map((a) => a.percentage)
  );

  // Animate percentages on mount
  useEffect(() => {
    if (!animate) return;

    const duration = 1500; // 1.5 seconds
    const steps = 60;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setDisplayPercentages(allocations.map((a) => a.percentage));
        clearInterval(timer);
      } else {
        setDisplayPercentages(
          allocations.map((a) => (a.percentage / steps) * currentStep)
        );
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [animate]);

  // Calculate cumulative percentages for pie chart
  let cumulativePercentage = 0;
  const segments = displayPercentages.map((percentage, index) => {
    const startPercentage = cumulativePercentage;
    cumulativePercentage += percentage;
    return {
      ...allocations[index],
      percentage,
      startPercentage,
      endPercentage: cumulativePercentage,
    };
  });

  return (
    <div className={cn('w-full', className)}>
      <div className="mb-8 text-center">
        <h2 className="mb-2 text-2xl font-bold text-[var(--color-foreground)] md:text-3xl">
          How Your Donation Helps
        </h2>
        <p className="text-[var(--color-muted-foreground)] md:text-lg">
          Transparent allocation of funds to maximize impact
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
        {/* Pie Chart */}
        <div className="flex items-center justify-center">
          <div className="relative" style={{ width: '280px', height: '280px' }}>
            <svg
              viewBox="0 0 100 100"
              className="h-full w-full -rotate-90 transform"
              role="img"
              aria-label="Fund allocation pie chart"
            >
              {segments.map((segment, index) => {
                const startAngle = (segment.startPercentage / 100) * 360;
                const endAngle = (segment.endPercentage / 100) * 360;
                const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

                const startX = 50 + 40 * Math.cos((Math.PI * startAngle) / 180);
                const startY = 50 + 40 * Math.sin((Math.PI * startAngle) / 180);
                const endX = 50 + 40 * Math.cos((Math.PI * endAngle) / 180);
                const endY = 50 + 40 * Math.sin((Math.PI * endAngle) / 180);

                return (
                  <path
                    key={index}
                    d={`M 50 50 L ${startX} ${startY} A 40 40 0 ${largeArcFlag} 1 ${endX} ${endY} Z`}
                    fill={segment.color}
                    stroke="white"
                    strokeWidth="0.5"
                    className="transition-all duration-300 hover:opacity-80"
                    aria-label={`${segment.name}: ${segment.percentage.toFixed(0)}%`}
                  />
                );
              })}

              {/* Center circle for donut effect */}
              <circle
                cx="50"
                cy="50"
                r="20"
                fill="var(--color-surface)"
                stroke="var(--color-border)"
                strokeWidth="0.5"
              />
            </svg>

            {/* Center text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-3xl font-bold text-[var(--color-foreground)]">100%</div>
              <div className="text-sm text-[var(--color-muted-foreground)]">Allocated</div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-col justify-center gap-4">
          {segments.map((segment, index) => (
            <div
              key={index}
              className="group rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4 transition-all duration-200 hover:shadow-md"
            >
              <div className="mb-2 flex items-center gap-3">
                {/* Color indicator */}
                <div
                  className="h-4 w-4 shrink-0 rounded-full"
                  style={{ backgroundColor: segment.color }}
                  aria-hidden="true"
                />

                {/* Icon and name */}
                <div className="flex flex-1 items-center gap-2">
                  <span className="text-xl" aria-hidden="true">
                    {segment.icon}
                  </span>
                  <h3 className="font-semibold text-[var(--color-foreground)]">
                    {segment.name}
                  </h3>
                </div>

                {/* Percentage */}
                <div className="text-xl font-bold" style={{ color: segment.color }}>
                  {segment.percentage.toFixed(0)}%
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-[var(--color-muted-foreground)] pl-9">
                {segment.description}
              </p>
            </div>
          ))}

          {/* Transparency note */}
          <div className="mt-2 rounded-lg bg-[var(--color-muted)] p-4">
            <div className="flex items-start gap-2">
              <span className="text-xl" aria-hidden="true">
                ✓
              </span>
              <p className="text-sm text-[var(--color-foreground)]">
                <strong>100% Transparency:</strong> We are committed to the responsible
                use of every donation. Financial reports are available upon request.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

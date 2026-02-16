'use client';

import { type FC } from 'react';
import { cn } from '@/lib/utils';

export interface GoFundMeWidgetProps {
  campaignUrl?: string;
  className?: string;
  variant?: 'button' | 'banner';
}

/**
 * GoFundMe widget component (placeholder implementation)
 * In production, this would embed the actual GoFundMe widget or link to campaign
 */
export const GoFundMeWidget: FC<GoFundMeWidgetProps> = ({
  campaignUrl = 'https://gofundme.com/kindness-for-autism',
  className,
  variant = 'button',
}) => {
  const handleClick = () => {
    // Placeholder: In production, this would open the actual GoFundMe campaign
    window.open(campaignUrl, '_blank', 'noopener,noreferrer');
  };

  if (variant === 'banner') {
    return (
      <div
        className={cn(
          'overflow-hidden rounded-xl border-2 border-[var(--color-border)] bg-gradient-to-br from-white to-gray-50 shadow-lg',
          className
        )}
      >
        <div className="flex flex-col items-center gap-4 p-6 md:flex-row md:gap-6">
          {/* GoFundMe branding */}
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#02A95C] text-3xl shadow-md">
            <span aria-hidden="true">💚</span>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="mb-1 text-lg font-bold text-gray-900 md:text-xl">
              Support Us on GoFundMe
            </h3>
            <p className="text-sm text-gray-600 md:text-base">
              Join our community of supporters making a difference for autism awareness
            </p>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleClick}
            className={cn(
              'shrink-0 rounded-lg bg-[#02A95C] px-6 py-3 font-semibold text-white transition-all duration-200',
              'hover:bg-[#019750] active:bg-[#017A40]',
              'focus:outline-none focus:ring-2 focus:ring-[#02A95C] focus:ring-offset-2',
              'shadow-md hover:shadow-lg hover:-translate-y-0.5'
            )}
            aria-label="Visit our GoFundMe campaign"
          >
            View Campaign
          </button>
        </div>
      </div>
    );
  }

  // Button variant
  return (
    <button
      onClick={handleClick}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold transition-all duration-200',
        'bg-[#02A95C] text-white hover:bg-[#019750] active:bg-[#017A40]',
        'focus:outline-none focus:ring-2 focus:ring-[#02A95C] focus:ring-offset-2',
        'shadow-md hover:shadow-lg hover:-translate-y-0.5',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0',
        className
      )}
      aria-label="Donate via GoFundMe"
    >
      {/* Heart icon */}
      <svg
        className="h-5 w-5 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>

      <span>Donate on GoFundMe</span>
    </button>
  );
};

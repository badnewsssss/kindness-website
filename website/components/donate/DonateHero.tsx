import type { FC } from 'react';
import { cn } from '@/lib/utils';

export interface DonateHeroProps {
  className?: string;
}

/**
 * Hero section for the donate page with compelling headline and mission statement
 */
export const DonateHero: FC<DonateHeroProps> = ({ className }) => {
  return (
    <section
      className={cn(
        'relative overflow-hidden bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-dark)] to-[var(--color-autism-blue)]',
        'py-16 md:py-24 lg:py-32',
        className
      )}
      aria-labelledby="donate-hero-title"
    >
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* Main Headline */}
          <h1
            id="donate-hero-title"
            className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl text-balance"
          >
            Your Kindness Opens Every Door
          </h1>

          {/* Subheadline */}
          <p className="mb-8 text-xl text-white/90 md:text-2xl lg:text-3xl text-balance">
            No family should have to figure all of this out alone
          </p>

          {/* Mission Statement */}
          <div className="mx-auto max-w-2xl">
            <p className="text-lg text-white/80 md:text-xl leading-relaxed">
              Your support helps expand autism support programs, advocacy efforts,
              family education resources, and kindness-based outreach that creates
              real community-level change.
            </p>
          </div>

          {/* Visual indicator to scroll down */}
          <div className="mt-12 flex justify-center" aria-hidden="true">
            <div className="flex flex-col items-center gap-2 text-white/60">
              <span className="text-sm uppercase tracking-wider">Support Our Mission</span>
              <svg
                className="h-6 w-6 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Puzzle piece accent */}
      <div
        className="absolute -right-10 -top-10 text-9xl opacity-10 select-none"
        aria-hidden="true"
      >
        🧩
      </div>
      <div
        className="absolute -bottom-10 -left-10 text-9xl opacity-10 select-none"
        aria-hidden="true"
      >
        🧩
      </div>
    </section>
  );
};

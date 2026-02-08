'use client';

import { useEffect, useRef, useState } from 'react';
import { Heart, BookOpen, Target, Users } from 'lucide-react';

interface StatItem {
  value: string;
  label: string;
  suffix?: string;
  prefix?: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const stats: StatItem[] = [
  {
    value: '52384',
    suffix: '+',
    label: 'Stories Collected',
    description: 'Personal stories of kindness gathered over the years',
    icon: <BookOpen className="w-8 h-8" />,
    color: 'from-[var(--color-primary)] to-[var(--color-autism-blue)]',
  },
  {
    value: '25',
    label: 'Years of Journey',
    description: 'Celebrating a remarkable life and mission',
    icon: <Heart className="w-8 h-8" />,
    color: 'from-[var(--color-error)] to-rose-600',
  },
  {
    value: '250000',
    prefix: '$',
    label: 'Fundraising Goal',
    description: 'Supporting advocacy, legal work, and awareness',
    icon: <Target className="w-8 h-8" />,
    color: 'from-[var(--color-secondary)] to-emerald-600',
  },
  {
    value: '8',
    label: 'Committee Members',
    description: 'Professional advisors guiding our mission',
    icon: <Users className="w-8 h-8" />,
    color: 'from-[var(--color-autism-gold)] to-amber-600',
  },
];

function formatNumber(num: number): string {
  return num.toLocaleString('en-US');
}

function StatCard({ value, suffix = '', prefix = '', label, description, icon, color }: StatItem & { index: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const numericValue = parseInt(value, 10);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2500;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(numericValue * easeOutQuart);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(numericValue);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, numericValue]);

  const displayValue = `${prefix}${formatNumber(count)}${suffix}`;

  return (
    <div
      ref={ref}
      className={`
        group relative bg-[var(--color-surface)] rounded-2xl p-6 lg:p-8 text-center
        border border-[var(--color-border)] shadow-sm
        transform transition-all duration-500
        hover:shadow-xl hover:-translate-y-2 hover:border-[var(--color-primary-light)]
        ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}
      `}
    >
      {/* Background gradient on hover */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

      {/* Icon */}
      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${color} text-white mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
        {icon}
      </div>

      {/* Counter */}
      <div className="mb-3 relative">
        <span
          className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}
          aria-label={displayValue}
        >
          {displayValue}
        </span>
        {/* Pulse effect on count */}
        {isVisible && count === numericValue && (
          <span className="absolute inset-0 animate-ping opacity-20 text-4xl lg:text-5xl font-bold text-[var(--color-primary)]">
            {displayValue}
          </span>
        )}
      </div>

      {/* Label */}
      <h3 className="text-lg lg:text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors" style={{ color: '#111827' }}>
        {label}
      </h3>

      {/* Description */}
      <p className="text-sm text-[var(--color-muted-foreground)]">
        {description}
      </p>

      {/* Decorative corner */}
      <div className={`absolute -bottom-1 -right-1 w-20 h-20 bg-gradient-to-br ${color} opacity-10 rounded-tl-full group-hover:opacity-20 transition-opacity`} />
    </div>
  );
}

/**
 * Impact statistics section showcasing key metrics
 * Features animated counters, icons, and responsive grid layout
 */
export function ImpactStats() {
  return (
    <section
      id="impact-stats"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[var(--color-background)] to-[var(--color-muted)]"
      aria-labelledby="impact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-semibold mb-4 animate-fade-in-down">
            Making a Difference
          </span>
          <h2
            id="impact-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in-up"
            style={{ color: '#111827' }}
          >
            Our <span style={{ color: '#2563eb' }}>Impact</span>
          </h2>
          <p className="text-lg sm:text-xl text-[var(--color-muted-foreground)] max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
            Real numbers representing real stories and real change in the autism community
          </p>
        </div>

        {/* Stats Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 stagger-list"
          role="list"
          aria-label="Impact statistics"
        >
          {stats.map((stat, index) => (
            <div key={index} role="listitem" style={{ animationDelay: `${index * 150}ms` }}>
              <StatCard {...stat} index={index} />
            </div>
          ))}
        </div>

        {/* Additional Context */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] shadow-sm animate-fade-in-up animation-delay-600">
            <Heart className="w-5 h-5 text-[var(--color-error)] animate-heartbeat" />
            <p className="text-base text-[var(--color-foreground)]">
              Every number tells a story of <strong>kindness</strong>, <strong>resilience</strong>, and <strong>hope</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

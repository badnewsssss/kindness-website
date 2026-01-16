'use client';

import { useEffect, useRef, useState } from 'react';

interface StatItem {
  value: string;
  label: string;
  suffix?: string;
  description: string;
}

const stats: StatItem[] = [
  {
    value: '44000',
    suffix: '+',
    label: 'Stories Collected',
    description: 'Personal stories of kindness gathered over the years',
  },
  {
    value: '25',
    label: 'Years of Journey',
    description: 'Celebrating a remarkable life and mission',
  },
  {
    value: '250000',
    suffix: '',
    label: 'Fundraising Goal',
    description: 'Supporting advocacy, legal work, and awareness',
  },
  {
    value: '8',
    label: 'Committee Members',
    description: 'Professional advisors guiding our mission',
  },
];

/**
 * Formats a number with commas for thousands
 */
function formatNumber(num: number): string {
  return num.toLocaleString('en-US');
}

/**
 * Individual stat card with animated counter
 */
function StatCard({ value, suffix = '', label, description }: StatItem) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const numericValue = parseInt(value, 10);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, numericValue]);

  // Format the display value
  const displayValue = label === 'Fundraising Goal'
    ? `$${formatNumber(count)}`
    : formatNumber(count);

  return (
    <div
      ref={ref}
      className="bg-white rounded-xl shadow-lg p-6 lg:p-8 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="mb-3">
        <span
          className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-600"
          aria-label={`${displayValue}${suffix}`}
        >
          {displayValue}{suffix}
        </span>
      </div>
      <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">
        {label}
      </h3>
      <p className="text-sm text-gray-600">
        {description}
      </p>
    </div>
  );
}

/**
 * Impact statistics section showcasing key metrics
 * Features animated counters and responsive grid layout
 */
export function ImpactStats() {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-amber-50"
      aria-labelledby="impact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2
            id="impact-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Our Impact
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Real numbers representing real stories and real change in the autism community
          </p>
        </div>

        {/* Stats Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          role="list"
          aria-label="Impact statistics"
        >
          {stats.map((stat, index) => (
            <div key={index} role="listitem">
              <StatCard {...stat} />
            </div>
          ))}
        </div>

        {/* Additional Context */}
        <div className="mt-12 text-center">
          <p className="text-base text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Every number tells a story of kindness, resilience, and hope. Together, we&apos;re
            building a community that honors neurodiversity and supports families touched by autism.
          </p>
        </div>
      </div>
    </section>
  );
}

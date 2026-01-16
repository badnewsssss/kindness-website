'use client';

import { Button } from '@/components/ui/Button';
import Link from 'next/link';

/**
 * Hero section for the homepage
 * Features the main headline, mission statement, and primary CTAs
 */
export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 bg-[url('/patterns/kindness-pattern.svg')] opacity-5" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Kindness for Autism:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-600">
              Honoring Lives & Changing the Future
            </span>
          </h1>

          {/* Mission Subtext */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            A journey of 25 years, 44,000+ stories of kindness, and a mission to support
            autism advocacy through compassion, understanding, and meaningful action.
          </p>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Founded by Charlie Miller, honoring his son&apos;s incredible journey from
            1lb 8oz at birth to celebrating 25 years of life. Join us in creating a
            future where kindness opens every door.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            role="group"
            aria-label="Primary actions"
          >
            <Link href="/mission" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full min-w-[200px] bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 focus:ring-amber-500"
              >
                Our Mission
              </Button>
            </Link>
            <Link href="/donate" className="w-full sm:w-auto">
              <Button
                variant="secondary"
                size="lg"
                className="w-full min-w-[200px] bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 focus:ring-rose-500"
              >
                Donate Now
              </Button>
            </Link>
          </div>

          {/* Trust Indicator */}
          <div className="mt-12 pt-8 border-t border-gray-300">
            <p className="text-sm text-gray-600 font-medium">
              Guided by four principles: Human Law • Common Law • Natural Law • Universal Law
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

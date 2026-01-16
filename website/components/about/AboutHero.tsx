'use client';

import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Heart, Sparkles } from 'lucide-react';

/**
 * About page hero section
 * Introduces Charlie's mission with warmth and invitation
 */
export function AboutHero() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
      aria-labelledby="about-hero-heading"
    >
      <div className="absolute inset-0 bg-[url('/patterns/kindness-pattern.svg')] opacity-5" aria-hidden="true" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-amber-200 opacity-30" aria-hidden="true">
        <Sparkles size={48} />
      </div>
      <div className="absolute bottom-20 right-10 text-rose-200 opacity-30" aria-hidden="true">
        <Heart size={48} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full mb-6 shadow-sm">
            <Heart className="text-rose-500" size={20} aria-hidden="true" />
            <span className="text-sm font-semibold text-gray-700">
              A Father&apos;s Journey of Love
            </span>
          </div>

          {/* Main Headline */}
          <h1
            id="about-hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Join Me in a Mission of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              Hope and Recognition
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            My name is Charlie Miller. Twenty-five years ago, my son was born weighing just
            1 pound, 8 ounces. His journey has taught me everything about resilience, the
            power of kindness, and the extraordinary people who make miracles possible.
          </p>

          {/* Supporting text */}
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            This year, as we celebrate his 25th birthday, I invite you to be part of a
            movement that honors the teachers, doctors, caregivers, and everyday heroes
            who transform lives through compassion and dedication.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            role="group"
            aria-label="Primary actions"
          >
            <Link href="/stories/share" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full min-w-[200px]"
              >
                Share Your Story
              </Button>
            </Link>
            <Link href="/donate" className="w-full sm:w-auto">
              <Button
                variant="secondary"
                size="lg"
                className="w-full min-w-[200px]"
              >
                Support the Mission
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">25</div>
              <div className="text-sm text-gray-600">Years of Resilience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">44,000+</div>
              <div className="text-sm text-gray-600">Stories Collected</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">8</div>
              <div className="text-sm text-gray-600">Advisory Committee Members</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

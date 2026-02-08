'use client';

import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Heart, Sparkles, ArrowDown } from 'lucide-react';

/**
 * Hero section for the homepage
 * Features the main headline, mission statement, and primary CTAs
 * With beautiful animations and consistent theme
 */
export function HeroSection() {
  const scrollToContent = () => {
    const nextSection = document.getElementById('impact-stats');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative overflow-hidden min-h-[90vh] flex items-center"
      aria-labelledby="hero-heading"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/10 via-[var(--color-autism-gold)]/10 to-[var(--color-secondary)]/10" />

      {/* Floating blobs */}
      <div className="hero-blob hero-blob-1" aria-hidden="true" />
      <div className="hero-blob hero-blob-2" aria-hidden="true" />
      <div className="hero-blob hero-blob-3" aria-hidden="true" />

      {/* Animated pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 w-full">
        <div className="max-w-4xl mx-auto text-center">
          {/* Floating hearts decoration */}
          <div className="flex justify-center gap-4 mb-6 animate-fade-in-down">
            <Heart className="w-6 h-6 text-[var(--color-error)] animate-heartbeat" />
            <Sparkles className="w-6 h-6 text-[var(--color-autism-gold)] animate-sparkle animation-delay-200" />
            <Heart className="w-6 h-6 text-[var(--color-primary)] animate-heartbeat animation-delay-400" />
          </div>

          {/* Main Headline */}
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight animate-fade-in-up"
            style={{ color: '#111827' }}
          >
            Kindness for Autism:{' '}
            <span style={{ color: '#2563eb' }} className="block sm:inline">
              Honoring Lives & Changing the Future
            </span>
          </h1>

          {/* Mission Subtext */}
          <p className="text-lg sm:text-xl lg:text-2xl text-[var(--color-muted-foreground)] mb-8 leading-relaxed max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            A journey of <strong className="text-[var(--color-foreground)]">25 years</strong>,{' '}
            <strong className="text-[var(--color-foreground)]">52,384+ stories</strong> of kindness,
            and a mission to support autism advocacy through compassion, understanding, and meaningful action.
          </p>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-[var(--color-muted-foreground)] mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
            Founded by Charlie Miller, honoring his son&apos;s incredible journey from
            <span className="font-semibold text-[var(--color-primary)]"> 1lb 8oz at birth</span> to celebrating
            <span className="font-semibold text-[var(--color-secondary)]"> 25 years of life</span>.
            Join us in creating a future where kindness opens every door.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400"
            role="group"
            aria-label="Primary actions"
          >
            <Link href="/about" className="w-full sm:w-auto group">
              <Button
                variant="primary"
                size="lg"
                className="w-full min-w-[200px] btn-primary group-hover:scale-105 transition-transform"
              >
                <Heart className="w-5 h-5 mr-2 group-hover:animate-heartbeat" />
                Our Mission
              </Button>
            </Link>
            <Link href="/donate" className="w-full sm:w-auto group">
              <Button
                variant="secondary"
                size="lg"
                className="w-full min-w-[200px] btn-secondary group-hover:scale-105 transition-transform"
              >
                <Sparkles className="w-5 h-5 mr-2 group-hover:animate-sparkle" />
                Donate Now
              </Button>
            </Link>
          </div>

          {/* Trust Indicator - Four Laws */}
          <div className="mt-12 pt-8 border-t border-[var(--color-border)] animate-fade-in-up animation-delay-500">
            <p className="text-sm text-[var(--color-muted-foreground)] font-medium mb-4">
              Guided by four principles
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Human Law', 'Common Law', 'Natural Law', 'Universal Law'].map((law, index) => (
                <span
                  key={law}
                  className="px-4 py-2 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-sm font-medium text-[var(--color-foreground)] hover:border-[var(--color-primary)] hover:shadow-md transition-all cursor-default animate-fade-in-up"
                  style={{ animationDelay: `${600 + index * 100}ms` }}
                >
                  {law}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--color-muted-foreground)] hover:text-[var(--color-primary)] transition-colors cursor-pointer animate-fade-in animation-delay-700"
          aria-label="Scroll to content"
        >
          <span className="text-sm font-medium">Discover More</span>
          <ArrowDown className="w-5 h-5 scroll-indicator" />
        </button>
      </div>
    </section>
  );
}

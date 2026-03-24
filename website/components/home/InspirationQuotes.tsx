'use client';

import { Quote, Sun, Armchair, Sunrise } from 'lucide-react';
import { inspirationQuotes, type InspirationQuote } from '@/data/quotes';

const iconMap = {
  sunset: Sun,
  bench: Armchair,
  sunrise: Sunrise,
};

function QuoteCard({ quote }: { quote: InspirationQuote }) {
  const Icon = iconMap[quote.icon];

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-[var(--color-border)] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
      {/* Gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${quote.gradient} opacity-90`} />

      {/* Overlay pattern */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 p-8 sm:p-10 flex flex-col items-center text-center min-h-[320px] justify-center">
        <Quote className="w-10 h-10 text-white/60 mb-6 group-hover:scale-110 transition-transform duration-300" />

        <blockquote className="text-xl sm:text-2xl font-bold text-white leading-relaxed mb-6 max-w-sm">
          &ldquo;{quote.text}&rdquo;
        </blockquote>

        <div className="flex items-center gap-2 text-white/70">
          <Icon className="w-4 h-4" />
          <span className="text-sm font-medium">{quote.attribution}</span>
        </div>
      </div>

      {/* Decorative glow on hover */}
      <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:w-48 group-hover:h-48 transition-all duration-700" />
    </div>
  );
}

export function InspirationQuotes() {
  return (
    <section
      id="inspiration"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[var(--color-muted)] to-[var(--color-background)]"
      aria-labelledby="inspiration-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-autism-gold)]/10 text-[var(--color-autism-gold)] text-sm font-semibold mb-4">
            Words That Inspire
          </span>
          <h2
            id="inspiration-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: '#111827' }}
          >
            The Power of <span style={{ color: '#2563eb' }}>Kindness</span>
          </h2>
          <p className="text-lg sm:text-xl text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
            Inspiration from voices around the world reminding us what truly matters
          </p>
        </div>

        {/* Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {inspirationQuotes.map((quote) => (
            <QuoteCard key={quote.id} quote={quote} />
          ))}
        </div>
      </div>
    </section>
  );
}

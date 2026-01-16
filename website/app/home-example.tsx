/**
 * Example Home Page Implementation
 * This file demonstrates how to use all the home page components together
 * Replace the content in app/page.tsx with this structure when ready
 */

import {
  HeroSection,
  ImpactStats,
  FeaturedStories,
  DonationCTA,
  CoinOfBlessings,
} from '@/components/home';

export default function HomePage() {
  return (
    <main>
      {/* Hero Section - First impression with mission statement and CTAs */}
      <HeroSection />

      {/* Impact Statistics - Show the numbers that matter */}
      <ImpactStats />

      {/* Featured Stories - Share inspiring kindness stories */}
      <FeaturedStories />

      {/* Coin of Blessings - Highlight the symbolic coin and its journey */}
      <CoinOfBlessings />

      {/* Donation CTA - Encourage support with clear fund usage */}
      <DonationCTA />
    </main>
  );
}

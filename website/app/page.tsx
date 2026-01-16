import { Metadata } from 'next';
import {
  HeroSection,
  ImpactStats,
  FeaturedStories,
  DonationCTA,
  CoinOfBlessings,
} from '@/components/home';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Kindness for Autism: Honoring Lives & Changing the Future. Join Charlie Miller in spreading kindness and awareness for the autism community.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ImpactStats />
      <FeaturedStories />
      <CoinOfBlessings />
      <DonationCTA />
    </>
  );
}

import { Metadata } from 'next';
import {
  HeroSection,
  FeaturedVideo,
  YouTubeChannelCarousel,
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
      <FeaturedVideo
        videoId="UG1i4Fslo-0"
        title="Our Story"
        description="Watch our journey of spreading kindness and making a difference in the autism community."
      />
      <YouTubeChannelCarousel
        channelHandle="@MCKindness"
        title="Latest Videos"
        description="Subscribe to our channel for more inspiring stories and updates from our community."
      />
      <ImpactStats />
      <FeaturedStories />
      <CoinOfBlessings />
      <DonationCTA />
    </>
  );
}

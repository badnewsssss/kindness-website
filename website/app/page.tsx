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
    'The McKindness Foundation: Kindness for Autism. Over 25 years of autism advocacy and 52,000+ documented kindness stories. Founded by Charlie Miller.',
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

import { Metadata } from 'next';
import {
  AboutHero,
  CharlieStory,
  FourLawsSection,
  CoinJourney,
  Timeline,
} from '@/components/about';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    "Learn about The McKindness Foundation, Charlie Miller's mission, and how we've spent 25+ years spreading autism awareness, advocacy, and kindness-based support for families.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CharlieStory />
      <Timeline />
      <FourLawsSection />
      <CoinJourney />
    </>
  );
}

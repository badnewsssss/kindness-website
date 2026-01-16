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
    "Learn about Charlie Miller's mission, his son's journey, and how Kindness for Autism is spreading hope and recognition in the autism community.",
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

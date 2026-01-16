/**
 * Example About page composition
 * This demonstrates how to use the About components together
 *
 * Usage in app/about/page.tsx:
 *
 * import {
 *   AboutHero,
 *   CharlieStory,
 *   FourLawsSection,
 *   CoinJourney,
 *   Timeline,
 * } from '@/components/about';
 *
 * export default function AboutPage() {
 *   return (
 *     <main>
 *       <AboutHero />
 *       <CharlieStory />
 *       <FourLawsSection />
 *       <CoinJourney />
 *       <Timeline />
 *     </main>
 *   );
 * }
 */

import {
  AboutHero,
  CharlieStory,
  FourLawsSection,
  CoinJourney,
  Timeline,
} from './index';

export default function AboutPageExample() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Welcoming introduction to Charlie's mission */}
      <AboutHero />

      {/* Charlie's Personal Story - The deeply personal journey */}
      <CharlieStory />

      {/* Four Laws Philosophy - The guiding principles */}
      <FourLawsSection />

      {/* Coin of Blessings - The symbolic journey */}
      <CoinJourney />

      {/* Timeline - Key milestones over 25 years */}
      <Timeline />
    </main>
  );
}

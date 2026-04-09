import { Metadata } from 'next';
import { Container } from '@/components/layout';
import {
  DonateHero,
  FundAllocation,
  GoFundMeWidget,
} from '@/components/donate';
import { DonatePageClient } from './DonatePageClient';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Donate',
  description:
    'Support the McKindness Foundation. Your donation expands autism support programs, advocacy efforts, family education, and kindness-based outreach.',
};

export default function DonatePage() {
  return (
    <>
      <DonateHero />

      {/* Live Progress + Donation Form (client component) */}
      <DonatePageClient />

      {/* GoFundMe Option */}
      <section className="section bg-[var(--color-muted)]">
        <Container>
          <div className="mx-auto max-w-2xl text-center mb-8">
            <h2 className="mb-2 text-2xl font-bold text-[var(--color-foreground)] md:text-3xl">
              Also on GoFundMe
            </h2>
            <p className="text-[var(--color-muted-foreground)]">
              Prefer to donate through GoFundMe? Visit our campaign page.
            </p>
          </div>
          <div className="flex justify-center">
            <GoFundMeWidget variant="banner" />
          </div>
        </Container>
      </section>

      {/* Fund Allocation */}
      <section className="section">
        <Container>
          <FundAllocation />
        </Container>
      </section>

      {/* Trust & Transparency */}
      <section className="section bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">
        <Container>
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Your Trust Matters</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Responsible financial stewardship through professional accounting and
              transparency. Every dollar goes toward autism advocacy, family support, and
              kindness-based outreach.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <div className="text-center">
                <div className="text-4xl font-bold">100%</div>
                <div className="text-sm opacity-80">Mission-Focused</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">52K+</div>
                <div className="text-sm opacity-80">Kindness Stories</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">25+</div>
                <div className="text-sm opacity-80">Years of Advocacy</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Other Ways to Help */}
      <section className="section">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Other Ways to Support</h2>
            <p className="text-[var(--color-muted-foreground)] mb-8">
              Can&apos;t donate right now? There are many other ways to be part of
              something bigger than a fundraiser.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="card">
                <h3 className="font-semibold mb-2">Share This Campaign</h3>
                <p className="text-sm text-[var(--color-muted-foreground)]">
                  Share with your community. Understanding can prevent isolation.
                </p>
              </div>
              <div className="card">
                <h3 className="font-semibold mb-2">Leave Encouragement</h3>
                <p className="text-sm text-[var(--color-muted-foreground)]">
                  Leave a message of encouragement for families navigating autism.
                </p>
              </div>
              <div className="card">
                <h3 className="font-semibold mb-2">Partner With Us</h3>
                <p className="text-sm text-[var(--color-muted-foreground)]">
                  Organizations can help create real community-level change.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

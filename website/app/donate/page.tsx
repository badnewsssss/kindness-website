import { Metadata } from 'next';
import { Container } from '@/components/layout';
import {
  DonateHero,
  FundraisingProgress,
  DonationTiers,
  FundAllocation,
  PayPalButton,
  GoFundMeWidget,
} from '@/components/donate';

export const metadata: Metadata = {
  title: 'Donate',
  description:
    'Support the Kindness for Autism mission. Your donation helps us reach our $250,000 goal for accounting, motivational speakers, and legal support.',
};

export default function DonatePage() {
  return (
    <>
      <DonateHero />

      {/* Progress Section */}
      <section className="section">
        <Container>
          <div className="max-w-3xl mx-auto">
            <FundraisingProgress raised={75000} goal={250000} />
          </div>
        </Container>
      </section>

      {/* Donation Options */}
      <section className="section bg-[var(--color-muted)]">
        <Container>
          <DonationTiers />

          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <PayPalButton />
            <GoFundMeWidget />
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
              We believe in complete transparency. Every dollar you donate goes directly
              toward our mission of spreading kindness and supporting the autism community.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <div className="text-center">
                <div className="text-4xl font-bold">100%</div>
                <div className="text-sm opacity-80">Mission-Focused</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">44K+</div>
                <div className="text-sm opacity-80">Stories Shared</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">25</div>
                <div className="text-sm opacity-80">Years of Journey</div>
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
              Can&apos;t donate right now? There are many other ways to support our
              mission and spread kindness.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="card">
                <h3 className="font-semibold mb-2">Share Our Story</h3>
                <p className="text-sm text-[var(--color-muted-foreground)]">
                  Spread the word on social media and help us reach more people.
                </p>
              </div>
              <div className="card">
                <h3 className="font-semibold mb-2">Volunteer</h3>
                <p className="text-sm text-[var(--color-muted-foreground)]">
                  Join our team of dedicated volunteers making a difference.
                </p>
              </div>
              <div className="card">
                <h3 className="font-semibold mb-2">Partner With Us</h3>
                <p className="text-sm text-[var(--color-muted-foreground)]">
                  Businesses and organizations can partner for greater impact.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

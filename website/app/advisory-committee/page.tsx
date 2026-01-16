'use client';

import { Container } from '@/components/layout';
import {
  CommitteeHero,
  MemberGrid,
  JoinCommittee,
} from '@/components/committee';
import { committeeMembers } from '@/data/committee';

export default function AdvisoryCommitteePage() {
  return (
    <>
      <CommitteeHero />

      {/* Committee Members */}
      <section className="section">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Dedicated Team</h2>
            <p className="text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
              Our Advisory Committee brings together experts from various fields, united
              by their commitment to making a difference in the autism community.
            </p>
          </div>

          <MemberGrid members={committeeMembers} />
        </Container>
      </section>

      {/* Mission Alignment */}
      <section className="section bg-[var(--color-muted)]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Committee Responsibilities
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold mb-2">Accounting & Operations</h3>
                <p className="text-[var(--color-muted-foreground)]">
                  Ensuring transparent financial management and supporting outreach
                  efforts through merchandise and awareness campaigns.
                </p>
              </div>
              <div className="card text-center">
                <div className="text-4xl mb-4">🎤</div>
                <h3 className="text-xl font-semibold mb-2">Education & Advocacy</h3>
                <p className="text-[var(--color-muted-foreground)]">
                  Inspiring and educating communities on the power of kindness, inclusion,
                  and understanding for the autism community.
                </p>
              </div>
              <div className="card text-center">
                <div className="text-4xl mb-4">⚖️</div>
                <h3 className="text-xl font-semibold mb-2">Legal & Partnerships</h3>
                <p className="text-[var(--color-muted-foreground)]">
                  Managing contracts, negotiations, and partnerships to ensure long-term
                  impact and sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <JoinCommittee />
    </>
  );
}

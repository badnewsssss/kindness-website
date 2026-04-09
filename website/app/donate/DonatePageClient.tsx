'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Container } from '@/components/layout';
import { LiveDonationTotal } from '@/components/donate';

// Dynamically import PayPal form with SSR disabled to prevent
// prerender errors (PayPal hooks require browser context)
const PayPalDonationForm = dynamic(
  () =>
    import('@/components/donate/PayPalDonationForm').then(
      (mod) => mod.PayPalDonationForm
    ),
  { ssr: false, loading: () => <div className="h-96 animate-pulse rounded-2xl bg-gray-100" /> }
);

/**
 * Client-side portion of the donate page.
 * Manages the connection between the donation form and the live total display.
 * When a donation completes, it triggers a refresh of the totals.
 */
export function DonatePageClient() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleDonationComplete = () => {
    // Trigger a refresh of the donation totals after a short delay
    // to allow the server to process and save the record
    setTimeout(() => {
      setRefreshTrigger((prev) => prev + 1);
    }, 1000);
  };

  return (
    <section className="section">
      <Container>
        <div className="mx-auto max-w-4xl">
          {/* Live Donation Progress */}
          <div className="mb-12">
            <LiveDonationTotal refreshTrigger={refreshTrigger} />
          </div>

          {/* Donation Form with PayPal */}
          <div className="mx-auto max-w-lg">
            <PayPalDonationForm onDonationComplete={handleDonationComplete} />
          </div>
        </div>
      </Container>
    </section>
  );
}

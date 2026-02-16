'use client';

import { useState } from 'react';
import { Container } from '@/components/layout';
import { LiveDonationTotal, PayPalDonationForm } from '@/components/donate';

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

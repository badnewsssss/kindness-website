/**
 * Donation tracking store
 *
 * Uses in-memory storage for serverless (Vercel) compatibility.
 * PayPal capture succeeds even if recording fails — the payment
 * itself is handled by PayPal, this is just for display tracking.
 *
 * For persistent tracking, replace with a database (Supabase, etc.)
 */

export interface DonationRecord {
  id: string;
  amount: number;
  currency: string;
  paypalOrderId: string;
  payerName?: string;
  payerEmail?: string;
  timestamp: string;
  status: 'completed' | 'pending' | 'failed';
}

export interface DonationData {
  totalRaised: number;
  donationCount: number;
  goal: number;
  donations: DonationRecord[];
  gofundmeOffset: number;
  gofundmeDonorCount: number;
  gofundmeLastUpdated: string | null;
}

// In-memory store (resets on cold start, but payments are safe in PayPal)
let donationData: DonationData = {
  totalRaised: 0,
  donationCount: 0,
  goal: 250000,
  donations: [],
  gofundmeOffset: 0,
  gofundmeDonorCount: 0,
  gofundmeLastUpdated: null,
};

export async function getDonationData(): Promise<DonationData> {
  return donationData;
}

export async function recordDonation(donation: Omit<DonationRecord, 'id' | 'timestamp'>): Promise<DonationRecord> {
  const record: DonationRecord = {
    ...donation,
    id: `don_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    timestamp: new Date().toISOString(),
  };

  donationData.donations.push(record);
  donationData.totalRaised += donation.amount;
  donationData.donationCount += 1;

  return record;
}

export async function updateGoFundMeOffset(amount: number, donorCount: number): Promise<void> {
  donationData.gofundmeOffset = amount;
  donationData.gofundmeDonorCount = donorCount;
  donationData.gofundmeLastUpdated = new Date().toISOString();
}

export async function getDonationTotals(): Promise<{
  totalRaised: number;
  paypalTotal: number;
  gofundmeTotal: number;
  donationCount: number;
  paypalDonorCount: number;
  gofundmeDonorCount: number;
  goal: number;
  gofundmeLastUpdated: string | null;
}> {
  const data = donationData;
  const paypalTotal = data.totalRaised;
  const gofundmeTotal = data.gofundmeOffset || 0;
  return {
    totalRaised: paypalTotal + gofundmeTotal,
    paypalTotal,
    gofundmeTotal,
    donationCount: data.donationCount + (data.gofundmeDonorCount || 0),
    paypalDonorCount: data.donationCount,
    gofundmeDonorCount: data.gofundmeDonorCount || 0,
    goal: data.goal,
    gofundmeLastUpdated: data.gofundmeLastUpdated || null,
  };
}

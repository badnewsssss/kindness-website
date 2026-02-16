/**
 * Donation tracking store
 *
 * Uses a JSON file for persistent storage of donation records and totals.
 * In production, replace with a proper database (PostgreSQL, Supabase, etc.)
 */

import { promises as fs } from 'fs';
import path from 'path';

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
}

const DATA_DIR = path.join(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'donations.json');

const DEFAULT_DATA: DonationData = {
  totalRaised: 0,
  donationCount: 0,
  goal: 250000,
  donations: [],
};

async function ensureDataFile(): Promise<void> {
  try {
    await fs.access(DATA_DIR);
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true });
  }
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.writeFile(DATA_FILE, JSON.stringify(DEFAULT_DATA, null, 2));
  }
}

export async function getDonationData(): Promise<DonationData> {
  await ensureDataFile();
  const raw = await fs.readFile(DATA_FILE, 'utf-8');
  return JSON.parse(raw) as DonationData;
}

export async function recordDonation(donation: Omit<DonationRecord, 'id' | 'timestamp'>): Promise<DonationRecord> {
  const data = await getDonationData();

  const record: DonationRecord = {
    ...donation,
    id: `don_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    timestamp: new Date().toISOString(),
  };

  data.donations.push(record);
  data.totalRaised += donation.amount;
  data.donationCount += 1;

  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
  return record;
}

export async function getDonationTotals(): Promise<{
  totalRaised: number;
  donationCount: number;
  goal: number;
}> {
  const data = await getDonationData();
  return {
    totalRaised: data.totalRaised,
    donationCount: data.donationCount,
    goal: data.goal,
  };
}

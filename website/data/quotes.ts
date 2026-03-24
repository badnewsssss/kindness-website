export interface InspirationQuote {
  id: string;
  text: string;
  attribution?: string;
  gradient: string;
  icon: 'sunset' | 'bench' | 'sunrise';
}

export const inspirationQuotes: InspirationQuote[] = [
  {
    id: 'quote-001',
    text: 'Raise your children to be impressed by kindness, loyalty and humility, not just wealth, possessions and power.',
    attribution: '@positiveenergy_plus',
    gradient: 'from-amber-900 via-orange-700 to-yellow-500',
    icon: 'sunset',
  },
  {
    id: 'quote-002',
    text: "When our time on earth is done, money or material things will not matter. But the love, time and kindness we've given others will shine and live on forever.",
    attribution: '@the_fabulous_fifties',
    gradient: 'from-slate-600 via-stone-500 to-slate-400',
    icon: 'bench',
  },
  {
    id: 'quote-003',
    text: 'Happiness is the new rich. Inner peace is the new success. Health is the new wealth. Kindness is the new cool.',
    attribution: '@powerofpositivity',
    gradient: 'from-sky-700 via-teal-600 to-amber-400',
    icon: 'sunrise',
  },
];

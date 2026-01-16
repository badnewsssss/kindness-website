# Donate Components

A comprehensive set of donation page components for the Kindness for Autism website.

## Components

### DonateHero
Hero section with compelling headline and mission statement.

```tsx
import { DonateHero } from '@/components/donate';

<DonateHero />
```

**Features:**
- Gradient background with warm colors
- Compelling headline and subheadline
- Decorative puzzle piece accents
- Scroll indicator
- Fully responsive

---

### FundraisingProgress
Animated progress bar showing fundraising goals.

```tsx
import { FundraisingProgress } from '@/components/donate';

<FundraisingProgress
  raised={75000}
  goal={250000}
  animate={true}
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| raised | number | required | Amount raised so far |
| goal | number | required | Fundraising goal |
| animate | boolean | true | Enable animation on mount |
| className | string | - | Additional CSS classes |

**Features:**
- Animated counter and progress bar
- ARIA attributes for accessibility
- Milestone markers
- Percentage display
- Currency formatting

---

### DonationTiers
Interactive donation tier cards with predefined amounts.

```tsx
import { DonationTiers } from '@/components/donate';

<DonationTiers
  onSelectTier={(amount) => console.log('Selected:', amount)}
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| onSelectTier | (amount: number) => void | - | Callback when tier selected |
| className | string | - | Additional CSS classes |

**Tiers:**
- $25 - Supporter
- $50 - Advocate
- $100 - Champion (Most Popular)
- $250 - Leader
- $500 - Hero
- Custom amount

**Features:**
- Interactive tier selection
- Custom amount input
- Impact descriptions
- Popular tier badge
- Keyboard navigation
- Screen reader support

---

### PayPalButton
PayPal donation button (placeholder implementation).

```tsx
import { PayPalButton } from '@/components/donate';

<PayPalButton
  amount={100}
  size="lg"
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| amount | number | - | Optional preset amount |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Button size |
| className | string | - | Additional CSS classes |

**Note:** This is a placeholder. In production, integrate with PayPal SDK.

---

### GoFundMeWidget
GoFundMe campaign widget with button and banner variants.

```tsx
import { GoFundMeWidget } from '@/components/donate';

// Button variant
<GoFundMeWidget variant="button" />

// Banner variant
<GoFundMeWidget variant="banner" />
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| campaignUrl | string | placeholder | GoFundMe campaign URL |
| variant | 'button' \| 'banner' | 'button' | Display style |
| className | string | - | Additional CSS classes |

**Features:**
- Button and banner variants
- Opens in new tab
- GoFundMe branding colors

---

### FundAllocation
Visual pie chart showing fund distribution.

```tsx
import { FundAllocation } from '@/components/donate';

<FundAllocation animate={true} />
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| animate | boolean | true | Enable animation on mount |
| className | string | - | Additional CSS classes |

**Allocation:**
- 40% - Accounting & Operations
- 35% - Speaker & Programs
- 25% - Legal & Compliance

**Features:**
- Animated SVG pie chart
- Interactive legend
- Hover effects
- Transparency statement
- Responsive layout

---

## Example Usage

Complete donate page example:

```tsx
'use client';

import { useState } from 'react';
import {
  DonateHero,
  FundraisingProgress,
  DonationTiers,
  PayPalButton,
  GoFundMeWidget,
  FundAllocation,
} from '@/components/donate';

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  return (
    <main>
      <DonateHero />

      <section className="section container">
        <FundraisingProgress raised={75000} goal={250000} />
      </section>

      <section className="section container">
        <DonationTiers onSelectTier={setSelectedAmount} />
      </section>

      <section className="section container bg-[var(--color-muted)]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-6 text-2xl font-bold">Choose Your Payment Method</h2>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <PayPalButton amount={selectedAmount} size="lg" />
            <GoFundMeWidget variant="button" />
          </div>
        </div>
      </section>

      <section className="section container">
        <FundAllocation />
      </section>

      <section className="section container">
        <GoFundMeWidget variant="banner" />
      </section>
    </main>
  );
}
```

## Accessibility Features

All components include:
- Proper ARIA labels and roles
- Keyboard navigation support
- Focus visible states
- Screen reader announcements
- Semantic HTML
- Color contrast compliance

## Styling

Components use CSS variables from `globals.css`:
- `--color-primary` - Primary blue
- `--color-secondary` - Green
- `--color-autism-blue` - Autism awareness blue
- `--color-autism-gold` - Autism awareness gold
- Plus all standard theme colors

## Production Integration

### PayPal
Replace the placeholder in `PayPalButton.tsx` with PayPal SDK integration:

```tsx
// Install PayPal SDK
npm install @paypal/react-paypal-js

// Use PayPal buttons
import { PayPalButtons } from '@paypal/react-paypal-js';
```

### GoFundMe
Update `campaignUrl` prop with your actual campaign URL.

## Type Safety

All components are fully typed with TypeScript. Import types:

```tsx
import type {
  DonationTier,
  AllocationCategory
} from '@/components/donate';
```

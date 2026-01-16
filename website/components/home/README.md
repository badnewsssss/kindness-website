# Home Page Components

This directory contains all components for the "Kindness for Autism" nonprofit homepage.

## Components Overview

### 1. HeroSection.tsx
Main hero section with headline and primary CTAs.

**Features:**
- Large headline: "Kindness for Autism: Honoring Lives & Changing the Future"
- Mission subtext about Charlie Miller's 25-year journey
- Two prominent CTA buttons (Our Mission, Donate Now)
- Warm gradient background (amber/orange/rose)
- Trust indicator showing four guiding principles
- Fully accessible with ARIA labels
- Responsive design (mobile-first)

**Usage:**
```tsx
import { HeroSection } from '@/components/home';

<HeroSection />
```

### 2. ImpactStats.tsx
Statistics section showcasing key metrics.

**Features:**
- 44,000+ Stories Collected
- 25 Years of Journey
- $250,000 Fundraising Goal
- 8 Committee Members
- Animated counters with intersection observer
- Responsive grid layout (1 col mobile, 2 col tablet, 4 col desktop)
- Hover effects on cards

**Usage:**
```tsx
import { ImpactStats } from '@/components/home';

<ImpactStats />
```

### 3. FeaturedStories.tsx
Stories preview section with cards.

**Features:**
- Section header "Stories of Kindness"
- Grid of 3 featured story cards
- Each card includes: title, excerpt, author, date, category
- "View All Stories" CTA button
- Placeholder data (ready for API integration)
- Category badges
- Read more links

**Usage:**
```tsx
import { FeaturedStories } from '@/components/home';

<FeaturedStories />
```

**Data Structure:**
```typescript
interface Story {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
}
```

### 4. DonationCTA.tsx
Donation call-to-action section.

**Features:**
- Compelling headline about joining the mission
- Fund usage breakdown (accounting, speakers, legal)
- Visual icons for each fund category
- Progress bar showing fundraising goal
- Two donation buttons (PayPal, GoFundMe)
- External links with proper security attributes
- Warm background gradient

**Usage:**
```tsx
import { DonationCTA } from '@/components/home';

<DonationCTA />
```

### 5. CoinOfBlessings.tsx
Special section about the Coin of Blessings & Legacy.

**Features:**
- Image placeholder for the coin (visual representation)
- Description of coin's journey (athletes, diplomats, presidents)
- Symbolism explanation (unity, perseverance, kindness)
- Three core values with checkmark icons
- Notable encounters section
- 2-column layout (image + content)
- Responsive design

**Usage:**
```tsx
import { CoinOfBlessings } from '@/components/home';

<CoinOfBlessings />
```

## Complete Homepage Example

```tsx
import {
  HeroSection,
  ImpactStats,
  FeaturedStories,
  DonationCTA,
  CoinOfBlessings,
} from '@/components/home';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ImpactStats />
      <FeaturedStories />
      <CoinOfBlessings />
      <DonationCTA />
    </main>
  );
}
```

## Design System

### Colors Used
- **Amber/Orange/Rose**: Warm, welcoming gradient
- **Primary CTA**: Amber 600 → Orange 600
- **Secondary CTA**: Rose 600 → Pink 600
- **Text**: Gray scale (900, 700, 600)
- **Backgrounds**: Gradient combinations of warm colors

### Typography
- **Headlines**: 3xl → 5xl (responsive)
- **Body**: Base → xl (responsive)
- **Font**: Inherits from layout (Geist Sans)

### Spacing
- **Section Padding**: py-16 sm:py-20 lg:py-24
- **Container**: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8

## Accessibility Features

- Semantic HTML (section, main, nav)
- ARIA labels and landmarks
- Proper heading hierarchy
- Focus management with visible focus rings
- Keyboard navigation support
- Screen reader friendly
- High contrast text
- Responsive touch targets (min 44x44px)

## Responsive Breakpoints

- **Mobile**: Default (< 640px)
- **Tablet**: sm: (≥ 640px)
- **Desktop**: lg: (≥ 1024px)

## Next Steps

1. Replace placeholder story data with actual API calls
2. Add actual coin image to CoinOfBlessings component
3. Update donation links with real PayPal/GoFundMe URLs
4. Implement analytics tracking on CTAs
5. Add loading states for async data
6. Create story detail pages (/stories/[id])
7. Build mission page (/mission)
8. Build donate page (/donate)

## Dependencies

- Next.js 15
- React 18+
- Tailwind CSS
- @/components/ui/Button
- @/components/ui/Card
- @/lib/utils (cn helper)

## Performance Considerations

- Uses 'use client' only where needed (interactivity)
- Lazy loading images with loading="lazy"
- Intersection Observer for animated counters
- Optimized re-renders with useCallback
- No unnecessary state management

## Testing Checklist

- [ ] All links navigate correctly
- [ ] Buttons have proper hover/focus states
- [ ] Animated counters trigger on scroll
- [ ] Responsive layout works on all breakpoints
- [ ] Screen reader announces all content
- [ ] Keyboard navigation works
- [ ] External links open in new tab with security
- [ ] Images have proper alt text

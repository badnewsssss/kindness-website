# About Page Components

Emotional, accessible components that tell Charlie Miller's inspiring personal story and the mission behind Kindness for Autism.

## Components Overview

### 1. AboutHero
Hero section with "Join Me in a Mission of Hope and Recognition" messaging.

**Features:**
- Personal invitation from Charlie Miller
- Key statistics (25 years, 44,000+ stories, 8 committee members)
- Decorative elements (hearts, sparkles)
- CTA buttons for sharing stories and donations
- Gradient background with subtle pattern
- Fully responsive and accessible

**Usage:**
```tsx
import { AboutHero } from '@/components/about';

<AboutHero />
```

---

### 2. CharlieStory
Personal narrative of Charlie's son's journey from 1lb 8oz birth to 25 years of life with autism.

**Features:**
- Two-column layout (story + impact cards)
- Timeline of birth and autism diagnosis
- Recognition of caregivers and support network
- Father's promise and commitment
- Inspirational quote
- Border-accented cards with icons

**Usage:**
```tsx
import { CharlieStory } from '@/components/about';

<CharlieStory />
```

---

### 3. FourLawsSection
Visual presentation of the four guiding principles: Human Law, Common Law, Natural Law, Universal Law.

**Features:**
- Four interactive cards with unique colors
- Icon representation for each law
- Principle descriptions and practical applications
- Integration statement explaining how laws guide the mission
- Visual connection diagram
- Responsive grid layout

**Usage:**
```tsx
import { FourLawsSection } from '@/components/about';

<FourLawsSection />
```

**Laws Breakdown:**
- **Human Law** (Blue) - Justice and governance frameworks
- **Common Law** (Green) - Shared experience and tradition
- **Natural Law** (Amber) - Fundamental principles and conscience
- **Universal Law** (Purple) - Timeless principles connecting humanity

---

### 4. CoinJourney
Story of the Coin of Blessings & Legacy and its journey to athletes, diplomats, and presidents.

**Features:**
- Symbol explanation with warm gradient card
- Three milestone categories (Champions, Diplomats, Presidents)
- Meaning breakdown (Unity, Perseverance, Recognition, Legacy)
- Inspiring call to action
- Icon-driven visual design

**Usage:**
```tsx
import { CoinJourney } from '@/components/about';

<CoinJourney />
```

---

### 5. Timeline
Visual timeline of key milestones over 25 years.

**Features:**
- Vertical timeline with alternating layout (desktop)
- Six key events from 1999 to 2024
- Gradient connector line
- Year badges and icons
- Responsive mobile-first design
- Future-focused closing card

**Usage:**
```tsx
import { Timeline } from '@/components/about';

<Timeline />
```

**Timeline Events:**
1. **1999** - A Miraculous Beginning (1lb 8oz birth)
2. **2000-2005** - Early Challenges & Autism Diagnosis
3. **2010** - Building Community & Collecting Stories
4. **2018** - 44,000 Stories Milestone
5. **2023** - Advisory Committee Formation
6. **2024** - Celebrating 25 Years

---

## Complete Page Example

```tsx
import {
  AboutHero,
  CharlieStory,
  FourLawsSection,
  CoinJourney,
  Timeline,
} from '@/components/about';

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <CharlieStory />
      <FourLawsSection />
      <CoinJourney />
      <Timeline />
    </main>
  );
}
```

---

## Design Principles

### Emotional Warmth
- Gradient backgrounds (blue, indigo, purple for hope; amber, rose for warmth)
- Personal, first-person narrative from Charlie
- Inspirational quotes and statements
- Recognition of unsung heroes

### Accessibility
- Semantic HTML (section, headings, aria-labels)
- ARIA landmarks and descriptions
- Keyboard navigation support
- Screen reader friendly
- High contrast text
- Proper heading hierarchy

### Visual Hierarchy
- Large, bold headlines with gradient text
- Icon-driven sections for quick scanning
- Card-based layouts for content organization
- Consistent spacing and padding
- Color-coded categories

### Responsiveness
- Mobile-first approach
- Stacked layouts on mobile
- Grid layouts on tablet/desktop
- Touch-friendly buttons
- Readable font sizes across devices

---

## Color Palette

| Section | Primary Color | Usage |
|---------|---------------|-------|
| AboutHero | Blue → Indigo → Purple | Hope and recognition |
| CharlieStory | Blue, Rose, Purple | Personal journey |
| FourLawsSection | Blue, Green, Amber, Purple | Four distinct laws |
| CoinJourney | Amber, Orange | Warmth and legacy |
| Timeline | Full spectrum | 25-year journey |

---

## Icons Used (from lucide-react)

- Heart - Love and compassion
- Sparkles - Hope and magic
- Calendar - Timeline and milestones
- Baby - Birth and beginning
- Users - Community and support
- BookOpen - Stories collection
- UserPlus - Advisory committee
- Coins - Legacy and recognition
- Trophy - Champions and athletes
- Handshake - Diplomats and unity
- Globe - Universal principles
- Scale - Justice and law
- Leaf - Natural principles

---

## Accessibility Features

All components include:
- Proper ARIA labels and landmarks
- Semantic HTML structure
- Focus management
- Keyboard navigation
- Screen reader support
- High contrast ratios
- Descriptive alt text for icons
- Logical tab order

---

## Performance

- Client-side components ('use client')
- Lazy loading for images
- Optimized icon imports
- Efficient re-renders
- No unnecessary dependencies

---

## Dependencies

Required packages:
- `lucide-react` - Icons
- `@/components/ui/Button` - CTA buttons
- `@/components/ui/Card` - Card layouts
- `next/link` - Navigation
- `@/lib/utils` - Utility functions (cn)

---

## Customization

### Changing Colors
Edit the color classes in each component:
```tsx
// From
className="text-blue-600"

// To
className="text-[#YourColor]"
```

### Modifying Content
All content is hardcoded for easy modification. Update text directly in component files.

### Adding Sections
Follow the existing pattern:
1. Create new component in `components/about/`
2. Export from `index.ts`
3. Import and use in page

---

## Testing Checklist

- [ ] Hero displays correctly with stats
- [ ] Charlie's story is readable and formatted
- [ ] Four laws cards are interactive
- [ ] Coin journey tells complete story
- [ ] Timeline events are in order
- [ ] All links work correctly
- [ ] Mobile responsive on all screen sizes
- [ ] Accessible with keyboard navigation
- [ ] Screen reader friendly
- [ ] Colors and gradients render properly
- [ ] Icons load correctly
- [ ] Buttons are clickable
- [ ] Text is readable (contrast)

---

## File Structure

```
components/about/
├── AboutHero.tsx          # Hero section
├── CharlieStory.tsx       # Personal story
├── FourLawsSection.tsx    # Philosophy
├── CoinJourney.tsx        # Coin story
├── Timeline.tsx           # Milestones
├── index.ts               # Barrel export
├── about-page-example.tsx # Example usage
└── COMPONENTS.md          # Documentation
```

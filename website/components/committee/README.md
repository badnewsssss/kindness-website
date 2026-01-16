# Committee Components

Advisory Committee page components for the Kindness for Autism nonprofit website.

## Components

### MemberCard

Committee member card component displaying member information, expertise badges, and social links.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| member | CommitteeMember | required | Committee member data object |
| showFullBio | boolean | false | Whether to show full bio or excerpt |
| className | string | - | Additional CSS classes |

**Features:**
- Responsive image with Next.js Image optimization
- Photo placeholder with aspect ratio 1:1
- Name with optional pronouns
- Title and organization
- Bio excerpt (150 chars) or full bio
- Expertise badges with primary variant
- Social media links (LinkedIn, Twitter, Facebook, Instagram, Website, Email)
- Hover effect with shadow and transform
- Fully accessible with ARIA labels

**Usage:**
```tsx
import { MemberCard } from '@/components/committee';
import { committeeMembers } from '@/data/committee';

<MemberCard member={committeeMembers[0]} />
<MemberCard member={committeeMembers[0]} showFullBio />
```

---

### MemberGrid

Responsive grid layout for displaying committee member cards.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| members | CommitteeMember[] | required | Array of committee members |
| showFullBio | boolean | false | Pass through to MemberCard |
| emptySlots | number | 0 | Number of empty position cards to show |
| className | string | - | Additional CSS classes |

**Features:**
- Responsive grid layout (1 column mobile, 2 tablet, 4 desktop)
- Automatic sorting by `order` property
- Filters inactive members (where `active === false`)
- Empty state cards for unfilled positions
- Consistent gap spacing (6 units)

**Usage:**
```tsx
import { MemberGrid } from '@/components/committee';
import { committeeMembers } from '@/data/committee';

// All members
<MemberGrid members={committeeMembers} />

// With empty positions
<MemberGrid
  members={committeeMembers}
  emptySlots={2}
/>

// With full bios
<MemberGrid
  members={committeeMembers}
  showFullBio
/>
```

---

### CommitteeHero

Hero section for the Advisory Committee page with headline, description, and CTAs.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | string | "Our Advisory Committee" | Hero headline |
| description | string | default text | Hero description text |
| showCTA | boolean | true | Whether to show CTA buttons |
| onCTAClick | function | scroll to #join-committee | Custom CTA handler |
| className | string | - | Additional CSS classes |

**Features:**
- Gradient background (blue-50 to green-50)
- Centered content layout (max-width 4xl)
- Two CTA buttons (Join Committee, Meet Members)
- Smooth scroll to sections
- Decorative blur elements
- Fully responsive

**Usage:**
```tsx
import { CommitteeHero } from '@/components/committee';

<CommitteeHero />

// Custom content
<CommitteeHero
  title="Meet Our Leadership"
  description="Custom description text..."
  onCTAClick={() => console.log('Custom CTA')}
/>

// Without CTA
<CommitteeHero showCTA={false} />
```

---

### JoinCommittee

Call-to-action section inviting professionals to join the advisory committee.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | string | "Join Our Advisory Committee" | Section title |
| description | string | default text | Section description |
| showQualifications | boolean | true | Show qualifications list |
| contactEmail | string | committee@kindnessforautism.org | Contact email |
| contactPhone | string | - | Optional contact phone |
| className | string | - | Additional CSS classes |

**Features:**
- Blue gradient background (blue-600 to blue-800)
- Areas of expertise badges
- Qualifications checklist
- Benefits grid (4 items)
- Contact CTAs (email & phone)
- Backdrop blur cards
- Section ID `join-committee` for anchor linking
- Fully accessible

**Usage:**
```tsx
import { JoinCommittee } from '@/components/committee';

<JoinCommittee />

// With custom contact info
<JoinCommittee
  contactEmail="info@example.org"
  contactPhone="(555) 123-4567"
/>

// Minimal version
<JoinCommittee
  showQualifications={false}
  title="Get Involved"
  description="Help us make a difference."
/>
```

---

## Data Requirements

Components expect data from `@/data/committee.ts` matching the `CommitteeMember` interface from `@/types/committee.ts`.

**Required fields:**
- `id` - Unique identifier
- `name` - Member name
- `title` - Position/role title
- `bio` - Biography text
- `expertise` - Array of expertise areas
- `image` - Object with `src`, `alt`, optional `blurDataUrl`
- `order` - Display order (lower numbers first)

**Optional fields:**
- `organization` - Affiliated organization
- `social` - Social media links object
- `pronouns` - Preferred pronouns
- `quote` - Personal message
- `active` - Whether member is active (default: true)
- `joinedDate` - ISO 8601 date string

## Example Page Implementation

```tsx
import {
  CommitteeHero,
  MemberGrid,
  JoinCommittee
} from '@/components/committee';
import { committeeMembers } from '@/data/committee';

export default function CommitteePage() {
  return (
    <main>
      <CommitteeHero />

      <section id="committee-members" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <MemberGrid
            members={committeeMembers}
            emptySlots={0}
          />
        </div>
      </section>

      <JoinCommittee
        contactEmail="committee@kindnessforautism.org"
        contactPhone="(555) 123-4567"
      />
    </main>
  );
}
```

## Accessibility Features

All components include:
- Semantic HTML elements (`<section>`, `<article>`, etc.)
- ARIA labels for interactive elements
- Keyboard navigation support
- Screen reader-friendly text
- Sufficient color contrast
- Focus indicators
- Proper heading hierarchy
- Alt text for images
- Loading states for images

## Responsive Breakpoints

- **Mobile**: < 640px (1 column)
- **Tablet**: 640px - 1024px (2 columns)
- **Desktop**: > 1024px (4 columns)

## Dependencies

- Next.js 15 (Image component)
- React 18+
- TypeScript
- Tailwind CSS
- `@/lib/utils` (cn utility)
- `@/components/ui` (Button, Card, Badge, BadgeGroup)
- `@/types/committee` (TypeScript types)
- `@/data/committee` (Committee data)

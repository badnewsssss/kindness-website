# Stories Components

Collection of React components for displaying and managing kindness stories on the Kindness for Autism nonprofit website.

## Components Overview

### StoryCard
Story preview card with image, title, excerpt, author info, and metadata.

**Props:**
- `story` (Story) - Story data object
- `featured` (boolean) - Display as featured (larger) card

**Features:**
- Featured image support (optional)
- Category badge
- Author name and location
- Date and read time
- Hover animations
- Accessible card link pattern

**Usage:**
```tsx
import { StoryCard } from '@/components/stories';

<StoryCard
  story={{
    id: '1',
    title: 'A Teacher\'s Patience',
    excerpt: 'When my son started having meltdowns...',
    author: { name: 'Sarah Johnson', location: 'Portland, OR' },
    category: 'Educational Support',
    date: new Date(),
    readTime: 5,
    imageUrl: 'https://...',
  }}
/>
```

---

### StoryGrid
Responsive grid layout for displaying multiple stories.

**Props:**
- `stories` (Story[]) - Array of story objects
- `emptyMessage` (string) - Message to display when no stories
- `highlightFeatured` (boolean) - Show featured stories in larger cards

**Features:**
- Responsive 1-2-3 column grid
- Featured story highlighting
- Empty state with icon
- Automatic story organization

**Usage:**
```tsx
import { StoryGrid } from '@/components/stories';

<StoryGrid
  stories={stories}
  highlightFeatured
  emptyMessage="No stories found."
/>
```

---

### StorySearch
Search and filter controls for stories.

**Props:**
- `categories` (string[]) - Category options
- `onSearchChange` ((query: string) => void) - Search callback
- `onCategoryChange` ((category: string) => void) - Category filter callback
- `onSortChange` ((sort: SortOption) => void) - Sort callback
- `onClearFilters` (() => void) - Clear filters callback
- `resultsCount` (number) - Number of results to display
- `showResultsCount` (boolean) - Show results count

**Features:**
- Search input with icon
- Category dropdown filter
- Sort options (newest, oldest, most-liked)
- Clear filters button
- Live region for results count
- Full accessibility

**Usage:**
```tsx
import { StorySearch } from '@/components/stories';

<StorySearch
  onSearchChange={(query) => setSearchQuery(query)}
  onCategoryChange={(category) => setCategory(category)}
  onSortChange={(sort) => setSort(sort)}
  onClearFilters={() => clearAll()}
  resultsCount={stories.length}
  showResultsCount
/>
```

---

### Pagination
Pagination controls for navigating through story pages.

**Props:**
- `currentPage` (number) - Current page number
- `totalPages` (number) - Total number of pages
- `totalItems` (number) - Total number of items
- `itemsPerPage` (number) - Items per page
- `onPageChange` ((page: number) => void) - Page change callback
- `onItemsPerPageChange` ((items: number) => void) - Items per page callback
- `itemsPerPageOptions` (number[]) - Options for items per page
- `showItemsPerPage` (boolean) - Show items per page selector

**Features:**
- Previous/Next buttons
- First/Last page buttons
- Page number buttons
- "Showing X-Y of Z" text
- Items per page selector
- Keyboard accessible
- Full ARIA labels

**Usage:**
```tsx
import { Pagination } from '@/components/stories';

<Pagination
  currentPage={currentPage}
  totalPages={100}
  totalItems={1200}
  itemsPerPage={12}
  onPageChange={(page) => setCurrentPage(page)}
  onItemsPerPageChange={(items) => setItemsPerPage(items)}
  showItemsPerPage
/>
```

---

### StorySubmitCTA
Call-to-action component encouraging visitors to share their stories.

**Props:**
- `title` (string) - CTA title
- `description` (string) - CTA description
- `buttonText` (string) - Button text
- `buttonHref` (string) - Button link
- `variant` ('default' | 'compact' | 'banner') - Display variant

**Features:**
- Three display variants
- Warm, inviting design
- Decorative icons
- Accessible button links

**Usage:**
```tsx
import { StorySubmitCTA } from '@/components/stories';

// Default variant
<StorySubmitCTA />

// Compact variant
<StorySubmitCTA variant="compact" />

// Banner variant
<StorySubmitCTA
  variant="banner"
  title="Share Your Story"
  buttonHref="/stories/submit"
/>
```

---

## TypeScript Interfaces

### Story
```typescript
interface Story {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  author: {
    name: string;
    location?: string;
  };
  category: string;
  date: Date | string;
  readTime?: number;
  imageUrl?: string;
  slug?: string;
  featured?: boolean;
}
```

### SortOption
```typescript
type SortOption = 'newest' | 'oldest' | 'most-liked';
```

---

## Complete Example

See `examples.tsx` for a full working example combining all components:

```tsx
import {
  StoryGrid,
  StorySearch,
  Pagination,
  StorySubmitCTA,
} from '@/components/stories';

export function StoriesPage() {
  const [stories, setStories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="py-12">
      <StorySearch
        onSearchChange={(query) => handleSearch(query)}
        resultsCount={stories.length}
      />

      <StoryGrid stories={paginatedStories} highlightFeatured />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={stories.length}
        itemsPerPage={12}
        onPageChange={setCurrentPage}
      />

      <StorySubmitCTA />
    </div>
  );
}
```

---

## Accessibility Features

All components follow WCAG 2.1 Level AA guidelines:

- Semantic HTML with proper heading hierarchy
- ARIA labels and live regions
- Keyboard navigation support
- Focus management and visible focus indicators
- Screen reader announcements
- Color contrast compliance
- Accessible form controls

---

## Responsive Design

- Mobile-first approach
- 1 column on mobile
- 2 columns on tablet (sm)
- 3 columns on desktop (lg)
- Featured stories span 2 columns on tablet+

---

## Dependencies

- React 19
- Next.js 16
- Tailwind CSS 4
- lucide-react (icons)
- date-fns (date formatting)

---

## File Structure

```
components/stories/
├── StoryCard.tsx         - Individual story card
├── StoryGrid.tsx         - Grid layout for stories
├── StorySearch.tsx       - Search and filter controls
├── Pagination.tsx        - Pagination component
├── StorySubmitCTA.tsx    - Submit story CTA
├── index.ts              - Barrel exports
├── examples.tsx          - Usage examples
└── README.md             - This file
```

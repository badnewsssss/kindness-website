# Gallery Components

Accessible, performant photo gallery components for the Kindness for Autism nonprofit website.

## Components

### PhotoGrid

Main gallery component with responsive grid, category filtering, and integrated lightbox.

```tsx
import { PhotoGrid, type GalleryImage } from '@/components/gallery';

const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: '/images/gallery/event-1.jpg',
    alt: 'Children playing at autism awareness event',
    caption: 'Annual Autism Awareness Walk 2024',
    category: 'Events',
    width: 1200,
    height: 800,
    blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRg...',
  },
  // ... more images
];

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Photo Gallery</h1>
      <PhotoGrid
        images={galleryImages}
        layout="grid" // or "masonry"
      />
    </div>
  );
}
```

#### Props API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| images | GalleryImage[] | required | Array of gallery images |
| layout | 'masonry' \| 'grid' | 'grid' | Grid layout style |
| className | string | - | Additional CSS classes |

### ImageCard

Individual image card with hover effects and category badge.

```tsx
import { ImageCard, type GalleryImage } from '@/components/gallery';

const image: GalleryImage = {
  id: '1',
  src: '/images/photo.jpg',
  alt: 'Description of photo',
  caption: 'Photo caption text',
  category: 'Events',
  width: 1200,
  height: 800,
};

<ImageCard
  image={image}
  onClick={(img) => console.log('Clicked:', img)}
/>
```

#### Props API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| image | GalleryImage | required | Image data object |
| onClick | (image: GalleryImage) => void | - | Click handler |
| className | string | - | Additional CSS classes |

### Lightbox

Full-screen image viewer with keyboard navigation.

```tsx
import { Lightbox, type GalleryImage } from '@/components/gallery';

const [isOpen, setIsOpen] = useState(false);
const [currentIndex, setCurrentIndex] = useState(0);

<Lightbox
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  images={galleryImages}
  currentIndex={currentIndex}
  onNavigate={setCurrentIndex}
/>
```

#### Props API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| isOpen | boolean | required | Modal open state |
| onClose | () => void | required | Close handler |
| images | GalleryImage[] | required | Array of images |
| currentIndex | number | required | Current image index |
| onNavigate | (index: number) => void | required | Navigation handler |

#### Keyboard Controls

- **Arrow Left/Right**: Navigate between images
- **Escape**: Close lightbox
- **Home**: Jump to first image
- **End**: Jump to last image

### GalleryFilter

Category filter tabs with keyboard navigation.

```tsx
import { GalleryFilter, type GalleryCategory } from '@/components/gallery';

const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All');

<GalleryFilter
  categories={['All', 'Events', 'Community', 'Awareness']}
  activeCategory={activeCategory}
  onCategoryChange={setActiveCategory}
/>
```

#### Props API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| categories | GalleryCategory[] | required | Available categories |
| activeCategory | GalleryCategory | required | Currently selected category |
| onCategoryChange | (category: GalleryCategory) => void | required | Category change handler |
| className | string | - | Additional CSS classes |

## Types

### GalleryImage

```typescript
interface GalleryImage {
  id: string;                // Unique identifier
  src: string;               // Image source URL
  alt: string;               // Accessibility text
  caption?: string;          // Optional caption
  category: string;          // Image category
  width: number;             // Original width (for Next.js Image)
  height: number;            // Original height (for Next.js Image)
  blurDataURL?: string;      // Optional blur placeholder
}
```

### GalleryCategory

```typescript
type GalleryCategory =
  | 'All'
  | 'Events'
  | 'Coin Journey'
  | 'Community'
  | 'Awareness'
  | 'Celebrations';
```

## Features

### Accessibility

- Full keyboard navigation support
- ARIA labels and roles
- Focus management and trapping in lightbox
- Screen reader announcements
- Reduced motion support

### Performance

- Next.js Image optimization
- Lazy loading with blur placeholders
- Responsive image sizing
- Client-side filtering (no re-renders)

### UX Enhancements

- Smooth transitions and animations
- Hover effects with captions
- Category badges
- Image counter in lightbox
- Grid and masonry layout options

## Example: Complete Gallery Page

```tsx
'use client';

import { PhotoGrid, type GalleryImage } from '@/components/gallery';

const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: '1',
    src: '/images/gallery/awareness-walk-2024.jpg',
    alt: 'Children and families walking together at autism awareness event',
    caption: 'Annual Autism Awareness Walk - Building community through compassion',
    category: 'Events',
    width: 1200,
    height: 800,
    blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRg...',
  },
  {
    id: '2',
    src: '/images/gallery/coin-drop-1.jpg',
    alt: 'Child placing kindness coin in collection box',
    caption: 'First kindness coin donated at local school',
    category: 'Coin Journey',
    width: 1200,
    height: 800,
  },
  {
    id: '3',
    src: '/images/gallery/community-gathering.jpg',
    alt: 'Community members gathered at support meeting',
    caption: 'Monthly community support gathering',
    category: 'Community',
    width: 1200,
    height: 800,
  },
  // ... more images
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Photo Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Capturing moments of kindness, community, and autism awareness
          </p>
        </div>

        {/* Gallery Grid */}
        <PhotoGrid
          images={GALLERY_IMAGES}
          layout="grid"
        />
      </div>
    </main>
  );
}
```

## Generating Blur Placeholders

For optimal performance, generate blur data URLs for images:

```bash
# Using plaiceholder package
npm install plaiceholder sharp

# In a script or API route:
import { getPlaiceholder } from 'plaiceholder';

const { base64 } = await getPlaiceholder('/path/to/image.jpg');
// Use base64 as blurDataURL
```

## Styling

Components use Tailwind CSS with the warm color theme from the design system:

- Primary: Blue (#3b9af4)
- Secondary: Green (#22c55e)
- Autism Blue: #0066CC
- Warm backgrounds and shadows

All transitions respect `prefers-reduced-motion` for accessibility.

# Video Components

A comprehensive set of accessible, responsive video components for displaying YouTube and TikTok videos on the Kindness for Autism nonprofit website.

## Components

### YouTubeEmbed

YouTube video embed with privacy-enhanced mode and lazy loading.

**Features:**
- Privacy-enhanced mode using youtube-nocookie.com
- Lazy loading with thumbnail placeholder
- Play button overlay
- Responsive 16:9 aspect ratio
- Accessible with ARIA attributes

**Props:**
```typescript
interface YouTubeEmbedProps {
  videoId: string;           // YouTube video ID
  title: string;             // Video title for accessibility
  autoplay?: boolean;        // Auto-play video (default: false)
  controls?: boolean;        // Show video controls (default: true)
  modestBranding?: boolean;  // Modest YouTube branding (default: true)
  showThumbnail?: boolean;   // Show thumbnail with play button (default: true)
}
```

**Usage:**
```tsx
import { YouTubeEmbed } from '@/components/videos';

<YouTubeEmbed
  videoId="dQw4w9WgXcQ"
  title="Understanding Autism: A Parent's Guide"
  showThumbnail={true}
/>
```

### TikTokEmbed

TikTok video embed with loading states and error handling.

**Features:**
- Automatic script loading
- Loading state indicator
- Error handling with fallback UI
- Responsive container

**Props:**
```typescript
interface TikTokEmbedProps {
  embedId: string;  // TikTok video ID
  title?: string;   // Video title (default: "TikTok video")
}
```

**Usage:**
```tsx
import { TikTokEmbed } from '@/components/videos';

<TikTokEmbed
  embedId="7234567890123456789"
  title="Daily Routine Tips"
/>
```

### VideoCard

Video preview card with thumbnail, metadata, and click handling.

**Features:**
- Thumbnail image with lazy loading
- Play button overlay on hover
- Title, duration, and date display
- Platform badge (YouTube/TikTok)
- Category badge
- Hover effects
- Fully accessible with keyboard support

**Props:**
```typescript
interface VideoCardProps {
  title: string;
  description?: string;
  thumbnailUrl: string;
  duration?: string;        // e.g., "10:45"
  date?: Date | string;
  platform: 'youtube' | 'tiktok';
  category?: string;
  onClick?: () => void;
}
```

**Usage:**
```tsx
import { VideoCard } from '@/components/videos';

<VideoCard
  title="Understanding Autism"
  description="Learn about autism spectrum disorder"
  thumbnailUrl="https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg"
  duration="10:45"
  date={new Date('2024-01-15')}
  platform="youtube"
  category="Education"
  onClick={() => console.log('Video clicked')}
/>
```

### VideoGrid

Grid layout for displaying multiple videos with filtering options.

**Features:**
- Responsive grid (1-4 columns)
- Category filter tabs
- Platform filter (All, YouTube, TikTok)
- Results count
- Empty state handling
- Modal or inline player option

**Props:**
```typescript
interface VideoGridProps {
  videos: Video[];           // Array of video objects
  categories?: string[];     // Optional category list
  showFilters?: boolean;     // Show filter UI (default: true)
  columns?: 1 | 2 | 3 | 4;  // Number of columns (default: 3)
  playerMode?: 'modal' | 'inline'; // Player mode (default: 'modal')
}

interface Video {
  id: string;
  videoId: string;
  title: string;
  description?: string;
  thumbnailUrl: string;
  duration?: string;
  date?: Date | string;
  platform: 'youtube' | 'tiktok';
  category?: string;
}
```

**Usage:**
```tsx
import { VideoGrid, type Video } from '@/components/videos';

const videos: Video[] = [
  {
    id: '1',
    videoId: 'dQw4w9WgXcQ',
    title: 'Understanding Autism',
    thumbnailUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    duration: '10:45',
    date: new Date('2024-01-15'),
    platform: 'youtube',
    category: 'Education',
  },
  // ... more videos
];

<VideoGrid
  videos={videos}
  showFilters={true}
  columns={3}
  playerMode="modal"
/>
```

### VideoPlayer

Modal video player with video information and controls.

**Features:**
- Full modal overlay
- Platform-specific embed (YouTube/TikTok)
- Video metadata display
- Close button and backdrop click to close
- Keyboard accessible (Escape to close)
- Focus trap and body scroll lock
- Link to watch on platform

**Props:**
```typescript
interface VideoPlayerProps {
  video: {
    id: string;
    videoId: string;
    title: string;
    description?: string;
    date?: Date | string;
    platform: 'youtube' | 'tiktok';
    category?: string;
  };
  onClose: () => void;
}
```

**Usage:**
```tsx
import { VideoPlayer } from '@/components/videos';

const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

{selectedVideo && (
  <VideoPlayer
    video={selectedVideo}
    onClose={() => setSelectedVideo(null)}
  />
)}
```

## Complete Example

```tsx
'use client';

import { VideoGrid, type Video } from '@/components/videos';

const videos: Video[] = [
  {
    id: '1',
    videoId: 'dQw4w9WgXcQ',
    title: 'Understanding Autism: A Parent\'s Guide',
    description: 'Learn about autism spectrum disorder and how to support your child.',
    thumbnailUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    duration: '10:45',
    date: new Date('2024-01-15'),
    platform: 'youtube',
    category: 'Education',
  },
  {
    id: '2',
    videoId: '7234567890123456789',
    title: 'Success Story: Jacob\'s Journey',
    description: 'A heartwarming story of progress and achievement.',
    thumbnailUrl: 'https://via.placeholder.com/1280x720',
    duration: '0:45',
    date: new Date('2024-01-25'),
    platform: 'tiktok',
    category: 'Success Stories',
  },
];

export default function VideosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Our Videos
      </h1>

      <VideoGrid
        videos={videos}
        showFilters={true}
        columns={3}
        playerMode="modal"
      />
    </div>
  );
}
```

## Accessibility Features

All components follow WCAG 2.1 AA standards:

- Semantic HTML elements
- ARIA attributes for screen readers
- Keyboard navigation support
- Focus management in modals
- Proper heading hierarchy
- Alt text for images
- Color contrast compliance
- Loading states announced to screen readers

## Responsive Design

- Mobile-first approach
- Responsive grid layouts (1 column mobile, 2-3 columns tablet/desktop)
- Touch-friendly click targets (minimum 44x44px)
- Optimized for various screen sizes

## Performance Optimizations

- Lazy loading for images and iframes
- Thumbnail placeholders for YouTube videos
- Deferred script loading for TikTok embeds
- Optimized re-renders with useMemo
- Proper cleanup in useEffect hooks

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- YouTube embeds work in all browsers
- TikTok embeds require JavaScript enabled

## Notes

- YouTube thumbnails use `maxresdefault.jpg` for best quality
- Privacy-enhanced mode uses `youtube-nocookie.com` domain
- TikTok embeds load external script automatically
- Modal player locks body scroll when open
- All components use Tailwind CSS for styling

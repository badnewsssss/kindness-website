/**
 * Example usage of Video components
 * This file demonstrates how to use the video components in your pages
 */

import { VideoGrid, YouTubeEmbed, TikTokEmbed, type Video } from './index';

// Sample video data
const sampleVideos: Video[] = [
  {
    id: '1',
    videoId: 'dQw4w9WgXcQ',
    title: 'Understanding Autism: A Parent\'s Guide',
    description: 'Learn about autism spectrum disorder and how to support your child through early intervention and therapy.',
    thumbnailUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    duration: '10:45',
    date: '2024-01-15',
    platform: 'youtube',
    category: 'education',
    featured: false,
  },
  {
    id: '2',
    videoId: 'jNQXAC9IVRw',
    title: 'Daily Routine Tips for Children with Autism',
    description: 'Practical strategies for creating consistent and supportive daily routines.',
    thumbnailUrl: 'https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg',
    duration: '8:20',
    date: '2024-01-20',
    platform: 'youtube',
    category: 'tips',
    featured: false,
  },
  {
    id: '3',
    videoId: '7234567890123456789',
    title: 'Success Story: Jacob\'s Journey',
    description: 'A heartwarming story of progress and achievement.',
    thumbnailUrl: 'https://via.placeholder.com/1280x720/0066CC/FFFFFF?text=Success+Story',
    duration: '0:45',
    date: '2024-01-25',
    platform: 'tiktok',
    category: 'stories',
    featured: false,
  },
];

// Example 1: Full video grid with filters
export function VideoGridExample() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Our Videos
      </h1>

      <VideoGrid
        videos={sampleVideos}
        showFilters={true}
        columns={3}
        playerMode="modal"
      />
    </div>
  );
}

// Example 2: YouTube embed standalone
export function YouTubeEmbedExample() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Featured Video
      </h2>

      <YouTubeEmbed
        videoId="dQw4w9WgXcQ"
        title="Understanding Autism: A Parent's Guide"
        showThumbnail={true}
        autoplay={false}
      />

      <div className="mt-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Understanding Autism: A Parent's Guide
        </h3>
        <p className="text-gray-700">
          Learn about autism spectrum disorder and how to support your child through early intervention and therapy.
        </p>
      </div>
    </div>
  );
}

// Example 3: TikTok embed standalone
export function TikTokEmbedExample() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
        Quick Tips
      </h2>

      <TikTokEmbed
        embedId="7234567890123456789"
        title="Daily Routine Tips"
      />
    </div>
  );
}

// Example 4: Video grid without filters (simple gallery)
export function SimpleVideoGallery() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Recent Videos
      </h2>

      <VideoGrid
        videos={sampleVideos.slice(0, 3)}
        showFilters={false}
        columns={3}
        playerMode="modal"
      />
    </div>
  );
}

// Example 5: Video grid with custom categories
export function CategorizedVideos() {
  const categories = ['Education', 'Tips & Advice', 'Success Stories', 'Events'];

  return (
    <div className="container mx-auto px-4 py-8">
      <VideoGrid
        videos={sampleVideos}
        categories={categories}
        showFilters={true}
        columns={2}
        playerMode="modal"
      />
    </div>
  );
}

// Example 6: Two column layout for tablet/desktop
export function TwoColumnVideoGrid() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Featured Videos
      </h2>

      <VideoGrid
        videos={sampleVideos}
        showFilters={false}
        columns={2}
        playerMode="modal"
      />
    </div>
  );
}

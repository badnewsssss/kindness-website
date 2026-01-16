'use client';

import { useState, useMemo, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { VideoCard } from './VideoCard';
import { VideoPlayer } from './VideoPlayer';
import { Button } from '@/components/ui/Button';
import type { Video } from '@/types/video';

export type { Video };

export interface VideoGridProps extends HTMLAttributes<HTMLDivElement> {
  videos: Video[];
  categories?: string[];
  showFilters?: boolean;
  columns?: 1 | 2 | 3 | 4;
  playerMode?: 'modal' | 'inline';
  onVideoSelect?: (video: Video) => void;
}

/**
 * Video grid layout component
 * Features:
 * - Responsive grid (1-3 columns)
 * - Category filter tabs
 * - Platform filter (All, YouTube, TikTok)
 * - Modal or inline player option
 * - Accessible with keyboard navigation
 */
export function VideoGrid({
  videos,
  categories = [],
  showFilters = true,
  columns = 3,
  playerMode = 'modal',
  onVideoSelect,
  className,
  ...props
}: VideoGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPlatform, setSelectedPlatform] = useState<'all' | 'youtube' | 'tiktok'>('all');
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  // Extract unique categories from videos if not provided
  const availableCategories = useMemo(() => {
    if (categories.length > 0) return categories;

    const uniqueCategories = new Set<string>();
    videos.forEach((video) => {
      if (video.category) uniqueCategories.add(video.category);
    });

    return Array.from(uniqueCategories);
  }, [videos, categories]);

  // Filter videos based on selected category and platform
  const filteredVideos = useMemo(() => {
    return videos.filter((video) => {
      const matchesCategory = selectedCategory === 'all' || video.category === selectedCategory;
      const matchesPlatform = selectedPlatform === 'all' || video.platform === selectedPlatform;
      return matchesCategory && matchesPlatform;
    });
  }, [videos, selectedCategory, selectedPlatform]);

  const handleVideoClick = (video: Video) => {
    if (onVideoSelect) {
      onVideoSelect(video);
    }
    if (playerMode === 'modal') {
      setSelectedVideo(video);
    }
    // For inline mode, you would handle this differently
  };

  const handleClosePlayer = () => {
    setSelectedVideo(null);
  };

  const gridColumns = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  };

  return (
    <div className={cn('w-full', className)} {...props}>
      {/* Filters */}
      {showFilters && (
        <div className="mb-8 space-y-4">
          {/* Category filters */}
          {availableCategories.length > 0 && (
            <div>
              <h3 className="mb-3 text-sm font-medium text-gray-700">
                Filter by Category
              </h3>
              <div className="flex flex-wrap gap-2" role="tablist" aria-label="Video categories">
                <Button
                  variant={selectedCategory === 'all' ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory('all')}
                  role="tab"
                  aria-selected={selectedCategory === 'all'}
                  aria-controls="video-grid"
                >
                  All Categories
                </Button>
                {availableCategories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'primary' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    role="tab"
                    aria-selected={selectedCategory === category}
                    aria-controls="video-grid"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Platform filters */}
          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-700">
              Filter by Platform
            </h3>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Video platforms">
              <Button
                variant={selectedPlatform === 'all' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setSelectedPlatform('all')}
              >
                All Platforms
              </Button>
              <Button
                variant={selectedPlatform === 'youtube' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setSelectedPlatform('youtube')}
              >
                YouTube
              </Button>
              <Button
                variant={selectedPlatform === 'tiktok' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setSelectedPlatform('tiktok')}
              >
                TikTok
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Results count */}
      <div className="mb-4">
        <p className="text-sm text-gray-600">
          Showing {filteredVideos.length} {filteredVideos.length === 1 ? 'video' : 'videos'}
        </p>
      </div>

      {/* Video grid */}
      {filteredVideos.length > 0 ? (
        <div
          id="video-grid"
          className={cn('grid gap-6', gridColumns[columns])}
          role="tabpanel"
        >
          {filteredVideos.map((video) => (
            <VideoCard
              key={video.id}
              title={video.title}
              description={video.description}
              thumbnailUrl={video.thumbnailUrl || video.thumbnail?.src || '/images/videos/placeholder.jpg'}
              duration={typeof video.duration === 'number' ? `${Math.floor(video.duration / 60)}:${(video.duration % 60).toString().padStart(2, '0')}` : video.duration}
              date={video.date || video.publishedAt}
              platform={video.platform}
              category={video.category}
              onClick={() => handleVideoClick(video)}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <p className="text-lg font-medium text-gray-900 mb-2">
            No videos found
          </p>
          <p className="text-gray-600 mb-4">
            Try adjusting your filters to see more results
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setSelectedCategory('all');
              setSelectedPlatform('all');
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}

      {/* Video player modal */}
      {playerMode === 'modal' && selectedVideo && (
        <VideoPlayer
          video={selectedVideo}
          onClose={handleClosePlayer}
        />
      )}
    </div>
  );
}

'use client';

import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { StoryCard, type Story } from './StoryCard';
import { BookOpen } from 'lucide-react';

export interface StoryGridProps extends HTMLAttributes<HTMLDivElement> {
  stories: Story[];
  emptyMessage?: string;
  highlightFeatured?: boolean;
}

/**
 * Responsive grid layout for displaying stories
 * Supports 1-2-3 column responsive layout
 * Featured stories are highlighted with larger cards
 * Shows empty state when no stories available
 */
export const StoryGrid = forwardRef<HTMLDivElement, StoryGridProps>(
  (
    {
      stories,
      emptyMessage = 'No stories found. Be the first to share a story of kindness!',
      highlightFeatured = true,
      className,
      ...props
    },
    ref
  ) => {
    // Empty state
    if (!stories || stories.length === 0) {
      return (
        <div
          ref={ref}
          className={cn(
            'flex flex-col items-center justify-center py-16 px-4 text-center',
            className
          )}
          role="status"
          aria-live="polite"
          {...props}
        >
          <div className="w-16 h-16 mb-4 rounded-full bg-blue-100 flex items-center justify-center">
            <BookOpen className="w-8 h-8 text-blue-600" aria-hidden="true" />
          </div>
          <p className="text-lg text-gray-600 max-w-md">
            {emptyMessage}
          </p>
        </div>
      );
    }

    // Separate featured and regular stories if highlighting is enabled
    const featuredStories = highlightFeatured
      ? stories.filter(story => story.featured)
      : [];
    const regularStories = highlightFeatured
      ? stories.filter(story => !story.featured)
      : stories;

    return (
      <div ref={ref} {...props}>
        {/* Featured Stories Section */}
        {featuredStories.length > 0 && (
          <div className="mb-8">
            <h2 className="sr-only">Featured Stories</h2>
            <div
              className={cn(
                'grid gap-6',
                featuredStories.length === 1
                  ? 'grid-cols-1'
                  : 'grid-cols-1 md:grid-cols-2',
                className
              )}
            >
              {featuredStories.map((story) => (
                <StoryCard
                  key={story.id}
                  story={story}
                  featured
                />
              ))}
            </div>
          </div>
        )}

        {/* Regular Stories Grid */}
        {regularStories.length > 0 && (
          <div>
            {featuredStories.length > 0 && (
              <h2 className="sr-only">More Stories</h2>
            )}
            <div
              className={cn(
                'grid gap-6',
                'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
                className
              )}
            >
              {regularStories.map((story) => (
                <StoryCard
                  key={story.id}
                  story={story}
                />
              ))}
            </div>
          </div>
        )}

        {/* Screen reader announcement for total stories */}
        <div className="sr-only" role="status" aria-live="polite">
          Showing {stories.length} {stories.length === 1 ? 'story' : 'stories'}
        </div>
      </div>
    );
  }
);

StoryGrid.displayName = 'StoryGrid';

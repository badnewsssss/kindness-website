'use client';

import { forwardRef, type HTMLAttributes } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { formatDate } from '@/lib/utils';
import { Card, CardImage, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Clock, MapPin, ArrowRight } from 'lucide-react';

export interface StoryAuthorObject {
  name: string;
  location?: string;
}

export interface Story {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  author: string | StoryAuthorObject;
  authorRole?: string;
  category: string;
  date: Date | string;
  readTime?: number;
  imageUrl?: string;
  imagePath?: string;
  slug?: string;
  featured?: boolean;
  tags?: string[];
  metadata?: {
    readTime?: number;
    likes?: number;
    shares?: number;
  };
}

export interface StoryCardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'id'> {
  story: Story;
  featured?: boolean;
}

/**
 * Story preview card component for displaying individual stories
 * Features: image, title, excerpt, author info, category badge, and read more link
 * Includes accessible card link pattern with hover animations
 */
export const StoryCard = forwardRef<HTMLDivElement, StoryCardProps>(
  (
    {
      story,
      featured = false,
      className,
      ...props
    },
    ref
  ) => {
    const {
      id,
      title,
      excerpt,
      author,
      category,
      date,
      readTime,
      imageUrl,
      imagePath,
      slug,
      metadata,
    } = story;

    // Handle both string and object author formats
    const authorName = typeof author === 'string' ? author : author.name;
    const authorLocation = typeof author === 'string' ? undefined : author.location;
    const displayReadTime = readTime || metadata?.readTime;
    const displayImageUrl = imageUrl || imagePath;

    const isFeatured = featured || story.featured;
    const storyUrl = slug ? `/stories/${slug}` : `/stories/${id}`;
    const formattedDate = formatDate(date, {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });

    return (
      <article
        ref={ref}
        className={cn(
          'group h-full',
          isFeatured && 'md:col-span-2 md:row-span-2',
          className
        )}
        {...props}
      >
        <Card
          padding="none"
          hover
          className="h-full flex flex-col overflow-hidden transition-all duration-300"
        >
          {/* Featured Image */}
          {displayImageUrl && (
            <Link
              href={storyUrl}
              className="block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-t-lg overflow-hidden"
              tabIndex={-1}
              aria-hidden="true"
            >
              <CardImage
                src={displayImageUrl}
                alt=""
                aspectRatio={isFeatured ? '16/9' : '4/3'}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          )}

          <CardContent className="p-6 flex flex-col flex-1">
            {/* Category Badge */}
            <div className="mb-3">
              <Badge variant="autism" size="sm">
                {category}
              </Badge>
            </div>

            {/* Title */}
            <h3
              className={cn(
                'font-bold mb-2 leading-tight',
                isFeatured ? 'text-2xl md:text-3xl' : 'text-xl'
              )}
              style={{ color: '#111827' }}
            >
              <Link
                href={storyUrl}
                className="hover:text-blue-600 transition-colors focus:outline-none focus:underline focus:decoration-2 focus:decoration-blue-500"
                style={{ color: '#111827' }}
              >
                <span className="absolute inset-0" aria-hidden="true" />
                {title}
              </Link>
            </h3>

            {/* Excerpt */}
            <p className={cn(
              'text-gray-600 mb-4 flex-1',
              isFeatured ? 'text-base md:text-lg line-clamp-3' : 'text-sm line-clamp-2'
            )}>
              {excerpt}
            </p>

            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
              {/* Author */}
              <div className="flex items-center gap-1">
                <span className="font-medium text-gray-700">{authorName}</span>
              </div>

              {/* Location */}
              {authorLocation && (
                <>
                  <span className="text-gray-300" aria-hidden="true">•</span>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" aria-hidden="true" />
                    <span>{authorLocation}</span>
                  </div>
                </>
              )}

              {/* Date */}
              <span className="text-gray-300" aria-hidden="true">•</span>
              <time dateTime={new Date(date).toISOString()}>
                {formattedDate}
              </time>

              {/* Read Time */}
              {displayReadTime && (
                <>
                  <span className="text-gray-300" aria-hidden="true">•</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" aria-hidden="true" />
                    <span>{displayReadTime} min read</span>
                  </div>
                </>
              )}
            </div>

            {/* Read More Link */}
            <div className="flex items-center gap-2 text-blue-600 font-medium group-hover:gap-3 transition-all">
              <span>Read Story</span>
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </div>
          </CardContent>
        </Card>
      </article>
    );
  }
);

StoryCard.displayName = 'StoryCard';

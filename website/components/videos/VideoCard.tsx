'use client';

import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { formatDate } from '@/lib/utils';
import { Play, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export interface VideoCardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'> {
  title: string;
  description?: string;
  thumbnailUrl: string;
  duration?: string;
  date?: Date | string;
  platform: 'youtube' | 'tiktok';
  onClick?: () => void;
  category?: string;
}

/**
 * Video preview card component
 * Features:
 * - Thumbnail image with play button overlay
 * - Title, duration, and date display
 * - Platform badge (YouTube/TikTok)
 * - Hover effects
 * - Click to play or open modal
 * - Fully accessible
 */
export const VideoCard = forwardRef<HTMLDivElement, VideoCardProps>(
  (
    {
      title,
      description,
      thumbnailUrl,
      duration,
      date,
      platform,
      onClick,
      category,
      className,
      ...props
    },
    ref
  ) => {
    const platformColors = {
      youtube: {
        badge: 'danger',
        name: 'YouTube',
      },
      tiktok: {
        badge: 'info',
        name: 'TikTok',
      },
    } as const;

    const platformConfig = platformColors[platform];

    return (
      <div
        ref={ref}
        className={cn(
          'group relative overflow-hidden rounded-lg bg-white shadow-md',
          'transition-all duration-200',
          'hover:shadow-lg hover:-translate-y-0.5',
          onClick && 'cursor-pointer',
          className
        )}
        onClick={onClick}
        onKeyDown={(e) => {
          if (onClick && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            onClick();
          }
        }}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
        aria-label={onClick ? `Play video: ${title}` : undefined}
        {...props}
      >
        {/* Thumbnail section */}
        <div className="relative aspect-video overflow-hidden bg-gray-900">
          <img
            src={thumbnailUrl}
            alt={`Thumbnail for ${title}`}
            className={cn(
              'h-full w-full object-cover',
              'transition-transform duration-300',
              onClick && 'group-hover:scale-105'
            )}
            loading="lazy"
          />

          {/* Play button overlay */}
          {onClick && (
            <div
              className={cn(
                'absolute inset-0 flex items-center justify-center',
                'bg-black/0 transition-all duration-200',
                'group-hover:bg-black/30',
                'group-focus:bg-black/30'
              )}
            >
              <div
                className={cn(
                  'flex items-center justify-center',
                  'w-14 h-14 bg-white/90 rounded-full',
                  'opacity-0 scale-75',
                  'transition-all duration-200',
                  'group-hover:opacity-100 group-hover:scale-100',
                  'group-focus:opacity-100 group-focus:scale-100',
                  'shadow-lg'
                )}
              >
                <Play
                  className="w-6 h-6 text-gray-900 fill-gray-900 ml-0.5"
                  aria-hidden="true"
                />
              </div>
            </div>
          )}

          {/* Duration badge */}
          {duration && (
            <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded bg-black/80 px-2 py-1">
              <Clock className="w-3 h-3 text-white" aria-hidden="true" />
              <span className="text-xs font-medium text-white">
                {duration}
              </span>
            </div>
          )}

          {/* Platform badge */}
          <div className="absolute top-2 left-2">
            <Badge variant={platformConfig.badge} size="sm">
              {platformConfig.name}
            </Badge>
          </div>
        </div>

        {/* Content section */}
        <div className="p-4">
          <h3 className="mb-2 text-lg font-semibold text-gray-900 line-clamp-2">
            {title}
          </h3>

          {description && (
            <p className="mb-3 text-sm text-gray-600 line-clamp-2">
              {description}
            </p>
          )}

          {/* Footer metadata */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              {date && (
                <time dateTime={typeof date === 'string' ? date : date.toISOString()}>
                  {formatDate(date, { month: 'short', day: 'numeric', year: 'numeric' })}
                </time>
              )}
            </div>

            {category && (
              <Badge variant="default" size="sm">
                {category}
              </Badge>
            )}
          </div>
        </div>
      </div>
    );
  }
);

VideoCard.displayName = 'VideoCard';

'use client';

import { useState, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { Play } from 'lucide-react';

export interface YouTubeEmbedProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  videoId: string;
  title: string;
  autoplay?: boolean;
  controls?: boolean;
  modestBranding?: boolean;
  showThumbnail?: boolean;
}

/**
 * YouTube video embed component with privacy-enhanced mode
 * Features:
 * - Lazy loading with thumbnail placeholder
 * - Privacy-enhanced (youtube-nocookie.com)
 * - Responsive 16:9 aspect ratio
 * - Play button overlay
 * - Accessible with proper ARIA attributes
 */
export function YouTubeEmbed({
  videoId,
  title,
  autoplay = false,
  controls = true,
  modestBranding = true,
  showThumbnail = true,
  className,
  ...props
}: YouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(!showThumbnail);

  const embedParams = new URLSearchParams({
    autoplay: autoplay ? '1' : '0',
    controls: controls ? '1' : '0',
    modestbranding: modestBranding ? '1' : '0',
    rel: '0', // Don't show related videos from other channels
    enablejsapi: '1',
  });

  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?${embedParams.toString()}`;
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  const handleLoadVideo = () => {
    setIsLoaded(true);
  };

  return (
    <div
      className={cn(
        'relative w-full overflow-hidden rounded-lg bg-gray-900',
        'aspect-video',
        className
      )}
      {...props}
    >
      {!isLoaded ? (
        <>
          {/* Thumbnail placeholder */}
          <img
            src={thumbnailUrl}
            alt={`Thumbnail for ${title}`}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />

          {/* Play button overlay */}
          <button
            onClick={handleLoadVideo}
            className={cn(
              'absolute inset-0 flex items-center justify-center',
              'bg-black/30 transition-all duration-200',
              'hover:bg-black/40 focus:bg-black/40',
              'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
              'group'
            )}
            aria-label={`Play video: ${title}`}
          >
            <div
              className={cn(
                'flex items-center justify-center',
                'w-16 h-16 md:w-20 md:h-20',
                'bg-red-600 rounded-full',
                'transition-all duration-200',
                'group-hover:bg-red-700 group-hover:scale-110',
                'group-focus:bg-red-700 group-focus:scale-110',
                'shadow-lg'
              )}
            >
              <Play
                className="w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-1"
                aria-hidden="true"
              />
            </div>
          </button>
        </>
      ) : (
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
          loading="lazy"
        />
      )}
    </div>
  );
}

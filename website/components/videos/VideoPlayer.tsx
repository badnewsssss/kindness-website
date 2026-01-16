'use client';

import { useEffect, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { formatDate } from '@/lib/utils';
import { X } from 'lucide-react';
import { YouTubeEmbed } from './YouTubeEmbed';
import { TikTokEmbed } from './TikTokEmbed';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import type { Video } from '@/types/video';

export interface VideoPlayerProps extends HTMLAttributes<HTMLDivElement> {
  video: Video;
  onClose: () => void;
}

/**
 * Modal video player component
 * Features:
 * - Full modal overlay with video embed
 * - Close button and backdrop click to close
 * - Video info display
 * - Keyboard accessible (Escape to close)
 * - Focus trap and body scroll lock
 * - Platform-specific embed (YouTube/TikTok)
 */
export function VideoPlayer({
  video,
  onClose,
  className,
  ...props
}: VideoPlayerProps) {
  // Handle escape key press
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  // Focus trap - focus close button when modal opens
  useEffect(() => {
    const closeButton = document.getElementById('video-player-close');
    closeButton?.focus();
  }, []);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center',
        'bg-black/80 backdrop-blur-sm',
        'p-4 md:p-6',
        className
      )}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-player-title"
      {...props}
    >
      <div
        className={cn(
          'relative w-full max-w-5xl',
          'bg-white rounded-lg shadow-2xl',
          'overflow-hidden',
          'animate-in fade-in zoom-in-95 duration-200'
        )}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 p-4 md:p-6 border-b border-gray-200">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <Badge
                variant={video.platform === 'youtube' ? 'danger' : 'info'}
                size="sm"
              >
                {video.platform === 'youtube' ? 'YouTube' : 'TikTok'}
              </Badge>
              {video.category && (
                <Badge variant="default" size="sm">
                  {video.category}
                </Badge>
              )}
            </div>
            <h2
              id="video-player-title"
              className="text-xl md:text-2xl font-bold text-gray-900 line-clamp-2"
            >
              {video.title}
            </h2>
            {(video.date || video.publishedAt) && (
              <p className="text-sm text-gray-500 mt-1">
                <time dateTime={video.date || video.publishedAt}>
                  {formatDate(video.date || video.publishedAt!, { month: 'long', day: 'numeric', year: 'numeric' })}
                </time>
              </p>
            )}
          </div>

          {/* Close button */}
          <Button
            id="video-player-close"
            variant="ghost"
            size="sm"
            onClick={onClose}
            aria-label="Close video player"
            className="flex-shrink-0"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </Button>
        </div>

        {/* Video embed */}
        <div className="bg-gray-900">
          {video.platform === 'youtube' ? (
            <YouTubeEmbed
              videoId={video.videoId || video.embedId || ''}
              title={video.title}
              autoplay={true}
              showThumbnail={false}
            />
          ) : (
            <div className="flex items-center justify-center p-4">
              <TikTokEmbed
                embedId={video.videoId || video.embedId || ''}
                title={video.title}
              />
            </div>
          )}
        </div>

        {/* Description */}
        {video.description && (
          <div className="p-4 md:p-6 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-gray-900 mb-2">
              About this video
            </h3>
            <p className="text-sm text-gray-700 whitespace-pre-line">
              {video.description}
            </p>
          </div>
        )}

        {/* Footer actions */}
        <div className="flex items-center justify-end gap-2 p-4 md:p-6 border-t border-gray-200 bg-gray-50">
          <Button
            variant="outline"
            size="sm"
            onClick={onClose}
          >
            Close
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              const videoId = video.videoId || video.embedId;
              const url = video.platform === 'youtube'
                ? `https://www.youtube.com/watch?v=${videoId}`
                : `https://www.tiktok.com/@username/video/${videoId}`;
              window.open(url, '_blank', 'noopener,noreferrer');
            }}
          >
            Watch on {video.platform === 'youtube' ? 'YouTube' : 'TikTok'}
          </Button>
        </div>
      </div>
    </div>
  );
}

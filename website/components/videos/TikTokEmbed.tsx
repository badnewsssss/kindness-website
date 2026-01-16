'use client';

import { useState, useEffect, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface TikTokEmbedProps extends HTMLAttributes<HTMLDivElement> {
  embedId: string;
  title?: string;
}

/**
 * TikTok video embed component
 * Features:
 * - Responsive container
 * - Loading state
 * - Placeholder for unavailable embeds
 * - Accessible with proper ARIA attributes
 */
export function TikTokEmbed({
  embedId,
  title = 'TikTok video',
  className,
  ...props
}: TikTokEmbedProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Load TikTok embed script if not already loaded
    const scriptId = 'tiktok-embed-script';

    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://www.tiktok.com/embed.js';
      script.async = true;
      script.onload = () => setIsLoading(false);
      script.onerror = () => {
        setIsLoading(false);
        setHasError(true);
      };
      document.body.appendChild(script);
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <div
      className={cn(
        'relative w-full max-w-[605px] mx-auto',
        'overflow-hidden rounded-lg',
        className
      )}
      {...props}
    >
      {isLoading && (
        <div
          className={cn(
            'flex items-center justify-center',
            'w-full aspect-[9/16] max-h-[738px]',
            'bg-gray-100 rounded-lg'
          )}
          role="status"
          aria-label="Loading TikTok video"
        >
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
            <p className="text-sm text-gray-600">Loading video...</p>
          </div>
        </div>
      )}

      {hasError ? (
        <div
          className={cn(
            'flex items-center justify-center',
            'w-full aspect-[9/16] max-h-[738px]',
            'bg-gray-100 rounded-lg border-2 border-dashed border-gray-300'
          )}
          role="alert"
        >
          <div className="text-center px-4">
            <p className="text-gray-600 font-medium mb-2">
              Unable to load TikTok video
            </p>
            <p className="text-sm text-gray-500">
              The embed may be unavailable or blocked
            </p>
          </div>
        </div>
      ) : (
        <blockquote
          className="tiktok-embed"
          cite={`https://www.tiktok.com/@username/video/${embedId}`}
          data-video-id={embedId}
          style={{ maxWidth: '605px', minWidth: '325px' }}
        >
          <section>
            <a
              target="_blank"
              rel="noopener noreferrer"
              title={title}
              href={`https://www.tiktok.com/@username/video/${embedId}`}
            >
              {title}
            </a>
          </section>
        </blockquote>
      )}
    </div>
  );
}

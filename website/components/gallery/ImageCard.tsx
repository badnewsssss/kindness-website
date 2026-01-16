'use client';

import { useState, type HTMLAttributes } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  category: string;
  width: number;
  height: number;
  blurDataURL?: string;
}

export interface ImageCardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'> {
  image: GalleryImage;
  onClick?: (image: GalleryImage) => void;
}

/**
 * Individual image card for gallery grid.
 * Features Next.js Image optimization, hover overlay, and category badge.
 */
export function ImageCard({
  image,
  onClick,
  className,
  ...props
}: ImageCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleClick = () => {
    onClick?.(image);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick?.(image);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={`View ${image.alt}`}
      className={cn(
        'group relative overflow-hidden rounded-lg bg-gray-100 cursor-pointer',
        'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
        'transition-all duration-300',
        className
      )}
      {...props}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={cn(
            'object-cover transition-all duration-500',
            'group-hover:scale-105',
            isLoaded ? 'opacity-100' : 'opacity-0'
          )}
          placeholder={image.blurDataURL ? 'blur' : 'empty'}
          blurDataURL={image.blurDataURL}
          onLoad={() => setIsLoaded(true)}
        />

        {/* Loading skeleton */}
        {!isLoaded && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-gray-200 to-gray-300" />
        )}
      </div>

      {/* Category badge - Always visible */}
      <div className="absolute top-3 right-3 z-10">
        <Badge
          variant="primary"
          size="sm"
          className="bg-white/90 backdrop-blur-sm text-gray-800 border-white/50 shadow-md"
        >
          {image.category}
        </Badge>
      </div>

      {/* Hover overlay with caption */}
      {image.caption && (
        <div
          className={cn(
            'absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent',
            'opacity-0 group-hover:opacity-100 group-focus:opacity-100',
            'transition-opacity duration-300',
            'flex items-end p-4'
          )}
        >
          <p className="text-white text-sm font-medium leading-relaxed">
            {image.caption}
          </p>
        </div>
      )}

      {/* Reduced motion support */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          .group:hover img,
          .group:focus img {
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}

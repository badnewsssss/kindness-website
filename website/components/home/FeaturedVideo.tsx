'use client';

import { useState } from 'react';

interface FeaturedVideoProps {
  videoId?: string;
  title?: string;
  description?: string;
}

/**
 * Featured YouTube video section for the home page
 * Displays a prominent video with title and description
 */
export function FeaturedVideo({
  videoId = 'dQw4w9WgXcQ', // Default placeholder - replace with actual video ID
  title = 'Our Story',
  description = 'Watch our journey of spreading kindness and making a difference in the autism community.',
}: FeaturedVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50"
      aria-labelledby="featured-video-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2
            id="featured-video-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: '#111827' }}
          >
            {title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Video Container */}
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
          {!isPlaying ? (
            // Thumbnail with play button
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 w-full h-full group cursor-pointer"
              aria-label={`Play video: ${title}`}
            >
              {/* YouTube Thumbnail */}
              <img
                src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                alt={`Video thumbnail: ${title}`}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg
                    className="w-10 h-10 sm:w-12 sm:h-12 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </button>
          ) : (
            // YouTube Embed
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title={title}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>

        {/* Optional: Video Caption */}
        <p className="mt-6 text-center text-gray-500 text-sm">
          Click to play • Full screen available
        </p>
      </div>
    </section>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
}

interface YouTubeChannelCarouselProps {
  channelHandle: string;
  title?: string;
  description?: string;
  maxVideos?: number;
}

/**
 * YouTube Channel Carousel - displays latest videos from a channel
 * Uses YouTube Data API v3 to fetch videos
 */
export function YouTubeChannelCarousel({
  channelHandle,
  title = 'Latest Videos',
  description,
  maxVideos = 10,
}: YouTubeChannelCarouselProps) {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchChannelVideos();
  }, [channelHandle]);

  const fetchChannelVideos = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `/api/youtube/channel-videos?handle=${encodeURIComponent(channelHandle)}&maxResults=${maxVideos}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch videos');
      }

      const data = await response.json();
      setVideos(data.videos || []);
    } catch (err) {
      console.error('Error fetching videos:', err);
      setError('Failed to load videos. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const videosPerView = 4; // Show 4 videos at a time

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(videos.length - videosPerView, prev + 1));
  };

  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < videos.length - videosPerView;

  if (loading) {
    return (
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              {title}
            </h2>
          </div>
          <div className="flex gap-6 overflow-hidden">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="shimmer rounded-xl flex-shrink-0" style={{ width: 'calc(25% - 1.125rem)', height: '280px' }} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || videos.length === 0) {
    return (
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Youtube className="w-16 h-16 text-red-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600 mb-6">
              {error || 'No videos available at this time.'}
            </p>
            <a
              href={`https://youtube.com/${channelHandle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button variant="primary">
                <Youtube className="w-4 h-4 mr-2" />
                Visit Our Channel
              </Button>
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white"
      aria-labelledby="channel-videos-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2
            id="channel-videos-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900"
          >
            {title}
          </h2>
          {description && (
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-6">
              {description}
            </p>
          )}
          <a
            href={`https://youtube.com/${channelHandle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold transition-colors"
          >
            <Youtube className="w-5 h-5" />
            Subscribe on YouTube
          </a>
        </div>

        {/* Horizontal Scrolling Carousel */}
        <div className="relative px-12">
          {/* Navigation Buttons */}
          {videos.length > videosPerView && (
            <>
              <button
                onClick={handlePrevious}
                disabled={!canGoPrevious}
                className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  canGoPrevious
                    ? 'hover:shadow-xl hover:scale-110 opacity-100'
                    : 'opacity-50 cursor-not-allowed'
                }`}
                aria-label="Previous videos"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              <button
                onClick={handleNext}
                disabled={!canGoNext}
                className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  canGoNext
                    ? 'hover:shadow-xl hover:scale-110 opacity-100'
                    : 'opacity-50 cursor-not-allowed'
                }`}
                aria-label="Next videos"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
            </>
          )}

          {/* Scrollable Video Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / videosPerView + 1.5)}%)`,
              }}
            >
              {videos.map((video) => (
                <a
                  key={video.id}
                  href={`https://youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block flex-shrink-0"
                  style={{ width: `calc(${100 / videosPerView}% - ${(videosPerView - 1) * 1.5 / videosPerView}rem)` }}
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                    {/* Thumbnail */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
                      
                      {/* Play overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                          <svg
                            className="w-8 h-8 text-white ml-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Video Info */}
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 line-clamp-2 mb-2 group-hover:text-blue-600 transition-colors">
                        {video.title}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>
                          {new Date(video.publishedAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                        <Youtube className="w-4 h-4 text-red-600" />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Progress Indicator */}
          {videos.length > videosPerView && (
            <div className="flex justify-center gap-2 mt-8">
              <div className="flex items-center gap-1 bg-gray-200 rounded-full p-1">
                {Array.from({ length: Math.ceil(videos.length - videosPerView + 1) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`rounded-full transition-all ${
                      currentIndex === index
                        ? 'bg-blue-600 w-8 h-2'
                        : 'bg-gray-400 w-2 h-2 hover:bg-gray-500'
                    }`}
                    aria-label={`Go to position ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href={`https://youtube.com/${channelHandle}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg">
              <Youtube className="w-5 h-5 mr-2" />
              View All Videos on YouTube
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

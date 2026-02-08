'use client';

import { useState } from 'react';
import { Container } from '@/components/layout';
import { VideoGrid, YouTubeEmbed, TikTokEmbed } from '@/components/videos';
import { PremiumSection, PremiumHero } from '@/components/shared';
import { videos as rawVideos } from '@/data/videos';
import type { Video as VideoGridVideo } from '@/components/videos/VideoGrid';

// Transform data to match VideoGrid's expected format
const videos: VideoGridVideo[] = rawVideos.map((v) => ({
  id: v.id,
  videoId: v.videoId,
  title: v.title,
  description: v.description,
  thumbnailUrl: v.thumbnailUrl,
  duration: v.duration,
  date: v.publishedAt,
  platform: v.platform,
  category: v.category,
  featured: v.featured,
}));

const categories = [
  { value: 'all', label: 'All Videos' },
  { value: 'stories', label: 'Stories' },
  { value: 'events', label: 'Events' },
  { value: 'education', label: 'Educational' },
  { value: 'awareness', label: 'Awareness' },
];

export default function VideosPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [featuredVideo, setFeaturedVideo] = useState<VideoGridVideo | null>(
    videos.find((v) => rawVideos.find((rv) => rv.id === v.id)?.featured) || videos[0] || null
  );

  const filteredVideos =
    selectedCategory === 'all'
      ? videos
      : videos.filter((video) => video.category === selectedCategory);

  return (
    <>
      <PremiumHero
        title={
          <>
            Watch <span className="text-blue-600">Our Stories</span>
          </>
        }
        description="Experience the power of kindness through our video collection. From personal testimonials to community events, see the impact we're making together."
        background="gradient"
      />

      {/* Featured Video */}
      {featuredVideo && (
        <PremiumSection background="muted" spacing="md">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Video</h2>
          <div className="max-w-4xl mx-auto">
            {featuredVideo.platform === 'youtube' ? (
              <YouTubeEmbed
                videoId={featuredVideo.videoId || ''}
                title={featuredVideo.title}
              />
            ) : (
              <TikTokEmbed embedId={featuredVideo.videoId || ''} title={featuredVideo.title} />
            )}
            <div className="mt-6">
              <h3 className="text-2xl font-semibold mb-2">{featuredVideo.title}</h3>
              {featuredVideo.description && (
                <p className="text-gray-600 text-lg">
                  {featuredVideo.description}
                </p>
              )}
            </div>
          </div>
        </PremiumSection>
      )}

      {/* Video Gallery */}
      <PremiumSection background="white" spacing="lg">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === cat.value
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Video Grid */}
          <VideoGrid
            videos={filteredVideos}
            showFilters={false}
          />

          {filteredVideos.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[var(--color-muted-foreground)]">
                No videos found in this category.
              </p>
            </div>
          )}
      </PremiumSection>

      {/* Social CTA */}
      <PremiumSection
        background="gradient"
        spacing="lg"
        className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800"
      >
        <div className="text-center text-white max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Follow Us for More</h2>
          <p className="text-xl mb-10 opacity-95">
            Subscribe to our YouTube channel and follow us on TikTok for the latest
            updates and inspiring content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://youtube.com/@kindnessforautism"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-red-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Subscribe on YouTube
            </a>
            <a
              href="https://tiktok.com/@kindnessforautism"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-black text-white rounded-lg font-semibold text-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Follow on TikTok
            </a>
          </div>
        </div>
      </PremiumSection>
    </>
  );
}

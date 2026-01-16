'use client';

import { useState } from 'react';
import { Container } from '@/components/layout';
import { VideoGrid, YouTubeEmbed, TikTokEmbed } from '@/components/videos';
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
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary-light)]/10 via-white to-[var(--color-autism-gold)]/10 py-16 lg:py-24">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Watch <span className="text-gradient-autism">Our Stories</span>
            </h1>
            <p className="text-lg text-[var(--color-muted-foreground)]">
              Experience the power of kindness through our video collection. From personal
              testimonials to community events, see the impact we&apos;re making together.
            </p>
          </div>
        </Container>
      </section>

      {/* Featured Video */}
      {featuredVideo && (
        <section className="section bg-[var(--color-muted)]">
          <Container>
            <h2 className="text-2xl font-bold mb-6">Featured Video</h2>
            <div className="max-w-4xl mx-auto">
              {featuredVideo.platform === 'youtube' ? (
                <YouTubeEmbed
                  videoId={featuredVideo.videoId || ''}
                  title={featuredVideo.title}
                />
              ) : (
                <TikTokEmbed embedId={featuredVideo.videoId || ''} title={featuredVideo.title} />
              )}
              <div className="mt-4">
                <h3 className="text-xl font-semibold">{featuredVideo.title}</h3>
                {featuredVideo.description && (
                  <p className="text-[var(--color-muted-foreground)] mt-2">
                    {featuredVideo.description}
                  </p>
                )}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Video Gallery */}
      <section className="section">
        <Container>
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === cat.value
                    ? 'bg-[var(--color-primary)] text-white'
                    : 'bg-[var(--color-muted)] text-[var(--color-foreground)] hover:bg-[var(--color-border)]'
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
        </Container>
      </section>

      {/* Social CTA */}
      <section className="section bg-gradient-to-r from-[var(--color-autism-blue)] to-[var(--color-primary)]">
        <Container>
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Follow Us for More</h2>
            <p className="text-lg mb-8 opacity-90">
              Subscribe to our YouTube channel and follow us on TikTok for the latest
              updates and inspiring content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://youtube.com/@kindnessforautism"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg bg-white text-red-600 hover:bg-gray-100"
              >
                Subscribe on YouTube
              </a>
              <a
                href="https://tiktok.com/@kindnessforautism"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg bg-black text-white hover:bg-gray-900"
              >
                Follow on TikTok
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

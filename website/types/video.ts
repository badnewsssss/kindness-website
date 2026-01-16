/**
 * Video Type Definitions
 *
 * Type definitions for video content including testimonials, event coverage,
 * and educational materials about autism awareness.
 */

/**
 * Supported video platforms
 */
export type VideoPlatform = 'youtube' | 'tiktok';

/**
 * Video content categories
 */
export type VideoCategory =
  | 'testimonials'
  | 'testimonial'
  | 'events'
  | 'event'
  | 'educational'
  | 'coin-moments'
  | 'awareness'
  | 'stories'
  | 'tips'
  | 'education';

/**
 * Video interface representing embedded video content
 */
export interface Video {
  /** Unique identifier for the video */
  id: string;

  /** Video title */
  title: string;

  /** Video description or summary */
  description: string;

  /** Platform where the video is hosted */
  platform: VideoPlatform;

  /** Platform-specific embed ID (YouTube video ID or TikTok video ID) */
  embedId?: string;

  /** Alternative: videoId (alias for embedId) */
  videoId?: string;

  /** Thumbnail image - can be an object or simple URL string */
  thumbnail?: {
    /** Thumbnail URL */
    src: string;
    /** Alt text for thumbnail */
    alt: string;
    /** Optional blur data URL */
    blurDataUrl?: string;
  };

  /** Alternative: simple thumbnail URL string */
  thumbnailUrl?: string;

  /** Video duration in seconds or as formatted string */
  duration: number | string;

  /** Publication or upload date (ISO 8601 format) */
  date?: string;

  /** Alternative: publishedAt */
  publishedAt?: string;

  /** Primary category for the video */
  category: VideoCategory;

  /** Whether this video is featured */
  featured: boolean;

  /** Optional view count */
  views?: number;

  /** Optional like count */
  likes?: number;
}

/**
 * Video preview for list displays
 */
export type VideoPreview = Pick<
  Video,
  'id' | 'title' | 'description' | 'platform' | 'thumbnail' | 'duration' | 'date' | 'category' | 'featured'
>;

/**
 * Video embed configuration
 */
export interface VideoEmbedConfig {
  /** Video to embed */
  video: Video;

  /** Whether to autoplay (default: false) */
  autoplay?: boolean;

  /** Whether to show controls (default: true) */
  controls?: boolean;

  /** Whether to loop the video (default: false) */
  loop?: boolean;

  /** Whether to mute by default (default: false) */
  muted?: boolean;

  /** Additional CSS classes */
  className?: string;
}

/**
 * Video filter criteria
 */
export interface VideoFilters {
  /** Filter by category */
  category?: VideoCategory;

  /** Filter by platform */
  platform?: VideoPlatform;

  /** Show only featured videos */
  featured?: boolean;

  /** Filter by minimum duration in seconds */
  minDuration?: number;

  /** Filter by maximum duration in seconds */
  maxDuration?: number;

  /** Search query for title/description */
  query?: string;
}

/**
 * Video sort options
 */
export type VideoSortOption = 'newest' | 'oldest' | 'popular' | 'duration-asc' | 'duration-desc';

/**
 * Playlist grouping related videos
 */
export interface VideoPlaylist {
  /** Unique identifier for the playlist */
  id: string;

  /** Playlist title */
  title: string;

  /** Playlist description */
  description: string;

  /** Array of video IDs in this playlist */
  videoIds: string[];

  /** Total number of videos */
  videoCount: number;

  /** Total duration of all videos in seconds */
  totalDuration: number;

  /** Playlist category */
  category: VideoCategory;

  /** Date the playlist was created (ISO 8601 format) */
  createdAt: string;

  /** Date the playlist was last updated (ISO 8601 format) */
  updatedAt: string;
}

/**
 * Helper function type for formatting video duration
 */
export type FormatDurationFn = (seconds: number) => string;

/**
 * Helper function type for generating embed URL
 */
export type GetEmbedUrlFn = (platform: VideoPlatform, embedId: string, config?: Partial<VideoEmbedConfig>) => string;

/**
 * Video components for displaying and managing video content
 * Supports YouTube and TikTok embeds with accessible, responsive designs
 */

export { YouTubeEmbed, type YouTubeEmbedProps } from './YouTubeEmbed';
export { TikTokEmbed, type TikTokEmbedProps } from './TikTokEmbed';
export { VideoCard, type VideoCardProps } from './VideoCard';
export { VideoGrid, type VideoGridProps, type Video } from './VideoGrid';
export { VideoPlayer, type VideoPlayerProps } from './VideoPlayer';

// Re-export shared types
export type { Platform, VideoMetadata, PlayerMode, GridColumns } from './types';

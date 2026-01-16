/**
 * Type definitions for video components
 */

export type Platform = 'youtube' | 'tiktok';

export interface Video {
  id: string;
  videoId: string;
  title: string;
  description?: string;
  thumbnailUrl: string;
  duration?: string;
  date?: Date | string;
  platform: Platform;
  category?: string;
}

export interface VideoMetadata {
  title: string;
  description?: string;
  date?: Date | string;
  category?: string;
}

export type PlayerMode = 'modal' | 'inline';

export type GridColumns = 1 | 2 | 3 | 4;

/**
 * Gallery Type Definitions
 *
 * Type definitions for the photo gallery showcasing events, coin journey moments,
 * and community activities related to autism awareness.
 */

/**
 * Gallery image categories representing different types of visual content
 */
export type GalleryCategory =
  | 'events'
  | 'coin-journey'
  | 'community'
  | 'awareness'
  | 'celebrations'
  | 'activities';

/**
 * Gallery image interface representing a single photo in the gallery
 */
export interface GalleryImage {
  /** Unique identifier for the image */
  id: string;

  /** Image title */
  title: string;

  /** Image description */
  description: string;

  /** Image source URL or path */
  imagePath: string;

  /** Accessible alt text describing the image */
  altText: string;

  /** Image width in pixels */
  width: number;

  /** Image height in pixels */
  height: number;

  /** Primary category for the image */
  category: GalleryCategory;

  /** Date the photo was taken or uploaded (ISO 8601 format) */
  date: string;

  /** Optional location where the photo was taken */
  location?: string;

  /** Whether this image is featured in highlights */
  featured: boolean;
}

/**
 * Gallery album grouping related images together
 */
export interface GalleryAlbum {
  /** Unique identifier for the album */
  id: string;

  /** Album title */
  title: string;

  /** Album description */
  description: string;

  /** Album category */
  category: GalleryCategory;

  /** Date the album was created (ISO 8601 format) */
  date: string;

  /** Cover image for the album */
  coverImage: Pick<GalleryImage, 'imagePath' | 'altText'>;

  /** Array of image IDs in this album */
  imageIds: string[];

  /** Total number of images in the album */
  imageCount: number;
}

/**
 * Gallery filter criteria for browsing and searching
 */
export interface GalleryFilters {
  /** Filter by category */
  category?: GalleryCategory;

  /** Show only featured images */
  featured?: boolean;

  /** Filter by date range */
  dateRange?: {
    start: string;
    end: string;
  };

  /** Filter by location */
  location?: string;

  /** Search query for caption/alt text */
  query?: string;
}

/**
 * Gallery sort options
 */
export type GallerySortOption = 'newest' | 'oldest' | 'featured';

/**
 * Lightbox state for full-screen image viewing
 */
export interface GalleryLightboxState {
  /** Whether the lightbox is open */
  isOpen: boolean;

  /** Currently displayed image index */
  currentIndex: number;

  /** Array of images in the current view */
  images: GalleryImage[];
}

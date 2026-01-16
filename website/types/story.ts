/**
 * Story Type Definitions
 *
 * Type definitions for autism awareness stories and personal narratives
 * shared by the Kindness for Autism community.
 */

/**
 * Story categories representing different contexts where autism awareness
 * and kindness initiatives take place.
 */
export type StoryCategory =
  | 'personal'
  | 'community'
  | 'family'
  | 'workplace'
  | 'school'
  | 'healthcare'
  | 'everyday';

/**
 * Author information for a story
 */
export interface StoryAuthor {
  /** Full name of the story author */
  name: string;

  /** Optional location (city, state, or country) */
  location?: string;

  /** Optional avatar image URL */
  avatar?: string;
}

/**
 * Image data for a story
 */
export interface StoryImage {
  /** Image source URL or path */
  src: string;

  /** Accessible alt text describing the image */
  alt: string;

  /** Optional blur data URL for progressive loading */
  blurDataUrl?: string;
}

/**
 * Story metadata including engagement metrics
 */
export interface StoryMetadata {
  /** Estimated reading time in minutes */
  readTime: number;

  /** Number of likes/hearts received */
  likes: number;

  /** Number of times shared */
  shares: number;
}

/**
 * Role of the story author
 */
export type StoryAuthorRole = 'parent' | 'sibling' | 'educator' | 'therapist' | 'community' | 'self-advocate';

/**
 * Complete story interface representing a community-shared narrative
 * about autism awareness, acceptance, and kindness.
 */
export interface Story {
  /** Unique identifier for the story */
  id: string;

  /** Story title */
  title: string;

  /** URL-friendly slug for the story */
  slug?: string;

  /** Brief excerpt or summary (typically 1-2 sentences) */
  excerpt: string;

  /** Full story content (supports markdown) */
  content: string;

  /** Story author - can be a StoryAuthor object or simple name string */
  author: StoryAuthor | string;

  /** Author's role in the community (when using simple author string) */
  authorRole?: StoryAuthorRole;

  /** Publication date in ISO 8601 format */
  date: string;

  /** Primary category for the story */
  category: StoryCategory;

  /** Searchable tags for filtering and discovery */
  tags?: string[];

  /** Whether this story is featured on the homepage */
  featured: boolean;

  /** Hero image - can be a StoryImage object */
  image?: StoryImage;

  /** Simple image path string (alternative to image object) */
  imagePath?: string;

  /** Engagement and reading metadata - optional */
  metadata?: StoryMetadata;
}

/**
 * Partial story data for list/preview displays
 */
export type StoryPreview = Pick<
  Story,
  'id' | 'title' | 'slug' | 'excerpt' | 'author' | 'authorRole' | 'date' | 'category' | 'featured' | 'image' | 'imagePath' | 'metadata'
>;

/**
 * Story filter criteria for searching and filtering
 */
export interface StoryFilters {
  /** Filter by category */
  category?: StoryCategory;

  /** Filter by tags (any match) */
  tags?: string[];

  /** Show only featured stories */
  featured?: boolean;

  /** Search query for title/content */
  query?: string;
}

/**
 * Story sort options
 */
export type StorySortOption = 'newest' | 'oldest' | 'popular' | 'trending';

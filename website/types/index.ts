/**
 * Type Definitions Index
 *
 * Central export point for all type definitions used in the
 * Kindness for Autism website.
 *
 * @module types
 */

// Story types
export type {
  Story,
  StoryAuthor,
  StoryImage,
  StoryMetadata,
  StoryCategory,
  StoryPreview,
  StoryFilters,
  StorySortOption,
} from './story';

// Gallery types
export type {
  GalleryImage,
  GalleryAlbum,
  GalleryCategory,
  GalleryFilters,
  GallerySortOption,
  GalleryLightboxState,
} from './gallery';

// Video types
export type {
  Video,
  VideoPlatform,
  VideoCategory,
  VideoPreview,
  VideoEmbedConfig,
  VideoFilters,
  VideoSortOption,
  VideoPlaylist,
  FormatDurationFn,
  GetEmbedUrlFn,
} from './video';

// Committee types
export type {
  CommitteeMember,
  CommitteeSocial,
  CommitteeImage,
  ExpertiseArea,
  CommitteeMemberPreview,
  CommitteeSection,
  CommitteeFilters,
  CommitteeSortOption,
} from './committee';

// Navigation types (if exists)
export type {
  NavItem,
  FooterLinkGroup,
  SocialLink,
  SocialPlatform,
} from './navigation';

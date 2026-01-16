/**
 * Committee Type Definitions
 *
 * Type definitions for committee members, board members, and organizational
 * leadership for the Kindness for Autism nonprofit.
 */

/**
 * Social media links for a committee member
 */
export interface CommitteeSocial {
  /** LinkedIn profile URL */
  linkedin?: string;

  /** Twitter/X profile URL */
  twitter?: string;

  /** Facebook profile URL */
  facebook?: string;

  /** Instagram profile URL */
  instagram?: string;

  /** Personal or professional website URL */
  website?: string;

  /** Email address */
  email?: string;
}

/**
 * Committee member image
 */
export interface CommitteeImage {
  /** Image source URL or path */
  src: string;

  /** Accessible alt text */
  alt: string;

  /** Optional blur data URL for progressive loading */
  blurDataUrl?: string;
}

/**
 * Areas of expertise or focus
 * Using string type to allow flexible expertise descriptions
 */
export type ExpertiseArea = string;

/**
 * Committee role types
 */
export type CommitteeRole = 'Chair' | 'Vice Chair' | 'Board Member' | 'Advisor' | 'Volunteer';

/**
 * Committee member interface representing leadership and key contributors
 * to the Kindness for Autism organization.
 */
export interface CommitteeMember {
  /** Unique identifier for the member */
  id: string;

  /** Full name of the committee member */
  name: string;

  /** Committee role (e.g., "Chair", "Vice Chair", "Board Member", "Advisor") - optional if included in title */
  role?: CommitteeRole;

  /** Professional title - can include role prefix (e.g., "Chair - Clinical Psychologist") */
  title: string;

  /** Optional affiliated organization or company */
  organization?: string;

  /** Biographical information about the member */
  bio: string;

  /** Areas of expertise or focus */
  expertise: ExpertiseArea[];

  /** Profile image - can be an object or simple URL string */
  image?: CommitteeImage;

  /** Alternative: simple photo URL string */
  photoUrl?: string;

  /** Optional social media and contact links */
  social?: CommitteeSocial;

  /** Alternative: socialLinks */
  socialLinks?: CommitteeSocial;

  /** Display order for listing (lower numbers appear first) */
  order?: number;

  /** Optional pronouns (e.g., "she/her", "he/him", "they/them") */
  pronouns?: string;

  /** Optional quote or personal message */
  quote?: string;

  /** Whether this member is currently active */
  active?: boolean;

  /** Date joined the committee (ISO 8601 format) */
  joinedDate?: string;

  /** Alternative: joinedAt */
  joinedAt?: string;
}

/**
 * Committee member preview for compact displays
 */
export type CommitteeMemberPreview = Pick<
  CommitteeMember,
  'id' | 'name' | 'role' | 'title' | 'organization' | 'image' | 'photoUrl' | 'order'
>;

/**
 * Committee section grouping (e.g., Board of Directors, Advisory Board, Volunteers)
 */
export interface CommitteeSection {
  /** Unique identifier for the section */
  id: string;

  /** Section title (e.g., "Board of Directors") */
  title: string;

  /** Optional section description */
  description?: string;

  /** Array of member IDs in this section */
  memberIds: string[];

  /** Display order for sections */
  order: number;
}

/**
 * Committee filter criteria
 */
export interface CommitteeFilters {
  /** Filter by expertise area */
  expertise?: ExpertiseArea;

  /** Show only active members */
  active?: boolean;

  /** Filter by organization */
  organization?: string;

  /** Search query for name/bio */
  query?: string;
}

/**
 * Committee sort options
 */
export type CommitteeSortOption = 'order' | 'name' | 'title' | 'joined-date';

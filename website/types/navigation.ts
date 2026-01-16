/**
 * Navigation item interface for site navigation
 */
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
  icon?: string;
}

/**
 * Footer link group
 */
export interface FooterLinkGroup {
  title: string;
  links: NavItem[];
}

/**
 * Social media link
 */
export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  label: string;
}

/**
 * Supported social platforms
 */
export type SocialPlatform =
  | 'facebook'
  | 'instagram'
  | 'twitter'
  | 'youtube'
  | 'tiktok'
  | 'linkedin';

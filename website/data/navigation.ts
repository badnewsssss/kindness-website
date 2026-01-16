import { NavItem } from '@/types/navigation';

export const navigationLinks: NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Gallery',
    href: '/gallery',
  },
  {
    label: 'Videos',
    href: '/videos',
  },
  {
    label: 'Stories',
    href: '/stories',
  },
  {
    label: 'Advisory Committee',
    href: '/committee',
  },
  {
    label: 'Donate',
    href: '/donate',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export const footerLinks = {
  about: [
    { label: 'Our Mission', href: '/about#mission' },
    { label: 'Our Story', href: '/about#story' },
    { label: 'Advisory Committee', href: '/committee' },
    { label: 'Contact Us', href: '/contact' },
  ],
  resources: [
    { label: 'Stories of Kindness', href: '/stories' },
    { label: 'Photo Gallery', href: '/gallery' },
    { label: 'Video Library', href: '/videos' },
    { label: 'Kindness Coin Journey', href: '/coin-journey' },
  ],
  getInvolved: [
    { label: 'Donate', href: '/donate' },
    { label: 'Volunteer', href: '/volunteer' },
    { label: 'Share Your Story', href: '/stories/submit' },
    { label: 'Spread Kindness', href: '/spread-kindness' },
  ],
};

export const socialLinks = [
  {
    platform: 'facebook' as const,
    url: 'https://facebook.com/kindnessforautism',
    label: 'Follow us on Facebook',
  },
  {
    platform: 'instagram' as const,
    url: 'https://instagram.com/kindnessforautism',
    label: 'Follow us on Instagram',
  },
  {
    platform: 'twitter' as const,
    url: 'https://twitter.com/kindness4autism',
    label: 'Follow us on Twitter',
  },
  {
    platform: 'youtube' as const,
    url: 'https://youtube.com/@kindnessforautism',
    label: 'Subscribe on YouTube',
  },
  {
    platform: 'tiktok' as const,
    url: 'https://tiktok.com/@kindnessforautism',
    label: 'Follow us on TikTok',
  },
];

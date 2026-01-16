/**
 * Site Configuration for Kindness for Autism
 *
 * This file contains all the core configuration for the website including
 * metadata, navigation, social links, and organization information.
 */

export const siteConfig = {
  /**
   * Basic site information
   */
  name: 'Kindness for Autism',
  tagline: 'Spreading Kindness, One Act at a Time',
  description:
    'Join Charlie Miller and the Kindness for Autism community in spreading awareness, acceptance, and compassion for individuals with autism and their families. Together, we can make a difference through acts of kindness.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://kindnessforautism.org',

  /**
   * Founder and Organization Information
   */
  founder: {
    name: 'Charlie Miller',
    role: 'Founder & Advocate',
    bio: 'Charlie Miller is a passionate advocate for autism awareness and acceptance. Through Kindness for Autism, Charlie works to create a more inclusive and understanding world for individuals on the autism spectrum.',
  },

  /**
   * Mission and Values
   */
  mission:
    'Our mission is to promote autism awareness, foster acceptance, and create meaningful change through acts of kindness. We believe that every person deserves understanding, respect, and support.',

  vision:
    'A world where individuals with autism are fully accepted, supported, and celebrated for their unique strengths and perspectives.',

  values: [
    {
      title: 'Compassion',
      description:
        'We approach every interaction with empathy and understanding.',
    },
    {
      title: 'Inclusion',
      description: 'We celebrate neurodiversity and embrace differences.',
    },
    {
      title: 'Empowerment',
      description:
        'We provide resources and support to help individuals and families thrive.',
    },
    {
      title: 'Community',
      description:
        'We build connections and foster a supportive network of advocates.',
    },
  ],

  /**
   * Contact Information
   */
  contact: {
    email: 'info@kindnessforautism.org',
    phone: '+1 (555) 123-4567', // Update with real phone number
    address: {
      street: '123 Kindness Way', // Update with real address
      city: 'City',
      state: 'ST',
      zip: '12345',
      country: 'United States',
    },
  },

  /**
   * Social Media Links
   */
  social: {
    facebook: 'https://facebook.com/kindnessforautism',
    twitter: 'https://twitter.com/kindness4autism',
    instagram: 'https://instagram.com/kindnessforautism',
    linkedin: 'https://linkedin.com/company/kindness-for-autism',
    youtube: 'https://youtube.com/@kindnessforautism',
    tiktok: 'https://tiktok.com/@kindnessforautism',
  },

  /**
   * Navigation Menu Items
   */
  navigation: {
    main: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Gallery', href: '/gallery' },
      { name: 'Videos', href: '/videos' },
      { name: 'Stories', href: '/stories' },
      { name: 'Committee', href: '/advisory-committee' },
      { name: 'Donate', href: '/donate' },
      { name: 'Contact', href: '/contact' },
    ],
    footer: {
      about: [
        { name: 'Our Mission', href: '/about#mission' },
        { name: 'Our Team', href: '/about#team' },
        { name: 'Our Story', href: '/about#story' },
        { name: 'Impact', href: '/impact' },
      ],
      programs: [
        { name: 'Awareness Campaigns', href: '/programs/awareness' },
        { name: 'Support Groups', href: '/programs/support-groups' },
        { name: 'Educational Workshops', href: '/programs/workshops' },
        { name: 'Community Events', href: '/programs/events' },
      ],
      resources: [
        { name: 'For Families', href: '/resources/families' },
        { name: 'For Educators', href: '/resources/educators' },
        { name: 'For Employers', href: '/resources/employers' },
        { name: 'Research & Articles', href: '/resources/research' },
      ],
      support: [
        { name: 'Donate', href: '/donate' },
        { name: 'Volunteer', href: '/volunteer' },
        { name: 'Partner With Us', href: '/partner' },
        { name: 'FAQ', href: '/faq' },
      ],
      legal: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Accessibility', href: '/accessibility' },
      ],
    },
  },

  /**
   * SEO Keywords
   */
  keywords: [
    'autism awareness',
    'autism acceptance',
    'autism advocacy',
    'autism support',
    'neurodiversity',
    'autism spectrum disorder',
    'ASD',
    'autism families',
    'autism resources',
    'autism community',
    'Charlie Miller',
    'kindness',
    'inclusion',
    'special needs',
    'autism education',
    'autism nonprofit',
  ],

  /**
   * Organization Metadata
   */
  organization: {
    type: 'NonProfit',
    founded: 2024, // Update with actual founding year
    ein: '12-3456789', // Update with actual EIN (Tax ID)
    registeredCharity: true,
  },

  /**
   * Donation Information
   */
  donation: {
    enabled: true,
    platforms: ['stripe', 'paypal'],
    minimumAmount: 5,
    suggestedAmounts: [10, 25, 50, 100, 250],
    recurringEnabled: true,
  },

  /**
   * Feature Flags
   */
  features: {
    blog: true,
    events: true,
    newsletter: true,
    volunteerSignup: true,
    donationForms: true,
    resourceLibrary: true,
    communityForum: false, // Coming soon
  },

  /**
   * Theme Configuration
   */
  theme: {
    primaryColor: '#3b9af4',
    secondaryColor: '#22c55e',
    autismBlue: '#0057a8',
    autismGold: '#ffc425',
  },

  /**
   * Analytics and Tracking
   */
  analytics: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID,
    facebookPixelId: process.env.NEXT_PUBLIC_FB_PIXEL_ID,
    enabled: process.env.NODE_ENV === 'production',
  },
} as const;

/**
 * Type exports for TypeScript usage
 */
export type SiteConfig = typeof siteConfig;
export type NavigationItem = (typeof siteConfig.navigation.main)[number];
export type SocialPlatform = keyof typeof siteConfig.social;

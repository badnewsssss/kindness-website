import type { GalleryImage } from './ImageCard';

/**
 * Sample gallery data for testing and development.
 * Replace with real image URLs and data in production.
 */
export const SAMPLE_GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'event-1',
    src: '/images/gallery/awareness-walk-2024.jpg',
    alt: 'Children and families walking together at autism awareness event with blue balloons',
    caption: 'Annual Autism Awareness Walk 2024 - Building community through compassion',
    category: 'Events',
    width: 1200,
    height: 800,
  },
  {
    id: 'coin-1',
    src: '/images/gallery/first-coin-drop.jpg',
    alt: 'Young child placing a golden kindness coin into collection box with a smile',
    caption: 'First kindness coin donated at Lincoln Elementary School',
    category: 'Coin Journey',
    width: 1200,
    height: 800,
  },
  {
    id: 'community-1',
    src: '/images/gallery/support-meeting.jpg',
    alt: 'Parents and caregivers sitting in circle at community support meeting',
    caption: 'Monthly community support gathering - sharing experiences and hope',
    category: 'Community',
    width: 1200,
    height: 900,
  },
  {
    id: 'awareness-1',
    src: '/images/gallery/school-presentation.jpg',
    alt: 'Volunteer presenting autism awareness information to elementary school class',
    caption: 'Autism awareness education at local elementary school',
    category: 'Awareness',
    width: 1200,
    height: 800,
  },
  {
    id: 'celebration-1',
    src: '/images/gallery/birthday-party.jpg',
    alt: 'Children with autism enjoying sensory-friendly birthday celebration',
    caption: 'Sensory-friendly birthday celebration at community center',
    category: 'Celebrations',
    width: 1200,
    height: 800,
  },
  {
    id: 'event-2',
    src: '/images/gallery/fundraiser-2024.jpg',
    alt: 'Community members at outdoor fundraising event with food trucks and activities',
    caption: 'Spring Fundraiser 2024 - Raising funds for autism support programs',
    category: 'Events',
    width: 1200,
    height: 800,
  },
  {
    id: 'coin-2',
    src: '/images/gallery/coin-collection-box.jpg',
    alt: 'Decorated collection box filled with golden kindness coins',
    caption: 'Kindness coins collected throughout the year',
    category: 'Coin Journey',
    width: 1200,
    height: 1200,
  },
  {
    id: 'community-2',
    src: '/images/gallery/volunteer-group.jpg',
    alt: 'Group photo of smiling volunteers wearing blue autism awareness t-shirts',
    caption: 'Our amazing volunteer team - Thank you for your dedication!',
    category: 'Community',
    width: 1200,
    height: 800,
  },
  {
    id: 'awareness-2',
    src: '/images/gallery/puzzle-piece-art.jpg',
    alt: 'Colorful autism puzzle piece artwork created by children',
    caption: 'Community art project celebrating neurodiversity',
    category: 'Awareness',
    width: 1200,
    height: 900,
  },
  {
    id: 'celebration-2',
    src: '/images/gallery/graduation-ceremony.jpg',
    alt: 'Young adult with autism receiving certificate at graduation ceremony',
    caption: 'Celebrating achievements at our skills training program graduation',
    category: 'Celebrations',
    width: 1200,
    height: 800,
  },
  {
    id: 'event-3',
    src: '/images/gallery/park-cleanup.jpg',
    alt: 'Families with children with autism participating in community park cleanup',
    caption: 'Community service day - Cleaning up local park together',
    category: 'Events',
    width: 1200,
    height: 800,
  },
  {
    id: 'coin-3',
    src: '/images/gallery/coin-donation-ceremony.jpg',
    alt: 'Child presenting kindness coin to organization representative',
    caption: 'Kindness coin donation ceremony at community center',
    category: 'Coin Journey',
    width: 1200,
    height: 800,
  },
  {
    id: 'community-3',
    src: '/images/gallery/family-picnic.jpg',
    alt: 'Families enjoying outdoor picnic on sunny day with activities',
    caption: 'Annual family picnic - Building connections and friendships',
    category: 'Community',
    width: 1200,
    height: 800,
  },
  {
    id: 'awareness-3',
    src: '/images/gallery/blue-lights.jpg',
    alt: 'Building illuminated with blue lights for autism awareness month',
    caption: 'Local landmarks light up blue for Autism Awareness Month',
    category: 'Awareness',
    width: 1200,
    height: 800,
  },
  {
    id: 'celebration-3',
    src: '/images/gallery/award-ceremony.jpg',
    alt: 'Volunteers receiving community service awards at ceremony',
    caption: 'Honoring our outstanding volunteers at annual awards ceremony',
    category: 'Celebrations',
    width: 1200,
    height: 800,
  },
  {
    id: 'event-4',
    src: '/images/gallery/workshop-session.jpg',
    alt: 'Parents attending educational workshop on autism support strategies',
    caption: 'Parent education workshop - Learning new support strategies',
    category: 'Events',
    width: 1200,
    height: 800,
  },
];

/**
 * Get images by category
 */
export function getImagesByCategory(category: string): GalleryImage[] {
  if (category === 'All') {
    return SAMPLE_GALLERY_IMAGES;
  }
  return SAMPLE_GALLERY_IMAGES.filter((image) => image.category === category);
}

/**
 * Get random featured images
 */
export function getFeaturedImages(count: number = 3): GalleryImage[] {
  const shuffled = [...SAMPLE_GALLERY_IMAGES].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

/**
 * Get recent images
 */
export function getRecentImages(count: number = 6): GalleryImage[] {
  return SAMPLE_GALLERY_IMAGES.slice(0, count);
}

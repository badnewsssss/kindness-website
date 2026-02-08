import { Video } from '@/types/video';

export const videos: Video[] = [
  {
    id: 'video-001',
    title: 'Understanding Autism: A Parent\'s Journey',
    description: 'A heartfelt testimonial from a mother sharing her family\'s experience with autism diagnosis and the community support that made a difference.',
    platform: 'youtube',
    videoId: 'UG1i4Fslo-0',
    thumbnailUrl: 'https://img.youtube.com/vi/UG1i4Fslo-0/hqdefault.jpg',
    duration: '8:42',
    publishedAt: '2024-11-01',
    featured: true,
    category: 'stories',
  },
  {
    id: 'video-002',
    title: 'Autism Awareness Walk 2024 Highlights',
    description: 'Recap of our annual autism awareness walk featuring hundreds of community members coming together for acceptance and understanding.',
    platform: 'youtube',
    videoId: 'UG1i4Fslo-0',
    thumbnailUrl: 'https://img.youtube.com/vi/UG1i4Fslo-0/hqdefault.jpg',
    duration: '5:15',
    publishedAt: '2024-04-05',
    featured: true,
    category: 'events',
  },
  {
    id: 'video-003',
    title: 'Creating Sensory-Friendly Spaces',
    description: 'Educational video showing how businesses and schools can create welcoming, sensory-friendly environments for individuals with autism.',
    platform: 'youtube',
    videoId: 'UG1i4Fslo-0',
    thumbnailUrl: 'https://img.youtube.com/vi/UG1i4Fslo-0/hqdefault.jpg',
    duration: '12:30',
    publishedAt: '2024-09-15',
    featured: false,
    category: 'education',
  },
  {
    id: 'video-004',
    title: 'The Kindness Coin Journey',
    description: 'Follow the journey of our kindness coin as it travels through the community, inspiring acts of acceptance and inclusion.',
    platform: 'tiktok',
    videoId: '7234567890123456789',
    thumbnailUrl: 'https://placehold.co/640x360/1a1a2e/ffffff?text=TikTok+Video',
    duration: '1:00',
    publishedAt: '2024-10-12',
    featured: true,
    category: 'awareness',
  },
  {
    id: 'video-005',
    title: 'Tips for Supporting Autistic Children in School',
    description: 'Educators and therapists share practical strategies for creating inclusive classroom environments.',
    platform: 'youtube',
    videoId: 'UG1i4Fslo-0',
    thumbnailUrl: 'https://img.youtube.com/vi/UG1i4Fslo-0/hqdefault.jpg',
    duration: '15:20',
    publishedAt: '2024-08-20',
    featured: false,
    category: 'tips',
  },
  {
    id: 'video-006',
    title: 'Community Spotlight: Inclusive Play Day',
    description: 'See how our neighborhood created a monthly play day where children of all abilities can participate and make friends.',
    platform: 'youtube',
    videoId: 'UG1i4Fslo-0',
    thumbnailUrl: 'https://img.youtube.com/vi/UG1i4Fslo-0/hqdefault.jpg',
    duration: '6:45',
    publishedAt: '2024-10-08',
    featured: false,
    category: 'events',
  },
];

export const featuredVideos = videos.filter(video => video.featured);
export const recentVideos = videos.slice(0, 3);
export const videosByCategory = (category: string) =>
  videos.filter(video => video.category === category);
export const youtubeVideos = videos.filter(video => video.platform === 'youtube');
export const tiktokVideos = videos.filter(video => video.platform === 'tiktok');

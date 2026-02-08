'use client';

import { Container } from '@/components/layout';
import { PhotoGrid } from '@/components/gallery';
import { PremiumHero, PremiumSection } from '@/components/shared';
import { galleryImages } from '@/data/gallery';

export default function GalleryPage() {
  // Transform data to match PhotoGrid's expected format
  const images = galleryImages.map((img) => ({
    id: img.id,
    src: img.imagePath,
    alt: img.altText,
    title: img.title,
    description: img.description,
    category: img.category,
    date: img.date,
    featured: img.featured,
    width: img.width,
    height: img.height,
  }));

  return (
    <>
      <PremiumHero
        title="Moments of Kindness"
        description="Browse through captured moments of compassion, joy, and connection from our community. Each photo tells a story of kindness in action."
        background="gradient"
      />

      <PremiumSection background="white" spacing="lg">
        <PhotoGrid images={images} layout="grid" />
      </PremiumSection>
    </>
  );
}

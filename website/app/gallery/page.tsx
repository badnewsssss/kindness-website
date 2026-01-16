'use client';

import { Container } from '@/components/layout';
import { PhotoGrid } from '@/components/gallery';
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
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary-light)]/10 via-white to-[var(--color-secondary-light)]/10 py-16 lg:py-24">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Moments of <span className="text-gradient">Kindness</span>
            </h1>
            <p className="text-lg text-[var(--color-muted-foreground)]">
              Browse through captured moments of compassion, joy, and connection from our
              community. Each photo tells a story of kindness in action.
            </p>
          </div>
        </Container>
      </section>

      {/* Gallery Section */}
      <section className="section">
        <Container>
          <PhotoGrid images={images} layout="grid" />
        </Container>
      </section>
    </>
  );
}

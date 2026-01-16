'use client';

/**
 * EXAMPLE GALLERY PAGE
 *
 * This file demonstrates how to use the gallery components.
 * Copy this to your app directory (e.g., app/gallery/page.tsx) to create a gallery page.
 */

import { PhotoGrid } from './PhotoGrid';
import { SAMPLE_GALLERY_IMAGES } from './sample-data';

export default function GalleryExamplePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Photo Gallery
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Capturing moments of kindness, community, and autism awareness
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <PhotoGrid
            images={SAMPLE_GALLERY_IMAGES}
            layout="grid"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Share Your Story
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Have photos from one of our events? We would love to see them!
              Share your moments with our community.
            </p>
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Submit Photos
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

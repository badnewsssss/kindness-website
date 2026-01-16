'use client';

import { useState, useMemo, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { ImageCard, type GalleryImage } from './ImageCard';
import { Lightbox } from './Lightbox';
import { GalleryFilter } from './GalleryFilter';
import type { GalleryCategory } from '@/types/gallery';

export interface PhotoGridProps {
  images: GalleryImage[];
  layout?: 'masonry' | 'grid';
  className?: string;
}

type FilterCategory = GalleryCategory | 'all';

/**
 * Responsive photo grid with category filtering and lightbox.
 * Supports both masonry and uniform grid layouts with lazy loading.
 */
export function PhotoGrid({
  images,
  layout = 'grid',
  className,
}: PhotoGridProps) {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Filter images by category
  const filteredImages = useMemo(() => {
    if (activeCategory === 'all') {
      return images;
    }
    return images.filter((image) => image.category === activeCategory);
  }, [images, activeCategory]);

  // Handle image click to open lightbox
  const handleImageClick = useCallback(
    (image: GalleryImage) => {
      const index = filteredImages.findIndex((img) => img.id === image.id);
      if (index !== -1) {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
      }
    },
    [filteredImages]
  );

  // Handle lightbox navigation
  const handleLightboxNavigate = useCallback((index: number) => {
    setCurrentImageIndex(index);
  }, []);

  // Handle lightbox close
  const handleLightboxClose = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  // Handle category change
  const handleCategoryChange = useCallback((category: FilterCategory) => {
    setActiveCategory(category);
  }, []);

  const gridClassName = cn(
    layout === 'masonry'
      ? 'columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4'
      : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'
  );

  return (
    <div className={cn('w-full', className)}>
      {/* Category filter */}
      <div className="mb-8">
        <GalleryFilter
          selectedCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>

      {/* Image count */}
      <div className="mb-4">
        <p className="text-sm text-gray-600">
          Showing <span className="font-semibold">{filteredImages.length}</span>{' '}
          {filteredImages.length === 1 ? 'photo' : 'photos'}
          {activeCategory !== 'all' && (
            <span> in <span className="font-semibold capitalize">{activeCategory.replace('-', ' ')}</span></span>
          )}
        </p>
      </div>

      {/* Photo grid */}
      <div
        role="tabpanel"
        id="gallery-panel-0"
        aria-labelledby="gallery-tab-0"
        className={gridClassName}
      >
        {filteredImages.length > 0 ? (
          filteredImages.map((image) => (
            <div
              key={image.id}
              className={cn(layout === 'masonry' && 'break-inside-avoid')}
            >
              <ImageCard
                image={image}
                onClick={handleImageClick}
              />
            </div>
          ))
        ) : (
          <div className="col-span-full py-12 text-center">
            <p className="text-gray-500 text-lg">
              No photos found in this category.
            </p>
          </div>
        )}
      </div>

      {/* Lightbox modal */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={handleLightboxClose}
        images={filteredImages}
        currentIndex={currentImageIndex}
        onNavigate={handleLightboxNavigate}
      />
    </div>
  );
}

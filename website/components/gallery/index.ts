/**
 * Gallery Components
 *
 * Accessible, performant photo gallery components for the Kindness for Autism website.
 * Includes responsive grid, category filtering, and full-screen lightbox.
 */

export { PhotoGrid } from './PhotoGrid';
export type { PhotoGridProps } from './PhotoGrid';

export { ImageCard } from './ImageCard';
export type { ImageCardProps, GalleryImage } from './ImageCard';

export { Lightbox } from './Lightbox';
export type { LightboxProps } from './Lightbox';

export { GalleryFilter } from './GalleryFilter';
export type { GalleryFilterProps } from './GalleryFilter';
export type { GalleryCategory } from '@/types/gallery';

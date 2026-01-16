'use client';

import { Fragment, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { GalleryImage } from './ImageCard';

export interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: GalleryImage[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

/**
 * Full-screen lightbox modal for viewing gallery images.
 * Features keyboard navigation, focus trap, and reduced motion support.
 */
export function Lightbox({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNavigate,
}: LightboxProps) {
  const currentImage = images[currentIndex];
  const totalImages = images.length;

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          handlePrevious();
          break;
        case 'ArrowRight':
          e.preventDefault();
          handleNext();
          break;
        case 'Escape':
          e.preventDefault();
          onClose();
          break;
        case 'Home':
          e.preventDefault();
          onNavigate(0);
          break;
        case 'End':
          e.preventDefault();
          onNavigate(totalImages - 1);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, totalImages, onClose, onNavigate]);

  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : totalImages - 1;
    onNavigate(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < totalImages - 1 ? currentIndex + 1 : 0;
    onNavigate(newIndex);
  };

  if (!currentImage) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={onClose}
      >
        {/* Backdrop */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/95 backdrop-blur-sm" />
        </Transition.Child>

        {/* Full-screen container */}
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-7xl transform overflow-hidden">
                {/* Close button */}
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close lightbox"
                  className={cn(
                    'absolute top-4 right-4 z-20',
                    'p-2 rounded-full bg-black/50 text-white',
                    'hover:bg-black/70 transition-colors duration-200',
                    'focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black'
                  )}
                >
                  <X className="w-6 h-6" aria-hidden="true" />
                </button>

                {/* Image counter */}
                <div className="absolute top-4 left-4 z-20">
                  <div className="px-3 py-1.5 rounded-full bg-black/50 text-white text-sm font-medium backdrop-blur-sm">
                    <span aria-live="polite" aria-atomic="true">
                      {currentIndex + 1} of {totalImages}
                    </span>
                  </div>
                </div>

                {/* Main image */}
                <div className="relative w-full h-[80vh] flex items-center justify-center">
                  <Image
                    src={currentImage.src}
                    alt={currentImage.alt}
                    fill
                    sizes="100vw"
                    className="object-contain"
                    placeholder={currentImage.blurDataURL ? 'blur' : 'empty'}
                    blurDataURL={currentImage.blurDataURL}
                    priority
                  />
                </div>

                {/* Navigation buttons */}
                {totalImages > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={handlePrevious}
                      aria-label="Previous image"
                      className={cn(
                        'absolute left-4 top-1/2 -translate-y-1/2 z-20',
                        'p-3 rounded-full bg-black/50 text-white',
                        'hover:bg-black/70 transition-colors duration-200',
                        'focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black'
                      )}
                    >
                      <ChevronLeft className="w-6 h-6" aria-hidden="true" />
                    </button>

                    <button
                      type="button"
                      onClick={handleNext}
                      aria-label="Next image"
                      className={cn(
                        'absolute right-4 top-1/2 -translate-y-1/2 z-20',
                        'p-3 rounded-full bg-black/50 text-white',
                        'hover:bg-black/70 transition-colors duration-200',
                        'focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black'
                      )}
                    >
                      <ChevronRight className="w-6 h-6" aria-hidden="true" />
                    </button>
                  </>
                )}

                {/* Caption */}
                {currentImage.caption && (
                  <div className="absolute bottom-0 left-0 right-0 z-20">
                    <div className="bg-gradient-to-t from-black/80 to-transparent p-6">
                      <Dialog.Description className="text-white text-lg font-medium text-center">
                        {currentImage.caption}
                      </Dialog.Description>
                      <p className="text-white/70 text-sm text-center mt-1">
                        {currentImage.category}
                      </p>
                    </div>
                  </div>
                )}

                {/* Reduced motion support */}
                <style jsx>{`
                  @media (prefers-reduced-motion: reduce) {
                    * {
                      transition-duration: 0.01ms !important;
                      animation-duration: 0.01ms !important;
                    }
                  }
                `}</style>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

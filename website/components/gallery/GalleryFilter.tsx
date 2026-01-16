'use client';

import { cn } from '@/lib/utils';
import type { GalleryCategory } from '@/types/gallery';

type FilterCategory = GalleryCategory | 'all';

const categories: { value: FilterCategory; label: string }[] = [
  { value: 'all', label: 'All Photos' },
  { value: 'events', label: 'Events' },
  { value: 'coin-journey', label: 'Coin Journey' },
  { value: 'community', label: 'Community' },
  { value: 'awareness', label: 'Awareness' },
  { value: 'celebrations', label: 'Celebrations' },
];

export interface GalleryFilterProps {
  selectedCategory: FilterCategory;
  onCategoryChange: (category: FilterCategory) => void;
  className?: string;
}

/**
 * Category filter tabs for gallery.
 * Implements accessible tab pattern with keyboard navigation.
 */
export function GalleryFilter({
  selectedCategory,
  onCategoryChange,
  className,
}: GalleryFilterProps) {
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    const { key } = e;
    let newIndex = index;

    // Arrow key navigation
    if (key === 'ArrowRight') {
      e.preventDefault();
      newIndex = (index + 1) % categories.length;
    } else if (key === 'ArrowLeft') {
      e.preventDefault();
      newIndex = (index - 1 + categories.length) % categories.length;
    } else if (key === 'Home') {
      e.preventDefault();
      newIndex = 0;
    } else if (key === 'End') {
      e.preventDefault();
      newIndex = categories.length - 1;
    } else {
      return;
    }

    onCategoryChange(categories[newIndex].value);

    // Focus the new tab
    const tabId = `gallery-tab-${newIndex}`;
    const nextTab = document.getElementById(tabId);
    nextTab?.focus();
  };

  return (
    <div
      role="tablist"
      aria-label="Gallery categories"
      className={cn(
        'flex flex-wrap gap-2 p-1 bg-[var(--color-muted)] rounded-lg mb-8',
        className
      )}
    >
      {categories.map((category, index) => {
        const isActive = category.value === selectedCategory;
        const tabId = `gallery-tab-${index}`;
        const panelId = `gallery-panel-${index}`;

        return (
          <button
            key={category.value}
            id={tabId}
            role="tab"
            type="button"
            aria-selected={isActive}
            aria-controls={panelId}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onCategoryChange(category.value)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={cn(
              'px-4 py-2 rounded-md text-sm font-medium',
              'transition-all duration-200',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2',
              isActive
                ? 'bg-[var(--color-surface)] text-[var(--color-primary)] shadow-sm'
                : 'text-[var(--color-foreground)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface)]/50'
            )}
          >
            {category.label}
          </button>
        );
      })}
    </div>
  );
}

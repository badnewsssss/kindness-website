'use client';

import { forwardRef, useState, useCallback, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Search, X, ChevronDown } from 'lucide-react';

export type SortOption = 'newest' | 'oldest' | 'most-liked';

export interface StorySearchProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onSubmit'> {
  categories?: string[];
  onSearchChange?: (query: string) => void;
  onCategoryChange?: (category: string) => void;
  onSortChange?: (sort: SortOption) => void;
  onClearFilters?: () => void;
  initialSearch?: string;
  initialCategory?: string;
  initialSort?: SortOption;
  resultsCount?: number;
  showResultsCount?: boolean;
}

/**
 * Search and filter controls for stories
 * Features: search input, category dropdown, sort options, clear filters
 * Includes accessible form controls and live region for results count
 */
export const StorySearch = forwardRef<HTMLDivElement, StorySearchProps>(
  (
    {
      categories = [
        'All Categories',
        'Acts of Kindness',
        'Family Support',
        'Community Care',
        'Healthcare Heroes',
        'Educational Support',
        'Random Acts',
      ],
      onSearchChange,
      onCategoryChange,
      onSortChange,
      onClearFilters,
      initialSearch = '',
      initialCategory = 'All Categories',
      initialSort = 'newest',
      resultsCount,
      showResultsCount = true,
      className,
      ...props
    },
    ref
  ) => {
    const [searchQuery, setSearchQuery] = useState(initialSearch);
    const [selectedCategory, setSelectedCategory] = useState(initialCategory);
    const [selectedSort, setSelectedSort] = useState<SortOption>(initialSort);

    const sortOptions: { value: SortOption; label: string }[] = [
      { value: 'newest', label: 'Newest First' },
      { value: 'oldest', label: 'Oldest First' },
      { value: 'most-liked', label: 'Most Liked' },
    ];

    const hasActiveFilters =
      searchQuery !== '' ||
      selectedCategory !== 'All Categories' ||
      selectedSort !== 'newest';

    const handleSearchChange = useCallback((value: string) => {
      setSearchQuery(value);
      onSearchChange?.(value);
    }, [onSearchChange]);

    const handleCategoryChange = useCallback((value: string) => {
      setSelectedCategory(value);
      onCategoryChange?.(value);
    }, [onCategoryChange]);

    const handleSortChange = useCallback((value: SortOption) => {
      setSelectedSort(value);
      onSortChange?.(value);
    }, [onSortChange]);

    const handleClearFilters = useCallback(() => {
      setSearchQuery('');
      setSelectedCategory('All Categories');
      setSelectedSort('newest');
      onClearFilters?.();
    }, [onClearFilters]);

    return (
      <div
        ref={ref}
        className={cn('space-y-4', className)}
        {...props}
      >
        {/* Search and Filters Row */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search Input */}
          <div className="flex-1">
            <label htmlFor="story-search" className="sr-only">
              Search stories
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                id="story-search"
                type="search"
                placeholder="Search stories..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="block w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                aria-label="Search stories by keyword"
                aria-describedby={showResultsCount && resultsCount !== undefined ? 'results-count' : undefined}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => handleSearchChange('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Clear search"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              )}
            </div>
          </div>

          {/* Category Filter */}
          <div className="sm:w-56">
            <label htmlFor="category-filter" className="sr-only">
              Filter by category
            </label>
            <div className="relative">
              <select
                id="category-filter"
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="block w-full appearance-none pl-4 pr-10 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
                aria-label="Filter stories by category"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <ChevronDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
            </div>
          </div>

          {/* Sort Dropdown */}
          <div className="sm:w-48">
            <label htmlFor="sort-filter" className="sr-only">
              Sort stories
            </label>
            <div className="relative">
              <select
                id="sort-filter"
                value={selectedSort}
                onChange={(e) => handleSortChange(e.target.value as SortOption)}
                className="block w-full appearance-none pl-4 pr-10 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
                aria-label="Sort stories"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <ChevronDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>

        {/* Results Count and Clear Filters */}
        <div className="flex items-center justify-between">
          {/* Results Count - Live Region */}
          {showResultsCount && resultsCount !== undefined && (
            <div
              id="results-count"
              className="text-sm text-gray-600"
              role="status"
              aria-live="polite"
              aria-atomic="true"
            >
              {resultsCount === 0 ? (
                'No stories found'
              ) : (
                <>
                  Showing{' '}
                  <span className="font-medium text-gray-900">
                    {resultsCount.toLocaleString()}
                  </span>
                  {' '}{resultsCount === 1 ? 'story' : 'stories'}
                </>
              )}
            </div>
          )}

          {/* Clear Filters Button */}
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClearFilters}
              aria-label="Clear all filters"
            >
              <X className="w-4 h-4" aria-hidden="true" />
              Clear Filters
            </Button>
          )}
        </div>
      </div>
    );
  }
);

StorySearch.displayName = 'StorySearch';

/**
 * Example usage of Stories components
 *
 * This file demonstrates how to use all the story components together
 * to create a complete stories page with search, filtering, and pagination.
 */

'use client';

import { useState } from 'react';
import {
  StoryCard,
  StoryGrid,
  StorySearch,
  Pagination,
  StorySubmitCTA,
  type Story,
  type SortOption,
} from './index';
import { Container } from '@/components/layout/Container';

// Example story data
const EXAMPLE_STORIES: Story[] = [
  {
    id: '1',
    title: 'A Teacher\'s Patience Changed Everything',
    excerpt: 'When my son started having meltdowns at school, his teacher took the time to understand his needs and created a safe space for him to decompress.',
    author: {
      name: 'Sarah Johnson',
      location: 'Portland, OR',
    },
    category: 'Educational Support',
    date: new Date('2024-01-15'),
    readTime: 5,
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
    featured: true,
  },
  {
    id: '2',
    title: 'The Grocery Store Stranger Who Understood',
    excerpt: 'During a difficult moment at the store, a stranger offered support instead of judgment. Their kindness meant the world to us.',
    author: {
      name: 'Michael Chen',
      location: 'Seattle, WA',
    },
    category: 'Random Acts',
    date: new Date('2024-01-10'),
    readTime: 3,
    imageUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=600&fit=crop',
  },
  {
    id: '3',
    title: 'Building a Sensory-Friendly Community',
    excerpt: 'Our neighborhood came together to create sensory-friendly events that allow all children to participate and thrive.',
    author: {
      name: 'Emily Rodriguez',
      location: 'Austin, TX',
    },
    category: 'Community Care',
    date: new Date('2024-01-08'),
    readTime: 7,
  },
  {
    id: '4',
    title: 'The Doctor Who Listened',
    excerpt: 'Finding a healthcare provider who truly understands autism has transformed our family\'s medical experiences.',
    author: {
      name: 'David Kim',
      location: 'Boston, MA',
    },
    category: 'Healthcare Heroes',
    date: new Date('2024-01-05'),
    readTime: 4,
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
  },
  {
    id: '5',
    title: 'Siblings Supporting Each Other',
    excerpt: 'The bond between my children shows me daily that love and understanding can overcome any challenge.',
    author: {
      name: 'Jessica Martinez',
      location: 'Denver, CO',
    },
    category: 'Family Support',
    date: new Date('2024-01-03'),
    readTime: 6,
  },
  {
    id: '6',
    title: 'A Neighbor\'s Unexpected Gift',
    excerpt: 'When they learned about my daughter\'s sensory needs, our neighbors surprised us with noise-canceling headphones.',
    author: {
      name: 'Tom Anderson',
      location: 'Chicago, IL',
    },
    category: 'Acts of Kindness',
    date: new Date('2024-01-01'),
    readTime: 3,
  },
];

/**
 * Example: Complete Stories Page
 * Shows all components working together with state management
 */
export function CompleteStoriesPageExample() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [sortOption, setSortOption] = useState<SortOption>('newest');

  // Filter and sort stories
  const filteredStories = EXAMPLE_STORIES.filter((story) => {
    const matchesSearch =
      searchQuery === '' ||
      story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === 'All Categories' || story.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const sortedStories = [...filteredStories].sort((a, b) => {
    if (sortOption === 'newest') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortOption === 'oldest') {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    }
    // For 'most-liked', you would sort by likes count
    return 0;
  });

  // Pagination
  const totalPages = Math.ceil(sortedStories.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedStories = sortedStories.slice(startIndex, startIndex + itemsPerPage);

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All Categories');
    setSortOption('newest');
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Container className="py-12 space-y-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Stories of Kindness
          </h1>
          <p className="text-lg text-gray-600">
            Real stories from families in the autism community, sharing moments of
            compassion, understanding, and support.
          </p>
        </div>

        {/* Search and Filters */}
        <StorySearch
          onSearchChange={setSearchQuery}
          onCategoryChange={setSelectedCategory}
          onSortChange={setSortOption}
          onClearFilters={handleClearFilters}
          resultsCount={sortedStories.length}
          showResultsCount
        />

        {/* Stories Grid */}
        <StoryGrid
          stories={paginatedStories}
          highlightFeatured
        />

        {/* Pagination */}
        {sortedStories.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={sortedStories.length}
            itemsPerPage={itemsPerPage}
            onPageChange={setCurrentPage}
            onItemsPerPageChange={setItemsPerPage}
            showItemsPerPage
          />
        )}

        {/* Submit Story CTA */}
        <StorySubmitCTA />
      </Container>
    </div>
  );
}

/**
 * Example: Individual Story Card
 */
export function StoryCardExample() {
  return (
    <div className="max-w-sm">
      <StoryCard story={EXAMPLE_STORIES[0]} />
    </div>
  );
}

/**
 * Example: Featured Story Card (Larger)
 */
export function FeaturedStoryCardExample() {
  return (
    <div className="max-w-2xl">
      <StoryCard story={EXAMPLE_STORIES[0]} featured />
    </div>
  );
}

/**
 * Example: Story Grid Only
 */
export function StoryGridExample() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <StoryGrid stories={EXAMPLE_STORIES} />
    </div>
  );
}

/**
 * Example: Empty State
 */
export function EmptyStateExample() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <StoryGrid stories={[]} />
    </div>
  );
}

/**
 * Example: Search and Filter
 */
export function SearchExample() {
  const [resultsCount, setResultsCount] = useState(44123);

  return (
    <div className="max-w-4xl mx-auto p-8">
      <StorySearch
        onSearchChange={(query) => console.log('Search:', query)}
        onCategoryChange={(category) => console.log('Category:', category)}
        onSortChange={(sort) => console.log('Sort:', sort)}
        onClearFilters={() => console.log('Clear filters')}
        resultsCount={resultsCount}
        showResultsCount
      />
    </div>
  );
}

/**
 * Example: Pagination
 */
export function PaginationExample() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  return (
    <div className="max-w-4xl mx-auto p-8">
      <Pagination
        currentPage={currentPage}
        totalPages={3672}
        totalItems={44123}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
        onItemsPerPageChange={setItemsPerPage}
        showItemsPerPage
      />
    </div>
  );
}

/**
 * Example: Submit CTA - Default Variant
 */
export function SubmitCTADefaultExample() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <StorySubmitCTA />
    </div>
  );
}

/**
 * Example: Submit CTA - Compact Variant
 */
export function SubmitCTACompactExample() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <StorySubmitCTA variant="compact" />
    </div>
  );
}

/**
 * Example: Submit CTA - Banner Variant
 */
export function SubmitCTABannerExample() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <StorySubmitCTA variant="banner" />
    </div>
  );
}

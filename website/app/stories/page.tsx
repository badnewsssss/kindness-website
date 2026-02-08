'use client';

import { useState, useMemo } from 'react';
import { Container } from '@/components/layout';
import { StoryGrid, StorySearch, Pagination } from '@/components/stories';
import { PremiumHero, PremiumSection } from '@/components/shared';
import { stories } from '@/data/stories';
import type { SortOption } from '@/components/stories/StorySearch';

const STORIES_PER_PAGE = 12;

export default function StoriesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [currentPage, setCurrentPage] = useState(1);

  // Helper to get author name (handles both string and object formats)
  const getAuthorName = (author: string | { name: string }) =>
    typeof author === 'string' ? author : author.name;

  // Filter and sort stories
  const filteredStories = useMemo(() => {
    let result = [...stories];

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (story) =>
          story.title.toLowerCase().includes(query) ||
          story.excerpt.toLowerCase().includes(query) ||
          getAuthorName(story.author).toLowerCase().includes(query)
      );
    }

    // Filter by category
    if (selectedCategory !== 'All Categories') {
      result = result.filter((story) => story.category === selectedCategory);
    }

    // Sort
    switch (sortBy) {
      case 'newest':
        result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        break;
      case 'oldest':
        result.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;
      case 'most-liked':
        result.sort((a, b) => (b.metadata?.likes || 0) - (a.metadata?.likes || 0));
        break;
    }

    return result;
  }, [searchQuery, selectedCategory, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredStories.length / STORIES_PER_PAGE);
  const paginatedStories = filteredStories.slice(
    (currentPage - 1) * STORIES_PER_PAGE,
    currentPage * STORIES_PER_PAGE
  );

  // Reset to first page when filters change
  const handleFilterChange = () => {
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All Categories');
    setSortBy('newest');
    setCurrentPage(1);
  };

  return (
    <>
      <PremiumHero
        title="Stories of Kindness"
        subtitle="Community Impact"
        description={
          <>
            Over <strong className="text-blue-600">52,384</strong> stories of hope, resilience, and compassion.
            Each story is a testament to the power of kindness. Read how acts of
            compassion have transformed lives and communities.
          </>
        }
        background="gradient"
      />

      {/* Search and Filter */}
      <PremiumSection background="white" spacing="sm" className="border-b border-gray-200">
        <StorySearch
          onSearchChange={(query) => {
            setSearchQuery(query);
            handleFilterChange();
          }}
          onCategoryChange={(category) => {
            setSelectedCategory(category);
            handleFilterChange();
          }}
          onSortChange={(sort) => {
            setSortBy(sort);
            handleFilterChange();
          }}
          onClearFilters={handleClearFilters}
          resultsCount={filteredStories.length}
        />
      </PremiumSection>

      {/* Stories Grid */}
      <PremiumSection background="white" spacing="lg">
          <StoryGrid stories={paginatedStories} />

          {filteredStories.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[var(--color-muted-foreground)] text-lg">
                No stories found matching your criteria.
              </p>
              <button onClick={handleClearFilters} className="mt-4 btn btn-outline">
                Clear Filters
              </button>
            </div>
          )}

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              totalItems={filteredStories.length}
              itemsPerPage={STORIES_PER_PAGE}
            />
          )}
      </PremiumSection>

      {/* Submit Story CTA */}
      <PremiumSection background="muted" spacing="lg">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Share Your Story</h2>
          <p className="text-gray-600 text-lg mb-8">
            Have a story of kindness to share? We&apos;d love to hear from you. Your
            experience could inspire others and become part of our growing collection.
          </p>
          <a
            href="/contact?subject=story"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Submit Your Story
          </a>
        </div>
      </PremiumSection>
    </>
  );
}

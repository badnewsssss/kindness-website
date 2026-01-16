'use client';

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

interface Story {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
}

// Placeholder story data - will be replaced with actual data from API/database
const featuredStories: Story[] = [
  {
    id: '1',
    title: 'A Teacher\'s Small Gesture Changed Everything',
    excerpt: 'When Sarah\'s son started school, she worried about how he\'d be accepted. One teacher\'s understanding and patience made all the difference in his journey.',
    author: 'Sarah M.',
    date: '2024-12-15',
    category: 'Education',
  },
  {
    id: '2',
    title: 'The Neighbor Who Learned Sign Language',
    excerpt: 'Our neighbor noticed my daughter communicates through sign language. Within weeks, they surprised us by learning ASL just to say hello. That\'s kindness.',
    author: 'David L.',
    date: '2024-12-10',
    category: 'Community',
  },
  {
    id: '3',
    title: 'Finding Joy in Unexpected Places',
    excerpt: 'At the grocery store, a cashier took extra time to help my son feel comfortable. Now he looks forward to shopping trips, and they\'re friends.',
    author: 'Maria G.',
    date: '2024-12-05',
    category: 'Daily Life',
  },
];

/**
 * Individual story card component
 */
function StoryCard({ story }: { story: Story }) {
  return (
    <Card hover padding="none" className="h-full flex flex-col">
      <CardHeader className="p-6 pb-4">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
            {story.category}
          </span>
          <time
            dateTime={story.date}
            className="text-sm text-gray-500"
          >
            {new Date(story.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </time>
        </div>
        <h3 className="text-xl font-bold text-gray-900 leading-tight">
          {story.title}
        </h3>
      </CardHeader>

      <CardContent className="px-6 flex-grow">
        <p className="text-gray-700 leading-relaxed">
          {story.excerpt}
        </p>
      </CardContent>

      <CardFooter className="p-6 pt-4">
        <div className="flex items-center justify-between w-full">
          <span className="text-sm font-medium text-gray-600">
            — {story.author}
          </span>
          <Link
            href={`/stories/${story.id}`}
            className="text-amber-600 hover:text-amber-700 font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 rounded px-2 py-1"
            aria-label={`Read full story: ${story.title}`}
          >
            Read More →
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}

/**
 * Featured stories section showcasing kindness stories
 * Displays a grid of story previews with link to full story collection
 */
export function FeaturedStories() {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-white"
      aria-labelledby="stories-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2
            id="stories-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Stories of Kindness
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from real people about how small acts of kindness create
            profound impacts in the autism community
          </p>
        </div>

        {/* Stories Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12"
          role="list"
          aria-label="Featured kindness stories"
        >
          {featuredStories.map((story) => (
            <div key={story.id} role="listitem">
              <StoryCard story={story} />
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Link href="/stories">
            <Button
              variant="outline"
              size="lg"
              className="min-w-[200px] border-2 border-amber-600 text-amber-600 hover:bg-amber-50 focus:ring-amber-500"
            >
              View All Stories
              <span className="ml-2" aria-hidden="true">→</span>
            </Button>
          </Link>
          <p className="mt-4 text-sm text-gray-600">
            Explore all 44,000+ stories of kindness from our community
          </p>
        </div>
      </div>
    </section>
  );
}

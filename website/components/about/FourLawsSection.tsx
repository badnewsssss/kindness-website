'use client';

import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Scale, Users, Leaf, Globe } from 'lucide-react';

interface Law {
  id: string;
  title: string;
  icon: typeof Scale;
  color: string;
  bgColor: string;
  description: string;
  principle: string;
}

const laws: Law[] = [
  {
    id: 'human',
    title: 'Human Law',
    icon: Scale,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    description: 'The frameworks we create to govern our societies with justice and fairness.',
    principle: 'Protecting rights, ensuring accountability, and building systems that serve all people with dignity and equity.',
  },
  {
    id: 'common',
    title: 'Common Law',
    icon: Users,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    description: 'The wisdom born from shared experience and collective understanding.',
    principle: 'Respecting traditions, learning from precedent, and honoring the collective knowledge that binds communities.',
  },
  {
    id: 'natural',
    title: 'Natural Law',
    icon: Leaf,
    color: 'text-amber-600',
    bgColor: 'bg-amber-100',
    description: 'The fundamental principles inherent in nature and the human conscience.',
    principle: 'Recognizing inherent rights, embracing empathy, and aligning with the moral truths that transcend cultures.',
  },
  {
    id: 'universal',
    title: 'Universal Law',
    icon: Globe,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    description: 'The timeless principles that connect all humanity across boundaries.',
    principle: 'Celebrating our shared humanity, fostering global compassion, and recognizing that we are all interconnected.',
  },
];

/**
 * Four Laws philosophy section
 * Explains the guiding principles behind the Kindness for Autism mission
 */
export function FourLawsSection() {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white"
      aria-labelledby="four-laws-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            id="four-laws-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Guided by Four Timeless Principles
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Our mission is built on a foundation that honors the legal, moral, and spiritual
            frameworks that unite humanity. These four laws guide every decision we make and
            every story we tell.
          </p>
        </div>

        {/* Laws Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {laws.map((law) => {
            const IconComponent = law.icon;
            return (
              <Card
                key={law.id}
                hover
                padding="none"
                className="overflow-hidden border-t-4"
                style={{ borderTopColor: `var(--${law.id}-color)` }}
              >
                <div className={`${law.bgColor} px-6 pt-6 pb-4`}>
                  <CardHeader className="mb-0">
                    <div className="flex items-center gap-4">
                      <div className={`flex-shrink-0 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md`}>
                        <IconComponent className={law.color} size={28} aria-hidden="true" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {law.title}
                      </h3>
                    </div>
                  </CardHeader>
                </div>
                <CardContent className="px-6 py-6">
                  <p className="text-gray-700 font-medium mb-4 leading-relaxed">
                    {law.description}
                  </p>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      <span className="font-semibold text-gray-900">In Practice: </span>
                      {law.principle}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Integration Statement */}
        <div className="max-w-4xl mx-auto">
          <Card padding="lg" className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 border-2 border-purple-200">
            <CardContent>
              <div className="text-center">
                <Globe className="w-16 h-16 text-purple-600 mx-auto mb-6" aria-hidden="true" />
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  How These Laws Guide Our Mission
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  By honoring all four laws, we create a framework that is both practical and
                  transcendent. We recognize the legal structures that protect vulnerable
                  individuals, the shared wisdom of communities caring for those with special
                  needs, the natural rights every person deserves, and the universal truth
                  that kindness knows no borders.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  This holistic approach ensures that our mission serves not just one group,
                  but all of humanity—building bridges of understanding, compassion, and lasting change.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Visual Connection */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <div className="w-3 h-3 bg-blue-600 rounded-full" aria-hidden="true" />
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-green-600" aria-hidden="true" />
            <div className="w-3 h-3 bg-green-600 rounded-full" aria-hidden="true" />
            <div className="w-16 h-0.5 bg-gradient-to-r from-green-600 to-amber-600" aria-hidden="true" />
            <div className="w-3 h-3 bg-amber-600 rounded-full" aria-hidden="true" />
            <div className="w-16 h-0.5 bg-gradient-to-r from-amber-600 to-purple-600" aria-hidden="true" />
            <div className="w-3 h-3 bg-purple-600 rounded-full" aria-hidden="true" />
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            Connected principles for a unified mission
          </p>
        </div>
      </div>
    </section>
  );
}

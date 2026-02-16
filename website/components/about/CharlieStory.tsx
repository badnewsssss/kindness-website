'use client';

import { Card, CardContent } from '@/components/ui/Card';
import { Heart, Users, Calendar } from 'lucide-react';

/**
 * Charlie's personal story component
 * Shares the deeply personal journey of his son's premature birth and autism journey
 */
export function CharlieStory() {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-white"
      aria-labelledby="charlie-story-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            id="charlie-story-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            A Journey That Became a Mission
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            This mission was founded by Charlie Miller, inspired by his son&apos;s life journey.
            Born at just 1 pound 8 ounces, facing odds that felt impossible, and now
            celebrating 25 years of life, strength, and resilience.
          </p>
        </div>

        {/* Story Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column: Main Story */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Calendar className="text-blue-600" size={28} aria-hidden="true" />
                The Beginning
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Twenty-five years ago, my son entered this world at just 1 pound, 8 ounces.
                The neonatal intensive care unit became our second home. The odds felt
                impossible. But that journey became proof that challenges do not define
                potential. Support, advocacy, and kindness help unlock it.
              </p>
              <p className="text-gray-700 leading-relaxed">
                In that NICU, surrounded by uncertainty, we discovered something
                extraordinary: the power of human kindness. Nurses who stayed past their
                shifts, doctors who became advocates, and a community of people who simply
                cared enough to slow down and see us.
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Heart className="text-rose-600" size={28} aria-hidden="true" />
                Living with Autism
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Autism affects millions of individuals and families. Many face barriers
                including lack of education and awareness, limited access to support resources,
                social isolation, difficulty navigating advocacy systems, and financial and
                emotional strain. No family should have to figure all of this out alone.
              </p>
              <p className="text-gray-700 leading-relaxed">
                That is why this foundation exists. We have collected more than 52,000 real
                stories of kindness — real people stepping in during real moments when someone
                needed help, understanding, patience, or simply someone who cared enough to
                slow down and see them.
              </p>
            </div>
          </div>

          {/* Right Column: Impact Cards */}
          <div className="space-y-6">
            <Card padding="lg" className="border-l-4 border-blue-500">
              <CardContent>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="text-blue-600" size={24} aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Autism Advocacy & Rights
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Expanding autism advocacy efforts and rights protection so every family
                      has access to the support they need. From education resources to community
                      programs, we help families navigate the systems that matter most.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card padding="lg" className="border-l-4 border-indigo-500">
              <CardContent>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Heart className="text-indigo-600" size={24} aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Kindness-Based Outreach
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Kindness storytelling projects that reduce stigma and increase
                      understanding. Because families remember who showed up for them when
                      life felt overwhelming. If kindness opens every door, together we can
                      open doors to opportunity for every person living with autism.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card padding="lg" className="border-l-4 border-purple-500 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardContent>
                <div className="text-center">
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
                    25 Years
                  </div>
                  <p className="text-lg font-semibold text-gray-900 mb-2">
                    Of Love, Growth, and Resilience
                  </p>
                  <p className="text-gray-700">
                    This year, as we celebrate my son&apos;s 25th birthday, we celebrate
                    every person who made this milestone possible.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <blockquote className="text-xl sm:text-2xl italic text-gray-800 border-l-4 border-amber-500 pl-6 py-4">
            &ldquo;If kindness opens every door, then together we can open doors to
            understanding, support, and opportunity for every person living with autism.
            This is a movement built on compassion, action, and refusing to let families
            face autism alone.&rdquo;
          </blockquote>
          <p className="mt-4 text-lg font-semibold text-gray-900">
            — Charlie Miller
          </p>
        </div>
      </div>
    </section>
  );
}

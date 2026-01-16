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
            A Journey That Changed Everything
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Every parent dreams of holding their newborn. Our reality began with hope,
            fear, and the most incredible community of caregivers who became our family.
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
                The neonatal intensive care unit became our second home. Every beep of the
                monitors, every breath he took, reminded us of how fragile and precious life is.
              </p>
              <p className="text-gray-700 leading-relaxed">
                But in that NICU, surrounded by uncertainty, we discovered something
                extraordinary: the power of human kindness. Nurses who stayed past their
                shifts, doctors who became advocates, specialists who saw not a case number
                but a child with infinite potential.
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Heart className="text-rose-600" size={28} aria-hidden="true" />
                Living with Autism
              </h3>
              <p className="text-gray-700 leading-relaxed">
                As my son grew, we learned he experiences the world differently. His autism
                diagnosis wasn&apos;t an ending—it was an invitation to see beauty in new ways,
                to celebrate different forms of communication, and to champion a world that
                embraces neurodiversity.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The journey has been filled with challenges, yes. But it has been equally
                filled with triumph, joy, and countless moments of connection that most
                people might overlook but we treasure deeply.
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
                      The Unsung Heroes
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Special-needs teachers who saw potential where others saw limitations.
                      Therapists who celebrated every small victory. Medical professionals
                      who treated us with dignity and hope. These are the people who deserve
                      recognition.
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
                      A Father&apos;s Promise
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      I made a promise to honor everyone who has touched our lives with
                      kindness. That promise has grown into this mission—to collect stories,
                      to recognize heroes, and to build a future where compassion is
                      celebrated and rewarded.
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
            &ldquo;Our journey has taught me that kindness isn&apos;t just a virtue—it&apos;s
            a force that can change lives, build communities, and create a better world for
            everyone, especially those who need it most.&rdquo;
          </blockquote>
          <p className="mt-4 text-lg font-semibold text-gray-900">
            — Charlie Miller
          </p>
        </div>
      </div>
    </section>
  );
}

'use client';

import { Card, CardContent } from '@/components/ui/Card';
import { Coins, Trophy, Handshake, Sparkles } from 'lucide-react';

/**
 * Coin of Blessings journey component
 * Tells the story of the symbolic coin and its journey to remarkable people
 */
export function CoinJourney() {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-white"
      aria-labelledby="coin-journey-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-6">
            <Coins className="text-amber-600" size={20} aria-hidden="true" />
            <span className="text-sm font-semibold text-amber-900">
              A Symbol of Unity
            </span>
          </div>
          <h2
            id="coin-journey-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            The Coin of Blessings & Legacy
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            More than metal and design, this coin represents hope, perseverance, and the
            universal language of kindness. Its journey has taken it into the hands of
            champions, leaders, and changemakers around the world.
          </p>
        </div>

        {/* Main Story */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card padding="lg" className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200">
            <CardContent>
              <div className="text-center mb-8">
                <Sparkles className="w-20 h-20 text-amber-600 mx-auto mb-4" aria-hidden="true" />
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-800 leading-relaxed text-lg">
                  The Coin of Blessings & Legacy was created as a tangible reminder that every
                  act of kindness creates ripples far beyond what we can see. Each coin carries
                  a message of unity, perseverance, and the belief that we all have the power
                  to make a difference.
                </p>
                <p className="text-gray-800 leading-relaxed text-lg">
                  What began as a personal token of gratitude has become a bridge between
                  worlds—connecting athletes who inspire millions, diplomats who shape policy,
                  and presidents who lead nations. But its true power lies not in the hands
                  that hold it, but in the hearts it touches.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Journey Milestones */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <Card hover padding="lg" className="border-t-4 border-blue-500">
            <CardContent>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Trophy className="text-blue-600" size={32} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Champions & Athletes
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Shared with Olympic athletes, professional sports figures, and competitors
                  who exemplify resilience, teamwork, and the pursuit of excellence against
                  all odds.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card hover padding="lg" className="border-t-4 border-purple-500">
            <CardContent>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Handshake className="text-purple-600" size={32} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Diplomats & Leaders
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Presented to ambassadors, policymakers, and international leaders who work
                  tirelessly to build bridges between nations and advocate for human rights.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card hover padding="lg" className="border-t-4 border-rose-500">
            <CardContent>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-4">
                  <Coins className="text-rose-600" size={32} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Presidents & Visionaries
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Carried to the highest offices of government, reminding those in power that
                  leadership is measured by compassion and the willingness to serve others.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Meaning Section */}
        <div className="max-w-4xl mx-auto">
          <Card padding="lg" className="bg-gradient-to-br from-indigo-50 to-blue-50">
            <CardContent>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
                The Meaning Behind the Coin
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-indigo-600 rounded-full mt-2" aria-hidden="true" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Unity</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      A reminder that we are all connected—across cultures, abilities, and
                      circumstances. Together, we are stronger.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-purple-600 rounded-full mt-2" aria-hidden="true" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Perseverance</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Like my son&apos;s journey from 1lb 8oz to 25 years of life, the coin
                      symbolizes the power of never giving up.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-amber-600 rounded-full mt-2" aria-hidden="true" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Recognition</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      An acknowledgment of those who give selflessly—the teachers, caregivers,
                      and advocates who often go unnoticed.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-rose-600 rounded-full mt-2" aria-hidden="true" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Legacy</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      A commitment to building a future where kindness isn&apos;t just celebrated,
                      but woven into the fabric of society.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            Every coin shared is a promise: to honor the past, celebrate the present, and
            build a more compassionate future. The journey continues—and you&apos;re invited
            to be part of it.
          </p>
        </div>
      </div>
    </section>
  );
}

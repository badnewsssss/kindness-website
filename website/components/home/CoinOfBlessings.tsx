'use client';

import { Card, CardContent } from '@/components/ui/Card';

/**
 * Coin of Blessings & Legacy section
 * Highlights the symbolic coin and its journey through important moments and people
 */
export function CoinOfBlessings() {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-amber-50 to-white"
      aria-labelledby="coin-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2
            id="coin-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            The Coin of Blessings & Legacy
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            A symbol of unity, perseverance, and the power of kindness to open every door
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Coin Image/Placeholder */}
          <div className="order-2 lg:order-1">
            <Card padding="none" className="overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-amber-100 via-yellow-50 to-orange-100 flex items-center justify-center p-8">
                <div className="relative w-full h-full max-w-md mx-auto">
                  {/* Placeholder for coin image - replace with actual image */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400 via-yellow-400 to-orange-400 shadow-2xl flex items-center justify-center">
                    <div className="w-3/4 h-3/4 rounded-full border-8 border-white flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-2" aria-hidden="true">🤝</div>
                        <div className="text-white font-bold text-xl">
                          Coin of
                        </div>
                        <div className="text-white font-bold text-xl">
                          Blessings
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Decorative glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-300 to-orange-300 blur-3xl opacity-30" aria-hidden="true" />
                </div>
              </div>
            </Card>
          </div>

          {/* Description Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                A Journey of Inspiration
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                The Coin of Blessings & Legacy has traveled an extraordinary path,
                touching the hands of world-class athletes, diplomats, and even presidents.
                Each exchange represents a moment of connection, a shared belief in the
                power of kindness and perseverance.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Symbol of Unity
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                More than a physical object, the coin embodies our core values: unity
                across differences, perseverance through challenges, and the unwavering
                belief that kindness opens every door. It represents the collective strength
                of our community and the legacy we&apos;re building together.
              </p>
            </div>

            {/* Key Values */}
            <div className="pt-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                What the Coin Represents
              </h4>
              <ul className="space-y-3" role="list">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700">
                    <strong className="font-semibold text-gray-900">Unity:</strong> Bringing people together across all backgrounds and abilities
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700">
                    <strong className="font-semibold text-gray-900">Perseverance:</strong> The strength to overcome obstacles, just like Charlie&apos;s son
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700">
                    <strong className="font-semibold text-gray-900">Kindness Opens Doors:</strong> Compassion creates opportunities and changes lives
                  </span>
                </li>
              </ul>
            </div>

            {/* Notable Encounters */}
            <div className="pt-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Notable Encounters
              </h4>
              <p className="text-gray-700 leading-relaxed">
                The coin has been shared with accomplished athletes who demonstrate
                perseverance, diplomats who bridge cultures, and presidents who lead
                with vision. Each encounter reinforces our message: kindness transcends
                boundaries and creates lasting change.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import Image from 'next/image';
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
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: '#111827' }}
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
              <div className="relative aspect-square">
                <Image
                  src="/images/ring-2.jpg"
                  alt="The Coin of Blessings & Legacy"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </Card>
          </div>

          {/* Description Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#111827' }}>
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
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#111827' }}>
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
              <h4 className="text-lg font-semibold mb-4" style={{ color: '#111827' }}>
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
              <h4 className="text-lg font-semibold mb-3" style={{ color: '#111827' }}>
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

'use client';

import { Button } from '@/components/ui/Button';

/**
 * Donation call-to-action section
 * Encourages visitors to support the mission with clear information about fund usage
 */
export function DonationCTA() {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-rose-50 via-amber-50 to-orange-50"
      aria-labelledby="donation-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 sm:p-12 lg:p-16">
            {/* Main Headline */}
            <div className="text-center mb-8">
              <h2
                id="donation-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
              >
                Join Our Mission of{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-600">
                  Kindness
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
                Your contribution helps us build a future where every person with autism
                is met with understanding, support, and kindness.
              </p>
            </div>

            {/* Fund Usage Information */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                How Your Donation Makes a Difference
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-amber-100 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-amber-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Professional Accounting
                  </h4>
                  <p className="text-sm text-gray-600">
                    Ensuring transparency and proper fund management for maximum impact
                  </p>
                </div>

                <div className="text-center p-4">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-rose-100 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-rose-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Motivational Speakers
                  </h4>
                  <p className="text-sm text-gray-600">
                    Bringing inspiring voices to share hope and empower families
                  </p>
                </div>

                <div className="text-center p-4">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-orange-100 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-orange-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Legal Advocacy
                  </h4>
                  <p className="text-sm text-gray-600">
                    Supporting legal efforts to protect rights and advance autism advocacy
                  </p>
                </div>
              </div>
            </div>

            {/* Fundraising Goal Progress */}
            <div className="mb-10 p-6 bg-gradient-to-r from-amber-50 to-rose-50 rounded-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-gray-700">
                  Current Goal
                </span>
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-600">
                  $250,000
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-rose-500 rounded-full transition-all duration-500"
                  style={{ width: '15%' }}
                  role="progressbar"
                  aria-valuenow={15}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label="Fundraising progress: 15% of goal reached"
                />
              </div>
              <p className="text-xs text-gray-600 mt-2 text-center">
                Every contribution brings us closer to our goal
              </p>
            </div>

            {/* Donation Buttons */}
            <div className="space-y-4">
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                role="group"
                aria-label="Donation options"
              >
                <a
                  href="https://www.paypal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Donate via PayPal (opens in new tab)"
                  className="w-full sm:w-auto"
                >
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full min-w-[200px] bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 focus:ring-amber-500"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72a.77.77 0 0 1 .76-.653h8.53c2.347 0 4.203.696 5.374 2.016 1.168 1.317 1.758 3.243 1.758 5.728 0 2.438-.695 4.318-2.067 5.592-1.37 1.272-3.355 1.918-5.908 1.918h-1.198a.77.77 0 0 0-.76.653l-.465 2.95a.646.646 0 0 1-.634.653H7.076z" />
                    </svg>
                    Donate via PayPal
                  </Button>
                </a>
                <a
                  href="https://www.gofundme.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Donate via GoFundMe (opens in new tab)"
                  className="w-full sm:w-auto"
                >
                  <Button
                    variant="secondary"
                    size="lg"
                    className="w-full min-w-[200px] bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 focus:ring-rose-500"
                  >
                    Donate via GoFundMe
                  </Button>
                </a>
              </div>

              <p className="text-center text-sm text-gray-600">
                All donations are tax-deductible. Thank you for your generosity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

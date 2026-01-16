'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Button, Badge, BadgeGroup } from '@/components/ui';

export interface JoinCommitteeProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  description?: string;
  showQualifications?: boolean;
  contactEmail?: string;
  contactPhone?: string;
}

/**
 * Call-to-action section for joining the advisory committee
 * Includes invitation, qualifications, and contact information
 */
export const JoinCommittee = forwardRef<HTMLElement, JoinCommitteeProps>(
  (
    {
      title = 'Join Our Advisory Committee',
      description = 'We are seeking passionate and dedicated professionals to join our advisory committee. Help us expand our mission and make a meaningful impact in the autism community.',
      showQualifications = true,
      contactEmail = 'committee@kindnessforautism.org',
      contactPhone,
      className,
      ...props
    },
    ref
  ) => {
    const qualifications = [
      'Expertise in autism services, special education, healthcare, or related fields',
      'Passion for supporting individuals with autism and their families',
      'Commitment to attend quarterly meetings and contribute to initiatives',
      'Professional experience in advocacy, community outreach, or nonprofit management',
      'Strong communication and collaborative skills',
    ];

    const areasOfNeed = [
      'Healthcare',
      'Special Education',
      'Fundraising',
      'Marketing & Communications',
      'Legal & Compliance',
      'Technology',
      'Community Outreach',
      'Family Support',
    ];

    return (
      <section
        id="join-committee"
        ref={ref}
        className={cn(
          'bg-gradient-to-br from-blue-600 to-blue-800 py-16 md:py-20',
          className
        )}
        {...props}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Title and Description */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                {title}
              </h2>
              <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Areas We're Looking For */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Areas of Expertise We're Seeking
              </h3>
              <BadgeGroup spacing="md" className="mb-6">
                {areasOfNeed.map((area) => (
                  <Badge
                    key={area}
                    variant="info"
                    size="md"
                    className="bg-white/90 text-blue-900 border-white/50 hover:bg-white transition-colors duration-200"
                  >
                    {area}
                  </Badge>
                ))}
              </BadgeGroup>
            </div>

            {/* Qualifications */}
            {showQualifications && (
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  What We're Looking For
                </h3>
                <ul className="space-y-3">
                  {qualifications.map((qualification, index) => (
                    <li
                      key={index}
                      className="flex items-start text-blue-50"
                    >
                      <svg
                        className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-base leading-relaxed">
                        {qualification}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Benefits */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Why Join Our Committee?
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mr-4">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Make an Impact</h4>
                    <p className="text-blue-100 text-sm">Shape programs that directly support families affected by autism</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0 mr-4">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Network & Collaborate</h4>
                    <p className="text-blue-100 text-sm">Connect with passionate professionals and community leaders</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0 mr-4">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Share Your Expertise</h4>
                    <p className="text-blue-100 text-sm">Contribute your professional knowledge to meaningful initiatives</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center flex-shrink-0 mr-4">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Drive Innovation</h4>
                    <p className="text-blue-100 text-sm">Help develop new approaches to autism support and advocacy</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-6">
                Ready to Make a Difference?
              </h3>
              <p className="text-blue-100 mb-6">
                Contact us to learn more about joining our advisory committee and the application process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  variant="secondary"
                  size="lg"
                  asChild
                >
                  <a href={`mailto:${contactEmail}`}>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Email Us</span>
                  </a>
                </Button>
                {contactPhone && (
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="border-white text-white hover:bg-white hover:text-blue-600"
                  >
                    <a href={`tel:${contactPhone.replace(/\D/g, '')}`}>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>Call {contactPhone}</span>
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

JoinCommittee.displayName = 'JoinCommittee';

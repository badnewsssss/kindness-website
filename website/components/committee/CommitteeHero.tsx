'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui';

export interface CommitteeHeroProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  description?: string;
  showCTA?: boolean;
  onCTAClick?: () => void;
}

/**
 * Hero section for the Advisory Committee page
 * Features headline, description, and optional call-to-action
 */
export const CommitteeHero = forwardRef<HTMLElement, CommitteeHeroProps>(
  (
    {
      title = 'Our Advisory Committee',
      description = 'Meet the dedicated professionals guiding our mission to support individuals with autism and their families. Our advisory committee brings together experts from diverse fields to ensure we deliver the highest quality programs and services.',
      showCTA = true,
      onCTAClick,
      className,
      ...props
    },
    ref
  ) => {
    const handleCTAClick = () => {
      if (onCTAClick) {
        onCTAClick();
      } else {
        // Default behavior: scroll to join section
        const joinSection = document.getElementById('join-committee');
        if (joinSection) {
          joinSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    return (
      <section
        ref={ref}
        className={cn(
          'relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-16 md:py-24',
          className
        )}
        {...props}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {title}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              {description}
            </p>

            {/* Call to Action */}
            {showCTA && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleCTAClick}
                  aria-label="Learn about joining the committee"
                >
                  Join Our Committee
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    const membersSection = document.getElementById('committee-members');
                    if (membersSection) {
                      membersSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  aria-label="View all committee members"
                >
                  Meet Our Members
                </Button>
              </div>
            )}
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-green-200/20 rounded-full blur-3xl" />
          </div>
        </div>
      </section>
    );
  }
);

CommitteeHero.displayName = 'CommitteeHero';

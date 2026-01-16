'use client';

import { forwardRef, type HTMLAttributes } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Heart, PenLine, Sparkles } from 'lucide-react';

export interface StorySubmitCTAProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  variant?: 'default' | 'compact' | 'banner';
}

/**
 * Call-to-action component encouraging visitors to share their own kindness story
 * Features: warm, inviting design with customizable content
 * Includes decorative icons and accessible button link
 */
export const StorySubmitCTA = forwardRef<HTMLDivElement, StorySubmitCTAProps>(
  (
    {
      title = 'Have a Story of Kindness to Share?',
      description = "Your story could inspire others and spread kindness in the autism community. We'd love to hear about your experiences of compassion, support, and understanding.",
      buttonText = 'Share Your Story',
      buttonHref = '/stories/submit',
      variant = 'default',
      className,
      ...props
    },
    ref
  ) => {
    if (variant === 'compact') {
      return (
        <div
          ref={ref}
          className={cn(
            'bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-6 border-2 border-blue-200',
            className
          )}
          {...props}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {title}
                </h3>
                <p className="text-sm text-gray-600">
                  Share your experience with our community
                </p>
              </div>
            </div>
            <Button
              variant="autism"
              size="md"
              asChild
              className="flex-shrink-0"
            >
              <Link href={buttonHref}>
                {buttonText}
              </Link>
            </Button>
          </div>
        </div>
      );
    }

    if (variant === 'banner') {
      return (
        <div
          ref={ref}
          className={cn(
            'relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 md:p-12 text-white',
            className
          )}
          {...props}
        >
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-green-500/20 rounded-full blur-3xl" aria-hidden="true" />

          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-medium text-blue-100 uppercase tracking-wide">
                Join Our Community
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              {title}
            </h3>

            <p className="text-lg text-blue-100 mb-6 max-w-2xl">
              {description}
            </p>

            <Button
              variant="secondary"
              size="lg"
              asChild
              className="bg-white text-blue-700 hover:bg-blue-50"
            >
              <Link href={buttonHref} className="inline-flex items-center gap-2">
                <PenLine className="w-5 h-5" aria-hidden="true" />
                {buttonText}
              </Link>
            </Button>
          </div>
        </div>
      );
    }

    // Default variant
    return (
      <Card
        ref={ref}
        padding="lg"
        className={cn(
          'bg-gradient-to-br from-blue-50 via-white to-green-50 border-2 border-blue-200',
          className
        )}
        {...props}
      >
        <CardContent className="text-center max-w-2xl mx-auto">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                <Heart className="w-10 h-10 text-white" aria-hidden="true" />
              </div>
              <div className="absolute -top-1 -right-1">
                <Sparkles className="w-6 h-6 text-yellow-500" aria-hidden="true" />
              </div>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {title}
          </h3>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-8">
            {description}
          </p>

          {/* CTA Button */}
          <Button
            variant="autism"
            size="lg"
            asChild
            className="inline-flex items-center gap-2"
          >
            <Link href={buttonHref}>
              <PenLine className="w-5 h-5" aria-hidden="true" />
              {buttonText}
            </Link>
          </Button>

          {/* Additional Info */}
          <p className="text-sm text-gray-500 mt-6">
            Your story will be reviewed before publishing to ensure a safe and supportive community.
          </p>
        </CardContent>
      </Card>
    );
  }
);

StorySubmitCTA.displayName = 'StorySubmitCTA';

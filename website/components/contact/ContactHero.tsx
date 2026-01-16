import type { FC } from 'react';
import { cn } from '@/lib/utils';

export interface ContactHeroProps {
  className?: string;
}

/**
 * Contact page hero section
 * Displays welcoming headline and message
 */
export const ContactHero: FC<ContactHeroProps> = ({ className }) => {
  return (
    <section
      className={cn(
        'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-16 md:py-24',
        className
      )}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Get in Touch
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
          We'd love to hear from you! Whether you have a question, want to share
          a story, or would like to get involved, we're here to connect.
        </p>
        <p className="text-base md:text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Reach out and let's spread kindness together.
        </p>
      </div>
    </section>
  );
};

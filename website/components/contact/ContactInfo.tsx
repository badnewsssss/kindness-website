import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { SocialLinks } from './SocialLinks';

export interface ContactInfoProps {
  className?: string;
}

/**
 * Contact information display component
 * Shows email, social media links, and optional location info
 */
export const ContactInfo: FC<ContactInfoProps> = ({ className }) => {
  return (
    <div className={cn('space-y-8', className)}>
      {/* Email Section */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <svg
            className="w-5 h-5 text-blue-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
          Email
        </h3>
        <a
          href="mailto:info@kindnessforautism.org"
          className="text-blue-600 hover:text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1 inline-block transition-colors duration-200"
        >
          info@kindnessforautism.org
        </a>
      </div>

      {/* Social Media Section */}
      <div>
        <SocialLinks />
      </div>

      {/* Location Section (Optional) */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <svg
            className="w-5 h-5 text-blue-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          Location
        </h3>
        <p className="text-gray-600">
          Serving the autism community worldwide
        </p>
      </div>

      {/* Additional Info */}
      <div className="pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-500">
          We typically respond to inquiries within 24-48 hours during business days.
        </p>
      </div>
    </div>
  );
};

import type { FC, ReactElement } from 'react';
import { cn } from '@/lib/utils';

export interface SocialLinksProps {
  className?: string;
}

interface SocialLink {
  name: string;
  url: string;
  icon: ReactElement;
  color: string;
}

/**
 * Social media links component
 * Displays links to YouTube, TikTok, and Facebook with icons
 */
export const SocialLinks: FC<SocialLinksProps> = ({ className }) => {
  const socialLinks: SocialLink[] = [
    {
      name: 'YouTube',
      url: 'https://youtube.com/@kindnessforautism',
      color: 'hover:bg-red-50 hover:text-red-600 focus:ring-red-500',
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: 'TikTok',
      url: 'https://tiktok.com/@kindnessforautism',
      color: 'hover:bg-gray-900 hover:text-white focus:ring-gray-900',
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/kindnessforautism',
      color: 'hover:bg-blue-50 hover:text-blue-600 focus:ring-blue-500',
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <h3 className="text-lg font-semibold text-[var(--color-foreground)]">
        Follow Us
      </h3>
      <div className="flex gap-3">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-[var(--color-border)] text-[var(--color-muted-foreground)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
              link.color
            )}
            aria-label={`Visit our ${link.name} page (opens in new window)`}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

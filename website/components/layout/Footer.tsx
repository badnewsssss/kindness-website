import { FC } from 'react';
import Link from 'next/link';
import { HeartIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { Container } from './Container';
import clsx from 'clsx';

// Social media icon components (simple SVG paths)
const YouTubeIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const TikTokIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const FacebookIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

interface QuickLink {
  name: string;
  href: string;
}

const quickLinks: QuickLink[] = [
  { name: 'About Us', href: '/about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Videos', href: '/videos' },
  { name: 'Stories', href: '/stories' },
  { name: 'Committee', href: '/committee' },
  { name: 'Contact', href: '/contact' },
  { name: 'Donate', href: '/donate' },
];

interface SocialLink {
  name: string;
  href: string;
  icon: FC<{ className?: string }>;
}

const socialLinks: SocialLink[] = [
  {
    name: 'YouTube',
    href: 'https://youtube.com/@kindnessforautism',
    icon: YouTubeIcon,
  },
  {
    name: 'TikTok',
    href: 'https://tiktok.com/@kindnessforautism',
    icon: TikTokIcon,
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/kindnessforautism',
    icon: FacebookIcon,
  },
];

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-blue-50 to-white border-t border-gray-200">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Mission & Logo */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <HeartIcon className="h-8 w-8 text-blue-600" aria-hidden="true" />
              <span className="text-xl font-bold text-gray-900">
                Kindness for Autism
              </span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md leading-relaxed">
              Spreading joy, kindness, and acceptance in our community.
              Together, we create a more inclusive world where everyone is celebrated for who they are.
            </p>
            <div className="flex items-center gap-2 text-gray-600">
              <EnvelopeIcon className="h-5 w-5" aria-hidden="true" />
              <a
                href="mailto:info@kindnessforautism.org"
                className={clsx(
                  'hover:text-blue-600 transition-colors duration-200',
                  'focus:outline-none focus:underline focus:text-blue-600'
                )}
              >
                info@kindnessforautism.org
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={clsx(
                      'text-gray-600 hover:text-blue-600',
                      'transition-colors duration-200',
                      'focus:outline-none focus:underline focus:text-blue-600'
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Connect With Us
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={clsx(
                      'text-gray-600 hover:text-blue-600',
                      'transition-colors duration-200',
                      'focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded',
                      'p-1 -m-1'
                    )}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
            <div className="mt-6">
              <Link
                href="/donate"
                className={clsx(
                  'inline-flex items-center justify-center',
                  'px-6 py-2.5 rounded-full',
                  'bg-gradient-to-r from-blue-600 to-blue-700',
                  'text-white font-semibold text-sm',
                  'shadow-md hover:shadow-lg',
                  'hover:from-blue-700 hover:to-blue-800',
                  'focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2',
                  'transition-all duration-200'
                )}
              >
                <HeartIcon className="h-4 w-4 mr-2" aria-hidden="true" />
                Support Our Cause
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-gray-600">
              &copy; {currentYear} Kindness for Autism. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="/privacy"
                className={clsx(
                  'text-gray-600 hover:text-blue-600',
                  'transition-colors duration-200',
                  'focus:outline-none focus:underline focus:text-blue-600'
                )}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className={clsx(
                  'text-gray-600 hover:text-blue-600',
                  'transition-colors duration-200',
                  'focus:outline-none focus:underline focus:text-blue-600'
                )}
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

'use client';

import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export interface NavItem {
  name: string;
  href: string;
  description?: string;
}

export const navigationItems: NavItem[] = [
  { name: 'Home', href: '/', description: 'Return to homepage' },
  { name: 'About', href: '/about', description: 'Learn about our mission' },
  { name: 'Gallery', href: '/gallery', description: 'View photo gallery' },
  { name: 'Videos', href: '/videos', description: 'Watch our videos' },
  { name: 'Stories', href: '/stories', description: 'Read inspiring stories' },
  { name: 'Committee', href: '/advisory-committee', description: 'Meet our team' },
  { name: 'Contact', href: '/contact', description: 'Get in touch' },
];

interface NavigationProps {
  className?: string;
  onClick?: () => void;
}

export const Navigation: FC<NavigationProps> = ({ className, onClick }) => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className={className} aria-label="Main navigation">
      <ul className="flex flex-col lg:flex-row lg:items-center lg:gap-8">
        {navigationItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onClick}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={clsx(
                'block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md',
                'hover:bg-blue-50 hover:text-blue-700',
                'focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2',
                isActive(item.href)
                  ? 'text-blue-700 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-700'
              )}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

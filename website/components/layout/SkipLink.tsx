'use client';

import { FC } from 'react';
import clsx from 'clsx';

interface SkipLinkProps {
  href?: string;
  className?: string;
}

export const SkipLink: FC<SkipLinkProps> = ({
  href = '#main-content',
  className
}) => {
  return (
    <a
      href={href}
      className={clsx(
        'sr-only focus:not-sr-only',
        'fixed top-4 left-4 z-[9999]',
        'px-4 py-2 rounded-md',
        'bg-blue-600 text-white font-medium',
        'focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2',
        'transition-all duration-200',
        className
      )}
    >
      Skip to main content
    </a>
  );
};

import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
  children: React.ReactNode;
}

export interface CardImageProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | 'auto';
}

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

/**
 * Card component with soft shadow and rounded corners
 * Supports optional image header and hover effects
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      padding = 'md',
      hover = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'bg-white rounded-lg shadow-md transition-all duration-200';
    const hoverStyles = hover ? 'hover:shadow-lg hover:-translate-y-0.5' : '';

    const paddingStyles = {
      none: '',
      sm: 'p-3',
      md: 'p-6',
      lg: 'p-8',
    };

    return (
      <div
        ref={ref}
        className={cn(
          baseStyles,
          hoverStyles,
          paddingStyles[padding],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

/**
 * Card image header component
 */
export const CardImage = forwardRef<HTMLDivElement, CardImageProps>(
  (
    {
      src,
      alt,
      aspectRatio = '16/9',
      className,
      ...props
    },
    ref
  ) => {
    const aspectRatios = {
      '16/9': 'aspect-video',
      '4/3': 'aspect-[4/3]',
      '1/1': 'aspect-square',
      'auto': '',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'overflow-hidden rounded-t-lg',
          aspectRatios[aspectRatio],
          className
        )}
        {...props}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    );
  }
);

CardImage.displayName = 'CardImage';

/**
 * Card header component
 */
export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  (
    {
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn('mb-4', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardHeader.displayName = 'CardHeader';

/**
 * Card content component
 */
export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  (
    {
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn('', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardContent.displayName = 'CardContent';

/**
 * Card footer component
 */
export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  (
    {
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn('mt-4 pt-4 border-t border-gray-200', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardFooter.displayName = 'CardFooter';

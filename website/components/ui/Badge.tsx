import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'autism';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

/**
 * Status badge component for categories and tags
 * Small, accessible text with different color variants
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = 'default',
      size = 'md',
      className,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'inline-flex items-center font-medium rounded-full transition-colors duration-200';

    const variants = {
      default: 'bg-gray-100 text-gray-800 border border-gray-300',
      primary: 'bg-blue-100 text-blue-800 border border-blue-300',
      secondary: 'bg-green-100 text-green-800 border border-green-300',
      success: 'bg-emerald-100 text-emerald-800 border border-emerald-300',
      warning: 'bg-yellow-100 text-yellow-800 border border-yellow-300',
      danger: 'bg-red-100 text-red-800 border border-red-300',
      info: 'bg-cyan-100 text-cyan-800 border border-cyan-300',
      autism: 'bg-[#E6F0FF] text-[#0066CC] border border-[#0066CC]/30', // Autism awareness colors
    };

    const sizes = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-2.5 py-1 text-sm',
      lg: 'px-3 py-1.5 text-base',
    };

    return (
      <span
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export interface BadgeGroupProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  spacing?: 'sm' | 'md' | 'lg';
}

/**
 * Container for multiple badges with proper spacing
 */
export const BadgeGroup = forwardRef<HTMLDivElement, BadgeGroupProps>(
  (
    {
      spacing = 'md',
      className,
      children,
      ...props
    },
    ref
  ) => {
    const spacingStyles = {
      sm: 'gap-1',
      md: 'gap-2',
      lg: 'gap-3',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-wrap items-center',
          spacingStyles[spacing],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

BadgeGroup.displayName = 'BadgeGroup';

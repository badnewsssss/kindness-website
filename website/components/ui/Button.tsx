'use client';

import { forwardRef, type ButtonHTMLAttributes, type ReactElement, isValidElement } from 'react';
import { cloneElement } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'autism';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  asChild?: boolean;
  children: React.ReactNode;
}

/**
 * Accessible button component with multiple variants and sizes
 * Includes loading state with spinner and proper focus management
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      disabled = false,
      asChild = false,
      className,
      children,
      type = 'button',
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none rounded-lg';

    const variants = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 active:bg-blue-800',
      secondary: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 active:bg-green-800',
      outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500 active:bg-blue-100',
      ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500 active:bg-gray-200',
      autism: 'bg-[#0066CC] text-white hover:bg-[#0052A3] focus:ring-[#0066CC] active:bg-[#004080]', // Autism awareness blue
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm gap-1.5',
      md: 'px-4 py-2 text-base gap-2',
      lg: 'px-6 py-3 text-lg gap-2.5',
    };

    const isDisabled = disabled || loading;

    const buttonClasses = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      className
    );

    // If asChild is true, pass props to child element (e.g., Next.js Link)
    if (asChild && isValidElement(children)) {
      return cloneElement(children as ReactElement<{ className?: string; 'aria-disabled'?: boolean }>, {
        className: buttonClasses,
        'aria-disabled': isDisabled,
        ...(props as object),
      });
    }

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        aria-label={ariaLabel}
        aria-busy={loading}
        aria-disabled={isDisabled}
        className={buttonClasses}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin"
            style={{ width: size === 'sm' ? '14px' : size === 'lg' ? '20px' : '16px', height: size === 'sm' ? '14px' : size === 'lg' ? '20px' : '16px' }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        <span>{children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';

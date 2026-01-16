import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges Tailwind CSS classes with proper precedence handling.
 *
 * This utility combines clsx for conditional class names and tailwind-merge
 * to ensure Tailwind classes are properly merged without conflicts.
 *
 * @param inputs - Class values to merge (strings, objects, arrays)
 * @returns Merged className string
 *
 * @example
 * ```typescript
 * // Simple usage
 * cn('px-4 py-2', 'bg-blue-500')
 * // => 'px-4 py-2 bg-blue-500'
 *
 * // Conditional classes
 * cn('btn', isActive && 'btn-active', isPrimary ? 'btn-primary' : 'btn-secondary')
 *
 * // Object syntax
 * cn('base-class', {
 *   'active-class': isActive,
 *   'disabled-class': isDisabled,
 * })
 *
 * // Tailwind class merging (last class wins)
 * cn('px-4 py-2', 'px-6')
 * // => 'py-2 px-6' (px-6 overrides px-4)
 * ```
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Formats a number as currency in USD.
 *
 * @param amount - The amount to format
 * @param options - Intl.NumberFormat options
 * @returns Formatted currency string
 *
 * @example
 * ```typescript
 * formatCurrency(1234.56)
 * // => '$1,234.56'
 * ```
 */
export function formatCurrency(
  amount: number,
  options?: Intl.NumberFormatOptions
): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    ...options,
  }).format(amount);
}

/**
 * Formats a date in a human-readable format.
 *
 * @param date - The date to format
 * @param options - Intl.DateTimeFormat options
 * @returns Formatted date string
 *
 * @example
 * ```typescript
 * formatDate(new Date('2024-01-15'))
 * // => 'January 15, 2024'
 * ```
 */
export function formatDate(
  date: Date | string | number,
  options?: Intl.DateTimeFormatOptions
): string {
  const dateObj = typeof date === 'string' || typeof date === 'number'
    ? new Date(date)
    : date;

  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  }).format(dateObj);
}

/**
 * Truncates a string to a specified length and adds ellipsis.
 *
 * @param str - The string to truncate
 * @param maxLength - Maximum length before truncation
 * @returns Truncated string with ellipsis if needed
 *
 * @example
 * ```typescript
 * truncate('This is a long sentence', 10)
 * // => 'This is...'
 * ```
 */
export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - 3) + '...';
}

/**
 * Generates a slug from a string (URL-friendly version).
 *
 * @param str - The string to convert to a slug
 * @returns URL-friendly slug
 *
 * @example
 * ```typescript
 * slugify('Hello World!')
 * // => 'hello-world'
 * ```
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Delays execution for a specified number of milliseconds.
 * Useful for async operations and testing.
 *
 * @param ms - Milliseconds to delay
 * @returns Promise that resolves after the delay
 *
 * @example
 * ```typescript
 * await sleep(1000); // Wait 1 second
 * ```
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Capitalizes the first letter of a string.
 *
 * @param str - The string to capitalize
 * @returns String with first letter capitalized
 *
 * @example
 * ```typescript
 * capitalize('hello world')
 * // => 'Hello world'
 * ```
 */
export function capitalize(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Checks if a value is defined (not null or undefined).
 * TypeScript type guard.
 *
 * @param value - The value to check
 * @returns True if value is defined
 *
 * @example
 * ```typescript
 * const values = [1, null, 2, undefined, 3];
 * const defined = values.filter(isDefined);
 * // => [1, 2, 3]
 * ```
 */
export function isDefined<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}

/**
 * Creates a debounced function that delays invoking func until after
 * wait milliseconds have elapsed since the last time it was invoked.
 *
 * @param func - The function to debounce
 * @param wait - Milliseconds to wait
 * @returns Debounced function
 *
 * @example
 * ```typescript
 * const handleSearch = debounce((query: string) => {
 *   console.log('Searching for:', query);
 * }, 300);
 *
 * handleSearch('test'); // Will only execute after 300ms of inactivity
 * ```
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

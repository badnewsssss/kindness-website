import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

/**
 * Accessible form input component
 * Includes label, error state, required indicator, and focus ring
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      required,
      fullWidth = false,
      className,
      id,
      type = 'text',
      disabled,
      ...props
    },
    ref
  ) => {
    // Generate unique ID if not provided
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    const errorId = error ? `${inputId}-error` : undefined;
    const helperId = helperText ? `${inputId}-helper` : undefined;

    const baseStyles = 'block w-full rounded-md border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-500';

    const normalStyles = 'border-gray-300 focus:border-blue-500 focus:ring-blue-500';
    const errorStyles = 'border-red-500 focus:border-red-500 focus:ring-red-500';

    const sizeStyles = 'px-3 py-2 text-base';

    const containerWidth = fullWidth ? 'w-full' : '';

    return (
      <div className={cn('flex flex-col gap-1.5', containerWidth)}>
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-gray-700"
          >
            {label}
            {required && (
              <span className="text-red-500 ml-1" aria-label="required">
                *
              </span>
            )}
          </label>
        )}

        <input
          ref={ref}
          id={inputId}
          type={type}
          required={required}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={cn(
            errorId,
            helperId
          )}
          aria-required={required}
          className={cn(
            baseStyles,
            sizeStyles,
            error ? errorStyles : normalStyles,
            className
          )}
          {...props}
        />

        {error && (
          <p
            id={errorId}
            className="text-sm text-red-600 flex items-start gap-1"
            role="alert"
          >
            <svg
              className="w-4 h-4 mt-0.5 flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                clipRule="evenodd"
              />
            </svg>
            <span>{error}</span>
          </p>
        )}

        {helperText && !error && (
          <p
            id={helperId}
            className="text-sm text-gray-500"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

/**
 * Accessible textarea component
 * Similar to Input but for multi-line text
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      error,
      helperText,
      required,
      fullWidth = false,
      className,
      id,
      disabled,
      rows = 4,
      ...props
    },
    ref
  ) => {
    const inputId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
    const errorId = error ? `${inputId}-error` : undefined;
    const helperId = helperText ? `${inputId}-helper` : undefined;

    const baseStyles = 'block w-full rounded-md border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-500 resize-y';

    const normalStyles = 'border-gray-300 focus:border-blue-500 focus:ring-blue-500';
    const errorStyles = 'border-red-500 focus:border-red-500 focus:ring-red-500';

    const sizeStyles = 'px-3 py-2 text-base';

    const containerWidth = fullWidth ? 'w-full' : '';

    return (
      <div className={cn('flex flex-col gap-1.5', containerWidth)}>
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-gray-700"
          >
            {label}
            {required && (
              <span className="text-red-500 ml-1" aria-label="required">
                *
              </span>
            )}
          </label>
        )}

        <textarea
          ref={ref}
          id={inputId}
          rows={rows}
          required={required}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={cn(
            errorId,
            helperId
          )}
          aria-required={required}
          className={cn(
            baseStyles,
            sizeStyles,
            error ? errorStyles : normalStyles,
            className
          )}
          {...props}
        />

        {error && (
          <p
            id={errorId}
            className="text-sm text-red-600 flex items-start gap-1"
            role="alert"
          >
            <svg
              className="w-4 h-4 mt-0.5 flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                clipRule="evenodd"
              />
            </svg>
            <span>{error}</span>
          </p>
        )}

        {helperText && !error && (
          <p
            id={helperId}
            className="text-sm text-gray-500"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

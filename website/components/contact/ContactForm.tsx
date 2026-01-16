'use client';

import { useState, type FC } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/Button';
import { Input, Textarea } from '@/components/ui/Input';
import { cn } from '@/lib/utils';

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters').max(200, 'Subject is too long'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message is too long'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export interface ContactFormProps {
  className?: string;
}

/**
 * Accessible contact form component
 * Features validation, loading states, and success/error messages
 */
export const ContactForm: FC<ContactFormProps> = ({ className }) => {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call
      // In production, replace with actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // eslint-disable-next-line no-console
      console.log('Form submitted:', data);

      setSubmitStatus('success');
      setErrorMessage('');
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again later.'
      );
    }
  };

  return (
    <div className={cn('w-full', className)}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
        {/* Name Field */}
        <Input
          {...register('name')}
          label="Name"
          type="text"
          placeholder="Your full name"
          required
          error={errors.name?.message}
          disabled={isSubmitting}
          fullWidth
          autoComplete="name"
        />

        {/* Email Field */}
        <Input
          {...register('email')}
          label="Email"
          type="email"
          placeholder="your.email@example.com"
          required
          error={errors.email?.message}
          disabled={isSubmitting}
          fullWidth
          autoComplete="email"
        />

        {/* Subject Field */}
        <Input
          {...register('subject')}
          label="Subject"
          type="text"
          placeholder="What is this regarding?"
          required
          error={errors.subject?.message}
          disabled={isSubmitting}
          fullWidth
        />

        {/* Message Field */}
        <Textarea
          {...register('message')}
          label="Message"
          placeholder="Tell us more about your inquiry..."
          required
          error={errors.message?.message}
          disabled={isSubmitting}
          fullWidth
          rows={6}
        />

        {/* Success Message */}
        {submitStatus === 'success' && (
          <div
            className="rounded-md bg-green-50 p-4 border border-green-200"
            role="alert"
            aria-live="polite"
          >
            <div className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <h3 className="text-sm font-medium text-green-800">
                  Message sent successfully!
                </h3>
                <p className="text-sm text-green-700 mt-1">
                  Thank you for reaching out. We'll get back to you soon.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Error Message */}
        {submitStatus === 'error' && (
          <div
            className="rounded-md bg-red-50 p-4 border border-red-200"
            role="alert"
            aria-live="assertive"
          >
            <div className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0"
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
              <div>
                <h3 className="text-sm font-medium text-red-800">
                  Failed to send message
                </h3>
                <p className="text-sm text-red-700 mt-1">
                  {errorMessage || 'Please try again later or contact us directly via email.'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          loading={isSubmitting}
          disabled={isSubmitting}
          className="w-full sm:w-auto"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>

      {/* Form Instructions for Screen Readers */}
      <div className="sr-only" aria-live="polite">
        {isSubmitting && 'Submitting your message, please wait.'}
      </div>
    </div>
  );
};

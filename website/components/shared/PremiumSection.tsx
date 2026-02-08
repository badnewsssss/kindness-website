import { ReactNode } from 'react';
import { Container } from '@/components/layout';
import { cn } from '@/lib/utils';

interface PremiumSectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'muted' | 'gradient' | 'glass';
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  id?: string;
}

export function PremiumSection({
  children,
  className,
  background = 'white',
  spacing = 'lg',
  id,
}: PremiumSectionProps) {
  const backgroundClasses = {
    white: 'bg-white',
    muted: 'bg-gray-50',
    gradient: 'bg-gradient-to-br from-blue-50 via-white to-green-50',
    glass: 'glass-premium',
  };

  const spacingClasses = {
    sm: 'py-12 lg:py-16',
    md: 'py-16 lg:py-20',
    lg: 'py-20 lg:py-28',
    xl: 'py-24 lg:py-32',
  };

  return (
    <section
      id={id}
      className={cn(
        'relative',
        backgroundClasses[background],
        spacingClasses[spacing],
        className
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}

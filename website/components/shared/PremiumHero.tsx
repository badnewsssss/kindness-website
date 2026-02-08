import { ReactNode } from 'react';
import { Container } from '@/components/layout';
import { cn } from '@/lib/utils';

interface PremiumHeroProps {
  title: string | ReactNode;
  subtitle?: string;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
  background?: 'gradient' | 'solid' | 'glass';
}

export function PremiumHero({
  title,
  subtitle,
  description,
  children,
  className,
  background = 'gradient',
}: PremiumHeroProps) {
  const backgroundClasses = {
    gradient: 'bg-gradient-to-br from-blue-50 via-white to-green-50',
    solid: 'bg-white',
    glass: 'glass-premium',
  };

  return (
    <section
      className={cn(
        'relative overflow-hidden py-20 lg:py-32',
        backgroundClasses[background],
        className
      )}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow animation-delay-1000" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {subtitle && (
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">
              {subtitle}
            </p>
          )}
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            {typeof title === 'string' ? (
              <>
                {title.split(' ').map((word, i, arr) => (
                  <span key={i}>
                    {i === arr.length - 1 ? (
                      <span className="text-blue-600">{word}</span>
                    ) : (
                      word
                    )}
                    {i < arr.length - 1 && ' '}
                  </span>
                ))}
              </>
            ) : (
              title
            )}
          </h1>

          {description && (
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          )}

          {children && (
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              {children}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

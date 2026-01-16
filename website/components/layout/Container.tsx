import { FC, ReactNode } from 'react';
import clsx from 'clsx';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  as?: 'div' | 'section' | 'article' | 'main' | 'aside' | 'header' | 'footer';
}

const sizeClasses = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-7xl',
  xl: 'max-w-[1400px]',
  full: 'max-w-full',
};

const paddingClasses = {
  none: '',
  sm: 'px-4 sm:px-6',
  md: 'px-4 sm:px-6 lg:px-8',
  lg: 'px-6 sm:px-8 lg:px-12',
};

export const Container: FC<ContainerProps> = ({
  children,
  className,
  size = 'lg',
  padding = 'md',
  as: Component = 'div',
}) => {
  return (
    <Component
      className={clsx(
        'mx-auto w-full',
        sizeClasses[size],
        paddingClasses[padding],
        className
      )}
    >
      {children}
    </Component>
  );
};

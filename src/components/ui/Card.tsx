import { HTMLAttributes, forwardRef } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'hover' | 'glass';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', variant = 'default', padding = 'md', children, ...props }, ref) => {
    const variants = {
      default: 'bg-dark-900/50 backdrop-blur-sm border border-dark-700 rounded-xl transition-all duration-300 hover:border-dark-600 hover:shadow-xl hover:shadow-primary-500/10',
      hover: 'bg-dark-900/50 backdrop-blur-sm border border-dark-700 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:border-dark-500 hover:shadow-2xl hover:shadow-primary-500/20',
      glass: 'bg-dark-900/80 backdrop-blur-md border border-dark-700/50 rounded-xl',
    };

    const paddings = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    };

    return (
      <div
        ref={ref}
        className={`${variants[variant]} ${paddings[padding]} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
import { HTMLAttributes, forwardRef } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string;
  className?: string;
  background?: 'none' | 'gradient' | 'pattern';
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ id, className = '', background = 'none', children, ...props }, ref) => {
    const backgrounds = {
      none: '',
      gradient: 'relative before:absolute before:inset-0 before:bg-gradient-to-b before:from-dark-950 before:via-dark-900/50 before:to-dark-950 before:z-0',
      pattern: 'relative before:absolute before:inset-0 before:bg-[url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%230ea5e9\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] before:z-0',
    };

    return (
      <section
        ref={ref}
        id={id}
        className={`relative py-20 lg:py-32 ${backgrounds[background]} ${className}`}
        {...props}
      >
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = 'Section';
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { siteConfig } from '@/data';

const navItems = [
  { label: 'About', href: 'about' },
  { label: 'Pipeline', href: 'pipeline' },
  { label: 'Projects', href: 'projects' },
  { label: 'Skills', href: 'skills' },
  { label: 'Journey', href: 'journey' },
  { label: 'Contact', href: 'contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-strong shadow-lg shadow-ink/50' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="hero" smooth duration={500} className="font-display text-lg text-ivory hover:text-accent transition-colors cursor-pointer">
            {siteConfig.name.toUpperCase()}
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                smooth
                duration={500}
                offset={-80}
                className="text-silver hover:text-accent transition-colors text-xs uppercase tracking-[0.2em] cursor-pointer"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-ivory p-2"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="w-6 space-y-1.5">
              <div className={`h-0.5 bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <div className={`h-0.5 bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`} />
              <div className={`h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden py-6 border-t border-slate/30 animate-slide-down">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  smooth
                  duration={500}
                  offset={-80}
                  onClick={() => setMenuOpen(false)}
                  className="text-silver hover:text-accent transition-colors text-sm uppercase tracking-[0.2em] py-2 cursor-pointer"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
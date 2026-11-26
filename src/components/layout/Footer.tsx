import { siteConfig, socialLinks } from '@/data';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-slate/20 bg-ink">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-lg text-ivory mb-2">{siteConfig.name.toUpperCase()}</p>
            <p className="text-silver text-xs">
              Performance Test Engineer — Engineering performance. Revealing bottlenecks. Building resilience.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-silver hover:text-accent transition-colors text-xs uppercase tracking-wider"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate/20 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-silver/50 text-xs">© {year} {siteConfig.name}. All rights reserved.</p>
          <p className="text-silver/50 text-xs">Built with React · Three.js · GSAP</p>
        </div>
      </div>
    </footer>
  );
}
import { siteConfig } from '@/data';

export function Resume() {
  return (
    <section id="resume" className="relative py-24 lg:py-32 overflow-hidden bg-graphite">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 p-8 lg:p-16 bg-charcoal border border-slate/30">
          <div>
            <p className="eyebrow mb-4">Resume</p>
            <h2 className="font-display text-4xl lg:text-6xl uppercase text-ivory tracking-wide mb-4">
              The full<br />
              <span className="font-serif italic text-accent normal-case tracking-normal">picture.</span>
            </h2>
            <p className="text-silver max-w-md">
              Experience, achievements, and technical expertise — documented.
            </p>
          </div>

          <div className="flex flex-col gap-3 w-full lg:w-auto">
            <a
              href="https://github.com/satyaganesh"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary justify-center"
            >
              View on GitHub
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary justify-center"
            >
              View LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
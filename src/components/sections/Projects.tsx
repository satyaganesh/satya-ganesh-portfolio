import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '@/data';

gsap.registerPlugin(ScrollTrigger);

function BrowserCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="project-card group relative bg-graphite border border-slate/40 overflow-hidden transition-all duration-500 hover:border-accent/50"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-center gap-2 px-4 py-3 bg-charcoal border-b border-slate/30">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-[10px] text-silver/50 font-mono truncate block">
            {project.shortTitle.toLowerCase().replace(/\s+/g, '-')}.portfolio
          </span>
        </div>
      </div>

      <div className="p-6 lg:p-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[10px] tracking-[0.2em] uppercase text-accent font-medium">{project.domain}</span>
          {project.featured && (
            <span className="text-[9px] px-2 py-0.5 bg-accent/15 text-accent uppercase tracking-wider">Featured</span>
          )}
        </div>

        <h3 className="font-display text-2xl lg:text-3xl uppercase text-ivory tracking-wide mb-4 leading-tight">
          {project.title}
        </h3>

        <p className="text-silver text-sm leading-relaxed mb-6">
          {project.overview}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tools.map((tool) => (
            <span key={tool} className="text-[10px] px-2.5 py-1 bg-slate/40 text-mist border border-slate/50 uppercase tracking-wider">
              {tool}
            </span>
          ))}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="text-accent text-xs uppercase tracking-[0.2em] font-medium hover:text-accent-light transition-colors flex items-center gap-2"
        >
          {expanded ? 'Less' : 'More'}
          <span className={`transition-transform ${expanded ? 'rotate-180' : ''}`}>↓</span>
        </button>

        {expanded && (
          <div className="mt-6 pt-6 border-t border-slate/30 space-y-4 animate-fade-in">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-accent mb-2">Strategy</h4>
              <p className="text-silver text-sm leading-relaxed">{project.strategy}</p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-accent mb-2">Challenges</h4>
              <p className="text-silver text-sm leading-relaxed">{project.challenges}</p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-accent mb-2">Outcome</h4>
              <p className="text-silver text-sm leading-relaxed">{project.outcome}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.project-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: '.projects-grid', start: 'top 80%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative py-32 lg:py-48 bg-charcoal overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
          <div>
            <p className="eyebrow mb-6">Selected Work</p>
            <h2 className="section-title text-ivory">
              Projects that<br />
              <span className="font-serif italic text-accent normal-case tracking-normal">perform.</span>
            </h2>
          </div>
          <p className="section-subtitle max-w-md">
            Real-world performance engineering across AI, cloud migration, automotive, and content management domains.
          </p>
        </div>

        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <BrowserCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
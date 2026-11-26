import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skillCategories } from '@/data';

gsap.registerPlugin(ScrollTrigger);

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.skill-pill',
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1, scale: 1, duration: 0.5, stagger: 0.02, ease: 'back.out(1.5)',
          scrollTrigger: { trigger: '.skills-container', start: 'top 80%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const filtered = active
    ? skillCategories.filter((c) => c.name === active)
    : skillCategories;

  return (
    <section id="skills" ref={sectionRef} className="relative py-32 lg:py-48 bg-ink overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="eyebrow mb-6">Expertise</p>
          <h2 className="section-title text-ivory">
            Tools &<br />
            <span className="font-serif italic text-accent normal-case tracking-normal">technologies</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-16">
          <button
            onClick={() => setActive(null)}
            className={`px-4 py-2 text-xs uppercase tracking-[0.2em] font-medium transition-all ${
              active === null ? 'bg-accent text-ink' : 'bg-graphite text-silver border border-slate/40 hover:border-accent/40'
            }`}
          >
            All
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActive(active === cat.name ? null : cat.name)}
              className={`px-4 py-2 text-xs uppercase tracking-[0.2em] font-medium transition-all ${
                active === cat.name ? 'bg-accent text-ink' : 'bg-graphite text-silver border border-slate/40 hover:border-accent/40'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="skills-container space-y-10">
          {filtered.map((cat) => (
            <div key={cat.name}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-1 h-6" style={{ backgroundColor: cat.color }} />
                <h3 className="text-ivory font-medium text-sm uppercase tracking-[0.2em]">{cat.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-pill px-4 py-2 bg-graphite/60 border border-slate/30 text-mist text-sm hover:border-accent/50 hover:text-ivory transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
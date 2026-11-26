import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { experiences } from '@/data';

gsap.registerPlugin(ScrollTrigger);

export function Journey() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.journey-item',
        { opacity: 0, x: -40 },
        {
          opacity: 1, x: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: '.journey-list', start: 'top 80%' },
        }
      );
      gsap.fromTo('.journey-line',
        { scaleY: 0 },
        {
          scaleY: 1, duration: 2, ease: 'power2.inOut',
          scrollTrigger: { trigger: '.journey-list', start: 'top 80%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="journey" ref={sectionRef} className="relative py-32 lg:py-48 overflow-hidden bg-ink">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <p className="eyebrow mb-6">The Journey</p>
          <h2 className="section-title text-ivory">
            A career in<br />
            <span className="font-serif italic text-accent normal-case tracking-normal">performance.</span>
          </h2>
        </div>

        <div className="journey-list relative max-w-3xl mx-auto">
          <div className="journey-line absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-slate to-transparent origin-top" />

          {experiences.map((exp, i) => (
            <div key={exp.company} className={`journey-item relative pl-12 lg:pl-0 lg:grid lg:grid-cols-2 lg:gap-12 mb-12 ${i % 2 === 0 ? 'lg:text-right' : ''}`}>
              <div className={`absolute left-0 lg:left-1/2 lg:-translate-x-1/2 top-2 w-3 h-3 rounded-full bg-accent border-2 border-ink z-10 ${i % 2 === 0 ? 'lg:col-start-2 lg:row-start-1' : ''}`} />

              <div className={i % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-2'}>
                <span className="font-mono text-accent text-xs">{exp.period}</span>
                <h3 className="font-display text-2xl lg:text-3xl uppercase text-ivory tracking-wide mt-2 mb-1">{exp.role}</h3>
                <p className="text-accent text-sm mb-4">{exp.company} · {exp.location}</p>
                <p className="text-silver text-sm leading-relaxed mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.slice(0, 6).map((tech) => (
                    <span key={tech} className="text-[9px] px-2 py-0.5 bg-slate/40 text-mist uppercase tracking-wider">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { pipelineSteps } from '@/data';

gsap.registerPlugin(ScrollTrigger);

export function Pipeline() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.pipeline-node',
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1, scale: 1, duration: 0.6, stagger: 0.08, ease: 'back.out(1.4)',
          scrollTrigger: { trigger: '.pipeline-grid', start: 'top 80%' },
        }
      );
      gsap.fromTo('.pipeline-line',
        { scaleX: 0 },
        {
          scaleX: 1, duration: 1.5, ease: 'power2.inOut',
          scrollTrigger: { trigger: '.pipeline-grid', start: 'top 80%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="pipeline" ref={sectionRef} className="relative py-32 lg:py-48 overflow-hidden bg-ink">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(#c9a96e 1px, transparent 1px), linear-gradient(90deg, #c9a96e 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        opacity: 0.05,
      }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <p className="eyebrow mb-6">The Process</p>
          <h2 className="section-title text-ivory">
            Performance<br />
            <span className="font-serif italic text-accent normal-case tracking-normal">engineering</span> lifecycle
          </h2>
          <p className="section-subtitle mx-auto mt-6">
            A systematic, data-driven approach to understanding, measuring, and improving system performance.
          </p>
        </div>

        <div className="pipeline-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
          {pipelineSteps.map((step, i) => (
            <div key={step.num} className="pipeline-node group relative p-6 bg-graphite/40 border border-slate/30 hover:border-accent/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-accent text-sm">{step.num}</span>
                <div className="w-8 h-px bg-slate group-hover:bg-accent transition-colors" />
              </div>
              <h3 className="text-ivory font-medium text-sm mb-2 leading-tight">{step.title}</h3>
              <p className="text-silver text-xs leading-relaxed">{step.desc}</p>

              {i < pipelineSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-px bg-slate/50" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
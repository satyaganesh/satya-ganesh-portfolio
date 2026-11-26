import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { frameworkNodes, frameworkFeatures } from '@/data';

gsap.registerPlugin(ScrollTrigger);

export function Framework() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.framework-node',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.framework-flow', start: 'top 80%' },
        }
      );
      gsap.fromTo('.framework-feature',
        { opacity: 0, x: -20 },
        {
          opacity: 1, x: 0, duration: 0.5, stagger: 0.04, ease: 'power2.out',
          scrollTrigger: { trigger: '.framework-features', start: 'top 80%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="framework" ref={sectionRef} className="relative py-32 lg:py-48 overflow-hidden bg-charcoal">
      <div className="absolute inset-0 bg-gradient-to-b from-ink to-charcoal" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <p className="eyebrow mb-6">Framework Showcase</p>
          <h2 className="section-title text-ivory">
            Centralized K6<br />
            <span className="font-serif italic text-accent normal-case tracking-normal">performance</span> framework
          </h2>
          <p className="section-subtitle mx-auto mt-6">
            A modular, entity-based architecture that transforms how performance tests are built, executed, and analyzed.
          </p>
        </div>

        <div className="framework-flow flex flex-wrap items-center justify-center gap-3 lg:gap-4 mb-20">
          {frameworkNodes.map((node, i) => (
            <div key={node.label} className="framework-node flex items-center gap-3">
              <div className="flex flex-col items-center gap-2 px-5 py-4 bg-graphite/60 border border-slate/40 min-w-[100px]">
                <span className="text-xl">{node.icon}</span>
                <span className="text-[10px] uppercase tracking-wider text-mist text-center leading-tight">{node.label}</span>
              </div>
              {i < frameworkNodes.length - 1 && (
                <div className="hidden lg:block w-8 h-px bg-gradient-to-r from-accent/50 to-slate/30" />
              )}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="framework-features grid grid-cols-1 sm:grid-cols-2 gap-3">
            {frameworkFeatures.map((feat) => (
              <div key={feat} className="framework-feature flex items-center gap-3 p-4 bg-graphite/30 border border-slate/20">
                <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                <span className="text-silver text-sm">{feat}</span>
              </div>
            ))}
          </div>

          <div className="relative p-8 lg:p-12 bg-graphite/40 border border-slate/30">
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-accent/40" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-accent/40" />
            <p className="font-serif italic text-2xl text-ivory mb-6">
              "One framework. Every entity. Every test."
            </p>
            <p className="text-silver text-sm leading-relaxed mb-8">
              The centralized K6 framework brings together modular TypeScript architecture, entity-based execution,
              and automated analysis into a single, reusable system. Built for scale, designed for clarity.
            </p>
            <div className="flex flex-wrap gap-2">
              {['TypeScript', 'K6', 'InfluxDB', 'Grafana', 'GitHub Actions', 'Jenkins'].map((t) => (
                <span key={t} className="text-[10px] px-2.5 py-1 bg-slate/40 text-mist border border-slate/50 uppercase tracking-wider">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
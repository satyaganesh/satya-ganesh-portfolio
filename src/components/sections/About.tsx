import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { aboutChapters, siteConfig } from '@/data';

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.chapter',
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: '.chapters-grid', start: 'top 80%' },
        }
      );
      gsap.fromTo('.about-text',
        { opacity: 0, x: -40 },
        {
          opacity: 1, x: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: '.about-text', start: 'top 85%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-32 lg:py-48 bg-charcoal overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-graphite/30 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="about-text">
            <p className="eyebrow mb-6">About</p>
            <h2 className="section-title text-ivory mb-8">
              Performance is<br />
              <span className="font-serif italic text-accent normal-case tracking-normal">not a feature.</span><br />
              It's a discipline.
            </h2>
            <div className="space-y-6 text-silver leading-relaxed">
              <p className="text-lg">
                I am a <span className="text-ivory">{siteConfig.title}</span> focused on performance testing,
                performance engineering, workload modelling, bottleneck identification, automation frameworks,
                monitoring, performance optimization and scalable systems.
              </p>
              <p>
                My experience includes enterprise applications, cloud migration validation, content management
                platforms, API performance, distributed systems and modern AI-driven applications.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-accent/30">
                <img src="images/profile.jpg" alt={siteConfig.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-ivory font-medium">{siteConfig.name}</p>
                <p className="text-silver text-sm">{siteConfig.title}</p>
              </div>
            </div>
          </div>

          <div className="chapters-grid space-y-2">
            {aboutChapters.map((ch) => (
              <div key={ch.num} className="chapter group flex items-start gap-6 p-6 lg:p-8 border border-slate/30 hover:border-accent/40 transition-colors bg-graphite/20">
                <span className="chapter-num">{ch.num}</span>
                <div>
                  <h3 className="font-display text-2xl lg:text-3xl uppercase text-ivory tracking-wide mb-2">{ch.title}</h3>
                  <p className="text-silver">{ch.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
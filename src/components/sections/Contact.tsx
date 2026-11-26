import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { contactInfo, socialLinks } from '@/data';

gsap.registerPlugin(ScrollTrigger);

const socialIcons: Record<string, string> = {
  GitHub: 'GH',
  LinkedIn: 'LI',
  'WhatsApp Channel': 'WA',
};

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-line',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="relative py-32 lg:py-48 overflow-hidden bg-ink">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_#1c1c1f_0%,_#0e0e0f_70%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="contact-line inline-flex items-center gap-3 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs tracking-[0.3em] uppercase text-silver">Open to opportunities</span>
          </div>

          <h2 className="font-display text-6xl lg:text-8xl xl:text-9xl uppercase text-ivory tracking-tight leading-[0.9] mb-8">
            <span className="contact-line block">Let's engineer</span>
            <span className="contact-line block font-serif italic text-accent normal-case tracking-normal">systems that</span>
            <span className="contact-line block">perform.</span>
          </h2>
        </div>

        <div className="contact-line grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-16">
          {contactInfo.map((info) => (
            <div key={info.label} className="p-6 bg-graphite/40 border border-slate/30 text-center">
              <p className="text-[10px] uppercase tracking-[0.2em] text-accent mb-3">{info.label}</p>
              {info.href ? (
                <a href={info.href} className="text-ivory text-sm hover:text-accent transition-colors">{info.value}</a>
              ) : (
                <p className="text-ivory text-sm">{info.value}</p>
              )}
            </div>
          ))}
        </div>

        <div className="contact-line flex flex-wrap justify-center gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-graphite/40 border border-slate/30 text-silver text-sm hover:border-accent hover:text-accent transition-all"
            >
              <span className="text-[10px] font-mono text-accent">{socialIcons[social.name] || '↗'}</span>
              {social.name}
            </a>
          ))}
        </div>

        <div className="contact-line mt-12 flex justify-center">
          <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-accent/30 shadow-xl shadow-accent/10">
            <img src="images/profile.jpg" alt="Satya Ganesh" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronRight, Github, ExternalLink, CheckCircle } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useGSAP, useReducedMotion } from '@/hooks/useGSAP';
import { experiences } from '@/data';

gsap.registerPlugin(ScrollTrigger);

export function Experience() {
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  useGSAP(() => {});

  useEffect(() => {
    if (reducedMotion) return;

    const elements = sectionRef.current?.querySelectorAll('.experience-card');
    if (elements) {
      gsap.fromTo(
        elements,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );
    }
  }, [reducedMotion]);

  return (
    <Section id="experience" ref={sectionRef} background="pattern">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary-400 text-sm font-medium tracking-wider uppercase">Experience</span>
          <h2 className="section-title mt-2 text-dark-50">Professional Journey</h2>
          <p className="section-subtitle mx-auto">
            Building scalable solutions and leading technical initiatives across diverse domains.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500/50 via-primary-500 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.role}
                className="relative pl-16 experience-card"
              >
                <div className="absolute left-0 top-4">
                  <div className="w-4 h-4 rounded-full bg-primary-500 border-4 border-dark-950 relative z-10" />
                  <div className="absolute left-1.5 top-4 bottom-0 w-0.5 bg-dark-700" style={{ height: index === experiences.length - 1 ? 0 : '100%' }} />
                </div>

                <Card variant="hover" padding="lg">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-dark-50">{exp.role}</h3>
                      <p className="text-primary-400 font-medium mt-1">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-dark-400 whitespace-nowrap">
                      <span>{exp.period}</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-dark-300 mb-6 leading-relaxed">{exp.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-dark-800 text-dark-300 border border-dark-600 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-dark-300">
                        <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-3">
                    <Button variant="ghost" size="sm" className="gap-1">
                      View Details
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                    <a
                      href="#"
                      className="flex items-center gap-1 text-sm text-dark-400 hover:text-primary-400 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-1 text-sm text-dark-400 hover:text-primary-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </a>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
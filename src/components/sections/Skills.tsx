'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { useGSAP, useReducedMotion } from '@/hooks/useGSAP';
import { skillCategories } from '@/data';

gsap.registerPlugin(ScrollTrigger);

export function Skills() {
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  useGSAP(() => {});

  useEffect(() => {
    if (reducedMotion) return;

    const categoryElements = sectionRef.current?.querySelectorAll('.skill-category');
    if (categoryElements) {
      gsap.fromTo(
        categoryElements,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );
    }

    const barElements = sectionRef.current?.querySelectorAll('.skill-bar');
    if (barElements) {
      gsap.fromTo(
        barElements,
        { width: 0 },
        {
          width: (_i, el) => `${el.dataset.level}%`,
          duration: 1.5,
          stagger: 0.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );
    }
  }, [reducedMotion]);

  return (
    <Section id="skills" ref={sectionRef} background="pattern">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary-400 text-sm font-medium tracking-wider uppercase">Skills</span>
          <h2 className="section-title mt-2 text-dark-50">Technical Expertise</h2>
          <p className="section-subtitle mx-auto">
            Proficient in modern technologies across the full development stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <Card
              key={category.name}
              variant="hover"
              className="skill-category"
              style={{ animationDelay: `${catIndex * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${category.color}20` }}
                >
                  <div
                    className="w-6 h-6 rounded-lg"
                    style={{ backgroundColor: category.color }}
                  />
                </div>
                <h3 className="text-xl font-bold text-dark-50">{category.name}</h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="flex justify-between mb-2">
                      <span className="text-dark-300 font-medium">{skill.name}</span>
                      <span className="text-dark-500 font-mono text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-dark-800 rounded-full overflow-hidden">
                      <div
                        className="skill-bar h-full rounded-full transition-all duration-1000"
                        style={{
                          width: '0%',
                          backgroundColor: category.color,
                          boxShadow: `0 0 10px ${category.color}`,
                        }}
                        data-level={skill.level}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-bold text-dark-50 text-center mb-8">Currently Exploring</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Rust', 'WebAssembly', 'React Server Components', 'Edge Computing',
              'Temporal.io', 'tRPC', 'Bun', 'Astro', 'Svelte', 'HTMX',
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-dark-800 text-dark-300 border border-dark-600 rounded-lg text-sm font-medium hover:border-primary-500 hover:text-primary-400 transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
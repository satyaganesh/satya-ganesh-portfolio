'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Server, Shield, Cloud } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { useGSAP, useReducedMotion } from '@/hooks/useGSAP';
import { siteConfig, skillCategories } from '@/data';

gsap.registerPlugin(ScrollTrigger);

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'Performance Testing Tools': Shield,
  'Observability & Monitoring': Code,
  'Infrastructure & Cloud': Cloud,
  'Scripting & Automation': Server,
  'AI/ML Performance': Server,
};

export function About() {
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  useGSAP(() => {});

  useEffect(() => {
    if (reducedMotion) return;

    const elements = sectionRef.current?.querySelectorAll('.animate-item');
    if (elements) {
      gsap.fromTo(
        elements,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
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
    <Section id="about" ref={sectionRef} background="gradient">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary-400 text-sm font-medium tracking-wider uppercase">About Me</span>
          <h2 className="section-title mt-2 text-dark-50">Performance Engineering Specialist</h2>
          <p className="section-subtitle mx-auto">
            {siteConfig.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative animate-item">
            <div className="aspect-square max-w-xs mx-auto md:max-w-none perspective-1000">
              <div className="profile-3d relative w-full h-full rounded-2xl border border-dark-700 shadow-2xl shadow-primary-500/10 overflow-hidden transition-transform duration-300 ease-out">
                <img
                  src="images/profile.jpg"
                  alt={`${siteConfig.name} - AI Performance Test Engineer`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="animate-item">
              <h3 className="text-2xl font-bold text-dark-50 mb-4">Who I Am</h3>
              <p className="text-dark-300 leading-relaxed">
                AI Performance Test Engineer with 5+ years of experience in performance engineering, 
                load testing, and cloud migration validation. Currently at Simpplr, leading AI/ML 
                performance initiatives and building observability stacks for LLM-powered applications.
              </p>
            </div>
            <div className="animate-item">
              <h3 className="text-2xl font-bold text-dark-50 mb-4">What I Do</h3>
              <p className="text-dark-300 leading-relaxed">
                Specialize in end-to-end performance testing lifecycle: from NFR analysis and workload 
                modeling to bottleneck identification and optimization. Expert in migrating workloads 
                from on-premises to cloud (AWS), with hands-on experience in enterprise domains 
                including Airlines, Automotive, and Content Management.
              </p>
            </div>
            <div className="animate-item">
              <h3 className="text-2xl font-bold text-dark-50 mb-4">My Approach</h3>
              <ul className="space-y-3 text-dark-300">
                {[
                  'Data-driven performance engineering with measurable outcomes',
                  'Automation-first mindset: reusable frameworks over one-off scripts',
                  'Cross-functional collaboration with dev, infra, and DB teams',
                  'Continuous observability: monitoring beyond test execution',
                  'AI/ML performance: emerging frontier for load testing',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((category, i) => {
            const Icon = categoryIcons[category.name as keyof typeof categoryIcons] || Shield;
            return (
              <Card key={category.name} variant="hover" className="animate-item" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary-500/10 text-primary-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-dark-50">{category.name}</h4>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill.name} className="text-sm text-dark-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500/50" />
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
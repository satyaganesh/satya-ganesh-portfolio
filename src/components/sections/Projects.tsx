'use client';

import { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, ExternalLink, Tag, Star, Eye } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useGSAP, useReducedMotion } from '@/hooks/useGSAP';
import { projects } from '@/data';

gsap.registerPlugin(ScrollTrigger);

export function Projects() {
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  useGSAP(() => {});

  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  useEffect(() => {
    if (reducedMotion) return;

    const elements = sectionRef.current?.querySelectorAll('.project-card');
    if (elements) {
      gsap.fromTo(
        elements,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );
    }
  }, [reducedMotion, activeCategory]);

  return (
    <Section id="projects" ref={sectionRef} background="gradient">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary-400 text-sm font-medium tracking-wider uppercase">Projects</span>
          <h2 className="section-title mt-2 text-dark-50">Selected Work</h2>
          <p className="section-subtitle mx-auto">
            A collection of projects showcasing modern web development practices and innovative solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12" role="tablist">
          {categories.map((category) => (
            <button
              key={category}
              role="tab"
              aria-selected={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-primary-500 text-dark-950 shadow-lg shadow-primary-500/25'
                  : 'bg-dark-800 text-dark-300 hover:bg-dark-700 hover:text-dark-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-dark-400">No projects found in this category.</p>
          </div>
        )}
      </div>
    </Section>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <Card variant="hover" className="project-card overflow-hidden" style={{ animationDelay: `${index * 0.08}s` }}>
      <div className="relative aspect-video overflow-hidden rounded-t-xl mb-4">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        {project.featured && (
          <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 bg-primary-500 text-dark-950 rounded-full text-xs font-medium">
            <Star className="w-3 h-3" />
            Featured
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-3 left-3 right-3 opacity-0 hover:opacity-100 transition-all duration-300 translate-y-2 hover:translate-y-0 flex justify-between">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-dark-900/80 backdrop-blur-sm border border-dark-600 rounded-lg text-dark-300 hover:text-primary-400 hover:border-primary-500 transition-all"
            aria-label="View source code"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-dark-900/80 backdrop-blur-sm border border-dark-600 rounded-lg text-dark-300 hover:text-primary-400 hover:border-primary-500 transition-all"
            aria-label="View live demo"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <Tag className="w-4 h-4 text-primary-400" />
        <span className="text-xs font-medium text-primary-400 uppercase tracking-wider">{project.category}</span>
      </div>

      <h3 className="text-xl font-bold text-dark-50 mb-2">{project.title}</h3>
      <p className="text-dark-400 text-sm leading-relaxed mb-4 line-clamp-3">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.slice(0, 4).map((tech) => (
          <span key={tech} className="px-2 py-1 text-xs bg-dark-800 text-dark-400 border border-dark-600 rounded">
            {tech}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span className="px-2 py-1 text-xs bg-dark-800 text-dark-500 border border-dark-600 rounded">
            +{project.technologies.length - 4} more
          </span>
        )}
      </div>

      <div className="flex items-center gap-3 pt-3 border-t border-dark-700">
        <Button variant="ghost" size="sm" className="flex-1 gap-1">
          <Eye className="w-4 h-4" />
          View Details
        </Button>
      </div>
    </Card>
  );
}
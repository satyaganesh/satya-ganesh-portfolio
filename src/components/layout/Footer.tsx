import { Github, Linkedin, ExternalLink, MessageSquare } from 'lucide-react';
import { socialLinks } from '@/data';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    GitHub: Github,
    LinkedIn: Linkedin,
    WhatsApp: MessageSquare,
  };

  return (
    <footer className="relative z-10 border-t border-dark-800 bg-dark-950/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div>
            <h3 className="text-xl font-bold text-dark-50 mb-4">{socialLinks[0]?.name || 'Portfolio'}</h3>
            <p className="text-dark-400 text-sm leading-relaxed max-w-xs">
              AI Performance Test Engineer specializing in load testing, cloud migration validation, and observability. Building reliable systems at scale.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-dark-50 mb-4">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.name] || ExternalLink;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow on ${social.name}`}
                    className="flex items-center gap-2 px-3 py-2 bg-dark-900/50 border border-dark-700 rounded-lg text-sm text-dark-300 hover:border-primary-500 hover:text-primary-400 transition-all"
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{social.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-50" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="text-right md:text-left">
            <h4 className="font-semibold text-dark-50 mb-4">Legal</h4>
            <div className="space-y-2 text-sm text-dark-400">
              <p>&copy; {currentYear} {socialLinks[0]?.name || 'Portfolio'}. All rights reserved.</p>
              <p className="hidden sm:block">Built with React, Three.js & GSAP</p>
              <p className="hidden md:block">Open source & MIT licensed</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-dark-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-dark-500 text-sm">
            Made with {' '}
            <span className="text-red-500">♥</span>
            {' '} and modern web technologies
          </p>
          <div className="flex items-center gap-4 text-xs text-dark-500">
            <span>v1.0.0</span>
            <span className="hidden sm:inline">|</span>
            <span>Open Source</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
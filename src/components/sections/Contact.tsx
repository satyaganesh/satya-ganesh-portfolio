'use client';

import { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle, AlertCircle, Github, Linkedin, MessageSquare, ExternalLink } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useGSAP, useReducedMotion } from '@/hooks/useGSAP';
import { contactInfo, socialLinks } from '@/data';

gsap.registerPlugin(ScrollTrigger);

const contactIcons = { Mail, MapPin, Phone };

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  WhatsApp: MessageSquare,
};

export function Contact() {
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  useGSAP(() => {});

  useEffect(() => {
    if (reducedMotion) return;

    const elements = sectionRef.current?.querySelectorAll('.contact-animate');
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setFormState('success');
    formRef.current?.reset();

    setTimeout(() => setFormState('idle'), 5000);
  };

  return (
    <Section id="contact" ref={sectionRef} background="gradient">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 contact-animate">
          <span className="text-primary-400 text-sm font-medium tracking-wider uppercase">Contact</span>
          <h2 className="section-title mt-2 text-dark-50">Let's Work Together</h2>
          <p className="section-subtitle mx-auto">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-8 contact-animate">
            <Card variant="glass" padding="lg">
              <h3 className="text-lg font-semibold text-dark-50 mb-6">Get In Touch</h3>
<div className="space-y-6">
                    {contactInfo.map((item) => {
                      const Icon = contactIcons[item.label as keyof typeof contactIcons];
                      return (
                        <a
                          key={item.label}
                          href={item.href || '#'}
                          className="flex items-center gap-4 p-4 bg-dark-800/50 border border-dark-700 rounded-xl hover:border-primary-500/50 transition-all group"
                          target={item.href ? '_blank' : undefined}
                          rel={item.href ? 'noopener noreferrer' : undefined}
                        >
                          <div className="p-3 rounded-lg bg-primary-500/10 text-primary-400 group-hover:bg-primary-500/20 transition-colors">
                            {Icon && <Icon className="w-5 h-5" />}
                          </div>
                          <div>
                            <p className="text-dark-500 text-sm">{item.label}</p>
                            <p className="text-dark-300 font-medium">{item.value}</p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </Card>

                <Card variant="glass" padding="lg">
                  <h3 className="text-lg font-semibold text-dark-50 mb-6">Follow Me</h3>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((social) => {
                      const Icon = socialIcons[social.name] || ExternalLink;
                      return (
                        <a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-dark-800/50 border border-dark-700 rounded-lg text-sm text-dark-300 hover:border-primary-500 hover:text-primary-400 transition-all"
                          aria-label={`Follow on ${social.name}`}
                        >
                          <Icon className="w-5 h-5" />
                          {social.name}
                        </a>
                      );
                    })}
                  </div>
                </Card>
          </div>

          <div className="lg:col-span-2 contact-animate">
            <Card variant="hover" padding="lg">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-dark-50 placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-dark-50 placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-dark-300 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-dark-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all appearance-none"
                  >
                    <option value="">Select a topic</option>
                    <option value="project">Project Inquiry</option>
                    <option value="freelance">Freelance Work</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-dark-50 placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-y min-h-[150px]"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full sm:w-auto"
                  loading={formState === 'submitting'}
                  disabled={formState === 'submitting'}
                >
                  {formState === 'submitting' && <Loader2 className="w-5 h-5" />}
                  {formState === 'success' && <CheckCircle className="w-5 h-5" />}
                  {formState === 'error' && <AlertCircle className="w-5 h-5" />}
                  {formState === 'idle' && 'Send Message'}
                  {formState === 'submitting' && 'Sending...'}
                  {formState === 'success' && 'Message Sent!'}
                  {formState === 'error' && 'Failed to Send'}
                  <Send className="w-5 h-5" />
                </Button>

                {formState === 'success' && (
                  <p className="text-green-500 text-sm text-center sm:text-left">
                    Thanks for reaching out! I'll get back to you soon.
                  </p>
                )}
                {formState === 'error' && (
                  <p className="text-red-500 text-sm text-center sm:text-left">
                    Something went wrong. Please try again or email directly.
                  </p>
                )}

                <p className="text-dark-500 text-xs text-center sm:text-left">
                  By submitting this form, you agree to our{' '}
                  <a href="#" className="text-primary-400 hover:underline">Privacy Policy</a>
                </p>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
}
import { siteConfig } from '@/data';

const patternUrl = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230ea5e9' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-dark-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-500/10 via-transparent to-transparent" />
      <div className={`absolute inset-0 bg-[url("${patternUrl}")]`} />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto py-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-900/80 border border-dark-700 backdrop-blur-sm mb-8 animate-fade-in">
          <span className="text-xs font-medium text-primary-400 tracking-wider uppercase">{siteConfig.title}</span>
          <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
        </div>
        <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight mb-6 animate-slide-up">
          <span className="text-dark-50">Hi, I'm </span>
          <br />
          <span className="text-gradient">{siteConfig.name}</span>
        </h1>
        <p className="text-lg lg:text-xl text-dark-400 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {siteConfig.description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <a
            href="#projects"
            className="btn-primary px-8 py-4 text-lg"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="btn-secondary px-8 py-4 text-lg"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
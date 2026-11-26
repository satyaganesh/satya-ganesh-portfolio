import LenisProvider from 'lenis/react';
import { ThemeProvider } from '@/hooks/useTheme';
import { ScrollProvider } from '@/hooks/useScroll';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { Contact } from '@/components/sections/Contact';

const SectionWrapper = ({ children }: { children: React.ReactNode }) => (
  <section id="main-content" className="relative z-10">
    {children}
  </section>
);

function App() {
  return (
    <ThemeProvider>
      <ScrollProvider>
        <LenisProvider options={{ lerp: 0.1, smoothWheel: true }}>
          <div className="relative min-h-screen bg-dark-950 overflow-x-hidden">
            <Header />
            <main className="relative">
              <Hero />
              <SectionWrapper>
                <About />
                <Experience />
                <Projects />
                <Skills />
                <Contact />
              </SectionWrapper>
            </main>
            <Footer />
          </div>
        </LenisProvider>
      </ScrollProvider>
    </ThemeProvider>
  );
}

export default App;
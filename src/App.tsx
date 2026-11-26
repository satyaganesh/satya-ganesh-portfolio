import LenisProvider from 'lenis/react';
import { ThemeProvider } from '@/hooks/useTheme';
import { ScrollProvider } from '@/hooks/useScroll';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Pipeline } from '@/components/sections/Pipeline';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { Framework } from '@/components/sections/Framework';
import { Journey } from '@/components/sections/Journey';
import { Resume } from '@/components/sections/Resume';
import { Contact } from '@/components/sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <ScrollProvider>
        <LenisProvider options={{ lerp: 0.08, smoothWheel: true }}>
          <div className="relative min-h-screen bg-ink overflow-x-hidden grain-overlay">
            <Header />
            <main className="relative">
              <Hero />
              <About />
              <Pipeline />
              <Projects />
              <Skills />
              <Framework />
              <Journey />
              <Resume />
              <Contact />
            </main>
            <Footer />
          </div>
        </LenisProvider>
      </ScrollProvider>
    </ThemeProvider>
  );
}

export default App;
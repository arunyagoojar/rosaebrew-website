import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MascotStatement } from './components/MascotStatement';
import { CreativePillars } from './components/CreativePillars';
import { OurWork } from './components/OurWork';
import { PricingSection } from './components/PricingSection';
import { WorksProcess } from './components/WorksProcess';
import { ContactFooter } from './components/ContactFooter';
import { ProjectPage } from './components/ProjectPage';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useTheme } from './hooks/useTheme';

export function App() {
  const [view, setView] = useState<'home' | 'project'>('home');
  const { theme, toggleTheme } = useTheme();
  useScrollReveal(view);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#start-project') {
        setView('project');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (view === 'project' && window.location.hash !== '#start-project') {
        setView('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    if (window.location.hash === '#start-project') {
      setView('project');
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [view]);

  const handleOpenProjectPage = () => {
    window.location.hash = 'start-project';
    setView('project');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackHome = () => {
    window.location.hash = '';
    setView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (view === 'project') {
    return (
      <ProjectPage
        onBack={handleBackHome}
      />
    );
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-canvas)', color: 'var(--text-primary)' }}>
      
      {/* 1. Header with Rounded Mouse Pointer Logo & Animated Mobile Menu */}
      <Header
        onOpenProjectModal={handleOpenProjectPage}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main style={{ flex: 1 }}>
        {/* 2. Editorial Hero (Headline + Swipe Carousel + Infinite Marquee + Roaming Butterflies) */}
        <Hero onOpenProjectModal={handleOpenProjectPage} />

        {/* 3. Studio Philosophy / About Narrative */}
        <MascotStatement onOpenProjectModal={handleOpenProjectPage} />

        {/* 4. Capabilities (Balanced 2x2 grid with Notion doodles) */}
        <CreativePillars onOpenProjectModal={handleOpenProjectPage} />

        {/* 5. Selected Work (Akuri, Seri Gourmet, The Bake Studio) */}
        <OurWork onOpenProjectModal={handleOpenProjectPage} />

        {/* 6. Pricing Cards (Starter, Featured Growth Pink Gradient, Custom Tools) */}
        <PricingSection onOpenProjectModal={handleOpenProjectPage} />

        {/* 7. Core Studio Values (01 Transparency, 02 Speed & Craft, 03 Full Ownership) */}
        <WorksProcess />
      </main>

      {/* 8. Pre-Footer Banner & Multi-Column Navigation */}
      <ContactFooter onOpenProjectModal={handleOpenProjectPage} />
    </div>
  );
}

export default App;

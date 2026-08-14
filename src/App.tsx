import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MascotStatement } from './components/MascotStatement';
import { CreativePillars } from './components/CreativePillars';
import { WorksProcess } from './components/WorksProcess';
import { OurWork } from './components/OurWork';
import { PricingSection } from './components/PricingSection';
import { ContactFooter } from './components/ContactFooter';
import { ProjectInquiryModal } from './components/ProjectInquiryModal';
import { useScrollReveal } from './hooks/useScrollReveal';

export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  useScrollReveal();

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-main)' }}>
      {/* Viewport Scroll Progress Line */}
      <div id="scroll-progress-line" className="scroll-progress-line" style={{ width: '0%' }}></div>

      {/* 1. Header with Scroll Reveal */}
      <Header onOpenProjectModal={handleOpenModal} />

      <main style={{ flex: 1 }}>
        {/* 2. Hero Section (Centered Title + Depth Mouse Pointers + Showcase Frame) */}
        <Hero onOpenProjectModal={handleOpenModal} />

        {/* 3. Mascot & Statement (Pencil Mascot + Stacked Mini Cards) */}
        <MascotStatement onOpenProjectModal={handleOpenModal} />

        {/* 4. Creative Pillars (3 Tilted Pastel Cards: Branding, Web & Apps, Marketing) */}
        <CreativePillars onOpenProjectModal={handleOpenModal} />

        {/* 5. Works Process (01-02-03 Radar Cards + Smooth Rocket Bar) */}
        <WorksProcess />

        {/* 6. Our Work (Akuri, Seri, The Bake Studio) */}
        <OurWork onOpenProjectModal={handleOpenModal} />

        {/* 7. Transparent Pricing (Projects start from ₹5,000) */}
        <PricingSection onOpenProjectModal={handleOpenModal} />
      </main>

      {/* 8. Dark Contact Footer with Direct Email rosaebrew@gmail.com */}
      <ContactFooter onOpenProjectModal={handleOpenModal} />

      {/* Project Inquiry Modal */}
      <ProjectInquiryModal isOpen={modalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;

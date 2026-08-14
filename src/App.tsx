import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MascotStatement } from './components/MascotStatement';
import { CreativePillars } from './components/CreativePillars';
import { WorksProcess } from './components/WorksProcess';
import { PricingSection } from './components/PricingSection';
import { ContactFooter } from './components/ContactFooter';
import { ProjectInquiryModal } from './components/ProjectInquiryModal';

export function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-main)' }}>
      {/* 1. Header with Start Project Trigger */}
      <Header onOpenProjectModal={handleOpenModal} />

      <main style={{ flex: 1 }}>
        {/* 2. Hero Section */}
        <Hero onOpenProjectModal={handleOpenModal} />

        {/* 3. Mascot & Statement (Pencil Mascot + Stacked Mini Cards) */}
        <MascotStatement onOpenProjectModal={handleOpenModal} />

        {/* 4. Creative Pillars (3 Tilted Pastel Cards with Exact Icons) */}
        <CreativePillars onOpenProjectModal={handleOpenModal} />

        {/* 5. Works Process (01-02-03 Radar Cards + Rocket Bar) */}
        <WorksProcess />

        {/* 6. Transparent Pricing (Projects start from ₹5,000) */}
        <PricingSection onOpenProjectModal={handleOpenModal} />
      </main>

      {/* 7. Dark Contact Footer with rosaebrew@gmail.com */}
      <ContactFooter onOpenProjectModal={handleOpenModal} />

      {/* Project Inquiry Modal */}
      <ProjectInquiryModal isOpen={modalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;

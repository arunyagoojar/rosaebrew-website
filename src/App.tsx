import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MascotStatement } from './components/MascotStatement';
import { CreativePillars } from './components/CreativePillars';
import { WorksProcess } from './components/WorksProcess';
import { PricingSection } from './components/PricingSection';
import { ContactFooter } from './components/ContactFooter';

export function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-main)' }}>
      {/* 1. Header (Pill Buttons) */}
      <Header />

      <main style={{ flex: 1 }}>
        {/* 2. Hero Section (Display Typography + Multiplayer Cursors + Showcase Frame) */}
        <Hero />

        {/* 3. Mascot & Statement (Pencil Mascot + Highlighted Wording) */}
        <MascotStatement />

        {/* 4. Creative Pillars (3 Tilted Pastel Cards: Blue, Green, Peach) */}
        <CreativePillars />

        {/* 5. Works Process (01-02-03 Radar Technical Cards + Rocket Bar) */}
        <WorksProcess />

        {/* 6. Pricing & Scope Transparency (Projects start from ₹5,000) */}
        <PricingSection />
      </main>

      {/* 7. Dark Contact Footer */}
      <ContactFooter />
    </div>
  );
}

export default App;

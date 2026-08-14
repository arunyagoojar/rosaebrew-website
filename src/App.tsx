import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BakeryProblemStatement } from './components/BakeryProblemStatement';
import { ThreeCapabilities } from './components/ThreeCapabilities';
import { WorksProcess } from './components/WorksProcess';
import { CaseStudies } from './components/CaseStudies';
import { ImpactStats } from './components/ImpactStats';
import { InteractiveDemoWidget } from './components/InteractiveDemoWidget';
import { BakeryOwnerFAQ } from './components/BakeryOwnerFAQ';
import { FooterCTA } from './components/FooterCTA';

export function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-main)' }}>
      {/* 1. Header Navigation */}
      <Header />

      <main style={{ flex: 1 }}>
        {/* 2. Hero Section with Bold Typography & Multiplayer Cursors */}
        <Hero />

        {/* 3. The Bakery Problem Statement (Daily DM Friction vs Digital Home) */}
        <BakeryProblemStatement />

        {/* 4. Three Core Capabilities (Tilted Pastel Cards) */}
        <ThreeCapabilities />

        {/* 5. Works Process (01, 02, 03 Radar Technical Cards) */}
        <WorksProcess />

        {/* 6. Featured Bakery Case Studies (Dark Black Section) */}
        <CaseStudies />

        {/* 7. Bakery Impact Stats Counter */}
        <ImpactStats />

        {/* 8. Interactive Custom Order Sandbox Demo */}
        <InteractiveDemoWidget />

        {/* 9. Bakery Owner FAQ */}
        <BakeryOwnerFAQ />
      </main>

      {/* 10. High Impact Call to Action & Footer */}
      <FooterCTA />
    </div>
  );
}

export default App;

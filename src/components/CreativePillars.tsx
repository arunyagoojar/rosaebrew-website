import React from 'react';
import {
  NotionCreatorDesk,
  NotionContactPhone,
  NotionMenuBaker,
  NotionOwnershipKey,
} from './NotionIllustrations';

interface CreativePillarsProps {
  onOpenProjectModal: () => void;
}

export const CreativePillars: React.FC<CreativePillarsProps> = ({ onOpenProjectModal }) => {
  const pillars = [
    {
      num: '01',
      tag: 'DESIGN & TYPOGRAPHY',
      tagColor: '#86EFAC',
      title: 'Custom Web Design',
      desc: 'No generic templates or bulky page builders. Every page is handcrafted with distinctive typography and responsive layouts tailored to your brand identity.',
      illustration: <NotionCreatorDesk size="130px" color="#FAF7F2" />,
    },
    {
      num: '02',
      tag: 'CLIENT ROUTING',
      tagColor: '#BAE6FD',
      title: 'Direct Inquiries',
      desc: 'Seamless contact links and inquiry forms that route customer inquiries straight to your primary inbox with zero third-party software subscriptions.',
      illustration: <NotionContactPhone size="130px" color="#FAF7F2" />,
    },
    {
      num: '03',
      tag: 'SHOWCASE & MENU',
      tagColor: '#FDE68A',
      title: 'Digital Menus & Catalogs',
      desc: 'Present your signature culinary creations, product lookbooks, dietary badges, and prices with crisp editorial styling and effortless mobile browsing.',
      illustration: <NotionMenuBaker size="130px" color="#FAF7F2" />,
    },
    {
      num: '04',
      tag: 'ZERO LOCK-IN',
      tagColor: '#FCD34D',
      title: '100% Asset Ownership',
      desc: 'You receive full administrative ownership of your domain, complete source code, and all graphic assets with zero monthly locked-in agency fees.',
      illustration: <NotionOwnershipKey size="130px" color="#FAF7F2" />,
    },
  ];

  return (
    <section id="capabilities" style={{ padding: 'clamp(4.5rem, 8vw, 7rem) 0', backgroundColor: 'var(--bg-dark-section)', color: '#FAF7F2' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="scroll-reveal" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto clamp(3rem, 6vw, 4.5rem) auto' }}>
          <h2
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(2.2rem, 4.8vw, 3.4rem)',
              fontWeight: 700,
              color: '#FAF7F2',
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
            }}
          >
            Digital craft designed to <br />
            <span className="italic-serif" style={{ fontWeight: 400, color: '#FBCFE8' }}>
              elevate your brand
            </span>
          </h2>
          <p style={{ color: 'rgba(250, 247, 242, 0.75)', fontSize: '1.05rem', marginTop: '1rem', lineHeight: 1.6 }}>
            Custom web design and digital presentation engineered specifically for independent creators.
          </p>
        </div>

        {/* =================================================================
            BALANCED 2x2 GRID (2 cards per row on desktop & tablet, 1 on mobile)
            ================================================================= */}
        <div
          className="scroll-reveal-scale stagger-1 capabilities-2x2-grid"
          style={{
            maxWidth: '1080px',
            margin: '0 auto clamp(2.5rem, 5vw, 3.5rem) auto',
          }}
        >
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="capability-card"
              style={{
                backgroundColor: '#201E1A',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '26px',
                padding: 'clamp(1.75rem, 3vw, 2.25rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '260px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
                transition: 'transform 0.25s ease, border-color 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              }}
            >
              {/* Top Row: Tag + Doodle */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.25rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.35rem' }}>
                    <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: pillar.tagColor }} />
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'rgba(250, 247, 242, 0.65)', letterSpacing: '0.06em' }}>
                      {pillar.tag}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#FBCFE8' }}>
                    {pillar.num}
                  </div>
                </div>

                <div style={{ width: '90px', height: '75px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {pillar.illustration}
                </div>
              </div>

              {/* Bottom Content */}
              <div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#FAF7F2', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
                  {pillar.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'rgba(250, 247, 242, 0.72)', lineHeight: 1.6 }}>
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Action Button */}
        <div className="scroll-reveal stagger-2" style={{ textAlign: 'center' }}>
          <button
            onClick={onOpenProjectModal}
            className="sivoro-btn-light"
          >
            <span>Start Your Project With Us</span>
            <span>→</span>
          </button>
        </div>
      </div>

      <style>{`
        .capabilities-2x2-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.75rem;
        }

        @media (max-width: 768px) {
          .capabilities-2x2-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
};

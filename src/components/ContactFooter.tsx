import React from 'react';
import { PointerIcon } from './PointerIcon';
import { NotionLaunchCelebration } from './NotionIllustrations';

interface ContactFooterProps {
  onOpenProjectModal: () => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ onOpenProjectModal }) => {
  return (
    <footer style={{ backgroundColor: 'var(--bg-canvas)', paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div className="container">
        
        {/* Pre-Footer Hero Banner */}
        <div
          className="scroll-reveal"
          style={{
            backgroundColor: 'var(--bg-dark-section)',
            borderRadius: '32px',
            padding: '4.5rem 3.5rem',
            color: '#FAF7F2',
            marginBottom: '5.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2.5rem',
            boxShadow: 'var(--shadow-float)',
          }}
        >
          <div style={{ maxWidth: '540px' }}>
            <h2
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(2rem, 4.2vw, 3.2rem)',
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                marginBottom: '1rem',
                color: '#FAF7F2',
              }}
            >
              Distinctive websites <br />
              start <span className="italic-serif" style={{ fontWeight: 400, color: '#FBCFE8' }}>here</span>
            </h2>

            <p style={{ color: 'rgba(250, 247, 242, 0.75)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              Let's create a custom website that reflects the true quality of your craft.
            </p>

            <button
              onClick={onOpenProjectModal}
              className="sivoro-btn-light"
            >
              <span>Start a Project</span>
              <span>→</span>
            </button>
          </div>

          {/* Right Visual Notion Launch Celebration Illustration (Zero extra box/background) */}
          <div
            style={{
              width: '240px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <NotionLaunchCelebration size="100%" color="#FAF7F2" style={{ color: '#FAF7F2' }} />
          </div>
        </div>

        {/* Bottom Navigation Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '2.5rem',
            paddingTop: '2.5rem',
            borderTop: '1px solid var(--border-subtle)',
            marginBottom: '3.5rem',
            fontSize: '0.9rem',
          }}
        >
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem' }}>
              <div style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <PointerIcon size={22} strokeWidth={7} />
              </div>
              <span style={{ fontWeight: 800, fontSize: '1.15rem', color: 'var(--text-primary)' }}>RoséBrew</span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem', lineHeight: 1.6 }}>
              Custom websites and digital showcases for independent brands.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.82rem', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
              Navigation
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', color: 'var(--text-secondary)' }}>
              <li><a href="#about" style={{ color: 'inherit', textDecoration: 'none' }}>About Studio</a></li>
              <li><a href="#capabilities" style={{ color: 'inherit', textDecoration: 'none' }}>Capabilities</a></li>
              <li><a href="#work" style={{ color: 'inherit', textDecoration: 'none' }}>Selected Work</a></li>
              <li><a href="#pricing" style={{ color: 'inherit', textDecoration: 'none' }}>Pricing</a></li>
              <li><a href="#values" style={{ color: 'inherit', textDecoration: 'none' }}>Values</a></li>
            </ul>
          </div>

          {/* Selected Work */}
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.82rem', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
              Selected Work
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', color: 'var(--text-secondary)' }}>
              <li><a href="https://akuri.rosaebrew.eu.cc" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Akuri ↗</a></li>
              <li><a href="https://seri.rosaebrew.eu.cc" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Serí Pâtisserie ↗</a></li>
              <li><a href="https://tbs.rosaebrew.eu.cc" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>The Bake Studio ↗</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.82rem', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
              Direct Contact
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-secondary)' }}>
              <a href="mailto:rosaebrew@gmail.com" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 700 }}>
                rosaebrew@gmail.com
              </a>
              <span style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                Projects from ₹5,000
              </span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.82rem',
            color: 'var(--text-light)',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--border-subtle)',
          }}
        >
          <div>
            © {new Date().getFullYear()} RoséBrew. All rights reserved.
          </div>
          <div>
            Handcrafted with care.
          </div>
        </div>
      </div>
    </footer>
  );
};

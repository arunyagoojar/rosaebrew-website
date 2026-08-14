import React from 'react';
import { NotionStudioCollab } from './NotionIllustrations';

interface MascotStatementProps {
  onOpenProjectModal?: () => void;
}

export const MascotStatement: React.FC<MascotStatementProps> = ({ onOpenProjectModal }) => {
  return (
    <section id="about" style={{ padding: '6.5rem 0', backgroundColor: 'var(--bg-canvas)' }}>
      <div className="container">
        <div
          className="scroll-reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Narrative & Values */}
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                lineHeight: 1.18,
                marginBottom: '1.5rem',
                letterSpacing: '-0.03em',
              }}
            >
              The philosophy behind our <br />
              <span className="italic-serif" style={{ fontWeight: 400 }}>
                studio
              </span>
            </h2>

            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              We started RoséBrew to help independent culinary creators and design-led businesses build websites that actually reflect the true quality of their craft.
            </p>

            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              No generic templates or confusing page builders. Every line of code is written specifically for your brand, loading fast on mobile phones and presenting your work with clean editorial elegance.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={onOpenProjectModal}
                className="sivoro-btn-dark"
              >
                <span>Start a Project</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Right Column: 100% Transparent, Big Studio Collaboration Illustration (Zero background box) */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem',
            }}
          >
            <NotionStudioCollab size="92%" />
          </div>
        </div>
      </div>
    </section>
  );
};

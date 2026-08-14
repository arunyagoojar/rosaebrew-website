import React from 'react';

interface ContactFooterProps {
  onOpenProjectModal: () => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ onOpenProjectModal }) => {
  return (
    <footer style={{ backgroundColor: 'var(--bg-dark)', color: '#FFFFFF', paddingTop: '5.5rem', paddingBottom: '3.5rem' }}>
      <div className="container">
        {/* Contact Block */}
        <div
          style={{
            maxWidth: '780px',
            margin: '0 auto 5rem auto',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '-0.03em',
              marginBottom: '1rem',
            }}
          >
            Ready to build a proper website for your business?
          </h2>

          <p style={{ color: '#AAAAAA', fontSize: '1.1rem', lineHeight: 1.65, maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
            Tell us about what you do, what your website needs to accomplish, and we will get back to you with a clear timeline and quote.
          </p>

          {/* Contact Actions */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <button
              onClick={onOpenProjectModal}
              className="btn-pill-lime"
              style={{ border: 'none', cursor: 'pointer' }}
            >
              <span>Start a Project</span>
              <span>→</span>
            </button>

            <a
              href="mailto:rosaebrew@gmail.com"
              className="btn-pill-white"
              style={{ padding: '0.95rem 2rem' }}
            >
              <span>Email: rosaebrew@gmail.com</span>
              <span>✉️</span>
            </a>
          </div>

          <div style={{ fontSize: '0.88rem', color: '#888888' }}>
            ✦ Working with owner-led businesses & independent professionals locally and remotely.
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.84rem',
            color: '#777777',
          }}
        >
          <div>
            <span className="font-display" style={{ color: '#FFFFFF', fontSize: '1.1rem', letterSpacing: '-0.02em', marginRight: '0.75rem' }}>
              ROSAEBREW
            </span>
            <span>Websites for independent businesses & professionals.</span>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <a
              href="mailto:rosaebrew@gmail.com"
              style={{ color: '#C3F53C', textDecoration: 'none', fontWeight: 600 }}
            >
              rosaebrew@gmail.com
            </a>
            <span>•</span>
            <span>© {new Date().getFullYear()} Rosaebrew</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

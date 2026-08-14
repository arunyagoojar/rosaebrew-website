import React from 'react';

export const MascotStatement: React.FC = () => {
  return (
    <section style={{ padding: '6rem 0', backgroundColor: '#FFFFFF', borderTop: '1px solid rgba(0,0,0,0.06)', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
      <div className="container-narrow" style={{ textAlign: 'center' }}>
        {/* Stylized Pencil Walking Mascot Doodle */}
        <div style={{ marginBottom: '2rem' }}>
          <div
            style={{
              width: '80px',
              height: '80px',
              margin: '0 auto',
              backgroundColor: '#FDECD2',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.4rem',
              boxShadow: '0 6px 20px rgba(253, 236, 210, 0.9)',
            }}
          >
            ✏️
          </div>
        </div>

        {/* Big Bold Headline */}
        <h2
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(1.9rem, 3.8vw, 3rem)',
            fontWeight: 800,
            color: 'var(--text-dark)',
            lineHeight: 1.2,
            letterSpacing: '-0.03em',
            marginBottom: '1.75rem',
          }}
        >
          We help independent businesses and professionals create a distinctive online presence of their own.
        </h2>

        {/* Paragraph with Highlighted & Faded Words matching TURN.STUDIO */}
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)',
            color: '#777777',
            lineHeight: 1.5,
            marginBottom: '2.5rem',
          }}
        >
          We design <strong style={{ color: 'var(--text-dark)', fontWeight: 700 }}>websites</strong>,{' '}
          <strong style={{ color: 'var(--text-dark)', fontWeight: 700 }}>digital touchpoints</strong>, and{' '}
          <strong style={{ color: 'var(--text-dark)', fontWeight: 700 }}>enquiry flows</strong> that represent your work accurately and give clients an easy way to reach you.
        </p>

        {/* Action Button */}
        <div>
          <a
            href="#services"
            className="btn-pill-white"
            style={{ padding: '0.8rem 2rem', fontSize: '0.9rem' }}
          >
            <span>Explore Services</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

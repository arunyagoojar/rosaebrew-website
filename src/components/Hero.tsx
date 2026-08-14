import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section style={{ paddingTop: '1rem', paddingBottom: '5rem', position: 'relative' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        {/* Giant Ultra-Bold Display Header with Multiplayer Cursors */}
        <div style={{ position: 'relative', display: 'inline-block', width: '100%', margin: '0 auto 1.5rem auto' }}>
          <h1
            className="font-display"
            style={{
              fontSize: 'clamp(3.8rem, 13.5vw, 12rem)',
              lineHeight: 0.85,
              color: 'var(--text-dark)',
              letterSpacing: '-0.06em',
              userSelect: 'none',
            }}
          >
            ROSAEBREW
          </h1>

          {/* Cursor Tag 1: Liam (Orange) */}
          <div
            className="cursor-tag cursor-tag-orange"
            style={{
              top: '-12px',
              left: '19%',
            }}
          >
            <span style={{ fontSize: '0.65rem' }}>▲</span>
            <span>Liam</span>
          </div>

          {/* Cursor Tag 2: Ethan (Green) */}
          <div
            className="cursor-tag cursor-tag-green"
            style={{
              bottom: '8px',
              left: '10%',
            }}
          >
            <span style={{ fontSize: '0.65rem' }}>▲</span>
            <span>Ethan</span>
          </div>

          {/* Cursor Tag 3: Noah (Pink) */}
          <div
            className="cursor-tag cursor-tag-pink"
            style={{
              bottom: '12px',
              right: '12%',
            }}
          >
            <span style={{ fontSize: '0.65rem' }}>▲</span>
            <span>Noah</span>
          </div>

          {/* Blue Rotating Stamp Badge */}
          <div
            className="stamp-badge-cyan"
            style={{
              top: '-25px',
              right: '4%',
            }}
          >
            Building<br />for ambitious<br />brands
          </div>
        </div>

        {/* Hero Editorial Subtitle */}
        <div style={{ maxWidth: '820px', margin: '0 auto 3rem auto' }}>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.4rem, 2.8vw, 2.2rem)',
              color: 'var(--text-dark)',
              fontWeight: 500,
              letterSpacing: '-0.01em',
            }}
          >
            We Craft Distinctive Websites, Not Just Pages
          </p>
        </div>

        {/* Giant Showcase Frame */}
        <div
          style={{
            maxWidth: '1120px',
            margin: '0 auto',
            borderRadius: '28px',
            overflow: 'hidden',
            backgroundColor: '#1E1E1E',
            border: '2px solid rgba(0, 0, 0, 0.1)',
            boxShadow: 'var(--shadow-lg)',
            position: 'relative',
          }}
        >
          {/* Internal Showcase Layout with Rich Modern Composition */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              backgroundColor: '#0F172A',
              color: '#FFFFFF',
              textAlign: 'left',
              minHeight: '380px',
            }}
          >
            {/* Left Box */}
            <div style={{ padding: '3.5rem 3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem' }}>
                <span style={{ width: '20px', height: '20px', borderRadius: '4px', backgroundColor: '#38BDF8', display: 'inline-block' }}></span>
                <span style={{ fontWeight: 700, fontSize: '0.95rem', letterSpacing: '0.05em' }}>DIGITAL PRESENCE</span>
              </div>

              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1rem', letterSpacing: '-0.03em' }}>
                Better business starts <span style={{ color: '#38BDF8' }}>here.</span>
              </h2>

              <p style={{ color: '#94A3B8', fontSize: '1rem', lineHeight: 1.6, maxWidth: '420px', marginBottom: '2rem' }}>
                Thoughtful websites built to help independent businesses and professionals present their work clearly, build trust, and receive direct client enquiries.
              </p>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <a
                  href="https://wa.me/919257213228"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-lime"
                  style={{ fontSize: '0.86rem', padding: '0.75rem 1.6rem' }}
                >
                  <span>Start Your Project</span>
                </a>
              </div>
            </div>

            {/* Right Graphic Pattern */}
            <div
              style={{
                backgroundColor: '#1E293B',
                backgroundImage: 'radial-gradient(rgba(56, 189, 248, 0.15) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
                padding: '3rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  backgroundColor: '#0F172A',
                  borderRadius: '20px',
                  padding: '2rem',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                  maxWidth: '360px',
                  width: '100%',
                }}
              >
                <div style={{ fontSize: '0.8rem', color: '#38BDF8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
                  ✦ DIRECT ONLINE PRESENCE
                </div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.5rem' }}>
                  Built for owner-led businesses.
                </div>
                <p style={{ fontSize: '0.88rem', color: '#94A3B8', lineHeight: 1.6 }}>
                  Working with independent professionals and businesses locally and remotely to build online touchpoints that last.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Dark Textured Bar */}
          <div
            style={{
              backgroundColor: '#111111',
              padding: '0.85rem 2rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.82rem',
              color: '#888888',
            }}
          >
            <span>Rosaebrew • Independent Digital Studio</span>
            <span>Projects start from ₹5,000</span>
          </div>
        </div>
      </div>
    </section>
  );
};

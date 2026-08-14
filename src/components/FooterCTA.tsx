import React from 'react';

export const FooterCTA: React.FC = () => {
  return (
    <footer style={{ backgroundColor: 'var(--dark-950)', color: '#FFFFFF', paddingTop: '6rem', paddingBottom: '3rem' }}>
      <div className="container">
        {/* Main CTA Block */}
        <div
          style={{
            maxWidth: '920px',
            margin: '0 auto 5rem auto',
            textAlign: 'center',
            backgroundColor: '#181818',
            borderRadius: '32px',
            padding: '4.5rem 2rem',
            border: '1.5px solid rgba(255, 255, 255, 0.1)',
            boxShadow: 'var(--shadow-dark)',
          }}
        >
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.84rem', fontWeight: 700, letterSpacing: '0.14em', color: '#C3F53C', textTransform: 'uppercase' }}>
            ✦ START YOUR BAKERY UPGRADE
          </span>

          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)',
              lineHeight: 1.05,
              color: '#FFFFFF',
              marginTop: '1rem',
              marginBottom: '1.25rem',
            }}
          >
            Ready to stop losing orders in DMs?
          </h2>

          <p style={{ color: '#CCCCCC', fontSize: '1.15rem', maxWidth: '620px', margin: '0 auto 2.5rem auto', lineHeight: 1.6 }}>
            Give your bakery a single, beautiful digital home where customers can browse your signature bakes and send complete custom cake orders.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919257213228?text=Hi%20Rosaebrew,%20I%20am%20a%20bakery%20owner%20interested%20in%20a%20digital%20catalogue%20and%20order%20system."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill-lime"
            >
              <span>Book a 15-Min Intro on WhatsApp</span>
              <span>💬</span>
            </a>

            <a
              href="#work"
              className="btn-pill-white"
              style={{ padding: '0.95rem 2rem' }}
            >
              <span>Explore Bakery Showcases</span>
            </a>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '2.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            fontSize: '0.86rem',
            color: '#888888',
          }}
        >
          <div>
            <div className="font-display" style={{ fontSize: '1.35rem', color: '#FFFFFF', letterSpacing: '-0.03em' }}>
              ROSAEBREW
            </div>
            <div style={{ fontSize: '0.78rem', color: '#888888', marginTop: '2px' }}>
              Digital homes for independent bakeries.
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <a
              href="https://wa.me/919257213228"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#C3F53C', textDecoration: 'none', fontWeight: 600 }}
            >
              WhatsApp Helpline: +91 92572 13228
            </a>
          </div>

          <div>
            © {new Date().getFullYear()} Rosaebrew. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

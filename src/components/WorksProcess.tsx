import React from 'react';

export const WorksProcess: React.FC = () => {
  return (
    <section style={{ padding: '6rem 0', backgroundColor: '#FFFFFF', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
      <div className="container">
        {/* Headline */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
              color: 'var(--dark-950)',
              letterSpacing: '-0.04em',
            }}
          >
            Works Process
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '0.5rem' }}>
            An integrated, painless setup built for busy bakery owners who belong in the kitchen, not wrestling with tech.
          </p>
        </div>

        {/* 3 Process Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            maxWidth: '1100px',
            margin: '0 auto',
          }}
        >
          {/* Step 1 */}
          <div className="process-card">
            <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-light)', marginBottom: '0.75rem', letterSpacing: '0.1em' }}>
              01
            </div>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--dark-900)', marginBottom: '0.4rem' }}>
              Discover & Catalogue
            </h3>
            <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Menu Structure & Flavours
            </div>

            {/* Radar / Geometry Icon */}
            <div
              style={{
                width: '90px',
                height: '90px',
                margin: '0 auto 1.75rem auto',
                borderRadius: '50%',
                border: '1px solid #E5E7EB',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', border: '1px dashed #CBD5E1' }}></div>
              <div style={{ position: 'absolute', width: '100%', height: '1px', backgroundColor: '#E5E7EB' }}></div>
              <div style={{ position: 'absolute', height: '100%', width: '1px', backgroundColor: '#E5E7EB' }}></div>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginTop: 'auto' }}>
              We review your existing Instagram, Zomato/Swiggy menu, and pricing sheets. We structure your products into clear categories with dietary tags, weights, and flavours.
            </p>
          </div>

          {/* Step 2 */}
          <div className="process-card">
            <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-light)', marginBottom: '0.75rem', letterSpacing: '0.1em' }}>
              02
            </div>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--dark-900)', marginBottom: '0.4rem' }}>
              Design & Build
            </h3>
            <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Bespoke UI & Custom Cake Wizard
            </div>

            {/* Geometry Icon 2 */}
            <div
              style={{
                width: '90px',
                height: '90px',
                margin: '0 auto 1.75rem auto',
                borderRadius: '50%',
                border: '1px solid #E5E7EB',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div style={{ width: '70px', height: '70px', borderRadius: '50%', border: '1px solid #94A3B8' }}></div>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #64748B' }}></div>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginTop: 'auto' }}>
              We design a stunning, mobile-first digital experience with high-res cake showcases, custom cake inquiry forms, and instant WhatsApp ordering pipelines.
            </p>
          </div>

          {/* Step 3 */}
          <div className="process-card">
            <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-light)', marginBottom: '0.75rem', letterSpacing: '0.1em' }}>
              03
            </div>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--dark-900)', marginBottom: '0.4rem' }}>
              Launch & Connect
            </h3>
            <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Instagram Bio & WhatsApp Sync
            </div>

            {/* Geometry Icon 3 */}
            <div
              style={{
                width: '90px',
                height: '90px',
                margin: '0 auto 1.75rem auto',
                borderRadius: '50%',
                border: '1px solid #E5E7EB',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', border: '1px solid #10B981', backgroundColor: '#ECFDF5' }}></div>
              <span style={{ fontSize: '1.2rem', color: '#059669', position: 'relative', zIndex: 2 }}>✓</span>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginTop: 'auto' }}>
              We connect your custom domain, set up your Instagram link in bio, and integrate WhatsApp automated greetings so every new DM converts seamlessly into an order.
            </p>
          </div>
        </div>

        {/* Rocket Progress Bar */}
        <div className="rocket-bar-container">
          <div className="rocket-bar-fill"></div>
          <div className="rocket-icon">🚀</div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';

export const CreativePillars: React.FC = () => {
  return (
    <section id="services" style={{ padding: '7rem 0', backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        {/* Section Top Header with Inline Badges matching TURN.STUDIO */}
        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            A thoughtful, structured approach for independent businesses.
          </div>

          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2.4rem, 5.5vw, 4.6rem)',
              lineHeight: 1.1,
              color: 'var(--text-dark)',
              letterSpacing: '-0.04em',
            }}
          >
            We're a{' '}
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '54px',
                height: '32px',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: '#0EA5E9',
                color: '#FFFFFF',
                fontSize: '1rem',
                verticalAlign: 'middle',
                margin: '0 0.25rem',
              }}
            >
              💻
            </span>{' '}
            Creative{' '}
            <span
              style={{
                display: 'inline-block',
                fontSize: '1.8rem',
                verticalAlign: 'middle',
                transform: 'rotate(15deg)',
                margin: '0 0.25rem',
              }}
            >
              ✏️
            </span>
            <br />
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                backgroundColor: 'var(--text-dark)',
                color: '#FFFFFF',
                fontSize: '1.2rem',
                verticalAlign: 'middle',
                marginRight: '0.4rem',
              }}
            >
              ✦
            </span>
            Partner
          </h2>
        </div>

        {/* 3 Tilted Colored Cards matching TURN.STUDIO */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem',
            maxWidth: '1100px',
            margin: '0 auto 4rem auto',
            alignItems: 'stretch',
          }}
        >
          {/* Card 1: Pastel Blue (Tilted Left) */}
          <div className="tilted-card card-tilt-left" style={{ backgroundColor: 'var(--pastel-blue)' }}>
            <div style={{ fontSize: '2.4rem', marginBottom: '1.25rem' }}>✻</div>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.65rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Web Design & Build
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.92rem', color: 'var(--text-dark)', fontWeight: 500 }}>
              <li>Custom Layout & Typography</li>
              <li>Mobile-First Responsiveness</li>
              <li>Fast Page Load Speed</li>
              <li>Clear Navigation Structure</li>
              <li>Clean Semantic Code</li>
              <li>Search & Social Metadata</li>
            </ul>
          </div>

          {/* Card 2: Pastel Green (Tilted Center) */}
          <div className="tilted-card card-tilt-center" style={{ backgroundColor: 'var(--pastel-green)' }}>
            <div style={{ fontSize: '2.4rem', marginBottom: '1.25rem' }}>☕</div>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.65rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Digital Touchpoints
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.92rem', color: 'var(--text-dark)', fontWeight: 500 }}>
              <li>Custom Domain Connection</li>
              <li>Direct WhatsApp Integration</li>
              <li>Enquiry & Booking Flows</li>
              <li>Location & Contact Info</li>
              <li>Email Routing Setup</li>
              <li>Consistent Visual Touchpoints</li>
            </ul>
          </div>

          {/* Card 3: Pastel Peach (Tilted Right) */}
          <div className="tilted-card card-tilt-right" style={{ backgroundColor: 'var(--pastel-peach)' }}>
            <div style={{ fontSize: '2.4rem', marginBottom: '1.25rem' }}>🌀</div>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.65rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Content & Direction
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.92rem', color: 'var(--text-dark)', fontWeight: 500 }}>
              <li>Service & Product Information</li>
              <li>Pricing & Scope Transparency</li>
              <li>Visual Presentation</li>
              <li>Structured FAQ Hierarchy</li>
              <li>Clear Client Guidance</li>
              <li>Direct Project Handoff</li>
            </ul>
          </div>
        </div>

        {/* Bottom Button */}
        <div style={{ textAlign: 'center' }}>
          <a
            href="https://wa.me/919257213228"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill-white"
            style={{ padding: '0.85rem 2.2rem', fontSize: '0.92rem' }}
          >
            <span>Let's Connect Today</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

import React from 'react';

interface CreativePillarsProps {
  onOpenProjectModal: () => void;
}

export const CreativePillars: React.FC<CreativePillarsProps> = ({ onOpenProjectModal }) => {
  return (
    <section id="services" style={{ padding: '7rem 0', backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        {/* Section Top Header with Exact Inline Badges matching TURN.STUDIO */}
        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            An integrated team built to solve for tomorrow's challenge today.
          </div>

          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2.5rem, 5.8vw, 4.8rem)',
              lineHeight: 1.15,
              color: 'var(--text-dark)',
              letterSpacing: '-0.04em',
            }}
          >
            We're a{' '}
            {/* Inline Panoramic Sunset / Landscape Capsule Badge matching TURN.STUDIO */}
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '78px',
                height: '42px',
                borderRadius: '9999px',
                overflow: 'hidden',
                verticalAlign: 'middle',
                margin: '0 0.35rem',
                border: '2px solid #121212',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                position: 'relative',
              }}
            >
              <svg viewBox="0 0 100 54" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
                {/* Sky Gradient */}
                <defs>
                  <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="54" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#1E3A8A" />
                    <stop offset="45%" stopColor="#3B82F6" />
                    <stop offset="75%" stopColor="#F97316" />
                    <stop offset="100%" stopColor="#FBBF24" />
                  </linearGradient>
                </defs>
                <rect width="100" height="54" fill="url(#skyGrad)" />
                {/* Glowing Sun */}
                <circle cx="50" cy="34" r="10" fill="#FEF08A" opacity="0.9" />
                {/* Mountain Silhouettes */}
                <polygon points="-5,54 28,32 52,54" fill="#1E293B" opacity="0.85" />
                <polygon points="35,54 68,26 105,54" fill="#0F172A" />
                <polygon points="12,54 42,38 72,54" fill="#334155" opacity="0.75" />
              </svg>
            </span>{' '}
            Creative{' '}
            {/* Inline Vector Pencil Doodle */}
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px',
                verticalAlign: 'middle',
                transform: 'rotate(15deg)',
                margin: '0 0.35rem',
              }}
            >
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" fill="#F59E0B" stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <br />
            {/* Inline Silhouette Badge */}
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                backgroundColor: 'var(--text-dark)',
                color: '#FFFFFF',
                fontSize: '1.3rem',
                verticalAlign: 'middle',
                marginRight: '0.5rem',
              }}
            >
              ✦
            </span>
            Powerhouse
          </h2>
        </div>

        {/* 3 Tilted Colored Cards with Vector Line Icons */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem',
            maxWidth: '1120px',
            margin: '0 auto 4rem auto',
            alignItems: 'stretch',
          }}
        >
          {/* Card 1: Pastel Blue (Tilted Left) - Branding */}
          <div className="tilted-card card-tilt-left" style={{ backgroundColor: 'var(--pastel-blue)' }}>
            {/* Starburst/Sparkle Asterisk SVG Icon */}
            <div style={{ marginBottom: '1.5rem', width: '48px', height: '48px' }}>
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                <path d="M24 4V44M4 24H44M10 10L38 38M10 38L38 10" stroke="#121212" strokeWidth="3" strokeLinecap="round" />
                <circle cx="24" cy="24" r="4" fill="#121212" />
              </svg>
            </div>

            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Branding
            </h3>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem', fontSize: '0.94rem', color: 'var(--text-dark)', fontWeight: 500 }}>
              <li>Go-To-Market Strategy</li>
              <li>Brand Strategy</li>
              <li>Visual Identities</li>
              <li>Brand Guidelines</li>
              <li>Logo Creation</li>
              <li>Value Propositions</li>
            </ul>
          </div>

          {/* Card 2: Pastel Green (Tilted Center) - Web & Apps */}
          <div className="tilted-card card-tilt-center" style={{ backgroundColor: 'var(--pastel-green)' }}>
            {/* Steaming Coffee Cup Line SVG Icon */}
            <div style={{ marginBottom: '1.5rem', width: '48px', height: '48px' }}>
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                <path d="M18 10 Q 20 6 18 2" stroke="#121212" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M24 10 Q 26 6 24 2" stroke="#121212" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M30 10 Q 32 6 30 2" stroke="#121212" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M12 14 H36 V28 C36 34 30 38 24 38 C18 38 12 34 12 28 Z" fill="none" stroke="#121212" strokeWidth="3" strokeLinejoin="round" />
                <path d="M36 18 H40 C42.2 18 44 19.8 44 22 C44 24.2 42.2 26 40 26 H36" stroke="#121212" strokeWidth="3" strokeLinecap="round" />
                <line x1="8" y1="42" x2="40" y2="42" stroke="#121212" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>

            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Web & Apps
            </h3>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem', fontSize: '0.94rem', color: 'var(--text-dark)', fontWeight: 500 }}>
              <li>UI/UX Design</li>
              <li>CMS Implementation</li>
              <li>Web Design</li>
              <li>Development</li>
              <li>Webflow / Custom Code</li>
              <li>Mobile-First Speed</li>
            </ul>
          </div>

          {/* Card 3: Pastel Peach (Tilted Right) - Marketing */}
          <div className="tilted-card card-tilt-right" style={{ backgroundColor: 'var(--pastel-peach)' }}>
            {/* Swirl / Spiral Line SVG Icon */}
            <div style={{ marginBottom: '1.5rem', width: '48px', height: '48px' }}>
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                <path d="M24 8 C15 8 8 15 8 24 C8 33 15 40 24 40 C33 40 40 33 40 24 C40 17 35 12 28 12 C21 12 16 17 16 24 C16 29 20 32 24 32 C28 32 30 29 30 26" stroke="#121212" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>

            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Marketing
            </h3>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem', fontSize: '0.94rem', color: 'var(--text-dark)', fontWeight: 500 }}>
              <li>Content</li>
              <li>Social</li>
              <li>Paid Media</li>
              <li>Campaigns</li>
              <li>SEO & Metadata</li>
              <li>Marketing Ops / Analytics</li>
            </ul>
          </div>
        </div>

        {/* Bottom Button */}
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={onOpenProjectModal}
            className="btn-pill-white"
            style={{ padding: '0.85rem 2.4rem', fontSize: '0.92rem', border: '1.5px solid rgba(0,0,0,0.15)', cursor: 'pointer' }}
          >
            <span>Let's Connect Today</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

import React, { useEffect, useRef } from 'react';

export const WorksProcess: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const rocketRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let currentPercent = 15;
    let targetPercent = 15;

    const calculateTarget = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress through the section
      const totalDistance = rect.height + windowHeight;
      const progress = (windowHeight - rect.top) / totalDistance;
      
      // Map smoothly between 5% and 94%
      targetPercent = Math.max(6, Math.min(94, progress * 100));
    };

    const updateSmoothPosition = () => {
      // Smooth linear interpolation (lerp)
      currentPercent += (targetPercent - currentPercent) * 0.12;

      if (fillRef.current) {
        fillRef.current.style.width = `${currentPercent}%`;
      }
      if (rocketRef.current) {
        rocketRef.current.style.left = `${currentPercent}%`;
      }

      animationFrameId = requestAnimationFrame(updateSmoothPosition);
    };

    const onScroll = () => {
      calculateTarget();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    calculateTarget();
    animationFrameId = requestAnimationFrame(updateSmoothPosition);

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section ref={sectionRef} style={{ padding: '6.5rem 0', backgroundColor: '#FFFFFF', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
      <div className="container">
        {/* Headline matching TURN.STUDIO */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
              color: 'var(--text-dark)',
              letterSpacing: '-0.04em',
            }}
          >
            Works Process
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '0.5rem' }}>
            A structured, collaborative approach built for independent businesses.
          </p>
        </div>

        {/* 3 Process Cards with Vector Geometry Diagrams */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            maxWidth: '1120px',
            margin: '0 auto',
          }}
        >
          {/* Card 01: Discover & Define */}
          <div className="process-card">
            <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--text-light)', marginBottom: '0.75rem', letterSpacing: '0.1em' }}>
              01
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '0.35rem' }}>
              Discover & Define
            </h3>
            <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '1.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Strategy & Structure
            </div>

            {/* 8-Axis Radar / Compass Spider-Web Vector Diagram */}
            <div style={{ width: '100px', height: '100px', margin: '0 auto 2rem auto' }}>
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                <line x1="50" y1="10" x2="50" y2="90" stroke="#121212" strokeWidth="1.2" />
                <line x1="10" y1="50" x2="90" y2="50" stroke="#121212" strokeWidth="1.2" />
                <line x1="22" y1="22" x2="78" y2="78" stroke="#121212" strokeWidth="1.2" />
                <line x1="22" y1="78" x2="78" y2="22" stroke="#121212" strokeWidth="1.2" />
                <polygon points="50,14 75,25 86,50 75,75 50,86 25,75 14,50 25,25" stroke="#121212" strokeWidth="1.2" fill="none" />
                <polygon points="50,26 67,33 74,50 67,67 50,74 33,67 26,50 33,33" stroke="#121212" strokeWidth="1.2" fill="none" />
                <polygon points="50,38 58,42 62,50 58,58 50,62 42,58 38,50 42,42" stroke="#121212" strokeWidth="1.2" fill="none" />
                <circle cx="50" cy="50" r="3" fill="#121212" />
              </svg>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.65, marginTop: 'auto' }}>
              We dive deep into your business, audience, goals, and market to uncover opportunities and build a strategic foundation for success.
            </p>
          </div>

          {/* Card 02: Design & Build */}
          <div className="process-card">
            <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--text-light)', marginBottom: '0.75rem', letterSpacing: '0.1em' }}>
              02
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '0.35rem' }}>
              Design & Build
            </h3>
            <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '1.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Design & Experience
            </div>

            {/* Radial Starburst Multi-Spoke Vector Diagram */}
            <div style={{ width: '100px', height: '100px', margin: '0 auto 2rem auto' }}>
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                <circle cx="50" cy="50" r="38" stroke="#121212" strokeWidth="1.2" strokeDasharray="3 3" />
                <circle cx="50" cy="50" r="18" stroke="#121212" strokeWidth="1.2" />
                {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((angle, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const x1 = 50 + 18 * Math.cos(rad);
                  const y1 = 50 + 18 * Math.sin(rad);
                  const x2 = 50 + 38 * Math.cos(rad);
                  const y2 = 50 + 38 * Math.sin(rad);
                  return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#121212" strokeWidth="1.2" />;
                })}
                <circle cx="50" cy="50" r="4" fill="#121212" />
              </svg>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.65, marginTop: 'auto' }}>
              From brand identities to websites and digital products, we craft experiences that connect with audiences and elevate your brand.
            </p>
          </div>

          {/* Card 03: Launch & Grow */}
          <div className="process-card">
            <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--text-light)', marginBottom: '0.75rem', letterSpacing: '0.1em' }}>
              03
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '0.35rem' }}>
              Launch & Grow
            </h3>
            <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '1.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Develop & Automate
            </div>

            {/* Concentric Target Orbital Rings */}
            <div style={{ width: '100px', height: '100px', margin: '0 auto 2rem auto' }}>
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                <circle cx="50" cy="50" r="38" stroke="#121212" strokeWidth="1.4" />
                <circle cx="50" cy="50" r="26" stroke="#121212" strokeWidth="1.4" />
                <circle cx="50" cy="50" r="14" stroke="#121212" strokeWidth="1.4" />
                <circle cx="50" cy="50" r="5" fill="#121212" />
                <path d="M50 12 L56 16 L50 20 Z" fill="#121212" />
                <path d="M88 50 L84 56 L80 50 Z" fill="#121212" />
              </svg>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.65, marginTop: 'auto' }}>
              We launch with purpose and help you scale through marketing, optimization, and continuous improvement.
            </p>
          </div>
        </div>

        {/* Ultra-Smooth 60FPS Lerping Rocket Progress Bar */}
        <div className="rocket-bar-container">
          <div
            ref={fillRef}
            className="rocket-bar-fill"
            style={{
              width: '15%',
              willChange: 'width',
            }}
          ></div>
          <div
            ref={rocketRef}
            style={{
              position: 'absolute',
              left: '15%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              willChange: 'left',
              filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.15))',
            }}
          >
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
              <g transform="rotate(45 20 20)">
                <path d="M20 4 C14 10 12 24 12 30 L28 30 C28 24 26 10 20 4 Z" fill="#F87171" stroke="#121212" strokeWidth="2" />
                <circle cx="20" cy="18" r="4" fill="#38BDF8" stroke="#121212" strokeWidth="1.5" />
                <path d="M12 24 L6 30 L12 30 Z" fill="#EF4444" stroke="#121212" strokeWidth="1.5" />
                <path d="M28 24 L34 30 L28 30 Z" fill="#EF4444" stroke="#121212" strokeWidth="1.5" />
                <polygon points="16,30 20,38 24,30" fill="#FBBF24" stroke="#121212" strokeWidth="1.5" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

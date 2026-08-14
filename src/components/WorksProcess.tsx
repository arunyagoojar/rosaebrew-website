import React from 'react';

export const WorksProcess: React.FC = () => {
  return (
    <section style={{ padding: '6rem 0', backgroundColor: '#FFFFFF', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
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
          {/* Card 01 */}
          <div className="process-card">
            <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-light)', marginBottom: '0.75rem', letterSpacing: '0.1em' }}>
              01
            </div>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '0.4rem' }}>
              Discover & Define
            </h3>
            <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Strategy & Direction
            </div>

            {/* Radar / Compass Diagram */}
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
              We understand your business, target clients, and key offerings to shape a clear, structured website direction.
            </p>
          </div>

          {/* Card 02 */}
          <div className="process-card">
            <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-light)', marginBottom: '0.75rem', letterSpacing: '0.1em' }}>
              02
            </div>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '0.4rem' }}>
              Design & Build
            </h3>
            <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Design & Experience
            </div>

            {/* Starburst Geometry Diagram */}
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
              We craft responsive layouts with clean typography, clear information hierarchy, and mobile-friendly touchpoints.
            </p>
          </div>

          {/* Card 03 */}
          <div className="process-card">
            <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-light)', marginBottom: '0.75rem', letterSpacing: '0.1em' }}>
              03
            </div>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '0.4rem' }}>
              Review & Launch
            </h3>
            <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Refine & Connect
            </div>

            {/* Concentric Target Circles Diagram */}
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
              We review the build together, connect your custom domain, test all enquiry flows, and launch your digital presence.
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

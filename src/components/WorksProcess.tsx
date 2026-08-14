import React from 'react';

export const WorksProcess: React.FC = () => {
  const values = [
    {
      num: '01',
      title: 'Transparency',
      subtitle: 'Clear, honest, and simple',
      desc: 'Fixed upfront quotes and scope agreements before any code is written, with zero hidden surprises.',
      dotColor: '#F472B6',
    },
    {
      num: '02',
      title: 'Speed & Craft',
      subtitle: 'Fast and responsive',
      desc: 'Fast loading speeds on all devices, clean typography, and seamless contact channels.',
      dotColor: '#F7E7B4',
    },
    {
      num: '03',
      title: 'Full Ownership',
      subtitle: 'You own everything',
      desc: '100% full ownership of your domain, codebase, and assets with zero ongoing agency lock-in.',
      dotColor: '#E4DCF1',
    },
  ];

  return (
    <section id="values" style={{ padding: 'clamp(4.5rem, 8vw, 7.5rem) 0', backgroundColor: 'var(--bg-canvas)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="scroll-reveal" style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 6vw, 4.5rem)' }}>
          <h2
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(2.2rem, 4.8vw, 3.4rem)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
            }}
          >
            The values that drive <br />
            everything <span className="italic-serif" style={{ fontWeight: 400 }}>we do</span>
          </h2>
        </div>

        {/* 3 Values Timeline Cards (Centered Equal Width Layout) */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '2rem',
            maxWidth: '1120px',
            margin: '0 auto',
          }}
        >
          {values.map((v, idx) => (
            <div
              key={idx}
              className={`scroll-reveal stagger-${idx + 1}`}
              style={{
                backgroundColor: 'var(--bg-card)',
                borderRadius: '26px',
                padding: '2.5rem 2rem',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                flexDirection: 'column',
                flex: '1 1 300px',
                maxWidth: '350px',
                width: '100%',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: v.dotColor }} />
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-secondary)' }}>
                  {v.num}
                </span>
              </div>

              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em', marginBottom: '0.35rem' }}>
                {v.title}
              </h3>

              <div style={{ fontSize: '0.86rem', color: 'var(--text-muted)', fontWeight: 500, marginBottom: '1.25rem' }}>
                {v.subtitle}
              </div>

              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

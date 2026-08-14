import React from 'react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Understand the Business',
      desc: 'We start by understanding your work, your target clients, what information you frequently answer manually, and the exact goals for your website.',
    },
    {
      num: '02',
      title: 'Shape the Direction',
      desc: 'We structure the content hierarchy, outline necessary sections, and decide on the visual tone and inquiry mechanisms.',
    },
    {
      num: '03',
      title: 'Build the Website',
      desc: 'We craft your responsive, fast-loading website with clean typography, clear information layout, and mobile-friendly touchpoints.',
    },
    {
      num: '04',
      title: 'Review & Refine',
      desc: 'You review the live draft. We refine wording, imagery alignment, and layout details based on your feedback before going public.',
    },
    {
      num: '05',
      title: 'Launch & Handoff',
      desc: 'We connect your custom domain name, verify all contact links, and launch your website ready to receive prospective clients.',
    },
  ];

  return (
    <section style={{ padding: '5rem 0', backgroundColor: 'var(--bg-main)' }}>
      <div className="container-narrow">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
              fontWeight: 800,
              color: 'var(--text-dark)',
              letterSpacing: '-0.03em',
              marginBottom: '0.75rem',
            }}
          >
            How We Work
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', lineHeight: 1.6 }}>
            A straightforward, collaborative five-step process from initial conversation to live website.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {steps.map((step, idx) => (
            <div key={idx} className="step-card">
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-light)', fontFamily: 'var(--font-display)' }}>
                  {step.num}
                </span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-dark)', letterSpacing: '-0.01em' }}>
                  {step.title}
                </h3>
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6, paddingLeft: '1.8rem' }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

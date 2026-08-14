import React from 'react';

export const CoreServices: React.FC = () => {
  const services = [
    {
      icon: '💻',
      title: 'Website Design & Build',
      description:
        'Clean, modern, and mobile-first website design built from the ground up to reflect your unique offering. Fast load times, responsive across all devices, and easy for your visitors to navigate.',
    },
    {
      icon: '✨',
      title: 'Digital Identity & Touchpoints',
      description:
        'A cohesive digital look and feel that gives your business credibility. We help connect your custom domain name, set up professional contact touchpoints, and align your branding.',
    },
    {
      icon: '📋',
      title: 'Service & Product Information',
      description:
        'Structured presentation of your services, consulting packages, or product catalog so prospective clients immediately understand what you do, how you work, and what to expect.',
    },
    {
      icon: '💬',
      title: 'Enquiry & Contact Flows',
      description:
        'Frictionless inquiry channels tailored to how you operate — direct WhatsApp links, structured contact forms, booking links, or email routing so you never miss an incoming lead.',
    },
  ];

  return (
    <section style={{ padding: '5rem 0', backgroundColor: '#FFFFFF', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3.5rem auto' }}>
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
            Core Services
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', lineHeight: 1.6 }}>
            Everything needed to establish a credible, professional home on the web for your business or practice.
          </p>
        </div>

        {/* 4 Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {services.map((s, idx) => (
            <div key={idx} className="feature-card">
              <div style={{ fontSize: '2rem', marginBottom: '1.25rem' }}>{s.icon}</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
                {s.title}
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.65, marginTop: 'auto' }}>
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

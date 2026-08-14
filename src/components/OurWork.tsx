import React from 'react';

interface OurWorkProps {
  onOpenProjectModal: () => void;
}

export const OurWork: React.FC<OurWorkProps> = ({ onOpenProjectModal }) => {
  const projects = [
    {
      title: 'Akuri',
      category: 'Design & Digital Identity',
      tag: 'ACTIVE PROJECT',
      tagColor: '#38BDF8',
      url: 'https://akuri.rosaebrew.eu.cc',
      desc: 'Distinctive brand identity, minimal lifestyle showcase, and custom responsive web experience crafted for modern living.',
      highlights: ['Custom Typography', 'Mobile-First Experience', 'Frictionless Enquiries'],
    },
    {
      title: 'Serí',
      subtitle: 'The Gourmet Kitchen',
      category: 'Culinary Brand & Digital Menu',
      tag: 'ACTIVE PROJECT',
      tagColor: '#F59E0B',
      url: 'https://seri.rosaebrew.eu.cc',
      desc: 'Luxury culinary presentation showcasing 100+ gourmet items, artisanal sourdoughs, dietary filters, and direct customer ordering.',
      highlights: ['Interactive Menu System', 'Dietary Tags & Dietary Badges', 'Seamless Checkout'],
    },
    {
      title: 'The Bake Studio',
      subtitle: 'By Shruti',
      category: 'Bespoke Bakery & Custom Orders',
      tag: 'ACTIVE PROJECT',
      tagColor: '#EC4899',
      url: 'https://tbs.rosaebrew.eu.cc',
      desc: 'Editorial cake showcase, custom bento builder, and automated WhatsApp order routing designed for an artisanal bakery.',
      highlights: ['Custom Cake Customizer', 'Order Calculation Flow', 'Social Bio Integration'],
    },
  ];

  return (
    <section id="work" style={{ backgroundColor: 'var(--bg-dark)', color: '#FFFFFF', padding: '6.5rem 0 6rem 0' }}>
      <div className="container">
        {/* Section Header with Clean SVG Icon */}
        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2.6rem, 6vw, 5rem)',
              color: '#FFFFFF',
              letterSpacing: '-0.04em',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <span>OUR WORK</span>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '52px',
                height: '42px',
                borderRadius: '12px',
                backgroundColor: '#F43F5E',
                color: '#FFFFFF',
                boxShadow: '0 8px 20px rgba(244, 63, 94, 0.4)',
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </span>
          </h2>
          <p style={{ color: '#999999', fontSize: '1.05rem', marginTop: '0.75rem', maxWidth: '600px', margin: '0.75rem auto 0 auto' }}>
            Selected live projects built for independent brands and owner-led businesses.
          </p>
        </div>

        {/* Work Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
          }}
        >
          {projects.map((proj, idx) => (
            <div key={idx} className="work-card">
              {/* Card Header */}
              <div
                style={{
                  backgroundColor: '#1A1A1A',
                  padding: '2.5rem 2rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '200px',
                  position: 'relative',
                  backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
                  backgroundSize: '16px 16px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      color: proj.tagColor,
                      textTransform: 'uppercase',
                      padding: '4px 10px',
                      backgroundColor: 'rgba(255, 255, 255, 0.06)',
                      borderRadius: '9999px',
                    }}
                  >
                    {proj.tag}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: '#666666' }}>0{idx + 1}</span>
                </div>

                <div>
                  <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                    {proj.title}
                  </h3>
                  {proj.subtitle && (
                    <div style={{ fontSize: '0.92rem', color: '#888888', marginTop: '0.2rem' }}>
                      {proj.subtitle}
                    </div>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#AAAAAA', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>
                  {proj.category}
                </div>

                <p style={{ fontSize: '0.94rem', color: '#CCCCCC', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {proj.desc}
                </p>

                {/* Highlights */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto', marginBottom: '2rem' }}>
                  {proj.highlights.map((h, hIdx) => (
                    <span
                      key={hIdx}
                      style={{
                        fontSize: '0.76rem',
                        padding: '4px 9px',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '6px',
                        color: '#94A3B8',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                      }}
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {/* Dual Buttons: Visit Live Site & Start Project */}
                <div style={{ display: 'flex', gap: '0.75rem', flexDirection: 'column' }}>
                  <a
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill-lime"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      fontSize: '0.86rem',
                      textAlign: 'center',
                      textDecoration: 'none',
                    }}
                  >
                    <span>Visit Live Site</span>
                    <span>↗</span>
                  </a>

                  <button
                    onClick={onOpenProjectModal}
                    className="btn-pill-white"
                    style={{ width: '100%', padding: '0.7rem', fontSize: '0.84rem', cursor: 'pointer' }}
                  >
                    <span>Discuss Similar Project</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

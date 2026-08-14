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
        {/* Section Header with Clean SVG Icon & Scroll Reveal */}
        <div className="scroll-reveal" style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
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
                height: '52px',
                borderRadius: '12px',
                backgroundColor: '#1E1E1E',
                border: '1px solid rgba(255, 255, 255, 0.15)',
              }}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="#C3F53C" strokeWidth="2" />
                <path d="M12 7V12L15 15" stroke="#C3F53C" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p style={{ color: '#AAAAAA', fontSize: '1.05rem', marginTop: '0.75rem', maxWidth: '600px', margin: '0.75rem auto 0 auto' }}>
            A selection of live client websites and active digital systems built for independent owners.
          </p>
        </div>

        {/* 3 Real Project Cards with Staggered Scroll Reveal Animations */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            marginBottom: '4.5rem',
          }}
        >
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`scroll-reveal stagger-${idx + 1} work-card`}
            >
              {/* Card Banner Preview */}
              <div
                style={{
                  height: '210px',
                  backgroundColor: '#141414',
                  backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
                  backgroundSize: '16px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '2rem',
                  position: 'relative',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                {/* Active Tag */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    backgroundColor: 'rgba(0, 0, 0, 0.65)',
                    backdropFilter: 'blur(6px)',
                    border: `1px solid ${project.tagColor}`,
                    color: project.tagColor,
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '9999px',
                  }}
                >
                  ● {project.tag}
                </div>

                {/* Main Stylized Project Title */}
                <div style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '2.5rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {project.title}
                  </div>
                  {project.subtitle && (
                    <div style={{ fontSize: '0.85rem', color: '#94A3B8', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      {project.subtitle}
                    </div>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '2.25rem 2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ fontSize: '0.82rem', color: project.tagColor, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
                  {project.category}
                </div>

                <p style={{ color: '#AAAAAA', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                  {project.desc}
                </p>

                {/* Highlight Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem', marginTop: 'auto' }}>
                  {project.highlights.map((item, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '0.75rem',
                        padding: '0.3rem 0.7rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.06)',
                        borderRadius: '6px',
                        color: '#DDDDDD',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill-lime"
                    style={{ flex: 1, fontSize: '0.84rem', padding: '0.65rem 1rem', textDecoration: 'none', textAlign: 'center' }}
                  >
                    <span>Visit Live Site</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Block */}
        <div className="scroll-reveal stagger-2" style={{ textAlign: 'center' }}>
          <button
            onClick={onOpenProjectModal}
            className="btn-pill-white"
            style={{ padding: '0.85rem 2.2rem', fontSize: '0.92rem', cursor: 'pointer' }}
          >
            <span>Discuss Your Project With Us</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

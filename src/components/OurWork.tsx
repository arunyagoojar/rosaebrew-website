import React from 'react';

interface OurWorkProps {
  onOpenProjectModal: () => void;
}

export const OurWork: React.FC<OurWorkProps> = ({ onOpenProjectModal }) => {
  const projects = [
    {
      id: 'akuri',
      title: 'Akuri',
      tagline: 'Lifestyle & Architecture Showcase',
      tag: 'LIFESTYLE & ARCHITECTURE',
      tagBg: '#E4DCF1',
      tagColor: '#2B2338',
      url: 'https://akuri.rosaebrew.eu.cc',
      image: '/images/showcase_akuri.png',
      desc: 'A minimal, editorial web presence created to present contemporary architectural and lifestyle products with visual clarity and effortless enquiry channels.',
      highlights: ['Custom Typography', 'Frictionless Inquiries', 'Mobile-First Layout'],
    },
    {
      id: 'seri',
      title: 'Serí Pâtisserie',
      tagline: 'Gourmet French Pâtisserie & Digital Menu',
      tag: 'CULINARY & HOSPITALITY',
      tagBg: '#F8A593',
      tagColor: '#181715',
      url: 'https://seri.rosaebrew.eu.cc',
      image: '/images/showcase_seri.png',
      desc: 'A luxury dining showcase presenting 100+ gourmet dishes, artisanal sourdough breads, dietary filter systems, and direct customer ordering.',
      highlights: ['Interactive Menu System', 'Dietary Tags & Badges', 'Visual Food Catalogue'],
    },
    {
      id: 'tbs',
      title: 'The Bake Studio',
      tagline: 'Bespoke Bakery & Custom Cake Builder',
      tag: 'ARTISANAL BAKERY',
      tagBg: '#F7E7B4',
      tagColor: '#181715',
      url: 'https://tbs.rosaebrew.eu.cc',
      image: '/images/showcase_tbs.png',
      desc: 'An editorial dessert catalogue, custom cake builder, and automated order calculation flow designed for an artisanal bakery brand.',
      highlights: ['Custom Cake Builder', 'Order Calculation Flow', 'Social Bio Integration'],
    },
  ];

  return (
    <section id="work" style={{ padding: '7.5rem 0', backgroundColor: 'var(--bg-canvas)' }}>
      <div className="container">

        {/* Section Header */}
        <div className="scroll-reveal" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4.5rem auto' }}>
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
            Websites that drive <br />
            <span className="italic-serif" style={{ fontWeight: 400 }}>
              real business
            </span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginTop: '1rem', lineHeight: 1.6 }}>
            Selected live projects handcrafted for independent creators and hospitality brands.
          </p>
        </div>

        {/* 3 Real Project Cards (Centered flex layout) */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '2.25rem',
            marginBottom: '4.5rem',
          }}
        >
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className={`scroll-reveal stagger-${idx + 1}`}
              style={{
                backgroundColor: 'var(--bg-card)',
                borderRadius: '28px',
                border: '1px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-card)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                flex: '1 1 320px',
                maxWidth: '380px',
                width: '100%',
                transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-float)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-card)';
              }}
            >
              {/* Image Preview Header */}
              <div
                style={{
                  height: '250px',
                  backgroundColor: 'var(--bg-surface)',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.04)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />

                <div
                  style={{
                    position: 'absolute',
                    top: '1.25rem',
                    left: '1.25rem',
                    padding: '0.35rem 0.8rem',
                    borderRadius: '9999px',
                    backgroundColor: project.tagBg,
                    color: project.tagColor,
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  }}
                >
                  {project.tag}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '2rem 1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em', marginBottom: '0.25rem' }}>
                  {project.title}
                </h3>

                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500, marginBottom: '1.15rem' }}>
                  {project.tagline}
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                  {project.desc}
                </p>

                {/* Highlights */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.75rem', marginTop: 'auto' }}>
                  {project.highlights.map((item, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '0.75rem',
                        padding: '0.3rem 0.7rem',
                        backgroundColor: 'var(--bg-canvas)',
                        borderRadius: '9999px',
                        color: 'var(--text-secondary)',
                        fontWeight: 600,
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      ✓ {item}
                    </span>
                  ))}
                </div>

                {/* Sleek, Consistent-Height Action Buttons */}
                <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sivoro-btn-dark"
                    style={{
                      flex: 1,
                      padding: '0.55rem 1rem',
                      fontSize: '0.84rem',
                      height: '38px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span>Visit Live Site</span>
                    <span>↗</span>
                  </a>

                  <button
                    onClick={onOpenProjectModal}
                    className="sivoro-btn-light"
                    style={{
                      flex: 1,
                      padding: '0.55rem 1rem',
                      fontSize: '0.84rem',
                      height: '38px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span>Discuss Scope</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA with sleek consistent button */}
        <div className="scroll-reveal stagger-2" style={{ textAlign: 'center' }}>
          <button
            onClick={onOpenProjectModal}
            className="sivoro-btn-light"
          >
            <span>Have a project in mind?</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

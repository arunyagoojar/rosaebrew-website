import React from 'react';

interface OurWorkProps {
  onOpenProjectModal: () => void;
}

export const OurWork: React.FC<OurWorkProps> = ({ onOpenProjectModal }) => {
  const projects = [
    {
      title: 'Kuri',
      category: 'Design & Digital Identity',
      tag: 'ACTIVE PROJECT',
      tagColor: '#38BDF8',
      desc: 'Distinctive brand identity, minimal lifestyle storefront, and custom responsive web experience crafted for modern living.',
      highlights: ['Custom Typography', 'Mobile-First Shop Experience', 'Frictionless Enquiries'],
    },
    {
      title: 'Serí',
      subtitle: 'The Gourmet Kitchen',
      category: 'Culinary Brand & Digital Menu',
      tag: 'FEATURED WORK',
      tagColor: '#F59E0B',
      desc: 'Luxury culinary presentation showcasing 100+ gourmet items, artisanal sourdoughs, dietary filters, and direct customer ordering.',
      highlights: ['Interactive Menu System', 'Dietary Tags & Dietary Badges', 'Seamless Checkout'],
    },
    {
      title: 'The Bake Studio',
      subtitle: 'By Shruti',
      category: 'Bespoke Bakery & Custom Orders',
      tag: 'FEATURED WORK',
      tagColor: '#EC4899',
      desc: 'Editorial cake showcase, custom bento builder, and automated WhatsApp order routing designed for an artisanal home bakery.',
      highlights: ['Custom Cake Customizer', 'Order Calculation Flow', 'Social Bio Integration'],
    },
  ];

  return (
    <section id="work" style={{ backgroundColor: 'var(--bg-dark)', color: '#FFFFFF', padding: '6.5rem 0 5rem 0' }}>
      <div className="container">
        {/* Section Header with Laptop Smiley Badge */}
        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2.8rem, 6.5vw, 5.5rem)',
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
                width: '56px',
                height: '46px',
                borderRadius: '12px',
                backgroundColor: '#F43F5E',
                color: '#FFFFFF',
                fontSize: '1.5rem',
                boxShadow: '0 8px 20px rgba(244, 63, 94, 0.4)',
              }}
            >
              💻
            </span>
          </h2>
          <p style={{ color: '#999999', fontSize: '1.05rem', marginTop: '0.75rem', maxWidth: '600px', margin: '0.75rem auto 0 auto' }}>
            Selected recent projects built for independent brands and owner-led businesses.
          </p>
        </div>

        {/* Work Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            marginBottom: '5rem',
          }}
        >
          {projects.map((proj, idx) => (
            <div key={idx} className="work-card">
              {/* Card Header & Preview Box */}
              <div
                style={{
                  backgroundColor: '#1E1E1E',
                  padding: '2.5rem 2rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '220px',
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
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto', marginBottom: '1.75rem' }}>
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

                <button
                  onClick={onOpenProjectModal}
                  className="btn-pill-white"
                  style={{ width: '100%', padding: '0.75rem', fontSize: '0.86rem', backgroundColor: '#FFFFFF', color: '#121212', cursor: 'pointer' }}
                >
                  <span>Discuss Similar Project</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Strip matching TURN.STUDIO */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '3.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2.5rem',
            textAlign: 'center',
          }}
        >
          <div>
            <div style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-sans)', letterSpacing: '-0.03em' }}>
              280+
            </div>
            <div style={{ fontSize: '0.88rem', color: '#888888', marginTop: '0.25rem' }}>
              Successful projects completed
            </div>
          </div>

          <div>
            <div style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-sans)', letterSpacing: '-0.03em' }}>
              12
            </div>
            <div style={{ fontSize: '0.88rem', color: '#888888', marginTop: '0.25rem' }}>
              Years of experience
            </div>
          </div>

          <div>
            <div style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-sans)', letterSpacing: '-0.03em' }}>
              35+
            </div>
            <div style={{ fontSize: '0.88rem', color: '#888888', marginTop: '0.25rem' }}>
              Employees, makers, & creators
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

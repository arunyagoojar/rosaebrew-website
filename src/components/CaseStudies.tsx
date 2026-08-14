import React from 'react';

export const CaseStudies: React.FC = () => {
  return (
    <section id="work" style={{ padding: '7rem 0', backgroundColor: 'var(--dark-950)', color: '#FFFFFF' }}>
      <div className="container">
        {/* Section Header with Laptop Smiley Badge */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
                color: '#FFFFFF',
                letterSpacing: '-0.04em',
                lineHeight: 1,
              }}
            >
              OUR WORK
            </h2>
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                backgroundColor: '#FDECD2',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.4rem',
                transform: 'rotate(8deg)',
              }}
            >
              💻
            </div>
          </div>

          <p style={{ color: '#A3A3A3', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto' }}>
            Real independent bakeries and pâtisseries running on Rosaebrew digital systems.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '3rem',
            maxWidth: '1160px',
            margin: '0 auto',
          }}
        >
          {/* Case Study 1: The Bake Studio by Shruti */}
          <div className="dark-case-card">
            {/* Image */}
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', overflow: 'hidden', backgroundColor: '#222' }}>
              <img
                src="/images/thebakestudio_showcase.jpg"
                alt="The Bake Studio by Shruti"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', top: '1rem', left: '1rem', display: 'flex', gap: '0.5rem' }}>
                <span style={{ backgroundColor: '#22311B', color: '#FAF5EE', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-pill)', fontSize: '0.72rem', fontWeight: 700 }}>
                  CELEBRATION BAKERY
                </span>
                <span style={{ backgroundColor: '#C3F53C', color: '#000000', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-pill)', fontSize: '0.72rem', fontWeight: 700 }}>
                  100% EGGLESS
                </span>
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: '2.25rem 2rem' }}>
              <div style={{ color: '#A3A3A3', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>
                Jaipur, Rajasthan
              </div>

              <h3 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.85rem' }}>
                The Bake Studio by Shruti
              </h3>

              <p style={{ color: '#CCCCCC', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Replaced cluttered Linktree links with an editorial cake catalogue, Korean bento showcases, and a bespoke custom cake inquiry system linked directly to WhatsApp.
              </p>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontSize: '0.8rem', color: '#C3F53C', fontWeight: 700 }}>
                  ✦ 100% Pre-structured Enquiries
                </div>
                <a
                  href="https://github.com/arunyagoojar/thebakestudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '0.84rem', fontWeight: 600 }}
                >
                  View Case Study →
                </a>
              </div>
            </div>
          </div>

          {/* Case Study 2: Serí – The Gourmet Kitchen */}
          <div className="dark-case-card">
            {/* Image */}
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', overflow: 'hidden', backgroundColor: '#222' }}>
              <img
                src="/images/seri_showcase.jpg"
                alt="Serí – The Gourmet Kitchen"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', top: '1rem', left: '1rem', display: 'flex', gap: '0.5rem' }}>
                <span style={{ backgroundColor: '#4F091B', color: '#FDF7EB', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-pill)', fontSize: '0.72rem', fontWeight: 700 }}>
                  FRENCH PÂTISSERIE
                </span>
                <span style={{ backgroundColor: '#C3F53C', color: '#000000', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-pill)', fontSize: '0.72rem', fontWeight: 700 }}>
                  14 CATEGORIES
                </span>
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: '2.25rem 2rem' }}>
              <div style={{ color: '#A3A3A3', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>
                Sodala, Jaipur
              </div>

              <h3 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.85rem' }}>
                Serí – The Gourmet Kitchen
              </h3>

              <p style={{ color: '#CCCCCC', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Built a luxury digital storefront featuring 100+ menu items, authentic dietary tags, sourdough & entremet descriptions, and seamless Zomato & WhatsApp ordering.
              </p>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontSize: '0.8rem', color: '#C3F53C', fontWeight: 700 }}>
                  ✦ Zero DM Friction on 100+ Items
                </div>
                <a
                  href="https://github.com/arunyagoojar/seri-gourmet"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '0.84rem', fontWeight: 600 }}
                >
                  View Case Study →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

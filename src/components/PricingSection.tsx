import React from 'react';

interface PricingSectionProps {
  onOpenProjectModal: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenProjectModal }) => {
  return (
    <section id="pricing" style={{ padding: 'clamp(4.5rem, 8vw, 7.5rem) 0', backgroundColor: 'var(--bg-canvas)' }}>
      <div className="container">
        
        {/* Sivoro Signature Headline */}
        <div className="scroll-reveal" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto clamp(3rem, 6vw, 4.5rem) auto' }}>
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
            Simple, transparent <br />
            pricing for <span className="italic-serif" style={{ fontWeight: 400 }}>every business</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginTop: '1rem', lineHeight: 1.6 }}>
            Fixed upfront quotes with zero hidden fees and 100% full asset ownership.
          </p>
        </div>

        {/* 3 Equal Width Sivoro Pricing Cards */}
        <div
          className="pricing-cards-grid"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '2rem',
            maxWidth: '1120px',
            margin: '0 auto 3rem auto',
            alignItems: 'stretch',
          }}
        >
          {/* Card 1: Starter */}
          <div
            className="scroll-reveal stagger-1 pricing-card"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderRadius: '28px',
              padding: 'clamp(2.25rem, 4vw, 3rem) clamp(1.75rem, 3vw, 2.25rem)',
              display: 'flex',
              flexDirection: 'column',
              flex: '1 1 300px',
              maxWidth: '350px',
              width: '100%',
              border: '1px solid var(--border-subtle)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            {/* Top Tag Row (Fixed Height for Alignment) */}
            <div style={{ display: 'flex', alignItems: 'center', minHeight: '30px', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Starter
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-sans)', letterSpacing: '-0.03em' }}>
                ₹5,000
              </span>
              <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>/ project</span>
            </div>

            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '2rem' }}>
              Perfect for independent creators, portfolios, and single-page landing showcases.
            </p>

            {/* Checklist */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '2.5rem' }}>
              {[
                'Single-page custom responsive layout',
                'Brand typography & aesthetic styling',
                'Direct email inquiry & contact routing',
                'Clean, lightweight code (zero bloat)',
                '5 to 7 days delivery timeline',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                  <span style={{ width: '18px', height: '18px', borderRadius: '50%', backgroundColor: 'rgba(244, 114, 182, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', color: '#DB2777', fontWeight: 800 }}>
                    ✓
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={onOpenProjectModal}
              className="sivoro-btn-light"
              style={{ width: '100%', marginTop: 'auto' }}
            >
              <span>Get Started</span>
              <span>→</span>
            </button>
          </div>

          {/* Card 2: Growth (Signature Pink Gradient - No Absolute Overlapping Text) */}
          <div
            className="scroll-reveal stagger-2 pricing-card featured-pricing-card"
            style={{
              background: 'linear-gradient(145deg, #FBCFE8 0%, #F472B6 100%)',
              borderRadius: '28px',
              padding: 'clamp(2.25rem, 4vw, 3rem) clamp(1.75rem, 3vw, 2.25rem)',
              display: 'flex',
              flexDirection: 'column',
              flex: '1 1 300px',
              maxWidth: '350px',
              width: '100%',
              color: '#181715',
              boxShadow: '0 16px 40px rgba(244, 114, 182, 0.28)',
              position: 'relative',
              zIndex: 2,
            }}
          >
            {/* Clean In-Flow Header Row (Never Overlaps) */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem', minHeight: '30px', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#831843', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Growth & Showcase
              </span>
              <span
                style={{
                  padding: '0.25rem 0.65rem',
                  borderRadius: '9999px',
                  backgroundColor: '#181715',
                  color: '#FAF7F2',
                  fontSize: '0.66rem',
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
                MOST POPULAR
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '3rem', fontWeight: 800, color: '#181715', fontFamily: 'var(--font-sans)', letterSpacing: '-0.03em' }}>
                ₹12,000
              </span>
              <span style={{ fontSize: '0.88rem', color: '#44403C', fontWeight: 600 }}>/ project</span>
            </div>

            <p style={{ fontSize: '0.88rem', color: '#374151', lineHeight: 1.5, marginBottom: '2rem', fontWeight: 500 }}>
              For growing culinary brands, cafes, and studios needing digital menus and showcases.
            </p>

            {/* Checklist with crystal clear legible text */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '2.5rem' }}>
              {[
                'Multi-section custom website & brand story',
                'Digital menu & catalogue (100+ items)',
                'Dietary tags & allergen badge filters',
                'Social bio hub & direct inquiry routing',
                'Domain connection & SSL configuration',
                '7 to 10 days delivery timeline',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.86rem', color: '#181715', fontWeight: 600 }}>
                  <span style={{ width: '18px', height: '18px', borderRadius: '50%', backgroundColor: '#181715', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', color: '#FAF7F2', fontWeight: 800 }}>
                    ✓
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={onOpenProjectModal}
              className="sivoro-btn-dark"
              style={{ width: '100%', marginTop: 'auto', backgroundColor: '#181715', color: '#FAF7F2' }}
            >
              <span>Start Project</span>
              <span>→</span>
            </button>
          </div>

          {/* Card 3: Custom / Pro */}
          <div
            className="scroll-reveal stagger-3 pricing-card"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderRadius: '28px',
              padding: 'clamp(2.25rem, 4vw, 3rem) clamp(1.75rem, 3vw, 2.25rem)',
              display: 'flex',
              flexDirection: 'column',
              flex: '1 1 300px',
              maxWidth: '350px',
              width: '100%',
              border: '1px solid var(--border-subtle)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            {/* Top Tag Row (Fixed Height for Alignment) */}
            <div style={{ display: 'flex', alignItems: 'center', minHeight: '30px', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Custom & Tools
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-sans)', letterSpacing: '-0.03em' }}>
                Custom
              </span>
            </div>

            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '2rem' }}>
              For brands requiring custom product customizers, calculators, and complex tools.
            </p>

            {/* Checklist */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '2.5rem' }}>
              {[
                'Interactive custom product & cake customizers',
                'Dynamic price calculation & custom booking flows',
                'Direct ordering or custom API integration',
                'Dedicated design iteration cycles',
                '100% full source code & asset handoff',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                  <span style={{ width: '18px', height: '18px', borderRadius: '50%', backgroundColor: 'rgba(244, 114, 182, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', color: '#DB2777', fontWeight: 800 }}>
                    ✓
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={onOpenProjectModal}
              className="sivoro-btn-light"
              style={{ width: '100%', marginTop: 'auto' }}
            >
              <span>Contact Studio</span>
              <span>→</span>
            </button>
          </div>
        </div>

        {/* Scope Note */}
        <div style={{ textAlign: 'center', fontSize: '0.84rem', color: 'var(--text-muted)' }}>
          All domain registrations and external third-party accounts are configured directly in your name for 100% ownership.
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .pricing-card {
            max-width: 420px !important;
            flex: 1 1 100% !important;
          }
        }
      `}</style>
    </section>
  );
};

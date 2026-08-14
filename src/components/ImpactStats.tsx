import React from 'react';

export const ImpactStats: React.FC = () => {
  return (
    <section style={{ backgroundColor: 'var(--dark-950)', paddingBottom: '7rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="container">
        <div
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            backgroundColor: '#1E1E1E',
            borderRadius: '24px',
            padding: '3.5rem 2rem',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2.5rem',
            textAlign: 'center',
          }}
        >
          {/* Stat 1 */}
          <div>
            <div
              className="font-display"
              style={{
                fontSize: 'clamp(2.8rem, 5vw, 4.2rem)',
                color: '#FFFFFF',
                lineHeight: 1,
                marginBottom: '0.5rem',
              }}
            >
              50+
            </div>
            <div style={{ color: '#A3A3A3', fontSize: '0.88rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Independent Bakeries
            </div>
            <div style={{ color: '#737373', fontSize: '0.78rem', marginTop: '4px' }}>
              Custom Homes Launched
            </div>
          </div>

          {/* Stat 2 */}
          <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', borderRight: '1px solid rgba(255,255,255,0.1)' }} id="mid-stat">
            <div
              className="font-display"
              style={{
                fontSize: 'clamp(2.8rem, 5vw, 4.2rem)',
                color: '#C3F53C',
                lineHeight: 1,
                marginBottom: '0.5rem',
              }}
            >
              100k+
            </div>
            <div style={{ color: '#A3A3A3', fontSize: '0.88rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Clear Orders Processed
            </div>
            <div style={{ color: '#737373', fontSize: '0.78rem', marginTop: '4px' }}>
              Zero DM Back-and-Forth
            </div>
          </div>

          {/* Stat 3 */}
          <div>
            <div
              className="font-display"
              style={{
                fontSize: 'clamp(2.8rem, 5vw, 4.2rem)',
                color: '#FFFFFF',
                lineHeight: 1,
                marginBottom: '0.5rem',
              }}
            >
              4.9★
            </div>
            <div style={{ color: '#A3A3A3', fontSize: '0.88rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Baker Rating
            </div>
            <div style={{ color: '#737373', fontSize: '0.78rem', marginTop: '4px' }}>
              Pâtissiers & Home Bakers
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          #mid-stat {
            border-left: none !important;
            border-right: none !important;
            border-top: 1px solid rgba(255,255,255,0.1);
            border-bottom: 1px solid rgba(255,255,255,0.1);
            padding: 1.5rem 0;
          }
        }
      `}</style>
    </section>
  );
};

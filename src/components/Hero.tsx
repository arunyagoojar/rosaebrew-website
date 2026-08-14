import React, { useState } from 'react';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bake' | 'seri'>('bake');

  return (
    <section style={{ paddingTop: '1.5rem', paddingBottom: '5rem', position: 'relative' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        {/* Giant Ultra-Bold Display Brand Name with Multiplayer Cursors */}
        <div style={{ position: 'relative', display: 'inline-block', width: '100%', margin: '0 auto 1.5rem auto' }}>
          <h1
            className="font-display"
            style={{
              fontSize: 'clamp(3.8rem, 13vw, 11.5rem)',
              lineHeight: 0.88,
              color: 'var(--dark-950)',
              letterSpacing: '-0.06em',
              userSelect: 'none',
            }}
          >
            ROSAEBREW
          </h1>

          {/* Cursor Tag 1: Baker Liam (Orange) */}
          <div
            className="cursor-tag cursor-tag-orange"
            style={{
              top: '-15px',
              left: '18%',
            }}
          >
            <span style={{ fontSize: '0.65rem' }}>▲</span>
            <span>Liam (Baker)</span>
          </div>

          {/* Cursor Tag 2: Client Ethan (Green) */}
          <div
            className="cursor-tag cursor-tag-green"
            style={{
              bottom: '5px',
              left: '8%',
            }}
          >
            <span style={{ fontSize: '0.65rem' }}>▲</span>
            <span>Ethan (1kg Truffle)</span>
          </div>

          {/* Cursor Tag 3: Client Noah (Pink/Purple) */}
          <div
            className="cursor-tag cursor-tag-pink"
            style={{
              bottom: '10px',
              right: '12%',
            }}
          >
            <span style={{ fontSize: '0.65rem' }}>▲</span>
            <span>Shruti (Bake Studio)</span>
          </div>

          {/* Blue Rotating Stamp Badge */}
          <div
            className="stamp-badge-blue"
            style={{
              top: '-20px',
              right: '5%',
            }}
          >
            Built for<br />Independent<br />Bakeries
          </div>
        </div>

        {/* Core Positioning Headings */}
        <div style={{ maxWidth: '820px', margin: '0 auto 3rem auto' }}>
          <h2
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.5rem, 3.2vw, 2.5rem)',
              fontWeight: 700,
              color: 'var(--dark-900)',
              lineHeight: 1.25,
              marginBottom: '1rem',
              letterSpacing: '-0.02em',
            }}
          >
            Digital homes for independent bakeries.
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
              color: 'var(--text-muted)',
              lineHeight: 1.5,
              fontStyle: 'italic',
            }}
          >
            Turn Instagram interest into clear orders, better enquiries, and a brand customers remember.
          </p>
        </div>

        {/* Live Interactive Showcase Browser Mockup */}
        <div
          style={{
            maxWidth: '1080px',
            margin: '0 auto',
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            border: '1.5px solid rgba(0, 0, 0, 0.1)',
            boxShadow: 'var(--shadow-lg)',
            overflow: 'hidden',
          }}
        >
          {/* Top Browser Bar */}
          <div
            style={{
              backgroundColor: '#F3F4F6',
              padding: '0.85rem 1.5rem',
              borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            {/* Window Dots */}
            <div style={{ display: 'flex', gap: '6px' }}>
              <span style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#EF4444', display: 'inline-block' }}></span>
              <span style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#F59E0B', display: 'inline-block' }}></span>
              <span style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#10B981', display: 'inline-block' }}></span>
            </div>

            {/* Switchable Case Study Tabs */}
            <div style={{ display: 'flex', gap: '0.4rem', backgroundColor: '#FFFFFF', padding: '3px', borderRadius: 'var(--radius-pill)', border: '1px solid rgba(0,0,0,0.08)' }}>
              <button
                onClick={() => setActiveTab('bake')}
                style={{
                  padding: '0.35rem 1rem',
                  borderRadius: 'var(--radius-pill)',
                  border: 'none',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  backgroundColor: activeTab === 'bake' ? 'var(--dark-900)' : 'transparent',
                  color: activeTab === 'bake' ? '#FFFFFF' : 'var(--text-muted)',
                  transition: 'all 0.2s ease',
                }}
              >
                The Bake Studio by Shruti
              </button>
              <button
                onClick={() => setActiveTab('seri')}
                style={{
                  padding: '0.35rem 1rem',
                  borderRadius: 'var(--radius-pill)',
                  border: 'none',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  backgroundColor: activeTab === 'seri' ? 'var(--dark-900)' : 'transparent',
                  color: activeTab === 'seri' ? '#FFFFFF' : 'var(--text-muted)',
                  transition: 'all 0.2s ease',
                }}
              >
                Serí – The Gourmet Kitchen
              </button>
            </div>

            {/* Live Indicator */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', fontWeight: 600, color: '#059669' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981' }}></span>
              <span>Live Bakery System</span>
            </div>
          </div>

          {/* Preview Image Container */}
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', maxHeight: '540px', overflow: 'hidden', backgroundColor: '#181818' }}>
            <img
              src={activeTab === 'bake' ? '/images/thebakestudio_showcase.jpg' : '/images/seri_showcase.jpg'}
              alt="Bakery Digital Home Preview"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />

            {/* Floating Order Banner Pill */}
            <div
              style={{
                position: 'absolute',
                bottom: '1.5rem',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'rgba(18, 18, 18, 0.9)',
                backdropFilter: 'blur(12px)',
                color: '#FFFFFF',
                padding: '0.75rem 1.75rem',
                borderRadius: 'var(--radius-pill)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                fontSize: '0.88rem',
                border: '1px solid rgba(255,255,255,0.15)',
              }}
            >
              <span>✨ {activeTab === 'bake' ? 'Custom Lambeth & Korean Bento Cake Orders' : 'Artisanal French Pâtisserie & 14-Category Menu'}</span>
              <span style={{ width: '1px', height: '16px', backgroundColor: 'rgba(255,255,255,0.2)' }}></span>
              <span style={{ color: '#C3F53C', fontWeight: 700 }}>WhatsApp Pre-filled Checkout</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

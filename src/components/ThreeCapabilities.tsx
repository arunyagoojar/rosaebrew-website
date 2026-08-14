import React from 'react';

export const ThreeCapabilities: React.FC = () => {
  return (
    <section style={{ padding: '7rem 0', backgroundColor: 'var(--bg-main)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4.5rem auto' }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--dark-900)', textTransform: 'uppercase' }}>
            ✦ THE ROSAEBREW SYSTEM
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
              fontWeight: 800,
              color: 'var(--dark-900)',
              lineHeight: 1.15,
              marginTop: '0.75rem',
              letterSpacing: '-0.03em',
            }}
          >
            A tailored digital home crafted for how bakeries actually operate.
          </h2>
        </div>

        {/* 3 Tilted Colored Cards (From TURN.STUDIO Reference) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem',
            alignItems: 'stretch',
            maxWidth: '1140px',
            margin: '0 auto 4rem auto',
          }}
        >
          {/* Card 1: Pastel Blue (Tilted Left) */}
          <div
            className="tilted-card card-tilt-left"
            style={{
              backgroundColor: 'var(--pastel-blue)',
            }}
          >
            <div style={{ fontSize: '2.2rem', marginBottom: '1.25rem' }}>🎂</div>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.55rem', fontWeight: 800, color: 'var(--dark-900)', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Digital Product Catalogue
            </h3>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem', color: 'var(--dark-900)', fontWeight: 500 }}>
              <li>✓ Categorized Menu Architecture</li>
              <li>✓ 100% Eggless & Vegan Filters</li>
              <li>✓ High-Resolution Flavour Showcases</li>
              <li>✓ Portion & Serving Size Guides</li>
              <li>✓ Live Pricing & Seasonal Additions</li>
              <li>✓ Notice Period & Pre-order Badges</li>
            </ul>
          </div>

          {/* Card 2: Pastel Mint Green (Tilted Center) */}
          <div
            className="tilted-card card-tilt-center"
            style={{
              backgroundColor: 'var(--pastel-green)',
            }}
          >
            <div style={{ fontSize: '2.2rem', marginBottom: '1.25rem' }}>✨</div>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.55rem', fontWeight: 800, color: 'var(--dark-900)', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Bespoke Custom Cake Builder
            </h3>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem', color: 'var(--dark-900)', fontWeight: 500 }}>
              <li>✓ Occasion & Theme Selector</li>
              <li>✓ Tier & Weight Calculator (0.5kg to Multi-tier)</li>
              <li>✓ Signature Flavour Combinations</li>
              <li>✓ Event Date & Rush Notice Capture</li>
              <li>✓ Custom Inscription & Colour Palette Notes</li>
              <li>✓ Generates Quote-Ready WhatsApp Request</li>
            </ul>
          </div>

          {/* Card 3: Pastel Peach Cream (Tilted Right) */}
          <div
            className="tilted-card card-tilt-right"
            style={{
              backgroundColor: 'var(--pastel-peach)',
            }}
          >
            <div style={{ fontSize: '2.2rem', marginBottom: '1.25rem' }}>💬</div>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.55rem', fontWeight: 800, color: 'var(--dark-900)', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Direct WhatsApp & Order Hub
            </h3>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem', color: 'var(--dark-900)', fontWeight: 500 }}>
              <li>✓ Formatted WhatsApp Order Inquiries</li>
              <li>✓ Studio Pickup & Delivery Area Guidance</li>
              <li>✓ Swiggy, Zomato & Map Pin Integration</li>
              <li>✓ Clean Instagram Bio Link Destination</li>
              <li>✓ Zero Monthly Marketplace Commissions</li>
              <li>✓ You Retain 100% of Your Customer Relationships</li>
            </ul>
          </div>
        </div>

        {/* Action Button */}
        <div style={{ textAlign: 'center' }}>
          <a
            href="https://wa.me/919257213228?text=Hi%20Rosaebrew,%20I%20want%20to%20see%20how%20this%20works%20for%20my%20bakery."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill-black"
            style={{ padding: '0.9rem 2.2rem', fontSize: '0.92rem' }}
          >
            <span>Discuss Your Bakery Setup</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

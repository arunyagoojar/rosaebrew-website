import React from 'react';

export const BakeryProblemStatement: React.FC = () => {
  return (
    <section style={{ padding: '6rem 0', backgroundColor: '#FFFFFF', borderTop: '1px solid rgba(0,0,0,0.06)', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
      <div className="container-narrow">
        {/* Baker Whisk Mascot Badge */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: '#FDECD2',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.8rem',
              boxShadow: '0 4px 12px rgba(253, 236, 210, 0.8)',
            }}
          >
            🧑‍🍳
          </div>
        </div>

        {/* Big Observant Headline */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.8rem, 3.8vw, 2.9rem)',
              fontWeight: 800,
              color: 'var(--dark-900)',
              lineHeight: 1.2,
              letterSpacing: '-0.03em',
              marginBottom: '1.25rem',
            }}
          >
            Your cakes take 12 hours to bake and perfect. Customer orders shouldn't take 45 minutes of chat back-and-forth.
          </h2>

          <p
            style={{
              fontSize: '1.1rem',
              color: 'var(--text-muted)',
              lineHeight: 1.7,
              maxWidth: '680px',
              margin: '0 auto',
            }}
          >
            We build digital homes specifically for independent bakeries, artisanal pâtisseries, and bespoke cake studios tired of fragmented DMs, generic Linktrees, and messy Google Forms.
          </p>
        </div>

        {/* Side by Side Reality Check: The Fragmented DM vs The Rosaebrew System */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          {/* Box 1: The Fragmented Daily Reality */}
          <div
            style={{
              backgroundColor: '#FFF5F5',
              borderRadius: '20px',
              padding: '2.5rem 2rem',
              border: '1.5px solid #FED7D7',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '1.3rem' }}>❌</span>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#9B1C1C' }}>
                The Fragmented DM Loop
              </h3>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.92rem', color: '#771D1D' }}>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span>•</span>
                <span>You stop kitchen prep to repeatedly send 30 cake photos and price lists in WhatsApp.</span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span>•</span>
                <span>Customers ask *"Is this eggless?"* and *"What flavours do you have?"* for the tenth time today.</span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span>•</span>
                <span>Custom cake enquiries arrive without required dates, size, or reference themes.</span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span>•</span>
                <span>Linktree has 8 disconnected buttons and Google Forms feel stiff and robotic.</span>
              </li>
            </ul>
          </div>

          {/* Box 2: The Rosaebrew System */}
          <div
            style={{
              backgroundColor: '#F0FDF4',
              borderRadius: '20px',
              padding: '2.5rem 2rem',
              border: '1.5px solid #BBF7D0',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '1.3rem' }}>✨</span>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#166534' }}>
                The Rosaebrew Digital Home
              </h3>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.92rem', color: '#14532D' }}>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span>✓</span>
                <span><strong>One clean link in bio:</strong> Customers browse your entire signature catalogue with high-res editorial photography.</span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span>✓</span>
                <span><strong>Dietary & flavour transparency:</strong> Clear 100% eggless badges, flavour profiles, and serving sizes.</span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span>✓</span>
                <span><strong>Structured Custom Cake Builder:</strong> Captures occasion, weight/tiers, date, and notes upfront.</span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span>✓</span>
                <span><strong>Instant WhatsApp Checkout:</strong> Pre-filled formatted message arrives in your WhatsApp ready to quote and confirm.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

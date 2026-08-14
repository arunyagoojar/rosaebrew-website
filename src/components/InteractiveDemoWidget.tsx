import React, { useState } from 'react';

export const InteractiveDemoWidget: React.FC = () => {
  const [occasion, setOccasion] = useState('Birthday Celebration');
  const [flavor, setFlavor] = useState('Belgian Dark Chocolate Truffle');
  const [size, setSize] = useState('1.0 Kg');
  const [dietary, setDietary] = useState('100% Eggless');
  const [date, setDate] = useState('This Saturday (2:00 PM)');

  const occasions = ['Birthday Celebration', 'Wedding Anniversary', 'Bridal Shower', 'Intimate Milestone'];
  const flavors = ['Belgian Dark Chocolate Truffle', 'Lotus Biscoff Salted Caramel', 'Fresh Mango & Vanilla Bean', 'Red Velvet Cream Cheese'];
  const sizes = ['0.5 Kg (Bento Duo)', '1.0 Kg (Signature Tier)', '2.0 Kg (Two-Tier Festive)'];
  const dates = ['This Saturday (2:00 PM)', 'Next Sunday (4:00 PM)', 'Tomorrow (Rush Order)'];

  return (
    <section style={{ padding: '7rem 0', backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--dark-900)', textTransform: 'uppercase' }}>
            ✦ TRY THE LIVE ORDER EXPERIENCE
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(2rem, 4.2vw, 3.2rem)',
              fontWeight: 800,
              color: 'var(--dark-900)',
              lineHeight: 1.2,
              marginTop: '0.75rem',
              letterSpacing: '-0.03em',
            }}
          >
            See how your customers will order from your bakery.
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '0.5rem' }}>
            No more incomplete DMs. Test the custom cake inquiry builder below:
          </p>
        </div>

        {/* 2-column Interactive Sandbox */}
        <div
          style={{
            maxWidth: '1080px',
            margin: '0 auto',
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            padding: '2.5rem',
            border: '1.5px solid rgba(0, 0, 0, 0.08)',
            boxShadow: 'var(--shadow-md)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          {/* Left: Interactive Controls */}
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--dark-900)' }}>
              1. Customer Selects Preferences:
            </h3>

            {/* Occasion */}
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={labelStyle}>Occasion</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.4rem' }}>
                {occasions.map((occ) => (
                  <button
                    key={occ}
                    onClick={() => setOccasion(occ)}
                    style={{
                      ...pillToggleStyle,
                      backgroundColor: occasion === occ ? 'var(--dark-900)' : '#F3F4F6',
                      color: occasion === occ ? '#FFFFFF' : 'var(--text-dark)',
                    }}
                  >
                    {occ}
                  </button>
                ))}
              </div>
            </div>

            {/* Flavor */}
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={labelStyle}>Signature Flavour</label>
              <select
                value={flavor}
                onChange={(e) => setFlavor(e.target.value)}
                style={selectStyle}
              >
                {flavors.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
            </div>

            {/* Size */}
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={labelStyle}>Cake Size & Weight</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.4rem' }}>
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    style={{
                      ...pillToggleStyle,
                      backgroundColor: size === s ? 'var(--dark-900)' : '#F3F4F6',
                      color: size === s ? '#FFFFFF' : 'var(--text-dark)',
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Dietary */}
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={labelStyle}>Dietary Preference</label>
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.4rem' }}>
                {['100% Eggless', 'Classic Butter Bake'].map((d) => (
                  <button
                    key={d}
                    onClick={() => setDietary(d)}
                    style={{
                      ...pillToggleStyle,
                      backgroundColor: dietary === d ? '#15803D' : '#F3F4F6',
                      color: dietary === d ? '#FFFFFF' : 'var(--text-dark)',
                    }}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Date Selection */}
            <div>
              <label style={labelStyle}>Required By Date</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.4rem' }}>
                {dates.map((d) => (
                  <button
                    key={d}
                    onClick={() => setDate(d)}
                    style={{
                      ...pillToggleStyle,
                      backgroundColor: date === d ? 'var(--dark-900)' : '#F3F4F6',
                      color: date === d ? '#FFFFFF' : 'var(--text-dark)',
                    }}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Real-time WhatsApp Output Message Preview */}
          <div
            style={{
              backgroundColor: '#0C1317',
              borderRadius: '20px',
              padding: '2rem',
              color: '#FFFFFF',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
              position: 'relative',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '1.2rem' }}>💬</span>
                <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#25D366' }}>
                  Incoming WhatsApp Order Summary
                </span>
              </div>
              <span style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>Live Demo</span>
            </div>

            <div
              style={{
                backgroundColor: '#1F2C34',
                borderRadius: '12px',
                padding: '1.25rem',
                fontSize: '0.86rem',
                lineHeight: 1.6,
                color: '#E9EDEF',
                borderLeft: '4px solid #25D366',
                fontFamily: 'monospace',
              }}
            >
              <div style={{ color: '#25D366', fontWeight: 700, marginBottom: '0.5rem' }}>
                🎂 NEW BESPOKE CAKE ENQUIRY
              </div>
              <div>• <strong>Occasion:</strong> {occasion}</div>
              <div>• <strong>Flavour:</strong> {flavor}</div>
              <div>• <strong>Size / Weight:</strong> {size}</div>
              <div>• <strong>Dietary:</strong> {dietary}</div>
              <div>• <strong>Required By:</strong> {date}</div>
              <div style={{ marginTop: '0.75rem', color: '#9CA3AF', fontSize: '0.78rem' }}>
                ✦ Customer: "Please confirm availability and share final quote."
              </div>
            </div>

            <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
              <span style={{ fontSize: '0.8rem', color: '#9CA3AF' }}>
                ✓ Result: You can quote and confirm in 1 click instead of 10 messages.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const labelStyle: React.CSSProperties = {
  fontSize: '0.78rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  color: 'var(--text-muted)',
};

const pillToggleStyle: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: '0.82rem',
  fontWeight: 600,
  padding: '0.45rem 1rem',
  borderRadius: 'var(--radius-pill)',
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
};

const selectStyle: React.CSSProperties = {
  width: '100%',
  marginTop: '0.4rem',
  padding: '0.65rem 1rem',
  borderRadius: '10px',
  border: '1.5px solid #E5E7EB',
  backgroundColor: '#F9FAFB',
  fontFamily: 'var(--font-sans)',
  fontSize: '0.9rem',
  outline: 'none',
};

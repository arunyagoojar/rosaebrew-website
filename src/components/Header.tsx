import React from 'react';

export const Header: React.FC = () => {
  return (
    <header style={{ padding: '1.75rem 0', backgroundColor: 'var(--bg-main)' }}>
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Left: Action Pill Button */}
        <div>
          <a
            href="https://wa.me/919257213228?text=Hi%20Rosaebrew,%20I%20run%20a%20bakery%20and%20want%20to%20streamline%20my%20orders%20and%20digital%20catalogue."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill-white"
            style={{ fontSize: '0.84rem' }}
          >
            <span>Let's Talk Bakery</span>
            <span style={{ fontSize: '0.9rem' }}>💬</span>
          </a>
        </div>

        {/* Center: Small Brand Mark for mobile if needed */}
        <div style={{ display: 'none' }}>
          <span className="font-display" style={{ fontSize: '1.2rem' }}>
            ROSAEBREW
          </span>
        </div>

        {/* Right: Quick Menu Pill */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <a href="#work" className="btn-pill-white" style={{ fontSize: '0.84rem' }}>
            Our Work
          </a>
          <a
            href="https://wa.me/919257213228?text=Hi%20Rosaebrew,%20let's%20connect."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill-black"
            style={{ fontSize: '0.84rem' }}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
};

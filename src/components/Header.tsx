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
        {/* Left Pill Button */}
        <div>
          <a
            href="https://wa.me/919257213228?text=Hi%20Rosaebrew,%20I%20would%20like%20to%20start%20a%20website%20project%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill-white"
          >
            <span>Let's Start a Project</span>
          </a>
        </div>

        {/* Center Brand Mark */}
        <div style={{ textAlign: 'center' }}>
          <span
            className="font-display"
            style={{
              fontSize: '1.25rem',
              color: 'var(--text-dark)',
              letterSpacing: '-0.02em',
            }}
          >
            ROSAEBREW
          </span>
        </div>

        {/* Right Menu Button */}
        <div>
          <a href="#services" className="btn-pill-white">
            <span>Menu</span>
          </a>
        </div>
      </div>
    </header>
  );
};

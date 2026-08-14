import React from 'react';

interface HeaderProps {
  onOpenProjectModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenProjectModal }) => {
  return (
    <header style={{ padding: '1.5rem 0', backgroundColor: 'var(--bg-main)', position: 'relative', zIndex: 10 }}>
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Left: Brand Logo */}
        <div>
          <a
            href="#"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <span
              className="font-display"
              style={{
                fontSize: '1.35rem',
                color: 'var(--text-dark)',
                letterSpacing: '-0.03em',
              }}
            >
              ROSAEBREW
            </span>
          </a>
        </div>

        {/* Right: Contact Button */}
        <div>
          <button
            onClick={onOpenProjectModal}
            className="btn-pill-white"
            style={{ fontSize: '0.86rem', padding: '0.6rem 1.4rem', cursor: 'pointer' }}
          >
            <span>Contact</span>
          </button>
        </div>
      </div>
    </header>
  );
};

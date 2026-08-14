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
        {/* Left Action Button */}
        <div>
          <button
            onClick={onOpenProjectModal}
            className="btn-pill-white"
            style={{ fontSize: '0.84rem' }}
          >
            <span>Let's Start a Project</span>
          </button>
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

        {/* Right Action Button */}
        <div>
          <button
            onClick={onOpenProjectModal}
            className="btn-pill-white"
            style={{ fontSize: '0.84rem' }}
          >
            <span>Contact</span>
          </button>
        </div>
      </div>
    </header>
  );
};

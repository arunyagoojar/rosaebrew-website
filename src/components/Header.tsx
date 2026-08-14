import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onOpenProjectModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenProjectModal }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar when scrolled past the hero big title (threshold ~260px)
      if (window.scrollY > 240) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '1rem 0',
        backgroundColor: 'rgba(247, 247, 247, 0.88)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: scrolled ? 1 : 0,
        pointerEvents: scrolled ? 'auto' : 'none',
        transform: scrolled ? 'translateY(0)' : 'translateY(-100%)',
        boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.04)' : 'none',
      }}
    >
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
                fontSize: '1.25rem',
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
            style={{ fontSize: '0.84rem', padding: '0.55rem 1.3rem', cursor: 'pointer' }}
          >
            <span>Contact</span>
          </button>
        </div>
      </div>
    </header>
  );
};

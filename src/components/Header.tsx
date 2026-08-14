import React, { useState, useEffect } from 'react';
import { PointerIcon } from './PointerIcon';

interface HeaderProps {
  onOpenProjectModal: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenProjectModal, theme, onToggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMenuWithAnimation = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMobileMenuOpen(false);
      setIsClosing(false);
    }, 240);
  };

  const navLinks = [
    { label: 'About Studio', href: '#about' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Selected Work', href: '#work' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Values', href: '#values' },
  ];

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: scrolled ? 'var(--header-bg)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: `1px solid ${scrolled ? 'var(--border-subtle)' : 'transparent'}`,
          transition: 'all 0.25s ease',
        }}
      >
        <div
          className="container-wide"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '74px',
          }}
        >
          {/* Brand Logo with Rounded Mouse Pointer */}
          <a
            href="#"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.65rem',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <PointerIcon size={24} strokeWidth={8} />
            </div>

            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 800,
                fontSize: '1.28rem',
                color: 'var(--text-primary)',
                letterSpacing: '-0.03em',
              }}
            >
              RoséBrew
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.35rem',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  color: 'var(--text-muted)',
                  padding: '0.45rem 0.95rem',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  transition: 'color 0.18s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--text-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-muted)';
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Actions: Theme Toggle + Contact Us */}
          <div className="desktop-actions" style={{ display: 'none', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={onToggleTheme}
              className="theme-toggle-btn"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            <button
              onClick={onOpenProjectModal}
              className="sivoro-btn-light"
              style={{
                fontSize: '0.88rem',
                padding: '0.6rem 1.45rem',
              }}
            >
              <span>Contact Us</span>
            </button>
          </div>

          {/* Mobile Only: Sleek Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="mobile-only-burger"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              border: '1px solid var(--border-medium)',
              backgroundColor: 'var(--bg-card)',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-card)',
            }}
            aria-label="Open mobile navigation"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="8" x2="20" y2="8" />
              <line x1="4" y1="16" x2="20" y2="16" />
            </svg>
          </button>
        </div>
      </header>

      {/* =================================================================
          ANIMATED FULL-SCREEN MOBILE MENU OVERLAY (With Enter & Exit Animations)
          ================================================================= */}
      {mobileMenuOpen && (
        <div
          className={`mobile-overlay-backdrop ${isClosing ? 'closing' : ''}`}
          onClick={closeMenuWithAnimation}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <div
            className={`mobile-drawer-sheet ${isClosing ? 'closing' : ''}`}
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '88%',
              maxWidth: '380px',
              height: '100%',
              backgroundColor: 'var(--bg-canvas)',
              borderLeft: '1px solid var(--border-subtle)',
              padding: '1.75rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.25)',
              overflowY: 'auto',
            }}
          >
            {/* Top Sheet Header */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <PointerIcon size={22} strokeWidth={8} />
                  <span style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--text-primary)' }}>RoséBrew</span>
                </div>

                <button
                  onClick={closeMenuWithAnimation}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    border: '1px solid var(--border-subtle)',
                    backgroundColor: 'var(--bg-surface)',
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    fontSize: '1rem',
                  }}
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              {/* Navigation Links */}
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {navLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    onClick={closeMenuWithAnimation}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1.15rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      textDecoration: 'none',
                      padding: '0.75rem 1rem',
                      borderRadius: '12px',
                      backgroundColor: 'transparent',
                      transition: 'all 0.18s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--bg-card)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    <span>{link.label}</span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>→</span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Bottom Actions inside Mobile Menu */}
            <div style={{ paddingTop: '2rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              
              {/* Mobile Theme Toggle Card */}
              <div
                onClick={onToggleTheme}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.85rem 1.1rem',
                  borderRadius: '16px',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  cursor: 'pointer',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  {theme === 'dark' ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#F472B6' }}>
                      <circle cx="12" cy="12" r="5" />
                      <line x1="12" y1="1" x2="12" y2="3" />
                      <line x1="12" y1="21" x2="12" y2="23" />
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                      <line x1="1" y1="12" x2="3" y2="12" />
                      <line x1="21" y1="12" x2="23" y2="12" />
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#F472B6' }}>
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                  )}
                  <span style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                  </span>
                </div>

                <div
                  style={{
                    padding: '0.25rem 0.65rem',
                    borderRadius: '9999px',
                    backgroundColor: 'var(--bg-canvas)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'var(--text-muted)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  Tap to Switch
                </div>
              </div>

              {/* Mobile Contact Button */}
              <button
                onClick={() => {
                  closeMenuWithAnimation();
                  onOpenProjectModal();
                }}
                className="sivoro-btn-dark"
                style={{ width: '100%', height: '44px', justifyContent: 'center' }}
              >
                <span>Start a Project</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .mobile-overlay-backdrop {
          animation: fadeIn 0.24s ease-out forwards;
        }
        .mobile-overlay-backdrop.closing {
          animation: fadeOut 0.24s ease-in forwards;
        }

        .mobile-drawer-sheet {
          animation: slideInRight 0.26s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .mobile-drawer-sheet.closing {
          animation: slideOutRight 0.24s cubic-bezier(0.7, 0, 0.84, 0) forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }

        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @keyframes slideOutRight {
          from { transform: translateX(0); }
          to { transform: translateX(100%); }
        }

        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-actions {
            display: flex !important;
          }
          .mobile-only-burger {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

import React, { useRef, useState } from 'react';
import { PointerIcon } from './PointerIcon';
import {
  NotionCreatorDesk,
  NotionMenuBaker,
  NotionContactPhone,
  NotionOwnershipKey,
  NotionRapidLaunch,
} from './NotionIllustrations';

interface HeroProps {
  onOpenProjectModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenProjectModal }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const cards = [
    {
      tag: 'DESIGN',
      tagColor: '#86EFAC',
      title: 'Custom Websites',
      desc: 'Clean layouts and unique visual style made specifically for your brand.',
      illustration: <NotionCreatorDesk size="100%" />,
    },
    {
      tag: 'SHOWCASE',
      tagColor: '#FDE68A',
      title: 'Menus & Catalogs',
      desc: 'Clear digital menus and product catalogs to present your offerings.',
      illustration: <NotionMenuBaker size="100%" />,
    },
    {
      tag: 'CONTACT',
      tagColor: '#BAE6FD',
      title: 'Simple Inquiries',
      desc: 'Easy contact links and forms that send inquiries directly to your inbox.',
      illustration: <NotionContactPhone size="100%" />,
    },
    {
      tag: 'OWNERSHIP',
      tagColor: '#FCD34D',
      title: '100% Ownership',
      desc: 'You own your code, domain, and assets with zero monthly platform lock-in.',
      illustration: <NotionOwnershipKey size="100%" />,
    },
    {
      tag: 'TIMELINE',
      tagColor: '#FBCFE8',
      title: '5 to 10 Days',
      desc: 'Fast and reliable delivery from initial idea to live launch on your domain.',
      illustration: <NotionRapidLaunch size="100%" />,
    },
  ];

  const marqueeItems = [
    { text: 'Fixed Upfront Pricing', color: '#F472B6' },
    { text: 'Custom Website Design', color: '#FDE68A' },
    { text: '100% Code Ownership', color: '#86EFAC' },
    { text: '5 to 10 Days Delivery', color: '#FBCFE8' },
    { text: 'Direct Collaboration', color: '#BAE6FD' },
  ];

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const scrollLeft = carouselRef.current.scrollLeft;
    const cardWidth = 225;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveCardIndex(Math.min(Math.max(index, 0), cards.length - 1));
  };

  return (
    <section style={{ position: 'relative', overflow: 'hidden', paddingTop: 'clamp(3rem, 6vw, 4.5rem)', paddingBottom: 'clamp(3.5rem, 6vw, 5.5rem)', backgroundColor: 'var(--bg-canvas)' }}>
      
      {/* =================================================================
          MULTI-LAYER DEPTH BUTTERFLY POINTERS (Zero Pink, Deep Blur & Fast Motion)
          ================================================================= */}
      
      {/* --- LAYER 1: Deep Background Layer (Behind Text, Blurry, Active Fast Motion) --- */}
      <div className="butterfly-bg butterfly-bg-1" style={{ position: 'absolute', top: '16%', left: '32%', zIndex: 0, pointerEvents: 'none' }}>
        <PointerIcon size={18} fill="#86EFAC" strokeWidth={7} color="var(--text-primary)" style={{ filter: 'blur(2.2px)', opacity: 0.45 }} />
      </div>

      <div className="butterfly-bg butterfly-bg-2" style={{ position: 'absolute', top: '28%', right: '28%', zIndex: 0, pointerEvents: 'none' }}>
        <PointerIcon size={20} fill="#BAE6FD" strokeWidth={7} color="var(--text-primary)" style={{ filter: 'blur(2px)', opacity: 0.45 }} />
      </div>

      <div className="butterfly-bg butterfly-bg-3" style={{ position: 'absolute', top: '48%', left: '46%', zIndex: 0, pointerEvents: 'none' }}>
        <PointerIcon size={16} fill="#FDE68A" strokeWidth={7} color="var(--text-primary)" style={{ filter: 'blur(2.4px)', opacity: 0.4 }} />
      </div>

      {/* --- LAYER 2: Midground Layer (Side Margins, Crisp & Lively Flutter) --- */}
      <div className="roaming-butterfly butterfly-mid-1" style={{ position: 'absolute', top: '12%', left: '6%', zIndex: 1, pointerEvents: 'none' }}>
        <PointerIcon size={30} fill="#DDD6FE" strokeWidth={6.5} color="var(--text-primary)" style={{ filter: 'drop-shadow(0 8px 16px rgba(221, 214, 254, 0.45))' }} />
      </div>

      <div className="roaming-butterfly butterfly-mid-2" style={{ position: 'absolute', top: '15%', right: '7%', zIndex: 1, pointerEvents: 'none' }}>
        <PointerIcon size={28} fill="#86EFAC" strokeWidth={6.5} color="var(--text-primary)" style={{ filter: 'drop-shadow(0 8px 16px rgba(134, 239, 172, 0.45))' }} />
      </div>

      <div className="roaming-butterfly butterfly-mid-3" style={{ position: 'absolute', top: '46%', right: '4%', zIndex: 1, pointerEvents: 'none' }}>
        <PointerIcon size={32} fill="#BAE6FD" strokeWidth={6.5} color="var(--text-primary)" style={{ filter: 'drop-shadow(0 10px 22px rgba(186, 230, 253, 0.5))' }} />
      </div>

      <div className="roaming-butterfly butterfly-mid-4" style={{ position: 'absolute', top: '42%', left: '4%', zIndex: 1, pointerEvents: 'none' }}>
        <PointerIcon size={26} fill="#FCD34D" strokeWidth={6.5} color="var(--text-primary)" style={{ filter: 'drop-shadow(0 6px 14px rgba(252, 211, 77, 0.4))' }} />
      </div>

      {/* Content Container (Layer 2, Above deep background pointers) */}
      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        
        {/* Editorial Headline */}
        <div className="scroll-reveal" style={{ maxWidth: '820px', margin: '0 auto 1.25rem auto' }}>
          <h1
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(2.2rem, 5.5vw, 4.4rem)',
              fontWeight: 700,
              lineHeight: 1.14,
              letterSpacing: '-0.035em',
              color: 'var(--text-primary)',
            }}
          >
            Distinctive websites for <br />
            <span className="italic-serif" style={{ fontWeight: 400, color: 'var(--text-primary)' }}>
              independent brands
            </span>
          </h1>
        </div>

        {/* Studio Subtitle */}
        <div className="scroll-reveal stagger-1" style={{ maxWidth: '580px', margin: '0 auto 1.75rem auto', padding: '0 0.5rem' }}>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
              fontWeight: 400,
            }}
          >
            We build custom websites, digital menus, and brand showcases for creative businesses. Clean code, beautiful typography, and 100% full ownership.
          </p>
        </div>

        {/* Action Pill Buttons (Single Line on All Mobile Screens) */}
        <div
          className="scroll-reveal stagger-2 hero-button-group"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.65rem',
            flexWrap: 'nowrap',
            marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
          }}
        >
          <a
            href="#work"
            className="sivoro-btn-light hero-action-btn"
          >
            <span>Explore Work</span>
          </a>

          <button
            onClick={onOpenProjectModal}
            className="sivoro-btn-dark hero-action-btn"
          >
            <span>Start a Project</span>
            <span>→</span>
          </button>
        </div>

        {/* =================================================================
            HERO 5-BOX BENTO STRIP (Responsive Swipe Carousel on Mobile with Side Blur)
            ================================================================= */}
        <div className="scroll-reveal-scale stagger-3" style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div className="hero-scroll-wrapper" style={{ position: 'relative' }}>
            <div
              ref={carouselRef}
              onScroll={handleScroll}
              className="hero-cards-container"
            >
              {cards.map((card, idx) => (
                <div
                  key={idx}
                  className="hero-feature-card"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderRadius: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    border: '1px solid var(--border-subtle)',
                    boxShadow: 'var(--shadow-card)',
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                    textAlign: 'left',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-float)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-card)';
                  }}
                >
                  {/* Big, Transparent Doodle Container */}
                  <div
                    className="hero-card-illustration-wrap"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                    }}
                  >
                    {card.illustration}
                  </div>

                  {/* Exact Uniform Height Text Area */}
                  <div>
                    <div
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        color: 'var(--text-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        height: '18px',
                        marginBottom: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                      }}
                    >
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: card.tagColor }} />
                      {card.tag}
                    </div>

                    <div
                      style={{
                        fontSize: '1.08rem',
                        fontWeight: 800,
                        color: 'var(--text-primary)',
                        letterSpacing: '-0.02em',
                        height: '24px',
                        marginBottom: '4px',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {card.title}
                    </div>

                    <div
                      style={{
                        fontSize: '0.78rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.4,
                        height: '38px',
                        overflow: 'hidden',
                      }}
                    >
                      {card.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Swipe Pagination Dots */}
          <div className="mobile-swipe-indicator" style={{ display: 'none', justifyContent: 'center', alignItems: 'center', gap: '0.4rem', marginTop: '1rem', marginBottom: '2rem' }}>
            {cards.map((_, i) => (
              <div
                key={i}
                style={{
                  width: activeCardIndex === i ? '20px' : '6px',
                  height: '6px',
                  borderRadius: '9999px',
                  backgroundColor: activeCardIndex === i ? 'var(--text-primary)' : 'var(--border-medium)',
                  transition: 'all 0.25s ease',
                }}
              />
            ))}
          </div>
        </div>

        {/* =================================================================
            INFINITE MARQUEE ANIMATION TICKER
            ================================================================= */}
        <div
          className="scroll-reveal stagger-4 marquee-wrapper"
          style={{
            paddingTop: '2.5rem',
            marginTop: '1.5rem',
            borderTop: '1px solid var(--border-subtle)',
            overflow: 'hidden',
            position: 'relative',
            whiteSpace: 'nowrap',
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
          <div className="marquee-track">
            {/* First Set */}
            {marqueeItems.map((item, i) => (
              <span key={`a-${i}`} className="marquee-item">
                <span style={{ color: item.color, fontSize: '1.1rem', marginRight: '0.45rem' }}>•</span>
                {item.text}
              </span>
            ))}
            {/* Duplicate Set for Seamless Loop */}
            {marqueeItems.map((item, i) => (
              <span key={`b-${i}`} className="marquee-item">
                <span style={{ color: item.color, fontSize: '1.1rem', marginRight: '0.45rem' }}>•</span>
                {item.text}
              </span>
            ))}
            {/* Triplicate Set for Large Screens */}
            {marqueeItems.map((item, i) => (
              <span key={`c-${i}`} className="marquee-item">
                <span style={{ color: item.color, fontSize: '1.1rem', marginRight: '0.45rem' }}>•</span>
                {item.text}
              </span>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        /* =================================================================
           DYNAMIC ROAMING BUTTERFLY ANIMATIONS (Active Flutter & Depth Motion)
           ================================================================= */
        
        /* Deep Background Fast Wide Flights */
        @keyframes bgFlutter1 {
          0% { transform: translate(0, 0) rotate(0deg) scale(1); }
          25% { transform: translate(65px, -35px) rotate(15deg) scale(1.1); }
          50% { transform: translate(-45px, 28px) rotate(-12deg) scale(0.9); }
          75% { transform: translate(30px, 45px) rotate(8deg) scale(1.05); }
          100% { transform: translate(-55px, -20px) rotate(-14deg) scale(0.95); }
        }

        @keyframes bgFlutter2 {
          0% { transform: translate(0, 0) rotate(0deg) scale(1); }
          30% { transform: translate(-70px, 40px) rotate(-18deg) scale(0.9); }
          60% { transform: translate(50px, -30px) rotate(14deg) scale(1.1); }
          85% { transform: translate(-25px, -45px) rotate(-8deg) scale(0.95); }
          100% { transform: translate(60px, 25px) rotate(12deg) scale(1.05); }
        }

        @keyframes bgFlutter3 {
          0% { transform: translate(0, 0) rotate(0deg) scale(1); }
          35% { transform: translate(55px, 35px) rotate(16deg) scale(1.12); }
          70% { transform: translate(-60px, -25px) rotate(-15deg) scale(0.88); }
          100% { transform: translate(35px, -40px) rotate(10deg) scale(1.02); }
        }

        /* Midground Dynamic Flutter Flights */
        @keyframes midFlutter1 {
          0% { transform: translate(0, 0) rotate(0deg); }
          30% { transform: translate(38px, -28px) rotate(12deg) scale(1.06); }
          65% { transform: translate(-22px, 32px) rotate(-10deg) scale(0.94); }
          100% { transform: translate(25px, 18px) rotate(6deg) scale(1.02); }
        }

        @keyframes midFlutter2 {
          0% { transform: translate(0, 0) rotate(0deg); }
          35% { transform: translate(-35px, 38px) rotate(-14deg) scale(0.92); }
          70% { transform: translate(28px, -24px) rotate(10deg) scale(1.08); }
          100% { transform: translate(-18px, -30px) rotate(-6deg) scale(0.96); }
        }

        @keyframes midFlutter3 {
          0% { transform: translate(0, 0) rotate(0deg); }
          30% { transform: translate(-45px, -32px) rotate(-12deg) scale(1.08); }
          70% { transform: translate(32px, 26px) rotate(15deg) scale(0.92); }
          100% { transform: translate(-20px, 15px) rotate(-8deg) scale(1.02); }
        }

        @keyframes midFlutter4 {
          0% { transform: translate(0, 0) rotate(0deg); }
          40% { transform: translate(40px, 24px) rotate(14deg) scale(0.94); }
          75% { transform: translate(-28px, -30px) rotate(-10deg) scale(1.06); }
          100% { transform: translate(20px, -12px) rotate(8deg) scale(0.98); }
        }

        /* Active, snappier flight animation timings */
        .butterfly-bg-1 { animation: bgFlutter1 5.5s ease-in-out infinite alternate; }
        .butterfly-bg-2 { animation: bgFlutter2 6.5s ease-in-out infinite alternate; }
        .butterfly-bg-3 { animation: bgFlutter3 5s ease-in-out infinite alternate; }

        .butterfly-mid-1 { animation: midFlutter1 5.8s ease-in-out infinite alternate; }
        .butterfly-mid-2 { animation: midFlutter2 6.2s ease-in-out infinite alternate; }
        .butterfly-mid-3 { animation: midFlutter3 5.2s ease-in-out infinite alternate; }
        .butterfly-mid-4 { animation: midFlutter4 6.8s ease-in-out infinite alternate; }

        /* Mobile Screen Adjustments (Preserve Active Flutter Animations) */
        @media (max-width: 768px) {
          .butterfly-mid-3, .butterfly-mid-4, .butterfly-bg-3 {
            display: none !important;
          }
          .butterfly-bg-1 {
            top: 10% !important;
            left: 20% !important;
            opacity: 0.4 !important;
          }
          .butterfly-bg-2 {
            top: 24% !important;
            right: 15% !important;
            opacity: 0.4 !important;
          }
          .butterfly-mid-1 {
            top: 3% !important;
            left: 2% !important;
          }
          .butterfly-mid-2 {
            top: 5% !important;
            right: 3% !important;
          }
        }

        /* Hero Action Buttons on Small Mobile */
        @media (max-width: 480px) {
          .hero-action-btn {
            flex: 1 !important;
            max-width: 175px !important;
            padding: 0.55rem 0.75rem !important;
            font-size: 0.82rem !important;
            white-space: nowrap !important;
            height: 38px !important;
            justify-content: center !important;
          }
        }

        /* Desktop: 5-column grid */
        @media (min-width: 900px) {
          .hero-cards-container {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 1.15rem;
          }
          .hero-feature-card {
            height: 310px;
            padding: 1.5rem 1.25rem;
          }
          .hero-card-illustration-wrap {
            height: 130px;
          }
        }

        /* Mobile / Tablet: Horizontal Swipe Carousel with Side Blur Effect */
        @media (max-width: 899px) {
          .hero-scroll-wrapper {
            position: relative;
            mask-image: linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%);
            -webkit-mask-image: linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%);
          }
          .hero-scroll-wrapper::before,
          .hero-scroll-wrapper::after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            width: 24px;
            pointer-events: none;
            z-index: 10;
            backdrop-filter: blur(3px);
            -webkit-backdrop-filter: blur(3px);
          }
          .hero-scroll-wrapper::before {
            left: 0;
            background: linear-gradient(to right, var(--bg-canvas), transparent);
          }
          .hero-scroll-wrapper::after {
            right: 0;
            background: linear-gradient(to left, var(--bg-canvas), transparent);
          }
          .hero-cards-container {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            gap: 1rem;
            padding: 0.5rem 1.5rem 0.5rem 1.5rem;
            scroll-padding: 0 1.5rem;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }
          .hero-cards-container::-webkit-scrollbar {
            display: none;
          }
          .hero-feature-card {
            flex: 0 0 220px;
            scroll-snap-align: center;
            height: 250px;
            padding: 1.15rem 1rem;
            border-radius: 20px;
          }
          .hero-card-illustration-wrap {
            height: 100px;
          }
          .mobile-swipe-indicator {
            display: flex !important;
          }
        }

        /* Infinite Marquee Track Animation */
        .marquee-track {
          display: inline-flex;
          align-items: center;
          gap: 2.5rem;
          animation: marqueeScroll 22s linear infinite;
          will-change: transform;
        }

        .marquee-item {
          display: inline-flex;
          align-items: center;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--text-muted);
          letter-spacing: 0.05em;
          text-transform: uppercase;
          flex-shrink: 0;
        }

        @keyframes marqueeScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .marquee-wrapper:hover .marquee-track {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

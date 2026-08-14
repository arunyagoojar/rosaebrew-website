import React from 'react';

interface MascotStatementProps {
  onOpenProjectModal?: () => void;
}

export const MascotStatement: React.FC<MascotStatementProps> = ({ onOpenProjectModal }) => {
  return (
    <section style={{ padding: '6rem 0', backgroundColor: '#FFFFFF', borderTop: '1px solid rgba(0,0,0,0.06)', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
      <div className="container-narrow" style={{ textAlign: 'center' }}>
        {/* Exact Illustrated Pencil-Carrying Mascot Vector from TURN.STUDIO */}
        <div style={{ marginBottom: '2.5rem', display: 'flex', justifyContent: 'center' }}>
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
            {/* Giant Striped Stylus / Pencil */}
            <g transform="rotate(-38 60 50)">
              {/* Pencil Tip */}
              <polygon points="60,10 50,30 70,30" fill="#FDE68A" stroke="#121212" strokeWidth="2.5" strokeLinejoin="round" />
              <polygon points="60,10 55,20 65,20" fill="#121212" />
              
              {/* Pencil Body with Stripes */}
              <rect x="50" y="30" width="20" height="60" fill="#F59E0B" stroke="#121212" strokeWidth="2.5" />
              <line x1="56" y1="30" x2="56" y2="90" stroke="#D97706" strokeWidth="2" />
              <line x1="64" y1="30" x2="64" y2="90" stroke="#D97706" strokeWidth="2" />
              
              {/* Metal Ferrule */}
              <rect x="50" y="90" width="20" height="10" fill="#CBD5E1" stroke="#121212" strokeWidth="2.5" />
              <line x1="50" y1="95" x2="70" y2="95" stroke="#94A3B8" strokeWidth="1.5" />
              
              {/* Eraser */}
              <rect x="50" y="100" width="20" height="12" rx="3" fill="#F43F5E" stroke="#121212" strokeWidth="2.5" />
            </g>

            {/* Walking Character Head & Body */}
            {/* Head */}
            <circle cx="56" cy="56" r="12" fill="#FED7AA" stroke="#121212" strokeWidth="2.5" />
            <circle cx="60" cy="54" r="2" fill="#121212" />
            <path d="M54 58 Q 58 62 62 58" stroke="#121212" strokeWidth="2" fill="none" strokeLinecap="round" />
            
            {/* Orange Shirt Body */}
            <path d="M48 68 C48 65 64 65 64 68 L62 82 L50 82 Z" fill="#FF6B00" stroke="#121212" strokeWidth="2.5" />
            
            {/* Cyan Pants Legs */}
            <line x1="52" y1="82" x2="46" y2="104" stroke="#0EA5E9" strokeWidth="6" strokeLinecap="round" />
            <line x1="60" y1="82" x2="68" y2="102" stroke="#0EA5E9" strokeWidth="6" strokeLinecap="round" />
            
            {/* Black Shoes */}
            <ellipse cx="43" cy="106" rx="6" ry="3.5" fill="#121212" />
            <ellipse cx="71" cy="104" rx="6" ry="3.5" fill="#121212" />

            {/* Arm holding the pencil */}
            <path d="M52 70 Q 56 60 62 64" stroke="#FED7AA" strokeWidth="4" strokeLinecap="round" fill="none" />
            <circle cx="62" cy="64" r="3.5" fill="#FED7AA" stroke="#121212" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Primary Headline matching TURN.STUDIO */}
        <h2
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(2rem, 4.2vw, 3.2rem)',
            fontWeight: 800,
            color: 'var(--text-dark)',
            lineHeight: 1.18,
            letterSpacing: '-0.03em',
            marginBottom: '1.75rem',
          }}
        >
          We're a digital-first design studio where creativity meets technology.
        </h2>

        {/* Highlighted Statement with Mini Stacked Cards */}
        <div style={{ maxWidth: '780px', margin: '0 auto 2.5rem auto' }}>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.25rem, 2.4vw, 1.85rem)',
              color: '#888888',
              lineHeight: 1.5,
              fontWeight: 400,
            }}
          >
            We design <strong style={{ color: 'var(--text-dark)', fontWeight: 700 }}>products</strong>,{' '}
            <strong style={{ color: 'var(--text-dark)', fontWeight: 700 }}>brands</strong>, and{' '}
            <span style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
              <strong style={{ color: 'var(--text-dark)', fontWeight: 700, marginRight: '8px' }}>websites</strong>
              
              {/* Stack of 3 mini colorful tilted project cards matching TURN.STUDIO */}
              <span style={{ display: 'inline-flex', position: 'relative', width: '38px', height: '24px', verticalAlign: 'middle', margin: '0 4px' }}>
                <span style={{ position: 'absolute', width: '22px', height: '22px', borderRadius: '4px', backgroundColor: '#EF4444', transform: 'rotate(-12deg)', top: '1px', left: '0px', boxShadow: '0 2px 6px rgba(0,0,0,0.2)' }}></span>
                <span style={{ position: 'absolute', width: '22px', height: '22px', borderRadius: '4px', backgroundColor: '#111111', transform: 'rotate(4deg)', top: '0px', left: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.2)' }}></span>
                <span style={{ position: 'absolute', width: '22px', height: '22px', borderRadius: '4px', backgroundColor: '#FDECD2', transform: 'rotate(18deg)', top: '2px', left: '16px', boxShadow: '0 2px 6px rgba(0,0,0,0.15)', border: '1px solid #E5E7EB' }}></span>
              </span>
            </span>{' '}
            that people love and help businesses thrive.
          </p>
        </div>

        {/* Action Button */}
        <div>
          <button
            onClick={onOpenProjectModal}
            className="btn-pill-white"
            style={{ padding: '0.85rem 2.2rem', fontSize: '0.92rem', cursor: 'pointer' }}
          >
            <span>More About Us</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

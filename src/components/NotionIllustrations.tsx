import React from 'react';

// Pure transparent vector Notion-style illustrations
// Uses `currentColor` for all primary ink lines and shapes.
// - In regular sections: inherits `var(--text-primary)` (black in light mode, white in dark mode).
// - In dark sections (Capabilities & Footer): inherits `#FAF7F2` (always crisp white).
const INK = 'currentColor';

// Curated subtle Notion pastel palette
const TINT_SAGE = '#86EFAC';     // Soft sage green
const TINT_BUTTER = '#FDE68A';   // Warm buttery yellow
const TINT_SKY = '#BAE6FD';      // Soft sky blue
const TINT_AMBER = '#FCD34D';    // Warm amber gold
const TINT_ROSE = '#FBCFE8';     // Soft blush rose
const TINT_LAVENDER = '#DDD6FE'; // Soft pastel lavender

interface IllustrationProps {
  className?: string;
  style?: React.CSSProperties;
  size?: number | string;
  color?: string;
}

// 1. Hero / Capabilities: Custom Website Design (Creator at desk)
export const NotionCreatorDesk: React.FC<IllustrationProps> = ({ size = '100%', style, color }) => (
  <svg
    viewBox="0 0 200 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: size, height: 'auto', maxHeight: '100%', display: 'block', margin: '0 auto', color: color, ...style }}
  >
    {/* Bookshelf */}
    <line x1="35" y1="24" x2="165" y2="24" stroke={INK} strokeWidth="2" strokeLinecap="round" />
    <rect x="48" y="10" width="8" height="14" rx="1" stroke={INK} strokeWidth="1.8" fill={TINT_LAVENDER} fillOpacity="0.4" />
    <rect x="58" y="7" width="10" height="17" rx="1" stroke={INK} strokeWidth="1.8" fill={TINT_SKY} fillOpacity="0.4" />
    <line x1="63" y1="9" x2="63" y2="22" stroke={INK} strokeWidth="1.2" />

    {/* Potted Plant (Soft Sage Green) */}
    <path d="M128 14 L131 24 L141 24 L144 14 Z" stroke={INK} strokeWidth="1.8" fill={TINT_AMBER} fillOpacity="0.4" />
    <path d="M136 14 C136 7 130 4 130 4 C130 4 139 7 136 14" stroke={INK} strokeWidth="1.8" strokeLinecap="round" fill={TINT_SAGE} fillOpacity="0.4" />
    <path d="M136 14 C136 7 142 4 142 4 C142 4 133 7 136 14" stroke={INK} strokeWidth="1.8" strokeLinecap="round" fill={TINT_SAGE} fillOpacity="0.4" />

    {/* Desk Surface & Legs */}
    <line x1="20" y1="116" x2="180" y2="116" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
    <line x1="42" y1="116" x2="38" y2="152" stroke={INK} strokeWidth="2.2" strokeLinecap="round" />
    <line x1="158" y1="116" x2="162" y2="152" stroke={INK} strokeWidth="2.2" strokeLinecap="round" />

    {/* Laptop */}
    <rect x="44" y="74" width="58" height="38" rx="4" stroke={INK} strokeWidth="2.2" fill={TINT_SKY} fillOpacity="0.2" />
    <line x1="38" y1="112" x2="108" y2="112" stroke={INK} strokeWidth="2.8" strokeLinecap="round" />
    <rect x="49" y="80" width="16" height="4" rx="1.5" fill={INK} />
    <line x1="49" y1="90" x2="90" y2="90" stroke={INK} strokeWidth="1.8" strokeLinecap="round" />
    <line x1="49" y1="96" x2="78" y2="96" stroke={INK} strokeWidth="1.8" strokeLinecap="round" />
    <line x1="49" y1="102" x2="84" y2="102" stroke={INK} strokeWidth="1.8" strokeLinecap="round" />

    {/* Character */}
    <circle cx="132" cy="60" r="14" stroke={INK} strokeWidth="2.2" />
    <path d="M120 56 C118 45 130 40 142 44 C147 46 148 53 146 59" stroke={INK} strokeWidth="2.2" strokeLinecap="round" fill={TINT_AMBER} fillOpacity="0.25" />
    <circle cx="127" cy="60" r="3.5" stroke={INK} strokeWidth="1.8" />
    <circle cx="137" cy="60" r="3.5" stroke={INK} strokeWidth="1.8" />
    <line x1="130.5" y1="60" x2="133.5" y2="60" stroke={INK} strokeWidth="1.8" />
    <path d="M130 67 Q133 70 136 67" stroke={INK} strokeWidth="1.8" strokeLinecap="round" />

    {/* Knit Sweater */}
    <path d="M124 74 C116 80 110 92 110 116" stroke={INK} strokeWidth="2.2" strokeLinecap="round" />
    <path d="M138 74 C144 82 148 95 146 116" stroke={INK} strokeWidth="2.2" strokeLinecap="round" />
    <path d="M122 82 L96 98 L88 96" stroke={INK} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />

    {/* Coffee Cup & Steam */}
    <rect x="112" y="103" width="10" height="13" rx="2" stroke={INK} strokeWidth="1.8" fill={TINT_ROSE} fillOpacity="0.4" />
    <path d="M122 106 Q126 109 122 113" stroke={INK} strokeWidth="1.5" />
    <path d="M116 98 Q118 95 116 92" stroke={INK} strokeWidth="1.4" strokeLinecap="round" />

    {/* Notepad on Desk */}
    <rect x="94" y="110" width="14" height="6" rx="1" stroke={INK} strokeWidth="1.5" fill={TINT_BUTTER} fillOpacity="0.4" />
  </svg>
);

// 2. Hero / Capabilities: Food Menus & Lookbooks (Baker)
export const NotionMenuBaker: React.FC<IllustrationProps> = ({ size = '100%', style, color }) => (
  <svg
    viewBox="0 0 200 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: size, height: 'auto', maxHeight: '100%', display: 'block', margin: '0 auto', color: color, ...style }}
  >
    {/* Cap & Face */}
    <circle cx="80" cy="48" r="14" stroke={INK} strokeWidth="2.2" />
    <path d="M66 44 C66 32 80 28 92 34 C96 36 98 42 96 46" stroke={INK} strokeWidth="2.2" fill={TINT_BUTTER} fillOpacity="0.3" />
    <path d="M64 43 L96 40" stroke={INK} strokeWidth="2.2" strokeLinecap="round" />
    <circle cx="76" cy="48" r="1.5" fill={INK} />
    <circle cx="85" cy="48" r="1.5" fill={INK} />
    <path d="M78 54 Q81 57 85 54" stroke={INK} strokeWidth="1.8" strokeLinecap="round" />

    {/* Apron & Body */}
    <path d="M70 62 L64 115 L98 115 L94 62 Z" stroke={INK} strokeWidth="2.2" strokeLinejoin="round" fill={TINT_LAVENDER} fillOpacity="0.2" />
    <line x1="72" y1="72" x2="89" y2="72" stroke={INK} strokeWidth="1.8" strokeLinecap="round" />

    {/* Sourdough Croissant */}
    <path d="M66 68 L46 78 L42 72" stroke={INK} strokeWidth="2.2" strokeLinecap="round" />
    <path
      d="M32 72 C32 64 44 64 48 70 C48 76 38 80 32 72 Z"
      stroke={INK}
      strokeWidth="2"
      fill={TINT_BUTTER}
      fillOpacity="0.45"
    />
    <path d="M36 68 Q40 70 42 74" stroke={INK} strokeWidth="1.4" />

    {/* Blackboard Menu */}
    <path d="M92 68 L115 80" stroke={INK} strokeWidth="2.2" strokeLinecap="round" />
    <rect x="110" y="40" width="64" height="92" rx="6" stroke={INK} strokeWidth="2.4" fill={TINT_AMBER} fillOpacity="0.1" />
    <rect x="118" y="48" width="48" height="8" rx="2" fill={TINT_AMBER} fillOpacity="0.35" />
    {/* Menu Items */}
    <circle cx="120" cy="68" r="2" fill={INK} />
    <line x1="126" y1="68" x2="152" y2="68" stroke={INK} strokeWidth="1.8" strokeLinecap="round" />
    <line x1="158" y1="68" x2="166" y2="68" stroke={INK} strokeWidth="1.8" strokeLinecap="round" />

    <circle cx="120" cy="82" r="2" fill={INK} />
    <line x1="126" y1="82" x2="148" y2="82" stroke={INK} strokeWidth="1.8" strokeLinecap="round" />
    <line x1="158" y1="82" x2="166" y2="82" stroke={INK} strokeWidth="1.8" strokeLinecap="round" />

    <circle cx="120" cy="96" r="2" fill={INK} />
    <line x1="126" y1="96" x2="150" y2="96" stroke={INK} strokeWidth="1.8" strokeLinecap="round" />
    <line x1="158" y1="96" x2="166" y2="96" stroke={INK} strokeWidth="1.8" strokeLinecap="round" />

    <circle cx="120" cy="110" r="2" fill={INK} />
    <line x1="126" y1="110" x2="144" y2="110" stroke={INK} strokeWidth="1.8" strokeLinecap="round" />
    <line x1="158" y1="110" x2="166" y2="110" stroke={INK} strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

// 3. Hero / Capabilities: Simple Inquiries (Contact Phone)
export const NotionContactPhone: React.FC<IllustrationProps> = ({ size = '100%', style, color }) => (
  <svg
    viewBox="0 0 200 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: size, height: 'auto', maxHeight: '100%', display: 'block', margin: '0 auto', color: color, ...style }}
  >
    {/* Floating Message Bubble */}
    <rect x="112" y="24" width="66" height="38" rx="10" stroke={INK} strokeWidth="2.2" fill={TINT_SKY} fillOpacity="0.35" />
    <path d="M124 62 L120 70 L132 62 Z" stroke={INK} strokeWidth="2" strokeLinejoin="round" fill={TINT_SKY} fillOpacity="0.35" />
    <line x1="124" y1="38" x2="164" y2="38" stroke={INK} strokeWidth="2.2" strokeLinecap="round" />
    <line x1="124" y1="46" x2="152" y2="46" stroke={INK} strokeWidth="2.2" strokeLinecap="round" />

    {/* Character */}
    <circle cx="74" cy="54" r="15" stroke={INK} strokeWidth="2.2" />
    <path d="M60 50 C60 36 76 32 88 38 C92 42 92 48 90 54" stroke={INK} strokeWidth="2.2" strokeLinecap="round" fill={TINT_ROSE} fillOpacity="0.25" />
    <circle cx="70" cy="54" r="1.5" fill={INK} />
    <circle cx="79" cy="54" r="1.5" fill={INK} />
    <path d="M72 61 Q75 64 79 61" stroke={INK} strokeWidth="1.8" strokeLinecap="round" />

    <path d="M66 69 C58 76 54 88 54 122 L98 122 C98 88 94 76 86 69" stroke={INK} strokeWidth="2.2" strokeLinecap="round" />

    {/* Smartphone */}
    <path d="M58 88 L78 94" stroke={INK} strokeWidth="2.2" strokeLinecap="round" />
    <path d="M94 88 L84 94" stroke={INK} strokeWidth="2.2" strokeLinecap="round" />
    <rect x="74" y="80" width="28" height="46" rx="6" stroke={INK} strokeWidth="2.2" fill={TINT_LAVENDER} fillOpacity="0.2" />
    <line x1="82" y1="84" x2="94" y2="84" stroke={INK} strokeWidth="1.8" strokeLinecap="round" />
    <rect x="78" y="90" width="20" height="26" rx="3" stroke={INK} strokeWidth="1.4" />
    <circle cx="88" cy="103" r="2.5" fill={INK} />
  </svg>
);

// 4. Hero / Capabilities: Full Ownership (Key & Code Box)
export const NotionOwnershipKey: React.FC<IllustrationProps> = ({ size = '100%', style, color }) => (
  <svg
    viewBox="0 0 200 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: size, height: 'auto', maxHeight: '100%', display: 'block', margin: '0 auto', color: color, ...style }}
  >
    {/* Character */}
    <circle cx="112" cy="48" r="15" stroke={INK} strokeWidth="2.2" />
    <path d="M98 44 C98 32 116 26 128 34 C132 38 132 44 130 50" stroke={INK} strokeWidth="2.2" strokeLinecap="round" fill={TINT_SAGE} fillOpacity="0.25" />
    <circle cx="107" cy="48" r="1.5" fill={INK} />
    <circle cx="116" cy="48" r="1.5" fill={INK} />
    <path d="M109 55 Q113 58 117 55" stroke={INK} strokeWidth="1.8" strokeLinecap="round" />

    <path d="M104 63 C96 72 94 86 94 120 L132 120 C132 86 130 72 122 63" stroke={INK} strokeWidth="2.2" strokeLinecap="round" />

    {/* Warm Amber Key */}
    <path d="M102 78 L68 78" stroke={INK} strokeWidth="2.2" strokeLinecap="round" />
    <circle cx="48" cy="78" r="13" stroke={INK} strokeWidth="2.6" fill={TINT_AMBER} fillOpacity="0.4" />
    <circle cx="48" cy="78" r="4.5" stroke={INK} strokeWidth="1.8" fill="none" />
    <line x1="61" y1="78" x2="86" y2="78" stroke={INK} strokeWidth="2.8" strokeLinecap="round" />
    <line x1="75" y1="78" x2="75" y2="87" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
    <line x1="82" y1="78" x2="82" y2="85" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />

    {/* Code Tag Box */}
    <rect x="130" y="74" width="46" height="38" rx="6" stroke={INK} strokeWidth="2.2" fill={TINT_SKY} fillOpacity="0.2" />
    <line x1="130" y1="84" x2="176" y2="84" stroke={INK} strokeWidth="1.6" />
    <circle cx="136" cy="79" r="1.5" fill={INK} />
    <circle cx="142" cy="79" r="1.5" fill={INK} />
    <circle cx="148" cy="79" r="1.5" fill={INK} />
    <path d="M142 98 L138 102 L142 106" stroke={INK} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="152" y1="96" x2="148" y2="108" stroke={INK} strokeWidth="1.8" strokeLinecap="round" />
    <path d="M158 98 L162 102 L158 106" stroke={INK} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 5. Hero: Rapid Launch (Character with calendar)
export const NotionRapidLaunch: React.FC<IllustrationProps> = ({ size = '100%', style, color }) => (
  <svg
    viewBox="0 0 200 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: size, height: 'auto', maxHeight: '100%', display: 'block', margin: '0 auto', color: color, ...style }}
  >
    {/* Motion lines */}
    <line x1="28" y1="46" x2="52" y2="46" stroke={INK} strokeWidth="2" strokeLinecap="round" />
    <line x1="20" y1="54" x2="44" y2="54" stroke={INK} strokeWidth="1.8" strokeLinecap="round" />
    <line x1="32" y1="62" x2="48" y2="62" stroke={INK} strokeWidth="1.8" strokeLinecap="round" />

    {/* Calendar card */}
    <rect x="122" y="32" width="54" height="60" rx="8" stroke={INK} strokeWidth="2.2" fill={TINT_LAVENDER} fillOpacity="0.1" />
    <rect x="122" y="32" width="54" height="14" rx="8" fill={TINT_ROSE} fillOpacity="0.4" />
    <path d="M122 46 L176 46" stroke={INK} strokeWidth="1.8" />
    <line x1="134" y1="28" x2="134" y2="34" stroke={INK} strokeWidth="2.2" strokeLinecap="round" />
    <line x1="164" y1="28" x2="164" y2="34" stroke={INK} strokeWidth="2.2" strokeLinecap="round" />
    <text x="149" y="74" fontSize="16" fontWeight="900" fill={INK} textAnchor="middle" fontFamily="sans-serif">5-10</text>
    <text x="149" y="86" fontSize="8" fontWeight="700" fill={INK} textAnchor="middle" fontFamily="sans-serif">DAYS</text>

    {/* Runner */}
    <circle cx="78" cy="46" r="14" stroke={INK} strokeWidth="2.2" />
    <path d="M64 42 C64 30 78 26 90 32 C94 34 96 40 94 46" stroke={INK} strokeWidth="2.2" fill={TINT_SAGE} fillOpacity="0.35" />
    <circle cx="74" cy="46" r="1.5" fill={INK} />
    <circle cx="83" cy="46" r="1.5" fill={INK} />
    <path d="M76 52 Q79 55 83 52" stroke={INK} strokeWidth="1.8" strokeLinecap="round" />

    <path d="M78 60 L66 94" stroke={INK} strokeWidth="2.2" strokeLinecap="round" />
    <path d="M74 68 L54 60 L48 66" stroke={INK} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M76 72 L94 80 L106 72" stroke={INK} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M66 94 L82 108 L104 104" stroke={INK} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M66 94 L48 112 L38 126" stroke={INK} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 6. About Section: Studio Collaboration
export const NotionStudioCollab: React.FC<IllustrationProps> = ({ size = '100%', style, color }) => (
  <svg
    viewBox="0 0 320 240"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: size, height: 'auto', maxHeight: '100%', display: 'block', margin: '0 auto', color: color, ...style }}
  >
    {/* Studio Table */}
    <line x1="35" y1="162" x2="285" y2="162" stroke={INK} strokeWidth="3" strokeLinecap="round" />
    <line x1="65" y1="162" x2="55" y2="222" stroke={INK} strokeWidth="2.8" strokeLinecap="round" />
    <line x1="255" y1="162" x2="265" y2="222" stroke={INK} strokeWidth="2.8" strokeLinecap="round" />

    {/* Left Creator */}
    <circle cx="85" cy="80" r="18" stroke={INK} strokeWidth="2.6" />
    <path d="M68 76 C68 60 85 54 100 62 C105 68 105 76 102 84" stroke={INK} strokeWidth="2.6" strokeLinecap="round" fill={TINT_ROSE} fillOpacity="0.25" />
    <circle cx="80" cy="80" r="2" fill={INK} />
    <circle cx="91" cy="80" r="2" fill={INK} />
    <path d="M83 89 Q87 93 92 89" stroke={INK} strokeWidth="2" strokeLinecap="round" />

    <path d="M78 98 C66 108 60 125 60 162 L110 162 C110 125 104 108 92 98" stroke={INK} strokeWidth="2.6" strokeLinecap="round" />
    <path d="M74 116 L108 142 L118 136" stroke={INK} strokeWidth="2.6" strokeLinecap="round" />

    {/* Sketchbook */}
    <rect x="100" y="142" width="46" height="30" rx="4" stroke={INK} strokeWidth="2.2" fill={TINT_BUTTER} fillOpacity="0.35" transform="rotate(-5 100 142)" />
    <line x1="108" y1="152" x2="134" y2="150" stroke={INK} strokeWidth="1.8" strokeLinecap="round" />
    <line x1="108" y1="158" x2="128" y2="156" stroke={INK} strokeWidth="1.8" strokeLinecap="round" />

    {/* Laptop */}
    <rect x="146" y="118" width="48" height="34" rx="4" stroke={INK} strokeWidth="2.2" fill={TINT_SKY} fillOpacity="0.2" />
    <line x1="140" y1="152" x2="200" y2="152" stroke={INK} strokeWidth="2.8" strokeLinecap="round" />
    <line x1="156" y1="128" x2="178" y2="128" stroke={INK} strokeWidth="1.8" strokeLinecap="round" />
    <line x1="156" y1="136" x2="186" y2="136" stroke={INK} strokeWidth="1.8" strokeLinecap="round" />

    {/* Right Creator */}
    <circle cx="235" cy="80" r="18" stroke={INK} strokeWidth="2.6" />
    <path d="M218 76 C218 58 238 52 252 62 C256 68 256 76 252 84" stroke={INK} strokeWidth="2.6" strokeLinecap="round" fill={TINT_AMBER} fillOpacity="0.25" />
    <circle cx="230" cy="80" r="4" stroke={INK} strokeWidth="1.8" />
    <circle cx="242" cy="80" r="4" stroke={INK} strokeWidth="1.8" />
    <line x1="234" y1="80" x2="238" y2="80" stroke={INK} strokeWidth="1.8" />
    <path d="M232 89 Q236 93 241 89" stroke={INK} strokeWidth="2" strokeLinecap="round" />

    <path d="M228 98 C216 108 210 125 210 162 L260 162 C260 125 254 108 242 98" stroke={INK} strokeWidth="2.6" strokeLinecap="round" />
    <path d="M224 116 L195 132" stroke={INK} strokeWidth="2.6" strokeLinecap="round" />

    {/* Discussion Bubble */}
    <rect x="135" y="44" width="60" height="34" rx="10" stroke={INK} strokeWidth="2.2" fill={TINT_LAVENDER} fillOpacity="0.35" />
    <path d="M155 78 L150 86 L162 78 Z" stroke={INK} strokeWidth="1.8" fill={TINT_LAVENDER} fillOpacity="0.35" />
    <line x1="145" y1="56" x2="185" y2="56" stroke={INK} strokeWidth="2.2" strokeLinecap="round" />
    <line x1="145" y1="64" x2="175" y2="64" stroke={INK} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// 7. Pre-Footer: Launch Celebration
export const NotionLaunchCelebration: React.FC<IllustrationProps> = ({ size = '100%', style, color }) => (
  <svg
    viewBox="0 0 200 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: size, height: 'auto', maxHeight: '100%', display: 'block', margin: '0 auto', color: color, ...style }}
  >
    {/* Floating Sparks */}
    <path d="M40 36 L43 45 L52 48 L43 51 L40 60 L37 51 L28 48 L37 45 Z" fill={TINT_BUTTER} />
    <path d="M164 42 L166 49 L173 51 L166 53 L164 60 L162 53 L155 51 L162 49 Z" fill={TINT_ROSE} />

    <circle cx="100" cy="54" r="16" stroke={INK} strokeWidth="2.2" />
    <path d="M84 48 C84 34 102 30 116 38 C120 42 120 50 118 56" stroke={INK} strokeWidth="2.2" fill={TINT_AMBER} fillOpacity="0.25" />
    <circle cx="95" cy="54" r="1.5" fill={INK} />
    <circle cx="105" cy="54" r="1.5" fill={INK} />
    <path d="M96 62 Q100 66 105 62" stroke={INK} strokeWidth="1.8" strokeLinecap="round" />

    <path d="M92 70 L90 108 L110 108 L108 70 Z" stroke={INK} strokeWidth="2.2" fill={TINT_SKY} fillOpacity="0.2" />

    <path d="M92 76 L70 54 L58 60" stroke={INK} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M108 76 L130 54 L142 60" stroke={INK} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />

    <path d="M94 108 L84 140 L70 144" stroke={INK} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M106 108 L116 140 L130 144" stroke={INK} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

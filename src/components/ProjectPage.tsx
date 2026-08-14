import React, { useState } from 'react';
import { PointerIcon } from './PointerIcon';
import {
  NotionCreatorDesk,
  NotionLaunchCelebration,
} from './NotionIllustrations';

interface ProjectPageProps {
  onBack: () => void;
}

interface UploadedFile {
  id: string;
  name: string;
  size: string;
  previewUrl?: string;
}

export const ProjectPage: React.FC<ProjectPageProps> = ({ onBack }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [selectedTier, setSelectedTier] = useState<'starter' | 'growth' | 'custom' | 'consult'>('growth');
  const [timeline, setTimeline] = useState('5 to 10 Days');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [brandName, setBrandName] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [notes, setNotes] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleBackWithAnimation = () => {
    setIsExiting(true);
    setTimeout(() => {
      onBack();
    }, 220);
  };

  const tiers = [
    {
      id: 'starter' as const,
      name: 'Starter Showcase',
      price: '₹5,000',
      tag: 'PORTFOLIO & LANDING',
      color: '#86EFAC',
      desc: 'Single-page custom layout, typography, direct contact routing & fast delivery.',
    },
    {
      id: 'growth' as const,
      name: 'Growth & Menu',
      price: '₹12,000',
      tag: 'MOST POPULAR',
      color: '#F472B6',
      desc: 'Multi-section brand story, 100+ item digital menu/catalog, dietary filters & social hub.',
    },
    {
      id: 'custom' as const,
      name: 'Custom & Tools',
      price: 'Custom',
      tag: 'COMPLEX TOOLS',
      color: '#BAE6FD',
      desc: 'Interactive cake/product customizers, calculators, bespoke booking & custom API integrations.',
    },
    {
      id: 'consult' as const,
      name: 'General Consult',
      price: 'Free Discuss',
      tag: 'EXPLORATION',
      color: '#FDE68A',
      desc: 'Discuss your brand requirements, digital architecture, and explore the best path forward.',
    },
  ];

  const timelineOptions = [
    { label: '5 to 10 Days', badge: 'Standard Track' },
    { label: 'Within 2 Weeks', badge: 'Relaxed' },
    { label: 'Next Month', badge: 'Upcoming Launch' },
    { label: 'Flexible', badge: 'Open' },
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    
    const newUploads: UploadedFile[] = files.map((file) => ({
      id: Math.random().toString(36).substring(7),
      name: file.name,
      size: `${(file.size / 1024).toFixed(0)} KB`,
      previewUrl: file.type.startsWith('image/') ? URL.createObjectURL(file) : undefined,
    }));

    setUploadedFiles((prev) => [...prev, ...newUploads]);
  };

  const removeFile = (id: string) => {
    setUploadedFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const currentTierData = tiers.find((t) => t.id === selectedTier) || tiers[1];

  const attachmentsList = uploadedFiles.length > 0
    ? `\n• Reference Assets (${uploadedFiles.length}):\n` + uploadedFiles.map((f) => `  - ${f.name} (${f.size})`).join('\n')
    : '';

  const plainTextBrief = 
    `Hello RoséBrew Team,\n\n` +
    `Here are my project details:\n\n` +
    `• Client Name: ${name || 'Independent Creator'}\n` +
    `• Email: ${email}\n` +
    `• Brand / Studio Name: ${brandName || 'Not specified'}\n` +
    `• Business / Practice: ${businessType || 'Not specified'}\n` +
    `• Selected Tier: ${currentTierData.name} (${currentTierData.price})\n` +
    `• Desired Timeline: ${timeline}\n` +
    `• Project Vision & Notes:\n${notes || 'Ready to review on alignment call'}\n` +
    `${attachmentsList}\n\n` +
    `Looking forward to collaborating with RoséBrew!`;

  const mailtoUrl = `mailto:rosaebrew@gmail.com?subject=${encodeURIComponent(`Project Brief: ${brandName || name} — ${currentTierData.name}`)}&body=${encodeURIComponent(plainTextBrief)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      window.location.href = mailtoUrl;
    } catch {
      // Handled gracefully by UI buttons
    }
  };

  const handleCopyBrief = () => {
    navigator.clipboard.writeText(plainTextBrief);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      className={`project-page-root ${isExiting ? 'page-exiting' : 'page-entering'}`}
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-canvas)', color: 'var(--text-primary)', position: 'relative', overflowX: 'hidden' }}
    >
      
      {/* Background Floating Butterflies for Playful Depth */}
      <div style={{ position: 'absolute', top: '10%', left: '4%', zIndex: 0, pointerEvents: 'none' }} className="project-butterfly-1">
        <PointerIcon size={28} fill="#86EFAC" strokeWidth={6.5} color="var(--text-primary)" style={{ filter: 'drop-shadow(0 8px 16px rgba(134, 239, 172, 0.4))' }} />
      </div>
      <div style={{ position: 'absolute', top: '22%', right: '5%', zIndex: 0, pointerEvents: 'none' }} className="project-butterfly-2">
        <PointerIcon size={32} fill="#BAE6FD" strokeWidth={6.5} color="var(--text-primary)" style={{ filter: 'drop-shadow(0 10px 20px rgba(186, 230, 253, 0.45))' }} />
      </div>
      <div style={{ position: 'absolute', top: '65%', left: '6%', zIndex: 0, pointerEvents: 'none' }} className="project-butterfly-3">
        <PointerIcon size={24} fill="#FDE68A" strokeWidth={6.5} color="var(--text-primary)" style={{ filter: 'drop-shadow(0 6px 12px rgba(253, 230, 138, 0.4))' }} />
      </div>

      {/* =================================================================
          DEDICATED PAGE HEADER (Logo on Left, Back to Home on Right)
          ================================================================= */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backgroundColor: 'var(--bg-canvas)',
          borderBottom: '1px solid var(--border-subtle)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          padding: '1rem 0',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Left: Brand Logo */}
          <div
            onClick={handleBackWithAnimation}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.55rem',
              cursor: 'pointer',
              fontWeight: 800,
              fontSize: '1.28rem',
              letterSpacing: '-0.03em',
            }}
          >
            <PointerIcon size={24} fill="#F9A8D4" strokeWidth={6.5} color="var(--text-primary)" />
            <span>RoséBrew</span>
          </div>

          {/* Right: Back to Home Page Button */}
          <button
            onClick={handleBackWithAnimation}
            className="sivoro-btn-light"
            style={{ height: '40px', padding: '0.5rem 1.15rem', fontSize: '0.86rem' }}
          >
            <span>← Back to Home</span>
          </button>
        </div>
      </header>

      {/* =================================================================
          MAIN CONTENT: INTERACTIVE 2-COLUMN EXPERIENCE
          ================================================================= */}
      <main style={{ flex: 1, padding: 'clamp(2.5rem, 5vw, 4.5rem) 0 clamp(4rem, 8vw, 6rem) 0', position: 'relative', zIndex: 1 }}>
        <div className="container">
          
          {submitted ? (
            /* Celebration Completion View with Guaranteed Email & Copy Triggers */
            <div
              className="celebration-view"
              style={{
                maxWidth: '660px',
                margin: '2rem auto',
                backgroundColor: 'var(--bg-card)',
                borderRadius: '32px',
                padding: 'clamp(2.5rem, 5vw, 3.75rem)',
                textAlign: 'center',
                border: '1px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-float)',
              }}
            >
              <div style={{ width: '160px', height: '130px', margin: '0 auto 1.5rem auto' }}>
                <NotionLaunchCelebration size="100%" color="var(--text-primary)" />
              </div>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.35rem 0.85rem', borderRadius: '9999px', backgroundColor: 'rgba(244, 114, 182, 0.15)', color: '#DB2777', fontSize: '0.74rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1rem' }}>
                <span>✦</span>
                <span>PROJECT BRIEF READY</span>
              </div>

              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                Your project brief is ready!
              </h2>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                Click below to open your mail app directly, or copy the formatted project brief to send to <strong>rosaebrew@gmail.com</strong>.
              </p>

              {/* Action Buttons Group */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', maxWidth: '420px', margin: '0 auto 2rem auto' }}>
                
                {/* 1. Direct Email Link Action */}
                <a
                  href={mailtoUrl}
                  className="sivoro-btn-dark"
                  style={{
                    height: '48px',
                    justifyContent: 'center',
                    fontSize: '0.94rem',
                    textDecoration: 'none',
                    width: '100%',
                  }}
                >
                  <span>Open Email App (rosaebrew@gmail.com)</span>
                  <span>→</span>
                </a>

                {/* 2. Copy to Clipboard Button */}
                <button
                  type="button"
                  onClick={handleCopyBrief}
                  className="sivoro-btn-light"
                  style={{
                    height: '44px',
                    justifyContent: 'center',
                    fontSize: '0.88rem',
                    width: '100%',
                    borderColor: copied ? '#86EFAC' : 'var(--border-medium)',
                  }}
                >
                  <span>{copied ? '✓ Brief Copied to Clipboard!' : '📋 Copy Formatted Brief'}</span>
                </button>
              </div>

              <button
                onClick={handleBackWithAnimation}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  fontSize: '0.86rem',
                  cursor: 'pointer',
                  textDecoration: 'underline',
                }}
              >
                ← Return to Studio Overview
              </button>
            </div>
          ) : (
            <div className="project-split-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1.35fr', gap: 'clamp(2.5rem, 5vw, 4.5rem)', alignItems: 'start', maxWidth: '1200px', margin: '0 auto' }}>
              
              {/* =================================================================
                  LEFT COLUMN: STUDIO COMPANION & LIVE SCOPE CALCULATOR
                  ================================================================= */}
              <div style={{ position: 'sticky', top: '100px' }} className="project-left-sticky project-left-col">
                
                {/* Header Tag */}
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', padding: '0.35rem 0.85rem', borderRadius: '9999px', backgroundColor: 'rgba(244, 114, 182, 0.15)', color: '#DB2777', fontSize: '0.74rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1.25rem' }}>
                  <PointerIcon size={16} strokeWidth={7} />
                  <span>START A NEW PROJECT</span>
                </div>

                <h1
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'clamp(2.4rem, 4.8vw, 3.4rem)',
                    fontWeight: 800,
                    lineHeight: 1.12,
                    letterSpacing: '-0.035em',
                    color: 'var(--text-primary)',
                    marginBottom: '1rem',
                  }}
                >
                  Let's create something <br />
                  <span className="italic-serif" style={{ fontWeight: 400, color: 'var(--text-primary)' }}>
                    extraordinary.
                  </span>
                </h1>

                <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                  Handcrafted digital presence for independent brands. Fill out the brief below to start our direct collaboration.
                </p>

                {/* Character Illustration Visual */}
                <div style={{ width: '100%', maxWidth: '260px', height: '140px', margin: '0 0 2rem 0' }}>
                  <NotionCreatorDesk size="100%" color="var(--text-primary)" />
                </div>

                {/* Live Dynamic Scope Summary Card */}
                <div
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderRadius: '24px',
                    padding: '1.75rem',
                    border: '1px solid var(--border-subtle)',
                    boxShadow: 'var(--shadow-card)',
                  }}
                >
                  <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>
                    SELECTED SCOPE SUMMARY
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.75rem' }}>
                    <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      {currentTierData.name}
                    </div>
                    <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#DB2777', fontFamily: 'var(--font-sans)' }}>
                      {currentTierData.price}
                    </div>
                  </div>

                  <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                    {currentTierData.desc}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                      <span style={{ color: '#86EFAC' }}>✓</span> 100% Code Ownership
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                      <span style={{ color: '#86EFAC' }}>✓</span> {timeline} Delivery
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                      <span style={{ color: '#86EFAC' }}>✓</span> Direct Dev Alignment
                    </div>
                  </div>
                </div>

                {/* Direct Email Routing Tag */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.5rem', fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                  <span>✉</span>
                  <span>Direct inquiries: <strong>rosaebrew@gmail.com</strong></span>
                </div>
              </div>

              {/* =================================================================
                  RIGHT COLUMN: FUN INTERACTIVE PROJECT INTAKE FORM
                  ================================================================= */}
              <div
                className="project-right-col"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderRadius: '32px',
                  padding: 'clamp(2rem, 4vw, 3rem)',
                  border: '1px solid var(--border-subtle)',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  
                  {/* STEP 1: INTERACTIVE SCOPE SELECTOR CARDS */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
                      <span style={stepBadgeStyle}>01</span>
                      <label style={sectionTitleStyle}>Choose Your Project Scope *</label>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '0.85rem' }}>
                      {tiers.map((tier) => {
                        const isSelected = selectedTier === tier.id;
                        return (
                          <div
                            key={tier.id}
                            onClick={() => setSelectedTier(tier.id)}
                            style={{
                              backgroundColor: isSelected ? 'var(--bg-canvas)' : 'var(--bg-surface)',
                              border: isSelected ? '2px solid #F472B6' : '1px solid var(--border-medium)',
                              borderRadius: '18px',
                              padding: '1.15rem 1rem',
                              cursor: 'pointer',
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'space-between',
                              boxShadow: isSelected ? '0 8px 20px rgba(244, 114, 182, 0.2)' : 'none',
                              transform: isSelected ? 'translateY(-2px)' : 'none',
                              transition: 'all 0.2s ease',
                            }}
                          >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                              <span style={{ fontSize: '0.66rem', fontWeight: 800, padding: '0.2rem 0.5rem', borderRadius: '9999px', backgroundColor: tier.color, color: '#181715', letterSpacing: '0.04em' }}>
                                {tier.tag}
                              </span>
                              <span style={{ fontSize: '0.92rem', fontWeight: 800, color: isSelected ? '#DB2777' : 'var(--text-primary)' }}>
                                {tier.price}
                              </span>
                            </div>
                            <div style={{ fontSize: '0.96rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                              {tier.name}
                            </div>
                            <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                              {tier.desc.substring(0, 50)}...
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* STEP 2: INTERACTIVE TIMELINE PILLS */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
                      <span style={stepBadgeStyle}>02</span>
                      <label style={sectionTitleStyle}>Desired Launch Timeline</label>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
                      {timelineOptions.map((opt) => {
                        const isSelected = timeline === opt.label;
                        return (
                          <button
                            key={opt.label}
                            type="button"
                            onClick={() => setTimeline(opt.label)}
                            style={{
                              padding: '0.65rem 1.15rem',
                              borderRadius: '9999px',
                              backgroundColor: isSelected ? '#181715' : 'var(--bg-surface)',
                              color: isSelected ? '#FAF7F2' : 'var(--text-primary)',
                              border: isSelected ? '1px solid #181715' : '1px solid var(--border-medium)',
                              fontSize: '0.85rem',
                              fontWeight: 700,
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.45rem',
                              transition: 'all 0.18s ease',
                            }}
                          >
                            <span>{opt.label}</span>
                            <span style={{ fontSize: '0.68rem', opacity: isSelected ? 0.75 : 0.6, fontWeight: 500 }}>
                              • {opt.badge}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* STEP 3: CONTACT & BRAND DETAILS */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
                      <span style={stepBadgeStyle}>03</span>
                      <label style={sectionTitleStyle}>About You & Your Brand *</label>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                      <div>
                        <label style={fieldLabelStyle}>Your Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Maya Patel"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          style={inputFieldStyle}
                        />
                      </div>

                      <div>
                        <label style={fieldLabelStyle}>Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. maya@bakery.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          style={inputFieldStyle}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                      <div>
                        <label style={fieldLabelStyle}>Brand / Business Name</label>
                        <input
                          type="text"
                          placeholder="e.g. Akuri Pâtisserie"
                          value={brandName}
                          onChange={(e) => setBrandName(e.target.value)}
                          style={inputFieldStyle}
                        />
                      </div>

                      <div>
                        <label style={fieldLabelStyle}>Craft / Industry</label>
                        <input
                          type="text"
                          placeholder="e.g. Artisanal Bakery & Cafe"
                          value={businessType}
                          onChange={(e) => setBusinessType(e.target.value)}
                          style={inputFieldStyle}
                        />
                      </div>
                    </div>
                  </div>

                  {/* STEP 4: PROJECT VISION & NOTES */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
                      <span style={stepBadgeStyle}>04</span>
                      <label style={sectionTitleStyle}>Project Vision & Key Requirements</label>
                    </div>

                    <textarea
                      rows={3}
                      placeholder="Tell us about the pages you envision, lookbooks, custom calculators, or any design inspiration you admire..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      style={{
                        ...inputFieldStyle,
                        height: 'auto',
                        minHeight: '100px',
                        padding: '0.9rem 1.15rem',
                        resize: 'vertical',
                      }}
                    />
                  </div>

                  {/* STEP 5: INTERACTIVE ASSET & MOODBOARD DROPPER */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
                      <span style={stepBadgeStyle}>05</span>
                      <label style={sectionTitleStyle}>Reference Images & Logos (Optional)</label>
                    </div>

                    <label
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '1.5rem 1.25rem',
                        border: '1.5px dashed var(--border-medium)',
                        borderRadius: '20px',
                        backgroundColor: 'var(--bg-surface)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        textAlign: 'center',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#F472B6';
                        e.currentTarget.style.backgroundColor = 'var(--bg-canvas)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border-medium)';
                        e.currentTarget.style.backgroundColor = 'var(--bg-surface)';
                      }}
                    >
                      <input
                        type="file"
                        multiple
                        accept="image/*,.pdf"
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                      />
                      <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: 'var(--bg-card)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', color: '#F472B6', marginBottom: '0.5rem', border: '1px solid var(--border-subtle)' }}>
                        ↑
                      </div>
                      <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        Drop moodboard images, reference links, or logo
                      </div>
                      <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', marginTop: '3px' }}>
                        PNG, JPG, SVG, or WebP up to 15MB
                      </div>
                    </label>

                    {/* Uploaded File Badges */}
                    {uploadedFiles.length > 0 && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.85rem' }}>
                        {uploadedFiles.map((file) => (
                          <div
                            key={file.id}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.55rem',
                              padding: '0.4rem 0.85rem',
                              borderRadius: '9999px',
                              backgroundColor: 'var(--bg-surface)',
                              border: '1px solid var(--border-subtle)',
                              fontSize: '0.8rem',
                              color: 'var(--text-primary)',
                            }}
                          >
                            {file.previewUrl && (
                              <img
                                src={file.previewUrl}
                                alt=""
                                style={{ width: '20px', height: '20px', borderRadius: '50%', objectFit: 'cover' }}
                              />
                            )}
                            <span style={{ maxWidth: '160px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontWeight: 600 }}>
                              {file.name}
                            </span>
                            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>({file.size})</span>
                            <button
                              type="button"
                              onClick={() => removeFile(file.id)}
                              style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                color: 'var(--text-muted)',
                                fontSize: '0.9rem',
                                padding: '0 2px',
                                display: 'flex',
                                alignItems: 'center',
                              }}
                            >
                              ✕
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* ACTION BUTTON */}
                  <button
                    type="submit"
                    className="sivoro-btn-dark"
                    style={{
                      width: '100%',
                      height: '52px',
                      borderRadius: '9999px',
                      justifyContent: 'center',
                      fontSize: '1rem',
                      fontWeight: 800,
                      marginTop: '0.5rem',
                      boxShadow: '0 10px 24px rgba(0,0,0,0.18)',
                    }}
                  >
                    <span>Prepare & Dispatch Project Brief</span>
                    <span>→</span>
                  </button>

                  <div style={{ textAlign: 'center', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    Direct inbox dispatch to <strong>rosaebrew@gmail.com</strong>. Zero obligations until scope agreement.
                  </div>
                </form>
              </div>

            </div>
          )}

        </div>
      </main>

      <style>{`
        /* Page Transition Animations */
        .page-entering {
          animation: pageFadeSlideIn 0.32s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .page-exiting {
          animation: pageFadeSlideOut 0.22s cubic-bezier(0.7, 0, 0.84, 0) forwards;
        }

        @keyframes pageFadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(22px) scale(0.985);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes pageFadeSlideOut {
          from {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          to {
            opacity: 0;
            transform: translateY(16px) scale(0.985);
          }
        }

        .project-left-col {
          animation: columnSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.05s both;
        }
        .project-right-col {
          animation: columnSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.12s both;
        }

        @keyframes columnSlideUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatProject1 {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(30px, -20px) rotate(12deg); }
          100% { transform: translate(-15px, 25px) rotate(-8deg); }
        }
        @keyframes floatProject2 {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-35px, 28px) rotate(-14deg); }
          100% { transform: translate(20px, -18px) rotate(10deg); }
        }
        @keyframes floatProject3 {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(25px, 20px) rotate(8deg); }
          100% { transform: translate(-20px, -15px) rotate(-10deg); }
        }

        .project-butterfly-1 { animation: floatProject1 8s ease-in-out infinite alternate; }
        .project-butterfly-2 { animation: floatProject2 9s ease-in-out infinite alternate; }
        .project-butterfly-3 { animation: floatProject3 10s ease-in-out infinite alternate; }

        @media (max-width: 960px) {
          .project-split-layout {
            grid-template-columns: 1fr !important;
          }
          .project-left-sticky {
            position: relative !important;
            top: 0 !important;
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

const stepBadgeStyle: React.CSSProperties = {
  width: '24px',
  height: '24px',
  borderRadius: '50%',
  backgroundColor: '#181715',
  color: '#FAF7F2',
  fontSize: '0.7rem',
  fontWeight: 800,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
};

const sectionTitleStyle: React.CSSProperties = {
  fontSize: '0.98rem',
  fontWeight: 800,
  color: 'var(--text-primary)',
  letterSpacing: '-0.01em',
};

const fieldLabelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.74rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
  color: 'var(--text-primary)',
  marginBottom: '0.4rem',
};

const inputFieldStyle: React.CSSProperties = {
  width: '100%',
  height: '48px',
  padding: '0.75rem 1.15rem',
  borderRadius: '14px',
  border: '1px solid var(--border-medium)',
  backgroundColor: 'var(--bg-surface)',
  fontFamily: 'var(--font-sans)',
  fontSize: '0.92rem',
  color: 'var(--text-primary)',
  outline: 'none',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
};

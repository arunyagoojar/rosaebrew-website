import React, { useState } from 'react';

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectInquiryModal: React.FC<ProjectInquiryModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [projectType, setProjectType] = useState('New Website (From ₹5,000)');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry: ${name} (${businessType || 'Independent Business'})`);
    const body = encodeURIComponent(
      `Hello RoséBrew,\n\n` +
        `I would like to discuss a website project:\n\n` +
        `• Name / Business: ${name}\n` +
        `• Email: ${email}\n` +
        `• Business / Practice: ${businessType}\n` +
        `• Project Scope: ${projectType}\n` +
        `• Key Requirements / Notes:\n${details}\n\n` +
        `Looking forward to your response.`
    );

    // Open user's default email client pre-addressed to rosaebrew@gmail.com
    window.open(`mailto:rosaebrew@gmail.com?subject=${subject}&body=${body}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(18, 18, 18, 0.75)',
        backdropFilter: 'blur(8px)',
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        animation: 'fadeIn 0.2s ease-out',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '28px',
          padding: '2.5rem',
          maxWidth: '560px',
          width: '100%',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.3)',
          border: '1.5px solid rgba(0, 0, 0, 0.1)',
          position: 'relative',
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: '#F3F4F6',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1.1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-dark)',
            transition: 'all 0.2s ease',
          }}
          aria-label="Close modal"
        >
          ✕
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✨</div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-dark)' }}>
              Details Prepared!
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              Your inquiry has been formatted and opened for <strong>rosaebrew@gmail.com</strong>. You can also reach us directly at any time.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="btn-pill-black"
              style={{ width: '100%', padding: '0.85rem' }}
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: '1.75rem' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#0EA5E9' }}>
                ✦ START A PROJECT
              </span>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-dark)', marginTop: '0.35rem', letterSpacing: '-0.03em' }}>
                Tell us about your business.
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>
                Inquiries are sent directly to <strong>rosaebrew@gmail.com</strong>.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={labelStyle}>Your Name / Business Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins or Studio Prism"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Your Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. sarah@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>What does your business or practice do?</label>
                <input
                  type="text"
                  placeholder="e.g. Independent Architect / Artisan Workshop / Consultant"
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Project Scope</label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  style={inputStyle}
                >
                  <option value="New Website (From ₹5,000)">New Website (From ₹5,000)</option>
                  <option value="Complete Website Redesign">Complete Website Redesign</option>
                  <option value="Digital Product / Service Catalogue">Digital Product / Service Catalogue</option>
                  <option value="Digital Identity & Custom Touchpoints">Digital Identity & Custom Touchpoints</option>
                </select>
              </div>

              <div>
                <label style={labelStyle}>Tell us what you'd like to build</label>
                <textarea
                  rows={3}
                  placeholder="Share a brief overview of your pages, goals, or timeline..."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
              </div>

              <button
                type="submit"
                className="btn-pill-black"
                style={{
                  width: '100%',
                  padding: '0.95rem',
                  fontSize: '0.95rem',
                  marginTop: '0.5rem',
                }}
              >
                <span>Send Project Inquiry</span>
                <span>→</span>
              </button>

              <div style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--text-light)' }}>
                Direct email: <strong>rosaebrew@gmail.com</strong>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.78rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
  color: 'var(--text-dark)',
  marginBottom: '0.4rem',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.75rem 1rem',
  borderRadius: '12px',
  border: '1.5px solid #E5E7EB',
  backgroundColor: '#F9FAFB',
  fontFamily: 'var(--font-sans)',
  fontSize: '0.92rem',
  color: 'var(--text-dark)',
  outline: 'none',
  transition: 'border-color 0.2s ease',
};

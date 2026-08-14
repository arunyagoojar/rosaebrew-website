import React, { useState } from 'react';
import { PointerIcon } from './PointerIcon';

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface UploadedFile {
  id: string;
  name: string;
  size: string;
  previewUrl?: string;
}

export const ProjectInquiryModal: React.FC<ProjectInquiryModalProps> = ({ isOpen, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [projectType, setProjectType] = useState('Growth & Menu Showcase (₹12,000)');
  const [timeline, setTimeline] = useState('5 to 10 Days');
  const [details, setDetails] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen && !isClosing) return null;

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 220);
  };

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const attachmentsList = uploadedFiles.length > 0
      ? `\n• Reference Files Attached (${uploadedFiles.length}):\n` + uploadedFiles.map((f) => `  - ${f.name} (${f.size})`).join('\n')
      : '';

    const subject = encodeURIComponent(`Project Inquiry: ${name} — ${businessType || 'Independent Brand'}`);
    const body = encodeURIComponent(
      `Hello RoséBrew Team,\n\n` +
        `I would like to start a website project with RoséBrew:\n\n` +
        `• Name / Brand: ${name}\n` +
        `• Email: ${email}\n` +
        `• Business / Studio: ${businessType || 'Not specified'}\n` +
        `• Project Scope: ${projectType}\n` +
        `• Desired Timeline: ${timeline}\n` +
        `• Project Requirements & Notes:\n${details || 'Ready to discuss on alignment call'}\n` +
        `${attachmentsList}\n\n` +
        `Looking forward to hearing from you soon.`
    );

    window.open(`mailto:rosaebrew@gmail.com?subject=${subject}&body=${body}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div
      className={`modal-backdrop ${isClosing ? 'closing' : ''}`}
      onClick={handleClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.72)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(1rem, 3vw, 2rem)',
      }}
    >
      <div
        className={`modal-content ${isClosing ? 'closing' : ''}`}
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: 'var(--bg-canvas)',
          borderRadius: '32px',
          padding: 'clamp(1.75rem, 4vw, 2.75rem)',
          maxWidth: '560px',
          width: '100%',
          boxShadow: 'var(--shadow-float)',
          border: '1px solid var(--border-subtle)',
          position: 'relative',
          maxHeight: '92vh',
          overflowY: 'auto',
          color: 'var(--text-primary)',
        }}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            cursor: 'pointer',
            fontSize: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-primary)',
            transition: 'all 0.2s ease',
          }}
          aria-label="Close modal"
        >
          ✕
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'rgba(244, 114, 182, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
              <PointerIcon size={30} strokeWidth={7} />
            </div>

            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
              Inquiry Formatted!
            </h3>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2.25rem' }}>
              Your project details have been formatted for direct dispatch to <strong>rosaebrew@gmail.com</strong>. We will review your scope and get back to you promptly.
            </p>

            <button
              onClick={() => {
                setSubmitted(false);
                handleClose();
              }}
              className="sivoro-btn-dark"
              style={{ width: '100%', height: '48px', justifyContent: 'center' }}
            >
              <span>Back to Studio</span>
              <span>→</span>
            </button>
          </div>
        ) : (
          <div>
            {/* Header Tag */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <PointerIcon size={20} strokeWidth={7} />
              <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#F472B6', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                START A PROJECT
              </span>
            </div>

            <h3 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2rem)', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '0.35rem' }}>
              Let's create something <br />
              <span className="italic-serif" style={{ fontWeight: 400 }}>distinctive.</span>
            </h3>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '2rem' }}>
              Direct client alignment. We typically respond within 24 hours.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              
              {/* Name & Email Row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={labelStyle}>Your Name / Brand *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maya Patel / Akuri Studio"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. maya@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={inputStyle}
                  />
                </div>
              </div>

              {/* Business Description */}
              <div>
                <label style={labelStyle}>What does your brand / business do?</label>
                <input
                  type="text"
                  placeholder="e.g. Artisanal Cafe / French Pâtisserie / Architecture"
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  style={inputStyle}
                />
              </div>

              {/* Project Scope & Timeline Dropdown Row (Standard 48px Height) */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={labelStyle}>Project Scope *</label>
                  <div style={{ position: 'relative' }}>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      style={{
                        ...inputStyle,
                        appearance: 'none',
                        WebkitAppearance: 'none',
                        paddingRight: '2.5rem',
                        cursor: 'pointer',
                      }}
                    >
                      <option value="Starter Showcase (₹5,000)">Starter Showcase (₹5,000)</option>
                      <option value="Growth & Menu Showcase (₹12,000)">Growth & Menu Showcase (₹12,000)</option>
                      <option value="Custom & Interactive Tools (Custom)">Custom & Interactive Tools (Custom)</option>
                      <option value="General Brand Consultation">General Brand Consultation</option>
                    </select>
                    <div style={{ position: 'absolute', right: '1.15rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      ▼
                    </div>
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Target Timeline</label>
                  <div style={{ position: 'relative' }}>
                    <select
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      style={{
                        ...inputStyle,
                        appearance: 'none',
                        WebkitAppearance: 'none',
                        paddingRight: '2.5rem',
                        cursor: 'pointer',
                      }}
                    >
                      <option value="5 to 10 Days">5 to 10 Days (Standard)</option>
                      <option value="Within 2 Weeks">Within 2 Weeks</option>
                      <option value="Next Month">Next Month</option>
                      <option value="Flexible Timeline">Flexible Timeline</option>
                    </select>
                    <div style={{ position: 'absolute', right: '1.15rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      ▼
                    </div>
                  </div>
                </div>
              </div>

              {/* Requirements Textarea */}
              <div>
                <label style={labelStyle}>Project Notes & Key Requirements</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about pages needed, menu items, visual inspiration, or special features..."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  style={{ ...inputStyle, height: 'auto', minHeight: '90px', padding: '0.85rem 1.15rem', resize: 'vertical' }}
                />
              </div>

              {/* Image & Asset Upload Area */}
              <div>
                <label style={labelStyle}>Reference Images / Brand Logos (Optional)</label>
                
                <label
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1.25rem 1rem',
                    border: '1.5px dashed var(--border-medium)',
                    borderRadius: '16px',
                    backgroundColor: 'var(--bg-surface)',
                    cursor: 'pointer',
                    transition: 'border-color 0.2s ease, background-color 0.2s ease',
                    textAlign: 'center',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#F472B6';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-medium)';
                  }}
                >
                  <input
                    type="file"
                    multiple
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                  />
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--bg-card)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.4rem', border: '1px solid var(--border-subtle)' }}>
                    ↑
                  </div>
                  <div style={{ fontSize: '0.86rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    Upload reference images or logo
                  </div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                    PNG, JPG, SVG, or WebP up to 10MB
                  </div>
                </label>

                {/* Uploaded File Previews */}
                {uploadedFiles.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.75rem' }}>
                    {uploadedFiles.map((file) => (
                      <div
                        key={file.id}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          padding: '0.35rem 0.75rem',
                          borderRadius: '9999px',
                          backgroundColor: 'var(--bg-card)',
                          border: '1px solid var(--border-subtle)',
                          fontSize: '0.78rem',
                          color: 'var(--text-primary)',
                        }}
                      >
                        {file.previewUrl && (
                          <img
                            src={file.previewUrl}
                            alt=""
                            style={{ width: '18px', height: '18px', borderRadius: '50%', objectFit: 'cover' }}
                          />
                        )}
                        <span style={{ maxWidth: '140px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {file.name}
                        </span>
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>({file.size})</span>
                        <button
                          type="button"
                          onClick={() => removeFile(file.id)}
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            color: 'var(--text-muted)',
                            fontSize: '0.85rem',
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

              {/* Submit Button (48px standard height) */}
              <button
                type="submit"
                className="sivoro-btn-dark"
                style={{
                  width: '100%',
                  height: '48px',
                  justifyContent: 'center',
                  fontSize: '0.94rem',
                  marginTop: '0.5rem',
                }}
              >
                <span>Send Project Inquiry</span>
                <span>→</span>
              </button>

              <div style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                Direct email: <strong>rosaebrew@gmail.com</strong>
              </div>
            </form>
          </div>
        )}
      </div>

      <style>{`
        .modal-backdrop {
          animation: modalFadeIn 0.22s ease-out forwards;
        }
        .modal-backdrop.closing {
          animation: modalFadeOut 0.2s ease-in forwards;
        }

        .modal-content {
          animation: modalScaleIn 0.24s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .modal-content.closing {
          animation: modalScaleOut 0.2s cubic-bezier(0.7, 0, 0.84, 0) forwards;
        }

        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalFadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }

        @keyframes modalScaleIn {
          from { transform: scale(0.94) translateY(10px); opacity: 0; }
          to { transform: scale(1) translateY(0); opacity: 1; }
        }
        @keyframes modalScaleOut {
          from { transform: scale(1) translateY(0); opacity: 1; }
          to { transform: scale(0.94) translateY(10px); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.74rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
  color: 'var(--text-primary)',
  marginBottom: '0.45rem',
};

const inputStyle: React.CSSProperties = {
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

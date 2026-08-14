import React from 'react';

interface PricingSectionProps {
  onOpenProjectModal: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenProjectModal }) => {
  return (
    <section id="pricing" style={{ padding: '5.5rem 0', backgroundColor: '#FFFFFF', borderTop: '1px solid var(--border-light)' }}>
      <div className="container-narrow">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
              fontWeight: 800,
              color: 'var(--text-dark)',
              letterSpacing: '-0.03em',
              marginBottom: '0.75rem',
            }}
          >
            Transparent Pricing
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', lineHeight: 1.6 }}>
            Straightforward pricing tailored to the actual requirements of your project.
          </p>
        </div>

        {/* Pricing Card */}
        <div
          style={{
            backgroundColor: '#FAFAFA',
            borderRadius: '24px',
            padding: '3rem 2.5rem',
            border: '1.5px solid var(--border-light)',
            boxShadow: 'var(--shadow-sm)',
            textAlign: 'center',
            marginBottom: '2.5rem',
          }}
        >
          <div style={{ fontSize: '0.84rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-light)', marginBottom: '0.5rem' }}>
            Starting Rate
          </div>

          <div
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.6rem)',
              fontWeight: 800,
              color: 'var(--text-dark)',
              fontFamily: 'var(--font-sans)',
              letterSpacing: '-0.04em',
              marginBottom: '1rem',
            }}
          >
            Projects start from ₹5,000
          </div>

          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.65, maxWidth: '580px', margin: '0 auto 2rem auto' }}>
            Every project begins with a clear scope discussion. We provide an exact, upfront quotation based on your specific requirements before any work begins.
          </p>

          <button
            onClick={onOpenProjectModal}
            className="btn-pill-black"
            style={{ padding: '0.85rem 2rem', border: 'none', cursor: 'pointer' }}
          >
            <span>Request a Project Quote</span>
            <span>→</span>
          </button>
        </div>

        {/* Pricing Notes & Terms */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            padding: '1.75rem 2rem',
            border: '1px solid var(--border-light)',
          }}
        >
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '1rem' }}>
            Important Details Regarding Scope & Costs:
          </h4>

          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <span>•</span>
              <span><strong>Scope-based pricing:</strong> Final pricing depends on total scope, number of pages, custom features, content preparation, and third-party integrations.</span>
            </li>
            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <span>•</span>
              <span><strong>Domains & Subscriptions:</strong> Custom domain registration, annual renewals, hosting plans, paid plugins, or third-party tool subscriptions are purchased and maintained directly in the client's name.</span>
            </li>
            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <span>•</span>
              <span><strong>Additional Features & Revisions:</strong> Any additional requirements, extra pages, or custom functionality requested beyond the agreed initial scope are clearly quoted and approved before work begins.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

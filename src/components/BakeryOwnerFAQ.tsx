import React, { useState } from 'react';

export const BakeryOwnerFAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What if our bakery menu or seasonal flavours change frequently?',
      a: 'We configure your digital catalogue so seasonal drops (Rakhi specials, Christmas plum cakes, summer mango festival bakes) can be added or toggled effortlessly without breaking your layout or waiting weeks on an agency.',
    },
    {
      q: 'How does this connect to our existing Instagram & WhatsApp?',
      a: 'Your Rosaebrew site becomes the single primary link in your Instagram bio. When a customer browses products or builds a custom cake, it formats their exact choices and opens your WhatsApp Business chat with a clean order summary.',
    },
    {
      q: 'Do you charge commissions on our cake sales like Swiggy or Zomato?',
      a: 'Zero commission. Food aggregator apps charge 20% to 30% on every order. Rosaebrew is your own independent digital asset — you keep 100% of your sales and own your customer relationships.',
    },
    {
      q: 'We have 100+ items (sourdough, pastries, entremets, cookies). Can you handle large menus?',
      a: 'Yes. We architect your catalogue with structured category filters, dietary tags (100% Eggless, Gluten-Free, Vegan), and instant search so customers find exactly what they want in seconds.',
    },
    {
      q: 'What is the turnaround time to launch our bakery?',
      a: 'A complete custom bakery digital home typically launches within 5 to 7 business days once we receive your menu list and high-res cake photos.',
    },
  ];

  return (
    <section style={{ padding: '6rem 0', backgroundColor: '#FFFFFF', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
      <div className="container-narrow">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--dark-900)', textTransform: 'uppercase' }}>
            ✦ BAKERY OWNER QUESTIONS
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: 'var(--dark-900)',
              marginTop: '0.5rem',
              letterSpacing: '-0.03em',
            }}
          >
            Clear answers to common questions.
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              style={{
                border: '1.5px solid rgba(0, 0, 0, 0.08)',
                borderRadius: '16px',
                overflow: 'hidden',
                backgroundColor: openIdx === idx ? '#FAF9F6' : '#FFFFFF',
                transition: 'all 0.2s ease',
              }}
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '1.4rem 1.75rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.08rem',
                  fontWeight: 700,
                  color: 'var(--dark-900)',
                }}
              >
                <span>{faq.q}</span>
                <span style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>
                  {openIdx === idx ? '−' : '+'}
                </span>
              </button>

              {openIdx === idx && (
                <div style={{ padding: '0 1.75rem 1.5rem 1.75rem', color: 'var(--text-muted)', fontSize: '0.96rem', lineHeight: 1.65 }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

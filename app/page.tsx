import { DoodleBackground } from "./DoodleBackground";
import { ThemeToggle } from "./ThemeToggle";

export default function Home() {
  return (
    <main>
      <DoodleBackground />

      {/* ══════════════════════════════════════
          NAV
      ══════════════════════════════════════ */}
      <nav className="nav" id="top">
        <div className="nav-inner">
          <a className="nav-logo" href="#top" aria-label="RosaeBrew Home">
            <img src="/logo.png" alt="" width={28} height={28} />
            RoséBrew
          </a>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <ThemeToggle />
            <a className="nav-cta" href="#contact" id="nav-cta">
              <span className="nav-cta-wide">Get started</span>
              <span className="nav-cta-short">Start</span>
            </a>
          </div>
        </div>
      </nav>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="hero" aria-label="Hero" id="hero">
        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>

          <p className="hero-eyebrow">Digital studio for independent cafés</p>

          <h1 className="hero-headline">
            Your café has<br />a <em>following.</em>
          </h1>

          <p className="hero-sub">
            RoséBrew turns the feeling of a loved café into websites,
            menus and social content that feel unmistakably its own,
            rooted in Jaipur's colour and craft.
          </p>

          <div className="hero-actions">
            <a className="btn btn-filled" href="#contact" id="hero-cta">
              Start your project
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PILLARS STRIP
      ══════════════════════════════════════ */}
      <section className="pillars" aria-label="At a glance">
        <div className="pillars-grid">
          <div className="pillar">
            <p className="pillar-num">100%</p>
            <p className="pillar-label">Independent cafés only</p>
            <p className="pillar-desc">We work exclusively with independent cafés that have a story to tell.</p>
          </div>
          <div className="pillar">
            <p className="pillar-num">4</p>
            <p className="pillar-label">Core services</p>
            <p className="pillar-desc">Websites, identity, menus and social, built as one coherent world.</p>
          </div>
          <div className="pillar">
            <p className="pillar-num">3 weeks</p>
            <p className="pillar-label">Average delivery</p>
            <p className="pillar-desc">From first conversation to a live, polished website in three weeks.</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SERVICES
      ══════════════════════════════════════ */}
      <section className="services" id="services" aria-labelledby="services-heading">
        <div className="container--wide">

          {/* Section header */}
          <div className="services-intro">
            <p className="sec-label">What we shape</p>
            <h2 className="sec-headline" id="services-heading">
              One café. One clear world.
            </h2>
            <p className="sec-sub">
              Everything your customer sees online should carry the same atmosphere
              they came for in person.
            </p>
          </div>

          {/* 2×2 service cards */}
          <div className="services-grid">

            <div className="svc-card" id="svc-websites">
              <div className="svc-tag"><span className="svc-num">01</span> Websites</div>
              <h3>A digital home that feels like yours.</h3>
              <p>
                Not a template wearing your colours. A custom website built
                around the specific character of your café, its rhythm,
                its regulars, its light.
              </p>
              <img className="svc-img" src="/03-cafe-front.png" alt="" aria-hidden="true" />
            </div>

            <div className="svc-card svc-card--tinted" id="svc-identity">
              <div className="svc-tag"><span className="svc-num">02</span> Digital Identity</div>
              <h3>A visual language your regulars will recognise.</h3>
              <p>
                Colours, type, and mark tightened into a system that holds
                together everywhere people meet you: your link in bio,
                your email, your signage.
              </p>
              <img className="svc-img" src="/logo.png" alt="" aria-hidden="true" />
            </div>

            <div className="svc-card svc-card--tinted" id="svc-menus">
              <div className="svc-tag"><span className="svc-num">03</span> Menus</div>
              <h3>Menus as considered as the coffee.</h3>
              <p>
                Clear, beautiful menus for print and screen that
                make choosing feel as unhurried as your best table on a
                slow morning.
              </p>
              <img className="svc-img" src="/04-coffee-ritual.png" alt="" aria-hidden="true" />
            </div>

            <div className="svc-card" id="svc-social">
              <div className="svc-tag"><span className="svc-num">04</span> Social Content</div>
              <h3>Posts that look like they belong to one brand.</h3>
              <p>
                Campaign templates and everyday content designed so every post
                feels like it came from the same place, because it did.
              </p>
              <img className="svc-img" src="/06-evening-lights.png" alt="" aria-hidden="true" />
            </div>

          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          PROCESS
      ══════════════════════════════════════ */}
      <section className="process" id="process" aria-labelledby="process-heading">
        <div className="container--wide">

          <div className="process-intro">
            <p className="sec-label">How it works</p>
            <h2 className="sec-headline" id="process-heading">
              Close attention, then clarity.
            </h2>
            <p className="sec-sub">
              Every café is already a world. Our job is to step inside,
              listen carefully, and translate that world into something
              people can find online.
            </p>
          </div>

          <div className="process-steps">

            <div className="step-card" id="step-01">
              <p className="step-num">Step 01</p>
              <img
                className="step-img"
                src="/03-cafe-front.png"
                alt=""
                aria-hidden="true"
              />
              <h3>We visit</h3>
              <p>
                We notice the room, the regulars, the rhythm
                and what already makes the café loved. Nothing
                is imposed; everything is drawn out.
              </p>
            </div>
            <div className="step-card" id="step-02">
              <p className="step-num">Step 02</p>
              <img
                className="step-img"
                src="/08-menu-and-vase.png"
                alt=""
                aria-hidden="true"
              />
              <h3>We distil</h3>
              <p>
                We shape what we found into a clear digital direction:
                colour, type, imagery, tone, without sanding off
                its character or its edges.
              </p>
            </div>

            <div className="step-card" id="step-03">
              <p className="step-num">Step 03</p>
              <img
                className="step-img"
                src="/04-coffee-ritual.png"
                alt=""
                aria-hidden="true"
              />
              <h3>We build</h3>
              <p>
                We design and deliver the website, menu and launch
                pieces, all ready for the real world, on time,
                as described.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WORLD  (quote + gallery combined)
      ══════════════════════════════════════ */}
      <section className="world-section" aria-label="Our world">
        <div className="container--wide">
          <div className="world-header">
            <img className="quote-rose" src="/07-rose-bloom.png" alt="" aria-hidden="true" />
            <p className="sec-label">The RoséBrew world</p>
            <blockquote className="world-quote">
              "The best café brands don't need inventing.<br />
              They need <strong>noticing.</strong>"
            </blockquote>
            <p className="world-attr">The RoséBrew approach, Jaipur 2026</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA
      ══════════════════════════════════════ */}
      <section className="cta-section" id="contact" aria-labelledby="cta-heading">
        <p className="sec-label">Have a café in mind?</p>
        <h2 className="sec-headline" id="cta-heading">
          Let's make the internet feel<br />more like your place.
        </h2>
        <p className="sec-sub">
          Tell us about your café and we'll come back within one working day.
          No forms, no decks. Just a conversation.
        </p>
        <div className="cta-actions">
          <a
            className="btn btn-filled"
            href="mailto:rosaebrew@gmail.com?subject=My%20café%20project"
            id="cta-email"
          >
            Email us about your café.
          </a>
        </div>
        <p className="cta-note">rosaebrew@gmail.com · Jaipur, India · Working everywhere</p>
      </section>

      {/* ══════════════════════════════════════
          FOOTER
      ══════════════════════════════════════ */}
      <footer className="footer">
        <div className="footer-inner">
          <a className="footer-logo" href="#top">
            <img src="/logo.png" alt="RosaeBrew" />
            RoséBrew
          </a>
          <p className="footer-copy">
            © 2026 RoséBrew. Digital homes for good cafés.
          </p>
          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
            <a href="#top" id="footer-top">Back to top ↑</a>
          </div>
        </div>
      </footer>

    </main>
  );
}

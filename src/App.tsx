import React from "react";
import "./index.css";

const colors = {
  neon: "#B7FF2C",
  blueTop: "#0b1020",
  blueMid: "#0C1635",
  blueBot: "#0F1E50",
};

// Buttons -----------------------------------------------------
type ButtonProps = { children: React.ReactNode };

const LimeButton: React.FC<ButtonProps> = ({ children }) => (
  <a href="#" className="limebtn">
    <span>{children}</span>
  </a>
);

const OutlineButton: React.FC<ButtonProps> = ({ children }) => (
  <a href="#" className="outlinebtn">
    {children}
  </a>
);

// Marquee -----------------------------------------------------
// repeat the text until it's long enough to fill the viewport on first frame
const repeatToMinChars = (s: string, min: number = 180): string => {
  let out = s.trim();
  const base = s.trim();
  while (out.length < min) out += " " + base;
  return out;
};

type MarqueeProps = { text: string; reverse?: boolean };

const Marquee: React.FC<MarqueeProps> = ({ text, reverse = false }) => {
  const stream = repeatToMinChars(text, 200); // bump this number if you want denser fill
  return (
    <div className="mq">
      <div className={`scroll ${reverse ? "rev" : ""}`}>
        <span className="chunk">{stream}</span>
        <span className="chunk" aria-hidden>
          {stream}
        </span>
      </div>
    </div>
  );
};

// App ---------------------------------------------------------
const App: React.FC = () => {
  const marqueeWords = ["DEFEND", "REPORT", "SHIP", "HACK", "BUILD"].join(
    "   "
  );

  const articles = [
    {
      title: "EU AI Act: 30-Day Starter",
      summary: "Scope mapping, risk log, supplier attestation—quick wins.",
      date: "Aug 2025",
    },
    {
      title: "Red-Team Lite",
      summary: "Run jailbreak suites + thresholds without a huge budget.",
      date: "Aug 2025",
    },
    {
      title: "NIST GenAI Profile",
      summary: "What evidence actually matters for audits.",
      date: "Aug 2025",
    },
  ];

  const testimonials = [
    { quote: "We shipped an eval gate in a weekend.", name: "Security Eng." },
    {
      quote: "Mapped our pilot to AI Act and unblocked enterprise.",
      name: "Founder",
    },
    { quote: "Balanced advocacy + practical steps.", name: "Policy Lead" },
  ];

  const imageSrc =
    "https://plus.unsplash.com/premium_photo-1661963063875-7f131e02bf75?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="page">
      <div className="bg" aria-hidden="true" />

      <nav className="nav">
        <div className="brand">
          <span className="dot" /> AINews<span className="accent">Box</span>
        </div>
        <div className="links">
          <a href="#">News</a>
          <a href="#">Labs</a>
          <a href="#">Advocacy</a>
          <a href="#" className="pill">
            Pricing
          </a>
        </div>
      </nav>

      <section className="mediaWrap" aria-label="showcase">
        <div className="media">
          <img src={imageSrc} alt="AI showcase" />
          <div className="fade" />
        </div>
      </section>

      <header className="hero">
        <div className="heroRow">
          <h1 className="heroTitle">
            Level up your AI security &amp; policy skills
          </h1>
          <p className="heroSub">
            Hands-on labs, real-world challenges, and curated news to keep you
            sharp.
          </p>
          <div className="ctaRow">
            <LimeButton>Start Free</LimeButton>
            <OutlineButton>Explore Labs</OutlineButton>
          </div>
        </div>
      </header>

      <Marquee text={marqueeWords} />
      <Marquee text={marqueeWords} reverse />

      {/* sections unchanged */}
      <section className="section light">
        <h2 className="sectionTitle">Latest analysis &amp; news</h2>
        <div className="flexRow wrap gap">
          {articles.map((a, i) => (
            <article key={i} className="card flexCol">
              <div className="eyebrow">Update</div>
              <h3 className="cardTitle">{a.title}</h3>
              <p className="excerpt">{a.summary}</p>
              <div className="spacer" />
              <div className="meta">{a.date}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark">
        <h2 className="sectionTitle">What people are saying</h2>
        <div className="flexRow wrap gap">
          {testimonials.map((t, i) => (
            <figure key={i} className="tcard flexCol">
              <blockquote className="grow">“{t.quote}”</blockquote>
              <figcaption>— {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="ctaBand">
        <div className="bandInner flexRow gap wrap">
          <div className="grow">
            <h3 className="bandTitle">Join the future of AI policy</h3>
            <p>Free tier available. Upgrade anytime for full access.</p>
          </div>
          <LimeButton>Get Started</LimeButton>
        </div>
      </section>

      <footer className="foot">
        © {new Date().getFullYear()} AI Policy News &amp; Advocacy.
      </footer>

      {/* inline CSS variables are referenced by index.css; colors object kept here for clarity */}
      <style>{`
        :root{
          --neon: ${colors.neon};
          --blue-top: ${colors.blueTop};
          --blue-mid: ${colors.blueMid};
          --blue-bot: ${colors.blueBot};
        }
      `}</style>
    </div>
  );
};

export default App;

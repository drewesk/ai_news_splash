import React from "react";
import "./index.css";

const colors = {
  neon: "#B7FF2C",
  blueTop: "#0b1020",
  blueMid: "#0C1635",
  blueBot: "#0F1E50",
};

// ---------------- Buttons ----------------
const Button: React.FC<{
  variant: "lime" | "outline";
  children: React.ReactNode;
}> = ({ variant, children }) => (
  <a href="#" className={variant === "lime" ? "limebtn" : "outlinebtn"}>
    <span>{children}</span>
  </a>
);

// ---------------- Marquee ----------------
const repeatToMinChars = (s: string, min: number = 180) => {
  let out = s.trim();
  const base = s.trim();
  while (out.length < min) out += " " + base;
  return out;
};

const Marquee: React.FC<{ text: string; reverse?: boolean }> = ({
  text,
  reverse = false,
}) => {
  const stream = repeatToMinChars(text, 200);
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

// ---------------- Reusable Card Components ----------------
type Article = { title: string; summary: string; date: string };
type Testimonial = { quote: string; name: string };

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => (
  <article className="card flexCol">
    <div className="eyebrow">Update</div>
    <h3 className="cardTitle">{article.title}</h3>
    <p className="excerpt">{article.summary}</p>
    <div className="spacer" />
    <div className="meta">{article.date}</div>
  </article>
);

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => (
  <figure className="tcard flexCol">
    <blockquote className="grow">“{testimonial.quote}”</blockquote>
    <figcaption>— {testimonial.name}</figcaption>
  </figure>
);

// ---------------- App ----------------
const App: React.FC = () => {
  const marqueeWords = ["DEFEND", "REPORT", "SHIP", "HACK", "BUILD"].join(
    "   "
  );

  const articles: Article[] = [
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

  const testimonials: Testimonial[] = [
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
          {["News", "Labs", "Advocacy"].map((link) => (
            <a key={link} href="#">
              {link}
            </a>
          ))}
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
            <Button variant="lime">Start Free</Button>
            <Button variant="outline">Explore Labs</Button>
          </div>
        </div>
      </header>

      <Marquee text={marqueeWords} />
      <Marquee text={marqueeWords} reverse />

      <section className="section light">
        <h2 className="sectionTitle">Latest analysis &amp; news</h2>
        <div className="flexRow wrap gap">
          {articles.map((a) => (
            <ArticleCard key={a.title} article={a} />
          ))}
        </div>
      </section>

      <section className="section dark">
        <h2 className="sectionTitle">What people are saying</h2>
        <div className="flexRow wrap gap">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </section>

      <section className="ctaBand">
        <div className="bandInner flexRow gap wrap">
          <div className="grow">
            <h3 className="bandTitle">Join the future of AI policy</h3>
            <p>Free tier available. Upgrade anytime for full access.</p>
          </div>
          <Button variant="lime">Get Started</Button>
        </div>
      </section>

      <footer className="foot">
        © {new Date().getFullYear()} AI Policy News &amp; Advocacy.
      </footer>

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
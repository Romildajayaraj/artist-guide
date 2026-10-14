import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const artworks = [
  {
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1000&q=90",
    title: "COLOR YOUR WORLD",
    alt: "Colorful abstract painting",
  },
  {
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=900&q=90",
    title: "MAKE IT ORIGINAL",
    alt: "Framed fine art painting",
  },
  {
    image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=900&q=90",
    title: "LET ART SPEAK",
    alt: "Contemporary artwork",
  },
  {
    image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=900&q=90",
    title: "CREATE YOUR LEGACY",
    alt: "Colorful contemporary canvas",
  },
];

const guides = [
  {
    id: "registration",
    number: "01",
    icon: "✳",
    label: "THE FIRST BRUSHSTROKE",
    title: "Create your artist account",
    description:
      "Every great artistic journey starts with a spark. Create your account and join a community that celebrates original creativity.",
    steps: [
      ["Visit My Account", "Go to My Account at the top-right corner of the website."],
      ["Choose Login / Register", "Open the Login/Register page."],
      ["Complete the JOIN US form", "Enter your Full Name, Email Address, Mobile Number and Password. Choose “I am an artist”."],
      ["Select your profession", "Choose your profession, such as painter, sculptor, or another artistic discipline."],
      ["Accept the terms", "Read and accept the Zigguratss Terms & Conditions."],
      ["Click JOIN US", "Submit your registration form by clicking JOIN US."],
      ["Check your email", "A verification link will be sent to your registered email address."],
      ["Verify your account", "Open the email and click “Link to Verify”. Your account will then be verified."],
    ].map(([title, text]) => ({ title, text })),
  },
  {
    id: "profile",
    number: "02",
    icon: "✺",
    label: "YOUR STORY, YOUR SIGNATURE",
    title: "Build your artist profile",
    description:
      "Introduce yourself to the art world. A complete profile helps visitors understand your background, experience and creative identity.",
    steps: [
      ["Log in to your account", "Sign in using your registered email address and password."],
      ["Open My Profile", "Fill in your name, country details, address and artist description."],
      ["Add payment details", "Enter payment gateway details if applicable."],
      ["Add your bank details", "Provide the required bank details for receiving payments after your artwork is sold."],
      ["Share your portfolio", "Add a link to your art portfolio."],
      ["Cross-check your details", "Review all the information you have entered before submitting the application."],
      ["Click Submit", "Submit your completed profile information."],
      ["Add other information", "At the top of your profile, open “Add other Information”."],
      ["Showcase your achievements", "Fill in your awards, recognitions, prizes won and exhibition details."],
      ["Click Continue", "Review the additional information and click Continue."],
    ].map(([title, text]) => ({ title, text })),
  },
  {
    id: "artwork",
    number: "03",
    icon: "✷",
    label: "FROM YOUR STUDIO TO THE WORLD",
    title: "Upload your artwork",
    description:
      "Your masterpiece deserves the spotlight. Add its details, showcase its best angles and submit it to the Zigguratss team.",
    steps: [
      ["Go to My Artwork", "Open the My Artwork section in your account."],
      ["Choose your artwork type", "Select the type of artwork you want to upload, then click Submit."],
      ["Describe your artwork", "Enter the artwork details, including medium, technique, style, size and other requested information."],
      ["Select your main image", "Choose the main image of the artwork you want to upload."],
      ["Choose commission preferences", "Select whether you are available for commission work."],
      ["Choose shipping options", "Select the appropriate shipping options."],
      ["Accept the terms", "Read and accept the Zigguratss Terms & Conditions, then click Continue."],
      ["Add at least 5 images", "Upload a minimum of 5 images in the Add More Images section."],
      ["Submit your artwork", "Click Submit. Your artwork will be sent to the Zigguratss team for review and activation."],
    ].map(([title, text]) => ({ title, text })),
  },
];

function FloatingArtwork({ artwork, className }) {
  return (
    <figure className={`floating-artwork ${className}`}>
      <img src={artwork.image} alt={artwork.alt} />
      <figcaption>{artwork.title}</figcaption>
      <span className="image-sheen" aria-hidden="true" />
    </figure>
  );
}

function LivingArtScene({ variant = "scene-hero" }) {
  return (
    <div className={`living-art-scene ${variant}`} aria-hidden="true">
      <span className="scene-light-beam beam-one" />
      <span className="scene-light-beam beam-two" />
      <span className="scene-floor-line" />
      <span className="scene-spark spark-a">✦</span>
      <span className="scene-spark spark-b">✧</span>
      <span className="scene-spark spark-c">✳</span>
      {["walker-one", "walker-two", "walker-three"].map((person, index) => (
        <div className={`walking-artist ${person}`} key={person}>
          <span className="artist-shadow" />
          <svg className="artist-body" viewBox="0 0 90 130" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle className="artist-head" cx="43" cy="17" r="10" />
            <path className="artist-hair" d="M33 16C32 5 40 2 47 6C53 8 54 15 52 20L48 14L36 13Z" />
            <path className="artist-coat" d="M34 30Q43 25 52 31L59 62L53 68L33 68L27 61Z" />
            <path className="artist-shirt" d="M39 31L46 31L49 63L36 63Z" />
            <path className="artist-arm arm-back" d="M33 34L22 49L28 59" />
            <path className="artist-arm arm-front" d="M51 35L61 47L69 39" />
            <path className="artist-leg leg-back" d="M37 66L31 88L22 105" />
            <path className="artist-leg leg-front" d="M49 66L53 87L66 100" />
            <path className="artist-shoe shoe-back" d="M22 105L15 108L26 110" />
            <path className="artist-shoe shoe-front" d="M66 100L73 103L65 107" />
            <g className="artist-canvas">
              <rect x="60" y="45" width="23" height="29" rx="1" />
              <path d="M64 67L69 58L73 63L79 53" />
              <path d="M70 45V39" />
            </g>
            <path className="artist-brush" d="M69 39L78 23" />
            <circle className="brush-tip" cx="79" cy="22" r="2" />
          </svg>
          <span className="artist-nameplate">{index === 0 ? "THE PAINTER" : index === 1 ? "THE MAKER" : "THE DREAMER"}</span>
        </div>
      ))}
    </div>
  );
}

function SectionReveal({ children, className = "", ...props }) {
  return (
    <section className={`reveal ${className}`} {...props}>
      {children}
    </section>
  );
}

function GuideSection({ guide, index }) {
  const [expanded, setExpanded] = useState(true);
  const [completed, setCompleted] = useState([]);
  const sectionRef = useRef(null);

  const toggleStep = (stepIndex) => {
    setCompleted((current) =>
      current.includes(stepIndex)
        ? current.filter((item) => item !== stepIndex)
        : [...current, stepIndex]
    );
  };

  return (
    <section
      className={`guide-section reveal ${index % 2 ? "guide-section-reverse" : ""}`}
      id={guide.id}
      ref={sectionRef}
    >
      <div className="guide-intro">
        <div className="section-index"><span>{guide.number}</span><i /></div>
        <span className="eyebrow">{guide.label}</span>
        <div className="guide-symbol" aria-hidden="true">{guide.icon}</div>
        <h2>{guide.title}</h2>
        <p className="guide-description">{guide.description}</p>

        <div className="guide-progress">
          <div className="progress-label">
            <span>YOUR PROGRESS</span>
            <strong>{completed.length}/{guide.steps.length}</strong>
          </div>
          <div className="progress-track">
            <span style={{ width: `${(completed.length / guide.steps.length) * 100}%` }} />
          </div>
        </div>

        <button
          className="outline-button"
          type="button"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
          aria-controls={`${guide.id}-steps`}
        >
          {expanded ? "COLLAPSE STEPS" : "EXPLORE THE STEPS"}
          <span className={expanded ? "button-symbol is-open" : "button-symbol"}>↗</span>
        </button>
        <div className="brush-strokes" aria-hidden="true"><i /><i /><i /><i /><i /></div>
      </div>

      <div className={`steps-wrap ${expanded ? "steps-wrap-open" : ""}`} id={`${guide.id}-steps`}>
        {expanded && (
          <div className="steps-list">
            {guide.steps.map((step, stepIndex) => {
              const isComplete = completed.includes(stepIndex);
              return (
                <article
                  className={`guide-step ${isComplete ? "step-complete" : ""}`}
                  key={step.title}
                  style={{ "--step-index": stepIndex }}
                >
                  <button
                    className="step-marker"
                    type="button"
                    onClick={() => toggleStep(stepIndex)}
                    aria-label={`${isComplete ? "Mark incomplete" : "Mark complete"}: ${step.title}`}
                    aria-pressed={isComplete}
                  >
                    {isComplete ? "✓" : String(stepIndex + 1).padStart(2, "0")}
                  </button>
                  <div className="step-content">
                    <span className="step-kicker">STEP {String(stepIndex + 1).padStart(2, "0")}</span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                  <span className="step-spark" aria-hidden="true">✦</span>
                </article>
              );
            })}
          </div>
        )}
      </div>
      <LivingArtScene variant={`scene-guide scene-guide-${index + 1}`} />
    </section>
  );
}

export default function App() {
  const appRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("registration");
  const [pointer, setPointer] = useState({ x: 50, y: 35 });

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = document.querySelectorAll(".reveal");

    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    } else {
      const revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -45px 0px" }
      );
      revealItems.forEach((item) => revealObserver.observe(item));

      return () => revealObserver.disconnect();
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);

      const sections = guides
        .map((guide) => document.getElementById(guide.id))
        .filter(Boolean);
      const current = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= window.innerHeight * 0.42 && rect.bottom > window.innerHeight * 0.42;
      });
      if (current) setActiveSection(current.id);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handlePointerMove = (event) => {
    if (!appRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = appRef.current.getBoundingClientRect();
    setPointer({
      x: ((event.clientX - bounds.left) / bounds.width) * 100,
      y: ((event.clientY - bounds.top) / bounds.height) * 100,
    });
  };

  return (
    <main
      className="artist-app"
      ref={appRef}
      onMouseMove={handlePointerMove}
      style={{ "--pointer-x": `${pointer.x}%`, "--pointer-y": `${pointer.y}%` }}
    >
      <div className="artist-gif-backdrop" aria-hidden="true" />
      <div className="artist-gif-shade" aria-hidden="true" />
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress / 100})` }} />
      <div className="cursor-glow" aria-hidden="true" />
      <div className="ambient-glow glow-left" aria-hidden="true" />
      <div className="ambient-glow glow-right" aria-hidden="true" />
      <div className="grain-overlay" aria-hidden="true" />

      <nav className="guide-nav" aria-label="Artist guide navigation">
        <a href="https://zigguratss.com/" className="brand-mark" aria-label="Zigguratss home">
          <span className="brand-z">Z</span>
          <span className="brand-name">ZIGGURATSS<small>ARTWORK LLP</small></span>
        </a>
        <div className="nav-links">
          <a href="#registration" className={activeSection === "registration" ? "active" : ""}>01 <span>Register</span></a>
          <a href="#profile" className={activeSection === "profile" ? "active" : ""}>02 <span>Profile</span></a>
          <a href="#artwork" className={activeSection === "artwork" ? "active" : ""}>03 <span>Artwork</span></a>
        </div>
        <a className="nav-join" href="https://zigguratss.com/">JOIN THE ARTISTS <span>↗</span></a>
      </nav>

      <header className="hero">
        <div className="hero-copy">
          <div className="hero-badge"><span className="pulse-dot" /> A CREATIVE GUIDE FOR ARTISTS</div>
          <p className="hero-overline">YOUR TALENT. YOUR STORY. YOUR STAGE.</p>
          <h1>MAKE ART.<br /><span>MAKE</span> YOUR<br />MARK<span className="hero-period">.</span></h1>
          <p className="hero-description">
            From your first sign-up to your first masterpiece online — here’s your creative journey, made simple.
          </p>
          <div className="hero-actions">
            <a className="gold-button" href="#registration">START YOUR JOURNEY <span>↗</span></a>
            <a className="text-button" href="#creative-roadmap">EXPLORE THE PROCESS <span>↓</span></a>
          </div>
          <div className="hero-note"><span className="note-star">✳</span><span>MADE FOR ARTISTS<br /><b>BUILT FOR CREATIVITY</b></span></div>
        </div>

        <div className="art-stage" aria-label="Floating art gallery">
          <div className="stage-halo" />
          <div className="orbit orbit-one"><i /></div>
          <div className="orbit orbit-two"><i /></div>
          <div className="orbit orbit-three" />
          <div className="main-artwork">
            <img src={artworks[0].image} alt={artworks[0].alt} />
            <div className="artwork-stamp"><span>ORIGINAL</span><b>✳</b><span>ARTWORK</span></div>
          </div>
          <FloatingArtwork artwork={artworks[1]} className="floating-one" />
          <FloatingArtwork artwork={artworks[2]} className="floating-two" />
          <FloatingArtwork artwork={artworks[3]} className="floating-three" />
          <div className="floating-note note-one"><span>✦</span> THINK DIFFERENTLY</div>
          <div className="floating-note note-two"><span>✺</span> CREATE FEARLESSLY</div>
          <span className="hero-star star-one">✳</span>
          <span className="hero-star star-two">✦</span>
          <span className="hero-star star-three">✧</span>
          <span className="hero-star star-four">✳</span>
          <span className="stage-index">ARTIST PLAYGROUND / 001</span>
        </div>

        <div className="hero-bottom"><span>SCROLL TO DISCOVER</span><span className="scroll-line"><i /></span><span>01 — 03</span></div>
        <LivingArtScene variant="scene-hero" />
      </header>

      <SectionReveal className="roadmap" id="creative-roadmap">
        <div className="roadmap-topline"><span className="eyebrow">THE CREATIVE JOURNEY</span><span className="roadmap-side-note">A SIMPLE GUIDE / 3 CHAPTERS</span></div>
        <div className="roadmap-heading">
          <h2>THREE STEPS.<br /><span>INFINITE POSSIBILITIES.</span></h2>
          <p>Your art has a place in the world. Let’s get it there.</p>
        </div>
        <div className="roadmap-grid">
          {guides.map((guide, index) => (
            <a href={`#${guide.id}`} className={`roadmap-card roadmap-card-${index + 1}`} key={guide.id}>
              <span className="roadmap-card-top"><b>{guide.number}</b><i>{guide.icon}</i></span>
              <span className="roadmap-card-line" />
              <h3>{guide.title}</h3>
              <span className="roadmap-link">JUMP INTO CHAPTER <b>↗</b></span>
              <span className="roadmap-watermark">{guide.number}</span>
            </a>
          ))}
        </div>
        <LivingArtScene variant="scene-roadmap" />
      </SectionReveal>

      <div className="marquee" aria-label="Create, explore and express">
        <div className="marquee-track">
          {Array.from({ length: 6 }, (_, index) => (
            <span key={index}>CREATE <b>✳</b> EXPLORE <b>✳</b> EXPRESS <b>✳</b> SHARE YOUR ART <b>✳</b> INSPIRE THE WORLD <b>✳</b></span>
          ))}
        </div>
      </div>

      <div className="guide-container">
        <div className="guide-heading reveal">
          <span className="eyebrow">YOUR ARTIST HANDBOOK</span>
          <h2>FROM <span>IDEA</span> TO ICON.</h2>
          <p>Follow each chapter at your own pace. Tick off steps as you go.</p>
        </div>
        {guides.map((guide, index) => <GuideSection guide={guide} index={index} key={guide.id} />)}
      </div>

      <SectionReveal className="gallery">
        <div className="gallery-heading">
          <span className="eyebrow">A LITTLE CREATIVE INSPIRATION</span>
          <h2>YOUR NEXT IDEA<br /><span>STARTS HERE.</span></h2>
          <p>Every artist has a story. Let yours become a masterpiece.</p>
        </div>
        <div className="gallery-grid">
          {artworks.map((artwork, index) => (
            <figure className={`gallery-item gallery-item-${index + 1}`} key={artwork.title}>
              <img src={artwork.image} alt={artwork.alt} loading="lazy" />
              <figcaption><span>{artwork.title}</span><b>↗</b></figcaption>
              <span className="gallery-number">0{index + 1}</span>
            </figure>
          ))}
        </div>
        <LivingArtScene variant="scene-gallery" />
      </SectionReveal>

      <SectionReveal className="final-cta">
        <div className="cta-ring" aria-hidden="true" />
        <span className="cta-star cta-star-one">✳</span>
        <span className="cta-star cta-star-two">✦</span>
        <span className="cta-star cta-star-three">✧</span>
        <span className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</span>
        <h2>READY TO SHOW<br />THE WORLD <span>YOUR ART?</span></h2>
        <p>Your creativity deserves to be seen. Take the first step and join the Zigguratss artist community.</p>
        <a className="gold-button cta-button" href="https://zigguratss.com/">LET’S MAKE ART HAPPEN <span>↗</span></a>
        <div className="cta-footnote">MAKE IT ORIGINAL <span>✳</span> MAKE IT YOURS</div>
        <LivingArtScene variant="scene-cta" />
      </SectionReveal>

      <footer className="artist-footer">
        <div className="footer-main">
          <a className="brand-mark footer-brand" href="https://zigguratss.com/">
            <span className="brand-z">Z</span><span className="brand-name">ZIGGURATSS<small>ARTWORK LLP</small></span>
          </a>
          <p>Where creativity finds its canvas.<br />A world for original art and the people who make it.</p>
          <a className="footer-top" href="#top" onClick={(event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>BACK TO TOP ↑</a>
        </div>
        <div className="footer-links">
          <a href="https://zigguratss.com/cms/customer-guide">Customer Guide</a>
          <a href="https://zigguratss.com/cms/artist-guide">Artist Guide</a>
          <a href="https://zigguratss.com/cms/terms-and-conditions">Terms & Conditions</a>
          <a href="https://zigguratss.com/cms/contest-rules">Contest Rules</a>
          <a href="https://zigguratss.com/about/">About Us</a>
          <a href="https://zigguratss.com/faq">FAQs</a>
          <a href="https://zigguratss.com/blog">Blog</a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Zigguratss Artwork LLP. All Rights Reserved.</span>
          <span>MADE WITH <b>✳</b> FOR THE LOVE OF ART</span>
        </div>
      </footer>
    </main>
  );
}

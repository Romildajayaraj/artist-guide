
import React, { useEffect, useState } from "react";
import "./App.css";

const artworks = [
  {
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=900&q=85",
    title: "COLOR YOUR WORLD",
    alt: "Vibrant abstract painting",
  },
  {
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=900&q=85",
    title: "MAKE IT ORIGINAL",
    alt: "Fine art painting",
  },
  {
    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=900&q=85",
    title: "LET ART SPEAK",
    alt: "Contemporary artwork",
  },
  {
    image:
      "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=900&q=85",
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
      {
        title: "Visit My Account",
        text: "Go to My Account at the top-right corner of the website.",
      },
      {
        title: "Choose Login / Register",
        text: "Open the Login/Register page.",
      },
      {
        title: "Complete the JOIN US form",
        text: "Enter your Full Name, Email Address, Mobile Number and Password. Choose “I am an artist”.",
      },
      {
        title: "Select your profession",
        text: "Choose your profession, such as painter, sculptor, or another artistic discipline.",
      },
      {
        title: "Accept the terms",
        text: "Read and accept the Zigguratss Terms & Conditions.",
      },
      {
        title: "Click JOIN US",
        text: "Submit your registration form by clicking JOIN US.",
      },
      {
        title: "Check your email",
        text: "A verification link will be sent to your registered email address.",
      },
      {
        title: "Verify your account",
        text: "Open the email and click “Link to Verify”. Your account will then be verified.",
      },
    ],
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
      {
        title: "Log in to your account",
        text: "Sign in using your registered email address and password.",
      },
      {
        title: "Open My Profile",
        text: "Fill in your name, country details, address and artist description.",
      },
      {
        title: "Add payment details",
        text: "Enter payment gateway details if applicable.",
      },
      {
        title: "Add your bank details",
        text: "Provide the required bank details for receiving payments after your artwork is sold.",
      },
      {
        title: "Share your portfolio",
        text: "Add a link to your art portfolio.",
      },
      {
        title: "Cross-check your details",
        text: "Review all the information you have entered before submitting the application.",
      },
      {
        title: "Click Submit",
        text: "Submit your completed profile information.",
      },
      {
        title: "Add other information",
        text: "At the top of your profile, open “Add other Information”.",
      },
      {
        title: "Showcase your achievements",
        text: "Fill in your awards, recognitions, prizes won and exhibition details.",
      },
      {
        title: "Click Continue",
        text: "Review the additional information and click Continue.",
      },
    ],
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
      {
        title: "Go to My Artwork",
        text: "Open the My Artwork section in your account.",
      },
      {
        title: "Choose your artwork type",
        text: "Select the type of artwork you want to upload, then click Submit.",
      },
      {
        title: "Describe your artwork",
        text: "Enter the artwork details, including medium, technique, style, size and other requested information.",
      },
      {
        title: "Select your main image",
        text: "Choose the main image of the artwork you want to upload.",
      },
      {
        title: "Choose commission preferences",
        text: "Select whether you are available for commission work.",
      },
      {
        title: "Choose shipping options",
        text: "Select the appropriate shipping options.",
      },
      {
        title: "Accept the terms",
        text: "Read and accept the Zigguratss Terms & Conditions, then click Continue.",
      },
      {
        title: "Add more images",
        text: "Upload a minimum of 5 images in the Add More Images section.",
      },
      {
        title: "Submit your artwork",
        text: "Click Submit. Your artwork will be sent to the Zigguratss team for review and activation.",
      },
    ],
  },
];

function FloatingArt({ artwork, className }) {
  return (
    <div className={`floating-art ${className}`}>
      <img src={artwork.image} alt={artwork.alt} />
      <span className="floating-art-label">{artwork.title}</span>
      <span className="art-image-shine" />
    </div>
  );
}

function GuideCard({ guide, index }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <section
      className={`guide-section reveal ${
        index % 2 === 1 ? "guide-reverse" : ""
      }`}
      id={guide.id}
    >
      <div className="guide-intro">
        <span className="guide-number">{guide.number}</span>
        <span className="eyebrow">{guide.label}</span>

        <div className="guide-icon">{guide.icon}</div>

        <h2>{guide.title}</h2>
        <p className="guide-description">{guide.description}</p>

        <button
          className="outline-button"
          type="button"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
        >
          {expanded ? "HIDE STEPS" : "EXPLORE STEPS"}
          <span>{expanded ? "−" : "+"}</span>
        </button>

        <div className="decoration-bars" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
      </div>

      {expanded && (
        <div className="steps-list">
          {guide.steps.map((step, stepIndex) => (
            <article className="guide-step" key={step.title}>
              <span className="step-number">
                {String(stepIndex + 1).padStart(2, "0")}
              </span>

              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>

              <span className="step-star" aria-hidden="true">
                ✦
              </span>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="artist-app">
      <div className="ambient-glow glow-left" />
      <div className="ambient-glow glow-right" />
      <div className="grain-overlay" />

      {/* HERO */}
      <section className="hero">
        <div className="hero-copy">
          <div className="hero-badge">
            <span className="pulse-dot" />
            WELCOME TO THE ARTIST PLAYGROUND
          </div>

          <h1>
            YOUR ART.
            <br />
            YOUR <span>UNIVERSE.</span>
          </h1>

          <p className="hero-description">
            Big ideas deserve a bigger canvas. Create your artist
            account, tell your story and share your original
            creations with the world.
          </p>

          <div className="hero-actions">
            <a className="gold-button" href="#registration">
              START YOUR JOURNEY <span>↗</span>
            </a>

            <a className="text-button" href="#artwork">
              MEET YOUR NEXT MASTERPIECE <span>↓</span>
            </a>
          </div>

          <div className="hero-caption">
            <span>✳</span> MADE FOR ARTISTS. BUILT FOR CREATIVITY.
          </div>
        </div>

        <div className="art-stage">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />

          <div className="main-artwork">
            <img src={artworks[0].image} alt={artworks[0].alt} />
          </div>

          <FloatingArt artwork={artworks[1]} className="floating-one" />
          <FloatingArt artwork={artworks[2]} className="floating-two" />
          <FloatingArt artwork={artworks[3]} className="floating-three" />

          <div className="floating-note note-one">
            <span>✦</span> THINK DIFFERENTLY
          </div>

          <div className="floating-note note-two">
            <span>✺</span> CREATE FEARLESSLY
          </div>

          <span className="hero-star star-one">✳</span>
          <span className="hero-star star-two">✦</span>
          <span className="hero-star star-three">✧</span>
          <span className="hero-star star-four">✳</span>
        </div>

        <div className="hero-bottom">
          <span>SCROLL TO EXPLORE</span>
          <span className="scroll-line" />
          <span>01 / 03</span>
        </div>
      </section>

      {/* THREE-STEP ROADMAP */}
      <section className="roadmap reveal">
        <div className="roadmap-heading">
          <span className="eyebrow">YOUR CREATIVE ROADMAP</span>
          <h2>Three steps. Endless possibilities.</h2>
          <p>Everything you need to take your art to the next level.</p>
        </div>

        <div className="roadmap-grid">
          {guides.map((guide) => (
            <a
              href={`#${guide.id}`}
              className="roadmap-card"
              key={guide.id}
            >
              <span className="roadmap-number">{guide.number}</span>
              <span className="roadmap-icon">{guide.icon}</span>
              <h3>{guide.title}</h3>
              <span className="roadmap-link">EXPLORE <b>↗</b></span>
            </a>
          ))}
        </div>
      </section>

      {/* ANIMATED TEXT STRIP */}
      <div className="marquee" aria-label="Create, explore and express">
        <div className="marquee-track">
          {Array.from({ length: 4 }, (_, index) => (
            <span key={index}>
              CREATE <b>✳</b> EXPLORE <b>✳</b> EXPRESS <b>✳</b>
              SHARE YOUR ART <b>✳</b> INSPIRE THE WORLD <b>✳</b>
            </span>
          ))}
        </div>
      </div>

      {/* GUIDE CONTENT */}
      <div className="guide-container">
        {guides.map((guide, index) => (
          <GuideCard key={guide.id} guide={guide} index={index} />
        ))}
      </div>

      {/* ART GALLERY */}
      <section className="gallery reveal">
        <div className="gallery-heading">
          <span className="eyebrow">A LITTLE ARTISTIC INSPIRATION</span>
          <h2>
            MAKE SOMETHING
            <br />
            <span>UNFORGETTABLE.</span>
          </h2>
          <p>Every artist has a story. Let yours become a masterpiece.</p>
        </div>

        <div className="gallery-grid">
          {artworks.map((artwork, index) => (
            <div className={`gallery-item gallery-item-${index + 1}`} key={artwork.title}>
              <img src={artwork.image} alt={artwork.alt} loading="lazy" />
              <div className="gallery-overlay">
                <span>{artwork.title}</span>
                <b>↗</b>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta reveal">
        <div className="cta-ring" />

        <span className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</span>

        <h2>
          READY TO SHOW
          <br />
          THE WORLD <span>YOUR ART?</span>
        </h2>

        <p>
          Your creativity deserves to be seen.
          Take the first step and join the Zigguratss artist community.
        </p>

        <a
          className="gold-button cta-button"
          href="https://zigguratss.com/"
        >
          LET'S MAKE ART HAPPEN <span>↗</span>
        </a>

        <span className="cta-star cta-star-one">✳</span>
        <span className="cta-star cta-star-two">✦</span>
        <span className="cta-star cta-star-three">✧</span>
      </section>

      {/* FOOTER */}
      <footer className="artist-footer">
        <a className="footer-brand" href="https://zigguratss.com/">
          <span className="footer-brand-symbol">Z</span>
          <span>
            ZIGGURATSS
            <small>ARTWORK LLP</small>
          </span>
        </a>

        <p>Where creativity finds its canvas.</p>

        <div className="footer-links">
          <a href="https://zigguratss.com/cms/customer-guide">
            Customer Guide
          </a>
          <a href="https://zigguratss.com/cms/artist-guide">
            Artist Guide
          </a>
          <a href="https://zigguratss.com/cms/terms-and-conditions">
            Terms & Conditions
          </a>
          <a href="https://zigguratss.com/about/">About Us</a>
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

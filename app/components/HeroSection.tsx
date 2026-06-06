'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../lib/LanguageContext';

export default function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const { t } = useLanguage();
  const contentRef = useRef<HTMLDivElement>(null);

  // Typing effect
  useEffect(() => {
    const roles = ['Frontend Developer', 'Backend Engineer', 'Game Developer', 'Always Iterating'];
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const type = () => {
      const currentRole = roles[roleIndex];

      if (!deleting) {
        setTypedText(currentRole.slice(0, charIndex + 1));
        charIndex++;
        if (charIndex >= currentRole.length) {
          deleting = true;
          timeoutId = setTimeout(type, 2000);
          return;
        }
        timeoutId = setTimeout(type, 80 + Math.random() * 40);
      } else {
        setTypedText(currentRole.slice(0, charIndex - 1));
        charIndex--;
        if (charIndex <= 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          timeoutId = setTimeout(type, 500);
          return;
        }
        timeoutId = setTimeout(type, 40);
      }
    };

    timeoutId = setTimeout(type, 1000);

    const cursorInterval = setInterval(() => {
      setShowCursor((p) => !p);
    }, 530);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(cursorInterval);
    };
  }, []);

  // Parallax on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const scroll = window.scrollY;
        contentRef.current.style.transform = `translateY(${scroll * 0.15}px)`;
        contentRef.current.style.opacity = `${1 - scroll / 800}`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
    >
      {/* Decorative orbs */}
      <div
        className="absolute animate-float"
        style={{
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(108, 92, 231, 0.12), transparent 70%)',
          top: '-10%',
          left: '-10%',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute animate-float"
        style={{
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 210, 255, 0.08), transparent 70%)',
          bottom: '-5%',
          right: '-5%',
          filter: 'blur(80px)',
          animationDelay: '1.5s',
        }}
      />

      {/* Content Container */}
      <div ref={contentRef} className="relative z-10 max-w-[1200px] mx-auto px-6 w-full transition-all duration-300">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-left space-y-6">
          {/* Subtitle / Friendly Greeting */}
            <p className="text-accent text-lg md:text-xl font-semibold tracking-wide animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              {t.hero.subtitle}
            </p>

            {/* Main heading */}
            <h1
              className="animate-fade-in-up"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
              }}
            >
              <span style={{ color: 'var(--text-primary)' }}>{t.hero.title} </span>
              <br className="hidden sm:inline" />
              <span className="gradient-text">{t.hero.titleAccent}</span>
            </h1>

            {/* Typing effect */}
            <div
              className="animate-fade-in-up"
              style={{
                animationDelay: '0.2s',
                fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-mono)',
                minHeight: '1.5em',
              }}
            >
              <span style={{ color: 'var(--accent)' }}>{'> '}</span>
              <span style={{ color: 'var(--text-secondary)' }}>{typedText}</span>
              <span
                style={{
                  borderRight: '2px solid',
                  borderColor: showCursor ? 'var(--accent)' : 'transparent',
                  marginLeft: '2px',
                  transition: 'border-color 0.1s',
                }}
              >
                &nbsp;
              </span>
            </div>

            {/* Description */}
            <p
              className="animate-fade-in-up text-text-secondary"
              style={{
                animationDelay: '0.3s',
                color: 'var(--text-secondary)',
                fontSize: '1.1rem',
                lineHeight: 1.6,
              }}
            >
              {t.hero.description}
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap gap-4 animate-fade-in-up pt-4"
              style={{ animationDelay: '0.4s' }}
            >
              <a href="#projects" className="btn btn-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
                {t.hero.ctaProjects}
              </a>
              <a href="#contact" className="btn btn-outline">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                {t.hero.ctaContact}
              </a>
            </div>
          </div>

          {/* Photo Section (Right column) */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl glow-border p-1.5 shadow-2xl bg-surface/30 backdrop-blur-sm">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-inner">
                <img
                  src="/me.jpg"
                  alt="Asadbek Asadov"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    // fallback if image not found
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/40 via-transparent to-transparent pointer-events-none" />
              </div>
              
              {/* Corner decorative tag */}
              <div 
                className="absolute -bottom-4 -left-4 rounded-2xl border border-default px-4 py-2 glass shadow-lg text-xs font-mono font-bold"
                style={{ color: 'var(--accent-secondary)' }}
              >
                14 y.o. Developer
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

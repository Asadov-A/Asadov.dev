'use client';

import { useEffect, useRef } from 'react';
import { useLanguage } from '../../lib/LanguageContext';

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section bg-secondary/20 relative">
      <div className="section-container">
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-start">

          {/* Biography content */}
          <div className="space-y-6 text-left">
            <h2 className="section-title">
              {t.about.title} <span className="gradient-text">{t.about.titleAccent}</span>
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed text-sm md:text-base" style={{ color: 'var(--text-secondary)' }}>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
              <p>{t.about.p4}</p>
              <p className="font-semibold text-accent">{t.about.languages}</p>
            </div>

            <div className="pt-4 border-t border-subtle">
              <p className="text-xs uppercase tracking-widest text-accent-secondary font-mono mb-2">Motto</p>
              <p className="text-lg font-bold gradient-text">{t.about.motto}</p>
            </div>

            {/* Quick Stats badges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 text-center">
              {/* Карточка 1 */}
              <div className="p-4 rounded-2xl glass border-subtle hover:border-accent transition-all duration-300">
                <div className="text-xl font-bold text-white">{t.about.stats.frontend}</div>
                <div className="text-xs text-muted mt-1">{t.about.stats.frontendDesc}</div>
              </div>

              {/* Карточка 2 */}
              <div className="p-4 rounded-2xl glass border-subtle hover:border-accent transition-all duration-300">
                <div className="text-xl font-bold text-white">{t.about.stats.backend}</div>
                <div className="text-xs text-muted mt-1">{t.about.stats.backendDesc}</div>
              </div>

              {/* Карточка 3 */}
              <div className="p-4 rounded-2xl glass border-subtle hover:border-accent transition-all duration-300">
                <div className="text-xl font-bold text-white">{t.about.stats.gamedev}</div>
                <div className="text-xs text-muted mt-1">{t.about.stats.gamedevDesc}</div>
              </div>
            </div>
          </div>

          {/* Current Focus Panel (Right column) */}
          <div className="space-y-6 lg:pl-6">
            <div className="p-8 rounded-3xl border border-default bg-surface/40 backdrop-blur-sm shadow-xl space-y-6">
              <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                {t.about.focusTitle}
              </h3>

              <ul className="space-y-4">
                {t.about.focusItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-sm text-text-secondary leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <span className="text-accent font-bold font-mono">0{index + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-subtle flex items-center justify-between text-xs text-muted font-mono">
                <span>uzbekistan_tashkent</span>
                <span>UTC+5</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

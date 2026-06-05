'use client';

import { useLanguage } from '../../lib/LanguageContext';

export default function ContactSection() {
  const { t, locale } = useLanguage();

  const SOCIALS = [
    {
      name: 'GitHub',
      handle: '@Asadov-A',
      url: 'https://github.com/Asadov-A',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      )
    },
    {
      name: 'Telegram',
      handle: '@aasad_tg',
      url: 'https://t.me/aasad_tg',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      handle: 'Asadbek Asadov',
      url: 'https://www.linkedin.com/in/asadbek-asadov-a99a1a396/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Beg%2FKPvMBSmuZCEerBj4SdA%3D%3D',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      handle: '@aasad_inst',
      url: 'https://www.instagram.com/aasad_inst/',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      )
    },
    {
      name: 'Twitter ( X )',
      handle: '@aasad_x',
      url: 'https://x.com/aasad_x',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.37-7.09-4.284 7.09H.544l8.387-9.54L0 2.25h7.548l4.775 6.263L18.244 2.25zM8.188 18.01l.696-.947L16.86 4.75h2.266L8.188 18.01z" />
        </svg>
      )
    },
    {
      name: 'Email',
      handle: 'asatovjam@gmail.com',
      url: 'mailto:asatovjam@gmail.com',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="section relative">
      <div className="section-container max-w-4xl mx-auto">
        <h2 className="section-title text-center mb-4">
          {t.contact.title} <span className="gradient-text">{t.contact.titleAccent}</span>
        </h2>
        <p className="text-center text-muted max-w-xl mx-auto mb-12">
          {t.contact.subtitle}
        </p>

        {/* Social Buttons Grid - Grid cols collapse to 1 on small mobile screens for perfect responsiveness */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {SOCIALS.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="p-5 md:p-6 rounded-2xl glass border-default flex items-center gap-4 hover:border-accent transition-all duration-300 group shadow-lg"
              style={{
                background: 'var(--surface-overlay)'
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-300 shrink-0"
                style={{
                  background: 'rgba(108, 92, 231, 0.1)',
                  color: 'var(--accent-secondary)'
                }}
              >
                {social.icon}
              </div>
              <div className="text-left min-w-0">
                <h3 className="text-xs md:text-sm font-bold text-white uppercase tracking-wider truncate">{social.name}</h3>
                <p className="text-xs text-muted font-mono mt-1 group-hover:text-accent transition-colors truncate">{social.handle}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Footer call to action */}
        <div className="text-center mt-16 pt-8 border-t border-subtle">
          <p className="text-sm md:text-base text-text-secondary" style={{ color: 'var(--text-secondary)' }}>
            {locale === 'ru'
              ? 'Есть интересный проект? Давайте создадим что-то эпическое вместе.'
              : locale === 'uz'
                ? 'Qiziqarli loyihangiz bormi? Keling, birgalikda ajoyib narsa yarataylik.'
                : "Have an interesting project? Let's build something epic together."}
          </p>
        </div>
      </div>
    </section>
  );
}

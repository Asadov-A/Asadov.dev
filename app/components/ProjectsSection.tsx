'use client';

import { useLanguage } from '../../lib/LanguageContext';

export default function ProjectsSection() {
  const { t, locale } = useLanguage();

  const PROJECTS = [
    {
      title: locale === 'ru' 
        ? 'LaunchEdge - Панель Стартапа' 
        : locale === 'uz' 
        ? 'LaunchEdge - Startap Boshqaruvi' 
        : 'LaunchEdge - Startup Dashboard',
      description: locale === 'ru'
        ? 'Удобная панель управления для основателей стартапов с метриками реального времени, статусами деплоя и воркфлоу роста.'
        : locale === 'uz'
        ? 'Startap asoschilari uchun real vaqt rejimida metrikalar, deploy holatlari va rivojlanish jarayonlarini ko\'rsatuvchi panel.'
        : 'A polished startup dashboard for founders with real-time metrics, deployment insights, and growth workflows.',
      tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      link: 'https://github.com/',
      role: locale === 'ru' ? 'Фулстек веб-приложение' : locale === 'uz' ? 'Full-stack veb ilova' : 'Full-Stack Web App'
    },
    {
      title: locale === 'ru'
        ? 'StudioFlow - Лендинг Креативной Студии'
        : locale === 'uz'
        ? 'StudioFlow - Ijodiy Studiya Sayti'
        : 'StudioFlow - Creative Studio Landing',
      description: locale === 'ru'
        ? 'Анимационный лендинг для дизайн-студии с плавной прокруткой, интеграцией с CMS и оптимизацией под мобильные экраны.'
        : locale === 'uz'
        ? 'Ijodiy studiya uchun silliq animatsiyalar, CMS integratsiyasi va mobil qurilmalar uchun moslashtirilgan landing sahifa.'
        : 'A creative studio landing page with immersive animations, modular CMS integration, and mobile-first performance.',
      tags: ['React', 'Framer Motion', 'Tailwind CSS', 'Vercel'],
      link: 'https://github.com/',
      role: locale === 'ru' ? 'Фронтенд и Анимации' : locale === 'uz' ? 'Frontend va Animatsiyalar' : 'Frontend & Animations'
    },
    {
      title: locale === 'ru'
        ? 'GameSwap - Игровая Утилита'
        : locale === 'uz'
        ? 'GameSwap - O\'yinlar Tizimi'
        : 'GameSwap - Gaming Platform Utility',
      description: locale === 'ru'
        ? 'Веб-интерфейс для геймеров с обменом инвентарем, статусами матчей и интеграцией игровых API.'
        : locale === 'uz'
        ? 'Geymerlar uchun ijtimoiy ulashish, mos keluvchi o\'yinchilar holati va API orqali o\'yin natijalarini ko\'rsatish tizimi.'
        : 'A modern browser-based game utility interface with social sharing, matchmaking status, and API-driven progress.',
      tags: ['TypeScript', 'Node.js', 'Express', 'REST API'],
      link: 'https://github.com/',
      role: locale === 'ru' ? 'Веб-сервис и API' : locale === 'uz' ? 'Veb-xizmat va API' : 'Web Service & API'
    }
  ];

  return (
    <section id="projects" className="section bg-secondary/30 relative">
      <div className="section-container">
        <h2 className="section-title text-center mb-4">
          {t.projects.title} <span className="gradient-text">{t.projects.titleAccent}</span>
        </h2>
        <p className="text-center text-muted max-w-xl mx-auto mb-12">
          {locale === 'ru' 
            ? 'Мои избранные проекты, созданные с упором на производительность, архитектуру и проработанный UX.' 
            : locale === 'uz'
            ? 'Tezlik, arxitektura va ajoyib foydalanish qulayligiga ega bo\'lgan mening tanlangan loyihalarim.'
            : 'Featured projects built across full-stack development, interactive frontends, and API service architecture.'}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {PROJECTS.map((proj, idx) => (
            <div key={idx} className="project-card flex flex-col justify-between hover:border-accent transition-all duration-300">
              <div>
                <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-2">{proj.role}</span>
                <h3 className="text-xl font-bold text-primary mb-3">{proj.title}</h3>
                <p className="text-secondary text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>{proj.description}</p>
              </div>
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-accent/10 border border-subtle text-accent-secondary">
                      #{tag}
                    </span>
                  ))}
                </div>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-accent-secondary transition-colors"
                >
                  {t.projects.github}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

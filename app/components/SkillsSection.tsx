'use client';

import { useLanguage } from '../../lib/LanguageContext';

export default function SkillsSection() {
  const { t, locale } = useLanguage();

  const SKILLS = [
    { 
      category: locale === 'ru' ? 'Фронтенд' : locale === 'uz' ? 'Frontend' : 'Frontend', 
      items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Framer Motion'] 
    },
    { 
      category: locale === 'ru' ? 'Бэкенд и Базы данных' : locale === 'uz' ? 'Backend va Ma\'lumotlar bazasi' : 'Backend & Database', 
      items: ['C#/.NET', 'Node.js', 'NestJS', 'Express', 'Python', 'MongoDB', 'REST APIs'] 
    },
    { 
      category: locale === 'ru' ? 'Инструменты и Геймдев' : locale === 'uz' ? 'Asboblar va GameDev' : 'Tools & GameDev', 
      items: ['Unity', 'C#', 'Git', 'Vercel', 'AI Workflows', 'Product Design', 'Figma', 'AntDesign'] 
    }
  ];

  return (
    <section id="skills" className="section relative">
      <div className="section-container">
        <h2 className="section-title text-center mb-4">
          {t.skills.title} <span className="gradient-text">{t.skills.titleAccent}</span>
        </h2>
        <p className="text-center text-muted max-w-xl mx-auto mb-12">
          {locale === 'ru' 
            ? 'Набор инструментов и технологий, на которых я специализируюсь при создании приложений.' 
            : locale === 'uz'
            ? 'Ilovalar yaratishda foydalanadigan asosiy texnologiyalarim va asboblarim.'
            : 'A curated collection of tools and technologies that I specialize in for engineering digital solutions.'}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {SKILLS.map((cat, idx) => (
            <div key={idx} className="p-6 rounded-2xl glass border-default flex flex-col justify-between hover:border-accent transition-all duration-300">
              <div>
                <h3 className="text-sm font-bold text-accent-secondary mb-4 uppercase tracking-wider">{cat.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

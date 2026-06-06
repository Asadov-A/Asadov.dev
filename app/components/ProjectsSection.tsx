'use client';

import { useLanguage } from '../../lib/LanguageContext';

export default function ProjectsSection() {
  const { t, locale } = useLanguage();

  const getTranslation = (ru: string, uz: string, en: string) => {
    if (locale === 'ru') return ru;
    if (locale === 'uz') return uz;
    return en;
  };

  const PROJECTS = [
    {
      title: 'DachaGO',
      description: getTranslation(
        'Платформа для поиска и аренды загородной недвижимости с фильтрацией, картой и системой бронирования.',
        'Qishloq uylarini qidirish va ijaraga olish platformasi.',
        'A platform for discovering and renting country houses with filtering, maps, and booking capabilities.'
      ),
      tags: ['React', 'Tailwind CSS', 'Vite', 'Node.js'],
      link: 'https://github.com/akmaljonmordayev/dachago.uz',
      role: getTranslation('Full-stack разработка', 'Full-stack ishlab chiqish', 'Full-stack development'),
      stage: 'dev'
    },
    {
      title: 'ishchi24',
      description: getTranslation(
        'Платформа для соединения работодателей и работников с системой заявок и профилей.',
        'Ish beruvchilar va ishchilarni bog‘lovchi platforma.',
        'A platform connecting employers and workers with requests, profiles, and communication tools.'
      ),
      tags: ['Next.js', 'Tailwind CSS', 'ExpressJS', 'MongoDB'],
      link: '',
      role: getTranslation('Системный дизайн', 'Tizim dizayni', 'System Design'),
      stage: 'planning'
    },
    {
      title: 'Cortex',
      description: getTranslation(
        'Психологическая хоррор-игра с нелинейным повествованием.',
        'Nolinear syujetga ega psixologik horror o‘yin.',
        'A psychological horror game featuring nonlinear storytelling and AI-driven mechanics.'
      ),
      tags: ['Unity', 'C#', 'Game AI'],
      link: '',
      role: getTranslation('Гейм-дизайн', 'O‘yin dizayni', 'Game Design'),
      stage: 'idea'
    }
  ];

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'dev': return 'bg-blue-500';
      case 'planning': return 'bg-amber-500';
      case 'idea': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (stage: string) => {
    if (stage === 'dev') return getTranslation('В разработке', 'Ishlab chiqilmoqda', 'In Development');
    if (stage === 'planning') return getTranslation('Планирование', 'Rejalashtirilmoqda', 'Planning');
    return getTranslation('Идея', 'G‘oya', 'Idea');
  };

  return (
    <section id="projects" className="section bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title text-center mb-12">
          {t.projects.title} <span className="gradient-text">{t.projects.titleAccent}</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {PROJECTS.map((proj, idx) => {
            const isDimmed = proj.stage !== 'dev';
            return (
              <div 
                key={idx} 
                className={`bg-background border border-subtle rounded-xl overflow-hidden transition-all duration-300 flex flex-col ${isDimmed ? 'opacity-70 hover:opacity-100 hover:border-accent' : 'border-accent/50'}`}
              >
                <div className={`h-2 w-full ${getStageColor(proj.stage)}`} />
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-bold text-accent uppercase tracking-wider">{proj.role}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full text-white ${getStageColor(proj.stage)}`}>
                      {getStatusText(proj.stage)}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary mb-3">{proj.title}</h3>
                  <p className="text-secondary text-sm mb-6 leading-relaxed flex-grow">{proj.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 rounded bg-secondary/50 text-primary border border-subtle">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  {proj.link ? (
                    <a href={proj.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:underline">
                      GitHub Repository ↗
                    </a>
                  ) : (
                    <span className="text-sm font-medium text-muted italic">
                      {getTranslation('Ожидается релиз', 'Reliz kutilmoqda', 'Release expected soon')}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
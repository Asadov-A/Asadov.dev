'use client';
import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { Locale } from '@/lib/translations';

const LANGS = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'uz', label: 'O\'zbekcha', flag: '🇺🇿' },
];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener('mousedown', clickOutside);
    return () => document.removeEventListener('mousedown', clickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-9 h-9 md:w-auto md:px-4 flex items-center justify-center rounded-full border border-[var(--border-default)] bg-[var(--bg-secondary)] hover:border-accent transition-all"
      >
        <span>{LANGS.find(l => l.code === locale)?.flag}</span>
        <span className="hidden md:inline ml-2 text-xs font-medium">{LANGS.find(l => l.code === locale)?.label}</span>
      </button>

      <div className={`absolute top-full right-0 mt-2 p-1 bg-[var(--surface)] border border-[var(--border-subtle)] rounded-xl shadow-xl transition-all duration-300 w-32 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
        {LANGS.map((l) => (
          <button key={l.code} onClick={() => { setLocale(l.code as Locale); setIsOpen(false); }} className="flex items-center gap-2 w-full px-3 py-2 hover:bg-[var(--bg-secondary)] rounded-lg text-xs">
            {l.flag} {l.label}
          </button>
        ))}
      </div>
    </div>
  );
}
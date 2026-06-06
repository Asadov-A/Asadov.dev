'use client';
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../../lib/LanguageContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();
  const NAV_ITEMS = [
    { id: 'hero', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'skills', label: t.nav.skills },
    { id: 'projects', label: t.nav.projects },
    { id: 'contact', label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-strong py-3' : 'py-5'}`}>
      <nav className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 h-10">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white text-sm" style={{ background: 'var(--gradient-hero)' }}>{'</>'}</div>
          <span className="font-extrabold text-lg text-[var(--text-primary)]">Asadov<span className="gradient-text">.dev</span></span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <button key={item.id} onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })} className="text-sm font-medium hover:text-accent transition">
              {item.label}
            </button>
          ))}
          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <button onClick={() => setMobileOpen(!mobileOpen)} className="w-9 h-9 flex flex-col items-center justify-center gap-1.5">
            <span className={`w-5 h-0.5 bg-[var(--text-primary)] transition-transform ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-5 h-0.5 bg-[var(--text-primary)] ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`w-5 h-0.5 bg-[var(--text-primary)] transition-transform ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      <div className={`md:hidden absolute top-full left-0 w-full glass-strong border-b border-[var(--border-subtle)] transition-all duration-300 overflow-hidden ${mobileOpen ? 'max-h-60' : 'max-h-0'}`}>
        <div className="px-6 py-4 flex flex-col gap-3">
          {NAV_ITEMS.map((item) => (
            <button key={item.id} onClick={() => { setMobileOpen(false); document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' }); }} className="text-left py-1 text-sm font-medium text-[var(--text-secondary)]">
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
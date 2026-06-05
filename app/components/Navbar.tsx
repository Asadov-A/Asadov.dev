'use client';

import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { useLanguage } from '../../lib/LanguageContext';
import { Locale } from '../../lib/translations';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { locale, setLocale, t } = useLanguage();

  const NAV_ITEMS = [
    { label: t.nav.home, href: '#hero' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.contact, href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = NAV_ITEMS.map((item) => item.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [t]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-strong py-3' : 'py-5'
      }`}
      style={scrolled ? { boxShadow: 'var(--shadow-md)' } : undefined}
    >
      <nav className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
          className="flex items-center gap-2 group"
        >
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-white text-sm"
            style={{
              background: 'var(--gradient-hero)',
              boxShadow: 'var(--shadow-glow)',
            }}
          >
            {'</>'}
          </div>
          <span className="font-extrabold text-lg tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Asadov<span className="gradient-text font-semibold">.dev</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
              className={`nav-link ${activeSection === item.href.slice(1) ? 'text-accent border-b-2 border-accent' : ''}`}
            >
              {item.label}
            </a>
          ))}
          
          {/* Language Selector */}
          <div className="relative">
            <select
              value={locale}
              onChange={(e) => setLocale(e.target.value as Locale)}
              className="rounded-full border border-subtle bg-surface/80 px-3 py-1 text-xs text-text-primary outline-none transition hover:border-accent cursor-pointer"
              style={{
                color: 'var(--text-primary)',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-default)'
              }}
            >
              <option value="en" className="bg-surface text-text-primary">🇬🇧 EN</option>
              <option value="ru" className="bg-surface text-text-primary">🇷🇺 RU</option>
              <option value="uz" className="bg-surface text-text-primary">🇺🇿 UZ</option>
            </select>
          </div>

          <ThemeToggle />
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-3">
          {/* Mobile Language Selector */}
          <select
            value={locale}
            onChange={(e) => setLocale(e.target.value as Locale)}
            className="rounded-full border border-subtle bg-surface/80 px-3 py-1 text-xs text-text-primary outline-none cursor-pointer"
            style={{
              color: 'var(--text-primary)',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-default)'
            }}
          >
            <option value="en">EN</option>
            <option value="ru">RU</option>
            <option value="uz">UZ</option>
          </select>

          <ThemeToggle />
          
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileOpen((p) => !p)}
            className="w-10 h-10 rounded-lg flex flex-col items-center justify-center gap-1.5"
            style={{ background: 'var(--surface)', border: '1px solid var(--border-subtle)' }}
            aria-label="Toggle menu"
          >
            <span
              className="block w-5 h-0.5 rounded-full transition-all duration-300"
              style={{
                background: 'var(--text-primary)',
                transform: mobileOpen ? 'rotate(45deg) translateY(4px)' : 'none',
              }}
            />
            <span
              className="block w-5 h-0.5 rounded-full transition-all duration-300"
              style={{
                background: 'var(--text-primary)',
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-5 h-0.5 rounded-full transition-all duration-300"
              style={{
                background: 'var(--text-primary)',
                transform: mobileOpen ? 'rotate(-45deg) translateY(-4px)' : 'none',
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
              className="py-3 px-4 rounded-lg transition-colors duration-200"
              style={{
                color: activeSection === item.href.slice(1) ? 'var(--accent)' : 'var(--text-secondary)',
                background: activeSection === item.href.slice(1) ? 'rgba(108, 92, 231, 0.1)' : 'transparent',
                fontSize: '0.95rem',
                fontWeight: 500,
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

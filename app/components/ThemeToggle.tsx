'use client';
import { useState, useEffect } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi2';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('theme') as 'dark' | 'light' | null;
    const preferred = saved || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    setTheme(preferred);
    document.documentElement.setAttribute('data-theme', preferred);
  }, []);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  };

  if (!mounted) return <div className="h-9 w-9 md:w-16" />;

  return (
    <button
      onClick={toggle}
      className="relative flex items-center h-9 w-9 md:w-17 rounded-full border border-[var(--border-default)] bg-[var(--bg-secondary)] p-1 transition-all duration-300 hover:border-accent"
      aria-label="Toggle theme"
    >
      <div 
        className={`absolute top-1 bottom-1 w-7 rounded-full bg-[var(--accent)] shadow-sm transition-all duration-300 flex items-center justify-center text-white
        ${theme === 'dark' ? 'left-1' : 'left-1 md:left-9'}`}
      >
        {theme === 'dark' ? <HiMoon size={14} /> : <HiSun size={14} />}
      </div>
    </button>
  );
}
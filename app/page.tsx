'use client';

import ParticleField from './components/ParticleField';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <>
      {/* Dynamic Backgrounds */}
      <div className="grid-overlay" />
      <ParticleField />

      {/* Main UI layout */}
      <Navbar />

      <main className="relative z-10 flex-grow">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <footer className="relative z-10 py-8 text-center text-xs text-muted border-t border-subtle bg-secondary/20">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4" style={{ color: 'var(--text-muted)' }}>
          <div>
            © {new Date().getFullYear()} Asadov's.dev. Crafted with Next.js & Tailwind.
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/Asadov-A" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/asadbek-asadov-a99a1a396/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Beg%2FKPvMBSmuZCEerBj4SdA%3D%3D" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
            <a href="https://x.com/Asadbek1234500" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">Twitter (X)</a>
          </div>
        </div>
      </footer>

    </>
  );
}

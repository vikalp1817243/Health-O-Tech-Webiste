import React from 'react';
import HeroSection from '../components/home/HeroSection';

function HomePage() {
  return (
    <main className="w-full">
      {/* Phase 3: Hero Section with DNA Video */}
      <HeroSection />

      {/* Temporary placeholders for upcoming sections to preserve anchor links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <section id="about" className="py-12 border-t border-[var(--border-accent)]/30 text-left">
          <h2 className="font-orbitron text-2xl sm:text-3xl font-bold text-white mb-4">
            About <span className="text-[var(--accent-cyan)]">Health-O-Tech</span>
          </h2>
          <p className="text-[var(--text-muted)] font-space leading-relaxed">
            Health-O-Tech is VIT Bhopal's premier technical club at the convergence of healthcare, informatics, and cutting-edge software engineering.
          </p>
        </section>

        <section id="events" className="py-12 border-t border-[var(--border-accent)]/30 text-left">
          <h2 className="font-orbitron text-2xl sm:text-3xl font-bold text-white mb-4">
            Featured <span className="text-[var(--accent-green)]">Events</span>
          </h2>
          <p className="text-[var(--text-muted)] font-space leading-relaxed">
            Stay tuned for our upcoming hackathons, tech talks, and Run Riot '26 highlights.
          </p>
        </section>
      </div>
    </main>
  );
}

export default HomePage;

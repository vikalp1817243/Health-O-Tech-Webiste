import React from 'react';
import HeroSection from '../components/home/HeroSection';
import StatsBar from '../components/home/StatsBar';
import AboutSection from '../components/home/AboutSection';
import DomainsSection from '../components/home/DomainsSection';
import EventsSection from '../components/home/EventsSection';

function HomePage() {
  return (
    <main className="w-full">
      {/* Hero Section with DNA Video */}
      <HeroSection />

      {/* Stats Bar */}
      <StatsBar />

      {/* About Section with Official Banner & 3 Pillars */}
      <AboutSection />

      {/* Core Domains & Verticals */}
      <DomainsSection />

      {/* Featured Events (Run Riot '26 & Tech Summits) */}
      <EventsSection />
    </main>
  );
}

export default HomePage;

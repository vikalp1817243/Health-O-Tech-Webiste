import React from 'react';
import HeroSection from '../components/home/HeroSection';
import StatsBar from '../components/home/StatsBar';
import AboutSection from '../components/home/AboutSection';
import DomainsSection from '../components/home/DomainsSection';
import ProjectsSection from '../components/home/ProjectsSection';
import EventsSection from '../components/home/EventsSection';
import MilestonesSection from '../components/home/MilestonesSection';
import FaqSection from '../components/home/FaqSection';
import JoinSection from '../components/home/JoinSection';

function HomePage() {
  return (
    <main className="w-full">
      {/* 1. Hero Section with DNA Video */}
      <HeroSection />

      {/* 2. Stats Bar */}
      <StatsBar />

      {/* 3. About Section with Official Banner & 3 Pillars */}
      <AboutSection />

      {/* 4. Core Domains & Verticals */}
      <DomainsSection />

      {/* 5. Flagship Student Projects & Innovations */}
      <ProjectsSection />

      {/* 6. Featured Events (Run Riot '26 & Tech Summits) */}
      <EventsSection />

      {/* 7. Club Milestones & Achievements */}
      <MilestonesSection />

      {/* 8. FAQ Accordion */}
      <FaqSection />

      {/* 9. Join Us & Direct Inquiry Terminal */}
      <JoinSection />
    </main>
  );
}

export default HomePage;

import React from 'react';
import HeroSection from '../components/home/HeroSection';
import BioTelemetryBar from '../components/home/BioTelemetryBar';
import StatsBar from '../components/home/StatsBar';
import AboutSection from '../components/home/AboutSection';
import DomainsSection from '../components/home/DomainsSection';
import ProjectsSection from '../components/home/ProjectsSection';
import EventsSection from '../components/home/EventsSection';
import MilestonesSection from '../components/home/MilestonesSection';
import FaqSection from '../components/home/FaqSection';
import JoinSection from '../components/home/JoinSection';
import AffiliationsSection from '../components/home/AffiliationsSection';

function HomePage() {
  return (
    <main className="w-full">
      {/* 1. Hero Section with DNA Video */}
      <HeroSection />

      {/* 2. Live Interactive Bio-Signal ECG Telemetry Canvas */}
      <BioTelemetryBar />

      {/* 3. Stats Bar */}
      <StatsBar />

      {/* 4. About Section with Official Banner & 3 Pillars */}
      <AboutSection />

      {/* 5. Core Domains & Verticals */}
      <DomainsSection />

      {/* 6. Flagship Student Projects & Innovations */}
      <ProjectsSection />

      {/* 7. Featured Events (Run Riot '26 & Tech Summits) */}
      <EventsSection />

      {/* 8. Club Milestones & Achievements */}
      <MilestonesSection />

      {/* 9. FAQ Accordion */}
      <FaqSection />

      {/* 10. Join Us & Direct Inquiry Terminal */}
      <JoinSection />

      {/* 11. Academic & Institutional Affiliations */}
      <AffiliationsSection />
    </main>
  );
}

export default HomePage;

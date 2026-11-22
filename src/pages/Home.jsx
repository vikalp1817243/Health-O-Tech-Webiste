import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import DomainsSection from '../components/home/DomainsSection';
import EventsSection from '../components/home/EventsSection';
import MilestonesSection from '../components/home/MilestonesSection';
import FaqSection from '../components/home/FaqSection';
import JoinSection from '../components/home/JoinSection';

function HomePage() {
  return (
    <main className="w-full">
      <HeroSection />
      <AboutSection />
      <DomainsSection />
      <EventsSection />
      <MilestonesSection />
      <FaqSection />
      <JoinSection />
    </main>
  );
}

export default HomePage;

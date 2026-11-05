import { Link } from 'react-router-dom';
import { MapPin, Mail, Heart } from 'lucide-react';
import { InstagramIcon, GitHubIcon } from './ui/Icons';

export const Footer = () => {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <footer id="contact" className="relative bg-[#070512] border-t border-[var(--border-accent)]/40 text-neutral-300 pt-16 pb-12 overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-[var(--accent-cyan)]/10 to-transparent pointer-events-none blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-[var(--border-accent)] p-0.5 bg-black/50 shadow-md">
                <img src="/logo.png" alt="Health-O-Tech" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="font-orbitron font-extrabold text-lg text-white tracking-wider block">
                  HEALTH<span className="text-[var(--accent-cyan)]">-O-</span>TECH
                </span>
                <span className="font-space text-[10px] text-[var(--accent-green)] uppercase tracking-[0.2em] font-semibold block -mt-1">
                  Health Informatics Club
                </span>
              </div>
            </div>

            <p className="font-space text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed max-w-sm">
              VIT Bhopal University's premier technical initiative pioneering biomedical engineering, clinical AI diagnostics, and bio-sensor IoT systems.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/healthtech_vitb/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Health-O-Tech Instagram"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[var(--text-muted)] hover:text-[#E1306C] hover:border-[#E1306C]/50 hover:shadow-[0_0_15px_rgba(225,48,108,0.3)] transition-all"
                title="Instagram @healthtech_vitb"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Health-O-Tech GitHub"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[var(--text-muted)] hover:text-white hover:border-white/30 transition-all"
                title="GitHub Repositories"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="font-orbitron font-bold text-xs uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2 font-space text-xs text-[var(--text-muted)]">
              <li>
                <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-[var(--accent-cyan)] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-[var(--accent-cyan)] transition-colors">
                  About Club
                </a>
              </li>
              <li>
                <a href="#domains" onClick={(e) => scrollToSection(e, 'domains')} className="hover:text-[var(--accent-cyan)] transition-colors">
                  Domains
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="hover:text-[var(--accent-cyan)] transition-colors">
                  Projects & R&D
                </a>
              </li>
              <li>
                <a href="#events" onClick={(e) => scrollToSection(e, 'events')} className="hover:text-[var(--accent-cyan)] transition-colors">
                  Events & Run Riot
                </a>
              </li>
              <li>
                <a href="#milestones" onClick={(e) => scrollToSection(e, 'milestones')} className="hover:text-[var(--accent-cyan)] transition-colors">
                  Milestones
                </a>
              </li>
              <li>
                <Link to="/team" className="hover:text-[var(--accent-green)] transition-colors">
                  Team Hierarchy Chart
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Research Verticals */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-orbitron font-bold text-xs uppercase tracking-wider text-white">
              Core Verticals
            </h4>
            <ul className="flex flex-col gap-2 font-space text-xs text-[var(--text-muted)]">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)]" />
                <span>AI Diagnostics & Pathology</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)]" />
                <span>Bio-Sensors & Telemetry</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-purple)]" />
                <span>Computational Genomics</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>FHIR Health Informatics</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                <span>Assistive Robotic Prosthetics</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Campus Info */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-orbitron font-bold text-xs uppercase tracking-wider text-white">
              Campus Location
            </h4>
            <div className="flex flex-col gap-2.5 font-space text-xs text-[var(--text-muted)]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>
                  VIT Bhopal University, Bhopal-Indore Highway, Kothrikalan, Sehore, Madhya Pradesh – 466114
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[var(--accent-cyan)] shrink-0" />
                <a href="mailto:healthotech@vitbhopal.ac.in" className="hover:text-white transition-colors">
                  healthotech@vitbhopal.ac.in
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-space text-xs text-[var(--text-muted)]">
          <p>© {new Date().getFullYear()} Health-O-Tech Club, VIT Bhopal. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Engineered with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>by HOT Technical Team</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, ExternalLink, Heart } from 'lucide-react';

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
                rel="noreferrer"
                aria-label="Health-O-Tech Instagram"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[var(--text-muted)] hover:text-[#E1306C] hover:border-[#E1306C]/50 hover:shadow-[0_0_15px_rgba(225,48,108,0.3)] transition-all"
                title="Instagram @healthtech_vitb"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Health-O-Tech GitHub"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[var(--text-muted)] hover:text-white hover:border-white/30 transition-all"
                title="GitHub Repositories"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
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
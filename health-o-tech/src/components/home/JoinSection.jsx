import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Send, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  HeartHandshake,
  MessageSquare
} from 'lucide-react';

export default function JoinSection() {
  const benefits = [
    'Access to embedded bio-sensors & IoT development boards',
    'Mentorship for IEEE research papers & national hackathons',
    'Hands-on organizing experience in flagship marathons like Run Riot',
    'Cross-disciplinary teamwork across engineering & health informatics',
  ];

  const scrollToContact = (e) => {
    e.preventDefault();
    const footer = document.getElementById('contact');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative rounded-3xl bg-gradient-to-br from-[#161036] via-[#100C28] to-[#0A071E] border border-[var(--border-accent)] p-8 sm:p-12 lg:p-16 shadow-[0_0_50px_rgba(0,200,255,0.12)] overflow-hidden"
      >
        {/* Ambient Neon Blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent-cyan)]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--accent-green)]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[var(--accent-green)] mb-6 font-space">
            <Sparkles className="w-4 h-4 text-[var(--accent-green)] animate-pulse" />
            <span className="font-semibold uppercase tracking-wider">Join The Health Informatics Movement</span>
          </div>

          {/* Heading */}
          <h2 className="font-orbitron font-black text-2xl sm:text-4xl md:text-5xl text-white tracking-tight mb-6 leading-tight">
            READY TO REVOLUTIONIZE <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-cyan)] via-emerald-300 to-[var(--accent-green)]">
              HEALTHCARE WITH TECHNOLOGY?
            </span>
          </h2>

          {/* Subtitle */}
          <p className="font-space text-[var(--text-muted)] text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Whether you develop AI diagnostic models, design embedded sensor circuits, conduct clinical data research, or orchestrate high-energy campus events — Health-O-Tech has a place for you.
          </p>

          {/* Benefits Checkmarks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto mb-10 text-left w-full">
            {benefits.map((b, idx) => (
              <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-green)] shrink-0" />
                <span className="font-space text-xs sm:text-sm text-neutral-300">{b}</span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 w-full">
            {/* Instagram Link */}
            <a
              href="https://www.instagram.com/healthtech_vitb/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white font-space font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(253,29,29,0.3)] hover:shadow-[0_0_30px_rgba(253,29,29,0.5)] hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>Connect On Instagram</span>
            </a>

            {/* Meet The Team Hierarchy */}
            <Link
              to="/team"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--surface-card)] border border-[var(--border-accent)] text-white font-space font-semibold text-sm hover:border-[var(--accent-cyan)] hover:bg-[var(--surface-alt)] hover:shadow-[var(--glow-cyan)] active:scale-95 transition-all"
            >
              <Users className="w-4 h-4 text-[var(--accent-cyan)]" />
              <span>Explore Team Chart</span>
            </Link>

            {/* Contact Anchor */}
            <a
              href="#contact"
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 text-[var(--text-muted)] hover:text-white hover:border-white/20 font-space text-sm transition-all"
            >
              <Send className="w-4 h-4 text-[var(--accent-green)]" />
              <span>Contact Us</span>
            </a>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

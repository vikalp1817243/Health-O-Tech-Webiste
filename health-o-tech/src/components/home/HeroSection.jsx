import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Dna, Activity, ChevronDown, Sparkles } from 'lucide-react';

export default function HeroSection() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-8 pb-16 px-4 sm:px-6 lg:px-8">
      {/* 8-second Looping DNA Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40 filter saturate-150 contrast-125 scale-105"
        >
          <source src="/dna.mp4" type="video/mp4" />
        </video>

        {/* Cyber Dark Gradient Overlays for High Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#090717]/90 via-[#090717]/70 to-[#090717] z-10" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#090717]/60 to-[#090717] z-10" />
        
        {/* Ambient Neon Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent-cyan)]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--accent-green)]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Top Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[var(--surface-card)] border border-[var(--border-accent)] text-xs font-space text-[var(--accent-cyan)] shadow-[0_0_20px_rgba(0,200,255,0.2)] backdrop-blur-md mb-6"
        >
          <Dna className="w-4 h-4 text-[var(--accent-green)] animate-pulse" />
          <span className="font-semibold tracking-wider uppercase text-[11px] sm:text-xs text-[var(--text)]">
            Health Informatics & Bio-Tech Innovations
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)] animate-ping" />
        </motion.div>

        {/* Central Logo Emblem with Cyber Holographic Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mb-6 group"
        >
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-green)] opacity-50 blur group-hover:opacity-80 transition duration-500" />
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl p-1 bg-[#090717]/90 border border-[var(--border-accent)] shadow-2xl overflow-hidden flex items-center justify-center">
            <img
              src="/logo.png"
              alt="Health-O-Tech Emblem"
              className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(0,200,255,0.6)]"
            />
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-orbitron font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-white mb-6 leading-[1.15]"
        >
          WHERE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-cyan)] via-emerald-300 to-[var(--accent-green)] glow-text-cyan">BIOLOGY</span> MEETS{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-green)] via-cyan-200 to-[var(--accent-cyan)] glow-text-green">TECHNOLOGY</span>
        </motion.h1>

        {/* Subtitle / Mission Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-space text-[var(--text-muted)] text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-8 px-4"
        >
          Pioneering the next era of digital therapeutics, AI-driven diagnostics, and biomedical systems at VIT Bhopal. 
          We bridge computer science with medical informatics to solve real-world healthcare challenges.
        </motion.p>

        {/* Action Call-to-Actions (CTAs) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full"
        >
          {/* Explore Domains Button */}
          <button
            type="button"
            onClick={() => scrollToSection('domains')}
            className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-green)] text-black font-space font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(0,200,255,0.4)] hover:shadow-[0_0_35px_rgba(0,230,118,0.6)] hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
          >
            <Activity className="w-4 h-4 text-black group-hover:rotate-12 transition-transform" />
            <span>Explore Domains</span>
            <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
          </button>

          {/* View Org Chart / Team */}
          <Link
            to="/team"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--surface-card)] border border-[var(--border-accent)] text-[var(--text)] font-space font-semibold text-sm hover:border-[var(--accent-cyan)] hover:bg-[var(--surface-alt)] hover:shadow-[var(--glow-cyan)] active:scale-95 transition-all"
          >
            <Users className="w-4 h-4 text-[var(--accent-cyan)]" />
            <span>Meet The Team</span>
          </Link>

          {/* Upcoming & Past Events */}
          <button
            type="button"
            onClick={() => scrollToSection('events')}
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-[var(--text-muted)] hover:text-white hover:border-white/20 font-space text-sm transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[var(--accent-green)]" />
            <span>Club Events</span>
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-14 flex flex-col items-center gap-2 cursor-pointer group"
          onClick={() => scrollToSection('about')}
        >
          <span className="font-space text-[10px] tracking-[0.25em] text-[var(--text-muted)] uppercase group-hover:text-[var(--accent-cyan)] transition-colors">
            Scroll To Discover
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-4 h-4 text-[var(--accent-cyan)]" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

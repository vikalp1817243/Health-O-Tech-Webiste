import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, FileText, Users, Lightbulb, Sparkles, CheckCircle2 } from 'lucide-react';

export default function MilestonesSection() {
  const milestones = [
    {
      year: '2026',
      badge: 'Campus Flagship',
      title: 'Run Riot \'26 Marathon Triumph',
      desc: 'Hosted 500+ runners across certified 5K/10K campus tracks, integrating digital health monitoring and wearable sensor demonstrations.',
      icon: Trophy,
      accentColor: 'text-[var(--accent-green)]',
      borderGlow: 'hover:border-[var(--accent-green)] hover:shadow-[0_0_20px_rgba(0,230,118,0.3)]',
    },
    {
      year: '2025',
      badge: 'Hackathon Win',
      title: '1st Place — National MedTech Hack',
      desc: 'Secured first place among 60+ collegiate teams for building an edge-AI real-time arrhythmia detection system using embedded microcontrollers.',
      icon: Award,
      accentColor: 'text-[var(--accent-cyan)]',
      borderGlow: 'hover:border-[var(--accent-cyan)] hover:shadow-[0_0_20px_rgba(0,200,255,0.3)]',
    },
    {
      year: '2025',
      badge: 'Academic Research',
      title: 'IEEE Conference Paper Publication',
      desc: 'Core research vertical authored and presented a research paper on predictive ECG telemetry and federated learning in healthcare informatics.',
      icon: FileText,
      accentColor: 'text-[var(--accent-purple)]',
      borderGlow: 'hover:border-[var(--accent-purple)] hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]',
    },
    {
      year: '2024',
      badge: 'Innovation',
      title: 'Patent Filing & Bio-Prototyping',
      desc: 'Student teams submitted provisional patent applications for an affordable myoelectric prosthetic hand and automated IV fluid level alerts.',
      icon: Lightbulb,
      accentColor: 'text-amber-400',
      borderGlow: 'hover:border-amber-400 hover:shadow-[0_0_20px_rgba(251,191,36,0.3)]',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.25, 1, 0.5, 1] },
    },
  };

  return (
    <section id="milestones" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Neon Orb */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[var(--accent-cyan)]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[var(--border-accent)] text-xs text-[var(--accent-cyan)] mb-4 font-space"
        >
          <Trophy className="w-3.5 h-3.5 text-amber-400" />
          <span>PROVEN IMPACT & ACHIEVEMENTS</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-orbitron font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4"
        >
          Club <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-cyan)] to-amber-300">Milestones</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-space text-[var(--text-muted)] text-sm sm:text-base leading-relaxed"
        >
          Celebrating our student engineers, researchers, and event organizers who consistently push the boundaries of medical technology.
        </motion.p>
      </div>

      {/* Milestones Cards Grid with Unified Stagger */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {milestones.map((item) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              variants={cardVariants}
              className={`relative p-6 rounded-2xl bg-[var(--surface-card)] border border-[var(--border-accent)] ${item.borderGlow} backdrop-blur-xl transition-[border-color,box-shadow] duration-200 flex flex-col justify-between group overflow-hidden`}
            >
              {/* Corner Year Stamp */}
              <div className="flex items-center justify-between mb-5">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 ${item.accentColor} group-hover:scale-110 transition-transform shadow-md`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-orbitron font-extrabold text-lg text-white">
                    {item.year}
                  </span>
                  <span className="font-space text-[10px] text-[var(--text-muted)] uppercase tracking-wider font-semibold">
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="font-orbitron font-bold text-base sm:text-lg text-white mb-2 leading-snug group-hover:text-[var(--accent-cyan)] transition-colors">
                  {item.title}
                </h3>
                <p className="font-space text-xs text-[var(--text-muted)] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Verified Badge */}
              <div className="mt-5 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-[var(--accent-green)] font-space">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Club Milestone</span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

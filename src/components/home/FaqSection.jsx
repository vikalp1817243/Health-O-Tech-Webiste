import { motion } from 'framer-motion';
import { HelpCircle, Compass, UserCheck, Cpu, Calendar, Award } from 'lucide-react';

export default function FaqSection() {
  const faqs = [
    {
      idx: '01',
      category: 'MISSION & IDENTITY',
      icon: Compass,
      accentColor: 'text-[var(--accent-cyan)]',
      borderAccent: 'border-[var(--accent-cyan)]/40',
      bgGlow: 'from-[var(--accent-cyan)]/15',
      q: 'What is Health-O-Tech (HOT) and what makes it unique?',
      a: 'Health-O-Tech is VIT Bhopal University\'s premier student organization established at the convergence of clinical medicine, computer science, and bio-engineering. Unlike traditional software clubs, we focus on real-world medical impact: creating AI models for diagnostics, assembling embedded IoT telemetry devices, and hosting campus-wide fitness marathons like Run Riot.',
      tag: 'Convergence of Code & Biology',
    },
    {
      idx: '02',
      category: 'ELIGIBILITY & ONBOARDING',
      icon: UserCheck,
      accentColor: 'text-[var(--accent-green)]',
      borderAccent: 'border-[var(--accent-green)]/40',
      bgGlow: 'from-[var(--accent-green)]/15',
      q: 'Do I need prior biology or medical experience to join?',
      a: 'Not at all! Healthcare technology requires computer science engineers, IoT hardware enthusiasts, UI/UX designers, content writers, and event organizers. We provide structured peer mentorship to help members learn biomedical concepts, medical imaging pipelines, and sensor interfacing from the ground up.',
      tag: 'Zero Prerequisites Required',
    },
    {
      idx: '03',
      category: 'CORE TECH STACK',
      icon: Cpu,
      accentColor: 'text-[var(--accent-purple)]',
      borderAccent: 'border-[var(--accent-purple)]/40',
      bgGlow: 'from-[var(--accent-purple)]/15',
      q: 'What technologies and frameworks does the club use?',
      a: 'Our technical teams work with Python, PyTorch, TensorFlow, and MONAI for medical machine learning; C++, Arduino, FreeRTOS, and ESP32 for wearable bio-sensors; PostgreSQL, FHIR/HL7, and Supabase for clinical database architectures; and React, Tailwind, and React Native for clinical dashboard interfaces.',
      tag: 'Full-Stack Clinical Engineering',
    },
    {
      idx: '04',
      category: 'EVENTS & FLAGSHIPS',
      icon: Calendar,
      accentColor: 'text-amber-400',
      borderAccent: 'border-amber-400/40',
      bgGlow: 'from-amber-400/15',
      q: 'How can I participate in events like Run Riot and MedHack?',
      a: 'Announcements are posted on our official Instagram (@healthtech_vitb) and internal club communication channels. Member recruitments occur at the start of academic semesters, and hackathons/marathons are open to all university students across all departments.',
      tag: 'Campus-Wide Open Access',
    },
    {
      idx: '05',
      category: 'RESEARCH & PATENTS',
      icon: Award,
      accentColor: 'text-rose-400',
      borderAccent: 'border-rose-400/40',
      bgGlow: 'from-rose-400/15',
      q: 'Can members publish research papers and file patents?',
      a: 'Yes! Our Research & Innovations vertical actively guides students in writing academic papers for IEEE conferences, preparing clinical trial datasets, and submitting provisional patent applications for assistive healthcare devices and biomedical algorithms.',
      tag: 'IEEE Papers & Intellectual Property',
    },
  ];

  return (
    <section id="faq" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[var(--border-accent)] text-xs text-[var(--accent-cyan)] mb-4 font-space"
        >
          <HelpCircle className="w-3.5 h-3.5 text-[var(--accent-green)]" />
          <span>KNOWLEDGE ARCHIVE // FAQ</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-orbitron font-extrabold text-2xl sm:text-4xl text-white tracking-tight mb-4"
        >
          Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-green)]">Questions</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-space text-[var(--text-muted)] text-xs sm:text-sm leading-relaxed"
        >
          Everything you need to know about joining Health-O-Tech, participating in our projects, and competing in hackathons.
        </motion.p>
      </div>

      {/* Sticky Stacking Cards Container */}
      <div className="relative flex flex-col pb-20">
        {faqs.map((faq, idx) => {
          const IconComponent = faq.icon;
          return (
            <div
              key={faq.q}
              className="sticky w-full"
              style={{
                top: `${96 + idx * 26}px`,
                zIndex: 10 + idx,
                marginBottom: idx === faqs.length - 1 ? '40px' : '38vh',
              }}
            >
              <div
                className={`relative rounded-3xl border ${faq.borderAccent} bg-[#0D0A22] p-6 sm:p-8 shadow-[0_-14px_36px_rgba(0,0,0,0.9)] backdrop-blur-2xl transition-[border-color,box-shadow] duration-200 overflow-hidden hover:border-white/30`}
              >
                {/* Top Ambient Glow Gradient */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${faq.bgGlow} via-white/20 to-transparent`}
                />

                {/* Card Top Meta Bar: Category Pill + Serial Index */}
                <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-5">
                  <div className="flex items-center gap-2">
                    <div className={`p-1.5 rounded-lg bg-white/5 ${faq.accentColor}`}>
                      <IconComponent className="w-3.5 h-3.5" />
                    </div>
                    <span className={`font-space text-[11px] font-bold tracking-wider uppercase ${faq.accentColor}`}>
                      {faq.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-xs text-[var(--text-muted)]">
                    <span className="font-bold text-white">{faq.idx}</span>
                    <span>/</span>
                    <span>05</span>
                  </div>
                </div>

                {/* Question */}
                <h3 className="font-orbitron font-extrabold text-base sm:text-xl text-white mb-3 tracking-tight leading-snug">
                  {faq.q}
                </h3>

                {/* Full Answer */}
                <p className="font-space text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-5">
                  {faq.a}
                </p>

                {/* Card Bottom Tag */}
                <div className="flex items-center justify-between pt-3 border-t border-white/5 font-space text-[10px] text-[var(--text-muted)]">
                  <span className="uppercase tracking-widest font-mono">
                    {faq.tag}
                  </span>
                  <span className="font-mono text-white/30">HOT_ARCHIVE // VERIFIED</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

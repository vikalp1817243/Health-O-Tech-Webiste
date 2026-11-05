import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'What is Health-O-Tech (HOT) and what makes it unique?',
      a: 'Health-O-Tech is VIT Bhopal University\'s premier student organization established at the convergence of clinical medicine, computer science, and bio-engineering. Unlike traditional software clubs, we focus on real-world medical impact: creating AI models for diagnostics, assembling embedded IoT telemetry devices, and hosting campus-wide fitness marathons like Run Riot.',
    },
    {
      q: 'Do I need prior biology or medical experience to join?',
      a: 'Not at all! Healthcare technology requires computer science engineers, IoT hardware enthusiasts, UI/UX designers, content writers, and event organizers. We provide structured peer mentorship to help members learn biomedical concepts, medical imaging pipelines, and sensor interfacing.',
    },
    {
      q: 'What technologies and frameworks does the club use?',
      a: 'Our technical teams work with Python, PyTorch, TensorFlow, and MONAI for medical machine learning; C++, Arduino, FreeRTOS, and ESP32 for wearable bio-sensors; PostgreSQL, FHIR/HL7, and Supabase for clinical database architectures; and React, Tailwind, and React Native for clinical dashboard interfaces.',
    },
    {
      q: 'How can I participate in events like Run Riot and MedHack?',
      a: 'Announcements are posted on our official Instagram (@healthtech_vitb) and internal club communication channels. Member recruitments occur at the start of academic semesters, and hackathons/marathons are open to all university students.',
    },
    {
      q: 'Can members publish research papers and file patents?',
      a: 'Yes! Our Research & Innovations vertical actively guides students in writing academic papers for IEEE conferences, preparing clinical trial datasets, and submitting provisional patent applications for assistive healthcare devices.',
    },
  ];

  return (
    <section id="faq" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[var(--border-accent)] text-xs text-[var(--accent-cyan)] mb-4 font-space"
        >
          <HelpCircle className="w-3.5 h-3.5 text-[var(--accent-green)]" />
          <span>FREQUENTLY ASKED QUESTIONS</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-orbitron font-extrabold text-2xl sm:text-4xl text-white tracking-tight mb-4"
        >
          Got <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-green)]">Questions?</span>
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

      {/* Sticky Stacking Cards Accordion List */}
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: 0.05 },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="relative flex flex-col pb-20"
      >
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <motion.div
              key={faq.q}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] },
                },
              }}
              style={{
                top: `${84 + idx * 24}px`,
                zIndex: 10 + idx,
                marginBottom: idx === faqs.length - 1 ? '0' : '36px',
              }}
              className={`sticky rounded-2xl border transition-[border-color,background-color,box-shadow] duration-200 shadow-[0_12px_40px_rgba(0,0,0,0.85)] backdrop-blur-2xl overflow-hidden ${
                isOpen
                  ? 'bg-[#130E30] border-[var(--accent-cyan)] shadow-[0_0_25px_rgba(0,200,255,0.25)]'
                  : 'bg-[#0E0A24] border-[var(--border-accent)] hover:border-white/20'
              }`}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${idx}`}
                onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer focus:outline-none"
              >
                <div className="flex items-center gap-3 pr-4">
                  <span className="font-space text-xs font-mono text-[var(--accent-cyan)] shrink-0">
                    0{idx + 1}
                  </span>
                  <span className="font-orbitron font-bold text-sm sm:text-base text-white">
                    {faq.q}
                  </span>
                </div>
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border transition-transform duration-200 ${
                    isOpen
                      ? 'bg-[var(--accent-cyan)]/20 border-[var(--accent-cyan)] text-[var(--accent-cyan)] rotate-180'
                      : 'bg-white/5 border-white/10 text-[var(--text-muted)]'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-answer-${idx}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                  >
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 font-space text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed border-t border-white/5 pt-3">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

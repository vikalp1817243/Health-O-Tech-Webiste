import React from 'react';
import { motion } from 'framer-motion';
import { Building2, GraduationCap, Network, ShieldCheck, Microscope } from 'lucide-react';

export default function AffiliationsSection() {
  const partners = [
    {
      name: 'VIT Bhopal University',
      role: 'Host Institution & Campus Labs',
      icon: GraduationCap,
      color: 'text-[var(--accent-cyan)]',
    },
    {
      name: 'IEEE EMBS Technical Track',
      role: 'Student Branch Affiliation',
      icon: Network,
      color: 'text-[var(--accent-green)]',
    },
    {
      name: 'Bioengineering & AI Lab',
      role: 'Hardware Prototyping & Sensor R&D',
      icon: Microscope,
      color: 'text-[var(--accent-purple)]',
    },
    {
      name: 'Health-Tech Innovation Hub',
      role: 'Venture & Incubation Support',
      icon: Building2,
      color: 'text-amber-400',
    },
  ];

  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[var(--border-accent)]/30">
      <div className="text-center mb-8">
        <span className="font-space text-[11px] font-mono uppercase tracking-[0.25em] text-[var(--text-muted)]">
          // ACADEMIC & INSTITUTIONAL AFFILIATIONS //
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {partners.map((p, idx) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-4 rounded-xl bg-[var(--surface-card)] border border-[var(--border-accent)]/50 hover:border-[var(--accent-cyan)] transition-all flex flex-col items-center text-center group"
            >
              <div className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 ${p.color} flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform`}>
                <Icon className="w-5 h-5" />
              </div>
              <h4 className="font-orbitron font-bold text-xs sm:text-sm text-white mb-1">
                {p.name}
              </h4>
              <p className="font-space text-[10px] sm:text-[11px] text-[var(--text-muted)]">
                {p.role}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Dna, Activity } from 'lucide-react';

export default function AboutSection() {
  const pillars = [
    {
      icon: Dna,
      title: 'Biomedical & Genomics',
      desc: 'Exploring computational biology, sequence alignment algorithms, and biomedical signal processing.',
      color: 'text-[var(--accent-cyan)]',
      border: 'border-[var(--accent-cyan)]/30',
    },
    {
      icon: Cpu,
      title: 'AI Diagnostics & Informatics',
      desc: 'Developing deep learning neural networks for medical imaging, pathology classification, and EHR systems.',
      color: 'text-[var(--accent-green)]',
      border: 'border-[var(--accent-green)]/30',
    },
    {
      icon: Activity,
      title: 'IoT & Telemedicine Devices',
      desc: 'Prototyping embedded smart wearable monitors, patient telemetry, and low-latency health alert nodes.',
      color: 'text-[var(--accent-purple)]',
      border: 'border-[var(--accent-purple)]/30',
    },
  ];

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Cyber Accents */}
      <div className="absolute top-1/2 -left-48 w-80 h-80 bg-[var(--accent-cyan)]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-orbitron font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4"
        >
          Pioneering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-green)]">Health Informatics</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-space text-[var(--text-muted)] text-sm sm:text-base leading-relaxed"
        >
          Health-O-Tech (HOT) is VIT Bhopal's premier technical club dedicated to the confluence of clinical medicine, computer science, and bio-engineering.
        </motion.p>
      </div>

      {/* 2-Column Layout: Pillars on Left, Official Banner on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* Left Column: Pillars */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: 0.1 + idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={`p-5 rounded-2xl bg-[var(--surface-card)] border ${pillar.border} hover:border-[var(--accent-cyan)] backdrop-blur-md shadow-lg transition-[border-color,box-shadow] duration-200 group`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${pillar.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-orbitron font-bold text-base sm:text-lg text-white mb-1">
                      {pillar.title}
                    </h3>
                    <p className="font-space text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="p-4 rounded-xl bg-gradient-to-r from-[var(--accent-cyan)]/10 via-[var(--accent-green)]/10 to-transparent border border-[var(--border-accent)] flex items-center gap-3 mt-2"
          >
            <ShieldCheck className="w-5 h-5 text-[var(--accent-green)] shrink-0" />
            <span className="font-space text-xs text-neutral-300">
              Active student research group affiliated with healthcare hackathons and medical innovation challenges.
            </span>
          </motion.div>
        </div>

        {/* Right Column: Official Club Banner with Holographic Frame */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 relative group"
        >
          {/* Ambient Glow */}
          <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-[var(--accent-cyan)] via-[var(--accent-purple)] to-[var(--accent-green)] opacity-40 blur-xl group-hover:opacity-70 transition duration-500" />
          
          <div className="relative rounded-2xl overflow-hidden border border-[var(--border-accent)] bg-[var(--surface)] shadow-2xl">
            {/* Banner Image */}
            <img
              src="/banner.jpg"
              alt="Health-O-Tech Club Banner"
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />

            {/* Cyber Bottom Badge Overlay */}
            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-[#090717] via-[#090717]/80 to-transparent flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-green)] animate-pulse" />
                <span className="font-orbitron font-semibold text-xs tracking-wider text-white">
                  HEALTH-O-TECH IDENTITY
                </span>
              </div>
              <span className="font-space text-[11px] text-[var(--accent-cyan)] uppercase tracking-wider font-mono">
                Est. VIT Bhopal
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

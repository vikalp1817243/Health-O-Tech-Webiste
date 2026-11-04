import React from 'react';
import { motion } from 'framer-motion';
import { 
  BrainCircuit, 
  Activity, 
  Dna, 
  Database, 
  Bot, 
  Glasses, 
  ArrowUpRight, 
  Sparkles,
  Layers
} from 'lucide-react';

export default function DomainsSection() {
  const domains = [
    {
      icon: BrainCircuit,
      title: 'AI & Diagnostics',
      tagline: 'Deep Learning & Medical Imaging',
      desc: 'Developing CNN and Vision Transformer models for MRI/CT scans, dermatological lesion segmentation, and automated radiology reports.',
      tags: ['PyTorch', 'TensorFlow', 'MONAI', 'Computer Vision'],
      accentColor: 'text-[var(--accent-cyan)]',
      borderGlow: 'hover:border-[var(--accent-cyan)] hover:shadow-[0_0_25px_rgba(0,200,255,0.25)]',
      bgGlow: 'from-[var(--accent-cyan)]/10',
    },
    {
      icon: Activity,
      title: 'IoT & Bio-Sensors',
      tagline: 'Real-time Telemetry & Wearables',
      desc: 'Engineering low-power embedded circuits, PPG heart rate trackers, ECG acquisition nodes, and MQTT-driven remote patient monitoring.',
      tags: ['ESP32', 'BLE / Zigbee', 'Bio-Sensors', 'FreeRTOS'],
      accentColor: 'text-[var(--accent-green)]',
      borderGlow: 'hover:border-[var(--accent-green)] hover:shadow-[0_0_25px_rgba(0,230,118,0.25)]',
      bgGlow: 'from-[var(--accent-green)]/10',
    },
    {
      icon: Dna,
      title: 'Genomics & Bio-Info',
      tagline: 'Computational DNA Analysis',
      desc: 'Investigating genome sequence alignment, CRISPR off-target predictive scoring, structural protein folding, and transcriptomic pipelines.',
      tags: ['Biopython', 'AlphaFold', 'BLAST', 'Genomics'],
      accentColor: 'text-[var(--accent-purple)]',
      borderGlow: 'hover:border-[var(--accent-purple)] hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]',
      bgGlow: 'from-[var(--accent-purple)]/10',
    },
    {
      icon: Database,
      title: 'Health Informatics & EHR',
      tagline: 'Clinical Data Interoperability',
      desc: 'Architecting secure FHIR/HL7 compliant healthcare databases, automated electronic health records, and privacy-preserving federated clinical data.',
      tags: ['FHIR / HL7', 'PostgreSQL', 'HIPAA Compliance', 'Supabase'],
      accentColor: 'text-amber-400',
      borderGlow: 'hover:border-amber-400 hover:shadow-[0_0_25px_rgba(251,191,36,0.25)]',
      bgGlow: 'from-amber-400/10',
    },
    {
      icon: Bot,
      title: 'Robotics & Prosthetics',
      tagline: 'Mechatronics for Healthcare',
      desc: 'Designing assistive robotic exoskeletons, EMG-controlled myoelectric prosthetic hands, and precision surgical calibration platforms.',
      tags: ['ROS 2', 'CAD / 3D Print', 'Actuators', 'Kinematics'],
      accentColor: 'text-rose-400',
      borderGlow: 'hover:border-rose-400 hover:shadow-[0_0_25px_rgba(251,113,133,0.25)]',
      bgGlow: 'from-rose-400/10',
    },
    {
      icon: Glasses,
      title: 'AR/VR & Digital Therapy',
      tagline: 'Immersive Medical Simulations',
      desc: 'Crafting interactive virtual anatomical simulations for medical student training, neuro-rehabilitation games, and surgical 3D spatial planning.',
      tags: ['Unity 3D', 'WebXR', 'Spatial Audio', 'Haptics'],
      accentColor: 'text-sky-400',
      borderGlow: 'hover:border-sky-400 hover:shadow-[0_0_25px_rgba(56,189,248,0.25)]',
      bgGlow: 'from-sky-400/10',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
    <section id="domains" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[var(--border-accent)] text-xs text-[var(--accent-cyan)] mb-4 font-space"
        >
          <Layers className="w-3.5 h-3.5 text-[var(--accent-green)]" />
          <span>INNOVATION VERTICALS</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-orbitron font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4"
        >
          Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-green)]">Domains</span> We Explore
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-space text-[var(--text-muted)] text-sm sm:text-base leading-relaxed"
        >
          Specialized technological divisions where our core teams ideate, research, develop prototypes, and compete.
        </motion.p>
      </div>

      {/* 3x2 Grid with Staggered Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {domains.map((domain, idx) => {
          const Icon = domain.icon;
          return (
            <motion.div
              key={domain.title}
              variants={cardVariants}
              className={`group relative p-6 sm:p-7 rounded-2xl bg-[var(--surface-card)] border border-[var(--border-accent)] ${domain.borderGlow} backdrop-blur-xl transition-[border-color,box-shadow] duration-200 flex flex-col justify-between overflow-hidden`}
            >
              {/* Subtle Ambient Hover Glow in Corner */}
              <div className={`absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br ${domain.bgGlow} to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none`} />

              <div>
                {/* Icon Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 ${domain.accentColor} group-hover:scale-110 transition-transform shadow-md`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-space text-[11px] font-mono tracking-widest text-[var(--text-muted)] group-hover:text-white transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="font-orbitron font-bold text-lg sm:text-xl text-white mb-1 group-hover:text-[var(--accent-cyan)] transition-colors">
                  {domain.title}
                </h3>
                <p className={`font-space text-xs font-semibold uppercase tracking-wider mb-3 ${domain.accentColor}`}>
                  {domain.tagline}
                </p>

                {/* Description */}
                <p className="font-space text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                  {domain.desc}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                {domain.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="font-space text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[var(--text-muted)] group-hover:border-white/20 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

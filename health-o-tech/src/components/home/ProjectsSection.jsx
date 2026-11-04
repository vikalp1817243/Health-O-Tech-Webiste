import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, 
  ExternalLink, 
  Activity, 
  BrainCircuit, 
  Bot, 
  Dna, 
  Sparkles, 
  Terminal, 
  Code 
} from 'lucide-react';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Innovations' },
    { id: 'ai', label: 'AI & Diagnostics' },
    { id: 'iot', label: 'IoT & Bio-Sensors' },
    { id: 'genomics', label: 'Genomics & Bionics' },
  ];

  const projects = [
    {
      id: 1,
      category: 'iot',
      title: 'PulseGuard IoT Telemetry Node',
      status: 'Live Prototype',
      statusColor: 'text-[var(--accent-green)] border-emerald-500/40 bg-emerald-500/10',
      icon: Activity,
      desc: 'Wearable chest-patch biosensor streaming real-time single-lead ECG and photoplethysmogram waveforms over MQTT to an alert dashboard.',
      tech: ['ESP32-S3', 'AD8232 ECG', 'MQTT', 'FreeRTOS', 'React'],
      github: 'https://github.com',
      accentColor: 'text-[var(--accent-green)]',
      borderGlow: 'hover:border-[var(--accent-green)] hover:shadow-[0_0_25px_rgba(0,230,118,0.25)]',
    },
    {
      id: 2,
      category: 'ai',
      title: 'NeuroScan Glioma Segmenter',
      status: 'Research Model',
      statusColor: 'text-[var(--accent-cyan)] border-cyan-500/40 bg-cyan-500/10',
      icon: BrainCircuit,
      desc: 'Hybrid Vision Transformer and 3D U-Net pipeline trained on BraTS MRI datasets for accurate sub-millimeter brain lesion contouring.',
      tech: ['PyTorch', 'MONAI', 'CUDA', 'FastAPI', 'Docker'],
      github: 'https://github.com',
      accentColor: 'text-[var(--accent-cyan)]',
      borderGlow: 'hover:border-[var(--accent-cyan)] hover:shadow-[0_0_25px_rgba(0,200,255,0.25)]',
    },
    {
      id: 3,
      category: 'genomics',
      title: 'ProsthetiX Myoelectric Hand',
      status: 'Patent Pending',
      statusColor: 'text-amber-400 border-amber-500/40 bg-amber-500/10',
      icon: Bot,
      desc: 'Sub-$50 3D-printed prosthetic forearm powered by surface EMG muscle signal classification, allowing adaptive grip poses for amputees.',
      tech: ['Arduino Nano', 'EMG Sensor', 'Servo Motors', 'SolidWorks CAD'],
      github: 'https://github.com',
      accentColor: 'text-amber-400',
      borderGlow: 'hover:border-amber-400 hover:shadow-[0_0_25px_rgba(251,191,36,0.25)]',
    },
    {
      id: 4,
      category: 'genomics',
      title: 'GenoAlign DNA Pipeline',
      status: 'Open Source',
      statusColor: 'text-[var(--accent-purple)] border-purple-500/40 bg-purple-500/10',
      icon: Dna,
      desc: 'GPU-accelerated biological sequence aligner implementing vectorized Smith-Waterman and Needleman-Wunsch algorithms for genomic variant calling.',
      tech: ['Rust', 'Biopython', 'OpenCL', 'CLI'],
      github: 'https://github.com',
      accentColor: 'text-[var(--accent-purple)]',
      borderGlow: 'hover:border-[var(--accent-purple)] hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]',
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[var(--accent-green)]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[var(--border-accent)] text-xs text-[var(--accent-cyan)] mb-4 font-space"
        >
          <Code className="w-3.5 h-3.5 text-[var(--accent-green)]" />
          <span>STUDENT INNOVATIONS & R&D</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-orbitron font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4"
        >
          Flagship <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-green)]">Projects</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-space text-[var(--text-muted)] text-sm sm:text-base leading-relaxed"
        >
          Explore tangible healthcare hardware prototypes, computer vision diagnostics, and genomic tools engineered by our technical domain teams.
        </motion.p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveFilter(cat.id)}
              className={`font-space text-xs px-4 py-2 rounded-xl transition-colors duration-200 cursor-pointer ${
                activeFilter === cat.id
                  ? 'bg-[var(--accent-cyan)]/20 text-[var(--accent-cyan)] border border-[var(--accent-cyan)]/50 shadow-[0_0_15px_rgba(0,200,255,0.25)] font-semibold'
                  : 'bg-white/5 text-[var(--text-muted)] hover:text-white border border-white/5 hover:border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((proj) => {
            const Icon = proj.icon;
            return (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className={`p-6 sm:p-7 rounded-2xl bg-[var(--surface-card)] border border-[var(--border-accent)] ${proj.borderGlow} backdrop-blur-xl shadow-lg transition-[border-color,box-shadow] duration-200 flex flex-col justify-between group`}
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 ${proj.accentColor} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`font-space text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${proj.statusColor}`}>
                      {proj.status}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-orbitron font-bold text-lg sm:text-xl text-white mb-2 group-hover:text-[var(--accent-cyan)] transition-colors">
                    {proj.title}
                  </h3>
                  <p className="font-space text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                    {proj.desc}
                  </p>
                </div>

                {/* Tech Stack & Links */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {proj.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="font-space text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-neutral-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[11px] text-[var(--accent-green)] font-space">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>HOT Lab Verified</span>
                    </div>

                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="View Project on GitHub"
                      className="inline-flex items-center gap-1.5 font-space text-xs font-semibold text-[var(--text)] hover:text-[var(--accent-cyan)] transition-colors"
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      <span>Repository</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

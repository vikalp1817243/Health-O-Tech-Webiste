import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Trophy, 
  Sparkles, 
  Flame, 
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react';

export default function EventsSection() {
  const [activeTab, setActiveTab] = useState('flagship'); // 'flagship' | 'all'
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const [previewPhoto, setPreviewPhoto] = useState(null);

  const runRiotPhotos = [
    { src: '/events/run-riot-26/run1.jpg', caption: 'Run Riot \'26 Opening Ceremony & Flag-Off' },
    { src: '/events/run-riot-26/run2.jpg', caption: 'Students & Faculty Marathon Participants Sprinting' },
    { src: '/events/run-riot-26/run3.jpg', caption: 'Health Tech Wellness & Hydration Checkpoint' },
    { src: '/events/run-riot-26/run4.jpg', caption: 'Award Ceremony & Commemorative Finisher Medals' },
  ];

  const otherEvents = [
    {
      title: 'MedHack \'25: AI in Healthcare Hackathon',
      date: 'November 2025',
      type: '36-Hour Hackathon',
      location: 'VIT Bhopal Auditorium',
      desc: '36-hour national level hackathon focused on building predictive algorithms for hospital triage, ECG telemetry, and clinical diagnostic assistants.',
      badgeColor: 'text-[var(--accent-cyan)] border-[var(--accent-cyan)]/40 bg-[var(--accent-cyan)]/10',
    },
    {
      title: 'Bio-Signals & ECG Embedded Hardware Workshop',
      date: 'January 2026',
      type: 'Hands-on Bootcamp',
      location: 'Embedded Systems Lab',
      desc: 'Hands-on session where 120+ students assembled AD8232 ECG sensor shields on Arduino/ESP32 platforms to capture real-time cardiac waveforms.',
      badgeColor: 'text-[var(--accent-green)] border-[var(--accent-green)]/40 bg-[var(--accent-green)]/10',
    },
    {
      title: 'National Digital Therapeutics Symposium',
      date: 'February 2026',
      type: 'Keynote & Panel',
      location: 'Virtual & Campus Hybrid',
      desc: 'Distinguished lectures by medtech startup founders and bioinformaticians exploring AI regulatory compliance, HIPAA standards, and venture grants.',
      badgeColor: 'text-[var(--accent-purple)] border-[var(--accent-purple)]/40 bg-[var(--accent-purple)]/10',
    },
  ];

  return (
    <section id="events" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[var(--border-accent)] text-xs text-[var(--accent-green)] mb-4 font-space"
        >
          <Flame className="w-3.5 h-3.5 text-amber-400" />
          <span>EVENTS & WORKSHOPS</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-orbitron font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4"
        >
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-green)] to-[var(--accent-cyan)]">Events</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-space text-[var(--text-muted)] text-sm sm:text-base leading-relaxed"
        >
          From high-energy health marathons to intensive med-tech hackathons, discover the signature gatherings hosted by Health-O-Tech.
        </motion.p>
      </div>

      {/* ========================================================================= */}
      {/* SPOTLIGHT: RUN RIOT '26 MARATHON & HEALTH TECH FIESTA                    */}
      {/* ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative rounded-3xl bg-[var(--surface-card)] border border-[var(--border-accent)] p-6 sm:p-8 lg:p-10 mb-14 backdrop-blur-2xl shadow-2xl overflow-hidden"
      >
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent-green)]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Details */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="font-orbitron text-[10px] tracking-wider px-3 py-1 rounded-full bg-emerald-500/20 text-[var(--accent-green)] border border-emerald-500/40 font-bold uppercase">
                  Flagship Event
                </span>
                <span className="font-space text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 text-[var(--accent-cyan)]" />
                  April 2026
                </span>
                <span className="font-space text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-rose-400" />
                  VIT Bhopal Campus
                </span>
              </div>

              {/* Title */}
              <h3 className="font-orbitron font-extrabold text-2xl sm:text-3xl text-white mb-3">
                RUN RIOT <span className="text-[var(--accent-green)]">'26</span>
              </h3>
              
              <p className="font-space text-xs sm:text-sm text-[var(--accent-cyan)] font-semibold uppercase tracking-wider mb-4">
                The Annual Fitness Sprint & Health Awareness Marathon
              </p>

              <p className="font-space text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                Organized by the Health-O-Tech Club in April 2026, Run Riot brought together over 500+ enthusiastic participants, 
                blending endurance sports with real-time health monitoring demos and fitness assessments.
              </p>

              {/* Highlights List */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="font-orbitron font-bold text-lg text-white">500+</div>
                  <div className="font-space text-[11px] text-[var(--text-muted)]">Runners & Sprinters</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="font-orbitron font-bold text-lg text-[var(--accent-green)]">5K & 10K</div>
                  <div className="font-space text-[11px] text-[var(--text-muted)]">Certified Tracks</div>
                </div>
              </div>
            </div>

            {/* Quick Caption */}
            <div className="font-space text-xs text-neutral-400 italic">
              📸 Click any photograph on the right to open high-resolution gallery view.
            </div>
          </div>

          {/* Right: Interactive Photo Showcase */}
          <div className="lg:col-span-6 flex flex-col gap-3">
            {/* Main Featured Photo Display */}
            <div 
              className="relative aspect-video rounded-2xl overflow-hidden border border-[var(--border-accent)] bg-black/60 shadow-xl cursor-pointer group"
              onClick={() => setPreviewPhoto(runRiotPhotos[activePhotoIdx].src)}
            >
              <img
                src={runRiotPhotos[activePhotoIdx].src}
                alt={runRiotPhotos[activePhotoIdx].caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <span className="font-space text-xs text-white/90 font-medium">
                  {runRiotPhotos[activePhotoIdx].caption}
                </span>
              </div>
              <div className="absolute top-3 right-3 p-2 rounded-xl bg-black/60 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-4 h-4 text-[var(--accent-cyan)]" />
              </div>
            </div>

            {/* Thumbnails Row */}
            <div className="grid grid-cols-4 gap-2">
              {runRiotPhotos.map((photo, pIdx) => (
                <button
                  key={pIdx}
                  type="button"
                  onClick={() => setActivePhotoIdx(pIdx)}
                  className={`relative aspect-video rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                    activePhotoIdx === pIdx
                      ? 'border-[var(--accent-green)] scale-95 shadow-[0_0_12px_rgba(0,230,118,0.5)]'
                      : 'border-white/10 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={photo.src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

        </div>
      </motion.div>

      {/* ========================================================================= */}
      {/* OTHER CLUB EVENTS & WORKSHOPS                                             */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {otherEvents.map((evt, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-6 rounded-2xl bg-[var(--surface-card)] border border-[var(--border-accent)] hover:border-[var(--accent-cyan)] backdrop-blur-xl shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className={`font-space text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md border ${evt.badgeColor}`}>
                  {evt.type}
                </span>
                <span className="font-space text-xs text-[var(--text-muted)] font-mono">
                  {evt.date}
                </span>
              </div>

              <h4 className="font-orbitron font-bold text-base sm:text-lg text-white mb-2 leading-snug">
                {evt.title}
              </h4>

              <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-space mb-4">
                <MapPin className="w-3.5 h-3.5 text-[var(--accent-cyan)]" />
                <span>{evt.location}</span>
              </div>

              <p className="font-space text-xs text-[var(--text-muted)] leading-relaxed">
                {evt.desc}
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[var(--accent-cyan)] font-space font-medium">
              <span>Event Completed</span>
              <Sparkles className="w-3.5 h-3.5 text-[var(--accent-green)]" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Photo Lightbox Modal */}
      <AnimatePresence>
        {previewPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setPreviewPhoto(null)}
          >
            <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
              <button
                type="button"
                onClick={() => setPreviewPhoto(null)}
                className="absolute -top-12 right-0 p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={previewPhoto}
                alt="Enlarged Event Preview"
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl border border-white/20 shadow-2xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

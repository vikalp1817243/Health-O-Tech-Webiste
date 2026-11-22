import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import EventCard from './EventCard';

export default function EventsSection() {
  const [activeEventIdx, setActiveEventIdx] = useState(0);
  const [direction, setDirection] = useState(0);
  const [activePhotoByEvent, setActivePhotoByEvent] = useState({});
  const [previewPhoto, setPreviewPhoto] = useState(null);

  const lastWheelTime = useRef(0);

  const eventsData = [
    {
      id: 'run-riot-26',
      title: 'RUN RIOT',
      edition: "'26",
      subtitle: 'The Annual Fitness Sprint & Health Awareness Marathon',
      date: 'April 2026',
      location: 'VIT Bhopal Campus',
      type: 'Flagship Event',
      status: 'Completed',
      accentColor: 'var(--accent-green)',
      accentGlow: 'rgba(0, 230, 118, 0.15)',
      badgeClass: 'bg-emerald-500/15 text-[var(--accent-green)] border-emerald-500/30',
      desc: 'Organized by Health-O-Tech in April 2026, Run Riot brought together over 500+ enthusiastic runners across certified 5K and 10K campus tracks, blending endurance sports with real-time biometric tracking demos, hydration checkpoints, and health assessments.',
      metrics: [
        { value: '500+', label: 'Runners & Sprinters' },
        { value: '5K & 10K', label: 'Certified Tracks' },
        { value: '100%', label: 'Telemetry Monitored' },
        { value: '₹50K+', label: 'Prizes & Medals' },
      ],
      photos: [
        { src: '/events/run-riot-26/run1.jpg', caption: "Run Riot '26 Opening Ceremony & Flag-Off" },
        { src: '/events/run-riot-26/run2.jpg', caption: 'Students & Faculty Marathon Participants Sprinting' },
        { src: '/events/run-riot-26/run3.jpg', caption: 'Health Tech Wellness & Hydration Checkpoint' },
        { src: '/events/run-riot-26/run4.jpg', caption: 'Award Ceremony & Commemorative Finisher Medals' },
      ],
    },
    {
      id: 'medhack-25',
      title: 'MEDHACK',
      edition: "'25",
      subtitle: 'National 36-Hour Clinical AI & Diagnostics Hackathon',
      date: 'November 2025',
      location: 'VIT Bhopal Auditorium',
      type: 'National Hackathon',
      status: 'Completed',
      accentColor: 'var(--accent-cyan)',
      accentGlow: 'rgba(0, 200, 255, 0.15)',
      badgeClass: 'bg-cyan-500/15 text-[var(--accent-cyan)] border-cyan-500/30',
      desc: 'A high-intensity 36-hour hackathon where 60+ collegiate teams engineered edge-AI diagnostic models, automated triage assistants, and predictive radiology pipelines using real-world anonymized healthcare datasets.',
      metrics: [
        { value: '60+', label: 'Collegiate Teams' },
        { value: '36 Hrs', label: 'Continuous Sprint' },
        { value: '15+', label: 'Clinical Datasets' },
        { value: '₹1 Lakh', label: 'Total Prize Pool' },
      ],
      photos: [
        {
          src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800',
          caption: "MedHack '25 Overnight Prototype Hacking Sprint",
        },
        {
          src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
          caption: 'Clinical Data Modeling & Model Performance Evaluation',
        },
        {
          src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
          caption: 'Project Demonstration to Jury of Physicians & Tech Leads',
        },
        {
          src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
          caption: 'Top 3 Winning Innovations Announced at Grand Finale',
        },
      ],
    },
    {
      id: 'biosignals-bootcamp',
      title: 'BIO-SIGNALS',
      edition: "'26",
      subtitle: 'Hands-on ECG Hardware & Wearable Telemetry Workshop',
      date: 'January 2026',
      location: 'Embedded Systems Lab',
      type: 'Hands-on Bootcamp',
      status: 'Completed',
      accentColor: 'var(--accent-green)',
      accentGlow: 'rgba(0, 230, 118, 0.15)',
      badgeClass: 'bg-emerald-500/15 text-[var(--accent-green)] border-emerald-500/30',
      desc: 'An immersive hands-on engineering lab where 120+ student developers wired AD8232 heart rate sensor shields to ESP32 and Arduino microcontrollers, calibrating analog biological signals into clean digital waveforms.',
      metrics: [
        { value: '120+', label: 'Student Builders' },
        { value: '40+', label: 'Hardware Kits' },
        { value: '100%', label: 'Hands-on Assembling' },
        { value: 'ESP32', label: 'Telemetry Nodes' },
      ],
      photos: [
        {
          src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800',
          caption: 'Real-time Cardiac Waveform Calibration on Digital Oscilloscope',
        },
        {
          src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
          caption: 'Assembling Analog Front-End Electrodes & Microcontroller Bridges',
        },
        {
          src: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&q=80&w=800',
          caption: 'Students Debugging Microcontroller Code in Embedded Lab',
        },
        {
          src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
          caption: 'Live Telemetry Testing with Wireless Bluetooth Data Stream',
        },
      ],
    },
    {
      id: 'digital-therapeutics',
      title: 'DIGITAL THERAPEUTICS',
      edition: "'26",
      subtitle: 'National Health-Tech Symposium & Clinical Panels',
      date: 'February 2026',
      location: 'Virtual & Campus Hybrid',
      type: 'Keynote & Panel',
      status: 'Completed',
      accentColor: 'var(--accent-purple)',
      accentGlow: 'rgba(168, 85, 247, 0.15)',
      badgeClass: 'bg-purple-500/15 text-[var(--accent-purple)] border-purple-500/30',
      desc: 'A landmark hybrid conference featuring distinguished talks from medical informatics researchers, hospital administrators, and bioengineering leads exploring the future of patient care, ethical AI guidelines, and academic publications.',
      metrics: [
        { value: '400+', label: 'Registered Delegates' },
        { value: '12', label: 'Keynote Speakers' },
        { value: '5', label: 'Clinical Expert Panels' },
        { value: 'Hybrid', label: 'Campus & Global Stream' },
      ],
      photos: [
        {
          src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800',
          caption: 'Opening Keynote Address on Digital Therapeutics Transformation',
        },
        {
          src: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800',
          caption: 'Physicians & Engineers Panel on AI Ethics in Diagnostics',
        },
        {
          src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800',
          caption: 'Healthcare Exhibition Hall & Academic Paper Presentations',
        },
        {
          src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800',
          caption: 'Interactive Q&A Session with Visiting Health-Tech Founders',
        },
      ],
    },
  ];

  const totalEvents = eventsData.length;

  const paginate = useCallback((newDirection) => {
    setDirection(newDirection);
    setActiveEventIdx((prev) => (prev + newDirection + totalEvents) % totalEvents);
  }, [totalEvents]);

  // 7-Second Automatic Progression Timer (resets automatically when activeEventIdx changes)
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 7000);
    return () => clearInterval(timer);
  }, [activeEventIdx, paginate]);

  // Laptop/Mouse Wheel & Trackpad Gesture Handler (triggered when hovering over the carousel card)
  const handleWheel = (e) => {
    const now = Date.now();
    if (now - lastWheelTime.current < 700) return; // 700ms cooldown to ensure smooth single-card transitions

    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (Math.abs(delta) > 20) {
      lastWheelTime.current = now;
      if (delta > 0) {
        paginate(1);
      } else {
        paginate(-1);
      }
    }
  };

  // Touch & Mouse Drag / Swipe Handler
  const handleDragEnd = (e, { offset, velocity }) => {
    const swipePower = Math.abs(offset.x) * velocity.x;
    if (offset.x < -60 || velocity.x < -400) {
      paginate(1);
    } else if (offset.x > 60 || velocity.x > 400) {
      paginate(-1);
    }
  };

  const currentEvent = eventsData[activeEventIdx];
  const currentPhotoIdx = activePhotoByEvent[currentEvent.id] || 0;

  const handleSelectPhoto = (pIdx) => {
    setActivePhotoByEvent((prev) => ({
      ...prev,
      [currentEvent.id]: pIdx,
    }));
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 320 : -320,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
        opacity: { duration: 0.45 },
        scale: { duration: 0.45 },
      },
    },
    exit: (dir) => ({
      x: dir < 0 ? 320 : -320,
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
        opacity: { duration: 0.35 },
        scale: { duration: 0.35 },
      },
    }),
  };

  return (
    <section id="events" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-orbitron font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4"
        >
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-green)] to-[var(--accent-cyan)]">Events</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-space text-[var(--text-muted)] text-sm sm:text-base leading-relaxed"
        >
          From campus health marathons to national med-tech hackathons, explore our signature events with live swipe & scroll.
        </motion.p>
      </div>

      {/* ========================================================================= */}
      {/* SINGLE-EVENT CAROUSEL CONTAINER (SWIPE + WHEEL SCROLLABLE)                */}
      {/* ========================================================================= */}
      <div
        className="relative w-full cursor-grab active:cursor-grabbing select-none"
        onWheel={handleWheel}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentEvent.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            className="w-full"
          >
            <EventCard
              event={currentEvent}
              activePhotoIdx={currentPhotoIdx}
              onSelectPhoto={handleSelectPhoto}
              onOpenLightbox={setPreviewPhoto}
              activeEventIdx={activeEventIdx}
              totalEvents={totalEvents}
              onPrev={() => paginate(-1)}
              onNext={() => paginate(1)}
            />
          </motion.div>
        </AnimatePresence>
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

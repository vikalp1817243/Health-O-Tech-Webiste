import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Activity, ChevronDown, Sparkles } from 'lucide-react';
import { smoothScrollTo } from '../../lib/utils';

export default function HeroSection() {
  const canvasRef = useRef(null);

  // High-performance Bioluminescent Particle Field (36 particles) with High-DPI support
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let dpr = window.devicePixelRatio || 1;
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;

    const setupCanvas = () => {
      if (!canvas) return;
      dpr = window.devicePixelRatio || 1;
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    setupCanvas();
    window.addEventListener('resize', setupCanvas);

    const particles = Array.from({ length: 36 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.8 + 0.6,
      speedY: -(Math.random() * 0.4 + 0.15),
      speedX: (Math.random() - 0.5) * 0.2,
      opacity: Math.random() * 0.5 + 0.2,
      color: Math.random() > 0.4 ? '#00C8FF' : '#00E676',
    }));

    let mouseX = -1000;
    let mouseY = -1000;
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;

        // Reset if drifted past top
        if (p.y < 0) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }

        // Gentle cursor push effect
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 80) {
          p.x += (dx / dist) * 1.2;
          p.y += (dy / dist) * 1.2;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', setupCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen -mt-[84px] pt-28 sm:pt-32 pb-16 flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* 8-second Looping DNA Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/banner.jpg"
          className="w-full h-full object-cover opacity-40 filter saturate-150 contrast-125 scale-105"
        >
          <source src="/dna.mp4" type="video/mp4" />
        </video>

        {/* Ambient Bioluminescent Particle Canvas Layer */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-[5]"
        />

        {/* Cyber Dark Gradient Overlays for High Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#090717]/90 via-[#090717]/70 to-[#090717] z-10" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#090717]/60 to-[#090717] z-10" />
        
        {/* Ambient Neon Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent-cyan)]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--accent-green)]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto text-center flex flex-col items-center">
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
            onClick={() => smoothScrollTo('domains')}
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

          {/* Upcoming & Past Events Section Trigger */}
          <button
            type="button"
            onClick={() => smoothScrollTo('events')}
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-[var(--text-muted)] hover:text-white hover:border-white/20 font-space text-sm transition-all cursor-pointer group active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-[var(--accent-green)] group-hover:rotate-12 transition-transform" />
            <span>Club Events</span>
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-14 flex flex-col items-center gap-2 cursor-pointer group"
          onClick={() => smoothScrollTo('about')}
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

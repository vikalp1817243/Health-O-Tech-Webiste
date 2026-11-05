// MARKED FOR REMOVAL UPON USER REQUEST: BioTelemetryBar component
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Heart, Shield, Radio } from 'lucide-react';

export default function BioTelemetryBar() {
  const canvasRef = useRef(null);
  const [bpm, setBpm] = useState(72);
  const [spo2, setSpo2] = useState(98);

  // Subtle real-time heart rate variation
  useEffect(() => {
    const interval = setInterval(() => {
      setBpm(70 + Math.floor(Math.random() * 5));
      setSpo2(Math.random() > 0.5 ? 98 : 99);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Real-time Canvas ECG / EKG Waveform Drawing with High-DPI support
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

    let x = 0;
    let step = 0;
    const points = [];
    const maxPoints = Math.floor(width);

    // ECG pattern generator
    const getEcgY = (s) => {
      const cycle = s % 80;
      const mid = height / 2;
      if (cycle === 15) return mid - 4; // P wave
      if (cycle === 18) return mid + 2;
      if (cycle === 25) return mid + 6; // Q wave
      if (cycle === 28) return mid - 24; // R spike peak!
      if (cycle === 31) return mid + 12; // S dip
      if (cycle === 42) return mid - 8; // T wave
      if (cycle === 46) return mid;
      return mid + (Math.random() * 2 - 1); // baseline noise
    };

    const render = () => {
      step++;
      x = (x + 2) % width;
      const currentY = getEcgY(step);

      points.push({ x, y: currentY });
      if (points.length > maxPoints / 2) {
        points.shift();
      }

      // Clear with slight trail fade
      ctx.fillStyle = 'rgba(9, 7, 23, 0.25)';
      ctx.fillRect(0, 0, width, height);

      // Draw Grid Lines
      ctx.strokeStyle = 'rgba(0, 200, 255, 0.05)';
      ctx.lineWidth = 1;
      for (let gy = 0; gy < height; gy += 15) {
        ctx.beginPath();
        ctx.moveTo(0, gy);
        ctx.lineTo(width, gy);
        ctx.stroke();
      }

      // Draw Cardiac Waveform
      ctx.strokeStyle = '#00E676';
      ctx.shadowColor = '#00E676';
      ctx.shadowBlur = 8;
      ctx.lineWidth = 2;
      ctx.beginPath();

      for (let i = 0; i < points.length; i++) {
        const pt = points[i];
        if (i === 0) {
          ctx.moveTo(pt.x, pt.y);
        } else {
          // If wrapped around, start new path
          if (Math.abs(pt.x - points[i - 1].x) > 10) {
            ctx.moveTo(pt.x, pt.y);
          } else {
            ctx.lineTo(pt.x, pt.y);
          }
        }
      }
      ctx.stroke();

      // Lead Glow Dot
      ctx.fillStyle = '#00C8FF';
      ctx.shadowColor = '#00C8FF';
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.arc(x, currentY, 3.5, 0, Math.PI * 2);
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', setupCanvas);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2 mb-10"
    >
      <div className="rounded-2xl bg-[#0F0B24]/90 border border-[var(--border-accent)] p-3 sm:p-4 backdrop-blur-xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left: Bio-Telemetry Status */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-[var(--accent-green)] flex items-center justify-center">
            <Radio className="w-4 h-4 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-green)] animate-ping" />
              <span className="font-orbitron font-bold text-xs uppercase tracking-wider text-white">
                Live Bio-Signal Telemetry
              </span>
            </div>
            <span className="font-space text-[10px] text-[var(--text-muted)] font-mono">
              HOT IoT Node // Encrypted Lead-II Stream
            </span>
          </div>
        </div>

        {/* Center: Live Real-Time ECG Waveform Canvas */}
        <div className="w-full md:w-1/2 h-14 relative rounded-xl overflow-hidden border border-white/5 bg-black/40">
          <canvas ref={canvasRef} className="w-full h-full block" />
        </div>

        {/* Right: Key Bio-Metrics Ticker */}
        <div className="flex items-center gap-4 sm:gap-6 shrink-0 font-space text-xs">
          {/* Heart Rate */}
          <div className="flex items-center gap-1.5">
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse" />
            <div className="flex flex-col">
              <span className="font-orbitron font-extrabold text-sm text-white">
                {bpm} <span className="text-[10px] text-[var(--text-muted)] font-normal font-space">BPM</span>
              </span>
              <span className="text-[9px] text-[var(--text-muted)] uppercase tracking-wider">Heart Rate</span>
            </div>
          </div>

          {/* SpO2 */}
          <div className="flex items-center gap-1.5">
            <Activity className="w-4 h-4 text-[var(--accent-cyan)]" />
            <div className="flex flex-col">
              <span className="font-orbitron font-extrabold text-sm text-white">
                {spo2}%
              </span>
              <span className="text-[9px] text-[var(--text-muted)] uppercase tracking-wider">SpO2 Oxygen</span>
            </div>
          </div>

          {/* Node Health */}
          <div className="hidden sm:flex items-center gap-1.5 pl-3 border-l border-white/10">
            <Shield className="w-4 h-4 text-[var(--accent-green)]" />
            <div className="flex flex-col">
              <span className="font-orbitron font-extrabold text-sm text-[var(--accent-green)]">
                NOMINAL
              </span>
              <span className="text-[9px] text-[var(--text-muted)] uppercase tracking-wider">Telemetry Link</span>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

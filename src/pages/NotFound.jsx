import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden px-4 py-16 selection:bg-[var(--accent-cyan)] selection:text-black">
      {/* Background DNA Video Loop */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-35"
      >
        <source src="/dna.mp4" type="video/mp4" />
      </video>

      {/* Cyber Grid & Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#090717]/80 via-[#090717]/90 to-[#090717] backdrop-blur-[2px]" />
      <div className="absolute inset-0 circuit-bg opacity-30 pointer-events-none" />

      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-80 h-80 rounded-full bg-[var(--accent-cyan)]/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 w-80 h-80 rounded-full bg-[var(--accent-green)]/15 blur-[120px] pointer-events-none" />

      {/* 404 Content Container */}
      <div className="relative z-10 max-w-lg w-full text-center flex flex-col items-center">
        {/* Big Glitch 404 */}
        <h1 className="font-orbitron text-7xl sm:text-9xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-cyan)] via-white to-[var(--accent-green)] drop-shadow-[0_0_35px_rgba(0,200,255,0.4)] mb-2">
          404
        </h1>

        <h2 className="font-orbitron text-lg sm:text-2xl font-bold tracking-wider text-white uppercase mb-3">
          Page Not Found
        </h2>

        <p className="font-space text-[var(--text-muted)] text-xs sm:text-sm leading-relaxed max-w-md mb-8">
          The neural coordinate or genomic sequence you are attempting to access does not exist in this system database.
        </p>

        {/* Navigation Action */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-green)] text-black font-space font-bold text-xs sm:text-sm tracking-wide hover:shadow-[0_0_25px_rgba(0,200,255,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
}

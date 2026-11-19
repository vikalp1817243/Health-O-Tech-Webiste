import { MapPin, Mail, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="relative bg-[#070512] border-t border-[var(--border-accent)]/40 text-neutral-300 pt-16 pb-12 overflow-hidden">
      {/* Top Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-[var(--accent-cyan)]/10 to-transparent pointer-events-none blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-white/10 items-start">
          
          {/* Col 1: Brand & Identity (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-[var(--border-accent)] p-0.5 bg-black/50 shadow-md">
                <img src="/logo.png" alt="Health-O-Tech" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="font-orbitron font-extrabold text-lg text-white tracking-wider block">
                  HEALTH<span className="text-[var(--accent-cyan)]">-O-</span>TECH
                </span>
                <span className="font-space text-[10px] text-[var(--accent-green)] uppercase tracking-[0.2em] font-semibold block -mt-1">
                  Health Informatics Club
                </span>
              </div>
            </div>

            <p className="font-space text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed max-w-sm">
              VIT Bhopal University's premier technical initiative pioneering biomedical engineering, clinical AI diagnostics, and bio-sensor IoT systems.
            </p>
          </div>

          {/* Col 2: Campus Headquarters (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h4 className="font-orbitron font-bold text-xs uppercase tracking-wider text-white">
              Campus Headquarters
            </h4>

            <div className="flex flex-col gap-3 font-space text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div className="text-[var(--text-muted)] leading-relaxed">
                  <span className="font-bold text-white block mb-0.5">VIT Bhopal University</span>
                  Bhopal-Indore Highway, Kothrikalan, Sehore, Madhya Pradesh – 466114
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <Mail className="w-3.5 h-3.5 text-[var(--accent-cyan)] shrink-0" />
                <a
                  href="mailto:healthotech@vitbhopal.ac.in"
                  className="text-[var(--text-muted)] hover:text-white transition-colors"
                >
                  healthotech@vitbhopal.ac.in
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Copyright & Rights Reserved (3 cols, right-aligned on desktop) */}
          <div className="lg:col-span-3 flex flex-col lg:items-end justify-center gap-1 font-space text-xs text-[var(--text-muted)] pt-2 lg:pt-0">
            <p className="text-white font-medium">© {new Date().getFullYear()} Health-O-Tech Club</p>
            <p>VIT Bhopal University</p>
            <p className="text-[11px] text-neutral-500">All rights reserved.</p>
          </div>

        </div>

        {/* Bottom Centered Credits */}
        <div className="pt-8 flex items-center justify-center font-space text-xs text-[var(--text-muted)]">
          <p className="flex items-center gap-1.5">
            <span>Engineered with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>by HOT Technical Team</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
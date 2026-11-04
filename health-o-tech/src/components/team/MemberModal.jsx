import React, { useEffect } from 'react';
import { X, Mail, Crown, Shield, Award, Sparkles, User, ExternalLink } from 'lucide-react';

const LEVEL_CONFIG = {
  0: {
    label: "Level 0 • Executive Head",
    badgeBg: "bg-amber-500/15 text-amber-300 border-amber-500/40",
    glow: "shadow-[0_0_50px_rgba(245,158,11,0.25)]",
    border: "border-amber-500/50",
    icon: Crown,
  },
  1: {
    label: "Level 1 • Executive Director",
    badgeBg: "bg-cyan-500/15 text-cyan-300 border-cyan-500/40",
    glow: "shadow-[0_0_50px_rgba(6,182,212,0.25)]",
    border: "border-cyan-500/50",
    icon: Shield,
  },
  2: {
    label: "Level 2 • General Administration",
    badgeBg: "bg-purple-500/15 text-purple-300 border-purple-500/40",
    glow: "shadow-[0_0_50px_rgba(168,85,247,0.25)]",
    border: "border-purple-500/50",
    icon: Award,
  },
  4: {
    label: "Level 4 • Department Leadership",
    badgeBg: "bg-emerald-500/15 text-emerald-300 border-emerald-500/40",
    glow: "shadow-[0_0_50px_rgba(16,185,129,0.2)]",
    border: "border-emerald-500/50",
    icon: Sparkles,
  },
  5: {
    label: "Level 5 • Core Member",
    badgeBg: "bg-white/10 text-gray-200 border-white/20",
    glow: "shadow-[0_0_40px_rgba(255,255,255,0.1)]",
    border: "border-white/20",
    icon: User,
  },
};

export default function MemberModal({ member, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!member) return null;

  const config = LEVEL_CONFIG[member.level] || LEVEL_CONFIG[5];
  const IconComponent = config.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      {/* Backdrop click dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div
        className={`relative w-full max-w-lg rounded-3xl bg-neutral-950/95 border ${config.border} ${config.glow} backdrop-blur-2xl p-6 sm:p-8 z-10 shadow-2xl transition-all animate-in zoom-in-95 duration-200`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white transition-all border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-center text-center">
          {/* Level Pill */}
          <span
            className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold border backdrop-blur-md mb-5 ${config.badgeBg}`}
          >
            <IconComponent className="w-3.5 h-3.5" />
            {config.label}
          </span>

          {/* Rounded-Corner High-Res Photo */}
          <div className="relative mb-5">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-emerald-500/40 via-cyan-500/40 to-purple-500/40 blur-md opacity-80" />
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-white/20 bg-neutral-900 shadow-xl flex items-center justify-center">
              {member.photo_url ? (
                <img
                  src={member.photo_url}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-2xl"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-neutral-800 text-white font-bold text-3xl">
                  {member.name
                    ?.split(' ')
                    .map((n) => n[0])
                    .join('')
                    .slice(0, 2)
                    .toUpperCase() || 'U'}
                </div>
              )}
            </div>
          </div>

          {/* Name & Role */}
          <h3 className="font-orbitron text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {member.name}
          </h3>
          <p className="font-space text-[var(--accent-cyan)] font-semibold text-sm sm:text-base mt-1">
            {member.role}
          </p>
          {member.team_name && (
            <p className="font-space text-xs text-[var(--accent-green)] font-medium mt-0.5 uppercase tracking-wider">
              {member.team_name}
            </p>
          )}

          {/* Tagline / Bio */}
          {member.tagline && (
            <div className="mt-4 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-neutral-300 font-space text-xs sm:text-sm max-w-sm leading-relaxed">
              "{member.tagline}"
            </div>
          )}

          {/* Contact & Social Links */}
          <div className="flex items-center justify-center gap-3 mt-6 pt-5 border-t border-white/10 w-full">
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-gray-200 hover:text-white transition-all"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Email</span>
              </a>
            )}
            {member.linkedin_url && (
              <a
                href={member.linkedin_url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-gray-200 hover:text-cyan-400 transition-all"
              >
                <svg className="w-4 h-4 fill-current text-cyan-400" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-gray-500" />
              </a>
            )}
            {member.github_url && (
              <a
                href={member.github_url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-gray-200 hover:text-emerald-400 transition-all"
              >
                <svg className="w-4 h-4 fill-current text-emerald-400" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-gray-500" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

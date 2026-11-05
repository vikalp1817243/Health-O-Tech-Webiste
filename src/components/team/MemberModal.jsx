import { useEffect, useState } from 'react';
import { X, Mail, ExternalLink } from 'lucide-react';
import { LEVEL_CONFIG } from '../../lib/teamData';
import { GitHubIcon, LinkedInIcon } from '../ui/Icons';

export default function MemberModal({ member, onClose }) {
  const [imageError, setImageError] = useState(false);

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
              {member.photo_url && !imageError ? (
                <img
                  src={member.photo_url}
                  alt={member.name}
                  onError={() => setImageError(true)}
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

          {/* Tagline / Personal Quote */}
          {member.tagline && (
            <div className="mt-4 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-neutral-300 font-space text-xs sm:text-sm max-w-sm leading-relaxed">
              "{member.tagline}"
            </div>
          )}

          {/* Academic Profile Badges (Branch, Batch, Registration Number) */}
          {(member.registration_number || member.batch || member.branch) && (
            <div className="flex flex-wrap items-center justify-center gap-2 mt-3.5 max-w-sm">
              {member.branch && (
                <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-[var(--accent-cyan)]/10 border border-[var(--accent-cyan)]/30 text-[11px] font-space text-[var(--accent-cyan)]">
                  {member.branch}
                </span>
              )}
              {member.batch && (
                <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-[var(--accent-green)]/10 border border-[var(--accent-green)]/30 text-[11px] font-space text-[var(--accent-green)]">
                  Batch {member.batch}
                </span>
              )}
              {member.registration_number && (
                <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-neutral-300">
                  {member.registration_number}
                </span>
              )}
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
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-gray-200 hover:text-cyan-400 transition-all"
              >
                <LinkedInIcon className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-gray-500" />
              </a>
            )}
            {member.github_url && (
              <a
                href={member.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-gray-200 hover:text-emerald-400 transition-all"
              >
                <GitHubIcon className="w-4 h-4 text-emerald-400" />
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

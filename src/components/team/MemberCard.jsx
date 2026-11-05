import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { LEVEL_CONFIG } from '../../lib/teamData';

export default function MemberCard({ member, onClick }) {
  const [imageError, setImageError] = useState(false);
  const config = LEVEL_CONFIG[member.level] || LEVEL_CONFIG[5];
  const IconComponent = config.icon;

  const isExecutive = member.level <= 2;
  const isLead = member.level === 4;

  const photoSize = isExecutive
    ? "w-12 h-12 sm:w-14 sm:h-14"
    : isLead
    ? "w-11 h-11"
    : "w-9 h-9";

  return (
    <button
      type="button"
      onClick={() => onClick && onClick(member)}
      className={`group relative flex items-center gap-3 text-left w-full rounded-2xl bg-gradient-to-r ${config.cardBg} backdrop-blur-xl border ${config.borderColor} ${config.glow} transition-all duration-200 cursor-pointer p-2.5 sm:p-3 hover:-translate-y-0.5 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-emerald-500/50`}
    >
      {/* Rounded-Corner Photo with Ambient Glow */}
      <div className="relative flex-shrink-0">
        <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-tr from-emerald-500/40 to-cyan-500/40 opacity-40 group-hover:opacity-100 blur transition-all duration-300" />
        <div
          className={`${photoSize} relative rounded-xl overflow-hidden border border-white/20 bg-neutral-900 flex items-center justify-center shadow-md`}
        >
          {member.photo_url && !imageError ? (
            <img
              src={member.photo_url}
              alt={member.name}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-neutral-800 text-gray-300 font-bold text-sm rounded-xl">
              {member.name
                ? member.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')
                    .slice(0, 2)
                    .toUpperCase()
                : 'U'}
            </div>
          )}
        </div>
      </div>

      {/* Member Details */}
      <div className="flex-1 min-w-0 pr-1">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span
            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold border ${config.badgeBg}`}
          >
            <IconComponent className="w-2.5 h-2.5" />
            {member.role || 'Member'}
          </span>
        </div>

        <h3 className="text-white font-bold text-sm sm:text-base tracking-tight truncate mt-1 group-hover:text-emerald-400 transition-colors">
          {member.name}
        </h3>

        {member.team_name && isExecutive && (
          <p className="text-[11px] text-gray-400 truncate">
            {member.team_name}
          </p>
        )}
      </div>

      {/* Subtle Arrow Action Hint */}
      <div className="flex-shrink-0 text-gray-500 group-hover:text-emerald-400 transition-colors pl-1">
        <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
      </div>
    </button>
  );
}

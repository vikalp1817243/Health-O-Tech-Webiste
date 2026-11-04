import React, { useState } from 'react';
import MemberCard from './MemberCard';
import { ChevronDown, ChevronUp, Layers, Sparkles, Users } from 'lucide-react';

export default function TeamNode({ teamName, members, index, onSelectMember }) {
  const [isExpanded, setIsExpanded] = useState(true);

  // Level 4: Team Lead & Vice Lead
  const leads = members.filter((m) => m.level === 4);
  const leadMember = leads.find((m) => m.role?.toLowerCase().includes('lead') && !m.role?.toLowerCase().includes('vice')) || leads[0];
  const viceLeadMember = leads.find((m) => m.role?.toLowerCase().includes('vice')) || (leads.length > 1 ? leads[1] : null);

  // Level 5: Team Members
  const teamMembers = members.filter((m) => m.level === 5);

  const teamColors = [
    { border: "border-emerald-500/30", text: "text-emerald-400", bg: "bg-emerald-500/10", stem: "bg-emerald-500/40" },
    { border: "border-cyan-500/30", text: "text-cyan-400", bg: "bg-cyan-500/10", stem: "bg-cyan-500/40" },
    { border: "border-purple-500/30", text: "text-purple-400", bg: "bg-purple-500/10", stem: "bg-purple-500/40" },
    { border: "border-amber-500/30", text: "text-amber-400", bg: "bg-amber-500/10", stem: "bg-amber-500/40" },
    { border: "border-rose-500/30", text: "text-rose-400", bg: "bg-rose-500/10", stem: "bg-rose-500/40" },
    { border: "border-blue-500/30", text: "text-blue-400", bg: "bg-blue-500/10", stem: "bg-blue-500/40" },
    { border: "border-indigo-500/30", text: "text-indigo-400", bg: "bg-indigo-500/10", stem: "bg-indigo-500/40" },
  ];

  const color = teamColors[index % teamColors.length];

  return (
    <div className="relative flex flex-col items-center w-full max-w-4xl mx-auto my-4 p-4 sm:p-5 rounded-3xl bg-neutral-900/40 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl">
      {/* Top connector stem for flowchart hierarchy */}
      <div className={`w-0.5 h-5 -mt-9 mb-3 ${color.stem} hidden lg:block`} />

      {/* Level 3: Department Card Header */}
      <div className="w-full flex items-center justify-between gap-3 pb-3 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-xl ${color.bg} ${color.text} border ${color.border}`}>
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                Team #{index + 1}
              </span>
              <span className={`text-[10px] px-2 py-0.2 rounded-full ${color.bg} ${color.text} border ${color.border}`}>
                {members.length} {members.length === 1 ? 'Person' : 'Members'}
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mt-0.5">
              {teamName}
            </h3>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-gray-300 hover:text-white transition-all cursor-pointer"
        >
          {isExpanded ? (
            <>
              <span>Collapse</span>
              <ChevronUp className="w-3.5 h-3.5" />
            </>
          ) : (
            <>
              <span>Expand</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </div>

      {isExpanded && (
        <div className="w-full mt-4 flex flex-col items-center">
          {/* Level 4: Leads Section */}
          <div className="w-full flex flex-col items-center">
            <div className="text-center mb-2.5">
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
                <Sparkles className="w-3 h-3" /> Level 4 • Team Leadership
              </span>
            </div>

            {/* Leads Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-xl">
              {leadMember && (
                <MemberCard
                  key={leadMember.id}
                  member={{ ...leadMember, role: leadMember.role || "Lead" }}
                  onClick={onSelectMember}
                />
              )}
              {viceLeadMember && (
                <MemberCard
                  key={viceLeadMember.id}
                  member={{ ...viceLeadMember, role: viceLeadMember.role || "Vice Lead" }}
                  onClick={onSelectMember}
                />
              )}
            </div>
          </div>

          {/* Level 5 Connector Stem */}
          {teamMembers.length > 0 && (
            <div className="flex flex-col items-center my-3 w-full">
              <div className="w-0.5 h-4 bg-gradient-to-b from-emerald-500/60 to-gray-500/40" />
              <div className="px-2.5 py-0.5 rounded-full bg-neutral-900 border border-white/10 text-[10px] text-gray-400 flex items-center gap-1">
                <Users className="w-3 h-3 text-cyan-400" />
                Level 5 • Members ({teamMembers.length})
              </div>
              <div className="w-0.5 h-3 bg-gray-500/40" />
            </div>
          )}

          {/* Level 5: Members Grid (Compact Chips) */}
          {teamMembers.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 w-full">
              {teamMembers.map((member) => (
                <MemberCard
                  key={member.id}
                  member={member}
                  onClick={onSelectMember}
                  compact
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

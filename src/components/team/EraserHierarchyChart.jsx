import { TEAMS_LIST } from '../../lib/teamData';

export default function EraserHierarchyChart({ members, onSelectMember }) {
  // Executive Spine
  const president = members.find((m) => m.level === 0);
  const vicePresident = members.find((m) => m.level === 1);
  const generalSecretary = members.find((m) => m.level === 2);

  // Group teams 1 to 7
  const teamsData = TEAMS_LIST.map((teamName) => {
    const teamMems = members.filter((m) => m.team_name === teamName);
    const lead = teamMems.find(
      (m) => m.level === 4 && m.role?.toLowerCase().includes('lead') && !m.role?.toLowerCase().includes('vice')
    ) || teamMems.find((m) => m.level === 4);

    const viceLead = teamMems.find(
      (m) => m.level === 4 && m.role?.toLowerCase().includes('vice')
    ) || teamMems.filter((m) => m.level === 4)[1];

    const teamMembers = teamMems.filter((m) => m.level === 5);
    return {
      name: teamName,
      lead,
      viceLead,
      members: teamMembers.slice(0, 5),
    };
  });

  return (
    <div className="w-full flex flex-col items-center select-none py-6">
      {/* SVG Marker Definitions for Crisp Flowchart Arrows */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          {/* Arrow pointing along path (+X direction in marker coords rotates to point DOWN on downward lines) */}
          <marker
            id="eraser-arrow-down"
            viewBox="0 0 10 10"
            refX="7"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M 0 1 L 8 5 L 0 9 z" fill="#00C8FF" />
          </marker>
          <marker
            id="eraser-arrow-right"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto"
          >
            <path d="M 0 0 L 9 5 L 0 10 z" fill="#00E676" />
          </marker>
        </defs>
      </svg>

      {/* ==================================================================== */}
      {/* 1. EXECUTIVE VERTICAL SPINE: President -> Vice-President -> Gen Sec  */}
      {/* ==================================================================== */}
      <div className="flex flex-col items-center">
        {/* President Box */}
        <button
          type="button"
          onClick={() => president && onSelectMember(president)}
          className="w-48 sm:w-60 py-3.5 px-4 rounded-2xl border border-amber-500/40 bg-[var(--surface-card)] backdrop-blur-xl hover:border-amber-400 hover:shadow-[0_0_25px_rgba(245,158,11,0.3)] transition-all text-center shadow-lg group cursor-pointer active:scale-95"
        >
          <div className="font-orbitron text-xs sm:text-sm font-bold text-amber-300 group-hover:text-amber-200 transition-colors uppercase tracking-wider">
            President
          </div>
          {president && (
            <div className="font-space text-sm sm:text-base text-white font-bold mt-1 truncate">
              {president.name}
            </div>
          )}
          <span className="font-space text-[10px] text-amber-400/80 block mt-0.5">Level 0 • Executive Head</span>
        </button>

        {/* Down Arrow: President -> Vice-President */}
        <div className="w-6 h-9 flex items-center justify-center my-0.5">
          <svg className="w-full h-full" viewBox="0 0 24 36">
            <line
              x1="12"
              y1="2"
              x2="12"
              y2="28"
              stroke="#00C8FF"
              strokeWidth="2"
              markerEnd="url(#eraser-arrow-down)"
            />
          </svg>
        </div>

        {/* Vice-President Box */}
        <button
          type="button"
          onClick={() => vicePresident && onSelectMember(vicePresident)}
          className="w-48 sm:w-60 py-3.5 px-4 rounded-2xl border border-[var(--accent-cyan)]/40 bg-[var(--surface-card)] backdrop-blur-xl hover:border-[var(--accent-cyan)] hover:shadow-[0_0_25px_rgba(0,200,255,0.3)] transition-all text-center shadow-lg group cursor-pointer active:scale-95"
        >
          <div className="font-orbitron text-xs sm:text-sm font-bold text-[var(--accent-cyan)] group-hover:text-cyan-200 transition-colors uppercase tracking-wider">
            Vice-President
          </div>
          {vicePresident && (
            <div className="font-space text-sm sm:text-base text-white font-bold mt-1 truncate">
              {vicePresident.name}
            </div>
          )}
          <span className="font-space text-[10px] text-[var(--accent-cyan)]/80 block mt-0.5">Level 1 • Executive Director</span>
        </button>

        {/* Down Arrow: Vice-President -> General Secretary */}
        <div className="w-6 h-9 flex items-center justify-center my-0.5">
          <svg className="w-full h-full" viewBox="0 0 24 36">
            <line
              x1="12"
              y1="2"
              x2="12"
              y2="28"
              stroke="#00C8FF"
              strokeWidth="2"
              markerEnd="url(#eraser-arrow-down)"
            />
          </svg>
        </div>

        {/* General Secretary Box */}
        <button
          type="button"
          onClick={() => generalSecretary && onSelectMember(generalSecretary)}
          className="w-48 sm:w-60 py-3.5 px-4 rounded-2xl border border-purple-500/40 bg-[var(--surface-card)] backdrop-blur-xl hover:border-purple-400 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] transition-all text-center shadow-lg group cursor-pointer active:scale-95"
        >
          <div className="font-orbitron text-xs sm:text-sm font-bold text-purple-300 group-hover:text-purple-200 transition-colors uppercase tracking-wider">
            General Secretary
          </div>
          {generalSecretary && (
            <div className="font-space text-sm sm:text-base text-white font-bold mt-1 truncate">
              {generalSecretary.name}
            </div>
          )}
          <span className="font-space text-[10px] text-purple-400/80 block mt-0.5">Level 2 • Operations & Governance</span>
        </button>

        {/* Down Arrow to Main Horizontal Branch Line */}
        <div className="w-6 h-8 flex items-center justify-center my-0.5">
          <svg className="w-full h-full" viewBox="0 0 24 32">
            <line
              x1="12"
              y1="2"
              x2="12"
              y2="26"
              stroke="#00C8FF"
              strokeWidth="2"
              markerEnd="url(#eraser-arrow-down)"
            />
          </svg>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* 2. HORIZONTAL DISTRIBUTION BUS & 7 TEAM COLUMNS                      */}
      {/* ==================================================================== */}
      <div className="w-full overflow-x-auto pb-8 pt-2 scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-transparent">
        <div className="min-w-[1260px] max-w-[1360px] mx-auto flex flex-col items-center px-4">
          
          {/* Horizontal Distribution Line with 7 Downward Arrows */}
          <div className="relative w-full h-8 mb-1">
            <svg className="w-full h-full" viewBox="0 0 1260 32" preserveAspectRatio="none">
              {/* Main horizontal bus line spanning across column 1 center to column 7 center */}
              {/* Column centers for 7 columns at ~90px, 270px, 450px, 630px, 810px, 990px, 1170px */}
              <line
                x1="90"
                y1="4"
                x2="1170"
                y2="4"
                stroke="#00C8FF"
                strokeWidth="2"
                strokeOpacity="0.8"
              />

              {/* 7 Vertical down branches into each column */}
              {[90, 270, 450, 630, 810, 990, 1170].map((cx, idx) => (
                <line
                  key={idx}
                  x1={cx}
                  y1="4"
                  x2={cx}
                  y2="26"
                  stroke="#00C8FF"
                  strokeWidth="2"
                  markerEnd="url(#eraser-arrow-down)"
                />
              ))}
            </svg>
          </div>

          {/* 7 Teams Grid Side-by-Side */}
          <div className="grid grid-cols-7 gap-4 w-full">
            {teamsData.map((team, colIndex) => {
              return (
                <div key={team.name} className="flex flex-col items-center w-full">
                  
                  {/* Team Lead / Vice Lead Combined Box */}
                  <div className="w-full min-h-[96px] rounded-xl border border-neutral-600 bg-neutral-900/90 hover:border-emerald-400 hover:bg-neutral-850 transition-all p-2.5 text-center flex flex-col justify-between shadow-md relative group">
                    {/* Department Tag */}
                    <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider mb-1 truncate">
                      {team.name}
                    </div>

                    {/* Team Lead Row */}
                    <button
                      type="button"
                      onClick={() => team.lead && onSelectMember(team.lead)}
                      className="w-full py-1 px-1.5 rounded-lg hover:bg-white/10 transition-colors text-left flex items-center justify-between group/lead cursor-pointer"
                    >
                      <span className="text-xs font-semibold text-white group-hover/lead:text-emerald-300">
                        Team lead
                      </span>
                      {team.lead && (
                        <span className="text-[11px] text-neutral-400 truncate max-w-[85px]">
                          {team.lead.name.split(' ')[0]}
                        </span>
                      )}
                    </button>

                    <div className="w-full h-px bg-neutral-800 my-0.5" />

                    {/* Vice Lead Row */}
                    <button
                      type="button"
                      onClick={() => team.viceLead && onSelectMember(team.viceLead)}
                      className="w-full py-1 px-1.5 rounded-lg hover:bg-white/10 transition-colors text-left flex items-center justify-between group/vlead cursor-pointer"
                    >
                      <span className="text-xs font-semibold text-neutral-300 group-hover/vlead:text-cyan-300">
                        Vice Lead
                      </span>
                      {team.viceLead && (
                        <span className="text-[11px] text-neutral-400 truncate max-w-[85px]">
                          {team.viceLead.name.split(' ')[0]}
                        </span>
                      )}
                    </button>
                  </div>

                  {/* Vertical Spine from Lead Box down to Members */}
                  <div className="relative w-full flex mt-2.5">
                    {/* Left Connector Branch SVG */}
                    <div className="w-6 flex-shrink-0 relative">
                      <svg
                        className="w-full h-[270px]"
                        viewBox="0 0 24 270"
                        preserveAspectRatio="none"
                      >
                        {/* Main Vertical Spine starting from bottom of Lead Box down to 5th member */}
                        <line
                          x1="6"
                          y1="0"
                          x2="6"
                          y2="242"
                          stroke="#a3a3a3"
                          strokeWidth="1.5"
                        />

                        {/* 5 Elbow / Horizontal Branches pointing into each member box */}
                        {/* Member centers at y: 22, 77, 132, 187, 242 */}
                        {[22, 77, 132, 187, 242].map((y, mIdx) => (
                          <line
                            key={mIdx}
                            x1="6"
                            y1={y}
                            x2="20"
                            y2={y}
                            stroke="#a3a3a3"
                            strokeWidth="1.5"
                            markerEnd="url(#eraser-arrow-right)"
                          />
                        ))}
                      </svg>
                    </div>

                    {/* Stack of 5 Member Boxes (Mem 01 to Mem 05) */}
                    <div className="flex-1 flex flex-col gap-2.5 pr-1">
                      {[0, 1, 2, 3, 4].map((slotIdx) => {
                        const member = team.members[slotIdx];
                        const memberLabel = `Mem 0${slotIdx + 1}`;

                        return (
                          <button
                            key={member ? member.id : `slot-${colIndex}-${slotIdx}`}
                            type="button"
                            onClick={() => member && onSelectMember(member)}
                            className="w-full h-11 px-2.5 rounded-xl border border-neutral-600 bg-neutral-900/90 hover:border-emerald-400 hover:bg-neutral-800 transition-all text-left flex items-center justify-between shadow-sm cursor-pointer active:scale-95 group/mem"
                          >
                            <span className="text-[11px] font-semibold text-neutral-200 group-hover/mem:text-emerald-400 transition-colors">
                              {memberLabel}
                            </span>
                            {member && (
                              <span className="text-[11px] text-neutral-400 font-medium truncate max-w-[85px]">
                                {member.name.split(' ')[0]}
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Helpful drag/scroll hint for smaller viewports */}
      <div className="text-center text-xs text-neutral-500 mt-2 block xl:hidden">
        ← Scroll horizontally to see all 7 team departments →
      </div>
    </div>
  );
}

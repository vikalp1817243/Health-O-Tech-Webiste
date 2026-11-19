import { TEAMS_LIST } from '../../lib/teamData';

function isVacantName(name) {
  if (!name) return true;
  const s = String(name).trim().toLowerCase();
  return (
    s === '' ||
    s === 'vacant' ||
    s === 'position vacant' ||
    s === 'not assigned' ||
    s === 'tbd' ||
    s === 'n/a' ||
    s === 'na' ||
    s === 'none' ||
    s === 'unassigned' ||
    s === 'details not available'
  );
}

function isMatchTeam(memberTeam, targetTeam) {
  if (!memberTeam || !targetTeam) return false;
  if (memberTeam === targetTeam) return true;
  const norm = (s) =>
    s
      .toLowerCase()
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9]/g, '')
      .replace(/team$/, '');
  return norm(memberTeam) === norm(targetTeam);
}

export default function EraserHierarchyChart({ members = [], onSelectMember }) {
  // Executive Spine Members (Level 0, 1, 2)
  const president = members.find((m) => m.level === 0);
  const vicePresident = members.find((m) => m.level === 1);
  const generalSecretary = members.find((m) => m.level === 2);

  const isPresidentValid = president && !president.is_vacant && !isVacantName(president.name);
  const isVicePresidentValid = vicePresident && !vicePresident.is_vacant && !isVacantName(vicePresident.name);
  const isGeneralSecretaryValid = generalSecretary && !generalSecretary.is_vacant && !isVacantName(generalSecretary.name);

  // Dynamically discover departments from loaded members, fallback to TEAMS_LIST
  const detectedDepartments = Array.from(
    new Set(
      members
        .filter(
          (m) =>
            m.level > 2 &&
            m.team_name &&
            !m.team_name.toLowerCase().includes('executive')
        )
        .map((m) => m.team_name)
    )
  );

  const activeTeamsList = detectedDepartments.length > 0 ? detectedDepartments : TEAMS_LIST;

  // Group teams dynamically with member counts (capped at max 15)
  const teamsData = activeTeamsList.map((teamName) => {
    const teamMems = members.filter((m) => isMatchTeam(m.team_name, teamName));

    // Find Lead
    const lead =
      teamMems.find(
        (m) =>
          m.level === 4 &&
          (m.role?.toLowerCase().includes('lead') || m.role?.toLowerCase().includes('head')) &&
          !m.role?.toLowerCase().includes('vice') &&
          !m.role?.toLowerCase().includes('co-')
      ) || teamMems.find((m) => m.level === 4);

    // Find Vice Lead
    const viceLead =
      teamMems.find(
        (m) =>
          m.level === 4 &&
          (m.role?.toLowerCase().includes('vice') ||
            m.role?.toLowerCase().includes('co-') ||
            m.role?.toLowerCase().includes('deputy'))
      ) || teamMems.filter((m) => m.level === 4 && m !== lead)[0];

    // Core Members: filter out any vacant indicators and cap strictly at 15
    const teamMembers = teamMems
      .filter((m) => m.level === 5 && !m.is_vacant && !isVacantName(m.name))
      .slice(0, 15);

    return {
      name: teamName,
      lead,
      viceLead,
      members: teamMembers,
    };
  });

  const numCols = Math.max(1, teamsData.length);
  const svgWidth = Math.max(1260, numCols * 180);
  const colWidth = svgWidth / numCols;
  const centers = teamsData.map((_, idx) => Math.round((idx + 0.5) * colWidth));

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
        {isPresidentValid ? (
          <button
            type="button"
            onClick={() => onSelectMember(president)}
            className="w-48 sm:w-60 py-3.5 px-4 rounded-2xl border border-amber-500/40 bg-[var(--surface-card)] backdrop-blur-xl hover:border-amber-400 hover:shadow-[0_0_25px_rgba(245,158,11,0.3)] transition-all text-center shadow-lg group cursor-pointer active:scale-95"
          >
            <div className="font-orbitron text-xs sm:text-sm font-bold text-amber-300 group-hover:text-amber-200 transition-colors uppercase tracking-wider">
              President
            </div>
            <div className="font-space text-sm sm:text-base text-white font-bold mt-1 truncate">
              {president.name}
            </div>
            <span className="font-space text-[10px] text-amber-400/80 block mt-0.5">
              Level 0 • Executive Head
            </span>
          </button>
        ) : (
          <div className="w-48 sm:w-60 py-3.5 px-4 rounded-2xl border border-dashed border-amber-500/35 bg-amber-950/15 backdrop-blur-xl text-center shadow-md select-none">
            <div className="font-orbitron text-xs sm:text-sm font-bold text-amber-400/70 uppercase tracking-wider">
              President
            </div>
            <div className="font-space text-xs sm:text-sm text-amber-300/80 italic font-medium mt-1">
              Position Vacant
            </div>
            <span className="font-space text-[10px] text-amber-500/50 block mt-0.5">
              Level 0 • Executive Head
            </span>
          </div>
        )}

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
        {isVicePresidentValid ? (
          <button
            type="button"
            onClick={() => onSelectMember(vicePresident)}
            className="w-48 sm:w-60 py-3.5 px-4 rounded-2xl border border-[var(--accent-cyan)]/40 bg-[var(--surface-card)] backdrop-blur-xl hover:border-[var(--accent-cyan)] hover:shadow-[0_0_25px_rgba(0,200,255,0.3)] transition-all text-center shadow-lg group cursor-pointer active:scale-95"
          >
            <div className="font-orbitron text-xs sm:text-sm font-bold text-[var(--accent-cyan)] group-hover:text-cyan-200 transition-colors uppercase tracking-wider">
              Vice-President
            </div>
            <div className="font-space text-sm sm:text-base text-white font-bold mt-1 truncate">
              {vicePresident.name}
            </div>
            <span className="font-space text-[10px] text-[var(--accent-cyan)]/80 block mt-0.5">
              Level 1 • Executive Director
            </span>
          </button>
        ) : (
          <div className="w-48 sm:w-60 py-3.5 px-4 rounded-2xl border border-dashed border-[var(--accent-cyan)]/35 bg-cyan-950/15 backdrop-blur-xl text-center shadow-md select-none">
            <div className="font-orbitron text-xs sm:text-sm font-bold text-[var(--accent-cyan)]/70 uppercase tracking-wider">
              Vice-President
            </div>
            <div className="font-space text-xs sm:text-sm text-cyan-300/80 italic font-medium mt-1">
              Not Assigned
            </div>
            <span className="font-space text-[10px] text-[var(--accent-cyan)]/50 block mt-0.5">
              Level 1 • Executive Director
            </span>
          </div>
        )}

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
        {isGeneralSecretaryValid ? (
          <button
            type="button"
            onClick={() => onSelectMember(generalSecretary)}
            className="w-48 sm:w-60 py-3.5 px-4 rounded-2xl border border-purple-500/40 bg-[var(--surface-card)] backdrop-blur-xl hover:border-purple-400 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] transition-all text-center shadow-lg group cursor-pointer active:scale-95"
          >
            <div className="font-orbitron text-xs sm:text-sm font-bold text-purple-300 group-hover:text-purple-200 transition-colors uppercase tracking-wider">
              General Secretary
            </div>
            <div className="font-space text-sm sm:text-base text-white font-bold mt-1 truncate">
              {generalSecretary.name}
            </div>
            <span className="font-space text-[10px] text-purple-400/80 block mt-0.5">
              Level 2 • Operations & Governance
            </span>
          </button>
        ) : (
          <div className="w-48 sm:w-60 py-3.5 px-4 rounded-2xl border border-dashed border-purple-500/35 bg-purple-950/15 backdrop-blur-xl text-center shadow-md select-none">
            <div className="font-orbitron text-xs sm:text-sm font-bold text-purple-400/70 uppercase tracking-wider">
              General Secretary
            </div>
            <div className="font-space text-xs sm:text-sm text-purple-300/80 italic font-medium mt-1">
              Not Assigned
            </div>
            <span className="font-space text-[10px] text-purple-500/50 block mt-0.5">
              Level 2 • Operations & Governance
            </span>
          </div>
        )}

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
      {/* 2. HORIZONTAL DISTRIBUTION BUS & TEAM COLUMNS                         */}
      {/* ==================================================================== */}
      <div className="w-full overflow-x-auto pb-8 pt-2 scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-transparent">
        <div
          className="mx-auto flex flex-col items-center px-4"
          style={{
            minWidth: `${svgWidth}px`,
            maxWidth: `${Math.round(svgWidth * 1.08)}px`,
          }}
        >
          {/* Horizontal Distribution Line with Downward Arrows */}
          <div className="relative w-full h-8 mb-1">
            <svg className="w-full h-full" viewBox={`0 0 ${svgWidth} 32`} preserveAspectRatio="none">
              {/* Main horizontal bus line spanning across first column center to last column center */}
              <line
                x1={centers[0] ?? 90}
                y1="4"
                x2={centers[centers.length - 1] ?? (svgWidth - 90)}
                y2="4"
                stroke="#00C8FF"
                strokeWidth="2"
                strokeOpacity="0.8"
              />

              {/* Vertical down branches into each column center */}
              {centers.map((cx, idx) => (
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

          {/* Teams Grid Side-by-Side */}
          <div
            className="grid gap-4 w-full"
            style={{
              gridTemplateColumns: `repeat(${numCols}, minmax(0, 1fr))`,
            }}
          >
            {teamsData.map((team, colIndex) => {
              const isLeadValid = team.lead && !team.lead.is_vacant && !isVacantName(team.lead.name);
              const isViceLeadValid = team.viceLead && !team.viceLead.is_vacant && !isVacantName(team.viceLead.name);
              const memberCount = team.members.length;

              // Pitch calculation: 44px box + 10px gap = 54px per row
              const slotPitch = 54;
              const totalSvgHeight = memberCount > 0 ? memberCount * slotPitch - 10 : 0;
              const lastSpineY = memberCount > 0 ? 22 + (memberCount - 1) * slotPitch : 0;

              return (
                <div key={team.name} className="flex flex-col items-center w-full">
                  {/* Team Lead / Vice Lead Combined Box */}
                  <div className="w-full min-h-[96px] rounded-xl border border-neutral-600 bg-neutral-900/90 hover:border-emerald-400 hover:bg-neutral-850 transition-all p-2.5 text-center flex flex-col justify-between shadow-md relative group">
                    {/* Department Tag */}
                    <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider mb-1 truncate">
                      {team.name}
                    </div>

                    {/* Team Lead Row */}
                    {isLeadValid ? (
                      <button
                        type="button"
                        onClick={() => onSelectMember(team.lead)}
                        className="w-full py-1 px-1.5 rounded-lg hover:bg-white/10 transition-colors text-left flex items-center justify-between group/lead cursor-pointer"
                      >
                        <span className="text-xs font-semibold text-white group-hover/lead:text-emerald-300">
                          Team lead
                        </span>
                        <span className="text-[11px] text-neutral-400 truncate max-w-[85px]">
                          {team.lead.name.split(' ')[0]}
                        </span>
                      </button>
                    ) : (
                      <div className="w-full py-1 px-1.5 text-left flex items-center justify-between cursor-default">
                        <span className="text-xs font-semibold text-neutral-400">Team lead</span>
                        <span className="text-[10px] text-amber-400/80 italic font-space bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/25">
                          Vacant
                        </span>
                      </div>
                    )}

                    <div className="w-full h-px bg-neutral-800 my-0.5" />

                    {/* Vice Lead Row */}
                    {isViceLeadValid ? (
                      <button
                        type="button"
                        onClick={() => onSelectMember(team.viceLead)}
                        className="w-full py-1 px-1.5 rounded-lg hover:bg-white/10 transition-colors text-left flex items-center justify-between group/vlead cursor-pointer"
                      >
                        <span className="text-xs font-semibold text-neutral-300 group-hover/vlead:text-cyan-300">
                          Vice Lead
                        </span>
                        <span className="text-[11px] text-neutral-400 truncate max-w-[85px]">
                          {team.viceLead.name.split(' ')[0]}
                        </span>
                      </button>
                    ) : (
                      <div className="w-full py-1 px-1.5 text-left flex items-center justify-between cursor-default">
                        <span className="text-xs font-semibold text-neutral-500">Vice Lead</span>
                        <span className="text-[10px] text-neutral-400/80 italic font-space bg-white/5 px-1.5 py-0.5 rounded border border-white/10">
                          Not Assigned
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Dynamic Core Members (Rendered ONLY if members exist; no vacant post for core members) */}
                  {memberCount > 0 && (
                    <div className="relative w-full flex mt-2.5">
                      {/* Left Connector Branch SVG auto-scaling to member count */}
                      <div className="w-6 flex-shrink-0 relative">
                        <svg
                          className="w-full"
                          style={{ height: `${totalSvgHeight}px` }}
                          viewBox={`0 0 24 ${totalSvgHeight}`}
                          preserveAspectRatio="none"
                        >
                          {/* Main Vertical Spine starting from bottom of Lead Box down to last member */}
                          <line
                            x1="6"
                            y1="0"
                            x2="6"
                            y2={lastSpineY}
                            stroke="#a3a3a3"
                            strokeWidth="1.5"
                          />

                          {/* Horizontal Branches pointing into each member box */}
                          {team.members.map((_, mIdx) => {
                            const branchY = 22 + mIdx * slotPitch;
                            return (
                              <line
                                key={mIdx}
                                x1="6"
                                y1={branchY}
                                x2="20"
                                y2={branchY}
                                stroke="#a3a3a3"
                                strokeWidth="1.5"
                                markerEnd="url(#eraser-arrow-right)"
                              />
                            );
                          })}
                        </svg>
                      </div>

                      {/* Stack of dynamic Member Boxes (Mem 01 to Mem NN, max 15) */}
                      <div className="flex-1 flex flex-col gap-2.5 pr-1">
                        {team.members.map((member, slotIdx) => {
                          const memberLabel = `Mem ${String(slotIdx + 1).padStart(2, '0')}`;

                          return (
                            <button
                              key={member.id || `mem-${colIndex}-${slotIdx}`}
                              type="button"
                              onClick={() => onSelectMember(member)}
                              className="w-full h-11 px-2.5 rounded-xl border border-neutral-600 bg-neutral-900/90 hover:border-emerald-400 hover:bg-neutral-800 transition-all text-left flex items-center justify-between shadow-sm cursor-pointer active:scale-95 group/mem"
                            >
                              <span className="text-[11px] font-semibold text-neutral-200 group-hover/mem:text-emerald-400 transition-colors">
                                {memberLabel}
                              </span>
                              <span className="text-[11px] text-neutral-400 font-medium truncate max-w-[85px]">
                                {member.name.split(' ')[0]}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
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

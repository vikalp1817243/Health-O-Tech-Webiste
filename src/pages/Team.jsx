import { useState, useEffect } from 'react';
import EraserHierarchyChart from '../components/team/EraserHierarchyChart';
import MemberCard from '../components/team/MemberCard';
import MemberModal from '../components/team/MemberModal';
import { fetchTeamData } from '../lib/teamData';
import { Search, Users, Calendar, ChevronDown } from 'lucide-react';

export default function TeamPage() {
  const [members, setMembers] = useState([]);
  const [tenures, setTenures] = useState([]);
  const [selectedTenure, setSelectedTenure] = useState('');
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      setLoading(true);
      const res = await fetchTeamData(selectedTenure);
      if (isMounted) {
        setMembers(res.members || []);
        if (res.tenures && res.tenures.length > 0) {
          setTenures(res.tenures);
        }
        if (!selectedTenure && res.currentTenure) {
          setSelectedTenure(res.currentTenure);
        }
        setLoading(false);
      }
    }
    loadData();
    return () => {
      isMounted = false;
    };
  }, [selectedTenure]);

  // Filter members for live search mode
  const filteredMembers = members.filter((m) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return false;
    return (
      m.name?.toLowerCase().includes(query) ||
      m.role?.toLowerCase().includes(query) ||
      m.team_name?.toLowerCase().includes(query) ||
      m.branch?.toLowerCase().includes(query) ||
      m.batch?.toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen bg-[var(--bg)] text-white pt-8 pb-20 px-3 sm:px-6 selection:bg-[var(--accent-cyan)] selection:text-black circuit-bg">
      <div className="relative max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header Section with Inspiring Text */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[var(--border-accent)] text-xs text-[var(--accent-cyan)] backdrop-blur-md mb-4 font-space shadow-[0_0_15px_rgba(0,200,255,0.15)]">
            <Users className="w-3.5 h-3.5 text-[var(--accent-green)]" />
            <span className="font-semibold tracking-wider uppercase text-[11px]">
              Executive Directorate & Specialized Divisions
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)] animate-pulse" />
          </div>

          <h1 className="font-orbitron text-3xl sm:text-5xl font-black tracking-tight text-white mb-3">
            LEADERSHIP <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-green)]">ARCHITECTURE</span>
          </h1>

          <p className="font-space text-[var(--text-muted)] text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Meet the multi-disciplinary student engineers, clinical AI researchers, and builders orchestrating 
            biomedical innovations, hackathons, and research projects at VIT Bhopal.
          </p>
        </div>

        {/* Action Bar: Scope Metrics, Batch/Tenure Dropdown & Search Bar */}
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-6 px-2">
          {/* Left: Department Scope */}
          <div className="flex items-center gap-3 text-xs font-space text-[var(--text-muted)] self-start md:self-center">
            <span className="flex items-center gap-1.5 text-white font-medium">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-green)] shadow-[0_0_8px_rgba(0,230,118,0.8)]" />
              7 Core Departments
            </span>
            <span className="text-neutral-600">•</span>
            <span>{members.length > 0 ? `${members.length} Innovators` : '40+ Innovators'}</span>
          </div>

          {/* Right Controls: Batch Selector + Quick Search */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:ml-auto w-full md:w-auto">
            {/* Batch / Tenure Selector Box */}
            <div className="relative min-w-[200px]">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none flex items-center gap-1.5 text-[var(--accent-cyan)]">
                <Calendar className="w-4 h-4" />
              </div>
              <select
                value={selectedTenure}
                onChange={(e) => setSelectedTenure(e.target.value)}
                aria-label="Select Tenure Batch"
                className="w-full appearance-none pl-9 pr-8 py-2.5 rounded-xl bg-[#0d0922]/90 border border-[var(--border-accent)] text-white text-xs sm:text-sm font-space shadow-inner cursor-pointer focus:outline-none focus:border-[var(--accent-cyan)] focus:ring-2 focus:ring-[var(--accent-cyan)]/25 transition-all"
              >
                {tenures.length > 0 ? (
                  tenures.map((t) => (
                    <option key={t} value={t} className="bg-[#130F29] text-white">
                      {t}
                    </option>
                  ))
                ) : (
                  <option value={selectedTenure || 'Current Batch'} className="bg-[#130F29] text-white">
                    {selectedTenure || 'Current Batch (2025-26)'}
                  </option>
                )}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
            </div>

            {/* Quick Search Bar */}
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search leader, role, or branch..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[var(--surface-card)] border border-[var(--border-accent)] text-white placeholder-neutral-500 text-xs sm:text-sm focus:outline-none focus:border-[var(--accent-cyan)] focus:shadow-[0_0_15px_rgba(0,200,255,0.25)] transition-all"
              />
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="py-20 text-center text-neutral-400">
            <div className="w-7 h-7 border-2 border-[var(--accent-green)] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <p className="text-xs font-space">Loading organization architecture...</p>
          </div>
        ) : searchQuery.trim() ? (
          /* Search Results */
          <div className="w-full max-w-4xl py-4">
            <h2 className="text-base font-orbitron font-bold text-white mb-4 flex items-center justify-between">
              <span>Matching Members ({filteredMembers.length})</span>
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="text-xs font-space text-[var(--accent-cyan)] hover:underline cursor-pointer"
              >
                Clear Search
              </button>
            </h2>
            {filteredMembers.length === 0 ? (
              <div className="text-center py-12 text-neutral-500 text-sm font-space">
                No members found matching "{searchQuery}".
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {filteredMembers.map((member) => (
                  <MemberCard
                    key={member.id}
                    member={member}
                    onClick={setSelectedMember}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          /* ========================================================== */
          /* THE EXACT ERASER FLOWCHART DIAGRAM                        */
          /* ========================================================== */
          <EraserHierarchyChart
            members={members}
            onSelectMember={setSelectedMember}
          />
        )}
      </div>

      {/* Detail Popup Modal (Triggered when clicking any box/name) */}
      {selectedMember && (
        <MemberModal
          key={selectedMember.id}
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </div>
  );
}

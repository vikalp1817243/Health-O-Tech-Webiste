import React, { useState, useEffect } from 'react';
import EraserHierarchyChart from '../components/team/EraserHierarchyChart';
import MemberCard from '../components/team/MemberCard';
import MemberModal from '../components/team/MemberModal';
import { fetchTeamMembers } from '../lib/teamData';
import { isSupabaseConfigured } from '../lib/supabaseClient';
import { 
  Network, 
  Search, 
  Database, 
  Copy,
  Check,
  Info
} from 'lucide-react';

export default function TeamPage() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMember, setSelectedMember] = useState(null);
  const [showSqlGuide, setShowSqlGuide] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const data = await fetchTeamMembers();
      setMembers(data);
      setLoading(false);
    }
    loadData();
  }, []);

  // Filter members for live search mode
  const filteredMembers = members.filter((m) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return false;
    return (
      m.name?.toLowerCase().includes(query) ||
      m.role?.toLowerCase().includes(query) ||
      m.team_name?.toLowerCase().includes(query)
    );
  });

  const sqlSchema = `-- Supabase PostgreSQL Schema for Health-O-Tech Team Hierarchy
create table if not exists team_members (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text not null,
  level int not null check (level in (0, 1, 2, 4, 5)),
  team_name text not null,
  photo_url text, -- Supabase Storage Public URL
  tagline text,
  email text,
  linkedin_url text,
  github_url text,
  order_index int default 0,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Enable Row Level Security (RLS) & Public Read Access
alter table team_members enable row level security;
create policy "Allow public read access" on team_members 
  for select using (true);
`;

  const copySql = () => {
    navigator.clipboard.writeText(sqlSchema);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-white pt-8 pb-20 px-3 sm:px-6 selection:bg-[var(--accent-cyan)] selection:text-black circuit-bg">
      <div className="relative max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[var(--border-accent)] text-xs text-gray-300 backdrop-blur-md mb-4 font-space">
            <Network className="w-3.5 h-3.5 text-[var(--accent-cyan)]" />
            <span>Organizational Hierarchy Flowchart</span>
            <span className="w-1 h-1 rounded-full bg-gray-500" />
            <span className="flex items-center gap-1.5 text-[11px]">
              <span className={`w-2 h-2 rounded-full ${isSupabaseConfigured ? 'bg-[var(--accent-green)] shadow-[0_0_8px_rgba(0,230,118,0.8)]' : 'bg-amber-400 animate-pulse'}`} />
              {isSupabaseConfigured ? 'Supabase Connected' : 'Demo / Supabase Ready'}
            </span>
          </div>

          <h1 className="font-orbitron text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-2">
            TEAM <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-green)]">FLOWCHART</span>
          </h1>

          <p className="font-space text-[var(--text-muted)] text-xs sm:text-sm">
            Interactive organizational structure of the Health-O-Tech Club. Click on any role or member box to inspect photo, bio, and social channels.
          </p>

          {/* Quick Buttons: Supabase & Click Hint */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-3">
            <button
              type="button"
              onClick={() => setShowSqlGuide(!showSqlGuide)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/5 hover:bg-white/10 border border-[var(--border-accent)] text-xs font-medium text-gray-300 hover:text-white transition-all shadow-sm cursor-pointer"
            >
              <Database className="w-3 h-3 text-[var(--accent-cyan)]" />
              <span>{showSqlGuide ? 'Hide Supabase Guide' : 'Supabase Postgres Setup'}</span>
            </button>
            <div className="inline-flex items-center gap-1.5 text-[11px] text-[var(--accent-green)] bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-xl">
              <Info className="w-3 h-3" />
              <span>Click on any box to open details popup</span>
            </div>
          </div>
        </div>

        {/* Supabase Guide Drawer */}
        {showSqlGuide && (
          <div className="w-full max-w-4xl mb-8 p-5 sm:p-6 rounded-2xl bg-neutral-900/95 border border-cyan-500/30 backdrop-blur-2xl shadow-2xl animate-in fade-in duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-cyan-400" />
                <h3 className="font-bold text-white text-sm sm:text-base">Supabase PostgreSQL Configuration</h3>
              </div>
              <button
                type="button"
                onClick={copySql}
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 hover:bg-white/15 text-xs text-cyan-300 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                {copied ? 'Copied' : 'Copy SQL'}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gray-300 mb-3">
              <div>
                <h4 className="font-semibold text-white mb-1">1. Environment Variables</h4>
                <p className="text-gray-400 mb-1">Add to <code className="text-emerald-400 bg-black/40 px-1 py-0.5 rounded">.env</code> in <code className="text-gray-300">health-o-tech/</code>:</p>
                <pre className="p-2.5 rounded-xl bg-black/60 border border-white/10 overflow-x-auto text-emerald-300 font-mono text-[11px]">
                  {`VITE_SUPABASE_URL=https://your-project.supabase.co\nVITE_SUPABASE_ANON_KEY=your-anon-public-key`}
                </pre>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">2. Storage Bucket</h4>
                <p className="text-gray-400">
                  Create a public bucket named <code className="text-cyan-400 bg-black/40 px-1 py-0.5 rounded">team-photos</code> in Supabase Storage. Member image URLs are loaded dynamically into each popup modal.
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-1">3. SQL Migration</h4>
              <pre className="p-3 rounded-xl bg-black/80 border border-white/10 overflow-x-auto text-gray-300 font-mono text-[11px] leading-relaxed">
                {sqlSchema}
              </pre>
            </div>
          </div>
        )}

        {/* Quick Search Bar */}
        <div className="w-full max-w-md mb-6">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search member name, role, or team..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-neutral-900/90 border border-neutral-700 text-white placeholder-neutral-500 text-xs sm:text-sm focus:outline-none focus:border-emerald-500/70 focus:ring-1 focus:ring-emerald-500/70 transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="py-20 text-center text-neutral-400">
            <div className="w-7 h-7 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <p className="text-xs">Loading team flowchart...</p>
          </div>
        ) : searchQuery.trim() ? (
          /* Search Results */
          <div className="w-full max-w-4xl py-4">
            <h2 className="text-base font-bold text-white mb-4">
              Search Results ({filteredMembers.length})
            </h2>
            {filteredMembers.length === 0 ? (
              <div className="text-center py-12 text-neutral-500 text-sm">
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
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </div>
  );
}

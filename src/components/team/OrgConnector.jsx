import React from 'react';

export function VerticalConnector({ length = "h-12", color = "from-emerald-500/80 to-cyan-500/80" }) {
  return (
    <div className={`relative flex flex-col items-center justify-center w-full ${length} my-1`}>
      {/* Central glowing vertical line */}
      <div className={`w-0.5 h-full bg-gradient-to-b ${color} shadow-[0_0_8px_rgba(16,185,129,0.5)]`} />
      {/* Middle pulsing node */}
      <div className="absolute w-2 h-2 rounded-full bg-emerald-400 ring-4 ring-emerald-500/20 shadow-[0_0_10px_#10b981]" />
    </div>
  );
}

export function BranchConnector({ title, subtitle }) {
  return (
    <div className="relative w-full my-6 flex flex-col items-center">
      {/* Top vertical lead-in line */}
      <div className="w-0.5 h-8 bg-gradient-to-b from-purple-500 to-emerald-500" />
      
      {/* Central Junction Node with Badge */}
      <div className="z-10 px-4 py-1 rounded-full bg-neutral-900 border border-emerald-500/40 text-emerald-300 text-xs font-semibold shadow-[0_0_15px_rgba(16,185,129,0.25)] flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        {title || "Level 3: Functional Departments"}
      </div>

      {/* Down stem */}
      <div className="w-0.5 h-6 bg-emerald-500/60" />

      {/* Horizontal Distribution Line */}
      <div className="hidden lg:block w-[92%] max-w-6xl h-0.5 bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
    </div>
  );
}

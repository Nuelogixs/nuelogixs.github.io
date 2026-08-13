import React from 'react';
import { Info, Sparkles } from 'lucide-react';

export const DemoBanner: React.FC = () => {
  return (
    <div className="bg-slate-950/80 border-b border-slate-800/80 text-xs py-2 px-4 backdrop-blur-md sticky top-0 z-50 text-slate-400">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 bg-cyan-950/80 text-cyan-400 px-2 py-0.5 rounded-full border border-cyan-800/50 font-mono text-[10px] font-medium">
            <Sparkles className="w-3 h-3 text-cyan-400" /> PROTOTYPE / DEMO MODE
          </span>
          <span className="hidden sm:inline text-slate-400">
            Unified Nuelogixs × Esik Pay Infrastructure Preview. All data shown uses placeholder metrics.
          </span>
        </div>
        <div className="flex items-center gap-3 text-[11px]">
          <span className="text-slate-500 font-mono">Status: Interactive UI Ready</span>
          <div className="flex items-center gap-1 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="hidden md:inline font-mono">0ms Latency Mock</span>
          </div>
        </div>
      </div>
    </div>
  );
};

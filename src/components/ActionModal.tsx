import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, Layers, ShieldCheck } from 'lucide-react';

interface ActionModalProps {
  isOpen: boolean;
  title: string;
  subtitle: string;
  onClose: () => void;
}

export const ActionModal: React.FC<ActionModalProps> = ({
  isOpen,
  title,
  subtitle,
  onClose,
}) => {
  const [isDone, setIsDone] = useState(false);

  if (!isOpen) return null;

  const handleConfirmAction = () => {
    setIsDone(true);
    setTimeout(() => {
      setIsDone(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#0d1726] border border-slate-800 p-6 sm:p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-extrabold text-slate-100 text-lg font-mono">{title}</h3>
            <p className="text-xs text-slate-400">{subtitle}</p>
          </div>
        </div>

        {isDone ? (
          <div className="py-8 flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 animate-bounce">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-slate-100 text-base font-mono">
              Action Simulated Successfully!
            </h4>
            <p className="text-xs text-slate-400 font-mono">
              The ecosystem UI state has updated. Data is kept in local demo memory.
            </p>
          </div>
        ) : (
          <div className="space-y-6 pt-2">
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 font-mono text-xs space-y-2">
              <div className="flex items-center justify-between text-slate-400">
                <span>SIMULATED WORKFLOW ID</span>
                <span className="text-cyan-400 font-bold">#WF-2026-NLGX</span>
              </div>
              <div className="flex items-center justify-between text-slate-400">
                <span>LATENCY</span>
                <span className="text-emerald-400 font-bold">0ms (Local Mock)</span>
              </div>
              <div className="flex items-center justify-between text-slate-400">
                <span>ESIK PAY SETTLEMENT</span>
                <span className="text-slate-200 font-bold">Ready</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                Prototype Mode: This triggers interactive visual states without processing live money or booking real vehicles.
              </span>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white font-mono text-xs"
              >
                Close Preview
              </button>
              <button
                onClick={handleConfirmAction}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500 font-bold text-slate-950 text-xs shadow-lg shadow-cyan-500/20 cursor-pointer"
              >
                Confirm Simulated Trigger
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

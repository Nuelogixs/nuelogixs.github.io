import React, { useState, useEffect } from 'react';
import { X, Bot, Sparkles, CheckCircle2, ShieldAlert, Cpu, ArrowRight, Loader2 } from 'lucide-react';
import { APP_URLS } from '../config/appUrls';

interface DemoAIDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  actionTitle: string;
}

type AIStep = 'review' | 'analyzing' | 'applying' | 'success';

export const DemoAIDrawer: React.FC<DemoAIDrawerProps> = ({ isOpen, onClose, actionTitle }) => {
  const [step, setStep] = useState<AIStep>('review');

  useEffect(() => {
    if (isOpen) {
      setStep('review');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    setStep('review');
    onClose();
  };

  const handleExecute = () => {
    setStep('analyzing');
    setTimeout(() => {
      setStep('applying');
      setTimeout(() => {
        setStep('success');
      }, 1500);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#0d1726] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
              <Bot className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-100 text-lg font-mono">AI Execution Engine</h3>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-purple-400 font-mono bg-purple-950/80 px-2 py-0.5 rounded border border-purple-800/60 uppercase">
                  SIMULATED ACTION
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto custom-scrollbar flex-1">
          {step === 'review' && (
            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-purple-950/20 border border-purple-900/30 font-mono text-sm space-y-4">
                <div className="flex items-center gap-2 text-purple-400 font-bold mb-2 pb-3 border-b border-purple-900/40">
                  <Sparkles className="w-4 h-4" /> Review Recommendation
                </div>
                
                <div>
                  <span className="text-slate-500 text-xs block mb-1">Target Action:</span>
                  <span className="text-slate-200 font-bold">{actionTitle}</span>
                </div>
                
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-400">
                  By confirming, the AI agent will automatically route resources, generate necessary API calls, and adjust parameters in the simulated environment.
                </div>
                
                <div className="flex items-center justify-between pt-2">
                  <span className="text-slate-500 text-xs">Confidence Score:</span>
                  <span className="text-emerald-400 font-bold text-sm">98.4%</span>
                </div>
              </div>
            </div>
          )}

          {step === 'analyzing' && (
            <div className="py-12 flex flex-col items-center justify-center text-center gap-4">
              <Loader2 className="w-10 h-10 text-purple-400 animate-spin" />
              <div>
                <h4 className="font-bold text-slate-100 font-mono">Generating Solution...</h4>
                <p className="text-xs text-slate-400 mt-1">Calculating optimal pathways</p>
              </div>
            </div>
          )}

          {step === 'applying' && (
            <div className="py-12 flex flex-col items-center justify-center text-center gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center">
                <Cpu className="w-6 h-6 text-purple-400 animate-pulse" />
              </div>
              <div>
                <h4 className="font-bold text-slate-100 font-mono">Applying Mitigation</h4>
                <p className="text-xs text-slate-400 mt-1">Dispatching smart contract instructions...</p>
              </div>
            </div>
          )}

          {step === 'success' && (
            <div className="py-10 flex flex-col items-center justify-center text-center gap-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center animate-bounce">
                <CheckCircle2 className="w-7 h-7 text-emerald-400" />
              </div>
              <div>
                <h4 className="font-bold text-slate-100 text-lg font-mono">Action Executed</h4>
                <p className="text-xs text-slate-400 mt-2 max-w-[250px] mx-auto">
                  The recommended AI workflow was simulated successfully. No live production systems were altered.
                </p>
                <div className="mt-4 inline-block px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 font-mono text-xs text-slate-300">
                  System state updated.
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {(step === 'review' || step === 'success') && (
          <div className="p-5 border-t border-slate-800 bg-slate-900/50 flex items-center justify-end gap-3">
            {step === 'success' ? (
              <a
                href={APP_URLS.nuelogixs}
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold transition-colors flex items-center justify-center gap-2"
              >
                Launch Nuelogixs
              </a>
            ) : (
              <>
                <button
                  onClick={handleClose}
                  className="px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white font-mono text-xs transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleExecute}
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-mono text-xs font-bold transition-all shadow-lg shadow-purple-500/20 flex items-center justify-center gap-2"
                >
                  Confirm Execution
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

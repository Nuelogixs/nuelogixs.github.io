import React from 'react';
import { Layers, ArrowRight, Lock, Truck, CreditCard, Building, Brain, Info, Sparkles, ShoppingBag } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLogin: () => void;
  onOpenAction: (title: string, subtitle: string) => void;
  onNavigateSection: (sectionId: string) => void;
  onOpenGetStarted: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  onOpenLogin,
  onOpenAction,
  onNavigateSection,
  onOpenGetStarted,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-2xl flex flex-col justify-between p-6 overflow-y-auto animate-fadeIn">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-sm sm:text-base font-black tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 uppercase leading-none">
              NUELOGIXS ENTERPRISES
            </span>
          </div>
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-400 hover:text-white"
          >
            Close
          </button>
        </div>

        <nav className="flex flex-col gap-2">
          <button
            onClick={() => onNavigateSection('logistics')}
            className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-left hover:border-cyan-500/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Truck className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-sm font-semibold text-slate-200">Logistics & Dispatch</div>
                <div className="text-xs text-slate-400">Nuelogixs Enterprises</div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-500" />
          </button>

          <button
            onClick={() => onNavigateSection('store')}
            className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-left hover:border-cyan-500/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-sm font-semibold text-slate-200">Wholesale Store</div>
                <div className="text-xs text-slate-400">B2B Live Catalog</div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-500" />
          </button>

          <button
            onClick={() => onNavigateSection('payments')}
            className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-left hover:border-emerald-500/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <CreditCard className="w-5 h-5 text-emerald-400" />
              <div>
                <div className="text-sm font-semibold text-slate-200">Utility & Payments</div>
                <div className="text-xs text-slate-400">Esik Pay Engine</div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-500" />
          </button>

          <button
            onClick={() => onNavigateSection('business')}
            className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-left hover:border-blue-500/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Building className="w-5 h-5 text-blue-400" />
              <div>
                <div className="text-sm font-semibold text-slate-200">Business Disbursements</div>
                <div className="text-xs text-slate-400">Workforce & Vendor Payouts</div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-500" />
          </button>

          <button
            onClick={() => onNavigateSection('ai-intelligence')}
            className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-left hover:border-purple-500/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Brain className="w-5 h-5 text-purple-400" />
              <div>
                <div className="text-sm font-semibold text-slate-200">AI Intelligence</div>
                <div className="text-xs text-slate-400">Predictive Operations</div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-500" />
          </button>

          <button
            onClick={() => onNavigateSection('company')}
            className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-left hover:border-slate-500/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Info className="w-5 h-5 text-slate-400" />
              <div>
                <div className="text-sm font-semibold text-slate-200">Unified Ecosystem</div>
                <div className="text-xs text-slate-400">Platform Overview</div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-500" />
          </button>
        </nav>
      </div>

      <div className="flex flex-col gap-3 pt-6 border-t border-slate-800">
        <button
          onClick={onOpenLogin}
          className="w-full py-3 rounded-xl border border-slate-800 text-slate-300 font-medium text-sm flex items-center justify-center gap-2 bg-slate-900"
        >
          <Lock className="w-4 h-4" /> Login
        </button>

        <button
          onClick={() => {
            onClose();
            onOpenGetStarted();
          }}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500 font-semibold text-slate-950 text-sm shadow-lg shadow-cyan-500/20"
        >
          Get Started
        </button>

        <div className="text-center text-[10px] text-slate-400 font-mono pt-2">
          © 2026 NUELOGIXS ENTERPRISES × ESIK PAY
        </div>
      </div>
    </div>
  );
};

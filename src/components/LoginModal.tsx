import React from 'react';
import { Lock, X, Truck, CreditCard, ArrowRight, ExternalLink } from 'lucide-react';
import { APP_URLS } from '../config/appUrls';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const navigateToPlatform = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative w-full max-w-md rounded-3xl bg-[#0d1726] border border-slate-800 p-6 sm:p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex flex-col items-center text-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center">
            <Lock className="w-5 h-5 text-slate-300" />
          </div>
          <div>
            <h3 className="font-extrabold text-slate-100 text-xl font-mono">PORTAL LOGIN</h3>
            <p className="text-sm text-slate-400 mt-2">Select a platform to sign in</p>
          </div>
        </div>

        <div className="space-y-4">
          {/* Nuelogixs Gateway */}
          <button
            onClick={() => navigateToPlatform(APP_URLS.nuelogixs)}
            className="w-full flex items-center justify-between p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-cyan-950 border border-cyan-800/60">
                <Truck className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-slate-100 font-mono tracking-wide">Nuelogixs</h4>
                <p className="text-xs text-slate-400 mt-0.5">Logistics & Operations</p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:bg-cyan-950 transition-colors">
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-400" />
            </div>
          </button>

          {/* Esik Pay Gateway */}
          <button
            onClick={() => navigateToPlatform(APP_URLS.esikPay)}
            className="w-full flex items-center justify-between p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900 transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-emerald-950 border border-emerald-800/60">
                <CreditCard className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-slate-100 font-mono tracking-wide">ESIK Pay</h4>
                <p className="text-xs text-slate-400 mt-0.5">Utility & Business Wallet</p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:bg-emerald-950 transition-colors">
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-400" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

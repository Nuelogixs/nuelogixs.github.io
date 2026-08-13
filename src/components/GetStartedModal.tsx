import React from 'react';
import { X, Layers, Truck, CreditCard, ArrowRight, ExternalLink } from 'lucide-react';
import { APP_URLS } from '../config/appUrls';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GetStartedModal: React.FC<GetStartedModalProps> = ({ isOpen, onClose }) => {
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
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 flex items-center justify-center">
            <Layers className="w-6 h-6 text-cyan-400" />
          </div>
          <div>
            <h3 className="font-extrabold text-slate-100 text-xl font-mono">CHOOSE PLATFORM</h3>
            <p className="text-sm text-slate-400 mt-2">Which platform are you looking for?</p>
          </div>
        </div>

        <div className="space-y-4">
          {/* Nuelogixs Gateway */}
          <button
            onClick={() => navigateToPlatform(APP_URLS.nuelogixs)}
            className="w-full group text-left flex flex-col gap-3 p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 transition-all cursor-pointer relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Truck className="w-16 h-16 text-cyan-400" />
            </div>
            
            <div className="flex items-center gap-3 relative z-10">
              <div className="p-2.5 rounded-lg bg-cyan-950 border border-cyan-800/60">
                <Truck className="w-5 h-5 text-cyan-400" />
              </div>
              <h4 className="font-bold text-slate-100 font-mono tracking-wide">NUELOGIXS</h4>
            </div>
            
            <div className="relative z-10">
              <p className="text-xs text-slate-400 leading-relaxed">
                Logistics, dispatch, warehouse management and operations intelligence.
              </p>
            </div>

            <div className="flex items-center justify-between mt-2 text-cyan-400 text-xs font-bold relative z-10">
              <span>Explore Nuelogixs</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </button>

          {/* Esik Pay Gateway */}
          <button
            onClick={() => navigateToPlatform(APP_URLS.esikPay)}
            className="w-full group text-left flex flex-col gap-3 p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900 transition-all cursor-pointer relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <CreditCard className="w-16 h-16 text-emerald-400" />
            </div>
            
            <div className="flex items-center gap-3 relative z-10">
              <div className="p-2.5 rounded-lg bg-emerald-950 border border-emerald-800/60">
                <CreditCard className="w-5 h-5 text-emerald-400" />
              </div>
              <h4 className="font-bold text-slate-100 font-mono tracking-wide">ESIK PAY</h4>
            </div>
            
            <div className="relative z-10">
              <p className="text-xs text-slate-400 leading-relaxed">
                Utilities, bill payments, and bulk business workforce disbursement.
              </p>
            </div>

            <div className="flex items-center justify-between mt-2 text-emerald-400 text-xs font-bold relative z-10">
              <span>Explore ESIK Pay</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

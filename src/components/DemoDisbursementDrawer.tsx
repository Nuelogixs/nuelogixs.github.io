import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Clock, Calendar, Users, ShieldCheck, ArrowRight, Loader2 } from 'lucide-react';
import { APP_URLS } from '../config/appUrls';

interface DemoDisbursementDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  workerCount: number;
}

type DisbursementStep = 'review' | 'escrow' | 'processing' | 'success';

export const DemoDisbursementDrawer: React.FC<DemoDisbursementDrawerProps> = ({ isOpen, onClose, workerCount }) => {
  const [step, setStep] = useState<DisbursementStep>('review');

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

  const handleConfirm = () => {
    setStep('escrow');
    setTimeout(() => {
      setStep('processing');
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
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
              <Users className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-100 text-lg font-mono">Batch Disbursement</h3>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-blue-400 font-mono bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/60 uppercase">
                  DEMO MODE
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
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 font-mono text-xs space-y-3">
                <div className="text-slate-400 font-bold mb-2 pb-2 border-b border-slate-800 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" /> Review Batch Payout
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Selected Workers:</span>
                  <span className="text-slate-200">{workerCount}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Gateway:</span>
                  <span className="text-slate-200">ESIK Pay Wallet</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Scheduling:</span>
                  <span className="text-slate-200">Immediate</span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-800 mt-2">
                  <span className="text-slate-400">Total Batch Amount:</span>
                  <span className="text-emerald-400 font-bold text-sm">₦XXX,XXX</span>
                </div>
              </div>
            </div>
          )}

          {step === 'escrow' && (
            <div className="py-12 flex flex-col items-center justify-center text-center gap-4">
              <Loader2 className="w-10 h-10 text-blue-400 animate-spin" />
              <div>
                <h4 className="font-bold text-slate-100 font-mono">Securing Funds...</h4>
                <p className="text-xs text-slate-400 mt-1">Allocating from master escrow wallet</p>
              </div>
            </div>
          )}

          {step === 'processing' && (
            <div className="py-12 flex flex-col items-center justify-center text-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center">
                <Clock className="w-6 h-6 text-blue-400 animate-pulse" />
              </div>
              <div>
                <h4 className="font-bold text-slate-100 font-mono">Processing Batch</h4>
                <p className="text-xs text-slate-400 mt-1">Disbursing simulated stipends to {workerCount} accounts...</p>
              </div>
            </div>
          )}

          {step === 'success' && (
            <div className="py-10 flex flex-col items-center justify-center text-center gap-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center animate-bounce">
                <CheckCircle2 className="w-7 h-7 text-emerald-400" />
              </div>
              <div>
                <h4 className="font-bold text-slate-100 text-lg font-mono">Batch Disbursed Successfully</h4>
                <p className="text-xs text-slate-400 mt-2">
                  This was a simulated interactive preview. No real funds were moved.
                </p>
                <div className="mt-4 inline-block px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 font-mono text-xs text-slate-300">
                  Ref: <span className="text-blue-400 font-bold">BATCH-DEMO-001</span>
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
                href={APP_URLS.esikPay}
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold transition-colors flex items-center justify-center gap-2"
              >
                Launch ESIK Pay
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
                  onClick={handleConfirm}
                  className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2"
                >
                  Confirm Disbursement
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

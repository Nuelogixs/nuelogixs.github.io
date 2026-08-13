import React, { useState } from 'react';
import { X, CheckCircle2, CreditCard, Zap, Smartphone, Wifi, Tv, ArrowRight, Loader2, ArrowUpRight } from 'lucide-react';
import { APP_URLS } from '../config/appUrls';

interface DemoPaymentDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

type PaymentStep = 'form' | 'review' | 'validating' | 'processing' | 'success';
type ServiceType = 'Electricity' | 'Airtime' | 'Data' | 'Cable TV';

export const DemoPaymentDrawer: React.FC<DemoPaymentDrawerProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<PaymentStep>('form');
  const [service, setService] = useState<ServiceType>('Electricity');
  const [account, setAccount] = useState('XXXXXXXXXX');
  const [amount, setAmount] = useState('₦XX,XXX');

  if (!isOpen) return null;

  const handleClose = () => {
    setStep('form');
    onClose();
  };

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('review');
  };

  const handleConfirm = () => {
    setStep('validating');
    setTimeout(() => {
      setStep('processing');
      setTimeout(() => {
        setStep('success');
      }, 1500);
    }, 1500);
  };

  const getServiceIcon = () => {
    switch(service) {
      case 'Electricity': return <Zap className="w-4 h-4 text-emerald-400 absolute left-3 top-2.5" />;
      case 'Airtime': return <Smartphone className="w-4 h-4 text-emerald-400 absolute left-3 top-2.5" />;
      case 'Data': return <Wifi className="w-4 h-4 text-emerald-400 absolute left-3 top-2.5" />;
      case 'Cable TV': return <Tv className="w-4 h-4 text-emerald-400 absolute left-3 top-2.5" />;
      default: return <Zap className="w-4 h-4 text-emerald-400 absolute left-3 top-2.5" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#0d1726] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-100 text-lg font-mono">Utility Payment</h3>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-emerald-400 font-mono bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60 uppercase">
                  DEMO TRANSACTION
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
          {step === 'form' && (
            <form onSubmit={handleContinue} className="space-y-4 font-mono text-sm">
              <div>
                <label className="text-slate-400 block mb-1.5 text-xs">Service Type</label>
                <div className="relative">
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value as ServiceType)}
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-emerald-500 transition-colors appearance-none"
                  >
                    <option value="Electricity">Electricity (Prepaid)</option>
                    <option value="Airtime">Mobile Airtime</option>
                    <option value="Data">Mobile Data</option>
                    <option value="Cable TV">Cable TV</option>
                  </select>
                  {getServiceIcon()}
                </div>
              </div>

              <div>
                <label className="text-slate-400 block mb-1.5 text-xs">
                  {service === 'Electricity' ? 'Meter Number' : service === 'Cable TV' ? 'Smartcard Number' : 'Phone Number'}
                </label>
                <input
                  type="text"
                  value={account}
                  onChange={(e) => setAccount(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-emerald-500 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="text-slate-400 block mb-1.5 text-xs">Amount</label>
                <input
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-emerald-400 font-bold focus:outline-none focus:border-emerald-500 transition-colors"
                  required
                />
              </div>
            </form>
          )}

          {step === 'review' && (
            <div className="space-y-5">
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 font-mono text-xs space-y-3">
                <div className="text-slate-400 font-bold mb-2 pb-2 border-b border-slate-800">Review Payment</div>
                
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Service:</span>
                  <span className="text-slate-200">{service}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Provider:</span>
                  <span className="text-slate-200">Demo Provider</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Account/Meter:</span>
                  <span className="text-slate-200">{account}</span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-800 mt-2">
                  <span className="text-slate-400">Total Amount:</span>
                  <span className="text-emerald-400 font-bold text-sm">{amount}</span>
                </div>
              </div>
            </div>
          )}

          {step === 'validating' && (
            <div className="py-12 flex flex-col items-center justify-center text-center gap-4">
              <Loader2 className="w-10 h-10 text-emerald-400 animate-spin" />
              <div>
                <h4 className="font-bold text-slate-100 font-mono">Validating Account...</h4>
                <p className="text-xs text-slate-400 mt-1">Connecting to demo provider gateway</p>
              </div>
            </div>
          )}

          {step === 'processing' && (
            <div className="py-12 flex flex-col items-center justify-center text-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-emerald-400 animate-pulse" />
              </div>
              <div>
                <h4 className="font-bold text-slate-100 font-mono">Processing Payment</h4>
                <p className="text-xs text-slate-400 mt-1">Securing simulated transaction ledger...</p>
              </div>
            </div>
          )}

          {step === 'success' && (
            <div className="py-10 flex flex-col items-center justify-center text-center gap-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center animate-bounce">
                <CheckCircle2 className="w-7 h-7 text-emerald-400" />
              </div>
              <div>
                <h4 className="font-bold text-slate-100 text-lg font-mono">Demo Complete</h4>
                <p className="text-xs text-slate-400 mt-2">
                  This was a simulated interactive preview. No real funds were moved.
                </p>
                <div className="mt-4 inline-block px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 font-mono text-xs text-slate-300">
                  Ref: <span className="text-emerald-400 font-bold">ESIK-DEMO-0001</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {(step === 'form' || step === 'review' || step === 'success') && (
          <div className="p-5 border-t border-slate-800 bg-slate-900/50 flex items-center justify-end gap-3">
            {step === 'success' ? (
              <a
                href={APP_URLS.esikPay}
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold transition-colors flex items-center justify-center gap-2"
              >
                Launch ESIK Pay
              </a>
            ) : step === 'form' ? (
              <button
                onClick={handleContinue}
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-mono text-xs font-bold transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
              >
                Continue <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <>
                <button
                  onClick={() => setStep('form')}
                  className="px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white font-mono text-xs transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handleConfirm}
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-mono text-xs font-bold transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
                >
                  Confirm Demo Payment
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { X, CheckCircle2, Truck, MapPin, Package, ArrowRight, Loader2, Navigation } from 'lucide-react';
import { APP_URLS } from '../config/appUrls';

interface DemoBookingDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

type BookingStep = 'form' | 'review' | 'searching' | 'assigned' | 'success';

export const DemoBookingDrawer: React.FC<DemoBookingDrawerProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<BookingStep>('form');
  const [pickup, setPickup] = useState('Demo Location (Warehouse A)');
  const [destination, setDestination] = useState('Demo Location (Customer Dropoff)');
  const [packageType, setPackageType] = useState('Standard Parcel');

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
    setStep('searching');
    setTimeout(() => {
      setStep('assigned');
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
              <Truck className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-100 text-lg font-mono">Book Dispatcher</h3>
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
          {step === 'form' && (
            <form onSubmit={handleContinue} className="space-y-4 font-mono text-sm">
              <div>
                <label className="text-slate-400 block mb-1.5 text-xs">Pickup Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
                  <input
                    type="text"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-slate-400 block mb-1.5 text-xs">Destination</label>
                <div className="relative">
                  <Navigation className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-slate-400 block mb-1.5 text-xs">Package Type</label>
                <div className="relative">
                  <Package className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
                  <select
                    value={packageType}
                    onChange={(e) => setPackageType(e.target.value)}
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors appearance-none"
                  >
                    <option>Standard Parcel</option>
                    <option>Fragile Goods</option>
                    <option>Bulk Freight</option>
                    <option>Express Document</option>
                  </select>
                </div>
              </div>
            </form>
          )}

          {step === 'review' && (
            <div className="space-y-5">
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 font-mono text-xs space-y-3">
                <div className="text-slate-400 font-bold mb-2 pb-2 border-b border-slate-800">Demo Booking Summary</div>
                
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Dispatcher:</span>
                  <span className="text-slate-200">Dispatcher #000 (Auto-assign)</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Pickup:</span>
                  <span className="text-slate-200">{pickup}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Destination:</span>
                  <span className="text-slate-200">{destination}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Package:</span>
                  <span className="text-slate-200">{packageType}</span>
                </div>
                
                <div className="flex items-center justify-between pt-2 border-t border-slate-800 mt-2">
                  <span className="text-slate-400">Estimated Price:</span>
                  <span className="text-cyan-400 font-bold text-sm">₦XX,XXX</span>
                </div>
              </div>
            </div>
          )}

          {step === 'searching' && (
            <div className="py-12 flex flex-col items-center justify-center text-center gap-4">
              <Loader2 className="w-10 h-10 text-cyan-400 animate-spin" />
              <div>
                <h4 className="font-bold text-slate-100 font-mono">Searching nearby fleet...</h4>
                <p className="text-xs text-slate-400 mt-1">Simulating geographic matchmaking</p>
              </div>
            </div>
          )}

          {step === 'assigned' && (
            <div className="py-12 flex flex-col items-center justify-center text-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center">
                <Truck className="w-6 h-6 text-blue-400 animate-pulse" />
              </div>
              <div>
                <h4 className="font-bold text-slate-100 font-mono">Dispatcher Assigned</h4>
                <p className="text-xs text-slate-400 mt-1">Connecting telemetry data streams...</p>
              </div>
            </div>
          )}

          {step === 'success' && (
            <div className="py-10 flex flex-col items-center justify-center text-center gap-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center animate-bounce">
                <CheckCircle2 className="w-7 h-7 text-emerald-400" />
              </div>
              <div>
                <h4 className="font-bold text-slate-100 text-lg font-mono">Demo Booking Created</h4>
                <p className="text-xs text-slate-400 mt-2">
                  This was a simulated interactive preview. No real dispatcher was booked.
                </p>
                <div className="mt-4 inline-block px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 font-mono text-xs text-slate-300">
                  Ref: <span className="text-cyan-400 font-bold">NLX-DEMO-0001</span>
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
                href={APP_URLS.nuelogixs}
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold transition-colors flex items-center justify-center gap-2"
              >
                Launch Nuelogixs
              </a>
            ) : step === 'form' ? (
              <button
                onClick={handleContinue}
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2"
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
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-mono text-xs font-bold transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
                >
                  Confirm Demo Booking
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

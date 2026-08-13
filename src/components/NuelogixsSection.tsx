import React from 'react';
import { InteractiveMap } from './InteractiveMap';
import { Truck, ShieldCheck, MapPin, Sparkles, Clock, ArrowRight, ArrowUpRight } from 'lucide-react';
import { APP_URLS } from '../config/appUrls';

interface NuelogixsSectionProps {
  onOpenAction: (title: string, subtitle: string) => void;
  onOpenDemoBooking: () => void;
}

export const NuelogixsSection: React.FC<NuelogixsSectionProps> = ({ onOpenAction, onOpenDemoBooking }) => {
  return (
    <section id="logistics" className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-xs text-cyan-400 font-mono mb-3">
              <Truck className="w-3.5 h-3.5 text-cyan-400" /> NUELOGIXS LOGISTICS & DISPATCH
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              Your Logistics Network.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Connected.
              </span>
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl mt-2 leading-relaxed">
              Real-time dispatch telemetry, warehouse sorting, and multi-hub operational control from one intuitive interface.
            </p>
          </div>
          <button
            onClick={onOpenDemoBooking}
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all shadow-lg shadow-blue-500/20 flex items-center gap-2 cursor-pointer"
          >
            Demo Dispatch Booking <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Interactive Map Component */}
        <InteractiveMap
          onBookDispatcher={() => onOpenDemoBooking()}
        />

        {/* 3 Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="glass-panel p-5 rounded-xl border border-slate-800 flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-950 border border-cyan-800/60 text-cyan-400">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-100 text-sm font-mono">Geofenced Dispatching</h4>
              <p className="text-xs text-slate-400 mt-1">
                Sub-meter accuracy matching nearby dispatchers with optimal cargo capacity.
              </p>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-xl border border-slate-800 flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-blue-950 border border-blue-800/60 text-blue-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-100 text-sm font-mono">Manifest Audit Trail</h4>
              <p className="text-xs text-slate-400 mt-1">
                Encrypted QR sign-off at warehouse pickup and customer destination handoff.
              </p>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-xl border border-slate-800 flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-950 border border-emerald-800/60 text-emerald-400">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-100 text-sm font-mono">Predictive ETAs</h4>
              <p className="text-xs text-slate-400 mt-1">
                AI recalculates delivery arrival times dynamically based on live traffic corridors.
              </p>
            </div>
          </div>
        </div>

        {/* Nuelogixs Gateway CTA */}
        <div className="mt-8 rounded-3xl bg-slate-900/60 border border-slate-800 p-8 sm:p-10 flex flex-col items-center text-center gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="space-y-2 relative z-10">
            <h3 className="text-2xl font-bold text-slate-100 font-mono tracking-tight">Ready to manage logistics differently?</h3>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">Access the real Nuelogixs Enterprises production platform.</p>
          </div>
          
          <a
            href={APP_URLS.nuelogixs}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 font-bold text-sm transition-all shadow-xl shadow-cyan-500/20 flex items-center gap-2 cursor-pointer relative z-10 hover:opacity-90"
          >
            Open Nuelogixs <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

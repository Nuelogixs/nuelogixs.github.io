import React, { useState } from 'react';
import { DEMO_UTILITY_SERVICES } from '../demoData/payments';
import { UtilityService } from '../types';
import { Zap, PhoneCall, Wifi, Tv, Users, Building2, ArrowRight, CheckCircle2, Shield } from 'lucide-react';

interface PaymentExplorerProps {
  onOpenAction: (title: string, subtitle: string) => void;
}

export const PaymentExplorer: React.FC<PaymentExplorerProps> = ({ onOpenAction }) => {
  const [selectedService, setSelectedService] = useState<UtilityService | null>(
    DEMO_UTILITY_SERVICES[0]
  );

  const getServiceIcon = (category: UtilityService['category']) => {
    switch (category) {
      case 'electricity':
        return <Zap className="w-5 h-5 text-emerald-400" />;
      case 'airtime':
        return <PhoneCall className="w-5 h-5 text-cyan-400" />;
      case 'data':
        return <Wifi className="w-5 h-5 text-blue-400" />;
      case 'cable':
        return <Tv className="w-5 h-5 text-purple-400" />;
      case 'disbursement':
        return <Users className="w-5 h-5 text-emerald-400" />;
      case 'business':
        return <Building2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Grid of Interactive Service Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {DEMO_UTILITY_SERVICES.map((service) => {
          const isSelected = selectedService?.id === service.id;
          return (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className={`glass-panel p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between gap-3 text-left glass-card-esik ${
                isSelected
                  ? 'bg-emerald-950/80 border-emerald-500/60 shadow-xl shadow-emerald-500/10'
                  : 'hover:bg-slate-900/80 border-slate-800'
              }`}
            >
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 w-fit">
                {getServiceIcon(service.category)}
              </div>

              <div>
                <h4 className="font-bold text-slate-100 text-xs tracking-tight font-mono">
                  {service.name}
                </h4>
                <p className="text-[10px] text-slate-400 mt-1 font-mono">{service.placeholderAmount}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Expanded Detailed Preview Panel for Selected Utility Service */}
      {selectedService && (
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-emerald-500/30 bg-[#0d1c2c] animate-fadeIn flex flex-col lg:flex-row items-stretch justify-between gap-8">
          <div className="flex-1 flex flex-col justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 text-xs font-mono font-bold">
                  {selectedService.code} UTILITY ENGINE
                </span>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" /> Monnify Production Ready
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-100 font-mono">
                {selectedService.name}
              </h3>
              <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                {selectedService.description}
              </p>
            </div>

            {/* Provider Pill Badges */}
            <div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                Available Providers & Biller Networks:
              </span>
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                {selectedService.availableProviders.map((p, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive UI Action Drawer */}
          <div className="w-full lg:w-96 bg-slate-950 rounded-2xl border border-slate-800 p-5 flex flex-col justify-between gap-4">
            <div className="pb-3 border-b border-slate-800 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">DEMO PAYMENT PREVIEW</span>
              <span className="text-emerald-400 font-bold">{selectedService.placeholderAmount}</span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <span className="text-slate-400">UTILITY CODE</span>
                <span className="text-slate-200">{selectedService.code}-2026</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <span className="text-slate-400">SETTLEMENT SPEED</span>
                <span className="text-emerald-400 font-bold">Instant Token</span>
              </div>
            </div>

            <button
              onClick={() =>
                onOpenAction(
                  `Simulate ${selectedService.name} Payment`,
                  `Esik Pay Utility Payment Demo (${selectedService.placeholderAmount})`
                )
              }
              className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 text-slate-950 font-bold text-xs hover:opacity-95 transition-opacity flex items-center justify-center gap-1.5 cursor-pointer shadow-lg shadow-emerald-500/20"
            >
              Simulate {selectedService.name} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

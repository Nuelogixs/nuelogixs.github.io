import React, { useState } from 'react';
import { DEMO_AUDIENCES } from '../demoData/audiences';
import { User, Bike, Building2, Warehouse, Truck, Globe, CheckCircle2, ArrowRight } from 'lucide-react';

interface AudienceSectionProps {
  onOpenAction: (title: string, subtitle: string) => void;
}

export const AudienceSection: React.FC<AudienceSectionProps> = ({ onOpenAction }) => {
  const [selectedAudienceId, setSelectedAudienceId] = useState<string>(DEMO_AUDIENCES[2].id);

  const getAudienceIcon = (iconName: string) => {
    switch (iconName) {
      case 'User':
        return <User className="w-5 h-5 text-cyan-400" />;
      case 'Bike':
        return <Bike className="w-5 h-5 text-emerald-400" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-blue-400" />;
      case 'Warehouse':
        return <Warehouse className="w-5 h-5 text-cyan-400" />;
      case 'Truck':
        return <Truck className="w-5 h-5 text-purple-400" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-emerald-400" />;
      default:
        return <User className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-center text-center">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase font-semibold">
            TAILORED WORKFLOW SOLUTIONS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight mt-1">
            Who We Serve
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-2">
            Explore what Nuelogixs + ESIK Pay can help you accomplish across individual, fleet, and corporate tiers.
          </p>
        </div>

        {/* Audience Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {DEMO_AUDIENCES.map((aud) => {
            const isSelected = selectedAudienceId === aud.id;
            return (
              <div
                key={aud.id}
                onClick={() => setSelectedAudienceId(aud.id)}
                className={`glass-panel p-6 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between gap-6 ${
                  isSelected
                    ? 'bg-[#0f1d30] border-cyan-500/50 shadow-2xl scale-[1.01]'
                    : 'hover:bg-slate-900/80 border-slate-800'
                }`}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                      {getAudienceIcon(aud.iconName)}
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-slate-900 text-slate-300 border border-slate-800">
                      {aud.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-100 text-lg font-mono">{aud.title}</h3>
                    <p className="text-xs text-slate-400 mt-1">{aud.subtitle}</p>
                  </div>

                  {/* Capabilities List */}
                  <ul className="space-y-2 pt-2 border-t border-slate-800/80 text-xs text-slate-300">
                    {aud.capabilities.map((cap, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenAction(`Explore ${aud.title} Solutions`, `Nuelogixs × Esik Pay for ${aud.title}`);
                  }}
                  className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  {aud.ctaLabel} <ArrowRight className="w-4 h-4 text-cyan-400" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

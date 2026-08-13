import React, { useState } from 'react';
import { Truck, PackageCheck, Zap, Building2, ArrowRight } from 'lucide-react';

interface MissionSelectorProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenAction: (title: string, subtitle: string) => void;
}

export const MissionSelector: React.FC<MissionSelectorProps> = ({
  onNavigateSection,
  onOpenAction,
}) => {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const missions = [
    {
      id: 'send',
      icon: <Truck className="w-6 h-6 text-cyan-400" />,
      title: 'SEND SOMETHING',
      subtitle: 'Find and book a nearby dispatcher.',
      cta: 'Explore Logistics',
      accent: 'border-cyan-500/40 hover:border-cyan-400 shadow-cyan-500/10',
      tagColor: 'bg-cyan-950/80 text-cyan-400 border-cyan-800/60',
      action: () => onNavigateSection('logistics'),
    },
    {
      id: 'deliveries',
      icon: <PackageCheck className="w-6 h-6 text-blue-400" />,
      title: 'MANAGE DELIVERIES',
      subtitle: 'Coordinate shipments, dispatch and operations.',
      cta: 'Explore Nuelogixs',
      accent: 'border-blue-500/40 hover:border-blue-400 shadow-blue-500/10',
      tagColor: 'bg-blue-950/80 text-blue-400 border-blue-800/60',
      action: () => onNavigateSection('logistics'),
    },
    {
      id: 'bill',
      icon: <Zap className="w-6 h-6 text-emerald-400" />,
      title: 'PAY A BILL',
      subtitle: 'Electricity, airtime, data, cable TV and more.',
      cta: 'Explore ESIK Pay',
      accent: 'border-emerald-500/40 hover:border-emerald-400 shadow-emerald-500/10',
      tagColor: 'bg-emerald-950/80 text-emerald-400 border-emerald-800/60',
      action: () => onNavigateSection('payments'),
    },
    {
      id: 'business',
      icon: <Building2 className="w-6 h-6 text-purple-400" />,
      title: 'MANAGE BUSINESS PAYMENTS',
      subtitle: 'Pay workers, manage disbursements and business transactions.',
      cta: 'Explore Business Payments',
      accent: 'border-purple-500/40 hover:border-purple-400 shadow-purple-500/10',
      tagColor: 'bg-purple-950/80 text-purple-400 border-purple-800/60',
      action: () => onNavigateSection('business'),
    },
  ];

  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 border-y border-slate-800/60 bg-[#081220]/80">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col items-center text-center">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase font-semibold">
            INTERACTIVE MISSION SELECTOR
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight mt-1">
            WHAT DO YOU NEED TO DO TODAY?
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-2">
            Select an operational workflow to explore the unified platform capabilities.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {missions.map((card) => {
            const isActive = activeCardId === card.id;
            return (
              <div
                key={card.id}
                onMouseEnter={() => setActiveCardId(card.id)}
                onMouseLeave={() => setActiveCardId(null)}
                onClick={card.action}
                className={`glass-panel p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between gap-6 ${card.accent} ${
                  isActive ? 'bg-[#152338] scale-[1.02] shadow-2xl' : ''
                }`}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 shadow-inner">
                      {card.icon}
                    </div>
                    <span
                      className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${card.tagColor}`}
                    >
                      STEP 01
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-100 text-base tracking-wide font-mono">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed font-normal">
                      {card.subtitle}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-200 group">
                  <span>{card.cta}</span>
                  <div className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:bg-slate-800 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

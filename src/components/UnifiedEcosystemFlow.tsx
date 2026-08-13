import React, { useState } from 'react';
import { DEMO_ECOSYSTEM_STEPS } from '../demoData/audiences';
import { EcosystemStep } from '../types';
import { Layers, ArrowRight, CheckCircle2, User, FileText, Brain, Warehouse, Navigation, Key, Wallet, BarChart3 } from 'lucide-react';

interface UnifiedEcosystemFlowProps {
  onOpenAction: (title: string, subtitle: string) => void;
}

export const UnifiedEcosystemFlow: React.FC<UnifiedEcosystemFlowProps> = ({ onOpenAction }) => {
  const [activeStepId, setActiveStepId] = useState<string>(DEMO_ECOSYSTEM_STEPS[2].id);

  const activeStep =
    DEMO_ECOSYSTEM_STEPS.find((s) => s.id === activeStepId) || DEMO_ECOSYSTEM_STEPS[2];

  const getStepIcon = (entity: EcosystemStep['entity']) => {
    switch (entity) {
      case 'CUSTOMER':
        return <User className="w-4 h-4 text-slate-300" />;
      case 'ORDER':
        return <FileText className="w-4 h-4 text-cyan-400" />;
      case 'NUELOGIXS':
        return <Brain className="w-4 h-4 text-blue-400" />;
      case 'WAREHOUSE':
        return <Warehouse className="w-4 h-4 text-blue-400" />;
      case 'DISPATCH':
        return <Navigation className="w-4 h-4 text-cyan-400" />;
      case 'DELIVERY':
        return <CheckCircle2 className="w-4 h-4 text-emerald-400" />;
      case 'PAYMENT':
        return <Key className="w-4 h-4 text-emerald-400" />;
      case 'ESIK PAY':
        return <Wallet className="w-4 h-4 text-emerald-400" />;
      case 'BUSINESS':
        return <BarChart3 className="w-4 h-4 text-purple-400" />;
    }
  };

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-xs text-cyan-400 font-mono mb-3">
            <Layers className="w-3.5 h-3.5 text-cyan-400" /> UNIFIED ARCHITECTURE PIPELINE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            One Ecosystem.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
              Multiple Operations.
            </span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-2">
            Hover or click any node in the chain to inspect how physical logistics handoffs trigger instant Esik Pay financial settlements.
          </p>
        </div>

        {/* Horizontal Node Flow Chain */}
        <div className="grid grid-cols-3 md:grid-cols-9 gap-2 p-3 rounded-2xl bg-slate-950/90 border border-slate-800/80 font-mono text-xs">
          {DEMO_ECOSYSTEM_STEPS.map((step, idx) => {
            const isActive = activeStepId === step.id;
            return (
              <div
                key={step.id}
                onMouseEnter={() => setActiveStepId(step.id)}
                onClick={() => setActiveStepId(step.id)}
                className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition-all cursor-pointer text-center ${
                  isActive
                    ? 'bg-slate-900 border-cyan-400 text-white shadow-xl scale-105'
                    : 'bg-slate-950/60 border-slate-800/80 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                  {getStepIcon(step.entity)}
                </div>
                <span className="font-extrabold text-[10px] tracking-tight">{step.entity}</span>
              </div>
            );
          })}
        </div>

        {/* Node Role Inspector Card */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30 bg-[#0c1828] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-cyan-400">
              {getStepIcon(activeStep.entity)}
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold block">
                STEP NODE: {activeStep.entity}
              </span>
              <h3 className="text-xl font-bold text-slate-100 mt-1 font-mono">{activeStep.title}</h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">{activeStep.role}</p>
            </div>
          </div>

          <button
            onClick={() =>
              onOpenAction(
                `Inspect Node ${activeStep.entity}`,
                `Ecosystem Pipeline Integration Stage: ${activeStep.title}`
              )
            }
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-xs flex items-center gap-2 transition-colors whitespace-nowrap cursor-pointer"
          >
            Explore Node Logic <ArrowRight className="w-4 h-4 text-cyan-400" />
          </button>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Route, ArrowRight, CreditCard, DollarSign, Building } from 'lucide-react';

export const EcosystemTransition: React.FC = () => {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-800/80 bg-gradient-to-b from-[#07111f] via-[#0b1728] to-[#07111f] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8">
        {/* Metaphor Flow Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 font-mono text-xs">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-300">
            <Route className="w-3.5 h-3.5" /> ROUTE
          </div>
          <span className="text-slate-600 font-bold">→</span>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300">
            <CreditCard className="w-3.5 h-3.5" /> TRANSACTION
          </div>
          <span className="text-slate-600 font-bold">→</span>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-emerald-300">
            <DollarSign className="w-3.5 h-3.5" /> PAYMENT
          </div>
          <span className="text-slate-600 font-bold">→</span>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-800/60 text-purple-300">
            <Building className="w-3.5 h-3.5" /> BUSINESS
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight max-w-3xl leading-tight">
          When your business moves,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400">
            money moves too.
          </span>
        </h2>

        <p className="text-slate-400 text-sm max-w-xl">
          Nuelogixs handles physical dispatch and logistics, while Esik Pay powers the financial engine behind every package, driver stipend, and utility bill.
        </p>

        {/* Animated Line Connector */}
        <div className="w-full max-w-md h-1 bg-slate-800 rounded-full overflow-hidden relative mt-2">
          <div className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-500 rounded-full animate-flow"></div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { DEMO_LOGISTICS_METRICS, DEMO_FINANCIAL_METRICS, DEMO_INTELLIGENCE_METRICS } from '../demoData/analytics';
import { Truck, DollarSign, Brain, BarChart3, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';

interface BusinessCommandCenterProps {
  onOpenAction: (title: string, subtitle: string) => void;
}

const mockChartData = [
  { name: 'Mon', volume: 4000, value: 2400 },
  { name: 'Tue', volume: 3000, value: 1398 },
  { name: 'Wed', volume: 2000, value: 9800 },
  { name: 'Thu', volume: 2780, value: 3908 },
  { name: 'Fri', volume: 1890, value: 4800 },
  { name: 'Sat', volume: 2390, value: 3800 },
  { name: 'Sun', volume: 3490, value: 4300 },
];

export const BusinessCommandCenter: React.FC<BusinessCommandCenterProps> = ({ onOpenAction }) => {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono mb-3">
            <BarChart3 className="w-3.5 h-3.5 text-cyan-400" /> COMPOSITE CONTROL DASHBOARD
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            Visualized Interactive Framework
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mt-2">
            Experience the core product proposition: Nuelogixs (Logistics) and Esik Pay (Fintech) operating in perfect unison, monitored by advanced AI intelligence.
          </p>
        </div>

        {/* Visualized Chart Section */}
        <div className="w-full h-80 bg-slate-900/50 rounded-2xl border border-slate-800 p-4 sm:p-6 mb-4">
          <div className="flex items-center justify-between mb-4">
             <h3 className="font-mono text-sm text-slate-300 font-bold">ECOSYSTEM VELOCITY (7-DAY TREND)</h3>
             <div className="flex gap-4 font-mono text-[10px]">
               <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-cyan-400"></div> Logistics Volume</div>
               <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-emerald-400"></div> Payment Value</div>
             </div>
          </div>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={mockChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#22d3ee" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#34d399" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#34d399" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis dataKey="name" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
              <YAxis stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px', fontSize: '12px' }}
                itemStyle={{ color: '#e2e8f0' }}
              />
              <Area type="monotone" dataKey="volume" stroke="#22d3ee" strokeWidth={2} fillOpacity={1} fill="url(#colorVolume)" />
              <Area type="monotone" dataKey="value" stroke="#34d399" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* 3 Pillar Grid: LOGISTICS, FINANCIAL, INTELLIGENCE */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Pillar 1: LOGISTICS */}
          <div className="glass-panel p-6 rounded-2xl border border-blue-500/30 flex flex-col justify-between gap-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-cyan-400" />
                <h3 className="font-bold text-slate-100 text-sm font-mono">LOGISTICS PILLAR</h3>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950 text-blue-400 border border-blue-800">
                NUELOGIXS
              </span>
            </div>

            <div className="space-y-3 font-mono">
              {DEMO_LOGISTICS_METRICS.map((m, idx) => (
                <div key={idx} className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800/80 flex items-center justify-between">
                  <div>
                    <span className="text-slate-400 text-xs block">{m.title}</span>
                    <span className="text-[10px] text-slate-500">{m.subtext}</span>
                  </div>
                  <span className="text-cyan-400 font-extrabold text-lg">{m.value}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => onOpenAction('Logistics Control Center', 'Nuelogixs Fleet Analytics Dashboard')}
              className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 font-mono text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              Open Fleet Analytics <ArrowUpRight className="w-4 h-4 text-cyan-400" />
            </button>
          </div>

          {/* Pillar 2: FINANCIAL */}
          <div className="glass-panel p-6 rounded-2xl border border-emerald-500/30 flex flex-col justify-between gap-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-emerald-400" />
                <h3 className="font-bold text-slate-100 text-sm font-mono">FINANCIAL PILLAR</h3>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                ESIK PAY
              </span>
            </div>

            <div className="space-y-3 font-mono">
              {DEMO_FINANCIAL_METRICS.map((m, idx) => (
                <div key={idx} className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800/80 flex items-center justify-between">
                  <div>
                    <span className="text-slate-400 text-xs block">{m.title}</span>
                    <span className="text-[10px] text-slate-500">{m.subtext}</span>
                  </div>
                  <span className="text-emerald-400 font-extrabold text-lg">{m.value}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => onOpenAction('Financial Control Center', 'Esik Pay Treasury & Ledger Dashboard')}
              className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 font-mono text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              Open Treasury Ledger <ArrowUpRight className="w-4 h-4 text-emerald-400" />
            </button>
          </div>

          {/* Pillar 3: INTELLIGENCE */}
          <div className="glass-panel p-6 rounded-2xl border border-purple-500/30 flex flex-col justify-between gap-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Brain className="w-4 h-4 text-purple-400" />
                <h3 className="font-bold text-slate-100 text-sm font-mono">INTELLIGENCE PILLAR</h3>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-400 border border-purple-800">
                AI BRAIN
              </span>
            </div>

            <div className="space-y-3 font-mono">
              {DEMO_INTELLIGENCE_METRICS.map((m, idx) => (
                <div key={idx} className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800/80 flex items-center justify-between">
                  <div>
                    <span className="text-slate-400 text-xs block">{m.title}</span>
                    <span className="text-[10px] text-slate-500">{m.subtext}</span>
                  </div>
                  <span className="text-purple-400 font-extrabold text-lg">{m.value}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => onOpenAction('Intelligence Control Center', 'AI Predictive Health Monitor')}
              className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 font-mono text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              Open Health Console <ArrowUpRight className="w-4 h-4 text-purple-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { DEMO_LOGISTICS_STAGES } from '../demoData/logistics';
import { LogisticsWorkflowStage } from '../types';
import { CheckCircle2, ChevronRight, Activity, ArrowUpRight, Clock, ShieldCheck } from 'lucide-react';

interface WorkflowTimelineProps {
  onOpenAction: (title: string, subtitle: string) => void;
}

export const WorkflowTimeline: React.FC<WorkflowTimelineProps> = ({ onOpenAction }) => {
  const [activeStageId, setActiveStageId] = useState<string>('pickup');

  const selectedStage =
    DEMO_LOGISTICS_STAGES.find((s) => s.id === activeStageId) || DEMO_LOGISTICS_STAGES[2];

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-center text-center">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase font-semibold">
            ANIMATED WORKFLOW ENGINE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight mt-1">
            End-to-End Operational Lifecycle
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-2">
            Click any phase to inspect the live status, telemetry metrics, and automated settlement triggers.
          </p>
        </div>

        {/* 5 Stages Horizontal Stepper Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 bg-slate-950/80 p-2 rounded-2xl border border-slate-800/80">
          {DEMO_LOGISTICS_STAGES.map((stage) => {
            const isActive = activeStageId === stage.id;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageId(stage.id)}
                className={`flex flex-col items-center p-3 sm:p-4 rounded-xl border transition-all text-center group cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-b from-slate-900 to-[#122033] border-cyan-500/50 text-cyan-300 shadow-xl shadow-cyan-500/10'
                    : 'bg-slate-900/40 border-slate-800/60 text-slate-400 hover:text-slate-200 hover:bg-slate-900/80'
                }`}
              >
                <div className="flex items-center gap-1.5 mb-1.5 font-mono text-[10px]">
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center font-bold ${
                      isActive ? 'bg-cyan-400 text-slate-950' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    0{stage.step}
                  </span>
                  <span className="font-bold tracking-wider">{stage.title}</span>
                </div>
                <span className="text-[11px] font-mono text-slate-400 truncate max-w-full">
                  {stage.subtitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Deep Preview Box */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 flex flex-col lg:flex-row items-stretch justify-between gap-8">
          <div className="flex-1 flex flex-col justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-400 text-xs font-mono font-bold">
                  STAGE 0{selectedStage.step} OF 05
                </span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Automated Telemetry Active
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-100 font-mono">
                {selectedStage.title}: {selectedStage.subtitle}
              </h3>
              <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                {selectedStage.description}
              </p>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800/80">
              {selectedStage.metrics.map((m, idx) => (
                <div key={idx} className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 font-mono">
                  <span className="text-slate-500 block text-[10px] uppercase">{m.label}</span>
                  <span className="text-cyan-400 text-base font-extrabold">{m.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive UI Mockup Card for Stage */}
          <div className="w-full lg:w-96 bg-slate-950 rounded-2xl border border-slate-800 p-5 flex flex-col justify-between gap-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono">
              <span className="text-slate-400">UI PREVIEW STAGE</span>
              <span className="text-cyan-400 font-bold">{selectedStage.uiPreviewLabel}</span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800/80 flex items-center justify-between">
                <span className="text-slate-400">STATUS</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <Clock className="w-3 h-3" /> [Processing]
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800/80 flex items-center justify-between">
                <span className="text-slate-400">MANIFEST ID</span>
                <span className="text-slate-200">#NLGX-9081</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800/80 flex items-center justify-between">
                <span className="text-slate-400">SETTLEMENT LINK</span>
                <span className="text-emerald-400 font-bold">Esik Pay Settlement</span>
              </div>
            </div>

            <button
              onClick={() =>
                onOpenAction(
                  `Inspect ${selectedStage.title} Stage`,
                  `Workflow Telemetry Preview for Stage 0${selectedStage.step}`
                )
              }
              className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              Simulate Stage Trigger <ArrowUpRight className="w-4 h-4 text-cyan-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

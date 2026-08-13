import React, { useState } from 'react';
import { DEMO_AI_INSIGHTS } from '../demoData/aiInsights';
import { Brain, Sparkles, AlertTriangle, ArrowRight, Bot, CheckCircle, RefreshCw } from 'lucide-react';

interface AILogisticsSectionProps {
  onOpenAIDemo: (actionTitle: string) => void;
}

export const AILogisticsSection: React.FC<AILogisticsSectionProps> = ({ onOpenAIDemo }) => {
  const [selectedInsightIndex, setSelectedInsightIndex] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);

  const activeInsight = DEMO_AI_INSIGHTS[selectedInsightIndex];

  const handleSimulateNewQuery = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setSelectedInsightIndex((prev) => (prev + 1) % DEMO_AI_INSIGHTS.length);
      setIsSimulating(false);
    }, 600);
  };

  return (
    <section id="ai-intelligence" className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-800/60 text-xs text-purple-300 font-mono mb-3">
            <Brain className="w-3.5 h-3.5 text-purple-400" /> AI PREDICTIVE INTELLIGENCE ENGINE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            Your logistics network should think ahead.
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-2">
            Simulated AI assistant evaluating live corridor delays, fuel optimization, and automated utility reloads.
          </p>
        </div>

        {/* Simulated AI Interface Card */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-purple-500/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* AI Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-950 border border-purple-700/60 flex items-center justify-center">
                <Bot className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h3 className="font-bold text-slate-100 text-base font-mono">
                  AI LOGISTICS ASSISTANT
                </h3>
                <span className="text-xs text-slate-400">
                  Predictive Analysis Simulator (Product Preview)
                </span>
              </div>
            </div>

            <button
              onClick={handleSimulateNewQuery}
              disabled={isSimulating}
              className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 text-xs text-purple-300 font-mono flex items-center gap-2 transition-all cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`} />
              Cycle Query Simulation
            </button>
          </div>

          {/* Simulated Chat Dialogue */}
          <div className="py-6 space-y-4">
            {/* User Prompt Box */}
            <div className="flex items-start gap-3 bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80 max-w-2xl">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                PROMPT
              </span>
              <p className="text-sm font-semibold text-slate-200">
                "{activeInsight.question}"
              </p>
            </div>

            {/* AI Response Box */}
            <div className="flex items-start gap-3 bg-purple-950/40 p-5 rounded-2xl border border-purple-800/60 max-w-3xl">
              <div className="p-2 rounded-lg bg-purple-900/80 border border-purple-700">
                <Sparkles className="w-4 h-4 text-purple-300" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-purple-300">
                    AI RESPONSE PREVIEW
                  </span>
                  <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-purple-900/60 text-purple-300 border border-purple-700">
                    IMPACT: {activeInsight.impactScore}
                  </span>
                </div>
                <p className="text-sm text-slate-200 leading-relaxed font-normal">
                  "{activeInsight.response}"
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <div className="text-xs font-mono text-cyan-300 bg-cyan-950/80 px-3 py-1.5 rounded-xl border border-cyan-800/60 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-cyan-400" />
                    Recommended Action: "{activeInsight.recommendedAction}"
                  </div>

                  <button
                    onClick={() =>
                      onOpenAIDemo(activeInsight.recommendedAction)
                    }
                    className="px-4 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition-colors shadow-lg shadow-purple-500/20 flex items-center gap-1"
                  >
                    [Review Recommendation] <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

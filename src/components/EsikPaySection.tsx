import React from 'react';
import { PaymentExplorer } from './PaymentExplorer';
import { DEMO_TRANSACTIONS } from '../demoData/payments';
import { CreditCard, Zap, CheckCircle2, Clock, RefreshCw, ArrowUpRight, Lock, ShieldCheck } from 'lucide-react';
import { APP_URLS } from '../config/appUrls';

interface EsikPaySectionProps {
  onOpenAction: (title: string, subtitle: string) => void;
  onOpenDemoPayment: () => void;
}

export const EsikPaySection: React.FC<EsikPaySectionProps> = ({ onOpenAction, onOpenDemoPayment }) => {
  return (
    <section id="payments" className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-xs text-emerald-400 font-mono mb-3">
              <CreditCard className="w-3.5 h-3.5 text-emerald-400" /> ESIK PAY FINANCIAL ENGINE
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
              Intelligent Payments for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Everyday Life and Business.
              </span>
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl mt-2 leading-relaxed">
              Pay utilities, manage business payments and simplify workforce disbursement from one intelligent platform.
            </p>
          </div>
          <button
            onClick={onOpenDemoPayment}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2 cursor-pointer"
          >
            Demo Payment Gateway <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Service Explorer Cards */}
        <PaymentExplorer onOpenAction={() => onOpenDemoPayment()} />

        {/* Placeholder Transaction Feed Cards */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <h3 className="text-lg font-bold text-slate-100 font-mono">
                PLACEHOLDER TRANSACTION FEED
              </h3>
              <p className="text-xs text-slate-400">
                Simulated real-time settlement log across utility billers & workforce payouts
              </p>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800/60">
              ● Live Settlement Stream (Demo Data)
            </span>
          </div>

          {/* Transaction Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {DEMO_TRANSACTIONS.map((tx) => (
              <div
                key={tx.id}
                onClick={() =>
                  onOpenAction(
                    `Inspect Transaction ${tx.reference}`,
                    `Category: ${tx.category} | Recipient: ${tx.recipient} | Provider: ${tx.provider}`
                  )
                }
                className="bg-slate-950/80 p-4 rounded-xl border border-slate-800/80 hover:border-slate-700 transition-all cursor-pointer flex flex-col justify-between gap-3 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-400">{tx.reference}</span>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                      tx.status === 'Successful'
                        ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/60'
                        : tx.status === 'Pending'
                        ? 'bg-amber-950 text-amber-400 border border-amber-800/60'
                        : 'bg-blue-950 text-blue-400 border border-blue-800/60'
                    }`}
                  >
                    {tx.status}
                  </span>
                </div>

                <div>
                  <h4 className="font-bold text-slate-200 text-xs font-mono group-hover:text-cyan-400 transition-colors">
                    {tx.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">{tx.recipient}</p>
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between font-mono text-xs">
                  <span className="text-slate-500">{tx.provider}</span>
                  <span className="font-extrabold text-slate-100">{tx.amount}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ESIK Pay Gateway CTA */}
        <div className="mt-8 rounded-3xl bg-slate-900/60 border border-slate-800 p-8 sm:p-10 flex flex-col items-center text-center gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="space-y-2 relative z-10">
            <h3 className="text-2xl font-bold text-slate-100 font-mono tracking-tight">Ready for smarter payments?</h3>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">Access the real ESIK Pay production platform.</p>
          </div>
          
          <a
            href={APP_URLS.esikPay}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-bold text-sm transition-all shadow-xl shadow-emerald-500/20 flex items-center gap-2 cursor-pointer relative z-10 hover:opacity-90"
          >
            Open ESIK Pay <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

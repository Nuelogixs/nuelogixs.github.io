import React from 'react';
import { Truck, CreditCard, Building2, ArrowRight, Layers } from 'lucide-react';
import { APP_URLS } from '../config/appUrls';

interface CTASectionProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenAction: (title: string, subtitle: string) => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onNavigateSection, onOpenAction }) => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-8">
      <div className="relative rounded-3xl bg-gradient-to-br from-[#0c1a2e] via-[#081222] to-[#0d1f35] border border-cyan-500/30 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl flex flex-col items-center text-center gap-8">
        {/* Background glow effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center shadow-xl">
          <Layers className="w-6 h-6 text-cyan-400" />
        </div>

        <div className="space-y-3 max-w-2xl">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            Ready to Move Forward?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Explore the ecosystem built to connect logistics, payments and business operations.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={APP_URLS.nuelogixs}
            className="px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:opacity-95 transition-all shadow-xl shadow-cyan-500/20 flex items-center gap-2 cursor-pointer"
          >
            <Truck className="w-4 h-4" /> Launch Nuelogixs <ArrowRight className="w-4 h-4" />
          </a>
          
          <a
            href={APP_URLS.esikPay}
            className="px-6 py-3.5 rounded-xl font-semibold text-sm text-emerald-300 bg-emerald-950 hover:bg-emerald-900 border border-emerald-500/40 transition-all shadow-xl shadow-emerald-500/20 flex items-center gap-2 cursor-pointer"
          >
            <CreditCard className="w-4 h-4" /> Launch ESIK Pay <ArrowRight className="w-4 h-4" />
          </a>
          
          <button
            onClick={() =>
              onOpenAction(
                'Enterprise Business Portal',
                'Schedule Nuelogixs × Esik Pay Corporate Onboarding'
              )
            }
            className="px-5 py-3.5 rounded-xl font-medium text-sm text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-all flex items-center gap-2 cursor-pointer"
          >
            <Building2 className="w-4 h-4 text-slate-400" /> For Businesses
          </button>
        </div>
      </div>
    </section>
  );
};

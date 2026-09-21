import React from 'react';
import { ShoppingBag, ArrowUpRight, ShieldCheck, Sparkles, RefreshCw, ExternalLink } from 'lucide-react';

export function WholesaleStoreWidget() {
  const storeUrl = "https://ais-pre-t6od2yogczpajsgz4nweyg-285895760211.europe-west3.run.app/embed/store-widget?embed=true";

  return (
    <div className="w-full max-w-7xl mx-auto my-6 rounded-2xl overflow-hidden border border-[#27344D] bg-[#0B1220] shadow-2xl flex flex-col">
      {/* Top Helper Bar */}
      <div className="bg-[#09101d] px-4 py-3 border-b border-[#27344D] flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-slate-300 font-mono">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>Nuelogixs Wholesale Direct Catalog</span>
        </div>
        <a
          href={storeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 font-semibold transition-all"
        >
          <span>Launch Store in New Tab</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Frame Container */}
      <div className="relative w-full min-h-[750px] bg-[#0B1220]">
        {/* Nuelogixs Wholesale Direct Store Widget */}
        <iframe
          src="https://ais-pre-t6od2yogczpajsgz4nweyg-285895760211.europe-west3.run.app/embed/store-widget?embed=true"
          width="100%"
          height="750"
          style={{
            border: '1px solid #27344D',
            borderRadius: '16px',
            width: '100%',
            maxWidth: '100%',
            minHeight: '750px',
            backgroundColor: '#0B1220',
            overflow: 'hidden',
          }}
          title="Nuelogixs Wholesale Direct Products"
          frameBorder="0"
          allow="clipboard-write"
          loading="lazy"
        />
        {/* When users click any product, it opens in the main store */}
      </div>
    </div>
  );
}

interface WholesaleStoreSectionProps {
  onOpenAction?: (title: string, subtitle: string) => void;
}

export const WholesaleStoreSection: React.FC<WholesaleStoreSectionProps> = ({ onOpenAction }) => {
  const storeUrl = "https://ais-pre-t6od2yogczpajsgz4nweyg-285895760211.europe-west3.run.app/embed/store-widget?embed=true";

  return (
    <section id="store" className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/10 via-blue-500/10 to-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 flex flex-col gap-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-xs text-cyan-400 font-mono mb-3">
              <ShoppingBag className="w-3.5 h-3.5 text-cyan-400" /> B2B COMMERCE & WHOLESALE SOURCING
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              Nuelogixs Wholesale Store.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400">
                Live Storefront.
              </span>
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl mt-2 leading-relaxed">
              Directly browse real-time wholesale catalogs, verified bulk inventory, and commercial orders backed by automated Nuelogixs freight fulfillment.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-cyan-400 border border-cyan-500/30 font-semibold text-xs transition-all flex items-center gap-2 shadow-md hover:border-cyan-500/60"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Open Full Screen
            </a>
          </div>
        </div>

        {/* Feature Highlights Pills */}
        <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono text-slate-300">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/60 border border-slate-800">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>Verified Wholesale Suppliers</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/60 border border-slate-800">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Automated Bulk Pricing</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/60 border border-slate-800">
            <RefreshCw className="w-3.5 h-3.5 text-blue-400" />
            <span>Live Inventory Sync</span>
          </div>
        </div>

        {/* Embedded Wholesale Store Widget */}
        <WholesaleStoreWidget />
      </div>
    </section>
  );
};

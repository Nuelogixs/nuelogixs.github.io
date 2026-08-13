import React from 'react';
import { Truck, CreditCard, Building2, ArrowRight, Shield, Zap, Sparkles } from 'lucide-react';
import { EcosystemMap } from './EcosystemMap';
import { APP_URLS } from '../config/appUrls';

interface HeroProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenAction: (title: string, subtitle: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateSection, onOpenAction }) => {
  return (
    <section id="hero" className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-blue-600/10 via-cyan-500/10 to-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Main Text & CTAs Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 backdrop-blur-md mb-6 shadow-xl">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="font-mono text-slate-200">NUELOGIXS ENTERPRISES × ESIK PAY</span>
            <span className="text-slate-600">|</span>
            <span className="text-cyan-400 font-semibold flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> AI Unified Infrastructure
            </span>
          </div>

          {/* Core positioning Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-100 leading-[1.08]">
            Move Goods.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
              Power Payments.
            </span>{' '}
            Move Business Forward.
          </h1>

          {/* Supporting Text */}
          <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed font-normal">
            One intelligent ecosystem connecting logistics, dispatch, payments and business operations.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {/* Primary CTA: Explore Nuelogixs */}
            <a
              href={APP_URLS.nuelogixs}
              className="px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:opacity-95 transition-all duration-200 shadow-xl shadow-cyan-500/15 flex items-center gap-2 cursor-pointer group"
            >
              <Truck className="w-4 h-4 text-slate-950" />
              Launch Nuelogixs
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* Secondary CTA: Explore ESIK Pay */}
            <a
              href={APP_URLS.esikPay}
              className="px-6 py-3.5 rounded-xl font-semibold text-sm text-emerald-300 bg-emerald-950/80 hover:bg-emerald-900/90 border border-emerald-500/40 transition-all duration-200 shadow-xl shadow-emerald-500/10 flex items-center gap-2 cursor-pointer group"
            >
              <CreditCard className="w-4 h-4 text-emerald-400" />
              Launch ESIK Pay
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* For Businesses Action */}
            <button
              onClick={() =>
                onOpenAction(
                  'For Enterprise & Businesses',
                  'Request Nuelogixs × Esik Pay Corporate Integration Suite'
                )
              }
              className="px-5 py-3.5 rounded-xl font-medium text-sm text-slate-300 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 transition-all duration-200 flex items-center gap-2 cursor-pointer"
            >
              <Building2 className="w-4 h-4 text-slate-400" />
              For Businesses
            </button>
          </div>

          {/* Micro Trust Indicators */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-cyan-400" /> Instant Dispatch Matching
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-emerald-400" /> Automated Escrow & Utilities
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" /> Predictive AI Route Guard
            </div>
          </div>
        </div>

        {/* Embedded Interactive Ecosystem Map Canvas */}
        <div className="w-full">
          <EcosystemMap />
        </div>
      </div>
    </section>
  );
};

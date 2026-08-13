import React from 'react';
import {
  Truck,
  CreditCard,
  Globe,
  Anchor,
  Wallet,
  Radio,
  Smartphone,
  ShieldCheck,
  BarChart3,
  Clock,
  Sparkles
} from 'lucide-react';

interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

const PLATFORM_BENEFITS: BenefitItem[] = [
  {
    id: 'b-1',
    title: 'Instant Freight & Cargo Booking',
    description: 'Book trucks, vans & haulage in seconds',
    icon: Truck,
    color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30'
  },
  {
    id: 'b-2',
    title: 'Multi-Currency Business Accounts',
    description: 'Receive bank transfers & card payments instantly',
    icon: CreditCard,
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30'
  },
  {
    id: 'b-3',
    title: 'Cross-Border FX Payments',
    description: 'Secure T+0 international settlement & escrow',
    icon: Globe,
    color: 'text-purple-400 bg-purple-500/10 border-purple-500/30'
  },
  {
    id: 'b-4',
    title: 'Automated Customs & Clearance',
    description: 'Fast-track maritime port duty & shipping documentation',
    icon: Anchor,
    color: 'text-blue-400 bg-blue-500/10 border-blue-500/30'
  },
  {
    id: 'b-5',
    title: 'Driver & Workforce Payouts',
    description: 'Bulk instant disbursements to bank accounts & wallets',
    icon: Wallet,
    color: 'text-amber-400 bg-amber-500/10 border-amber-500/30'
  },
  {
    id: 'b-6',
    title: 'Live GPS & Sensor Tracking',
    description: 'Real-time cargo location & temperature updates',
    icon: Radio,
    color: 'text-teal-400 bg-teal-500/10 border-teal-500/30'
  },
  {
    id: 'b-7',
    title: 'In-Person POS Terminals',
    description: 'Accept tap, transfer & QR payments at delivery',
    icon: Smartphone,
    color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30'
  },
  {
    id: 'b-8',
    title: 'Bank-Grade Payment Security',
    description: 'PCI-DSS compliant encrypted transactions',
    icon: ShieldCheck,
    color: 'text-cyan-300 bg-cyan-950/80 border-cyan-500/40'
  },
  {
    id: 'b-9',
    title: 'Predictive Route & Cost Optimization',
    description: 'Save fuel and time with AI smart dispatch',
    icon: BarChart3,
    color: 'text-emerald-300 bg-emerald-950/80 border-emerald-500/40'
  }
];

export const DemoBanner: React.FC = () => {
  // Double the array for seamless infinite looping
  const doubleBenefits = [...PLATFORM_BENEFITS, ...PLATFORM_BENEFITS];

  return (
    <div className="bg-[#050c18] border-b border-slate-800/90 text-xs backdrop-blur-md sticky top-0 z-50 overflow-hidden select-none">
      {/* Infinite Smooth Capability Bar */}
      <div className="relative py-2.5 bg-gradient-to-r from-slate-950 via-[#091527] to-slate-950 flex items-center overflow-hidden">
        {/* Left Fixed Label */}
        <div className="shrink-0 pl-4 pr-3 py-1 flex items-center gap-2 border-r border-slate-800/80 bg-[#050c18] z-10 shadow-lg">
          <div className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
            <Sparkles className="w-3 h-3 text-cyan-400" />
          </div>
          <span className="text-[11px] font-bold tracking-wider text-slate-200 uppercase font-sans">
            How We Help You
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse hidden sm:block" />
        </div>

        {/* Marquee Container with hover-to-pause */}
        <div className="overflow-hidden flex-1 relative flex items-center">
          {/* Gradient Edge Masks for soft fade out */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#050c18] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#050c18] to-transparent z-10 pointer-events-none" />

          {/* Scrolling Ticker Track */}
          <div className="animate-groove-scroll flex items-center gap-3 pl-3">
            {doubleBenefits.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={`${item.id}-${index}`}
                  className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800/90 hover:border-cyan-500/40 hover:bg-slate-800/90 transition-all cursor-pointer group shrink-0"
                >
                  <div className={`p-1.5 rounded-lg border ${item.color}`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-slate-100 text-[11px] whitespace-nowrap group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </span>
                    <span className="text-[10px] text-slate-400 whitespace-nowrap">
                      {item.description}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

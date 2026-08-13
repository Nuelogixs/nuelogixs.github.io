import React from 'react';
import { Layers, ArrowUpRight } from 'lucide-react';
import { APP_URLS } from '../config/appUrls';
import { EnterpriseFooterBanner } from './EnterpriseFooterBanner';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenAction: (title: string, subtitle: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection, onOpenAction }) => {
  return (
    <footer id="company" className="relative bg-[#040b14] border-t border-slate-800/80 pb-12 text-slate-400 text-xs">
      {/* Large Approved Brand Visual Footer Banner */}
      <EnterpriseFooterBanner />

      {/* Traditional Footer Navigation & Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 flex flex-col gap-12">
        {/* Columns Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Col 1: NUELOGIXS ENTERPRISES */}
          <div className="flex flex-col gap-3">
            <h4 className="font-mono font-bold text-slate-100 uppercase tracking-wider text-sm">
              NUELOGIXS ENTERPRISES
            </h4>
            <ul className="space-y-2 font-mono">
              <li>
                <button
                  onClick={() => onNavigateSection('logistics')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Logistics & Dispatch
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('logistics')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Fleet Telemetry
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('logistics')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Warehouse Hubs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('logistics')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Business Logistics
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: ESIK PAY */}
          <div className="flex flex-col gap-3">
            <h4 className="font-mono font-bold text-slate-100 uppercase tracking-wider text-sm">
              ESIK PAY
            </h4>
            <ul className="space-y-2 font-mono">
              <li>
                <button
                  onClick={() => onNavigateSection('payments')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Electricity Bills
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('payments')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Airtime & Data
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('payments')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Cable TV Tokens
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('business')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Workforce Disbursement
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('payments')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Business Payments
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: PLATFORM */}
          <div className="flex flex-col gap-3">
            <h4 className="font-mono font-bold text-slate-100 uppercase tracking-wider text-sm">
              PLATFORM
            </h4>
            <ul className="space-y-2 font-mono">
              <li>
                <button
                  onClick={() => onNavigateSection('ai-intelligence')}
                  className="hover:text-purple-400 transition-colors"
                >
                  AI Intelligence
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('business')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Business Command Center
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenAction('Developer Documentation', 'REST & Webhook API Spec')}
                  className="hover:text-slate-200 transition-colors"
                >
                  Developer APIs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenAction('System Status', 'All Node Networks Operational')}
                  className="hover:text-slate-200 transition-colors"
                >
                  Node Status
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: COMPANY */}
          <div className="flex flex-col gap-3">
            <h4 className="font-mono font-bold text-slate-100 uppercase tracking-wider text-sm">
              COMPANY
            </h4>
            <ul className="space-y-2 font-mono">
              <li>
                <button
                  onClick={() => onOpenAction('About Platform', 'Nuelogixs × Esik Pay Infrastructure')}
                  className="hover:text-slate-200 transition-colors"
                >
                  About Ecosystem
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenAction('Contact Support', 'Enterprise Integration Team')}
                  className="hover:text-slate-200 transition-colors"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenAction('Careers', 'Join Platform Engineering Team')}
                  className="hover:text-slate-200 transition-colors"
                >
                  Careers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenAction('Help Center', 'Documentation & Knowledge Base')}
                  className="hover:text-slate-200 transition-colors"
                >
                  Help Center
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: LEGAL */}
          <div className="flex flex-col gap-3">
            <h4 className="font-mono font-bold text-slate-100 uppercase tracking-wider text-sm">
              LEGAL
            </h4>
            <ul className="space-y-2 font-mono">
              <li>
                <button
                  onClick={() => onOpenAction('Privacy Policy', 'Data Security Protocol')}
                  className="hover:text-slate-200 transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenAction('Terms of Service', 'Enterprise Platform Agreement')}
                  className="hover:text-slate-200 transition-colors"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenAction('Security Specs', 'Monnify & Escrow Security Audit')}
                  className="hover:text-slate-200 transition-colors"
                >
                  Security Audit
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Application Links Box */}
        <div className="p-6 rounded-2xl bg-[#081222] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-mono font-bold text-slate-100 text-sm">APPLICATION GATEWAYS</h4>
            <p className="text-slate-400 text-xs mt-1">Access the live production platforms.</p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={APP_URLS.nuelogixs}
              className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-500/50 hover:bg-cyan-950/30 text-slate-200 font-semibold text-xs transition-colors flex items-center gap-2"
            >
              Open Nuelogixs <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
            </a>
            <a
              href={APP_URLS.esikPay}
              className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-emerald-500/50 hover:bg-emerald-950/30 text-slate-200 font-semibold text-xs transition-colors flex items-center gap-2"
            >
              Open ESIK Pay <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px]">
          <div className="flex items-center gap-3">
            <span className="text-slate-300 font-bold">
              © 2026 Nuelogixs Enterprises / ESIK Pay Ecosystem. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span className="text-emerald-400">● Live Production Platform</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

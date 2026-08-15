import React from 'react';
import { ShieldCheck, Lock, FileText, Bell, Eye, KeyRound, MapPin, CreditCard } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const trustFeatures = [
    {
      icon: <FileText className="w-5 h-5 text-cyan-400" />,
      title: 'Immutable Transaction Records',
      description: 'Every dispatch handover and utility token purchase is cryptographically logged with receipt hashes.'
    },
    {
      icon: <Eye className="w-5 h-5 text-blue-400" />,
      title: 'Full Operational Visibility',
      description: 'Live sub-meter GPS telemetry for cargo coupled with real-time settlement status.'
    },
    {
      icon: <KeyRound className="w-5 h-5 text-emerald-400" />,
      title: 'Role-Based Staff Access',
      description: 'Multi-tiered permission controls for dispatch managers, accountants, and warehouse supervisors.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-purple-400" />,
      title: 'Audit-Ready Reporting',
      description: 'Exportable tax, ledger, and dispatch manifests formatted for enterprise compliance.'
    },
    {
      icon: <MapPin className="w-5 h-5 text-cyan-400" />,
      title: 'Geofenced Delivery Tracking',
      description: 'Automated corridor verification ensuring packages only mark delivered when inside target zone.'
    },
    {
      icon: <CreditCard className="w-5 h-5 text-emerald-400" />,
      title: 'Payment Settlement Locks',
      description: 'Automated release of driver stipends and vendor payouts strictly upon QR sign-off.'
    },
    {
      icon: <Lock className="w-5 h-5 text-blue-400" />,
      title: 'Encrypted API Handshakes',
      description: 'TLS 1.3 encrypted data conduits connecting Nuelogixs fleet servers with Esik Pay wallets.'
    },
    {
      icon: <Bell className="w-5 h-5 text-purple-400" />,
      title: 'Instant Multi-Channel Alerts',
      description: 'Real-time SMS, WhatsApp, and webhook notifications for delays, reloads, and batch payouts.'
    }
  ];

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-xs text-emerald-400 font-mono mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> SYSTEM RELIABILITY & AUDIT TRAIL
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            Built for Transactions That Matter.
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-2">
            Verifiable operational logs, automated settlement release, and role-based enterprise access control.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trustFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="glass-panel p-5 rounded-2xl border border-slate-800 flex flex-col justify-between gap-4 hover:border-slate-700 transition-colors"
            >
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 w-fit">
                {feat.icon}
              </div>

              <div>
                <h3 className="font-bold text-slate-100 text-sm font-mono">{feat.title}</h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-normal">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

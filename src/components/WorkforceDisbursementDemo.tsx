import React, { useState } from 'react';
import { DEMO_DISBURSEMENT_ROSTER } from '../demoData/disbursements';
import { Users, CheckCircle2, Clock, Calendar, AlertCircle, ArrowRight, ShieldCheck, X } from 'lucide-react';

interface WorkforceDisbursementDemoProps {
  onOpenDisbursementDemo: (workerCount: number) => void;
}

export const WorkforceDisbursementDemo: React.FC<WorkforceDisbursementDemoProps> = ({
  onOpenDisbursementDemo,
}) => {
  const [activeStep, setActiveStep] = useState<'roster' | 'review'>('roster');
  const [selectedEmployees, setSelectedEmployees] = useState<string[]>(
    DEMO_DISBURSEMENT_ROSTER.map((e) => e.id)
  );

  const toggleSelect = (id: string) => {
    if (selectedEmployees.includes(id)) {
      setSelectedEmployees(selectedEmployees.filter((e) => e !== id));
    } else {
      setSelectedEmployees([...selectedEmployees, id]);
    }
  };

  const handleReview = () => {
    setActiveStep('review');
  };

  const handleSchedule = () => {
    onOpenDisbursementDemo(selectedEmployees.length);
  };

  const handleReset = () => {
    setActiveStep('roster');
  };

  return (
    <section id="business" className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-xs text-blue-300 font-mono mb-3">
            <Users className="w-3.5 h-3.5 text-blue-400" /> BATCH PAYROLL & DISBURSEMENT ENGINE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            Bulk Workforce Disbursement
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-2">
            Disburse stipends and daily rider payouts to hundreds of workers simultaneously with single-click batch verification.
          </p>
        </div>

        {/* Mockup Card */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl flex flex-col gap-6">
          {/* Header Summary Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-950/90 border border-slate-800/80 font-mono text-xs">
            <div>
              <span className="text-slate-500 block text-[10px]">TOTAL WORKERS</span>
              <span className="text-slate-100 font-bold text-base">
                {selectedEmployees.length} Workers Selected
              </span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">TOTAL DISBURSEMENT</span>
              <span className="text-emerald-400 font-bold text-base">₦XXX,XXX</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">BATCH STATUS</span>
              <span className="text-cyan-400 font-bold text-base">
                {activeStep === 'roster'
                  ? 'Ready for Review'
                  : 'Reviewing Batch'}
              </span>
            </div>
            <div className="flex items-center justify-start sm:justify-end">
              <span className="px-3 py-1 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-800/60 text-[10px] font-bold">
                ✓ WALLET FUNDED
              </span>
            </div>
          </div>

          {/* Interactive Roster Table Preview */}
          <div className="overflow-x-auto rounded-2xl border border-slate-800/80 bg-slate-950/60">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-slate-900/80 text-slate-400 border-b border-slate-800 uppercase text-[10px]">
                <tr>
                  <th className="p-3">Select</th>
                  <th className="p-3">Worker ID</th>
                  <th className="p-3">Name / Role</th>
                  <th className="p-3">Department</th>
                  <th className="p-3">Bank Account</th>
                  <th className="p-3 text-right">Stipend Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {DEMO_DISBURSEMENT_ROSTER.map((emp) => {
                  const isChecked = selectedEmployees.includes(emp.id);
                  return (
                    <tr
                      key={emp.id}
                      onClick={() => toggleSelect(emp.id)}
                      className={`hover:bg-slate-900/50 cursor-pointer transition-colors ${
                        isChecked ? 'bg-blue-950/20' : ''
                      }`}
                    >
                      <td className="p-3">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {}}
                          className="rounded border-slate-700 bg-slate-900 text-cyan-400"
                        />
                      </td>
                      <td className="p-3 text-cyan-400 font-bold">{emp.code}</td>
                      <td className="p-3 text-slate-200">
                        <div className="font-bold">{emp.name}</div>
                        <div className="text-[10px] text-slate-400">{emp.role}</div>
                      </td>
                      <td className="p-3 text-slate-400">{emp.department}</td>
                      <td className="p-3 text-slate-400">{emp.bankAccount}</td>
                      <td className="p-3 text-right font-extrabold text-emerald-400">
                        {emp.amount}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Step Action Bar: [Review], [Schedule], [Cancel] */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Simulated Bulk Payout Mode — Zero real debit</span>
            </div>

            <div className="flex items-center gap-3">
              {activeStep !== 'roster' && (
                <button
                  onClick={handleReset}
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-mono text-xs border border-slate-800"
                >
                  [Cancel / Reset]
                </button>
              )}

              {activeStep === 'roster' && (
                <button
                  onClick={handleReview}
                  className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 flex items-center gap-2 cursor-pointer"
                >
                  [Review Batch ({selectedEmployees.length})] <ArrowRight className="w-4 h-4" />
                </button>
              )}

              {activeStep === 'review' && (
                <button
                  onClick={handleSchedule}
                  className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 flex items-center gap-2 cursor-pointer"
                >
                  [Schedule Batch Transfer] <Clock className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { Info } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('nuelogixs_cookie_consent');
    if (!consent) {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('nuelogixs_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('nuelogixs_cookie_consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6 animate-fade-in pointer-events-none">
      <div className="max-w-5xl mx-auto bg-[#0a1120]/95 backdrop-blur-xl border border-slate-800/80 shadow-2xl rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pointer-events-auto ring-1 ring-white/5">
        <div className="flex items-start gap-4 flex-1">
          <div className="p-2 bg-cyan-500/10 rounded-xl shrink-0 mt-0.5 border border-cyan-500/20">
            <Info className="w-5 h-5 text-cyan-400" />
          </div>
          <div className="space-y-1">
            <h4 className="text-slate-200 font-bold text-sm tracking-tight">Data & Cookie Privacy</h4>
            <p className="text-slate-400 text-xs leading-relaxed max-w-3xl pr-4">
              We use cookies to enhance your browsing experience, ensure enterprise-grade security, and analyze platform traffic across Nuelogixs and Esik Pay. By clicking "Accept All", you consent to our use of cookies.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto shrink-0 justify-end mt-2 sm:mt-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-800/80">
          <button
            onClick={handleDecline}
            className="px-4 py-2 rounded-xl text-slate-400 hover:text-white font-semibold text-xs transition-colors"
          >
            Manage Preferences
          </button>
          <button
            onClick={handleAccept}
            className="px-6 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};

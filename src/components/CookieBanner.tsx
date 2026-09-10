import React, { useState, useEffect } from 'react';
import { 
  Info, 
  ShieldCheck, 
  SlidersHorizontal, 
  X, 
  Check, 
  Lock, 
  Cookie
} from 'lucide-react';

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
}

const DEFAULT_PREFERENCES: CookiePreferences = {
  essential: true,
  analytics: true,
  functional: true,
  marketing: false,
};

const STORAGE_KEY = 'nuelogixs_cookie_consent';
const PREFS_KEY = 'nuelogixs_cookie_preferences';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(DEFAULT_PREFERENCES);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem(STORAGE_KEY);
    const savedPrefs = localStorage.getItem(PREFS_KEY);

    if (savedPrefs) {
      try {
        setPreferences(JSON.parse(savedPrefs));
      } catch {
        setPreferences(DEFAULT_PREFERENCES);
      }
    }

    if (!consent) {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  // Allow opening settings from anywhere in the app (e.g. footer)
  useEffect(() => {
    const handleOpenSettings = () => {
      setIsModalOpen(true);
    };

    window.addEventListener('open-cookie-settings', handleOpenSettings);
    return () => window.removeEventListener('open-cookie-settings', handleOpenSettings);
  }, []);

  // Keyboard accessibility: ESC closes preferences modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  const savePreferences = (prefs: CookiePreferences, status: 'accepted' | 'custom' | 'declined') => {
    localStorage.setItem(STORAGE_KEY, status);
    localStorage.setItem(PREFS_KEY, JSON.stringify(prefs));
    setPreferences(prefs);
    setIsVisible(false);
    setIsModalOpen(false);
  };

  const handleAcceptAll = () => {
    const allEnabled: CookiePreferences = {
      essential: true,
      analytics: true,
      functional: true,
      marketing: true,
    };
    savePreferences(allEnabled, 'accepted');
  };

  const handleRejectNonEssential = () => {
    const strictlyEssential: CookiePreferences = {
      essential: true,
      analytics: false,
      functional: false,
      marketing: false,
    };
    savePreferences(strictlyEssential, 'declined');
  };

  const handleSaveCustom = () => {
    savePreferences(preferences, 'custom');
  };

  const togglePreference = (key: keyof Omit<CookiePreferences, 'essential'>) => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <>
      {/* 1. BOTTOM PRIVACY BANNER - Fully responsive & accessible */}
      {isVisible && !isModalOpen && (
        <aside
          aria-label="Cookie consent banner"
          className="fixed bottom-0 inset-x-0 z-[90] p-2.5 sm:p-4 md:p-6 pointer-events-none transition-all duration-300"
        >
          <div className="w-full max-w-4xl mx-auto bg-[#091120]/95 sm:bg-[#091120]/90 backdrop-blur-xl border border-slate-700/80 shadow-[0_-10px_35px_rgba(0,0,0,0.6)] rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 pointer-events-auto ring-1 ring-white/10 animate-fade-in">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-5">
              
              {/* Context and Information */}
              <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0">
                <div className="p-2 sm:p-2.5 bg-cyan-500/10 rounded-xl shrink-0 mt-0.5 border border-cyan-500/25 text-cyan-400">
                  <Cookie className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                
                <div className="space-y-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-slate-100 font-bold text-sm sm:text-base tracking-tight">
                      Data & Cookie Privacy
                    </h3>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-800 text-[10px] font-mono text-cyan-400 border border-slate-700">
                      <ShieldCheck className="w-3 h-3" />
                      NDPR & GDPR
                    </span>
                  </div>
                  <p className="text-slate-300/90 text-xs leading-relaxed max-w-2xl">
                    We use cookies to secure authentication, power live dispatch tracking, and analyze platform telemetry across Nuelogixs and Esik Pay. Choose your preference below.
                  </p>
                </div>
              </div>

              {/* Action Buttons - Optimized for all screen sizes & touch targets >= 44px */}
              <div className="flex flex-col xs:flex-row sm:flex-row items-stretch sm:items-center gap-2 sm:gap-2.5 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-slate-800/80">
                
                {/* Manage Preferences Button */}
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="min-h-[44px] px-3.5 py-2 rounded-xl text-slate-300 hover:text-white bg-slate-800/70 hover:bg-slate-800 border border-slate-700 text-xs font-semibold transition-all flex items-center justify-center gap-1.5 active:scale-[0.98]"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="whitespace-nowrap">Manage Preferences</span>
                </button>

                {/* Reject Non-Essential */}
                <button
                  type="button"
                  onClick={handleRejectNonEssential}
                  className="min-h-[44px] px-3.5 py-2 rounded-xl text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 text-xs font-medium transition-colors flex items-center justify-center whitespace-nowrap active:scale-[0.98]"
                >
                  Reject Non-Essential
                </button>

                {/* Accept All Button */}
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="min-h-[44px] px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 active:bg-cyan-600 text-slate-950 font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] active:scale-[0.98] whitespace-nowrap"
                >
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                  <span>Accept All</span>
                </button>
              </div>

            </div>
          </div>
        </aside>
      )}

      {/* 2. MANAGE COOKIE PREFERENCES MODAL - Fits any device screen */}
      {isModalOpen && (
        <div 
          role="dialog" 
          aria-modal="true"
          aria-labelledby="cookie-modal-title"
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in"
        >
          {/* Backdrop click dismissal */}
          <div 
            className="absolute inset-0" 
            onClick={() => setIsModalOpen(false)}
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-xl bg-[#091120] border border-slate-700/80 rounded-t-3xl sm:rounded-3xl shadow-2xl flex flex-col max-h-[92vh] sm:max-h-[85vh] overflow-hidden z-10">
            
            {/* Modal Header */}
            <div className="px-5 py-4 sm:px-6 sm:py-5 border-b border-slate-800/90 flex items-center justify-between shrink-0 bg-[#0c1629]">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <SlidersHorizontal className="w-5 h-5" />
                </div>
                <div>
                  <h2 id="cookie-modal-title" className="text-base sm:text-lg font-bold text-slate-100">
                    Cookie & Privacy Preferences
                  </h2>
                  <p className="text-xs text-slate-400">
                    Customize which cookies and data protocols you allow.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body - Scrollable on small screens */}
            <div className="p-4 sm:p-6 space-y-3.5 overflow-y-auto flex-1 text-left">
              
              {/* Category 1: Strictly Necessary */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/70 border border-slate-800/90 space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="font-semibold text-sm text-slate-200">Strictly Necessary</span>
                    <span className="px-2 py-0.5 rounded-md bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 text-[10px] font-mono font-bold">
                      ALWAYS ACTIVE
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-500 text-xs font-mono">
                    <Lock className="w-3.5 h-3.5 text-slate-400" />
                    <span className="hidden xs:inline">Required</span>
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Essential for the platform to function properly. Enables secure session authentication, CSRF validation, and fundamental logistics dispatch requests.
                </p>
              </div>

              {/* Category 2: Analytics & Performance */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/70 border border-slate-800/90 space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <span className="font-semibold text-sm text-slate-200">Analytics & Telemetry</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer"
                      checked={preferences.analytics}
                      onChange={() => togglePreference('analytics')}
                    />
                    <div className="w-11 h-6 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
                  </label>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Collects aggregated, anonymous telemetry regarding fleet routing efficiency, page loading latency, and API error diagnostics.
                </p>
              </div>

              {/* Category 3: Functional & UI Experience */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/70 border border-slate-800/90 space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <span className="font-semibold text-sm text-slate-200">Functional & Mission Settings</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer"
                      checked={preferences.functional}
                      onChange={() => togglePreference('functional')}
                    />
                    <div className="w-11 h-6 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
                  </label>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Remembers your active tab selections, business command center filter preferences, and interactive simulation drawer states.
                </p>
              </div>

              {/* Category 4: Commercial & Notifications */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/70 border border-slate-800/90 space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <span className="font-semibold text-sm text-slate-200">Marketing & Wholesale Alerts</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer"
                      checked={preferences.marketing}
                      onChange={() => togglePreference('marketing')}
                    />
                    <div className="w-11 h-6 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
                  </label>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Provides tailored notifications regarding new wholesale inventory catalogs, payment gateway discount updates, and enterprise freight offers.
                </p>
              </div>

            </div>

            {/* Modal Footer with Actions - Responsive on mobile */}
            <div className="p-4 sm:p-6 border-t border-slate-800/90 bg-[#0c1629] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shrink-0">
              <button
                type="button"
                onClick={handleRejectNonEssential}
                className="min-h-[44px] px-4 py-2.5 rounded-xl text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 font-medium text-xs transition-colors text-center"
              >
                Reject Non-Essential
              </button>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <button
                  type="button"
                  onClick={handleSaveCustom}
                  className="min-h-[44px] px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-all text-center active:scale-[0.98]"
                >
                  Save My Preferences
                </button>
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="min-h-[44px] px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 active:bg-cyan-600 text-slate-950 font-bold text-xs transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)] text-center active:scale-[0.98]"
                >
                  Accept All Cookies
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

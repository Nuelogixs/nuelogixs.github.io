import React, { useState, useEffect } from 'react';
import { Shield, ChevronDown, Menu, X, ArrowUpRight, Lock, Layers } from 'lucide-react';
import { MobileMenu } from './MobileMenu';

interface NavbarProps {
  onOpenLogin: () => void;
  onOpenAction: (title: string, subtitle: string) => void;
  onNavigateSection: (sectionId: string) => void;
  onOpenGetStarted: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenLogin,
  onOpenAction,
  onNavigateSection,
  onOpenGetStarted,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      // Header shadow/blur toggle
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll spy logic
      const sections = ['logistics', 'payments', 'business', 'ai-intelligence', 'company'];
      let current = '';
      
      // We iterate backwards to find the deepest section currently in view
      // This is robust: if multiple sections are in view, the lowest one gets priority, 
      // or we just find the one whose top is near or past the header offset.
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // 150px offset to account for sticky navbar and breathing room
          if (rect.top <= 150) {
            current = section;
          }
        }
      }
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Call once to set initial state
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-8 z-40 transition-all duration-300 px-4 sm:px-6 lg:px-8`}
      >
        <div
          className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
            isScrolled
              ? 'bg-[#0d1726]/90 backdrop-blur-xl border border-slate-800/80 shadow-2xl py-3 px-4 sm:px-6'
              : 'bg-[#07111f]/60 backdrop-blur-md border border-slate-800/40 py-4 px-4 sm:px-6'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Unified Logo */}
            <div
              className="flex items-center cursor-pointer group py-1"
              onClick={() => onNavigateSection('hero')}
            >
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-black tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 uppercase drop-shadow-sm leading-none">
                  NUELOGIXS ENTERPRISES
                </span>
                <span className="text-[9px] sm:text-[10px] text-slate-400 tracking-[0.35em] font-bold mt-1.5 ml-1">
                  INTELLIGENT ECOSYSTEM
                </span>
              </div>
            </div>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1 rounded-xl border border-slate-800/60 text-sm">
              <button
                onClick={() => onNavigateSection('logistics')}
                className={`px-3.5 py-1.5 rounded-lg transition-colors font-medium ${
                  activeSection === 'logistics' 
                    ? 'text-cyan-400 bg-slate-800/80 shadow-sm'
                    : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50'
                }`}
              >
                Logistics
              </button>
              <button
                onClick={() => onNavigateSection('payments')}
                className={`px-3.5 py-1.5 rounded-lg transition-colors font-medium ${
                  activeSection === 'payments' 
                    ? 'text-emerald-400 bg-slate-800/80 shadow-sm'
                    : 'text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50'
                }`}
              >
                Payments
              </button>
              <button
                onClick={() => onNavigateSection('business')}
                className={`px-3.5 py-1.5 rounded-lg transition-colors font-medium ${
                  activeSection === 'business' 
                    ? 'text-blue-400 bg-slate-800/80 shadow-sm'
                    : 'text-slate-300 hover:text-blue-400 hover:bg-slate-800/50'
                }`}
              >
                Business
              </button>
              <button
                onClick={() => onNavigateSection('ai-intelligence')}
                className={`px-3.5 py-1.5 rounded-lg transition-colors font-medium ${
                  activeSection === 'ai-intelligence' 
                    ? 'text-purple-400 bg-slate-800/80 shadow-sm'
                    : 'text-slate-300 hover:text-purple-400 hover:bg-slate-800/50'
                }`}
              >
                AI Intelligence
              </button>
              <button
                onClick={() => onNavigateSection('company')}
                className={`px-3.5 py-1.5 rounded-lg transition-colors font-medium ${
                  activeSection === 'company' 
                    ? 'text-slate-100 bg-slate-800/80 shadow-sm'
                    : 'text-slate-300 hover:text-slate-100 hover:bg-slate-800/50'
                }`}
              >
                Ecosystem
              </button>
            </nav>

            {/* Desktop Right Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={onOpenLogin}
                className="px-4 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all duration-200 border border-slate-800/60 flex items-center gap-1.5"
              >
                <Lock className="w-3.5 h-3.5 text-slate-400" />
                Login
              </button>

              <button
                onClick={onOpenGetStarted}
                className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500 hover:opacity-95 transition-all duration-200 shadow-lg shadow-cyan-500/10 flex items-center gap-1.5 cursor-pointer"
              >
                Get Started
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={onOpenLogin}
                className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-slate-900 border border-slate-800 flex items-center gap-1"
              >
                <Lock className="w-3 h-3" /> Login
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenLogin={() => {
          setIsMobileMenuOpen(false);
          onOpenLogin();
        }}
        onOpenAction={(title, subtitle) => {
          setIsMobileMenuOpen(false);
          onOpenAction(title, subtitle);
        }}
        onNavigateSection={(section) => {
          setIsMobileMenuOpen(false);
          onNavigateSection(section);
        }}
      />
    </>
  );
};

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search, MessageSquare, Truck, CreditCard, ShieldCheck, Layers, Sparkles } from 'lucide-react';

interface FAQItem {
  id: string;
  category: 'ecosystem' | 'logistics' | 'ezikpay' | 'security';
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'ecosystem',
    question: 'How do Nuelogixs and Ezik Pay integrate into a single unified platform?',
    answer: 'Nuelogixs handles physical movement, freight dispatch, route optimization, and asset tracking, while Ezik Pay manages the underlying financial layer—including automated driver payouts, multi-currency escrow, instant merchant settlement, and virtual accounts. Through unified APIs and single sign-on, businesses manage both goods and capital from a single intelligence dashboard.',
  },
  {
    id: 'faq-2',
    category: 'logistics',
    question: 'What modes of freight transport are supported on Nuelogixs?',
    answer: 'Nuelogixs supports first-mile to last-mile logistics across road freight (motorcycles, vans, heavy haulage trucks), maritime cargo clearance, and air freight consolidation. Our AI dispatch system automatically selects the optimal carrier and route based on cost, urgency, and live traffic telemetry.',
  },
  {
    id: 'faq-3',
    category: 'ezikpay',
    question: 'How fast are payments settled through Ezik Pay?',
    answer: 'Ezik Pay provides instant real-time settlement for intra-network transfers, QR payments, and virtual bank account collections. For cross-border settlements and FX conversions, payout processing completes in T+0 to T+1 business days depending on local banking networks.',
  },
  {
    id: 'faq-4',
    category: 'ecosystem',
    question: 'Can enterprise platforms white-label or customize the Nuelogixs & Ezik Pay solution?',
    answer: 'Yes! Both Nuelogixs and Ezik Pay offer robust white-label SDKs and REST APIs. Enterprises can brand custom mobile apps, merchant portals, driver apps, and payout workflows under their own domain and visual identity.',
  },
  {
    id: 'faq-5',
    category: 'logistics',
    question: 'How does real-time cargo tracking and condition monitoring work?',
    answer: 'Every shipment managed by Nuelogixs utilizes IoT sensor integration and mobile GPS telemetry. You get real-time location updates, estimated time of arrival (ETA) predictions powered by machine learning, and environmental alerts (temperature, vibration) for sensitive cargo.',
  },
  {
    id: 'faq-6',
    category: 'ezikpay',
    question: 'What payment methods does Ezik Pay support for merchant checkout and collections?',
    answer: 'Ezik Pay supports dynamic virtual accounts, card payments (Visa, Mastercard, Verve), instant bank transfers, USSD strings, mobile money, and Ezik Smart POS hardware terminals for offline/in-person transactions.',
  },
  {
    id: 'faq-7',
    category: 'security',
    question: 'How are funds protected and compliant on Ezik Pay?',
    answer: 'Ezik Pay adheres strictly to PCI-DSS Level 1 compliance, ISO 27001 security standards, and local NDPR/GDPR privacy regulations. All financial transactions use AES-256 bit encryption and multi-sig escrow holdback to protect both buyers and sellers until delivery is confirmed.',
  },
  {
    id: 'faq-8',
    category: 'security',
    question: 'How do developers get started with the API sandbox environment?',
    answer: 'Developers can sign up for instant access to our Developer Portal, generate test keys within seconds, and simulate freight bookings, webhook triggers, and Ezik Pay virtual account generation directly in our interactive sandbox.',
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Questions', icon: HelpCircle },
  { id: 'ecosystem', label: 'Ecosystem & Unified Platform', icon: Layers },
  { id: 'logistics', label: 'Nuelogixs Freight & Fleet', icon: Truck },
  { id: 'ezikpay', label: 'Ezik Pay & Financials', icon: CreditCard },
  { id: 'security', label: 'Security & Developers', icon: ShieldCheck },
];

interface FAQSectionProps {
  onOpenAction?: (actionType: any, title: string, subtitle?: string) => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenAction }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedId, setExpandedId] = useState<string | null>('faq-1');

  const filteredFAQs = FAQ_DATA.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 bg-[#07111f] border-t border-slate-800/80 relative overflow-hidden">
      {/* Background Decorative Blur Highlights */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Badge & Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs text-cyan-300 font-semibold uppercase tracking-wider mb-4 backdrop-blur-md">
            <HelpCircle className="w-4 h-4 text-cyan-400" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Everything You Need to Know
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            Get instant answers on how Nuelogixs logistics intelligence and Ezik Pay infrastructure combine to power modern commerce.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-10">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            placeholder="Search questions (e.g., payments, tracking, API, settlement)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3.5 bg-slate-900/90 border border-slate-700/80 rounded-2xl text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all text-sm sm:text-base shadow-xl"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs text-slate-400 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 border ${
                  isActive
                    ? 'bg-cyan-500/15 border-cyan-500/50 text-cyan-300 shadow-md shadow-cyan-950/50'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700 hover:bg-slate-800/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq) => {
              const isOpen = expandedId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-slate-900/90 border-cyan-500/40 shadow-lg shadow-cyan-950/30'
                      : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus:ring-1 focus:ring-cyan-500/30 rounded-2xl"
                  >
                    <span className="text-base sm:text-lg font-semibold text-slate-100 flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0 opacity-80" />
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-300 ${
                        isOpen
                          ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300 rotate-180'
                          : 'bg-slate-800/60 border-slate-700/60 text-slate-400'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/60 mt-1">
                      <p className="pt-3 text-slate-300">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 px-4 bg-slate-900/30 rounded-2xl border border-slate-800">
              <HelpCircle className="w-10 h-10 text-slate-600 mx-auto mb-3" />
              <p className="text-slate-300 font-medium text-lg">No matching questions found</p>
              <p className="text-slate-500 text-sm mt-1">Try adjusting your search terms or filter selection.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="mt-4 px-4 py-2 rounded-xl bg-slate-800 text-cyan-400 text-xs font-semibold hover:bg-slate-700 transition-colors"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>

        {/* Support CTA Box */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/40 border border-slate-800/90 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                Have a specific question not listed here?
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </h3>
              <p className="text-slate-400 text-sm mt-1">
                Our solutions team is available 24/7 to assist with custom logistics & payment setups.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenAction?.('business_consult', 'Contact Engineering & Sales', 'Reach out for tailored integrations and enterprise SLAs.')}
            className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/20 whitespace-nowrap"
          >
            Talk to Solutions Architect
          </button>
        </div>
      </div>
    </section>
  );
};

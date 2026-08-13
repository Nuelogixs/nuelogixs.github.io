import React, { useState } from 'react';
import { motion } from 'motion/react';
import { DemoBanner } from './components/DemoBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MissionSelector } from './components/MissionSelector';
import { NuelogixsSection } from './components/NuelogixsSection';
import { WorkflowTimeline } from './components/WorkflowTimeline';
import { AILogisticsSection } from './components/AILogisticsSection';
import { EcosystemTransition } from './components/EcosystemTransition';
import { EsikPaySection } from './components/EsikPaySection';
import { WorkforceDisbursementDemo } from './components/WorkforceDisbursementDemo';
import { UnifiedEcosystemFlow } from './components/UnifiedEcosystemFlow';
import { BusinessCommandCenter } from './components/BusinessCommandCenter';
import { AudienceSection } from './components/AudienceSection';
import { TrustSection } from './components/TrustSection';
import { FAQSection } from './components/FAQSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { LoginModal } from './components/LoginModal';
import { ActionModal } from './components/ActionModal';
import { GetStartedModal } from './components/GetStartedModal';
import { DemoBookingDrawer } from './components/DemoBookingDrawer';
import { DemoPaymentDrawer } from './components/DemoPaymentDrawer';
import { DemoAIDrawer } from './components/DemoAIDrawer';
import { DemoDisbursementDrawer } from './components/DemoDisbursementDrawer';

export default function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isGetStartedModalOpen, setIsGetStartedModalOpen] = useState(false);
  const [isDemoBookingOpen, setIsDemoBookingOpen] = useState(false);
  const [isDemoPaymentOpen, setIsDemoPaymentOpen] = useState(false);
  
  const [aiDrawerState, setAiDrawerState] = useState<{isOpen: boolean, actionTitle: string}>({
    isOpen: false,
    actionTitle: ''
  });
  
  const [disbursementDrawerState, setDisbursementDrawerState] = useState<{isOpen: boolean, workerCount: number}>({
    isOpen: false,
    workerCount: 0
  });
  
  const [actionModalState, setActionModalState] = useState<{
    isOpen: boolean;
    title: string;
    subtitle: string;
  }>({
    isOpen: false,
    title: '',
    subtitle: '',
  });

  const handleOpenActionModal = (title: string, subtitle: string) => {
    setActionModalState({
      isOpen: true,
      title,
      subtitle,
    });
  };

  const handleCloseActionModal = () => {
    setActionModalState({
      isOpen: false,
      title: '',
      subtitle: '',
    });
  };

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const sectionVariant = {
    initial: { opacity: 0, y: 35 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <div className="min-h-screen bg-[#07111f] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Top Prototype / Demo Mode Banner */}
      <DemoBanner />

      {/* Global Sticky Navigation */}
      <Navbar
        onOpenLogin={() => setIsLoginModalOpen(true)}
        onOpenAction={handleOpenActionModal}
        onNavigateSection={handleNavigateSection}
        onOpenGetStarted={() => setIsGetStartedModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section + Interactive Ecosystem Map */}
        <motion.div {...sectionVariant}>
          <Hero
            onNavigateSection={handleNavigateSection}
            onOpenAction={handleOpenActionModal}
          />
        </motion.div>

        {/* 2. Interactive Mission Selector ("WHAT DO YOU NEED TO DO?") */}
        <motion.div {...sectionVariant}>
          <MissionSelector
            onNavigateSection={handleNavigateSection}
            onOpenAction={handleOpenActionModal}
          />
        </motion.div>

        {/* 3. Nuelogixs Section: "Your Logistics Network. Connected." */}
        <motion.div {...sectionVariant}>
          <NuelogixsSection 
            onOpenAction={handleOpenActionModal} 
            onOpenDemoBooking={() => setIsDemoBookingOpen(true)}
          />
        </motion.div>

        {/* 4. Animated Workflow Timeline: BOOK → MATCH → PICK UP → TRACK → DELIVER */}
        <motion.div {...sectionVariant}>
          <WorkflowTimeline onOpenAction={handleOpenActionModal} />
        </motion.div>

        {/* 5. AI Logistics Intelligence Section */}
        <motion.div {...sectionVariant}>
          <AILogisticsSection onOpenAIDemo={(actionTitle) => setAiDrawerState({ isOpen: true, actionTitle })} />
        </motion.div>

        {/* 6. Visual Transition to ESIK Pay */}
        <motion.div {...sectionVariant}>
          <EcosystemTransition />
        </motion.div>

        {/* 7. ESIK Pay Section: Utility Payments & Transactions */}
        <motion.div {...sectionVariant}>
          <EsikPaySection 
            onOpenAction={handleOpenActionModal}
            onOpenDemoPayment={() => setIsDemoPaymentOpen(true)}
          />
        </motion.div>

        {/* 8. Workforce Disbursement Demo */}
        <motion.div {...sectionVariant}>
          <WorkforceDisbursementDemo onOpenDisbursementDemo={(workerCount) => setDisbursementDrawerState({ isOpen: true, workerCount })} />
        </motion.div>

        {/* 9. Unified Ecosystem Flow: "One Ecosystem. Multiple Operations." */}
        <motion.div {...sectionVariant}>
          <UnifiedEcosystemFlow onOpenAction={handleOpenActionModal} />
        </motion.div>

        {/* 10. Business Command Center Composite Preview */}
        <motion.div {...sectionVariant}>
          <BusinessCommandCenter onOpenAction={handleOpenActionModal} />
        </motion.div>

        {/* 11. Who We Serve (Audience Cards) */}
        <motion.div {...sectionVariant}>
          <AudienceSection onOpenAction={handleOpenActionModal} />
        </motion.div>

        {/* 12. Trust & System Architecture Section */}
        <motion.div {...sectionVariant}>
          <TrustSection />
        </motion.div>

        {/* 13. FAQ Section */}
        <motion.div {...sectionVariant}>
          <FAQSection onOpenAction={(actionType, title, subtitle) => handleOpenActionModal(title, subtitle || '')} />
        </motion.div>

        {/* 14. Closing CTA Section */}
        <motion.div {...sectionVariant}>
          <CTASection
            onNavigateSection={handleNavigateSection}
            onOpenAction={handleOpenActionModal}
          />
        </motion.div>
      </main>

      {/* Footer */}
      <Footer
        onNavigateSection={handleNavigateSection}
        onOpenAction={handleOpenActionModal}
      />

      {/* Interactive Modals */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />

      <GetStartedModal
        isOpen={isGetStartedModalOpen}
        onClose={() => setIsGetStartedModalOpen(false)}
      />

      <ActionModal
        isOpen={actionModalState.isOpen}
        title={actionModalState.title}
        subtitle={actionModalState.subtitle}
        onClose={handleCloseActionModal}
      />
      
      <DemoBookingDrawer
        isOpen={isDemoBookingOpen}
        onClose={() => setIsDemoBookingOpen(false)}
      />
      
      <DemoPaymentDrawer
        isOpen={isDemoPaymentOpen}
        onClose={() => setIsDemoPaymentOpen(false)}
      />

      <DemoAIDrawer
        isOpen={aiDrawerState.isOpen}
        onClose={() => setAiDrawerState(prev => ({ ...prev, isOpen: false }))}
        actionTitle={aiDrawerState.actionTitle}
      />
      
      <DemoDisbursementDrawer
        isOpen={disbursementDrawerState.isOpen}
        onClose={() => setDisbursementDrawerState(prev => ({ ...prev, isOpen: false }))}
        workerCount={disbursementDrawerState.workerCount}
      />
    </div>
  );
}

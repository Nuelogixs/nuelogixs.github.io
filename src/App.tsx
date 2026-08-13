import React, { useState } from 'react';
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
        <Hero
          onNavigateSection={handleNavigateSection}
          onOpenAction={handleOpenActionModal}
        />

        {/* 2. Interactive Mission Selector ("WHAT DO YOU NEED TO DO?") */}
        <MissionSelector
          onNavigateSection={handleNavigateSection}
          onOpenAction={handleOpenActionModal}
        />

        {/* 3. Nuelogixs Section: "Your Logistics Network. Connected." */}
        <NuelogixsSection 
          onOpenAction={handleOpenActionModal} 
          onOpenDemoBooking={() => setIsDemoBookingOpen(true)}
        />

        {/* 4. Animated Workflow Timeline: BOOK → MATCH → PICK UP → TRACK → DELIVER */}
        <WorkflowTimeline onOpenAction={handleOpenActionModal} />

        {/* 5. AI Logistics Intelligence Section */}
        <AILogisticsSection onOpenAIDemo={(actionTitle) => setAiDrawerState({ isOpen: true, actionTitle })} />

        {/* 6. Visual Transition to ESIK Pay */}
        <EcosystemTransition />

        {/* 7. ESIK Pay Section: Utility Payments & Transactions */}
        <EsikPaySection 
          onOpenAction={handleOpenActionModal}
          onOpenDemoPayment={() => setIsDemoPaymentOpen(true)}
        />

        {/* 8. Workforce Disbursement Demo */}
        <WorkforceDisbursementDemo onOpenDisbursementDemo={(workerCount) => setDisbursementDrawerState({ isOpen: true, workerCount })} />

        {/* 9. Unified Ecosystem Flow: "One Ecosystem. Multiple Operations." */}
        <UnifiedEcosystemFlow onOpenAction={handleOpenActionModal} />

        {/* 10. Business Command Center Composite Preview */}
        <BusinessCommandCenter onOpenAction={handleOpenActionModal} />

        {/* 11. Who We Serve (Audience Cards) */}
        <AudienceSection onOpenAction={handleOpenActionModal} />

        {/* 12. Trust & System Architecture Section */}
        <TrustSection />

        {/* 13. Closing CTA Section */}
        <CTASection
          onNavigateSection={handleNavigateSection}
          onOpenAction={handleOpenActionModal}
        />
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

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Ticker } from './components/Ticker';
import { ExecutiveSummary } from './components/ExecutiveSummary';
import { PlatformShowcase } from './components/PlatformShowcase';
import { InteractiveVideoSampler } from './components/InteractiveVideoSampler';
import { GrowthCompoundingFlow } from './components/GrowthCompoundingFlow';
import { PaidAndAmazonDetail } from './components/PaidAndAmazonDetail';
import { AlgorithmScience } from './components/AlgorithmScience';
import { ManualEngagement } from './components/ManualEngagement';
import { ArcReviewsSection } from './components/ArcReviewsSection';
import { GrowthTeam } from './components/GrowthTeam';
import { ResultsShowcase } from './components/ResultsShowcase';
import { InteractiveRoiCalculator } from './components/InteractiveRoiCalculator';
import { ComparisonTable } from './components/ComparisonTable';
import { PricingSection } from './components/PricingSection';
import { GuaranteeBanner } from './components/GuaranteeBanner';
import { Testimonials } from './components/Testimonials';
import { VideoTestimonials } from './components/VideoTestimonials';
import { FaqSection } from './components/FaqSection';
import { UrgencyBar } from './components/UrgencyBar';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { OnboardingModal } from './components/OnboardingModal';
import { ChatAssistant } from './components/ChatAssistant';
import { PageModal } from './components/PageModal';
import { ExitIntentModal } from './components/ExitIntentModal';
import { StickyMobileCta } from './components/StickyMobileCta';
import { PricingPlan } from './types';
import { PRICING_PLANS } from './data/contentData';

export default function App() {
  const [onboardingOpen, setOnboardingOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [activePageId, setActivePageId] = useState<string | null>(null);
  const [chatOpen, setChatOpen] = useState(false);

  const handleOpenOnboarding = (plan?: PricingPlan) => {
    setSelectedPlan(plan || PRICING_PLANS[2]); // default to Accelerate
    setOnboardingOpen(true);
  };

  const handleOpenBlog = (id?: string) => {
    setActivePageId(id || 'blog');
  };

  const handleOpenPage = (pageId: string) => {
    setActivePageId(pageId);
  };

  const handleScrollToCalculator = () => {
    const el = document.getElementById('plan-calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePlanSelectFromCalculator = (planId: string) => {
    const found = PRICING_PLANS.find((p) => p.id === planId) || PRICING_PLANS[2];
    handleOpenOnboarding(found);
  };

  return (
    <div className="min-h-screen bg-[#FAF5F0] text-[#241811] flex flex-col antialiased selection:bg-[#E8607A]/20 selection:text-[#B03C5F]">
      {/* Top Navigation */}
      <Navbar
        onOpenOnboarding={() => handleOpenOnboarding()}
        onOpenBlog={handleOpenBlog}
        onOpenChat={() => setChatOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenOnboarding={() => handleOpenOnboarding()}
          onScrollToCalculator={handleScrollToCalculator}
        />

        <Ticker />

        <ExecutiveSummary />

        <PlatformShowcase onOpenBlogForPlatform={(platformId) => handleOpenBlog(`blog-${platformId}`)} />

        <InteractiveVideoSampler onOpenOnboarding={() => handleOpenOnboarding()} />

        <GrowthCompoundingFlow />

        <PaidAndAmazonDetail onOpenChat={() => setChatOpen(true)} />

        <AlgorithmScience />

        <ManualEngagement />

        <ArcReviewsSection />

        <GrowthTeam />

        <ResultsShowcase />

        <InteractiveRoiCalculator onSelectPlan={handlePlanSelectFromCalculator} />

        <ComparisonTable />

        <PricingSection
          onSelectPlanForOnboarding={handleOpenOnboarding}
          onOpenChat={() => setChatOpen(true)}
        />

        <GuaranteeBanner />

        <Testimonials />

        <VideoTestimonials onOpenOnboarding={handleOpenOnboarding} />

        <FaqSection onOpenChat={() => setChatOpen(true)} />

        <UrgencyBar onClaimSpot={() => handleOpenOnboarding()} />

        <FinalCta onOpenOnboarding={() => handleOpenOnboarding()} />
      </main>

      {/* Footer with Legal and Company Navigation */}
      <Footer onOpenPage={handleOpenPage} onOpenBlog={handleOpenBlog} />

      {/* Interactive Sticky Mobile CTA */}
      <StickyMobileCta onOpenOnboarding={() => handleOpenOnboarding()} />

      {/* Multi-Step Onboarding Intake Wizard */}
      <OnboardingModal
        isOpen={onboardingOpen}
        onClose={() => setOnboardingOpen(false)}
        initialPlan={selectedPlan}
      />

      {/* Interactive Author AI / FAQ Chat Assistant */}
      <ChatAssistant
        isOpen={chatOpen}
        onToggle={() => setChatOpen(!chatOpen)}
        onOpenOnboarding={() => handleOpenOnboarding()}
      />

      {/* Modal Reader for Guides & Legal Documents */}
      <PageModal
        pageId={activePageId}
        onClose={() => setActivePageId(null)}
        onOpenBlog={handleOpenBlog}
      />

      {/* Gentle Desktop Exit-Intent Dialog */}
      <ExitIntentModal
        onOpenChat={() => setChatOpen(true)}
        onOpenOnboarding={() => handleOpenOnboarding()}
      />
    </div>
  );
}

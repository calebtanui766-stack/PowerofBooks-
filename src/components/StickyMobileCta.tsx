import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface StickyMobileCtaProps {
  onOpenOnboarding: () => void;
}

export const StickyMobileCta: React.FC<StickyMobileCtaProps> = ({ onOpenOnboarding }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const pastHero = window.scrollY > 500;
      const pricingEl = document.getElementById('pricing');
      let pricingInView = false;
      if (pricingEl) {
        const rect = pricingEl.getBoundingClientRect();
        pricingInView = rect.top < window.innerHeight && rect.bottom > 0;
      }
      setVisible(pastHero && !pricingInView);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 p-3 bg-[#FAF5F0]/95 backdrop-blur-md border-t border-[#241811]/10 md:hidden flex items-center justify-between gap-3 shadow-lg">
      <div className="text-left pl-1">
        <div className="text-[11px] uppercase tracking-wider font-bold text-[#B03C5F]">
          Done-For-You Growth
        </div>
        <div className="text-xs font-bold text-[#241811]">
          From $99 · Cancel Anytime
        </div>
      </div>

      <button
        onClick={onOpenOnboarding}
        className="px-4 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#E8607A] to-[#D4924A] shadow-md flex items-center gap-1.5 cursor-pointer shrink-0"
      >
        <Sparkles className="w-3.5 h-3.5" />
        <span>Get Started</span>
        <ArrowRight className="w-3 h-3" />
      </button>
    </div>
  );
};

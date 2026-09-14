import React, { useEffect, useState } from 'react';
import { X, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';

interface ExitIntentModalProps {
  onOpenChat: () => void;
  onOpenOnboarding: () => void;
}

export const ExitIntentModal: React.FC<ExitIntentModalProps> = ({
  onOpenChat,
  onOpenOnboarding,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10 && !hasTriggered && window.scrollY > 400) {
        setIsVisible(true);
        setHasTriggered(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasTriggered]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
      onClick={() => setIsVisible(false)}
    >
      <div
        className="relative w-full max-w-md bg-[#FAF5F0] rounded-3xl border border-[#E8607A]/30 shadow-2xl p-6 sm:p-8 text-center text-[#241811]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-[#241811]/5 hover:bg-[#241811]/10 text-[#241811] transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <span className="text-3xl mb-2 block">📚</span>
        <h3 className="font-serif text-2xl font-bold text-[#241811] mb-2">
          Before You Go —
        </h3>
        <p className="text-xs sm:text-sm text-[#241811]/75 leading-relaxed mb-6">
          Unsure which plan fits your catalog or release date? Our instant assistant can calculate your exact video volume, or you can test the waters with our risk-free 7-day quality guarantee.
        </p>

        <div className="space-y-2.5">
          <button
            onClick={() => {
              setIsVisible(false);
              onOpenChat();
            }}
            className="w-full py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#E8607A] to-[#D4924A] shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask a Quick Question (Instant)</span>
          </button>

          <button
            onClick={() => {
              setIsVisible(false);
              onOpenOnboarding();
            }}
            className="w-full py-2.5 rounded-full text-xs font-semibold text-[#241811] bg-[#F2E9DE] hover:bg-[#EAE0D2] border border-[#241811]/10 transition-all cursor-pointer"
          >
            Start Setup From $99 →
          </button>
        </div>

        <div className="mt-4 pt-3 border-t border-[#241811]/10 flex items-center justify-center gap-1.5 text-[11px] text-[#241811]/60">
          <ShieldCheck className="w-3.5 h-3.5 text-[#2F9968]" />
          <span>7-day revision guarantee · Zero long-term contracts</span>
        </div>
      </div>
    </div>
  );
};

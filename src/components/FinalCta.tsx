import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface FinalCtaProps {
  onOpenOnboarding: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenOnboarding }) => {
  return (
    <section className="relative py-24 md:py-32 bg-[#FAF5F0] overflow-hidden text-center">
      {/* Background glow radial */}
      <div className="absolute inset-0 bg-radial from-[#E8607A]/15 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <span className="text-xs font-bold uppercase tracking-widest text-[#B03C5F] mb-3 inline-block">
          Your Story Deserves an Audience
        </span>

        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-[#241811] leading-tight mb-6">
          Stop Being the{' '}
          <span className="italic bg-gradient-to-r from-[#B03C5F] via-[#E8607A] to-[#D4924A] bg-clip-text text-transparent">
            Best Book Nobody’s Found.
          </span>
        </h2>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#241811]/75 leading-relaxed mb-8">
          Daily vertical videos across every platform your readers scroll. Facebook ads that convert. Amazon A+ content that seals the purchase. 100% done-for-you so you can focus on writing.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button
            onClick={onOpenOnboarding}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-[#E8607A] to-[#D4924A] shadow-lg shadow-[#E8607A]/25 hover:shadow-xl hover:shadow-[#E8607A]/35 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
          >
            <span>Start Growing Today →</span>
          </button>

          <a
            href="#pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-[#241811] bg-[#F2E9DE] hover:bg-[#EAE0D2] border border-[#241811]/12 transition-all cursor-pointer"
          >
            <span>Compare Plans &amp; Pricing</span>
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#241811]/70">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#2F9968]" />
            Starting from just $99
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#2F9968]" />
            Any book in your store
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#2F9968]" />
            You select the aesthetic tone
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#2F9968]" />
            We handle everything else
          </span>
        </div>
      </div>
    </section>
  );
};

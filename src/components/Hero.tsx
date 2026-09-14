import React from 'react';
import { ArrowRight, Calculator, CheckCircle2, ShieldCheck, Sparkles, TrendingUp, Clock, Layers } from 'lucide-react';

interface HeroProps {
  onOpenOnboarding: () => void;
  onScrollToCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOnboarding, onScrollToCalculator }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 bg-radial from-[#E8607A]/10 via-[#FAF5F0] to-[#FAF5F0]">
      {/* Subtle background atmospheric patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#241811_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.035] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Top Tagline Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8607A]/10 border border-[#E8607A]/25 text-[#B03C5F] text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6">
          <span className="w-2 h-2 rounded-full bg-[#E8607A] animate-pulse" />
          Done-For-You Book Video Management &amp; Reader Growth
        </div>

        {/* Main Display Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-bold text-[#241811] leading-[0.98] tracking-tight mb-6">
          Your Books.{' '}
          <span className="italic bg-gradient-to-r from-[#B03C5F] via-[#E8607A] to-[#D4924A] bg-clip-text text-transparent">
            Everywhere.
          </span>
          <br />
          Every Single Day.
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#241811]/75 leading-relaxed mb-8">
          We produce retention-engineered short videos for <strong className="font-semibold text-[#241811]">TikTok, Instagram Reels, YouTube Shorts, Pinterest, Facebook Ads</strong>, and <strong className="font-semibold text-[#241811]">Amazon A+</strong>. Plus verified ARC reviews and 1-on-1 manual reader discovery — covering any book in your catalog.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-6">
          <a
            href="#pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-[#E8607A] to-[#D4924A] shadow-lg shadow-[#E8607A]/25 hover:shadow-xl hover:shadow-[#E8607A]/35 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
          >
            <span>Choose Your Plan From $99</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={onScrollToCalculator}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-base font-semibold text-[#241811] bg-[#241811]/5 hover:bg-[#241811]/10 border border-[#241811]/12 transition-all cursor-pointer"
          >
            <Calculator className="w-4 h-4 text-[#B03C5F]" />
            <span>Interactive Plan Calculator</span>
          </button>
        </div>

        {/* Trust Signals */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#241811]/70 mb-12">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#2F9968]" />
            7-Day Quality Guarantee
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#2F9968]" />
            No Long Contracts
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#2F9968]" />
            Any Book In Your Store
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#2F9968]" />
            100% Real Human Engagement (No Bots)
          </span>
        </div>

        {/* 4 Performance Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          <div className="bg-[#FAF5F0] border border-[#241811]/10 rounded-2xl p-4 sm:p-5 shadow-xs text-center">
            <div className="flex items-center justify-center gap-1.5 mb-1 text-[#2F9968]">
              <TrendingUp className="w-4 h-4" />
              <span className="font-serif text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#B03C5F] to-[#D4924A] bg-clip-text text-transparent">
                340%
              </span>
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#241811]/60">
              Avg. Follower Lift
            </div>
            <div className="text-[11px] text-[#241811]/45 mt-0.5">Across 90-day cycles</div>
          </div>

          <div className="bg-[#FAF5F0] border border-[#241811]/10 rounded-2xl p-4 sm:p-5 shadow-xs text-center">
            <div className="flex items-center justify-center gap-1.5 mb-1 text-[#B03C5F]">
              <Clock className="w-4 h-4" />
              <span className="font-serif text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#B03C5F] to-[#D4924A] bg-clip-text text-transparent">
                20-30h
              </span>
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#241811]/60">
              Saved Weekly
            </div>
            <div className="text-[11px] text-[#241811]/45 mt-0.5">More writing, zero editing</div>
          </div>

          <div className="bg-[#FAF5F0] border border-[#241811]/10 rounded-2xl p-4 sm:p-5 shadow-xs text-center">
            <div className="flex items-center justify-center gap-1.5 mb-1 text-[#3A78BD]">
              <Layers className="w-4 h-4" />
              <span className="font-serif text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#B03C5F] to-[#D4924A] bg-clip-text text-transparent">
                6 Channels
              </span>
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#241811]/60">
              Omnichannel Reach
            </div>
            <div className="text-[11px] text-[#241811]/45 mt-0.5">Social + Paid + Retail</div>
          </div>

          <div className="bg-[#FAF5F0] border border-[#241811]/10 rounded-2xl p-4 sm:p-5 shadow-xs text-center">
            <div className="flex items-center justify-center gap-1.5 mb-1 text-[#D4924A]">
              <Sparkles className="w-4 h-4" />
              <span className="font-serif text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#B03C5F] to-[#D4924A] bg-clip-text text-transparent">
                100%
              </span>
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#241811]/60">
              Done-For-You
            </div>
            <div className="text-[11px] text-[#241811]/45 mt-0.5">Scripts to daily publishing</div>
          </div>
        </div>
      </div>
    </section>
  );
};

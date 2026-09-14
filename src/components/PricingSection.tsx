import React, { useState } from 'react';
import { PRICING_PLANS } from '../data/contentData';
import { PricingPlan } from '../types';
import { Check, Sparkles, ShieldCheck, Mail, ArrowRight, HelpCircle } from 'lucide-react';

interface PricingSectionProps {
  onSelectPlanForOnboarding: (plan: PricingPlan) => void;
  onOpenChat: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onSelectPlanForOnboarding,
  onOpenChat,
}) => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>('accelerate');

  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#FAF5F0] border-b border-[#241811]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8607A] mb-2 block">
            Simple, Transparent Author Investment
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#241811] leading-tight mb-4">
            Choose Your Growth Plan
          </h2>
          <p className="text-base sm:text-lg text-[#241811]/70">
            One-time fixed investment. No surprise recurring charges, no contracts. The longer your campaign runs, the lower your cost per video and the stronger your algorithmic momentum.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-xs text-[#241811]/60 bg-[#F2E9DE] px-3.5 py-1.5 rounded-full border border-[#241811]/10">
            <ShieldCheck className="w-4 h-4 text-[#2F9968]" />
            <span>Payments secured via PayPal Business · Zero account data stored on our servers</span>
          </div>
        </div>

        {/* 5 Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 items-stretch mb-10">
          {PRICING_PLANS.map((plan) => {
            const isFeatured = plan.id === 'accelerate' || plan.id === 'author-pro';
            const isTopTier = plan.id === 'author-pro';
            const isMostPopular = plan.id === 'accelerate';

            return (
              <div
                key={plan.id}
                onClick={() => setSelectedPlanId(plan.id)}
                className={`relative rounded-3xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 cursor-pointer ${
                  isMostPopular
                    ? 'bg-[#FAF5F0] border-2 border-[#E8607A] shadow-xl ring-2 ring-[#E8607A]/20 scale-[1.02] z-10'
                    : isTopTier
                    ? 'bg-[#F2E9DE] border-2 border-[#D4924A] shadow-lg'
                    : 'bg-[#F2E9DE]/60 border border-[#241811]/12 hover:border-[#241811]/30 hover:shadow-md'
                }`}
              >
                {/* Featured Badge */}
                {plan.tag && (
                  <div
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider text-white shadow-xs whitespace-nowrap bg-gradient-to-r ${plan.tagColor}`}
                  >
                    {plan.tag}
                  </div>
                )}

                <div>
                  <div className="text-[11px] font-bold uppercase tracking-widest text-[#241811]/50 mb-1">
                    {plan.planNumber}
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#241811] mb-1">
                    {plan.name}
                  </h3>

                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E8607A]/10 text-[#B03C5F] text-[11px] font-bold tracking-wide mb-3">
                    {plan.videosPerDay} videos / day
                  </div>

                  {/* Price */}
                  <div className="my-2">
                    <div className="flex items-baseline gap-1">
                      <span className="font-serif text-4xl sm:text-5xl font-bold text-[#241811]">
                        ${plan.priceUsd}
                      </span>
                      <span className="text-xs text-[#241811]/60 font-medium">
                        total
                      </span>
                    </div>
                    <div className="text-[11px] text-[#241811]/55 mt-0.5">
                      {plan.durationLabel} · ~{plan.costPerDay}
                    </div>
                  </div>

                  <p className="text-xs text-[#241811]/75 leading-relaxed pb-3 mb-4 border-b border-[#241811]/10">
                    {plan.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2 mb-6">
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-[#241811]/85 leading-snug">
                        <Check className="w-3.5 h-3.5 text-[#2F9968] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom CTA Group */}
                <div className="pt-3 border-t border-[#241811]/10 space-y-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectPlanForOnboarding(plan);
                    }}
                    className={`w-full py-3 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm hover:shadow-md cursor-pointer ${
                      isMostPopular || isTopTier
                        ? 'text-white bg-gradient-to-r from-[#E8607A] to-[#D4924A] hover:opacity-95'
                        : 'text-[#241811] bg-[#FAF5F0] hover:bg-white border border-[#241811]/15'
                    }`}
                  >
                    <span>Start On {plan.name}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>

                  <a
                    href={`mailto:gilbertkimutai616@gmail.com?subject=Inquiry%20about%20${encodeURIComponent(
                      plan.name
                    )}%20Plan%20(%24${plan.priceUsd})`}
                    className="block text-center text-[10px] text-[#241811]/50 hover:text-[#B03C5F] transition-colors"
                  >
                    Or email us about this tier
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Savings Comparison Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-6xl mx-auto mb-8">
          {PRICING_PLANS.map((p) => (
            <div
              key={p.id}
              className={`p-2.5 rounded-xl text-center text-xs font-bold border ${
                p.id === 'author-pro'
                  ? 'bg-gradient-to-r from-[#E8607A]/15 to-[#D4924A]/15 text-[#B03C5F] border-[#E8607A]/30'
                  : p.id === 'accelerate'
                  ? 'bg-[#2F9968]/10 text-[#2F9968] border-[#2F9968]/20'
                  : 'bg-[#F2E9DE] text-[#241811]/65 border-[#241811]/10'
              }`}
            >
              {p.savingsVsMonthly}
            </div>
          ))}
        </div>

        {/* Informational Guidance Footer */}
        <div className="max-w-3xl mx-auto text-center space-y-3 pt-4">
          <p className="text-xs text-[#241811]/65 leading-relaxed">
            🎧 <strong>Not sure which plan matches your release calendar?</strong> Every plan includes our 7-day quality revision guarantee. Facebook video ad creative + free campaign setup and Amazon A+ video content are included in Authority and Author Pro, and available as add-ons on lower plans.
          </p>
          <button
            onClick={onOpenChat}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B03C5F] hover:underline cursor-pointer"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Chat with our author assistant to match your book to a plan</span>
          </button>
        </div>
      </div>
    </section>
  );
};

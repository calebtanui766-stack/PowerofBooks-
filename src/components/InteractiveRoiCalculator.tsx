import React, { useState } from 'react';
import { PRICING_PLANS } from '../data/contentData';
import { Calculator, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface InteractiveRoiCalculatorProps {
  onSelectPlan: (planId: string) => void;
}

export const InteractiveRoiCalculator: React.FC<InteractiveRoiCalculatorProps> = ({ onSelectPlan }) => {
  const [catalogSize, setCatalogSize] = useState<'1' | '3' | '5+'>('1');
  const [goal, setGoal] = useState<'test' | 'launch' | 'scale'>('launch');

  // Logic to determine recommended plan
  let recommendedPlanId = 'accelerate';
  if (goal === 'test') {
    recommendedPlanId = catalogSize === '1' ? 'starter' : 'growth';
  } else if (goal === 'launch') {
    recommendedPlanId = catalogSize === '5+' ? 'authority' : 'accelerate';
  } else {
    // scale
    recommendedPlanId = 'author-pro';
  }

  const recommendedPlan = PRICING_PLANS.find((p) => p.id === recommendedPlanId) || PRICING_PLANS[2];
  const unitCostPerVideo = (recommendedPlan.priceUsd / recommendedPlan.totalVideos).toFixed(2);

  return (
    <section id="plan-calculator" className="py-20 md:py-28 bg-[#F2E9DE] border-b border-[#241811]/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B03C5F] mb-2 block flex items-center justify-center gap-1.5">
            <Calculator className="w-3.5 h-3.5" />
            Interactive Author Assistant
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#241811] leading-tight mb-4">
            Find Your Ideal Growth Plan
          </h2>
          <p className="text-base sm:text-lg text-[#241811]/70">
            Select your catalog size and primary launch objective to calculate your recommended cadence and cost per video.
          </p>
        </div>

        <div className="bg-[#FAF5F0] rounded-3xl border border-[#241811]/12 p-6 sm:p-10 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Question 1: Catalog size */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#241811]/70 mb-2">
                  1. How many books are in your store?
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { id: '1', label: '1 Book', sub: 'Debut / Single Title' },
                    { id: '3', label: '2–4 Books', sub: 'Growing Series' },
                    { id: '5+', label: '5+ Books', sub: 'Deep Backlist' },
                  ].map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setCatalogSize(option.id as any)}
                      className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                        catalogSize === option.id
                          ? 'bg-[#241811] text-white border-[#241811] shadow-xs'
                          : 'bg-[#F2E9DE] text-[#241811] border-[#241811]/10 hover:border-[#241811]/30'
                      }`}
                    >
                      <div className="text-sm font-bold">{option.label}</div>
                      <div className={`text-[10px] mt-0.5 ${catalogSize === option.id ? 'text-white/70' : 'text-[#241811]/50'}`}>
                        {option.sub}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 2: Primary Goal */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#241811]/70 mb-2">
                  2. What is your primary 2026 goal?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: 'test', label: 'Test Traction', desc: 'Lowest upfront cost' },
                    { id: 'launch', label: 'New Title Launch', desc: 'Build real momentum' },
                    { id: 'scale', label: 'Full Year Scale', desc: 'Become genre authority' },
                  ].map((g) => (
                    <button
                      key={g.id}
                      type="button"
                      onClick={() => setGoal(g.id as any)}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                        goal === g.id
                          ? 'bg-[#241811] text-white border-[#241811] shadow-xs'
                          : 'bg-[#F2E9DE] text-[#241811] border-[#241811]/10 hover:border-[#241811]/30'
                      }`}
                    >
                      <div className="text-sm font-bold">{g.label}</div>
                      <div className={`text-[10px] mt-0.5 ${goal === g.id ? 'text-white/70' : 'text-[#241811]/50'}`}>
                        {g.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-xs text-[#241811]/60 flex items-center gap-2 pt-1">
                <CheckCircle2 className="w-4 h-4 text-[#2F9968] shrink-0" />
                <span>All plans include manual reader outreach on 1 platform + 7-day quality revision guarantee.</span>
              </div>
            </div>

            {/* Recommendation Result Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#F2E9DE] to-[#FAF5F0] rounded-2xl border-2 border-[#E8607A]/30 p-6 flex flex-col justify-between shadow-xs">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E8607A]/15 text-[#B03C5F] text-[11px] font-bold uppercase tracking-wider mb-3">
                  <Sparkles className="w-3 h-3" />
                  Recommended Match
                </div>

                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif text-3xl font-bold text-[#241811]">
                    {recommendedPlan.name} Plan
                  </h3>
                  <div className="text-right">
                    <span className="font-serif text-3xl font-bold text-[#241811]">
                      ${recommendedPlan.priceUsd}
                    </span>
                    <span className="text-[11px] text-[#241811]/50 block -mt-1">
                      {recommendedPlan.durationLabel}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[#241811]/75 mt-3 leading-relaxed">
                  {recommendedPlan.description}
                </p>

                <div className="my-4 py-3 border-y border-[#241811]/10 space-y-2 text-xs">
                  <div className="flex justify-between font-semibold">
                    <span className="text-[#241811]/70">Total Videos Produced:</span>
                    <span className="text-[#241811] font-bold">{recommendedPlan.totalVideos} custom cuts</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span className="text-[#241811]/70">Daily Frequency:</span>
                    <span className="text-[#241811] font-bold">{recommendedPlan.videosPerDay} videos / day</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span className="text-[#241811]/70">True Cost Per Video:</span>
                    <span className="text-[#2F9968] font-bold">${unitCostPerVideo} / video</span>
                  </div>
                  {recommendedPlan.reviewsIncluded && (
                    <div className="flex justify-between font-semibold">
                      <span className="text-[#241811]/70">ARC Reviews Included:</span>
                      <span className="text-[#3A78BD] font-bold">{recommendedPlan.reviewsIncluded} Verified Reviews</span>
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={() => onSelectPlan(recommendedPlan.id)}
                className="w-full py-3 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#E8607A] to-[#D4924A] shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>View Plan Details &amp; Start</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

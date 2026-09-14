import React from 'react';
import { Video, UserPlus, Target, ShoppingBag, ArrowRight } from 'lucide-react';

export const GrowthCompoundingFlow: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Video Builds Cold Audience',
      icon: Video,
      description: 'Daily retention-engineered videos on TikTok, Reels, Shorts & Pinterest expose your book to readers who have never heard of you before.',
      stat: '10,000s of impressions',
    },
    {
      num: '02',
      title: 'Manual 1-on-1 Engagement',
      icon: UserPlus,
      description: 'Our specialists locate readers commenting on comparable books in your subgenre, engaging authentically so they follow your author account back.',
      stat: '500–1,000 true readers/mo',
    },
    {
      num: '03',
      title: 'Meta Ads Retarget Warm Traffic',
      icon: Target,
      description: 'Facebook video ads retarget viewers who engaged with your organic posts. Warm readers convert at up to 60% lower ad cost than cold audiences.',
      stat: 'Low Cost-Per-Click',
    },
    {
      num: '04',
      title: 'Amazon A+ Closes the Checkout',
      icon: ShoppingBag,
      description: 'When readers land on your Amazon listing, matching A+ video creative mirrors the social hook they watched, eliminating friction and driving the sale.',
      stat: 'Maximized Page Conversion',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#FAF5F0] border-b border-[#241811]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4924A] mb-2 block">
            One Unified Growth Sequence
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#241811] leading-tight mb-4">
            Each Channel Makes The Next Work Harder
          </h2>
          <p className="text-base sm:text-lg text-[#241811]/70">
            Most authors waste money piecing together a disconnected video editor here, a VA there, and an ad freelancer who doesn't read books. We run it as one compounding engine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative bg-[#F2E9DE] rounded-2xl border border-[#241811]/12 p-6 flex flex-col justify-between shadow-xs hover:-translate-y-1 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-3xl font-bold bg-gradient-to-r from-[#E8607A] to-[#D4924A] bg-clip-text text-transparent">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#FAF5F0] border border-[#241811]/10 flex items-center justify-center text-[#B03C5F]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#241811] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#241811]/75 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#241811]/10">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#B03C5F] block">
                    {step.stat}
                  </span>
                </div>

                {/* Arrow connector between steps on desktop */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-[#241811] text-white flex items-center justify-center text-xs shadow-md">
                    →
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

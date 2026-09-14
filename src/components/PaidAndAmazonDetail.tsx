import React from 'react';
import { CheckCircle2, ShieldAlert, Sparkles, MessageCircle } from 'lucide-react';

interface PaidAndAmazonDetailProps {
  onOpenChat: () => void;
}

export const PaidAndAmazonDetail: React.FC<PaidAndAmazonDetailProps> = ({ onOpenChat }) => {
  return (
    <section id="paid-content" className="py-20 md:py-28 bg-[#F2E9DE] border-b border-[#241811]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#3A78BD] mb-2 block">
            High-Converting Retail Channels
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#241811] leading-tight mb-4">
            Facebook Video Ads &amp; Amazon A+
          </h2>
          <p className="text-base sm:text-lg text-[#241811]/70">
            Beyond organic social feeds. We engineer assets for the exact surfaces where readers pull out their credit cards to buy or borrow on Kindle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Facebook Video Ads Card */}
          <div className="bg-[#FAF5F0] rounded-3xl border border-[#1877F2]/25 p-7 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">📘</span>
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#1877F2]/10 text-[#1877F2] border border-[#1877F2]/25">
                  Paid Conversion Engine
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1877F2] mb-3">
                Facebook Video Ads
              </h3>
              <p className="text-sm sm:text-base text-[#241811]/75 leading-relaxed mb-6">
                Meta's advertising network allows surgical targeting of readers by genre interest, reading age, and specific bestselling authors they follow. We script and edit 15–60 second video ads engineered to halt the feed and send warm traffic directly to your retail page.
              </p>

              <div className="space-y-2.5 mb-6">
                {[
                  'Hook-first scripts stopping cold scrollers within 2 seconds',
                  'Genre-matched visuals and emotional stakes for romance, fantasy & mystery',
                  'Multiple creative variations for continuous A/B testing',
                  'Optimized for dual Facebook Feed and Instagram placement',
                  'Warm retargeting audiences for highest return on ad spend',
                  'Covers any book in your catalog, new or backlist',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#241811]/85">
                    <CheckCircle2 className="w-4 h-4 text-[#1877F2] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#1877F2]/8 border border-[#1877F2]/20 text-xs text-[#241811]/80 leading-relaxed">
              <strong className="text-[#1877F2] font-bold">💡 Free Campaign Setup:</strong> Our dedicated ads team builds, targets, and configures your Meta campaign at zero additional labor cost. Ad spend itself remains 100% under your control inside your own Meta Ads Manager account.
            </div>
          </div>

          {/* Amazon A+ Content Card */}
          <div className="bg-[#FAF5F0] rounded-3xl border border-[#FF9900]/30 p-7 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">📦</span>
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FF9900]/10 text-[#965921] border border-[#FF9900]/30">
                  Retail Listing Closer
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#965921] mb-3">
                Amazon A+ Video Content
              </h3>
              <p className="text-sm sm:text-base text-[#241811]/75 leading-relaxed mb-6">
                When a reader lands on your Amazon product page, they are already considering a purchase. The Amazon A+ module is your final opportunity to seal the deal with short, high-impact video creative tailored to someone deciding whether to borrow or buy.
              </p>

              <div className="space-y-2.5 mb-6">
                {[
                  'Crafted to Amazon KDP video specifications and dimensions',
                  'Engineered for mid-decision readers, not cold social scrollers',
                  'Highlights emotional stakes, character tropes, and critical praise',
                  'Short-form format built specifically for mobile Amazon shoppers',
                  'Increases listing dwell time — a key organic Amazon algorithm signal',
                  'Works seamlessly with your Kindle cover, blurb & reviews',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#241811]/85">
                    <CheckCircle2 className="w-4 h-4 text-[#965921] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#FF9900]/10 border border-[#FF9900]/25 text-xs text-[#241811]/80 leading-relaxed">
              <strong className="text-[#965921] font-bold">✨ The Consistency Secret:</strong> When your Amazon A+ video matches the look, mood, and hook of the social video that brought the reader there, page conversion spikes dramatically. It feels like a natural continuation, never a generic catalog listing.
            </div>
          </div>
        </div>

        {/* Callout Strip */}
        <div className="mt-8 bg-[#FAF5F0] border border-[#241811]/12 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-[#241811]/80 text-center sm:text-left">
            <strong className="text-[#241811] font-semibold">Included in Authority &amp; Author Pro plans:</strong>{' '}
            Both Facebook ad creative + setup and Amazon A+ video assets come bundled automatically, or can be added onto any lower plan.
          </div>
          <button
            onClick={onOpenChat}
            className="shrink-0 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#B03C5F] hover:underline cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask an expert how it works →</span>
          </button>
        </div>
      </div>
    </section>
  );
};

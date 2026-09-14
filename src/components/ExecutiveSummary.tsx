import React from 'react';
import { PenTool, CheckCircle, Video, Users, Sparkles } from 'lucide-react';

export const ExecutiveSummary: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-[#F2E9DE] border-b border-[#241811]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Quote Column */}
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B03C5F] mb-3 block">
              The Author's Dilemma, Solved
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241811] leading-tight">
              We grow your author presence while you do what you do best —{' '}
              <span className="italic bg-gradient-to-r from-[#B03C5F] to-[#D4924A] bg-clip-text text-transparent">
                write.
              </span>
            </h2>
          </div>

          {/* Body Column */}
          <div className="lg:col-span-7 space-y-4 text-base sm:text-lg text-[#241811]/80 leading-relaxed">
            <p>
              In 2026, writing a brilliant book is only half the battle. Algorithms demand constant vertical video, but spending 25 hours a week wrestling with CapCut and audio trends leaves zero creative energy for writing your next chapter.
            </p>
            <p>
              <strong className="text-[#241811] font-semibold">Power of Books</strong> acts as your dedicated short-form studio and reader engagement team. We script, edit, and post retention-engineered videos every day across TikTok, Reels, Shorts, Pinterest, and Facebook Ads — plus sync matching Amazon A+ video content to close the purchase when readers land on your page.
            </p>

            <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-semibold text-[#241811]">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#2F9968] shrink-0" />
                <span>Any book in your store (new or backlist)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#2F9968] shrink-0" />
                <span>You select the tone and aesthetic style</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#2F9968] shrink-0" />
                <span>Manual 1-on-1 human reader discovery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#2F9968] shrink-0" />
                <span>No long-term contracts; cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

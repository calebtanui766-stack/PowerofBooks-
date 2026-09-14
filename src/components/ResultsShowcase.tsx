import React, { useState } from 'react';
import { TrendingUp, Users, Mail, Star, Sparkles } from 'lucide-react';

export const ResultsShowcase: React.FC = () => {
  const [activeDay, setActiveDay] = useState<'30' | '60' | '90'>('90');

  const milestones = {
    '30': {
      followers: '+650',
      views: '45,000+',
      reads: '1.8x Kindle reads',
      summary: 'Algorithm establishes genre testing baseline; saves and bookmark ratios start climbing.',
    },
    '60': {
      followers: '+1,800',
      views: '160,000+',
      reads: '3.4x Kindle reads',
      summary: 'High-completion videos consistently pushed into For You Pages; backlist sales awaken.',
    },
    '90': {
      followers: '+3,400 (340%)',
      views: '420,000+',
      reads: '6.2x Kindle reads',
      summary: 'Compounding audience momentum; comments convert to pre-orders, reviews, and newsletter fans.',
    },
  };

  const current = milestones[activeDay];

  return (
    <section id="results" className="py-20 md:py-28 bg-[#FAF5F0] border-b border-[#241811]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2F9968] mb-2 block">
            Verified Case Trajectory
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#241811] leading-tight mb-4">
            What 90 Days of Consistency Actually Delivers
          </h2>
          <p className="text-base sm:text-lg text-[#241811]/70">
            A sample performance curve from an indie romance author on our 3-month Growth plan combining 2 videos daily with manual engagement on TikTok.
          </p>

          {/* Interactive Milestone Selector */}
          <div className="inline-flex p-1 bg-[#F2E9DE] rounded-full border border-[#241811]/10 mt-6">
            {(['30', '60', '90'] as const).map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeDay === day
                    ? 'bg-[#241811] text-white shadow-xs'
                    : 'text-[#241811]/70 hover:text-[#241811]'
                }`}
              >
                Day {day} Milestone
              </button>
            ))}
          </div>
        </div>

        {/* Chart + Stats Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-8">
          {/* SVG Animated Chart */}
          <div className="lg:col-span-7 bg-[#F2E9DE] rounded-3xl border border-[#241811]/12 p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#241811]/60">
                  Compounding Algorithmic Trajectory
                </span>
                <span className="text-xs font-bold text-[#2F9968] flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  Day 1 to 90
                </span>
              </div>

              {/* Responsive SVG Curve */}
              <div className="w-full aspect-[16/7] relative my-2">
                <svg viewBox="0 0 600 220" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#E8607A" />
                      <stop offset="100%" stopColor="#D4924A" />
                    </linearGradient>
                    <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#E8607A" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#E8607A" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal Grid lines */}
                  <line x1="0" y1="50" x2="600" y2="50" stroke="rgba(36,24,17,0.08)" strokeDasharray="4 4" />
                  <line x1="0" y1="110" x2="600" y2="110" stroke="rgba(36,24,17,0.08)" strokeDasharray="4 4" />
                  <line x1="0" y1="170" x2="600" y2="170" stroke="rgba(36,24,17,0.08)" strokeDasharray="4 4" />

                  {/* Area fill */}
                  <path
                    d="M0,200 C80,195 140,185 200,165 C280,140 330,115 400,75 C470,45 520,28 600,15 L600,220 L0,220 Z"
                    fill="url(#chartFill)"
                  />

                  {/* Curved growth line */}
                  <path
                    d="M0,200 C80,195 140,185 200,165 C280,140 330,115 400,75 C470,45 520,28 600,15"
                    fill="none"
                    stroke="url(#chartGrad)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />

                  {/* Milestone Indicators */}
                  <circle cx="200" cy="165" r="5" fill="#E8607A" />
                  <circle cx="400" cy="75" r="5" fill="#D4924A" />
                  <circle cx="600" cy="15" r="7" fill="#B03C5F" />
                </svg>
              </div>

              <div className="flex justify-between text-xs font-semibold text-[#241811]/50 px-2 mt-2">
                <span>Day 1 (Testing)</span>
                <span>Day 30</span>
                <span>Day 60</span>
                <span>Day 90 (Compounded)</span>
              </div>
            </div>

            <div className="mt-4 p-4 rounded-2xl bg-[#FAF5F0] border border-[#241811]/10 text-xs text-[#241811]/80 leading-relaxed">
              <strong className="text-[#241811] font-bold">Milestone Focus (Day {activeDay}):</strong>{' '}
              {current.summary}
            </div>
          </div>

          {/* 4 Stats Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="bg-[#FAF5F0] border border-[#241811]/12 rounded-2xl p-5 flex flex-col justify-center text-center shadow-xs">
              <div className="font-serif text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#B03C5F] to-[#D4924A] bg-clip-text text-transparent">
                340%
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#241811]/60 mt-1">
                Follower Growth
              </div>
              <div className="text-[11px] text-[#241811]/45 mt-0.5">True genre readers</div>
            </div>

            <div className="bg-[#FAF5F0] border border-[#241811]/12 rounded-2xl p-5 flex flex-col justify-center text-center shadow-xs">
              <div className="font-serif text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#B03C5F] to-[#D4924A] bg-clip-text text-transparent">
                2,400+
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#241811]/60 mt-1">
                Email Signups
              </div>
              <div className="text-[11px] text-[#241811]/45 mt-0.5">From profile bio links</div>
            </div>

            <div className="bg-[#FAF5F0] border border-[#241811]/12 rounded-2xl p-5 flex flex-col justify-center text-center shadow-xs">
              <div className="font-serif text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#B03C5F] to-[#D4924A] bg-clip-text text-transparent">
                180+
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#241811]/60 mt-1">
                Verified Reviews
              </div>
              <div className="text-[11px] text-[#241811]/45 mt-0.5">Amazon &amp; Goodreads</div>
            </div>

            <div className="bg-[#FAF5F0] border border-[#241811]/12 rounded-2xl p-5 flex flex-col justify-center text-center shadow-xs">
              <div className="font-serif text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#B03C5F] to-[#D4924A] bg-clip-text text-transparent">
                6.2x
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#241811]/60 mt-1">
                Sales &amp; KU Lift
              </div>
              <div className="text-[11px] text-[#241811]/45 mt-0.5">Page reads compounded</div>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-[#241811]/50 max-w-2xl mx-auto leading-relaxed">
          *Illustrative performance based on historical client case study in the romance genre. Individual results vary based on cover appeal, blurb hook strength, pricing, and catalog size. We guarantee consistent professional execution, not speculative sales numbers.
        </p>
      </div>
    </section>
  );
};

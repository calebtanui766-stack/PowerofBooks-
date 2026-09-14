import React, { useState } from 'react';
import { PLATFORMS_DATA } from '../data/contentData';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';

interface PlatformShowcaseProps {
  onOpenBlogForPlatform?: (platformId: string) => void;
}

export const PlatformShowcase: React.FC<PlatformShowcaseProps> = ({ onOpenBlogForPlatform }) => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Organic' | 'Paid & Retail'>('All');

  const filteredPlatforms = PLATFORMS_DATA.filter((p) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Organic') return p.type === 'Organic';
    return p.type === 'Paid Ads' || p.type === 'Retail Conversion';
  });

  return (
    <section id="platforms" className="py-20 md:py-28 bg-[#EAE0D2]/50 border-b border-[#241811]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8607A] mb-2 block">
            Omnichannel Book Marketing
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#241811] leading-tight mb-4">
            Where We Put Your Books
          </h2>
          <p className="text-base sm:text-lg text-[#241811]/70">
            Organic virality, evergreen search discoverability, and retail-closing video assets — synchronized as one coordinated pipeline.
          </p>

          {/* Filter Chips */}
          <div className="inline-flex p-1 bg-[#FAF5F0] rounded-full border border-[#241811]/12 mt-6">
            {(['All', 'Organic', 'Paid & Retail'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-[#241811] text-white shadow-xs'
                    : 'text-[#241811]/70 hover:text-[#241811]'
                }`}
              >
                {filter === 'All' ? 'All 6 Channels' : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Platform Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlatforms.map((platform) => (
            <div
              key={platform.id}
              className="group relative bg-[#FAF5F0] rounded-2xl border border-[#241811]/12 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between overflow-hidden"
            >
              {/* Top Accent Line */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${platform.gradient}`}
              />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{platform.icon}</span>
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                      platform.type === 'Organic'
                        ? 'bg-[#2F9968]/10 text-[#2F9968] border-[#2F9968]/25'
                        : platform.type === 'Paid Ads'
                        ? 'bg-[#3A78BD]/10 text-[#3A78BD] border-[#3A78BD]/25'
                        : 'bg-[#D4924A]/10 text-[#965921] border-[#D4924A]/25'
                    }`}
                  >
                    {platform.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#241811] mb-1 group-hover:text-[#B03C5F] transition-colors">
                  {platform.name}
                </h3>
                <h4 className="text-xs font-semibold text-[#B03C5F] mb-3">
                  {platform.headline}
                </h4>

                <p className="text-sm text-[#241811]/75 leading-relaxed mb-4">
                  {platform.description}
                </p>
              </div>

              <div>
                <div className="pt-3 border-t border-[#241811]/10 space-y-1.5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#241811]/50 mb-1">
                    Key Performance Driver
                  </div>
                  {platform.keySignals.map((signal, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs text-[#241811]/70">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2F9968] shrink-0" />
                      <span>{signal}</span>
                    </div>
                  ))}
                </div>

                {onOpenBlogForPlatform && (
                  <button
                    onClick={() => onOpenBlogForPlatform(platform.id)}
                    className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#B03C5F] hover:underline cursor-pointer"
                  >
                    <span>Read Platform Breakdown</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

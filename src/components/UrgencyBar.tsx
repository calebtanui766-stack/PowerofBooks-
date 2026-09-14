import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface UrgencyBarProps {
  onClaimSpot: () => void;
}

export const UrgencyBar: React.FC<UrgencyBarProps> = ({ onClaimSpot }) => {
  return (
    <section className="py-10 bg-[#F2E9DE] border-b border-[#241811]/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF5F0] rounded-3xl border border-[#E8607A]/30 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-2 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E8607A]/15 text-[#B03C5F] text-[11px] font-bold uppercase tracking-wider">
              <Sparkles className="w-3 h-3" />
              Limited Monthly Specialist Cohort
            </div>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#241811]">
              Only 12 Author Spots Remaining This Month
            </h4>
            <p className="text-xs text-[#241811]/70 max-w-lg leading-relaxed">
              To ensure every book receives genuine manual reader outreach and dedicated genre-matched video scripting, each genre pod caps monthly onboarding to protect production quality.
            </p>

            {/* Visual capacity progress bar */}
            <div className="pt-1 max-w-xs">
              <div className="flex justify-between text-[10px] font-bold text-[#241811]/60 mb-1">
                <span>Cohort Capacity</span>
                <span className="text-[#B03C5F]">78% Full</span>
              </div>
              <div className="w-full h-2 bg-[#F2E9DE] rounded-full overflow-hidden border border-[#241811]/10">
                <div className="h-full w-[78%] bg-gradient-to-r from-[#E8607A] to-[#D4924A] rounded-full" />
              </div>
            </div>
          </div>

          <button
            onClick={onClaimSpot}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#E8607A] to-[#D4924A] shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>Claim Your Spot →</span>
          </button>
        </div>
      </div>
    </section>
  );
};

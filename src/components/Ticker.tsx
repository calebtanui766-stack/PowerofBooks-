import React from 'react';

export const Ticker: React.FC = () => {
  const items = [
    'BookTok & Reels Viral Growth',
    'Facebook Ads That Convert Readers',
    'Amazon A+ Short Video Creative',
    'ARC Reviews on Amazon & Goodreads',
    'Dark Romance · Romantasy · YA Fantasy',
    'Thriller · Mystery · Contemporary · Sci-Fi',
    '100% Real Manual Reader Outreach (No Bots)',
    'Any Book In Your Store (New or Backlist)',
    'Retention-Engineered 2-Second Hooks',
  ];

  return (
    <div className="bg-gradient-to-r from-[#E8607A] via-[#D4924A] to-[#E8607A] overflow-hidden py-3 text-white shadow-xs">
      <div className="animate-ticker flex items-center">
        {/* Render twice for seamless continuous scroll */}
        {[...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-6 px-6 shrink-0">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white/95">
              {text}
            </span>
            <span className="text-[#FAF5F0]/60 text-xs">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
};

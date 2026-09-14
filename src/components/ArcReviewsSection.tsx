import React from 'react';
import { BookMarked, ShoppingCart, Award, Target, CheckCircle2 } from 'lucide-react';

export const ArcReviewsSection: React.FC = () => {
  const points = [
    {
      icon: BookMarked,
      title: 'Genre-Matched Readers',
      desc: 'We match your book to avid reviewers who already read and review your specific subgenre on Amazon and Goodreads.',
    },
    {
      icon: ShoppingCart,
      title: 'Legitimate KU Borrows',
      desc: 'Reviewers borrow through Kindle Unlimited or legitimate review copies and read before reviewing — strictly zero rubber-stamp bots.',
    },
    {
      icon: Award,
      title: 'FTC & Amazon Compliant',
      desc: 'Honest, disclosed reviews posted to both Amazon and Goodreads — the two sites readers check before clicking Buy Now.',
    },
    {
      icon: Target,
      title: 'Active Target Tracking',
      desc: 'Each plan featuring reviews has a verified target we work toward: 15 on Accelerate, 30 on Authority, 50+ on Author Pro.',
    },
  ];

  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#FAF5F0] border-b border-[#241811]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2F9968] mb-2 block">
            Verified Social Proof
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#241811] leading-tight mb-4">
            ARC Reviews on Amazon &amp; Goodreads
          </h2>
          <p className="text-base sm:text-lg text-[#241811]/70">
            Videos attract new eyeballs. Verified reviews convince cautious readers to tap "Buy Now." Bundled directly into our higher-tier growth plans.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {points.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-[#F2E9DE] rounded-2xl border border-[#241811]/10 p-6 flex flex-col justify-between shadow-xs hover:-translate-y-1 transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#FAF5F0] text-[#2F9968] border border-[#241811]/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#241811] mb-2">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-[#241811]/75 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Callout Box */}
        <div className="bg-[#FAF5F0] rounded-3xl border border-[#2F9968]/30 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2F9968] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                What This Replaces For Authors
              </span>
              <p className="text-sm text-[#241811]/80 leading-relaxed">
                Traditional editorial reviews (Kirkus, Clarion) cost <strong className="text-[#241811]">$450–$750+ per review</strong> with 6–9 week wait times and zero algorithmic impact on Amazon search. ARC services charge separate monthly subscription fees without guaranteed completion.
              </p>
              <p className="text-xs text-[#241811]/65">
                When bundled into your Power of Books plan, ARC reviews deploy in lockstep with your daily video traffic to maximize checkout conversions.
              </p>
            </div>

            <div className="bg-[#F2E9DE] rounded-2xl border border-[#241811]/10 p-4 text-center shrink-0 w-full md:w-auto">
              <div className="text-xs font-bold uppercase tracking-wider text-[#241811]/60 mb-1">
                Included Review Targets
              </div>
              <div className="space-y-1 text-xs text-[#241811] font-semibold">
                <div>Accelerate (6 Mo): <span className="text-[#2F9968] font-bold">15 Reviews</span></div>
                <div>Authority (9 Mo): <span className="text-[#2F9968] font-bold">30 Reviews</span></div>
                <div>Author Pro (12 Mo): <span className="text-[#2F9968] font-bold">50+ Reviews</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Check, X, ShieldCheck } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#FAF5F0] border-b border-[#241811]/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2F9968] mb-2 block">
            The Clear Choice
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#241811] leading-tight mb-4">
            We're Built Exclusively for Indie Authors
          </h2>
          <p className="text-base sm:text-lg text-[#241811]/70">
            Most social agencies treat books like socks or protein powder. We are readers and BookTok natives who understand what makes readers tap "Buy Now."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Fragmented Freelancers Card */}
          <div className="bg-[#F2E9DE]/60 rounded-3xl border border-[#241811]/12 p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#241811]/50 px-3 py-1 rounded-full bg-[#241811]/5">
                  The Fragmented Route
                </span>
                <span className="text-lg">🥀</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#241811] mb-2">
                Piecing It Together Yourself
              </h3>
              <p className="text-xs sm:text-sm text-[#241811]/60 mb-6">
                Hiring individual freelancers who don't talk to each other and optimize for vanity metrics.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-[#241811]/70">
                {[
                  'A video editor on Upwork who never read fiction in their life',
                  'Agencies charging $500–$2,000/mo with long subscription lock-in contracts',
                  'Generic Canva templates that scream "amateur ad" on BookTok',
                  'Zero coordination between social hooks and Amazon listing conversion',
                  'You spend 10+ hours weekly managing, messaging, and approving assets',
                  'Separate expensive fees for ARC reviews ($400+ on Kirkus)',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-red-100 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3 h-3" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#241811]/10 text-xs text-[#241811]/50">
              High stress, low accountability, high recurring cost.
            </div>
          </div>

          {/* Power of Books Card */}
          <div className="bg-[#FAF5F0] rounded-3xl border-2 border-[#E8607A]/40 p-6 sm:p-8 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#E8607A]/15 to-transparent rounded-bl-full pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-white px-3 py-1 rounded-full bg-gradient-to-r from-[#E8607A] to-[#D4924A] shadow-xs">
                  ✅ Power of Books
                </span>
                <span className="text-lg">✨</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#241811] mb-2">
                One Unified, Coordinated System
              </h3>
              <p className="text-xs sm:text-sm text-[#B03C5F] font-semibold mb-6">
                Scripting, editing, manual engagement, Meta ads &amp; Amazon A+ under one roof.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-[#241811]">
                {[
                  'Genre-matched editors who devour romance, fantasy, and mystery',
                  'Starting at $99 one-time payment — zero recurring lock-in fees',
                  'Retention-engineered hooks designed for high completion and rewatch',
                  'Amazon A+ content synchronized to mirror social video aesthetics',
                  '100% done-for-you: you just write and check monthly trajectory reports',
                  'ARC review campaigns bundled into higher plans (Amazon + Goodreads)',
                  '7-Day Quality Revision Guarantee on every single order',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 font-medium">
                    <div className="w-4 h-4 rounded-full bg-[#2F9968]/20 text-[#2F9968] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#241811]/10 flex items-center justify-between">
              <span className="font-serif text-2xl font-bold text-[#241811]">
                Starting at $99
              </span>
              <span className="text-xs font-bold text-[#2F9968] flex items-center gap-1">
                <ShieldCheck className="w-4 h-4" />
                Risk-Free Quality Guarantee
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

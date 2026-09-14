import React from 'react';
import { MessageSquare, Users, HeartHandshake, Mail, TrendingUp, RefreshCw, BookmarkCheck, FileSpreadsheet, ShieldAlert } from 'lucide-react';

export const ManualEngagement: React.FC = () => {
  const tactics = [
    {
      icon: MessageSquare,
      title: 'Comment Mining',
      desc: 'We read active comments under trending BookTok/Reels in your subgenre to find readers openly declaring "I need a book just like this!"',
    },
    {
      icon: Users,
      title: 'Genre-Matched Following',
      desc: 'From your author account, we follow active readers who consistently engage with your category — dark romance, fantasy, cozy mystery, etc.',
    },
    {
      icon: HeartHandshake,
      title: 'Authentic 1-on-1 Replies',
      desc: 'We reply with genuine human messages — never automated templates — creating the natural connection that leads to follows and purchases.',
    },
    {
      icon: Mail,
      title: 'Warm Prospect Outreach',
      desc: 'When a reader leaves a high-intent comment ("Where can I get this?"), we follow up with a friendly, helpful direct note introducing your book.',
    },
    {
      icon: TrendingUp,
      title: 'Trope Trend Participation',
      desc: 'We participate in "recommend me a book" threads and trope challenges where active readers are specifically searching for their next read.',
    },
    {
      icon: RefreshCw,
      title: 'Comp-Author Audiences',
      desc: 'We engage directly with the passionate fanbases of bestselling authors in your subgenre who already adore stories just like yours.',
    },
    {
      icon: BookmarkCheck,
      title: 'Follow-Back Nurturing',
      desc: 'When a reader follows your account back, we keep the bond warm with story interactions until release day or promotion periods.',
    },
    {
      icon: FileSpreadsheet,
      title: '100% Logged & Handed Over',
      desc: 'Every follow, reply, and DM is meticulously tracked in your dashboard and handed to you at the end of your plan — zero black box secrets.',
    },
  ];

  return (
    <section id="engagement" className="py-20 md:py-28 bg-[#F2E9DE] border-b border-[#241811]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B03C5F] mb-2 block">
            Human Connection Over Automation
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#241811] leading-tight mb-4">
            How We Find Your True Readers
          </h2>
          <p className="text-base sm:text-lg text-[#241811]/70">
            Algorithms show your videos to strangers. Real conversations turn those strangers into loyal, paying fans.
          </p>
        </div>

        {/* Highlight Banner */}
        <div className="bg-[#FAF5F0] rounded-3xl border border-[#E8607A]/25 p-6 sm:p-8 mb-10 shadow-xs flex flex-col md:flex-row items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-[#E8607A]/15 border border-[#E8607A]/30 flex items-center justify-center text-2xl shrink-0">
            🎯
          </div>
          <div>
            <h3 className="font-serif text-2xl font-bold text-[#241811] mb-1">
              Expect 500 to 1,000 Genuine Readers in Month One
            </h3>
            <p className="text-sm text-[#241811]/75 leading-relaxed">
              Found and followed one-by-one by real specialists reading actual comment sections. From month two onward, we analyze which comp-author communities drive the highest kindle download rates, continually refining your reader acquisition funnel.
            </p>
          </div>
        </div>

        {/* 8 Tactics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10">
          {tactics.map((tactic, idx) => {
            const Icon = tactic.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAF5F0] rounded-2xl border border-[#241811]/10 p-5 shadow-xs hover:-translate-y-1 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#E8607A]/10 text-[#B03C5F] flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-[#241811] mb-1.5">{tactic.title}</h4>
                <p className="text-xs text-[#241811]/70 leading-relaxed">{tactic.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Safety & Policy Notice Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#FAF5F0] rounded-2xl border border-[#241811]/10 p-5 text-xs text-[#241811]/80 leading-relaxed flex items-start gap-3">
            <span className="text-lg shrink-0">🔒</span>
            <div>
              <strong className="text-[#241811] font-bold block mb-0.5">Strictly Zero Automation or Bots</strong>
              Every interaction is performed manually by human genre specialists within platform rate limits. We never use scripts that jeopardize your author account.
            </div>
          </div>

          <div className="bg-[#FAF5F0] rounded-2xl border border-[#241811]/10 p-5 text-xs text-[#241811]/80 leading-relaxed flex items-start gap-3">
            <span className="text-lg shrink-0">📌</span>
            <div>
              <strong className="text-[#241811] font-bold block mb-0.5">Focused On 1 Chosen Channel</strong>
              You choose the single platform for dedicated 1-on-1 outreach (TikTok, Instagram, or Shorts). All other connected accounts still receive daily video publishing for organic reach!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

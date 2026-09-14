import React from 'react';
import { TEAM_MEMBERS } from '../data/contentData';
import { Users, Award, Heart } from 'lucide-react';

export const GrowthTeam: React.FC = () => {
  return (
    <section id="team" className="py-20 md:py-28 bg-[#F2E9DE] border-b border-[#241811]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4924A] mb-2 block">
            Human Talent, Matched to Your Tropes
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#241811] leading-tight mb-4">
            Meet Your Growth Team
          </h2>
          <p className="text-base sm:text-lg text-[#241811]/70">
            Real people matched to the genres they devour in their personal time. Whichever channel you select for manual outreach, that specialist handles your account personally.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="bg-[#FAF5F0] rounded-3xl border border-[#241811]/10 p-6 flex flex-col justify-between shadow-xs hover:-translate-y-1 transition-all"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-13 h-13 rounded-full bg-gradient-to-tr from-[#E8607A] to-[#D4924A] text-white flex items-center justify-center font-serif text-lg font-bold shadow-xs">
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#241811]">{member.name}</h3>
                    <div className="text-xs font-semibold text-[#B03C5F]">{member.role}</div>
                  </div>
                </div>

                <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#241811]/5 border border-[#241811]/10 text-[11px] font-semibold text-[#241811]/70 mb-3">
                  {member.platform} · {member.experience} exp
                </div>

                <p className="text-xs sm:text-sm text-[#241811]/75 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}

          {/* 94+ Collective Card */}
          <div className="bg-gradient-to-br from-[#FAF5F0] to-[#EAE0D2] rounded-3xl border border-[#E8607A]/25 p-6 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-13 h-13 rounded-full bg-[#241811] text-white flex items-center justify-center font-serif text-lg font-bold shadow-xs">
                  +94
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#241811]">94 More Specialists</h3>
                  <div className="text-xs font-semibold text-[#B03C5F]">Every Subgenre We Serve</div>
                </div>
              </div>

              <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#E8607A]/10 border border-[#E8607A]/25 text-[11px] font-semibold text-[#B03C5F] mb-3">
                Global Network · English Fiction
              </div>

              <p className="text-xs sm:text-sm text-[#241811]/75 leading-relaxed">
                From cozy mystery in the Scottish highlands to urban paranormal romance and hard sci-fi, our extended team of editors and engagement specialists spans every category on the Kindle store.
              </p>
            </div>

            <div className="pt-4 border-t border-[#241811]/10 text-xs text-[#241811]/60 flex items-center gap-2">
              <Heart className="w-4 h-4 text-[#E8607A] shrink-0" />
              <span>We only assign editors who actively read your genre.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

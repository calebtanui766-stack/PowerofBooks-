import React from 'react';
import { ShieldCheck, CheckCircle2, Lock, RotateCcw } from 'lucide-react';

export const GuaranteeBanner: React.FC = () => {
  return (
    <section className="py-12 bg-[#FAF5F0] border-b border-[#241811]/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#E8607A]/10 via-[#F2E9DE] to-[#D4924A]/10 border border-[#E8607A]/30 rounded-3xl p-6 sm:p-10 shadow-xs">
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 text-center md:text-left">
            <div className="w-18 h-18 rounded-full bg-gradient-to-tr from-[#E8607A] to-[#D4924A] text-white flex items-center justify-center text-3xl shrink-0 shadow-md">
              🛡️
            </div>

            <div className="space-y-3">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#241811]">
                Real Growth. No Bots. Zero Financial Risk.
              </h3>
              <p className="text-sm text-[#241811]/80 leading-relaxed max-w-2xl">
                Every plan includes our <strong>7-Day Quality Guarantee</strong>. If you are not thoroughly delighted with the hook strength, editing polish, and audio matching of your first batch of videos, our team will revise them until they meet your exact standards.
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 text-xs font-semibold text-[#241811]/75 pt-1">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2F9968]" />
                  100% Manually-Engaged Readers
                </span>
                <span className="flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-[#2F9968]" />
                  OAuth Token Access (Never Passwords)
                </span>
                <span className="flex items-center gap-1.5">
                  <RotateCcw className="w-4 h-4 text-[#2F9968]" />
                  Revoke Account Access Anytime
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

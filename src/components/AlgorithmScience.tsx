import React from 'react';
import { ALGORITHM_SIGNALS } from '../data/contentData';
import { CheckCircle2, Zap } from 'lucide-react';

export const AlgorithmScience: React.FC = () => {
  return (
    <section id="algorithm" className="py-20 md:py-28 bg-[#FAF5F0] border-b border-[#241811]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8607A] mb-2 block">
            The Science of Retention
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#241811] leading-tight mb-4">
            How Short-Form Algorithms Distribute Books in 2026
          </h2>
          <p className="text-base sm:text-lg text-[#241811]/70">
            Social algorithms don't favor celebrities — they favor retention velocity. Here is the mathematical reality of what triggers viral distribution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Signal Weights Chart */}
          <div className="lg:col-span-6 bg-[#F2E9DE] rounded-3xl border border-[#241811]/12 p-6 sm:p-8 shadow-xs">
            <h3 className="font-serif text-2xl font-bold text-[#241811] mb-6 flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#D4924A]" />
              <span>Algorithmic Signal Hierarchy</span>
            </h3>

            <div className="space-y-5">
              {ALGORITHM_SIGNALS.map((signal, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-[#241811] mb-1.5">
                    <span>{signal.label}</span>
                    <span className="text-[#B03C5F] font-bold">{signal.weight}</span>
                  </div>
                  <div className="w-full h-2.5 bg-[#FAF5F0] rounded-full overflow-hidden border border-[#241811]/10">
                    <div
                      className="h-full bg-gradient-to-r from-[#E8607A] to-[#D4924A] rounded-full"
                      style={{ width: signal.weight }}
                    />
                  </div>
                  <div className="text-[11px] text-[#241811]/55 mt-1">
                    {signal.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video Engineering Blueprint */}
          <div className="lg:col-span-6 bg-[#FAF5F0] rounded-3xl border border-[#E8607A]/25 p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#B03C5F] block mb-1">
                Retention-First Blueprint
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#241811]">
                How We Engineer Every 15-Second Cut
              </h3>
              <p className="text-sm text-[#241811]/75 mt-2 leading-relaxed">
                Generic editors just put cover images over elevator music. We engineer each frame to hit the exact psychological triggers that satisfy algorithmic distribution tests.
              </p>
            </div>

            <div className="space-y-3.5">
              {[
                {
                  title: '1-to-2 Second Pattern-Interrupt Hook',
                  desc: 'Stops the thumb before the viewer can swipe away, eliminating early bounce rate.',
                },
                {
                  title: 'Seamless Rewatch Looping',
                  desc: 'The final sentence connects smoothly back to the opening hook, multiplying loop completion.',
                },
                {
                  title: 'High-Contrast Kinetic Typography',
                  desc: 'Over 80% of readers watch on mute in public; our on-screen captions ensure 100% comprehension.',
                },
                {
                  title: 'Subculture Audio Mapping',
                  desc: 'We match trending sounds specifically with your book’s micro-genre community.',
                },
                {
                  title: 'Emotional Save Triggers',
                  desc: 'Hooks engineered around cliffhangers and relatable tropes that compel viewers to bookmark for purchase.',
                },
              ].map((point, pIdx) => (
                <div key={pIdx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#2F9968] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-bold text-[#241811]">{point.title}</h4>
                    <p className="text-xs text-[#241811]/70 leading-relaxed mt-0.5">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-[#E8607A]/10 border border-[#E8607A]/25 text-xs text-[#241811]/85 leading-relaxed font-medium">
              💡 <strong>The Result:</strong> High-completion videos get pushed by recommendation engines beyond your immediate follower circle onto the For You Page, generating a steady stream of cold readers every single day.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

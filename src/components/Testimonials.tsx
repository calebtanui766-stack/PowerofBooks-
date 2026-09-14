import React from 'react';
import { TESTIMONIALS_DATA } from '../data/contentData';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#F2E9DE] border-b border-[#241811]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B03C5F] mb-2 block">
            Author Social Proof
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#241811] leading-tight mb-4">
            They Were Exactly Where You Are Now
          </h2>
          <p className="text-base sm:text-lg text-[#241811]/70">
            Indie authors across romance, romantasy, fantasy, and mystery who stopped burning out on content and started building automated audience engines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAF5F0] rounded-3xl border border-[#241811]/12 p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:-translate-y-1 transition-all relative overflow-hidden"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-[#241811]/5 pointer-events-none" />

              <div>
                <div className="flex items-center gap-1 text-[#D4924A] mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4924A]" />
                  ))}
                </div>

                <p className="font-serif italic text-base sm:text-lg text-[#241811] leading-relaxed mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#241811]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="text-sm font-bold text-[#241811]">{item.author}</h4>
                  <div className="text-xs text-[#241811]/60 font-medium">{item.genre}</div>
                </div>

                <span className="inline-block px-3 py-1 rounded-full bg-[#2F9968]/10 text-[#2F9968] text-[11px] font-bold tracking-wide self-start sm:self-auto border border-[#2F9968]/20">
                  {item.achievement}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

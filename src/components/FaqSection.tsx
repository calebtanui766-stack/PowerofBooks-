import React, { useState } from 'react';
import { FAQS_DATA } from '../data/contentData';
import { ChevronDown, Search, HelpCircle, MessageCircle } from 'lucide-react';

interface FaqSectionProps {
  onOpenChat: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenChat }) => {
  const [openId, setOpenId] = useState<string | null>('exp');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'General', 'Pricing & Plans', 'Platforms & Video', 'Security & Accounts', 'ARC Reviews'];

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FAF5F0] border-b border-[#241811]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8607A] mb-2 block">
            Common Questions
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#241811] leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-[#241811]/70">
            Everything you need to know about video turnaround, account permissions, and algorithmic growth.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="space-y-4 mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#241811]/40" />
            <input
              type="text"
              placeholder="Search questions (e.g. security, pricing, backlist, ads)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#F2E9DE] border border-[#241811]/10 text-sm text-[#241811] placeholder:text-[#241811]/40 focus:outline-hidden focus:border-[#E8607A] transition-colors"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#241811] text-white shadow-xs'
                    : 'bg-[#F2E9DE] text-[#241811]/70 hover:text-[#241811] border border-[#241811]/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-[#F2E9DE] rounded-3xl border border-[#241811]/10 p-8">
              <HelpCircle className="w-8 h-8 text-[#241811]/30 mx-auto mb-2" />
              <h4 className="font-serif text-lg font-bold text-[#241811]">No matching questions found</h4>
              <p className="text-xs text-[#241811]/60 mt-1 mb-4">
                Have a specific question not covered here? Our instant AI assistant or founder team can help.
              </p>
              <button
                onClick={onOpenChat}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#E8607A] to-[#D4924A] shadow-xs cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Ask Our Author Assistant</span>
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`bg-[#F2E9DE] rounded-2xl border transition-all overflow-hidden ${
                    isOpen ? 'border-[#E8607A]/40 shadow-xs' : 'border-[#241811]/10 hover:border-[#241811]/25'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left px-5 sm:px-6 py-4.5 flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#241811] cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <div
                      className={`w-7 h-7 rounded-full border border-[#241811]/15 flex items-center justify-center shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 bg-[#E8607A] text-white border-transparent' : 'text-[#241811]/60'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#241811]/75 leading-relaxed border-t border-[#241811]/5">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

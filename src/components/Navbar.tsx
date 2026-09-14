import React, { useState, useEffect } from 'react';
import { BookOpen, Menu, X, Sparkles, MessageCircle } from 'lucide-react';

interface NavbarProps {
  onOpenOnboarding: () => void;
  onOpenBlog: (id?: string) => void;
  onOpenChat: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOnboarding, onOpenBlog, onOpenChat }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-[#FAF5F0]/95 backdrop-blur-md shadow-xs border-b border-[#241811]/10 py-3'
            : 'bg-[#FAF5F0] border-b border-[#241811]/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group text-left">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E8607A] animate-pulse" />
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#241811] flex items-center gap-1.5">
                Power of Books
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#241811]/60 font-semibold -mt-1 hidden sm:block">
                For Indie Authors
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#241811]/75">
            <a href="#platforms" className="hover:text-[#B03C5F] transition-colors">Platforms</a>
            <a href="#video-styles" className="hover:text-[#B03C5F] transition-colors">Video Styles</a>
            <a href="#how-it-works" className="hover:text-[#B03C5F] transition-colors">How It Works</a>
            <a href="#algorithm" className="hover:text-[#B03C5F] transition-colors">Algorithm</a>
            <a href="#reviews" className="hover:text-[#B03C5F] transition-colors">ARC Reviews</a>
            <a href="#team" className="hover:text-[#B03C5F] transition-colors">Specialists</a>
            <a href="#pricing" className="hover:text-[#B03C5F] transition-colors">Pricing</a>
            <a href="#results" className="hover:text-[#B03C5F] transition-colors">Results</a>
            <a href="#faq" className="hover:text-[#B03C5F] transition-colors">FAQ</a>
            <button
              onClick={() => onOpenBlog()}
              className="text-[#B03C5F] font-semibold hover:underline cursor-pointer flex items-center gap-1"
            >
              <BookOpen className="w-3.5 h-3.5" />
              Guides
            </button>
          </nav>

          {/* CTA Group */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenChat}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-[#241811]/15 text-xs font-semibold text-[#241811] hover:bg-[#241811]/5 transition-colors cursor-pointer"
              title="Ask a quick question"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#B03C5F]" />
              <span>Ask AI</span>
            </button>

            <button
              onClick={onOpenOnboarding}
              className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#E8607A] to-[#D4924A] shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 mr-1.5" />
              Get Started From $99
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#241811] hover:bg-[#241811]/5 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={closeMenu}
          />
          <div className="relative ml-auto w-full max-w-xs h-full bg-[#FAF5F0] border-l border-[#241811]/10 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-[#241811]/10">
                <span className="font-serif text-xl font-bold text-[#241811]">Menu</span>
                <button
                  onClick={closeMenu}
                  className="p-1.5 rounded-full hover:bg-[#241811]/10 text-[#241811]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-4 mt-6 text-base font-medium text-[#241811]">
                <a href="#platforms" onClick={closeMenu} className="hover:text-[#B03C5F]">Platforms</a>
                <a href="#video-styles" onClick={closeMenu} className="hover:text-[#B03C5F]">Video Styles</a>
                <a href="#how-it-works" onClick={closeMenu} className="hover:text-[#B03C5F]">How It Works</a>
                <a href="#algorithm" onClick={closeMenu} className="hover:text-[#B03C5F]">Algorithm Science</a>
                <a href="#reviews" onClick={closeMenu} className="hover:text-[#B03C5F]">ARC Reviews</a>
                <a href="#team" onClick={closeMenu} className="hover:text-[#B03C5F]">Growth Team</a>
                <a href="#pricing" onClick={closeMenu} className="hover:text-[#B03C5F]">Pricing Plans</a>
                <a href="#results" onClick={closeMenu} className="hover:text-[#B03C5F]">Results & Proof</a>
                <a href="#faq" onClick={closeMenu} className="hover:text-[#B03C5F]">FAQ</a>
                <button
                  onClick={() => {
                    closeMenu();
                    onOpenBlog();
                  }}
                  className="text-left text-[#B03C5F] font-semibold py-1"
                >
                  Author Guides & Blog
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-[#241811]/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  closeMenu();
                  onOpenChat();
                }}
                className="w-full py-2.5 rounded-xl border border-[#241811]/20 text-xs font-semibold text-[#241811] flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#B03C5F]" />
                Ask Author Assistant
              </button>
              <button
                onClick={() => {
                  closeMenu();
                  onOpenOnboarding();
                }}
                className="w-full py-3 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#E8607A] to-[#D4924A] shadow-md text-center"
              >
                Start Onboarding →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

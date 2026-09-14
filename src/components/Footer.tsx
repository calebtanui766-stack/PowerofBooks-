import React from 'react';

interface FooterProps {
  onOpenPage: (pageId: string) => void;
  onOpenBlog: (id?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPage, onOpenBlog }) => {
  return (
    <footer className="bg-[#0E0906] text-white/80 pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E8607A]" />
              <span className="font-serif text-2xl font-bold text-white tracking-tight">
                Power of Books
              </span>
            </div>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed max-w-sm">
              Full-service short-form book video management and manual reader outreach for indie fiction authors. TikTok, Instagram Reels, YouTube Shorts, Pinterest, Facebook Video Ads, and Amazon A+ content.
            </p>
            <div className="text-xs text-white/40 space-y-1">
              <div>Serving authors worldwide · Payments processed in USD via PayPal</div>
              <div>Headquartered in Kenya · Operating globally since 2023</div>
            </div>
          </div>

          {/* Service Links */}
          <div className="space-y-3 text-xs sm:text-sm">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Service
            </h4>
            <ul className="space-y-2 text-white/65">
              <li><a href="#platforms" className="hover:text-[#E8607A] transition-colors">All 6 Channels</a></li>
              <li><a href="#video-styles" className="hover:text-[#E8607A] transition-colors">Video Styles</a></li>
              <li><a href="#paid-content" className="hover:text-[#E8607A] transition-colors">Meta Ads &amp; Amazon A+</a></li>
              <li><a href="#reviews" className="hover:text-[#E8607A] transition-colors">ARC Review Campaigns</a></li>
              <li><a href="#how-it-works" className="hover:text-[#E8607A] transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="hover:text-[#E8607A] transition-colors">Pricing Plans</a></li>
              <li><a href="#results" className="hover:text-[#E8607A] transition-colors">Author Results</a></li>
              <li><a href="#faq" className="hover:text-[#E8607A] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-3 text-xs sm:text-sm">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-2 text-white/65">
              <li>
                <button onClick={() => onOpenPage('about')} className="hover:text-[#E8607A] transition-colors text-left cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onOpenBlog()} className="hover:text-[#E8607A] transition-colors text-left cursor-pointer">
                  Author Guides &amp; Blog
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPage('contact')} className="hover:text-[#E8607A] transition-colors text-left cursor-pointer">
                  Contact Us
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPage('careers')} className="hover:text-[#E8607A] transition-colors text-left cursor-pointer">
                  Careers (Remote)
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPage('press')} className="hover:text-[#E8607A] transition-colors text-left cursor-pointer">
                  Press &amp; Media Kit
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-3 text-xs sm:text-sm">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Legal &amp; Policies
            </h4>
            <ul className="space-y-2 text-white/65">
              <li>
                <button onClick={() => onOpenPage('privacy')} className="hover:text-[#E8607A] transition-colors text-left cursor-pointer">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPage('terms')} className="hover:text-[#E8607A] transition-colors text-left cursor-pointer">
                  Terms of Service
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPage('refund')} className="hover:text-[#E8607A] transition-colors text-left cursor-pointer">
                  Refund &amp; Quality Policy
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPage('cookies')} className="hover:text-[#E8607A] transition-colors text-left cursor-pointer">
                  Cookie Policy
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPage('dmca')} className="hover:text-[#E8607A] transition-colors text-left cursor-pointer">
                  DMCA Copyright Notice
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPage('disclaimer')} className="hover:text-[#E8607A] transition-colors text-left cursor-pointer">
                  Earnings Disclaimer
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© 2026 Power of Books. All rights reserved. Built for indie authors who deserve to be found.</p>
          <p className="text-[11px] text-white/35 text-center sm:text-right">
            Power of Books operates as an independent studio · Not affiliated with TikTok, ByteDance, Meta, Amazon, or Google.
          </p>
        </div>
      </div>
    </footer>
  );
};

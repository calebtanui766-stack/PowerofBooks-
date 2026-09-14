import React, { useEffect } from 'react';
import { BLOG_POSTS } from '../data/contentData';
import { X, BookOpen, Clock, ArrowLeft, Mail, Shield, CheckCircle2 } from 'lucide-react';

interface PageModalProps {
  pageId: string | null;
  onClose: () => void;
  onOpenBlog?: (id: string) => void;
}

export const PageModal: React.FC<PageModalProps> = ({ pageId, onClose, onOpenBlog }) => {
  useEffect(() => {
    if (pageId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [pageId]);

  if (!pageId) return null;

  // Check if it's a blog post
  const isBlogPost = pageId.startsWith('blog-') || pageId === 'blog';
  const blogPost = BLOG_POSTS.find((b) => b.id === pageId);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/65 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#FAF5F0] rounded-3xl border border-[#241811]/15 shadow-2xl p-6 sm:p-10 my-8 overflow-hidden text-[#241811]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#241811]/5 hover:bg-[#241811]/10 text-[#241811] transition-colors cursor-pointer z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content Router */}
        {pageId === 'blog' ? (
          /* Blog Directory */
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B03C5F] block mb-1">
                Author Resources &amp; Platform Data
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#241811]">
                The Power of Books Knowledge Base
              </h2>
              <p className="text-sm text-[#241811]/75 mt-1">
                Unfiltered platform metrics and tactical breakdowns written specifically for fiction authors.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {BLOG_POSTS.map((post) => (
                <div
                  key={post.id}
                  onClick={() => onOpenBlog && onOpenBlog(post.id)}
                  className="bg-[#F2E9DE] rounded-2xl border border-[#241811]/10 p-5 hover:border-[#E8607A]/40 transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#E8607A]/15 text-[#B03C5F]">
                      {post.platform}
                    </span>
                    <span className="text-xs text-[#241811]/50 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#241811] group-hover:text-[#B03C5F] transition-colors mb-1.5">
                    {post.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#241811]/75 leading-relaxed mb-3">
                    {post.snippet}
                  </p>
                  <span className="text-xs font-bold text-[#B03C5F] group-hover:underline">
                    Read the full strategic breakdown →
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : blogPost ? (
          /* Individual Blog Article */
          <div className="space-y-6">
            <button
              onClick={() => onOpenBlog && onOpenBlog('blog')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#241811]/60 hover:text-[#B03C5F] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all author guides</span>
            </button>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#E8607A]/15 text-[#B03C5F]">
                  {blogPost.platform}
                </span>
                <span className="text-xs text-[#241811]/50">{blogPost.readTime}</span>
              </div>
              <h1 className="font-serif text-2xl sm:text-4xl font-bold text-[#241811] leading-tight">
                {blogPost.title}
              </h1>
            </div>

            {/* Key Statistics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#F2E9DE] rounded-2xl p-4 border border-[#241811]/10">
              {blogPost.stats.map((stat, sIdx) => (
                <div key={sIdx} className="text-center">
                  <div className="font-serif text-xl sm:text-2xl font-bold text-[#B03C5F]">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#241811]/60 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Executive Takeaways Box */}
            <div className="bg-[#FAF5F0] rounded-2xl border border-[#E8607A]/25 p-5 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#B03C5F]">
                Strategic Takeaways for Fiction Authors
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#241811]/85">
                {blogPost.keyTakeaways.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2F9968] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Body Prose */}
            <div className="space-y-4 text-xs sm:text-base text-[#241811]/80 leading-relaxed pt-2">
              {blogPost.fullContent.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-6 border-t border-[#241811]/10 flex justify-between items-center">
              <span className="text-xs text-[#241811]/50">Written for Indie Authors · Updated 2026</span>
              <a
                href="#pricing"
                onClick={onClose}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#B03C5F] hover:underline"
              >
                <span>Explore {blogPost.platform} video packages →</span>
              </a>
            </div>
          </div>
        ) : pageId === 'about' ? (
          /* About Us */
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B03C5F] block mb-1">Our Story</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#241811]">About Power of Books</h2>
            <div className="space-y-4 text-sm sm:text-base text-[#241811]/80 leading-relaxed">
              <p>
                Power of Books was founded in 2023 out of a deep frustration with generic marketing agencies. We saw brilliant indie authors writing heart-wrenching, breathtaking stories — only for those manuscripts to disappear into the noise because the author lacked the time to produce 60 short videos a month.
              </p>
              <p>
                We built Power of Books to be the dedicated growth partner indie authors deserve: operated by avid readers who understand your tropes, trained on retention algorithms, and committed to high-craft human execution without fake bots.
              </p>
              <h3 className="font-serif text-2xl font-bold text-[#241811] pt-2">Our Core Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-sm">
                <div className="bg-[#F2E9DE] p-4 rounded-xl border border-[#241811]/10">
                  <strong className="block text-[#241811] mb-1">1. Readers First</strong>
                  We ask what stops a real human scroller before typing a single line of script.
                </div>
                <div className="bg-[#F2E9DE] p-4 rounded-xl border border-[#241811]/10">
                  <strong className="block text-[#241811] mb-1">2. No Vanity Metrics</strong>
                  We care about followers who actually buy and read your books, not bought bots.
                </div>
                <div className="bg-[#F2E9DE] p-4 rounded-xl border border-[#241811]/10">
                  <strong className="block text-[#241811] mb-1">3. Transparent Partnership</strong>
                  Zero long lock-in contracts; you own your accounts and reader lists completely.
                </div>
                <div className="bg-[#F2E9DE] p-4 rounded-xl border border-[#241811]/10">
                  <strong className="block text-[#241811] mb-1">4. Retention Science</strong>
                  Every video cut, sound cue, and subtitle is tested against current 2026 distribution metrics.
                </div>
              </div>
            </div>
          </div>
        ) : pageId === 'contact' ? (
          /* Contact Us */
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B03C5F] block mb-1">Direct Support</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#241811]">Contact Our Team</h2>
            <p className="text-sm text-[#241811]/75">
              We respond to all author inquiries within 24 hours on business days.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="bg-[#F2E9DE] p-5 rounded-2xl border border-[#241811]/10">
                <h4 className="font-bold text-[#241811] mb-1">General Inquiries &amp; New Authors</h4>
                <p className="text-[#241811]/70 mb-2">Questions about plans, custom catalog setup, or turnaround.</p>
                <a href="mailto:gilbertkimutai616@gmail.com" className="text-[#B03C5F] font-bold hover:underline">
                  gilbertkimutai616@gmail.com
                </a>
              </div>
              <div className="bg-[#F2E9DE] p-5 rounded-2xl border border-[#241811]/10">
                <h4 className="font-bold text-[#241811] mb-1">Active Client Concierge</h4>
                <p className="text-[#241811]/70 mb-2">Support for existing campaigns, video revisions, or report audits.</p>
                <a href="mailto:gilbertkimutai616@gmail.com" className="text-[#B03C5F] font-bold hover:underline">
                  gilbertkimutai616@gmail.com
                </a>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAF5F0] border border-[#241811]/12 text-xs text-[#241811]/70">
              Operational Base: Kenya · Servicing authors globally across US, UK, Canada, Australia, and worldwide.
            </div>
          </div>
        ) : pageId === 'privacy' ? (
          /* Privacy Policy */
          <div className="space-y-5 text-xs sm:text-sm text-[#241811]/80 leading-relaxed">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B03C5F] block mb-1">Legal</span>
              <h2 className="font-serif text-3xl font-bold text-[#241811]">Privacy Policy</h2>
              <p className="text-xs text-[#241811]/50">Effective &amp; Last Updated: 2026</p>
            </div>
            <p>
              Power of Books ("we," "our," or "us") respects your privacy. We collect author contact details, book blurbs, and creative assets solely to produce and publish content on your behalf.
            </p>
            <h4 className="font-bold text-[#241811]">1. Account Access &amp; Tokens</h4>
            <p>
              We connect to your social media channels strictly via official OAuth 2.0 API protocols. We never request, receive, or store your passwords.
            </p>
            <h4 className="font-bold text-[#241811]">2. Data Protection</h4>
            <p>
              We never sell or rent your personal data to third parties. Payments are handled externally via PayPal; credit card numbers never touch our servers.
            </p>
            <h4 className="font-bold text-[#241811]">3. Rights</h4>
            <p>
              You can request full deletion of your submission records and revoke API tokens anytime by emailing gilbertkimutai616@gmail.com.
            </p>
          </div>
        ) : pageId === 'terms' ? (
          /* Terms of Service */
          <div className="space-y-5 text-xs sm:text-sm text-[#241811]/80 leading-relaxed">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B03C5F] block mb-1">Legal</span>
              <h2 className="font-serif text-3xl font-bold text-[#241811]">Terms of Service</h2>
              <p className="text-xs text-[#241811]/50">Effective &amp; Last Updated: 2026</p>
            </div>
            <p>
              By purchasing any plan from Power of Books, you agree to these Terms. We provide done-for-you short-form video production and social media management services.
            </p>
            <h4 className="font-bold text-[#241811]">1. Content Ownership</h4>
            <p>
              Upon full payment, you retain 100% intellectual property ownership of the final produced video assets for your books.
            </p>
            <h4 className="font-bold text-[#241811]">2. Algorithmic Disclaimers</h4>
            <p>
              While we engineer every video according to verified retention standards, social media algorithms fluctuate. We guarantee professional video delivery and manual outreach, not specific royalty figures.
            </p>
          </div>
        ) : pageId === 'refund' ? (
          /* Refund Policy */
          <div className="space-y-5 text-xs sm:text-sm text-[#241811]/80 leading-relaxed">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B03C5F] block mb-1">Policy</span>
              <h2 className="font-serif text-3xl font-bold text-[#241811]">7-Day Quality Guarantee &amp; Refund Policy</h2>
            </div>
            <p>
              We offer a straightforward <strong>7-Day Quality Revision Guarantee</strong>. If you are not satisfied with the editing polish or audio choices of your first batch of videos, we will revise them at zero additional cost until you are satisfied.
            </p>
            <p>
              Because video production involves dedicated labor and custom scripting once initiated, refund requests outside of verified delivery failure are evaluated on a case-by-case basis.
            </p>
          </div>
        ) : (
          /* General Legal Fallback */
          <div className="space-y-4 text-xs sm:text-sm text-[#241811]/80 leading-relaxed">
            <h2 className="font-serif text-3xl font-bold text-[#241811] capitalize">
              {pageId.replace('-', ' ')}
            </h2>
            <p>
              Power of Books operates transparently in full compliance with international consumer regulations and digital intellectual property guidelines.
            </p>
            <p>
              For inquiries regarding {pageId}, please contact our legal desk at <a href="mailto:gilbertkimutai616@gmail.com" className="text-[#B03C5F] underline font-bold">gilbertkimutai616@gmail.com</a>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

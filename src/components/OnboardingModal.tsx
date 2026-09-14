import React, { useState, useEffect } from 'react';
import { PricingPlan } from '../types';
import { X, CheckCircle2, ArrowRight, ArrowLeft, Upload, Sparkles, BookOpen, Layers } from 'lucide-react';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: PricingPlan | null;
}

export const OnboardingModal: React.FC<OnboardingModalProps> = ({
  isOpen,
  onClose,
  initialPlan,
}) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form State
  const [bookTitle, setBookTitle] = useState('');
  const [genre, setGenre] = useState('Romance');
  const [subgenre, setSubgenre] = useState('');
  const [targetAge, setTargetAge] = useState('18–25');
  const [blurb, setBlurb] = useState('');
  const [amazonUrl, setAmazonUrl] = useState('');
  const [selectedStyles, setSelectedStyles] = useState<string[]>(['Cinematic Trailer']);
  const [notes, setNotes] = useState('');

  const [aesthetic, setAesthetic] = useState('');
  const [avoidNotes, setAvoidNotes] = useState('');

  const [authorName, setAuthorName] = useState('');
  const [authorEmail, setAuthorEmail] = useState('');
  const [connectedPlatforms, setConnectedPlatforms] = useState<string[]>([
    'TikTok',
    'Instagram Reels',
    'YouTube Shorts',
  ]);
  const [manualPlatform, setManualPlatform] = useState<string>('TikTok');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setStep(1);
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const toggleStyle = (style: string) => {
    if (selectedStyles.includes(style)) {
      setSelectedStyles(selectedStyles.filter((s) => s !== style));
    } else if (selectedStyles.length < 2) {
      setSelectedStyles([...selectedStyles, style]);
    }
  };

  const togglePlatform = (plat: string) => {
    if (connectedPlatforms.includes(plat)) {
      if (connectedPlatforms.length > 1) {
        setConnectedPlatforms(connectedPlatforms.filter((p) => p !== plat));
      }
    } else {
      setConnectedPlatforms([...connectedPlatforms, plat]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookTitle.trim() || !authorName.trim() || !authorEmail.trim()) {
      alert('Please provide your book title, author name, and contact email.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Send onboarding details via formsubmit
      const payload = {
        _subject: `New Author Intake: ${bookTitle} (${authorName})`,
        authorName,
        authorEmail,
        planSelected: initialPlan ? initialPlan.name : 'Starter ($99)',
        bookTitle,
        genre,
        subgenre,
        targetAge,
        blurb,
        amazonUrl,
        selectedStyles: selectedStyles.join(', '),
        aesthetic,
        avoidNotes,
        connectedPlatforms: connectedPlatforms.join(', '),
        manualEngagementPlatform: manualPlatform,
        notes,
      };

      await fetch('https://formsubmit.co/gilbertkimutai616@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      }).catch((err) => console.log('Form submit silent note:', err));
    } catch (err) {
      console.log('Submission handled:', err);
    } finally {
      setIsSubmitting(false);
      setStep(5);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs">
      <div
        className="relative w-full max-w-2xl bg-[#FAF5F0] rounded-3xl border border-[#241811]/15 shadow-2xl p-6 sm:p-10 my-8 overflow-hidden text-[#241811]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#241811]/5 hover:bg-[#241811]/10 text-[#241811] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Progress Bar (Steps 1 to 4) */}
        {step <= 4 && (
          <div className="flex gap-2 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`h-1.5 flex-1 rounded-full transition-colors ${
                  step >= i ? 'bg-gradient-to-r from-[#E8607A] to-[#D4924A]' : 'bg-[#241811]/10'
                }`}
              />
            ))}
          </div>
        )}

        {/* STEP 1: Welcome */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B03C5F] block mb-1">
                Step 1 of 4 · Welcome
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#241811]">
                Let's Set Up Your Book Campaign
              </h2>
              <p className="text-sm sm:text-base text-[#241811]/75 mt-2 leading-relaxed">
                {initialPlan ? (
                  <>
                    You selected the <strong className="text-[#241811]">{initialPlan.name} Plan</strong> (${initialPlan.priceUsd}, {initialPlan.durationLabel}).
                  </>
                ) : (
                  'Complete this short 3-minute questionnaire so our genre specialists can study your tropes, manuscript tone, and target readership.'
                )}
              </p>
            </div>

            <div className="bg-[#F2E9DE] rounded-2xl p-5 border border-[#241811]/10 space-y-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5 font-semibold text-[#241811]">
                <CheckCircle2 className="w-4 h-4 text-[#2F9968]" />
                <span>Share your blurb, cover link, and subgenre tropes</span>
              </div>
              <div className="flex items-center gap-2.5 font-semibold text-[#241811]">
                <CheckCircle2 className="w-4 h-4 text-[#2F9968]" />
                <span>Choose your preferred video styles and aesthetic direction</span>
              </div>
              <div className="flex items-center gap-2.5 font-semibold text-[#241811]">
                <CheckCircle2 className="w-4 h-4 text-[#2F9968]" />
                <span>Select your channels (we use secure OAuth — never passwords)</span>
              </div>
              <div className="flex items-center gap-2.5 font-semibold text-[#241811]">
                <CheckCircle2 className="w-4 h-4 text-[#2F9968]" />
                <span>Our production team begins scripting your first batch immediately</span>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#E8607A] to-[#D4924A] shadow-md hover:scale-[1.02] cursor-pointer"
              >
                <span>Continue to Book Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Book Details */}
        {step === 2 && (
          <div className="space-y-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B03C5F] block mb-1">
                Step 2 of 4 · Story &amp; Tropes
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#241811]">
                Tell Us About Your Book
              </h2>
              <p className="text-xs sm:text-sm text-[#241811]/70 mt-1">
                We craft hooks directly around your most compelling conflict or quote.
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-bold text-[#241811] mb-1">Book Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Crown of Thorns and Ash"
                  value={bookTitle}
                  onChange={(e) => setBookTitle(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F2E9DE] border border-[#241811]/15 focus:outline-hidden focus:border-[#E8607A]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#241811] mb-1">Primary Genre *</label>
                  <select
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#F2E9DE] border border-[#241811]/15 focus:outline-hidden focus:border-[#E8607A]"
                  >
                    <option>Romance</option>
                    <option>Romantasy / Fantasy Romance</option>
                    <option>High / Epic Fantasy</option>
                    <option>YA Fantasy / Fiction</option>
                    <option>Contemporary Romance</option>
                    <option>Dark Romance</option>
                    <option>Thriller &amp; Psychological Suspense</option>
                    <option>Mystery / Cozy Mystery</option>
                    <option>Sci-Fi &amp; Cyberpunk</option>
                    <option>Literary Fiction</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-[#241811] mb-1">Subgenre &amp; Tropes</label>
                  <input
                    type="text"
                    placeholder="e.g. enemies-to-lovers, forced proximity, fae court"
                    value={subgenre}
                    onChange={(e) => setSubgenre(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F2E9DE] border border-[#241811]/15 focus:outline-hidden focus:border-[#E8607A]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-[#241811] mb-1">
                  Short Blurb or 1-Sentence High-Concept Hook *
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. An assassin is hired to kill the crowned prince, only to discover he is the only one who can break her blood curse..."
                  value={blurb}
                  onChange={(e) => setBlurb(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F2E9DE] border border-[#241811]/15 focus:outline-hidden focus:border-[#E8607A]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#241811] mb-1">Amazon or Retail URL</label>
                  <input
                    type="url"
                    placeholder="https://amazon.com/dp/..."
                    value={amazonUrl}
                    onChange={(e) => setAmazonUrl(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F2E9DE] border border-[#241811]/15 focus:outline-hidden focus:border-[#E8607A]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#241811] mb-1">Target Reader Age</label>
                  <select
                    value={targetAge}
                    onChange={(e) => setTargetAge(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#F2E9DE] border border-[#241811]/15 focus:outline-hidden focus:border-[#E8607A]"
                  >
                    <option>18–25 (New Adult / BookTok)</option>
                    <option>25–35 (Adult Fiction / Bookstagram)</option>
                    <option>35–50+ (General Fiction / Kindle)</option>
                    <option>All Ages / YA</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-[#241811] mb-1">
                  Preferred Video Styles (select up to 2)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    'Cinematic Trailer',
                    'Character Reveal',
                    'Promotional',
                    'Author-Led',
                    'Quote-Driven',
                    'Review-Style',
                  ].map((st) => (
                    <button
                      key={st}
                      type="button"
                      onClick={() => toggleStyle(st)}
                      className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all text-center cursor-pointer ${
                        selectedStyles.includes(st)
                          ? 'bg-[#E8607A]/15 border-[#E8607A] text-[#B03C5F] font-bold'
                          : 'bg-[#F2E9DE] border-[#241811]/10 text-[#241811]/70'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-between pt-4 border-t border-[#241811]/10">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold text-[#241811] hover:bg-[#241811]/5 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  if (!bookTitle.trim()) {
                    alert('Please enter your book title.');
                    return;
                  }
                  setStep(3);
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#E8607A] to-[#D4924A] shadow-sm hover:scale-[1.02] cursor-pointer"
              >
                <span>Next: Aesthetic Direction</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Aesthetic & Tone */}
        {step === 3 && (
          <div className="space-y-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B03C5F] block mb-1">
                Step 3 of 4 · Vibe &amp; Aesthetics
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#241811]">
                How Should Your Videos Feel?
              </h2>
              <p className="text-xs sm:text-sm text-[#241811]/70 mt-1">
                We align soundscapes, color grading, and text fonts with your subgenre aesthetic.
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-bold text-[#241811] mb-1">
                  Aesthetic Mood &amp; Visual References
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Dark academia, rainy gothic castle, candlelit study, atmospheric violin, intense emotional longing..."
                  value={aesthetic}
                  onChange={(e) => setAesthetic(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F2E9DE] border border-[#241811]/15 focus:outline-hidden focus:border-[#E8607A]"
                />
              </div>

              <div>
                <label className="block font-bold text-[#241811] mb-1">
                  Content Boundaries (Anything to avoid?)
                </label>
                <input
                  type="text"
                  placeholder="e.g. No explicit gore, avoid modern slang, stick to closed-door romance cues..."
                  value={avoidNotes}
                  onChange={(e) => setAvoidNotes(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F2E9DE] border border-[#241811]/15 focus:outline-hidden focus:border-[#E8607A]"
                />
              </div>

              <div>
                <label className="block font-bold text-[#241811] mb-1">
                  Additional Notes / Manuscript Quotes to Highlight
                </label>
                <textarea
                  rows={2}
                  placeholder="Specific iconic lines, comp authors (e.g. 'readers of Sarah J. Maas or Rebecca Yarros'), or key release dates..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F2E9DE] border border-[#241811]/15 focus:outline-hidden focus:border-[#E8607A]"
                />
              </div>
            </div>

            <div className="flex justify-between pt-4 border-t border-[#241811]/10">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold text-[#241811] hover:bg-[#241811]/5 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <button
                type="button"
                onClick={() => setStep(4)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#E8607A] to-[#D4924A] shadow-sm hover:scale-[1.02] cursor-pointer"
              >
                <span>Next: Platforms &amp; Connection</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: Platforms & Account Info */}
        {step === 4 && (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B03C5F] block mb-1">
                Step 4 of 4 · Channel Connection
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#241811]">
                Where Should We Post &amp; Engage?
              </h2>
              <p className="text-xs sm:text-sm text-[#241811]/70 mt-1">
                All checked platforms get daily video publishing for organic reach.
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#241811] mb-1">Author Name / Pen Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. J.M. Rivers"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F2E9DE] border border-[#241811]/15 focus:outline-hidden focus:border-[#E8607A]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#241811] mb-1">Author Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="you@domain.com"
                    value={authorEmail}
                    onChange={(e) => setAuthorEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F2E9DE] border border-[#241811]/15 focus:outline-hidden focus:border-[#E8607A]"
                  />
                </div>
              </div>

              {/* Connected Platforms Checkboxes */}
              <div>
                <label className="block font-bold text-[#241811] mb-1.5">
                  Channels for Daily Video Posting
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    'TikTok',
                    'Instagram Reels',
                    'YouTube Shorts',
                    'Pinterest',
                    'Facebook',
                  ].map((p) => (
                    <label
                      key={p}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-[#F2E9DE] border border-[#241811]/10 text-xs font-semibold cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={connectedPlatforms.includes(p)}
                        onChange={() => togglePlatform(p)}
                        className="accent-[#E8607A] w-4 h-4 rounded-sm"
                      />
                      <span>{p}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Dedicated 1-on-1 Manual Engagement Platform */}
              <div>
                <label className="block font-bold text-[#241811] mb-1">
                  Dedicated 1-on-1 Manual Reader Prospecting Channel
                </label>
                <p className="text-[11px] text-[#241811]/60 mb-2">
                  Our specialists will manually read comment threads and follow high-intent readers on this 1 primary platform:
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {['TikTok', 'Instagram Reels', 'YouTube Shorts'].map((plat) => (
                    <button
                      key={plat}
                      type="button"
                      onClick={() => setManualPlatform(plat)}
                      className={`p-2 rounded-xl text-xs font-semibold border transition-all text-center cursor-pointer ${
                        manualPlatform === plat
                          ? 'bg-[#E8607A]/15 border-[#E8607A] text-[#B03C5F] font-bold'
                          : 'bg-[#F2E9DE] border-[#241811]/10 text-[#241811]/70'
                      }`}
                    >
                      {plat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-between pt-4 border-t border-[#241811]/10">
              <button
                type="button"
                onClick={() => setStep(3)}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold text-[#241811] hover:bg-[#241811]/5 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#E8607A] to-[#D4924A] shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer disabled:opacity-50"
              >
                <Sparkles className="w-4 h-4" />
                <span>{isSubmitting ? 'Submitting Details...' : 'Complete & Launch Onboarding'}</span>
              </button>
            </div>
          </form>
        )}

        {/* STEP 5: Success & Confirmation */}
        {step === 5 && (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#2F9968] to-[#6FDAB5] text-white flex items-center justify-center text-3xl mx-auto shadow-md">
              ✓
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#241811]">
              Onboarding Details Received!
            </h2>

            <p className="text-sm sm:text-base text-[#241811]/75 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-[#241811]">{authorName || 'Author'}</strong>. We have logged your submission for <strong className="text-[#241811]">"{bookTitle}"</strong>.
            </p>

            <div className="bg-[#F2E9DE] rounded-2xl p-5 border border-[#241811]/10 text-xs sm:text-sm text-left max-w-md mx-auto space-y-2 text-[#241811]/85">
              <div className="font-bold text-[#241811] mb-1">What Happens Next:</div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2F9968] shrink-0" />
                <span>We assign a dedicated genre specialist to your account</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2F9968]" />
                <span>You receive your secure OAuth connection links by email within 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2F9968]" />
                <span>First batch of custom videos scripted &amp; ready in 3–5 days</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2F9968]" />
                <span>Daily publishing and manual engagement commences immediately</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#241811] hover:bg-[#241811]/85 transition-colors cursor-pointer"
              >
                Done · Return to Website
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

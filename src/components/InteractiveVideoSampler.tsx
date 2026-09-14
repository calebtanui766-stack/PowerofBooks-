import React, { useState, useRef, useEffect } from 'react';
import { VIDEO_STYLES } from '../data/contentData';
import { Sparkles, Play, Pause, Volume2, VolumeX, RotateCcw, Music2, Heart, MessageSquare, Bookmark, Share2, ArrowRight } from 'lucide-react';

interface InteractiveVideoSamplerProps {
  onOpenOnboarding: () => void;
}

export const InteractiveVideoSampler: React.FC<InteractiveVideoSamplerProps> = ({ onOpenOnboarding }) => {
  const [selectedStyleId, setSelectedStyleId] = useState(VIDEO_STYLES[0].id);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoProgress, setVideoProgress] = useState(0);
  const [videoError, setVideoError] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const activeStyle = VIDEO_STYLES.find((s) => s.id === selectedStyleId) || VIDEO_STYLES[0];

  // When selected style changes, reset video and play
  useEffect(() => {
    setVideoError(false);
    setVideoProgress(0);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, [selectedStyleId]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      setVideoProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
    }
  };

  return (
    <section id="video-styles" className="py-20 md:py-28 bg-[#FAF5F0] border-b border-[#241811]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8607A] mb-2 block">
            Creative Direction
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#241811] leading-tight mb-4">
            You Choose Your Style. We Craft Every Frame.
          </h2>
          <p className="text-base sm:text-lg text-[#241811]/70">
            Click a style below to watch live video samples and explore how our retention-first scripting frames your story on voracious readers' feeds.
          </p>
        </div>

        {/* Style Selector Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {VIDEO_STYLES.map((style) => (
            <button
              key={style.id}
              id={`style-btn-${style.id}`}
              onClick={() => setSelectedStyleId(style.id)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedStyleId === style.id
                  ? 'bg-gradient-to-r from-[#E8607A] to-[#D4924A] text-white shadow-md scale-105'
                  : 'bg-[#F2E9DE] text-[#241811]/75 hover:bg-[#EAE0D2] hover:text-[#241811] border border-[#241811]/10'
              }`}
            >
              <span>{style.icon}</span>
              <span>{style.name}</span>
            </button>
          ))}
        </div>

        {/* Live Mock Phone Preview + Breakdown Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F2E9DE] border border-[#241811]/12 rounded-3xl p-6 sm:p-10 shadow-xs">
          {/* Simulated Smartphone Screen with REAL working video */}
          <div className="lg:col-span-5 flex justify-center">
            <div 
              className="relative w-full max-w-[280px] aspect-[9/16] bg-[#140E0A] rounded-[36px] shadow-2xl border-4 border-[#241811]/60 flex flex-col justify-between overflow-hidden group/phone select-none cursor-pointer"
              onClick={togglePlay}
            >
              {/* Actual Video Player Layer */}
              {activeStyle.videoUrl && !videoError ? (
                <video
                  ref={videoRef}
                  src={activeStyle.videoUrl}
                  poster={activeStyle.posterUrl}
                  className="absolute inset-0 w-full h-full object-cover z-0"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  onTimeUpdate={handleTimeUpdate}
                  onError={() => setVideoError(true)}
                />
              ) : (
                <img
                  src={activeStyle.posterUrl}
                  alt={activeStyle.name}
                  className="absolute inset-0 w-full h-full object-cover z-0"
                />
              )}

              {/* Dynamic Atmospheric Gradient Overlays for readable text */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/85 z-1 pointer-events-none" />
              <div className="absolute inset-0 bg-black/25 z-1 pointer-events-none" />

              {/* Top Sensor Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-20 pointer-events-none" />

              {/* Top Feed Tabs & Mute Controller */}
              <div className="relative z-10 pt-4 px-4 flex justify-between items-center text-xs font-semibold text-white/75">
                <div className="flex gap-3">
                  <span className="text-white/60">Following</span>
                  <span className="text-white font-bold underline underline-offset-4 decoration-[#E8607A]">
                    For You
                  </span>
                </div>

                <button
                  type="button"
                  id="toggle-sampler-mute"
                  onClick={toggleMute}
                  className="p-1.5 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-xs transition-colors cursor-pointer"
                  title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#E8607A]" />}
                </button>
              </div>

              {/* Central Dynamic Hook Overlay & Play State Indicator */}
              <div className="relative z-10 my-auto px-4 text-center">
                {!isPlaying && (
                  <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-black/70 backdrop-blur-xs border border-white/25 flex items-center justify-center text-white shadow-xl transition-transform transform scale-110">
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </div>
                )}

                <div className="inline-block px-2.5 py-1 rounded-full bg-[#E8607A]/40 backdrop-blur-xs border border-[#E8607A]/60 text-[#FAF5F0] text-[10px] font-bold uppercase tracking-wider mb-2 shadow-xs">
                  {activeStyle.name}
                </div>
                <p className="font-serif italic text-sm sm:text-base text-white font-bold leading-snug drop-shadow-lg line-clamp-3">
                  {activeStyle.hookExample}
                </p>
                <span className="text-[10px] text-white/80 block mt-1.5 font-medium drop-shadow-sm">
                  {activeStyle.subtext}
                </span>
              </div>

              {/* Right Sidebar Interaction Icons */}
              <div className="absolute right-2.5 bottom-16 z-10 flex flex-col items-center gap-3 text-white pointer-events-none">
                <div className="flex flex-col items-center gap-0.5">
                  <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-xs flex items-center justify-center text-rose-400 border border-white/10">
                    <Heart className="w-4 h-4 fill-rose-400 text-rose-400" />
                  </div>
                  <span className="text-[9px] font-semibold drop-shadow-xs">24.6K</span>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-xs flex items-center justify-center text-white border border-white/10">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <span className="text-[9px] font-semibold drop-shadow-xs">1,240</span>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-xs flex items-center justify-center text-amber-400 border border-white/10">
                    <Bookmark className="w-4 h-4 fill-amber-400" />
                  </div>
                  <span className="text-[9px] font-semibold drop-shadow-xs">8.9K</span>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-xs flex items-center justify-center text-white border border-white/10">
                    <Share2 className="w-4 h-4" />
                  </div>
                  <span className="text-[9px] font-semibold drop-shadow-xs">3.4K</span>
                </div>
              </div>

              {/* Bottom Audio & Caption Bar */}
              <div className="relative z-10 text-white p-3 pr-14 text-left space-y-1">
                <div className="text-xs font-bold text-white flex items-center gap-1.5 drop-shadow-xs">
                  <span>@powerofbooks.author</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8607A]" />
                </div>
                <div className="text-[10px] text-white/90 line-clamp-2 leading-tight drop-shadow-xs">
                  When your chapter climax goes viral on reader feeds... 📖 #BookTok #IndieAuthor #MustRead
                </div>
                <div className="flex items-center gap-1 text-[9px] text-white/70 pt-0.5 truncate drop-shadow-xs">
                  <Music2 className="w-2.5 h-2.5 animate-spin" />
                  <span>Trending Audio · 420K+ Author Reels</span>
                </div>

                {/* Scrubber / Progress Line */}
                <div className="w-full h-1 bg-white/25 rounded-full overflow-hidden mt-1.5">
                  <div
                    className="h-full bg-gradient-to-r from-[#E8607A] to-[#D4924A] transition-all"
                    style={{ width: `${videoProgress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Style Breakdown & Recommendations */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B03C5F]">
                Selected Style Profile
              </span>
              <h3 className="font-serif text-3xl font-bold text-[#241811] mt-1 flex items-center gap-2">
                <span>{activeStyle.icon}</span>
                <span>{activeStyle.name}</span>
              </h3>
              <p className="text-base text-[#241811]/80 mt-2 font-medium">
                "{activeStyle.tagline}"
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#FAF5F0] border border-[#241811]/10 rounded-2xl p-4">
                <div className="text-xs font-bold uppercase tracking-wider text-[#241811]/60 mb-1">
                  Best Suited For
                </div>
                <div className="text-sm font-semibold text-[#241811]">
                  {activeStyle.bestFor}
                </div>
              </div>

              <div className="bg-[#FAF5F0] border border-[#241811]/10 rounded-2xl p-4">
                <div className="text-xs font-bold uppercase tracking-wider text-[#241811]/60 mb-1">
                  Emotional Tone / Vibe
                </div>
                <div className="text-sm font-semibold text-[#241811]">
                  {activeStyle.vibe}
                </div>
              </div>
            </div>

            <p className="text-sm text-[#241811]/75 leading-relaxed">
              Every video is uniquely scripted around your specific manuscript excerpt, characters, or comp tropes. You can designate your desired style in our onboarding wizard, or let our genre editors test multiple styles to discover what gives your book the lowest cost per borrow.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenOnboarding}
                id="sampler-request-cta"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#E8607A] to-[#D4924A] shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Request {activeStyle.name} For Your Book</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <span className="text-xs text-[#241811]/60 font-medium">
                ⚡ Included in all 4 plans with unlimited creative revisions
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

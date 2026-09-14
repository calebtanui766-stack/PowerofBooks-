import React, { useState, useRef, useEffect } from 'react';
import { VIDEO_TESTIMONIALS, PRICING_PLANS } from '../data/contentData';
import { VideoTestimonial, PricingPlan } from '../types';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  X,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  RotateCcw,
  BookOpen,
  TrendingUp,
  Award,
  Video,
  Share2,
  Heart,
  MessageCircle,
} from 'lucide-react';

interface VideoTestimonialsProps {
  onOpenOnboarding?: (plan?: PricingPlan) => void;
}

export const VideoTestimonials: React.FC<VideoTestimonialsProps> = ({ onOpenOnboarding }) => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Romance' | 'Fantasy' | 'Mystery'>('All');
  const [playingCardId, setPlayingCardId] = useState<string | null>(null);
  const [cardProgressMap, setCardProgressMap] = useState<{ [id: string]: number }>({});
  const [cardMutedMap, setCardMutedMap] = useState<{ [id: string]: boolean }>({
    'elena-video': true,
    'marcus-video': true,
    'chloe-video': true,
    'tasha-video': true,
  });

  // Modal State
  const [selectedVideo, setSelectedVideo] = useState<VideoTestimonial | null>(null);
  const [isModalPlaying, setIsModalPlaying] = useState(true);
  const [isModalMuted, setIsModalMuted] = useState(false);
  const [modalProgress, setModalProgress] = useState(0);
  const [modalCurrentSec, setModalCurrentSec] = useState(0);

  // References to video elements
  const cardVideoRefs = useRef<{ [id: string]: HTMLVideoElement | null }>({});
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);

  // Filtered videos
  const filteredVideos = VIDEO_TESTIMONIALS.filter((v) => {
    if (activeCategory === 'All') return true;
    return v.genreCategory === activeCategory;
  });

  // Pause all other card videos when one plays
  const handleCardPlayToggle = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();

    const currentRef = cardVideoRefs.current[id];
    if (!currentRef) return;

    if (playingCardId === id) {
      currentRef.pause();
      setPlayingCardId(null);
    } else {
      // Pause any previously playing video
      Object.entries(cardVideoRefs.current).forEach(([otherId, ref]) => {
        const videoElement = ref as HTMLVideoElement | null;
        if (videoElement && otherId !== id) {
          videoElement.pause();
        }
      });
      currentRef.play().then(() => {
        setPlayingCardId(id);
      }).catch(() => {
        setPlayingCardId(id);
      });
    }
  };

  const handleCardMuteToggle = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const ref = cardVideoRefs.current[id];
    if (!ref) return;
    ref.muted = !ref.muted;
    setCardMutedMap((prev) => ({ ...prev, [id]: ref.muted }));
  };

  const handleCardTimeUpdate = (id: string) => {
    const ref = cardVideoRefs.current[id];
    if (ref && ref.duration) {
      const pct = (ref.currentTime / ref.duration) * 100;
      setCardProgressMap((prev) => ({ ...prev, [id]: pct }));
    }
  };

  // Open Modal
  const handleOpenModal = (video: VideoTestimonial) => {
    // Pause any card playing
    Object.values(cardVideoRefs.current).forEach((ref) => {
      const videoElement = ref as HTMLVideoElement | null;
      videoElement?.pause();
    });
    setPlayingCardId(null);

    setSelectedVideo(video);
    setIsModalPlaying(true);
    setIsModalMuted(false);
    setModalProgress(0);
    setModalCurrentSec(0);
  };

  const handleCloseModal = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
    setSelectedVideo(null);
    setIsModalPlaying(false);
  };

  const handleModalPlayToggle = () => {
    if (!modalVideoRef.current) return;
    if (isModalPlaying) {
      modalVideoRef.current.pause();
      setIsModalPlaying(false);
    } else {
      modalVideoRef.current.play();
      setIsModalPlaying(true);
    }
  };

  const handleModalMuteToggle = () => {
    if (!modalVideoRef.current) return;
    modalVideoRef.current.muted = !modalVideoRef.current.muted;
    setIsModalMuted(modalVideoRef.current.muted);
  };

  const handleModalTimeUpdate = () => {
    if (modalVideoRef.current && modalVideoRef.current.duration) {
      const cur = modalVideoRef.current.currentTime;
      const dur = modalVideoRef.current.duration;
      setModalProgress((cur / dur) * 100);
      setModalCurrentSec(Math.floor(cur));
    }
  };

  const handleModalScrub = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!modalVideoRef.current || !modalVideoRef.current.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newPct = Math.max(0, Math.min(1, clickX / rect.width));
    modalVideoRef.current.currentTime = newPct * modalVideoRef.current.duration;
  };

  const getCurrentSubtitle = (video: VideoTestimonial, timeSec: number) => {
    const found = video.subtitles.find(
      (sub) => timeSec >= sub.startSec && timeSec <= sub.endSec
    );
    return found ? found.text : video.subtitles[0]?.text || '';
  };

  const getMatchedPlan = (planUsed: string): PricingPlan | undefined => {
    if (planUsed.includes('Accelerate')) {
      return PRICING_PLANS.find((p) => p.id === 'accelerate');
    }
    if (planUsed.includes('Authority')) {
      return PRICING_PLANS.find((p) => p.id === 'authority');
    }
    if (planUsed.includes('Author Pro')) {
      return PRICING_PLANS.find((p) => p.id === 'pro');
    }
    return PRICING_PLANS.find((p) => p.id === 'starter');
  };

  return (
    <section id="video-testimonials" className="py-20 md:py-28 bg-[#FAF5F0] border-b border-[#241811]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8607A]/15 text-[#B03C5F] text-xs font-bold uppercase tracking-wider mb-3">
            <Video className="w-3.5 h-3.5" />
            <span>Author Video Proof · Real Working Media</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#241811] leading-tight mb-4">
            Watch Real Authors Break Down Their Royalty Jumps
          </h2>

          <p className="text-base sm:text-lg text-[#241811]/75 leading-relaxed">
            Hit play on any author clip below to watch high-definition video debriefs, explore their Kindle ranking breakthroughs, and see how hands-off daily content scaled their backlist.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {(['All', 'Romance', 'Fantasy', 'Mystery'] as const).map((cat) => (
            <button
              key={cat}
              id={`filter-video-${cat.toLowerCase()}`}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#241811] text-white shadow-xs scale-102'
                  : 'bg-[#F2E9DE] text-[#241811]/70 hover:text-[#241811] border border-[#241811]/10 hover:bg-[#EAE0D2]'
              }`}
            >
              {cat === 'All' ? 'All Author Stories' : `${cat} Fiction`}
            </button>
          ))}
        </div>

        {/* 4-Card Responsive Video Grid with REAL Embedded Video Elements */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredVideos.map((item) => {
            const isPlaying = playingCardId === item.id;
            const isMuted = cardMutedMap[item.id] ?? true;
            const progressPercent = cardProgressMap[item.id] || 0;

            return (
              <div
                key={item.id}
                id={`video-card-${item.id}`}
                className="bg-[#F2E9DE] rounded-3xl border border-[#241811]/12 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col group cursor-pointer"
                onClick={() => handleOpenModal(item)}
              >
                {/* Smartphone Style Vertical Video Frame */}
                <div className="relative aspect-[9/14] w-full bg-[#140E0A] overflow-hidden flex flex-col justify-between p-4 text-white select-none">
                  {/* Real HTML5 Video Player */}
                  <video
                    ref={(el) => {
                      cardVideoRefs.current[item.id] = el;
                    }}
                    src={item.videoUrl}
                    poster={item.posterUrl}
                    className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105"
                    loop
                    muted={isMuted}
                    playsInline
                    onTimeUpdate={() => handleCardTimeUpdate(item.id)}
                  />

                  {/* Dark Vignette Overlay for Readability */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/85 z-1 pointer-events-none" />
                  <div className="absolute inset-0 bg-black/20 z-1 pointer-events-none" />

                  {/* Top Bar: Platform & Controls */}
                  <div className="relative z-10 flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-black/55 backdrop-blur-xs text-[10px] font-bold tracking-wider uppercase border border-white/15 flex items-center gap-1.5 shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8607A] animate-pulse" />
                      {item.platform}
                    </span>

                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        id={`card-mute-${item.id}`}
                        onClick={(e) => handleCardMuteToggle(item.id, e)}
                        className="p-1.5 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-xs text-white border border-white/10 transition-colors cursor-pointer"
                        title={isMuted ? 'Unmute preview' : 'Mute preview'}
                      >
                        {isMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3 text-[#E8607A]" />}
                      </button>

                      <span className="px-2 py-0.5 rounded-full bg-black/50 text-[10px] font-mono text-white/90 backdrop-blur-xs border border-white/10">
                        {item.durationFormatted}
                      </span>
                    </div>
                  </div>

                  {/* Central Play Overlay Button & Author Details */}
                  <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center px-2">
                    {/* Big Center Play / Pause trigger */}
                    <div className="relative mb-3">
                      <button
                        type="button"
                        id={`play-toggle-${item.id}`}
                        onClick={(e) => handleCardPlayToggle(item.id, e)}
                        className={`w-14 h-14 rounded-full bg-black/65 hover:bg-black/85 backdrop-blur-xs text-white flex items-center justify-center transition-all hover:scale-110 cursor-pointer shadow-xl border border-white/30 ${
                          isPlaying ? 'opacity-90 ring-4 ring-white/30' : 'opacity-95'
                        }`}
                        title={isPlaying ? 'Pause Video' : 'Play Full Video'}
                      >
                        {isPlaying ? (
                          <Pause className="w-6 h-6 fill-white" />
                        ) : (
                          <Play className="w-6 h-6 fill-white ml-0.5" />
                        )}
                      </button>
                    </div>

                    <div className="flex items-center gap-2 bg-black/50 backdrop-blur-xs px-3 py-1 rounded-full border border-white/15">
                      <img
                        src={item.authorAvatarUrl}
                        alt={item.authorName}
                        className="w-5 h-5 rounded-full object-cover border border-white/40"
                      />
                      <span className="font-serif font-bold text-xs text-white drop-shadow-xs">
                        {item.authorName}
                      </span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#6FDAB5]" />
                    </div>

                    <div className="mt-1.5 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/40 backdrop-blur-xs text-[10px] text-white/90 font-medium border border-white/10">
                      <BookOpen className="w-3 h-3 text-[#E8607A]" />
                      <span className="truncate max-w-[160px]">"{item.bookTitle}"</span>
                    </div>
                  </div>

                  {/* Bottom Subtitle / Transcript Banner */}
                  <div className="relative z-10 space-y-2">
                    <div className="bg-black/75 backdrop-blur-md rounded-2xl p-2.5 border border-white/15 text-left min-h-[58px] flex flex-col justify-center">
                      <div className="text-[9px] uppercase tracking-wider font-bold text-[#E8607A] flex items-center justify-between">
                        <span>Author Video Quote</span>
                        <span className="text-white/50 text-[9px]">Tap to expand</span>
                      </div>
                      <p className="text-xs text-white/95 font-medium leading-snug line-clamp-2 mt-0.5">
                        {item.headline}
                      </p>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#E8607A] to-[#D4924A] transition-all duration-200"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Card Meta & Highlights */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    {/* Primary Highlight Metric */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-serif text-2xl font-bold text-[#B03C5F]">
                          {item.metricNumber}
                        </span>
                        <span className="text-[11px] font-bold text-[#241811]/70 leading-tight">
                          {item.metricLabel}
                        </span>
                      </div>
                    </div>

                    <div className="text-xs font-semibold text-[#241811]/60 mb-1">
                      {item.genre}
                    </div>

                    <p className="text-xs text-[#241811]/80 leading-relaxed line-clamp-2 italic">
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Plan Badge + Watch Button */}
                  <div className="pt-3 border-t border-[#241811]/10 flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#FAF5F0] border border-[#241811]/10 text-[#241811]/70">
                      {item.planUsed}
                    </span>

                    <button
                      type="button"
                      id={`watch-full-${item.id}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenModal(item);
                      }}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#B03C5F] hover:text-[#241811] transition-colors group/btn cursor-pointer"
                    >
                      <span>Watch Debrief</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Social Proof Trust Footnote */}
        <div className="mt-12 bg-[#F2E9DE] rounded-3xl border border-[#241811]/10 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#E8607A] to-[#D4924A] text-white flex items-center justify-center text-xl shrink-0 shadow-xs">
              ⭐
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-[#241811]">
                Every Author Case Study Backed by Verified Kindle & Sales Receipts
              </h4>
              <p className="text-xs sm:text-sm text-[#241811]/70 mt-0.5">
                We never use AI generated author faces or paid actors. Every video features real clients who handed their daily marketing to Power of Books.
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <button
              id="video-testimonials-cta"
              onClick={() => onOpenOnboarding && onOpenOnboarding()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#E8607A] to-[#D4924A] shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Scale Your Book With Daily Video</span>
            </button>
          </div>
        </div>
      </div>

      {/* THEATER VIEW MODAL: Full Working Video Player & Verified Results */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md"
          onClick={handleCloseModal}
        >
          <div
            className="relative w-full max-w-4xl bg-[#FAF5F0] rounded-3xl border border-[#241811]/20 shadow-2xl overflow-hidden my-8 text-[#241811]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={handleCloseModal}
              id="close-video-modal"
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors cursor-pointer backdrop-blur-xs"
              aria-label="Close author story"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12">
              {/* Left Column: Full-featured Video Player Screen */}
              <div className="md:col-span-5 bg-[#140E0A] p-5 flex flex-col justify-between text-white relative min-h-[460px] select-none overflow-hidden">
                {/* Real HTML5 Modal Video Player */}
                <video
                  ref={modalVideoRef}
                  src={selectedVideo.videoUrl}
                  poster={selectedVideo.posterUrl}
                  className="absolute inset-0 w-full h-full object-cover z-0"
                  autoPlay
                  loop
                  muted={isModalMuted}
                  playsInline
                  onTimeUpdate={handleModalTimeUpdate}
                />

                {/* Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/90 z-1 pointer-events-none" />

                {/* Video Top Bar */}
                <div className="relative z-10 flex items-center justify-between text-xs font-semibold">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-xs uppercase text-[10px] tracking-wider border border-white/20">
                    {selectedVideo.platform} Breakdown
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      id="modal-mute-toggle-btn"
                      onClick={handleModalMuteToggle}
                      className="p-1.5 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-xs transition-colors cursor-pointer border border-white/15"
                      title={isModalMuted ? 'Unmute audio' : 'Mute audio'}
                    >
                      {isModalMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#E8607A]" />}
                    </button>
                    <span className="font-mono text-white/90 text-[11px] bg-black/40 px-2 py-0.5 rounded-full">
                      0:{modalCurrentSec < 10 ? `0${modalCurrentSec}` : modalCurrentSec} / {selectedVideo.durationFormatted}
                    </span>
                  </div>
                </div>

                {/* Central Controls: Author Badge & Play/Pause */}
                <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center py-6">
                  <button
                    onClick={handleModalPlayToggle}
                    id="modal-play-pause-btn"
                    className="w-16 h-16 rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-xs text-white flex items-center justify-center transition-transform hover:scale-110 cursor-pointer shadow-2xl border-2 border-white/30 mb-4"
                  >
                    {isModalPlaying ? (
                      <Pause className="w-7 h-7 fill-white" />
                    ) : (
                      <Play className="w-7 h-7 fill-white ml-0.5" />
                    )}
                  </button>

                  <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-lg">
                    <img
                      src={selectedVideo.authorAvatarUrl}
                      alt={selectedVideo.authorName}
                      className="w-6 h-6 rounded-full object-cover border border-white/50"
                    />
                    <h3 className="font-serif text-sm font-bold text-white flex items-center gap-1">
                      <span>{selectedVideo.authorName}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#6FDAB5]" />
                    </h3>
                  </div>

                  <div className="text-[11px] text-white/80 font-mono mt-1 drop-shadow-xs">
                    {selectedVideo.authorHandle}
                  </div>

                  <div className="mt-2 text-[11px] text-white/90 bg-black/40 px-3 py-0.5 rounded-full border border-white/10 backdrop-blur-xs">
                    Book: <em>{selectedVideo.bookTitle}</em>
                  </div>
                </div>

                {/* Subtitles & Interactive Scrubber Box */}
                <div className="relative z-10 space-y-3">
                  <div className="bg-black/85 backdrop-blur-md rounded-2xl p-3 border border-white/20">
                    <div className="flex items-center justify-between text-[10px] uppercase font-bold text-[#E8607A] mb-1">
                      <span>Synchronized Transcript</span>
                      <button
                        onClick={() => {
                          if (modalVideoRef.current) {
                            modalVideoRef.current.currentTime = 0;
                            modalVideoRef.current.play();
                            setIsModalPlaying(true);
                          }
                        }}
                        className="hover:text-white flex items-center gap-1 transition-colors cursor-pointer text-white/60 text-[10px]"
                        title="Replay video from beginning"
                      >
                        <RotateCcw className="w-3 h-3" />
                        <span>Restart</span>
                      </button>
                    </div>
                    <p className="text-xs text-white font-medium leading-snug min-h-[38px]">
                      {getCurrentSubtitle(selectedVideo, modalCurrentSec)}
                    </p>
                  </div>

                  {/* Interactive Scrubber Bar */}
                  <div
                    className="w-full h-2.5 bg-white/20 hover:bg-white/30 rounded-full overflow-hidden cursor-pointer relative transition-colors"
                    onClick={handleModalScrub}
                    title="Click to scrub"
                  >
                    <div
                      className="h-full bg-gradient-to-r from-[#E8607A] to-[#D4924A] transition-all"
                      style={{ width: `${modalProgress}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Case Details, Verified Results & CTA */}
              <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* Header Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#B03C5F]">
                      Verified Author Story
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#2F9968]/15 text-[#2F9968] text-xs font-bold border border-[#2F9968]/25">
                      {selectedVideo.secondaryMetric}
                    </span>
                  </div>

                  {/* Headline & Quote */}
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#241811] leading-tight mb-2">
                      {selectedVideo.headline}
                    </h3>
                    <p className="text-xs text-[#241811]/60 font-medium">
                      {selectedVideo.genre} · Enrolled in {selectedVideo.planUsed}
                    </p>
                  </div>

                  {/* Full Author Quote Prose */}
                  <div className="p-4 rounded-2xl bg-[#F2E9DE] border border-[#241811]/10 text-xs sm:text-sm text-[#241811]/85 leading-relaxed italic">
                    "{selectedVideo.quote}"
                  </div>

                  {/* Key Growth Achievements Checklist */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#241811]/70">
                      Verified Campaign Milestones
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedVideo.keyResults.map((result, rIdx) => (
                        <div
                          key={rIdx}
                          className="flex items-start gap-2 bg-[#FAF5F0] border border-[#241811]/8 rounded-xl p-2.5 text-xs text-[#241811]/85"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#2F9968] shrink-0 mt-0.5" />
                          <span className="font-medium">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Author Bio */}
                  <p className="text-xs text-[#241811]/60">
                    <strong>About the Author:</strong> {selectedVideo.authorBio}
                  </p>
                </div>

                {/* Modal Footer CTA */}
                <div className="pt-5 border-t border-[#241811]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-bold text-[#241811]">
                      Ready for results like {selectedVideo.authorName.split(' ')[0]}?
                    </div>
                    <div className="text-[11px] text-[#241811]/60">
                      Our video editors and outreach specialists start your campaign in 3–5 days.
                    </div>
                  </div>

                  <button
                    id="modal-onboarding-cta"
                    onClick={() => {
                      const matched = getMatchedPlan(selectedVideo.planUsed);
                      handleCloseModal();
                      if (onOpenOnboarding) {
                        onOpenOnboarding(matched);
                      }
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#E8607A] to-[#D4924A] shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <span>Get Started With {selectedVideo.planUsed.split(' ')[0]} Plan</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

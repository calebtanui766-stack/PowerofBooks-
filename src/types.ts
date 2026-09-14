export interface PricingPlan {
  id: string;
  planNumber: string;
  name: string;
  durationMonths: number;
  durationLabel: string;
  videosPerDay: number;
  totalVideos: number;
  priceUsd: number;
  costPerDay: string;
  savingsVsMonthly?: string;
  tag?: string;
  tagColor?: string;
  description: string;
  features: string[];
  reviewsIncluded?: number;
  hasFacebookAds?: boolean;
  hasAmazonAplus?: boolean;
  paypalButtonId: string;
}

export interface PlatformItem {
  id: string;
  name: string;
  shortName: string;
  type: 'Organic' | 'Paid Ads' | 'Retail Conversion';
  icon: string;
  headline: string;
  description: string;
  keySignals: string[];
  gradient: string;
  borderColor: string;
}

export interface VideoStyleSample {
  id: string;
  name: string;
  icon: string;
  hookExample: string;
  subtext: string;
  bestFor: string;
  vibe: string;
  tagline: string;
  videoUrl?: string;
  posterUrl?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  initials: string;
  platform: string;
  role: string;
  experience: string;
  bio: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  genre: string;
  achievement: string;
  highlight: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Pricing & Plans' | 'Platforms & Video' | 'Security & Accounts' | 'ARC Reviews';
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  platform: string;
  readTime: string;
  snippet: string;
  stats: { label: string; value: string }[];
  keyTakeaways: string[];
  fullContent: string[];
}

export interface LegalPage {
  id: string;
  title: string;
  category: 'Company' | 'Legal' | 'Media';
  updatedAt: string;
  contentHtml: string;
}

export interface VideoTestimonial {
  id: string;
  authorName: string;
  authorHandle: string;
  bookTitle: string;
  genre: string;
  genreCategory: 'Romance' | 'Fantasy' | 'Mystery' | 'All';
  platform: 'TikTok' | 'Instagram' | 'YouTube Shorts';
  durationSeconds: number;
  durationFormatted: string;
  metricNumber: string;
  metricLabel: string;
  secondaryMetric: string;
  planUsed: string;
  headline: string;
  quote: string;
  avatarColor: string;
  authorAvatarUrl: string;
  accentColor: string;
  videoThumbGradient: string;
  videoUrl: string;
  posterUrl: string;
  subtitles: {
    startSec: number;
    endSec: number;
    text: string;
  }[];
  keyResults: string[];
  authorBio: string;
}

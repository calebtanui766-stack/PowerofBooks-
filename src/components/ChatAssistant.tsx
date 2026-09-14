import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, User, Bot, ArrowRight } from 'lucide-react';

interface ChatAssistantProps {
  isOpen: boolean;
  onToggle: () => void;
  onOpenOnboarding: () => void;
}

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  actionText?: string;
  actionType?: 'onboarding' | 'pricing';
}

const FAQ_INTELLIGENCE: { keywords: string[]; reply: string; action?: 'onboarding' | 'pricing' }[] = [
  {
    keywords: ['which plan', 'suits me', 'recommend', 'best plan', 'what plan', 'starting out'],
    reply: "Most authors testing short-form video begin with the Starter ($99, 1 month) to see initial algorithmic traction. If you have an upcoming release or active backlist, our Accelerate ($499, 6 months) is the most popular choice as it includes 15 ARC reviews and triple-daily posting. Would you like to launch onboarding?",
    action: 'onboarding',
  },
  {
    keywords: ['genre', 'romance', 'fantasy', 'ya', 'thriller', 'mystery', 'sci-fi', 'specialize'],
    reply: "We cover all fiction categories! Our deepest specializations are in romance, romantasy, fantasy, YA fantasy, and thriller/mystery. We match you with editors who actively read your subgenre so your hooks never feel generic.",
  },
  {
    keywords: ['posting work', 'how does posting work', 'process', 'how it works', 'schedule'],
    reply: "It is 100% done-for-you: (1) You send book details/blurbs, (2) our team scripts and edits custom retention-engineered videos, (3) we post daily across TikTok, Reels, Shorts & Pinterest, and (4) you receive monthly reports while your readership compounds.",
  },
  {
    keywords: ['safe', 'safety', 'secure', 'security', 'password', 'oauth', 'account access'],
    reply: "Your account is 100% safe. We connect using official platform OAuth 2.0 (the same secure protocol as Canva and Shopify). We never see or store your passwords, and you can revoke our access with a single click at any time.",
  },
  {
    keywords: ['arc', 'review', 'goodreads', 'reviews', 'amazon review'],
    reply: "ARC reviews are bundled into Accelerate (15 reviews), Authority (30 reviews), and Author Pro (50+ reviews). We match your book to real readers who borrow it via Kindle Unlimited and post genuine, FTC-compliant reviews on Amazon and Goodreads.",
  },
  {
    keywords: ['backlist', 'old book', 'entire catalogue', 'series', 'multiple books'],
    reply: "Yes! Your plan covers your entire catalogue, not just a single release. You can promote backlist titles, boxsets, or rotate multiple titles across each month's production schedule.",
  },
  {
    keywords: ['guarantee', 'refund', 'quality', 'cancel'],
    reply: "Every plan includes our 7-Day Quality Revision Guarantee. If the first batch of videos does not match your vision, we revise until you are completely satisfied. No long-term lock-in contracts.",
  },
  {
    keywords: ['facebook ads', 'ad spend', 'meta ads', 'amazon a+'],
    reply: "Facebook video ads and Amazon A+ content are included in our 9-month Authority and 12-month Author Pro plans (and available as add-ons on lower plans). Our ads team sets up your campaign at zero extra labor cost; ad spend itself stays fully in your control in your own Meta Ads Manager.",
  },
  {
    keywords: ['price', 'pricing', 'cost', 'how much', 'cheap', 'tier'],
    reply: "We offer 5 fixed one-time plans: Starter ($99/mo), Growth ($269/3mo), Accelerate ($499/6mo), Authority ($799/9mo), and Author Pro ($1,200/yr). No surprise recurring subscription fees!",
    action: 'pricing',
  },
];

export const ChatAssistant: React.FC<ChatAssistantProps> = ({
  isOpen,
  onToggle,
  onOpenOnboarding,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: "Hello! 👋 I'm your BookTok & Author Growth Assistant. Ask me anything about which plan fits your launch, our video styles, or how we find real readers for your books.",
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text,
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const lower = text.toLowerCase();
      let matched = FAQ_INTELLIGENCE.find((rule) =>
        rule.keywords.some((kw) => lower.includes(kw))
      );

      let replyText =
        matched?.reply ||
        "That is a great question! For custom inquiries or unique catalog setups, our founder team responds within 24 hours at gilbertkimutai616@gmail.com. You can also explore our Pricing section or launch the Onboarding Wizard to get started.";

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: replyText,
        actionType: matched?.action,
        actionText:
          matched?.action === 'onboarding'
            ? 'Open Onboarding Wizard'
            : matched?.action === 'pricing'
            ? 'View Pricing Plans'
            : undefined,
      };

      setIsTyping(false);
      setMessages((prev) => [...prev, botMsg]);
    }, 600);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          onClick={onToggle}
          className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-[#E8607A] to-[#D4924A] text-white flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
          aria-label="Open author assistant chat"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-[#2F9968] ring-2 ring-[#FAF5F0] animate-pulse" />
        </button>
      </div>

      {/* Chat Window Panel */}
      {isOpen && (
        <div className="fixed bottom-22 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px] h-[520px] bg-[#FAF5F0] rounded-3xl border border-[#241811]/15 shadow-2xl flex flex-col overflow-hidden text-[#241811]">
          {/* Header */}
          <div className="px-5 py-4 bg-gradient-to-r from-[#E8607A] to-[#D4924A] text-white flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-sm font-bold">
                📚
              </div>
              <div>
                <h4 className="text-sm font-bold leading-tight">Author Assistant</h4>
                <span className="text-[11px] text-white/80 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6FDAB5]" /> Online · Instant Replies
                </span>
              </div>
            </div>
            <button
              onClick={onToggle}
              className="p-1 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Message Stream */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#FAF5F0] text-xs sm:text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-full bg-[#E8607A]/15 text-[#B03C5F] flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                    <Bot className="w-4 h-4" />
                  </div>
                )}
                <div
                  className={`max-w-[82%] rounded-2xl p-3 leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-[#E8607A] to-[#D4924A] text-white rounded-br-xs shadow-xs'
                      : 'bg-[#F2E9DE] text-[#241811] rounded-bl-xs border border-[#241811]/8'
                  }`}
                >
                  <p>{msg.text}</p>
                  {msg.actionType === 'onboarding' && (
                    <button
                      onClick={() => {
                        onToggle();
                        onOpenOnboarding();
                      }}
                      className="mt-2.5 inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#241811] text-white text-xs font-bold hover:bg-[#241811]/85 transition-colors cursor-pointer"
                    >
                      <span>Start Onboarding</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                  {msg.actionType === 'pricing' && (
                    <a
                      href="#pricing"
                      onClick={onToggle}
                      className="mt-2.5 inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#241811] text-white text-xs font-bold hover:bg-[#241811]/85 transition-colors"
                    >
                      <span>Go to Pricing</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2 items-center text-xs text-[#241811]/50 italic">
                <div className="w-6 h-6 rounded-full bg-[#F2E9DE] flex items-center justify-center">
                  <Bot className="w-3 h-3 text-[#B03C5F]" />
                </div>
                <span>Typing recommendation...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Reply Chips */}
          <div className="p-2.5 bg-[#F2E9DE]/60 border-t border-[#241811]/8 flex gap-1.5 overflow-x-auto whitespace-nowrap text-[11px] scrollbar-none">
            <button
              onClick={() => handleSend('Which plan suits me?')}
              className="px-2.5 py-1 rounded-full bg-[#FAF5F0] border border-[#241811]/12 hover:bg-[#FAF5F0] text-[#241811] font-semibold cursor-pointer shrink-0"
            >
              Which plan suits me?
            </button>
            <button
              onClick={() => handleSend('What genres do you cover?')}
              className="px-2.5 py-1 rounded-full bg-[#FAF5F0] border border-[#241811]/12 hover:bg-[#FAF5F0] text-[#241811] font-semibold cursor-pointer shrink-0"
            >
              What genres?
            </button>
            <button
              onClick={() => handleSend('Is my account safe?')}
              className="px-2.5 py-1 rounded-full bg-[#FAF5F0] border border-[#241811]/12 hover:bg-[#FAF5F0] text-[#241811] font-semibold cursor-pointer shrink-0"
            >
              OAuth safety
            </button>
            <button
              onClick={() => handleSend('Tell me about ARC reviews')}
              className="px-2.5 py-1 rounded-full bg-[#FAF5F0] border border-[#241811]/12 hover:bg-[#FAF5F0] text-[#241811] font-semibold cursor-pointer shrink-0"
            >
              ARC reviews
            </button>
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-[#FAF5F0] border-t border-[#241811]/10 flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask about plans, genres, or posting..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 px-3.5 py-2 rounded-full bg-[#F2E9DE] border border-[#241811]/12 text-xs focus:outline-hidden focus:border-[#E8607A] text-[#241811]"
            />
            <button
              type="submit"
              className="p-2 rounded-full bg-gradient-to-r from-[#E8607A] to-[#D4924A] text-white hover:opacity-90 transition-opacity cursor-pointer shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

import React from "react";
import { AGENCY_INFO } from "../data/agencyData";
import {
  ArrowUpRight,
  MessageCircle,
  Target,
  TrendingUp,
  CheckCircle,
  ShieldCheck,
} from "lucide-react";
import {
  MetaAdsColorServiceIcon,
  WebDevColorServiceIcon,
  VideoEditingColorServiceIcon,
  WhatsAppIcon,
} from "./icons/ColorIcons";

export default function Hero({ onOpenConsultation }) {
  return (
    <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-gold-500/20 w-full">
      {/* Background Subtle Lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(212,175,55,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(212,175,55,0.4) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Editorial Split Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center mb-8">
          {/* Left Column: Bold Typographic Statement */}
          <div className="lg:col-span-7">
            {/* Clean Section Tag - No pill badges! */}
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <span className="w-8 h-[2px] bg-gold-500" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-gold-400">
                Performance Digital Marketing Agency
              </span>
            </div>

            {/* Agency Headline - Clean modern sans-serif scale */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold uppercase text-white tracking-tight leading-[1.12] mb-5">
              Growth Isn't Luck. <br />
              <span className="text-gold-gradient">It's Strategy.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-sm sm:text-base text-wolf-300 max-w-xl leading-relaxed mb-7">
              We specialize in generating quality leads, increasing brand
              visibility, and delivering measurable business growth with an
              uncompromising focus on ROI.
              <span className="text-white font-medium">
                {" "}
                Direct response. High-conversion web assets. Zero fluff.
              </span>
            </p>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8 sm:mb-10 w-full">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 bg-gold-500 hover:bg-gold-400 text-wolf-950 font-sans font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all duration-200 hover:shadow-gold-md"
              >
                <span>Book Free Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href={AGENCY_INFO.contacts.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-wolf-900 hover:bg-wolf-850 text-white border border-gold-500/30 hover:border-gold-500 text-xs font-mono uppercase tracking-wider rounded-xl transition-colors"
              >
                <WhatsAppIcon className="w-6 h-6 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Brand Proof Strip */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-5 sm:pt-6 border-t border-wolf-850 w-full max-w-lg">
              {/* <div>
                <div className="text-xl sm:text-2xl font-sans font-extrabold text-gold-400">
                  4.8x
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono text-wolf-400 uppercase tracking-wider mt-0.5">
                  Average ROAS
                </div>
              </div> */}
              <div>
                <div className="text-xl sm:text-2xl font-sans font-extrabold text-white">
                  100k+
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono text-wolf-400 uppercase tracking-wider mt-0.5">
                  Verified Leads
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-sans font-extrabold text-gold-400">
                  48h
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono text-wolf-400 uppercase tracking-wider mt-0.5">
                  Launch Time
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Campaign Architecture Board */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-wolf-900 border border-gold-500/30 rounded-2xl p-4 sm:p-7 shadow-2xl relative w-full overflow-hidden">
              {/* Header of board */}
              <div className="flex items-center justify-between pb-3.5 sm:pb-4 border-b border-wolf-800 mb-4 sm:mb-5 gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full shrink-0" />
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider truncate">
                    Live Performance System
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-mono text-gold-400 shrink-0">
                  VIRALWOLF // V4.2
                </span>
              </div>

              {/* Core Strategy Matrix - Dashboard Cards with Prominent Colorful Icons */}
              <div className="space-y-3 sm:space-y-3.5 mb-5 sm:mb-6">
                <div className="p-3 sm:p-4 bg-wolf-950/90 border border-wolf-800 hover:border-gold-500/40 rounded-xl flex items-center justify-between gap-2.5 transition-colors group">
                  <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-wolf-900 border border-wolf-800 p-1.5 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-md">
                      <MetaAdsColorServiceIcon className="w-7 h-7 sm:w-8 sm:h-8" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-sans font-bold text-white uppercase group-hover:text-gold-200 transition-colors truncate">
                        Meta Paid Acquisition
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-wolf-400 font-mono mt-0.5 truncate">
                        Conversion API • Micro-Cohort Scaling
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2 sm:px-2.5 py-1 rounded-md border border-emerald-500/30 shrink-0 whitespace-nowrap">
                    4.8x ROAS
                  </span>
                </div>

                <div className="p-3 sm:p-4 bg-wolf-950/90 border border-wolf-800 hover:border-gold-500/40 rounded-xl flex items-center justify-between gap-2.5 transition-colors group">
                  <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-wolf-900 border border-wolf-800 p-1.5 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-md">
                      <WebDevColorServiceIcon className="w-7 h-7 sm:w-8 sm:h-8" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-sans font-bold text-white uppercase group-hover:text-gold-200 transition-colors truncate">
                        High-Conversion Web Systems
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-wolf-400 font-mono mt-0.5 truncate">
                        &lt; 1.2s Load Speed • Lead Form Funnels
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono font-bold text-gold-400 bg-gold-950/60 px-2 sm:px-2.5 py-1 rounded-md border border-gold-500/30 shrink-0 whitespace-nowrap">
                    +64% CVR
                  </span>
                </div>

                <div className="p-3 sm:p-4 bg-wolf-950/90 border border-wolf-800 hover:border-gold-500/40 rounded-xl flex items-center justify-between gap-2.5 transition-colors group">
                  <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-wolf-900 border border-wolf-800 p-1.5 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-md">
                      <VideoEditingColorServiceIcon className="w-7 h-7 sm:w-8 sm:h-8" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-sans font-bold text-white uppercase group-hover:text-gold-200 transition-colors truncate">
                        Direct-Response Creative
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-wolf-400 font-mono mt-0.5 truncate">
                        Short-Form Hooks • High Retention Video
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2 sm:px-2.5 py-1 rounded-md border border-emerald-500/30 shrink-0 whitespace-nowrap">
                    -43% CAC
                  </span>
                </div>
              </div>

              {/* Agency Principles */}
              <div className="pt-3.5 sm:pt-4 border-t border-wolf-800 text-xs text-wolf-300 space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                  <span className="text-[11px] sm:text-xs">
                    100% Attribution Transparency — No vanity impressions
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                  <span className="text-[11px] sm:text-xs">
                    Founder-led communication via dedicated WhatsApp channel
                  </span>
                </div>
              </div>

              <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-wolf-800 flex items-center justify-between">
                <span className="text-[11px] font-mono text-wolf-400">
                  Direct Inquiries:
                </span>
                <a
                  href={`tel:${AGENCY_INFO.contacts.phone}`}
                  className="text-xs font-mono font-bold text-gold-400 hover:text-gold-300"
                >
                  {AGENCY_INFO.contacts.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* High-Impact Infinite Marquee Strip */}
      <div className="border-t border-gold-500/25 bg-black py-3 overflow-hidden select-none -mx-4 sm:-mx-6 lg:-mx-8 -mb-12 sm:-mb-16 mt-8 sm:mt-12">
        <div
          className="flex whitespace-nowrap animate-shimmer"
          style={{ animationDuration: "25s" }}
        >
          <div className="flex items-center gap-8 text-xs font-mono font-bold uppercase tracking-[0.2em] text-gold-400/90 shrink-0">
            <span>META ADS</span>
            <span className="text-gold-500/40">///</span>
            <span>GOOGLE ADS</span>
            <span className="text-gold-500/40">///</span>
            <span>WEBSITE DEVELOPMENT</span>
            <span className="text-gold-500/40">///</span>
            <span>LANDING PAGE ARCHITECTURE</span>
            <span className="text-gold-500/40">///</span>
            <span>GRAPHIC DESIGN</span>
            <span className="text-gold-500/40">///</span>
            <span>HIGH-RETENTION VIDEO EDITING</span>
            <span className="text-gold-500/40">///</span>
            <span>SOCIAL MEDIA MANAGEMENT</span>
            <span className="text-gold-500/40">///</span>
            <span>ROI-FOCUSED CAMPAIGNS</span>
            <span className="text-gold-500/40">///</span>
            <span>GROWTH ISN'T LUCK. IT'S STRATEGY.</span>
            <span className="text-gold-500/40">///</span>
          </div>
          <div className="flex items-center gap-8 text-xs font-mono font-bold uppercase tracking-[0.2em] text-gold-400/90 shrink-0 ml-8">
            <span>META ADS</span>
            <span className="text-gold-500/40">///</span>
            <span>GOOGLE ADS</span>
            <span className="text-gold-500/40">///</span>
            <span>WEBSITE DEVELOPMENT</span>
            <span className="text-gold-500/40">///</span>
            <span>LANDING PAGE ARCHITECTURE</span>
            <span className="text-gold-500/40">///</span>
            <span>GRAPHIC DESIGN</span>
            <span className="text-gold-500/40">///</span>
            <span>HIGH-RETENTION VIDEO EDITING</span>
            <span className="text-gold-500/40">///</span>
            <span>SOCIAL MEDIA MANAGEMENT</span>
            <span className="text-gold-500/40">///</span>
            <span>ROI-FOCUSED CAMPAIGNS</span>
            <span className="text-gold-500/40">///</span>
            <span>GROWTH ISN'T LUCK. IT'S STRATEGY.</span>
            <span className="text-gold-500/40">///</span>
          </div>
        </div>
      </div>
    </section>
  );
}

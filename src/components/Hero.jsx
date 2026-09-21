import React from 'react';
import { AGENCY_INFO } from '../data/agencyData';
import { ArrowUpRight, MessageCircle, Target, TrendingUp, CheckCircle, ShieldCheck } from 'lucide-react';

export default function Hero({ onOpenConsultation }) {
  return (
    <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-gold-500/20">
      {/* Background Subtle Lines */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(212,175,55,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(212,175,55,0.4) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Editorial Split Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
          
          {/* Left Column: Bold Typographic Statement */}
          <div className="lg:col-span-7">
            {/* Clean Section Tag - No pill badges! */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-gold-500" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-gold-400">
                Performance Digital Marketing Agency
              </span>
            </div>

            {/* Massive Agency Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-syne font-black uppercase text-white tracking-tight leading-[0.98] mb-6">
              Growth Isn't Luck. <br />
              <span className="text-gold-gradient">It's Strategy.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-wolf-300 max-w-xl leading-relaxed mb-8">
              We specialize in generating quality leads, increasing brand visibility, and delivering measurable business growth with an uncompromising focus on ROI. 
              <span className="text-white font-medium"> Direct response. High-conversion web assets. Zero fluff.</span>
            </p>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gold-500 hover:bg-gold-400 text-wolf-950 font-syne font-extrabold text-sm uppercase tracking-wider transition-all duration-200 hover:shadow-gold-md"
              >
                <span>Book Free Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href={AGENCY_INFO.contacts.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-wolf-900 hover:bg-wolf-850 text-white border border-gold-500/30 hover:border-gold-500 text-xs font-mono uppercase tracking-wider transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Brand Proof Strip */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-wolf-850 max-w-lg">
              <div>
                <div className="text-2xl sm:text-3xl font-syne font-black text-gold-400">4.8x</div>
                <div className="text-[11px] font-mono text-wolf-400 uppercase tracking-wider mt-0.5">Average ROAS</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-syne font-black text-white">100k+</div>
                <div className="text-[11px] font-mono text-wolf-400 uppercase tracking-wider mt-0.5">Verified Leads</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-syne font-black text-gold-400">48h</div>
                <div className="text-[11px] font-mono text-wolf-400 uppercase tracking-wider mt-0.5">Launch Time</div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Campaign Architecture Board */}
          <div className="lg:col-span-5">
            <div className="bg-wolf-900 border border-gold-500/30 p-6 sm:p-7 shadow-2xl relative">
              {/* Header of board */}
              <div className="flex items-center justify-between pb-4 border-b border-wolf-800 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 bg-emerald-400" />
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    Live Performance System
                  </span>
                </div>
                <span className="text-[11px] font-mono text-gold-400">
                  VIRALWOLF // V4.2
                </span>
              </div>

              {/* Core Strategy Matrix */}
              <div className="space-y-3.5 mb-6">
                <div className="p-3.5 bg-wolf-950 border border-wolf-800 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white uppercase">Meta Paid Acquisition</div>
                    <div className="text-[11px] text-wolf-400 font-mono">Conversion API • Micro-Cohort Scaling</div>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 border border-emerald-500/30">
                    4.8x ROAS
                  </span>
                </div>

                <div className="p-3.5 bg-wolf-950 border border-wolf-800 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white uppercase">High-Conversion Web Systems</div>
                    <div className="text-[11px] text-wolf-400 font-mono">&lt; 1.2s Load Speed • Lead Form Funnels</div>
                  </div>
                  <span className="text-xs font-mono font-bold text-gold-400 bg-gold-950/60 px-2 py-0.5 border border-gold-500/30">
                    +64% CVR
                  </span>
                </div>

                <div className="p-3.5 bg-wolf-950 border border-wolf-800 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white uppercase">Direct-Response Creative</div>
                    <div className="text-[11px] text-wolf-400 font-mono">Short-Form Hooks • High Retention Video</div>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 border border-emerald-500/30">
                    -43% CAC
                  </span>
                </div>
              </div>

              {/* Agency Principles */}
              <div className="pt-4 border-t border-wolf-800 text-xs text-wolf-300 space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                  <span>100% Attribution Transparency — No vanity impressions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                  <span>Founder-led communication via dedicated WhatsApp channel</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-wolf-800 flex items-center justify-between">
                <span className="text-[11px] font-mono text-wolf-400">Direct Inquiries:</span>
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
      <div className="border-t border-gold-500/25 bg-black py-3 overflow-hidden select-none">
        <div className="flex whitespace-nowrap animate-shimmer" style={{ animationDuration: '25s' }}>
          <div className="flex items-center gap-8 text-xs font-mono font-bold uppercase tracking-[0.2em] text-gold-400/90 shrink-0">
            <span>META ADS</span>
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

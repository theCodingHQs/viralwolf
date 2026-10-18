import React from "react";
import { SERVICES } from "../data/agencyData";
import { ArrowUpRight, Check } from "lucide-react";
import {
  MetaAdsColorServiceIcon,
  GoogleAdsColorServiceIcon,
  WebDevColorServiceIcon,
  LandingPageColorServiceIcon,
  GraphicDesignColorServiceIcon,
  VideoEditingColorServiceIcon,
  SocialMediaColorServiceIcon,
} from "./icons/ColorIcons";

const SERVICE_ICON_MAP = {
  "meta-ads": MetaAdsColorServiceIcon,
  "google-ads": GoogleAdsColorServiceIcon,
  "website-development": WebDevColorServiceIcon,
  "landing-pages": LandingPageColorServiceIcon,
  "graphic-design": GraphicDesignColorServiceIcon,
  "video-editing": VideoEditingColorServiceIcon,
  "social-media": SocialMediaColorServiceIcon,
};

export default function ServicesSection({ onSelectService }) {
  return (
    <section
      id="services"
      className="py-8 px-3.5 sm:px-6 lg:px-8 border-b border-gold-500/20 w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-wolf-850 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-gold-500" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-gold-400">
                01 // Growth Capabilities
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-extrabold uppercase text-white tracking-tight">
              Our{" "}
              <span className="text-gold-gradient">Services &gt;&gt;&gt;</span>
            </h2>
          </div>
          <p className="text-wolf-300 text-sm sm:text-base max-w-md">
            Disciplined core services engineered to generate qualified
            demand, build digital authority, and extract maximum ROI from every
            marketing dollar.
          </p>
        </div>

        {/* Services Grid - 2 columns on small screens, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-7">
          {SERVICES.map((service, index) => {
            const indexFormatted = String(index + 1).padStart(2, "0");
            const IconComponent =
              SERVICE_ICON_MAP[service.id] || MetaAdsColorServiceIcon;

            return (
              <div
                key={service.id}
                onClick={() => onSelectService(service.title)}
                className="bg-wolf-900 border border-wolf-800 hover:border-gold-500/50 rounded-xl sm:rounded-2xl p-3 sm:p-7 flex flex-col justify-between transition-all duration-300 group hover:shadow-2xl relative overflow-hidden cursor-pointer sm:cursor-default"
              >
                {/* Ambient colorful backdrop glow based on service */}
                <div className="absolute top-0 right-0 w-32 sm:w-44 h-32 sm:h-44 bg-gold-500/5 rounded-full blur-2xl sm:blur-3xl group-hover:bg-gold-500/15 transition-all duration-500 pointer-events-none" />

                {/* MOBILE VIEW (sm:hidden): Clean column layout with ONLY icon/logo, title, subtitle & summary */}
                <div className="flex flex-col sm:hidden h-full justify-between">
                  <div>
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-xl bg-wolf-950 border border-wolf-800 group-hover:border-gold-500/50 p-2 flex items-center justify-center shrink-0 shadow-md mb-2.5 transition-colors">
                      <IconComponent className="w-6 h-6 drop-shadow-sm" />
                    </div>

                    {/* Number label */}
                    <div className="text-[10px] font-mono font-bold text-gold-400 mb-1">
                      // {indexFormatted}
                    </div>

                    {/* Title */}
                    <h3 className="text-xs font-sans font-bold uppercase text-white group-hover:text-gold-200 transition-colors leading-tight mb-1">
                      {service.title}
                    </h3>

                    {/* Subtitle */}
                    <div className="text-[10px] font-mono text-gold-400/90 font-medium leading-tight mb-2 line-clamp-1">
                      {service.subtitle}
                    </div>

                    {/* Summary */}
                    <p className="text-[11px] text-wolf-300 leading-snug line-clamp-3">
                      {service.summary}
                    </p>
                  </div>

                  {/* Compact Mobile Action Hint */}
                  <div className="pt-2 mt-2.5 border-t border-wolf-800/80 flex items-center justify-between text-[10px] font-mono font-bold text-gold-400 uppercase">
                    <span>Get Plan</span>
                    <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* DESKTOP VIEW (hidden sm:flex): Full Editorial Dashboard Layout */}
                <div className="hidden sm:flex sm:flex-col sm:justify-between sm:h-full">
                  <div>
                    {/* Top Section: Dashboard Stat Card Layout with PROMINENT Hero Icon */}
                    <div className="flex items-start justify-between gap-4 mb-6 pb-5 border-b border-wolf-850">
                      <div className="flex-1 pr-2">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-mono text-sm font-bold text-gold-400">
                            // {indexFormatted}
                          </span>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-wolf-400 px-2 py-0.5 rounded-md border border-wolf-800 bg-wolf-950/80">
                            {service.badge}
                          </span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-sans font-bold uppercase text-white group-hover:text-gold-200 transition-colors leading-snug">
                          {service.title}
                        </h3>
                        <div className="text-xs font-mono text-gold-400/90 font-medium mt-1.5">
                          {service.subtitle}
                        </div>
                      </div>

                      {/* Prominent Hero Icon */}
                      <div className="relative shrink-0">
                        <div className="absolute inset-0 rounded-2xl bg-gold-500/15 blur-xl group-hover:bg-gold-500/30 transition-all duration-300" />
                        <div className="relative w-20 h-20 rounded-2xl bg-wolf-950 border border-wolf-800 group-hover:border-gold-500/50 p-3.5 flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform duration-300">
                          <IconComponent className="w-14 h-14 drop-shadow-md" />
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-wolf-300 leading-relaxed mb-6">
                      {service.summary}
                    </p>

                    {/* Deliverables */}
                    <div className="space-y-2.5 mb-6 pt-4 border-t border-wolf-850">
                      <div className="text-[11px] font-mono font-bold uppercase text-wolf-400 tracking-wider mb-2">
                        Deliverables:
                      </div>
                      {service.deliverables.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 text-xs text-wolf-300"
                        >
                          <Check className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="pt-4 border-t border-wolf-850">
                    <div className="text-[11px] font-mono text-wolf-400 mb-3">
                      <span className="text-wolf-300 font-semibold">
                        Target:{" "}
                      </span>
                      {service.idealFor}
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectService(service.title);
                      }}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-wolf-950 hover:bg-gold-500 text-gold-400 hover:text-wolf-950 border border-gold-500/30 hover:border-gold-500 text-xs font-sans font-bold uppercase tracking-wider transition-colors duration-150 shadow-sm"
                    >
                      <span>Request {service.title} Plan</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Agency Action Footer */}
        <div className="mt-12 p-6 sm:p-8 bg-black border border-gold-500/30 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h4 className="text-lg sm:text-xl font-sans font-bold uppercase text-white mb-1">
              Need Multi-Channel Scaling?
            </h4>
            <p className="text-xs sm:text-sm text-wolf-300">
              Combine Meta Ads, Google Ads, custom conversion landing pages, and
              short-form video creatives for complete market dominance.
            </p>
          </div>
          <button
            onClick={() => onSelectService("Full Growth Package")}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-wolf-950 font-sans font-bold text-xs uppercase tracking-wider shrink-0 transition-colors"
          >
            <span>Consult Strategy Team</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

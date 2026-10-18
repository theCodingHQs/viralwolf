import React from "react";
import { WHY_CHOOSE_US, WHAT_WE_DELIVER } from "../data/agencyData";
import { ArrowUpRight, Check } from "lucide-react";

export default function WhyUsSection({ onOpenConsultation }) {
  return (
    <section
      id="why-us"
      className="py-8 px-4 sm:px-6 lg:px-8 border-b border-gold-500/20 w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-wolf-850 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-gold-500" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-gold-400">
                03 // Agency Credentials
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-extrabold uppercase text-white tracking-tight">
              Who We Are &amp;{" "}
              <span className="text-gold-gradient">
                Why Trust Us &gt;&gt;&gt;
              </span>
            </h2>
          </div>
          <p className="text-wolf-300 text-sm sm:text-base max-w-md">
            ViralWolf is an unapologetic, performance-first firm. We replace
            empty promises with hard mathematical ROI.
          </p>
        </div>

        {/* Agency Manifesto Board */}
        <div className="bg-black border border-gold-500/35 rounded-2xl p-8 sm:p-12 mb-8 relative overflow-hidden">
          <div className="max-w-4xl">
            <span className="font-mono text-xs font-bold text-gold-400 uppercase tracking-widest block mb-4">
              // THE VIRALWOLF MANIFESTO
            </span>
            <p className="text-xl sm:text-2xl md:text-3xl font-sans font-bold text-white leading-snug mb-6">
              "ViralWolf Advertising is a performance-driven digital marketing
              agency dedicated to helping businesses grow through smart
              strategies, creative campaigns, and data-driven marketing."
            </p>
            <p className="text-base sm:text-lg text-wolf-300 leading-relaxed mb-8">
              We specialize in generating quality leads, increasing brand
              visibility, and delivering measurable business growth with a focus
              on ROI. No vanity metrics. No bloated retainers. Just verified
              pipeline value.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-wolf-950 font-sans font-bold text-xs uppercase tracking-wider transition-colors"
              >
                <span>Partner With ViralWolf</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 6 Pillars - Why Businesses Trust Us */}
        <div className="mb-20">
          <h3 className="text-xl sm:text-2xl font-sans font-extrabold uppercase text-white mb-8 flex items-center gap-3">
            <span className="w-3.5 h-3.5 bg-gold-500 inline-block rounded-sm" />
            <span>Why Businesses Trust Us</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div
                key={idx}
                className="bg-wolf-900 border border-wolf-800 rounded-xl p-6 flex flex-col justify-between hover:border-gold-500/40 transition-colors"
              >
                <div>
                  <div className="font-mono text-xs font-bold text-gold-400 mb-2">
                    [ 0{idx + 1} ]
                  </div>
                  <h4 className="text-base font-sans font-bold uppercase text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-wolf-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What We Deliver - Architectural Checklist */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-wolf-850 mb-8">
            <h3 className="text-xl sm:text-2xl font-sans font-extrabold uppercase text-white flex items-center gap-3">
              <span className="w-3.5 h-3.5 bg-gold-500 inline-block rounded-sm" />
              <span>What We Deliver</span>
            </h3>
            <span className="font-mono text-xs text-gold-400 font-bold uppercase tracking-wider mt-2 sm:mt-0">
              "Because Your Growth Is The Only Metric That Truly Matters."
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHAT_WE_DELIVER.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-wolf-900/60 border border-wolf-800 rounded-xl hover:border-gold-500/40 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Check className="w-4 h-4 text-gold-400" />
                  <h4 className="text-sm font-sans font-bold uppercase text-white">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs text-wolf-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

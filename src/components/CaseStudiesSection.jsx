import React from "react";
import { CASE_STUDIES } from "../data/agencyData";
import { ArrowUpRight } from "lucide-react";

export default function CaseStudiesSection({ onOpenConsultation }) {
  return (
    <section
      id="results"
      className="py-8 px-4 sm:px-6 lg:px-8 border-b border-gold-500/20 bg-wolf-950 w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-wolf-850 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-gold-500" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-gold-400">
                05 // Verifiable Performance
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-extrabold uppercase text-white tracking-tight">
              Case{" "}
              <span className="text-gold-gradient">Studies &gt;&gt;&gt;</span>
            </h2>
          </div>
          <p className="text-wolf-300 text-sm sm:text-base max-w-md">
            Documented client campaigns with verified ad spend, lead costs, and
            revenue returns.
          </p>
        </div>

        {/* Case Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {CASE_STUDIES.map((study, idx) => (
            <div
              key={idx}
              className="bg-wolf-900 border border-wolf-800 hover:border-gold-500/40 rounded-2xl p-7 flex flex-col justify-between transition-colors"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-wolf-850 mb-4">
                  <span className="font-mono text-xs font-bold text-gold-400 uppercase">
                    {study.timeline} Campaign
                  </span>
                  <span className="text-[11px] font-mono text-wolf-400">
                    {study.service}
                  </span>
                </div>

                <h3 className="text-xl font-sans font-bold uppercase text-white mb-4">
                  {study.client}
                </h3>

                {/* Metrics Box */}
                <div className="grid grid-cols-3 gap-2 bg-black border border-wolf-800 rounded-xl p-3.5 mb-5">
                  {study.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="text-center">
                      <div className="text-base font-mono font-bold text-gold-400">
                        {m.value}
                      </div>
                      <div className="text-[9px] font-mono uppercase tracking-wider text-wolf-400 mt-1">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-wolf-300 leading-relaxed mb-6">
                  {study.highlight}
                </p>
              </div>

              <div className="pt-4 border-t border-wolf-850 flex items-center justify-between">
                <span className="font-mono text-[11px] text-emerald-400 uppercase">
                  ✓ Verified ROI
                </span>
                <button
                  onClick={onOpenConsultation}
                  className="font-sans text-xs font-bold uppercase tracking-wider text-gold-400 hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>Replicate Results</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import { HOW_WE_HELP_GROW } from "../data/agencyData";
import { ArrowUpRight, Check } from "lucide-react";

export default function ProcessSection({ onOpenConsultation }) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="process"
      className="py-8 px-4 sm:px-6 lg:px-8 border-b border-gold-500/20 bg-wolf-950 w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-wolf-850 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-gold-500" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-gold-400">
                02 // Proven Blueprint
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-extrabold uppercase text-white tracking-tight">
              How We{" "}
              <span className="text-gold-gradient">Help Grow &gt;&gt;&gt;</span>
            </h2>
          </div>
          <p className="text-wolf-300 text-sm sm:text-base max-w-md">
            Growth isn't luck. We deploy a systematic 5-stage acquisition
            roadmap designed to eliminate waste and compound revenue.
          </p>
        </div>

        {/* 5-Phase Horizontal Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 sm:gap-3 mb-8">
          {HOW_WE_HELP_GROW.map((item, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-4 text-left transition-all rounded-xl border ${
                  isActive
                    ? "bg-gold-500 text-wolf-950 border-gold-400 font-bold shadow-lg"
                    : "bg-wolf-900 text-wolf-300 border-wolf-800 hover:border-gold-500/30 hover:text-white"
                }`}
              >
                <div
                  className={`font-mono text-xs mb-1 font-bold ${isActive ? "text-wolf-950" : "text-gold-400"}`}
                >
                  PHASE {item.step}
                </div>
                <div className="text-xs sm:text-sm font-sans font-bold uppercase line-clamp-1">
                  {item.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Phase Deep Dive Board */}
        <div className="bg-wolf-900 border border-gold-500/40 rounded-2xl p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-wolf-800 mb-6">
            <div>
              <span className="font-mono text-xs font-bold uppercase text-gold-400 tracking-widest block mb-1">
                Execution Stage {HOW_WE_HELP_GROW[activeStep].step} / 05
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-sans font-extrabold uppercase text-white">
                {HOW_WE_HELP_GROW[activeStep].title}
              </h3>
            </div>
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-wolf-950 font-sans font-bold text-xs uppercase tracking-wider transition-colors shrink-0"
            >
              <span>Execute This Phase</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-wolf-200 text-base sm:text-lg leading-relaxed mb-8 max-w-4xl">
            {HOW_WE_HELP_GROW[activeStep].desc}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-wolf-800 text-xs font-mono text-wolf-300">
            <div className="flex items-center gap-2.5 p-3 rounded-lg bg-wolf-950/60 border border-wolf-800">
              <Check className="w-4 h-4 text-gold-400 shrink-0" />
              <span>Full KPI Accountability</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-lg bg-wolf-950/60 border border-wolf-800">
              <Check className="w-4 h-4 text-gold-400 shrink-0" />
              <span>Weekly Transparent Reviews</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-lg bg-wolf-950/60 border border-wolf-800">
              <Check className="w-4 h-4 text-gold-400 shrink-0" />
              <span>Rapid Creative Iteration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

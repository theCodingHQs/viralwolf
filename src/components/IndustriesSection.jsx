import React, { useState } from "react";
import { INDUSTRIES } from "../data/agencyData";
import {
  ArrowUpRight,
  Zap,
  TrendingUp,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import {
  RocketColorIcon,
  StoreColorIcon,
  MapPinColorIcon,
  ShoppingBagColorIcon,
  GraduationCapColorIcon,
  BuildingColorIcon,
  DumbbellColorIcon,
  UtensilsColorIcon,
  BriefcaseColorIcon,
  HealthcareColorIcon,
  AutomotiveColorIcon,
  ManyMoreColorIcon,
} from "./icons/ColorIcons";

const COLOR_ICON_MAP = {
  Rocket: RocketColorIcon,
  Store: StoreColorIcon,
  MapPin: MapPinColorIcon,
  ShoppingBag: ShoppingBagColorIcon,
  GraduationCap: GraduationCapColorIcon,
  Building2: BuildingColorIcon,
  Dumbbell: DumbbellColorIcon,
  Utensils: UtensilsColorIcon,
  Briefcase: BriefcaseColorIcon,
  Stethoscope: HealthcareColorIcon,
  Car: AutomotiveColorIcon,
  Layers: ManyMoreColorIcon,
};

export default function IndustriesSection({ onSelectIndustry }) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeIndustry = INDUSTRIES[selectedIdx];
  const ActiveIcon = COLOR_ICON_MAP[activeIndustry.icon] || RocketColorIcon;

  return (
    <section
      id="industries"
      className="py-8 px-3.5 sm:px-6 lg:px-8 border-b border-gold-500/20 bg-wolf-950/60 relative w-full overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[700px] h-[400px] bg-gold-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-wolf-850 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-gold-500" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-gold-400">
                04 // Market Sectors
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-extrabold uppercase text-white tracking-tight">
              Who We{" "}
              <span className="text-gold-gradient">Work With &gt;&gt;&gt;</span>
            </h2>
          </div>
          <p className="text-wolf-300 text-sm sm:text-base max-w-md">
            Our customer acquisition models are engineered to fit distinct
            margin profiles and buying cycles across diverse industries.
          </p>
        </div>

        {/* 12-Industry Interactive Dashboard-Style Stat Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-12">
          {INDUSTRIES.map((ind, idx) => {
            const isSelected = selectedIdx === idx;
            const IconComponent = COLOR_ICON_MAP[ind.icon] || RocketColorIcon;

            return (
              <button
                key={ind.id || idx}
                onClick={() => setSelectedIdx(idx)}
                className={`p-5 rounded-2xl text-left transition-all duration-300 border group relative overflow-hidden flex items-center justify-between min-h-[116px] ${
                  isSelected
                    ? "bg-gradient-to-r from-wolf-900 via-wolf-900 to-gold-950/40 border-gold-500 shadow-gold-md scale-[1.02]"
                    : "bg-wolf-900/90 border-wolf-800/80 hover:border-gold-500/50 hover:bg-wolf-850"
                }`}
              >
                {/* Background ambient glow highlight on card */}
                <div
                  className={`absolute -right-6 -bottom-6 w-32 h-32 rounded-full blur-2xl transition-opacity duration-300 pointer-events-none ${
                    isSelected
                      ? "bg-gold-500/25 opacity-100"
                      : "bg-gold-500/10 opacity-0 group-hover:opacity-100"
                  }`}
                />

                {/* Left Side: Category Data & Metrics */}
                <div className="flex-1 pr-3 z-10">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="font-mono text-xs font-bold text-gold-400">
                      // 0{idx + 1}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-wolf-400 px-2 py-0.5 rounded-md bg-wolf-950/80 border border-wolf-800">
                      {ind.kpi}
                    </span>
                  </div>

                  <div className="text-base sm:text-lg font-sans font-bold uppercase text-white group-hover:text-gold-200 transition-colors line-clamp-1">
                    {ind.name}
                  </div>

                  <div className="text-xs font-mono text-wolf-400 mt-1 line-clamp-1">
                    {ind.tag}
                  </div>
                </div>

                {/* Right Side: Spacious, Prominent Dashboard Icon */}
                <div className="relative shrink-0 flex items-center justify-center z-10">
                  <div
                    className={`w-16 h-16 sm:w-18 sm:h-18 rounded-2xl flex items-center justify-center p-2.5 transition-all duration-300 ${
                      isSelected
                        ? "bg-wolf-950 border border-gold-400/60 shadow-lg scale-105"
                        : "bg-wolf-950/80 border border-wolf-800 group-hover:border-gold-500/40 group-hover:scale-110 shadow-sm"
                    }`}
                  >
                    <IconComponent className="w-11 h-11 sm:w-12 sm:h-12 drop-shadow-md" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Sector Strategic Focus Showcase (Dashboard Hero View) */}
        <div className="bg-wolf-900 border border-gold-500/35 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden mb-12">
          {/* Subtle background glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Sector Blueprint Info with Big Hero Icon */}
            <div className="lg:col-span-8 space-y-5">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
                <div className="relative shrink-0">
                  <div className="absolute inset-0 bg-gold-500/20 rounded-2xl blur-xl" />
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-wolf-950 border border-gold-500/50 p-2.5 sm:p-3.5 flex items-center justify-center shrink-0 shadow-2xl">
                    <ActiveIcon className="w-10 h-10 sm:w-14 sm:h-14 drop-shadow-xl" />
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="font-mono text-xs font-bold text-gold-400 uppercase tracking-widest">
                      SECTOR PLAYBOOK // 0{selectedIdx + 1}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                      Active Model
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-sans font-extrabold uppercase text-white break-words">
                    {activeIndustry.name} Growth Architecture
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-wolf-300 leading-relaxed max-w-3xl">
                {activeIndustry.desc}
              </p>

              {/* 3 Architecture Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 bg-wolf-950/80 border border-wolf-800 rounded-xl flex items-center gap-3">
                  <Zap className="w-4 h-4 text-gold-400 shrink-0" />
                  <div>
                    <div className="text-[10px] font-mono uppercase text-wolf-400">
                      Primary Channel
                    </div>
                    <div className="text-xs font-sans font-bold text-white line-clamp-1">
                      {activeIndustry.channel}
                    </div>
                  </div>
                </div>

                <div className="p-3.5 bg-wolf-950/80 border border-wolf-800 rounded-xl flex items-center gap-3">
                  <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <div className="text-[10px] font-mono uppercase text-wolf-400">
                      Target Benchmark
                    </div>
                    <div className="text-xs font-sans font-bold text-emerald-400">
                      {activeIndustry.kpi}
                    </div>
                  </div>
                </div>

                <div className="p-3.5 bg-wolf-950/80 border border-wolf-800 rounded-xl flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                  <div>
                    <div className="text-[10px] font-mono uppercase text-wolf-400">
                      Accountability
                    </div>
                    <div className="text-xs font-sans font-bold text-white">
                      Verified Attribution
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: CTA Card */}
            <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end lg:pl-6 lg:border-l lg:border-wolf-800">
              <div className="w-full bg-wolf-950/80 border border-gold-500/30 rounded-2xl p-6 mb-4 shadow-xl">
                <span className="text-[11px] font-mono text-gold-400 uppercase tracking-wider block mb-1">
                  Ready To Deploy?
                </span>
                <p className="text-xs text-wolf-300 mb-5 leading-relaxed">
                  Claim your tailored acquisition model designed specifically
                  for{" "}
                  <span className="text-white font-bold">
                    {activeIndustry.name}
                  </span>
                  .
                </p>
                <button
                  onClick={() => onSelectIndustry(activeIndustry.name)}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-wolf-950 font-sans font-bold text-xs uppercase tracking-wider transition-colors shadow-gold-sm"
                >
                  <span>Get {activeIndustry.name} Blueprint</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              <span className="text-[11px] font-mono text-wolf-400 flex items-center gap-1.5 self-center lg:self-end">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                <span>Zero fluff • Mathematical ROI focus</span>
              </span>
            </div>
          </div>
        </div>

        {/* Full-Width Editorial Quote from Flyer */}
        <div className="bg-gradient-to-b from-black to-wolf-950 border border-gold-500/40 rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-50" />

          <p className="text-lg sm:text-2xl md:text-3xl font-sans font-extrabold uppercase text-white leading-tight mb-4">
            "No Matter Your Industry, If Growth Is Your Goal,{" "}
            <br className="hidden sm:inline" />
            <span className="text-gold-gradient">
              We're Ready To Help You Achieve It."
            </span>
          </p>
          <div className="font-mono text-xs font-bold tracking-widest text-gold-400 uppercase">
            ViralWolf Advertising — Performance Digital Marketing Agency
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { INDUSTRIES } from '../data/agencyData';
import { ArrowUpRight } from 'lucide-react';

export default function IndustriesSection({ onSelectIndustry }) {
  const [selectedIdx, setSelectedIdx] = useState(0);

  return (
    <section id="industries" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-gold-500/20">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-wolf-850 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-gold-500" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-gold-400">
                05 // Market Sectors
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-syne font-black uppercase text-white tracking-tight">
              Who We <span className="text-gold-gradient">Work With &gt;&gt;&gt;</span>
            </h2>
          </div>
          <p className="text-wolf-300 text-sm sm:text-base max-w-md">
            Our customer acquisition models are engineered to fit distinct margin profiles and buying cycles across diverse industries.
          </p>
        </div>

        {/* Industry Grid - Sharp Index Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-10">
          {INDUSTRIES.map((ind, idx) => {
            const isSelected = selectedIdx === idx;
            return (
              <button
                key={idx}
                onClick={() => setSelectedIdx(idx)}
                className={`p-3.5 text-left transition-all border ${
                  isSelected
                    ? 'bg-gold-500 text-wolf-950 border-gold-400 font-bold'
                    : 'bg-wolf-900 text-wolf-300 border-wolf-800 hover:border-gold-500/40 hover:text-white'
                }`}
              >
                <div className="font-mono text-[10px] mb-1 opacity-70">
                  // 0{idx + 1}
                </div>
                <div className="text-xs font-syne font-bold uppercase line-clamp-1">
                  {ind.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Sector Strategic Focus */}
        <div className="bg-wolf-900 border border-gold-500/30 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
          <div>
            <span className="font-mono text-xs font-bold text-gold-400 uppercase tracking-widest block mb-1">
              SECTOR FOCUS // {INDUSTRIES[selectedIdx].name}
            </span>
            <h3 className="text-xl sm:text-2xl font-syne font-black uppercase text-white mb-2">
              ViralWolf Growth Playbook for {INDUSTRIES[selectedIdx].name}
            </h3>
            <p className="text-sm text-wolf-300 max-w-3xl leading-relaxed">
              {INDUSTRIES[selectedIdx].desc}
            </p>
          </div>

          <button
            onClick={() => onSelectIndustry(INDUSTRIES[selectedIdx].name)}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-gold-500 hover:bg-gold-400 text-wolf-950 font-syne font-bold text-xs uppercase tracking-wider shrink-0 transition-colors"
          >
            <span>Get {INDUSTRIES[selectedIdx].name} Blueprint</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Full-Width Editorial Quote from Flyer */}
        <div className="bg-black border border-gold-500/40 p-8 sm:p-12 text-center">
          <p className="text-lg sm:text-2xl md:text-3xl font-syne font-black uppercase text-white leading-tight mb-4">
            "No Matter Your Industry, If Growth Is Your Goal, <br className="hidden sm:inline" />
            <span className="text-gold-gradient">We're Ready To Help You Achieve It."</span>
          </p>
          <div className="font-mono text-xs font-bold tracking-widest text-gold-400 uppercase">
            ViralWolf Advertising — Performance Digital Marketing Agency
          </div>
        </div>

      </div>
    </section>
  );
}

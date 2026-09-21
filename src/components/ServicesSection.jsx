import React from 'react';
import { SERVICES } from '../data/agencyData';
import { ArrowUpRight, Check } from 'lucide-react';

export default function ServicesSection({ onSelectService }) {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-gold-500/20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header - Editorial style, NO pill badges */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-wolf-850 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-gold-500" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-gold-400">
                01 // Growth Capabilities
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-syne font-black uppercase text-white tracking-tight">
              Our <span className="text-gold-gradient">Services &gt;&gt;&gt;</span>
            </h2>
          </div>
          <p className="text-wolf-300 text-sm sm:text-base max-w-md">
            Six disciplined core services engineered to generate qualified demand, build digital authority, and extract maximum ROI from every marketing dollar.
          </p>
        </div>

        {/* Services Grid - Numbered Architectural Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {SERVICES.map((service, index) => {
            const indexFormatted = String(index + 1).padStart(2, '0');

            return (
              <div
                key={service.id}
                className="bg-wolf-900 border border-wolf-800 hover:border-gold-500/50 p-7 flex flex-col justify-between transition-all duration-200 group hover:shadow-xl"
              >
                <div>
                  {/* Top Bar with Number and Tag */}
                  <div className="flex items-center justify-between pb-4 border-b border-wolf-850 mb-5">
                    <span className="font-mono text-xl font-bold text-gold-500">
                      {indexFormatted}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-wolf-400">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-syne font-black uppercase text-white group-hover:text-gold-300 transition-colors mb-2">
                    {service.title}
                  </h3>
                  <div className="text-xs font-mono text-gold-400 font-semibold mb-4">
                    {service.subtitle}
                  </div>
                  <p className="text-sm text-wolf-300 leading-relaxed mb-6">
                    {service.summary}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-wolf-850">
                    <div className="text-[11px] font-mono font-bold uppercase text-wolf-400 tracking-wider mb-2">
                      Deliverables:
                    </div>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-wolf-300">
                        <Check className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-wolf-850">
                  <div className="text-[11px] font-mono text-wolf-400 mb-3">
                    <span className="text-wolf-300 font-semibold">Target: </span>{service.idealFor}
                  </div>
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-wolf-950 hover:bg-gold-500 text-gold-400 hover:text-wolf-950 border border-gold-500/30 hover:border-gold-500 text-xs font-syne font-bold uppercase tracking-wider transition-colors duration-150"
                  >
                    <span>Request {service.title} Plan</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Agency Action Footer */}
        <div className="mt-12 p-6 sm:p-8 bg-black border border-gold-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h4 className="text-lg sm:text-xl font-syne font-bold uppercase text-white mb-1">
              Need Multi-Channel Scaling?
            </h4>
            <p className="text-xs sm:text-sm text-wolf-300">
              Combine Meta Ads, custom conversion landing pages, and short-form video creatives for complete market dominance.
            </p>
          </div>
          <button
            onClick={() => onSelectService('Full Growth Package')}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-gold-500 hover:bg-gold-400 text-wolf-950 font-syne font-extrabold text-xs uppercase tracking-wider shrink-0 transition-colors"
          >
            <span>Consult Strategy Team</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}

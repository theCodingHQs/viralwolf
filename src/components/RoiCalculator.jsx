import React, { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';

export default function RoiCalculator({ onOpenConsultation }) {
  const [budget, setBudget] = useState(40000);
  const [industry, setIndustry] = useState('ecommerce');

  const industryProfiles = {
    ecommerce: {
      name: 'E-commerce & D2C',
      avgRoas: 4.8,
      cpaMultiplier: 1.0,
      leadType: 'Purchases & Orders',
    },
    realestate: {
      name: 'Real Estate & Properties',
      avgRoas: 6.5,
      cpaMultiplier: 2.2,
      leadType: 'Buyer Inquiries',
    },
    healthcare: {
      name: 'Clinics & Healthcare',
      avgRoas: 5.0,
      cpaMultiplier: 1.4,
      leadType: 'Patient Consultations',
    },
    services: {
      name: 'Professional & B2B',
      avgRoas: 4.5,
      cpaMultiplier: 1.8,
      leadType: 'Client Inquiries',
    },
    local: {
      name: 'Local Storefronts',
      avgRoas: 4.2,
      cpaMultiplier: 0.9,
      leadType: 'Direct Calls & Visits',
    }
  };

  const profile = industryProfiles[industry] || industryProfiles.ecommerce;
  const estimatedRevenue = Math.round(budget * profile.avgRoas);
  const estimatedLeads = Math.round((budget / (320 * profile.cpaMultiplier)));

  return (
    <section id="calculator" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-gold-500/20 bg-wolf-950">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-wolf-850 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-gold-500" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-gold-400">
                04 // Performance Modeling
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-syne font-black uppercase text-white tracking-tight">
              Growth &amp; ROI <span className="text-gold-gradient">Estimator &gt;&gt;&gt;</span>
            </h2>
          </div>
          <p className="text-wolf-300 text-sm sm:text-base max-w-md">
            Model your prospective pipeline returns based on historical Meta Ads auction data and direct-response conversion funnels.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="bg-wolf-900 border border-gold-500/30 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Options */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <label className="block text-xs font-mono font-bold text-wolf-300 uppercase tracking-widest mb-3">
                  // SELECT INDUSTRY VERTICAL:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {Object.entries(industryProfiles).map(([key, data]) => (
                    <button
                      key={key}
                      onClick={() => setIndustry(key)}
                      className={`p-3 text-left transition-all border text-xs font-syne uppercase font-bold ${
                        industry === key
                          ? 'bg-gold-500 text-wolf-950 border-gold-400 font-extrabold'
                          : 'bg-wolf-950 text-wolf-300 border-wolf-800 hover:border-gold-500/40'
                      }`}
                    >
                      {data.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs font-mono font-bold text-wolf-300 uppercase tracking-widest">
                    // MONTHLY AD INVESTMENT:
                  </label>
                  <span className="text-xl font-mono font-bold text-gold-400">
                    ₹{budget.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  type="range"
                  min="15000"
                  max="500000"
                  step="5000"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full h-1.5 bg-wolf-800 appearance-none cursor-pointer accent-gold-500"
                />
                <div className="flex justify-between text-[10px] font-mono text-wolf-400 mt-2">
                  <span>₹15,000</span>
                  <span>₹1,50,000</span>
                  <span>₹3,00,000</span>
                  <span>₹5,00,000+</span>
                </div>
              </div>

              <div className="pt-4 border-t border-wolf-800 space-y-2 text-xs text-wolf-300 font-mono">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                  <span>Includes dynamic creative split testing & Conversions API</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                  <span>Optimized for qualified conversions, not empty clicks</span>
                </div>
              </div>
            </div>

            {/* Right Result Card */}
            <div className="lg:col-span-5 bg-black border border-gold-500/40 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-gold-400 mb-1">
                  PROJECTED MONTHLY REVENUE VALUE
                </div>
                <div className="text-3xl sm:text-4xl font-syne font-black text-gold-gradient mb-2">
                  ₹{estimatedRevenue.toLocaleString('en-IN')}
                </div>
                <div className="font-mono text-xs text-emerald-400 font-bold mb-6">
                  TARGET ROAS: {profile.avgRoas}x RETURN ON AD SPEND
                </div>

                <div className="bg-wolf-950 p-4 border border-wolf-850 mb-6">
                  <div className="text-xs text-wolf-400 font-mono mb-1">Estimated Inquiries / Leads:</div>
                  <div className="text-xl font-syne font-bold text-white">
                    ~{estimatedLeads} <span className="text-xs text-wolf-400 font-normal">({profile.leadType})</span>
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenConsultation}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-gold-500 hover:bg-gold-400 text-wolf-950 font-syne font-black text-xs uppercase tracking-wider transition-colors"
              >
                <span>Request Custom Funnel Blueprint</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

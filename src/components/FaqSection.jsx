import React, { useState } from 'react';
import { FAQS } from '../data/agencyData';
import { ChevronDown } from 'lucide-react';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-gold-500/20">
      <div className="max-w-4xl mx-auto">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-gold-500" />
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-gold-400">
              07 // Client Inquiries
            </span>
            <span className="w-8 h-[2px] bg-gold-500" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-syne font-black uppercase text-white tracking-tight mb-4">
            Frequently Asked <span className="text-gold-gradient">Questions &gt;&gt;&gt;</span>
          </h2>
          <p className="text-wolf-300 text-sm sm:text-base">
            Everything you need to know about partnering with ViralWolf Advertising.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-wolf-900 border border-wolf-800 transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 text-white hover:text-gold-300 transition-colors"
                >
                  <span className="font-syne text-base sm:text-lg font-bold uppercase">
                    {faq.question}
                  </span>
                  <div className={`p-1 text-gold-400 transition-transform duration-200 shrink-0 ${
                    isOpen ? 'rotate-180 text-white' : ''
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-sm text-wolf-300 leading-relaxed border-t border-wolf-800/60 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

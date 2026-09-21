import React, { useState, useEffect } from 'react';
import { AGENCY_INFO } from '../data/agencyData';
import { Menu, X, ArrowUpRight, MessageCircle, Phone } from 'lucide-react';

export default function Navbar({ onOpenConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Why ViralWolf', href: '#why-us' },
    { name: 'Industries', href: '#industries' },
    { name: 'ROI Estimator', href: '#calculator' },
    { name: 'Case Studies', href: '#results' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-wolf-950/95 backdrop-blur-md border-b border-gold-500/20 py-3 shadow-xl'
          : 'bg-transparent py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Editorial Wordmark */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 bg-black border border-gold-500/40 flex items-center justify-center p-1.5 transition-transform duration-200 group-hover:border-gold-400">
              <img
                src="/logo.png"
                alt="ViralWolf"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-syne font-extrabold tracking-tight text-white uppercase">
                  VIRAL<span className="text-gold-500">WOLF</span>
                </span>
                <span className="hidden sm:inline-block text-[11px] font-mono text-gold-400 font-bold tracking-widest">
                  &gt;&gt;&gt;
                </span>
              </div>
              <span className="text-[10px] font-mono tracking-[0.22em] text-wolf-400 uppercase -mt-0.5">
                Advertising Agency
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider text-wolf-300 hover:text-gold-400 transition-colors duration-150"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href={AGENCY_INFO.contacts.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-mono font-bold text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-500/60 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>{AGENCY_INFO.contacts.phoneDisplay}</span>
            </a>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider bg-gold-500 hover:bg-gold-400 text-wolf-950 transition-all duration-150 hover:shadow-gold-sm"
            >
              <span>Book Strategy Call</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={AGENCY_INFO.contacts.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-wolf-900 border border-gold-500/30 text-emerald-400"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 bg-wolf-900 border border-gold-500/30 text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-wolf-950 border-b border-gold-500/30 px-5 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2.5 pt-2 pb-4 border-b border-wolf-850">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold uppercase tracking-wider text-wolf-200 hover:text-gold-400 py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gold-500 text-wolf-950 font-bold uppercase tracking-wider text-xs"
            >
              <span>Book Free Strategy Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href={`tel:${AGENCY_INFO.contacts.phone}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-wolf-900 border border-gold-500/30 text-gold-300 font-mono text-xs"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: {AGENCY_INFO.contacts.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

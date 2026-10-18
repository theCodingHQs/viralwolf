import React, { useEffect } from "react";
import ContactSection from "../components/ContactSection";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import { ArrowLeft } from "lucide-react";

export default function ContactUsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact Us | ViralWolf Advertising";
  }, []);

  return (
    <div className="min-h-screen bg-wolf-950 text-wolf-100 flex flex-col justify-between selection:bg-gold-500/25 selection:text-gold-200 w-full max-w-full overflow-x-hidden">
      {/* Minimal Top Brand Bar (No full header, just clean return & brand presence) */}
      <header className="border-b border-gold-500/15 bg-wolf-950/80 backdrop-blur-md sticky top-0 z-40 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between w-full">
          <a href="/" className="flex items-center gap-3.5 group">
            <img
              src="/logo.png"
              alt="ViralWolf"
              className="h-10 sm:h-12 w-auto object-contain filter drop-shadow hover:scale-105 transition-transform duration-200"
            />
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-syne font-black text-white uppercase tracking-tight">
                VIRAL<span className="text-gold-500">WOLF</span>
              </span>
              <span className="text-[9px] font-mono tracking-[0.2em] text-wolf-400 uppercase -mt-0.5">
                Advertising Agency
              </span>
            </div>
          </a>

          <a
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-wolf-900 hover:bg-wolf-850 text-wolf-300 hover:text-white border border-wolf-800 hover:border-gold-500/30 text-xs font-mono uppercase tracking-wider transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-gold-400" />
            <span>Back to Home</span>
          </a>
        </div>
      </header>

      {/* Complete "Get In Touch" Section */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        <ContactSection />
      </main>

      {/* Minimal Bottom Copyright Strip (No full footer) */}
      <div className="border-t border-wolf-850/60 py-6 text-center text-xs text-wolf-500 font-mono">
        © {new Date().getFullYear()} ViralWolf Advertising — Growth Isn't Luck.
        It's Strategy.
      </div>

      {/* Floating Instant WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}

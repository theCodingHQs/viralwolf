import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { AGENCY_INFO } from "../data/agencyData";
import { WhatsAppIcon } from "./icons/ColorIcons";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-3">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-wolf-900 border border-gold-500/40 py-2 px-3.5 rounded-xl shadow-xl text-xs text-white">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Chat with ViralWolf Strategist</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-wolf-400 hover:text-white ml-1"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={AGENCY_INFO.contacts.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-wolf-950 flex items-center justify-center shadow-lg shadow-emerald-500/20 hover:scale-105 transition-all duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 text-wolf-950 fill-current" />
        <span className="absolute top-0 right-0 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-gold-400 border-2 border-wolf-950 rounded-full" />
      </a>
    </div>
  );
}

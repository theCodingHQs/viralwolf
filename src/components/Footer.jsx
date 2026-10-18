import React from "react";
import { AGENCY_INFO, SERVICES } from "../data/agencyData";
import { Phone, Mail, Instagram, MessageCircle, ArrowUp } from "lucide-react";
import { WhatsAppIcon } from "./icons/ColorIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black border-t border-gold-500/25 pt-16 pb-12 px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-wolf-850">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <img
                src="/logo.png"
                alt="ViralWolf"
                className="h-12 sm:h-14 w-auto object-contain filter drop-shadow hover:scale-105 transition-transform duration-200"
              />
              <div>
                <span className="text-xl font-syne font-black text-white uppercase tracking-tight block">
                  VIRAL<span className="text-gold-500">WOLF</span>
                </span>
                <span className="text-[10px] font-mono tracking-[0.25em] text-gold-400 uppercase block -mt-1">
                  Advertising Agency
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-wolf-300 max-w-sm leading-relaxed">
              Performance-driven digital marketing agency dedicated to scaling
              businesses through smart strategies, creative campaigns, and
              data-backed execution.
            </p>

            <div className="font-sans text-sm font-bold text-gold-400 uppercase tracking-wide pt-1">
              "Growth Isn't Luck. It's Strategy."
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href={AGENCY_INFO.contacts.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-wolf-900 border border-wolf-800 hover:border-emerald-500/50 rounded-lg flex items-center justify-center text-emerald-400 transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
              <a
                href={AGENCY_INFO.contacts.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-wolf-900 border border-wolf-800 hover:border-pink-500/50 rounded-lg flex items-center justify-center text-pink-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${AGENCY_INFO.contacts.email}`}
                className="w-9 h-9 bg-wolf-900 border border-wolf-800 hover:border-gold-500/50 rounded-lg flex items-center justify-center text-gold-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${AGENCY_INFO.contacts.phone}`}
                className="w-9 h-9 bg-wolf-900 border border-wolf-800 hover:border-gold-500/50 rounded-lg flex items-center justify-center text-gold-400 transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Core Services Links */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-mono font-bold text-gold-400 uppercase tracking-widest mb-4">
              Growth Capabilities
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-wolf-300">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="hover:text-gold-400 transition-colors flex items-center gap-2"
                  >
                    <span className="text-gold-500 font-mono text-[10px]">
                      &gt;
                    </span>
                    <span>{s.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contacts */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-bold text-gold-400 uppercase tracking-widest mb-4">
              Direct Inquiries
            </h4>
            <div className="space-y-3 text-xs text-wolf-300">
              <div>
                <span className="block text-[10px] font-mono text-wolf-500 uppercase font-semibold">
                  Phone / WhatsApp
                </span>
                <a
                  href={`tel:${AGENCY_INFO.contacts.phone}`}
                  className="font-mono text-white hover:text-gold-400 font-bold"
                >
                  {AGENCY_INFO.contacts.phoneDisplay}
                </a>
              </div>
              <div>
                <span className="block text-[10px] font-mono text-wolf-500 uppercase font-semibold">
                  Agency Email
                </span>
                <a
                  href={`mailto:${AGENCY_INFO.contacts.email}`}
                  className="font-mono text-white hover:text-gold-400 font-bold break-all"
                >
                  {AGENCY_INFO.contacts.email}
                </a>
              </div>
              <div>
                <span className="block text-[10px] font-mono text-wolf-500 uppercase font-semibold">
                  Official Instagram
                </span>
                <a
                  href={AGENCY_INFO.contacts.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-white hover:text-gold-400 font-bold"
                >
                  {AGENCY_INFO.contacts.instagram}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-wolf-500">
          <div>
            © {new Date().getFullYear()}{" "}
            <span className="text-wolf-300 font-bold font-sans uppercase">
              ViralWolf Advertising
            </span>
            . Scale Without Limits.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 font-mono text-wolf-400 hover:text-gold-400 transition-colors uppercase text-[11px]"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

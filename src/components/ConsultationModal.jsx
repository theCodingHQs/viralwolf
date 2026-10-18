import React, { useState, useEffect } from "react";
import { X, MessageCircle, ArrowUpRight } from "lucide-react";
import { WhatsAppIcon } from "./icons/ColorIcons";

export default function ConsultationModal({
  isOpen,
  onClose,
  initialService = "",
}) {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    service: initialService || "Meta Ads",
    budget: "₹25,000 - ₹50,000 / month",
    note: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi ViralWolf! I would like to book a Free Strategy Consultation.\n\nName: ${formData.name || "N/A"}\nBrand: ${formData.business || "N/A"}\nPhone: ${formData.phone || "N/A"}\nService: ${formData.service}\nBudget: ${formData.budget}\nDetails: ${formData.note || "Ready to scale."}`,
    );
    window.open(`https://wa.me/918960960360?text=${message}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-wolf-900 border border-gold-500/50 rounded-2xl p-6 sm:p-8 shadow-2xl z-10 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg bg-wolf-800 text-wolf-300 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="w-12 h-12 bg-gold-500 text-wolf-950 rounded-xl font-mono font-black text-xl flex items-center justify-center mx-auto mb-4">
              ✓
            </div>
            <h3 className="text-xl font-sans font-bold uppercase text-white mb-2">
              Strategy Brief Received
            </h3>
            <p className="text-xs text-wolf-300 font-mono mb-6 max-w-sm mx-auto">
              Our lead strategist will review your business model and reach out
              shortly.
            </p>
            <div className="flex flex-col gap-2.5">
              <button
                onClick={handleWhatsApp}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-wolf-950 font-sans font-bold text-xs uppercase tracking-wider transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Continue on WhatsApp Immediately</span>
              </button>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full py-2 text-xs font-mono text-wolf-400 hover:text-white uppercase transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div className="pb-3 border-b border-wolf-800">
              <span className="text-[10px] font-mono font-bold text-gold-400 uppercase tracking-widest block mb-1">
                // COMPLIMENTARY 30-MINUTE AUDIT
              </span>
              <h3 className="text-xl sm:text-2xl font-sans font-bold uppercase text-white">
                Book A Strategy Call
              </h3>
            </div>

            <div>
              <label className="block text-[11px] font-mono font-bold text-wolf-300 uppercase tracking-wider mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Rahul Sharma"
                className="w-full px-3.5 py-2.5 bg-wolf-950 border border-wolf-800 focus:border-gold-500 rounded-xl text-xs text-white placeholder-wolf-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono font-bold text-wolf-300 uppercase tracking-wider mb-1">
                Brand / Business *
              </label>
              <input
                type="text"
                required
                value={formData.business}
                onChange={(e) =>
                  setFormData({ ...formData, business: e.target.value })
                }
                placeholder="Company Name"
                className="w-full px-3.5 py-2.5 bg-wolf-950 border border-wolf-800 focus:border-gold-500 rounded-xl text-xs text-white placeholder-wolf-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono font-bold text-wolf-300 uppercase tracking-wider mb-1">
                WhatsApp / Phone Number *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder="+91 8960960360"
                className="w-full px-3.5 py-2.5 bg-wolf-950 border border-wolf-800 focus:border-gold-500 rounded-xl text-xs text-white placeholder-wolf-600 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-mono font-bold text-wolf-300 uppercase tracking-wider mb-1">
                  Service
                </label>
                <select
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-wolf-950 border border-wolf-800 focus:border-gold-500 rounded-xl text-[11px] font-mono text-white focus:outline-none"
                >
                  <option value="Meta Ads">Meta Ads</option>
                  <option value="Google Ads">Google Ads</option>
                  <option value="Website Development">Website</option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="Video Editing">Video Editing</option>
                  <option value="Social Media Management">Social Media</option>
                  <option value="Full Growth Package">Full Package</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold text-wolf-300 uppercase tracking-wider mb-1">
                  Budget
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) =>
                    setFormData({ ...formData, budget: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-wolf-950 border border-wolf-800 focus:border-gold-500 rounded-xl text-[11px] font-mono text-white focus:outline-none"
                >
                  <option value="₹25k - ₹50k / mo">₹25k - ₹50k / mo</option>
                  <option value="₹50k - ₹1.5L / mo">₹50k - ₹1.5L / mo</option>
                  <option value="₹1.5L+ / mo">₹1.5L+ / mo</option>
                </select>
              </div>
            </div>

            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              <button
                type="button"
                onClick={handleWhatsApp}
                className="w-full py-2 px-5 rounded-xl text-wolf-950 hover:bg-emerald-400 border border-emerald-500/40 bg-emerald-400/80 font-mono  uppercase font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <WhatsAppIcon className="w-6 h-6" />
                <span>WhatsApp</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

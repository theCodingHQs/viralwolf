import React, { useState } from "react";
import { AGENCY_INFO } from "../data/agencyData";
import {
  MessageCircle,
  Mail,
  Instagram,
  Phone,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { WhatsAppIcon } from "./icons/ColorIcons";

export default function ContactSection({ prefilledService = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    service: prefilledService || "Meta Ads",
    budget: "₹25,000 - ₹50,000 / month",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setSubmitted(true);
  // };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hi ViralWolf Team!\n\nName: ${formData.name || "Interested Client"}\nBusiness: ${formData.business || "N/A"}\nService: ${formData.service}\nBudget: ${formData.budget}\nNotes: ${formData.message || "Looking to discuss growth strategy."}`,
    );
    window.open(`https://wa.me/918960960360?text=${text}`, "_blank");
  };

  return (
    <section
      id="contact"
      className="py-8 px-4 sm:px-6 lg:px-8 bg-wolf-950 w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-wolf-850 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-gold-500" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-gold-400">
                07 // Direct Communication
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-extrabold uppercase text-white tracking-tight">
              Get In{" "}
              <span className="text-gold-gradient">Touch &gt;&gt;&gt;</span>
            </h2>
          </div>
          <div className="text-right md:max-w-md">
            <div className="font-sans text-lg font-bold text-white uppercase">
              "Let's Grow Beyond Limits."
            </div>
            <div className="text-xs font-mono text-gold-400 uppercase tracking-widest mt-1">
              Growth Isn't Luck. It's Strategy.
            </div>
          </div>
        </div>

        <div className="flex gap-8 items-stretch flex-col lg:flex-row">
          {/* Left Column: High-Ticket Consultation Form */}
          <div className="flex-1">
            <div className="bg-wolf-900 border border-gold-500/40 rounded-2xl p-6 sm:p-10 shadow-2xl">
              {submitted ? (
                <div className="py-8 text-center">
                  <div className="w-12 h-12 bg-gold-500 text-wolf-950 rounded-xl flex items-center justify-center mx-auto mb-4 font-mono font-black text-xl">
                    ✓
                  </div>
                  <h3 className="text-2xl font-sans font-extrabold uppercase text-white mb-2">
                    Consultation Request Logged
                  </h3>
                  <p className="text-xs sm:text-sm text-wolf-300 max-w-md mx-auto mb-8 font-mono">
                    Thank you {formData.name || "there"}. We have queued your
                    review. A senior growth strategist will reach out within 4-6
                    business hours.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleWhatsAppDirect}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-wolf-950 font-sans font-bold text-xs uppercase tracking-wider transition-colors"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>Open Instant WhatsApp Chat</span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-wolf-800 text-wolf-300 hover:text-white font-mono text-xs uppercase transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form /* onSubmit={handleSubmit} */ className="space-y-4">
                  <div className="pb-4 border-b border-wolf-800 mb-4">
                    <h3 className="text-xl sm:text-2xl font-sans font-bold uppercase text-white">
                      Book A Free Strategy Call
                    </h3>
                    <p className="text-xs text-wolf-400 font-mono mt-1">
                      Fill out this 60-second brief to claim your complimentary
                      marketing audit.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-wolf-300 uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 bg-wolf-950 border border-wolf-800 focus:border-gold-500 rounded-xl text-sm text-white placeholder-wolf-600 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold text-wolf-300 uppercase tracking-wider mb-1.5">
                        Brand / Business *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.business}
                        onChange={(e) =>
                          setFormData({ ...formData, business: e.target.value })
                        }
                        placeholder="e.g. Acme Corp"
                        className="w-full px-4 py-3 bg-wolf-950 border border-wolf-800 focus:border-gold-500 rounded-xl text-sm text-white placeholder-wolf-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-wolf-300 uppercase tracking-wider mb-1.5">
                        WhatsApp / Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+91 8960960360"
                        className="w-full px-4 py-3 bg-wolf-950 border border-wolf-800 focus:border-gold-500 rounded-xl text-sm text-white placeholder-wolf-600 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold text-wolf-300 uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 bg-wolf-950 border border-wolf-800 focus:border-gold-500 rounded-xl text-sm text-white placeholder-wolf-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-wolf-300 uppercase tracking-wider mb-1.5">
                        Primary Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-wolf-950 border border-wolf-800 focus:border-gold-500 rounded-xl text-xs font-mono text-white focus:outline-none"
                      >
                        <option value="Meta Ads">
                          Meta Ads (FB & IG Campaigns)
                        </option>
                        <option value="Google Ads">
                          Google Ads (Search & PMax)
                        </option>
                        <option value="Website Development">
                          Website Development
                        </option>
                        <option value="Graphic Design">
                          Graphic Design & Creatives
                        </option>
                        <option value="Video Editing">
                          Short-Form & Ad Video Editing
                        </option>
                        <option value="Social Media Management">
                          Social Media Management
                        </option>
                        <option value="Full Growth Funnel">
                          Full Growth Funnel (Multi-Channel)
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-wolf-300 uppercase tracking-wider mb-1.5">
                        Estimated Monthly Ad Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) =>
                          setFormData({ ...formData, budget: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-wolf-950 border border-wolf-800 focus:border-gold-500 rounded-xl text-xs font-mono text-white focus:outline-none"
                      >
                        <option value="Under ₹25,000 / month">
                          Under ₹25,000 / month
                        </option>
                        <option value="₹25,000 - ₹50,000 / month">
                          ₹25,000 - ₹50,000 / month
                        </option>
                        <option value="₹50,000 - ₹1,50,000 / month">
                          ₹50,000 - ₹1,50,000 / month
                        </option>
                        <option value="₹1,50,000 - ₹3,00,000 / month">
                          ₹1,50,000 - ₹3,00,000 / month
                        </option>
                        <option value="₹3,00,000+ / month">
                          ₹3,00,000+ / month
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-wolf-300 uppercase tracking-wider mb-1.5">
                      Current Marketing Bottleneck (Optional)
                    </label>
                    <textarea
                      rows="3"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="e.g. Generating leads at ₹160 and wanting to scale volume below ₹60 with higher show-up rate..."
                      className="w-full px-4 py-3 bg-wolf-950 border border-wolf-800 focus:border-gold-500 rounded-xl text-sm text-white placeholder-wolf-600 focus:outline-none resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    {/* <button
                      type="submit"
                      className="flex-1 py-4 px-6 rounded-xl bg-gold-500 hover:bg-gold-400 text-wolf-950 font-sans font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                    >
                      <span>Submit Strategy Request</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button> */}

                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="w-full py-2 px-5 rounded-xl text-wolf-950 hover:bg-emerald-400 border border-emerald-500/40 bg-emerald-400/80 font-mono  uppercase font-bold flex items-center justify-center gap-2 transition-colors"
                    >
                      <WhatsAppIcon className="w-8 h-8 shrink-0" />
                      <span>Send Via WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Left Column: Direct Communication Channels */}
          <div className=" flex flex-col gap-4 justify-between flex-1 ">
            {/* WhatsApp Box */}
            <a
              href={AGENCY_INFO.contacts.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-wolf-900 border border-wolf-800 hover:border-emerald-500/60 rounded-2xl transition-colors group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <WhatsAppIcon className="w-5 h-5 text-emerald-400" />
                  <span className="font-mono text-xs uppercase font-bold text-emerald-400 tracking-wider">
                    WhatsApp (Fastest Response)
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <div className="text-xl sm:text-2xl font-mono font-bold text-white group-hover:text-emerald-300 transition-colors">
                {AGENCY_INFO.contacts.phoneDisplay}
              </div>
              <div className="text-xs text-wolf-400 font-mono mt-1">
                Direct chat with senior growth strategist
              </div>
            </a>

            {/* Email Box */}
            <a
              href={`mailto:${AGENCY_INFO.contacts.email}?subject=Growth%20Inquiry%20from%20ViralWolf%20Website`}
              className="block p-6 bg-wolf-900 border border-wolf-800 hover:border-gold-500/60 rounded-2xl transition-colors group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-5 h-5 text-gold-400" />
                  <span className="font-mono text-xs uppercase font-bold text-gold-400 tracking-wider">
                    Agency Email
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gold-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <div className="text-lg sm:text-xl font-mono font-bold text-white group-hover:text-gold-200 transition-colors break-all">
                {AGENCY_INFO.contacts.email}
              </div>
              <div className="text-xs text-wolf-400 font-mono mt-1">
                Formal RFPs and campaign proposals
              </div>
            </a>

            {/* Instagram Box */}
            <a
              href={AGENCY_INFO.contacts.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-wolf-900 border border-wolf-800 hover:border-pink-500/60 rounded-2xl transition-colors group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <Instagram className="w-5 h-5 text-pink-400" />
                  <span className="font-mono text-xs uppercase font-bold text-pink-400 tracking-wider">
                    Instagram
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-pink-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <div className="text-xl font-mono font-bold text-white group-hover:text-pink-300 transition-colors">
                {AGENCY_INFO.contacts.instagram}
              </div>
              <div className="text-xs text-wolf-400 font-mono mt-1">
                Creative campaigns, breakdowns &amp; reels
              </div>
            </a>

            {/* Scale Without Limits Banner */}
            <div className="p-6 bg-black border border-gold-500/30 rounded-2xl text-center">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-gold-400 block mb-1">
                VIRALWOLF ADVERTISING
              </span>
              <span className="font-sans text-2xl font-extrabold uppercase text-white block">
                Scale Without Limits.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

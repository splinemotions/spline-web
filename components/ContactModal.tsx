"use client";

import React, { useState, useEffect } from "react";
import { X, Send, Check, Copy, Sparkles, Clock, Calendar } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [projectType, setProjectType] = useState("Product Launch Video");
  const [timeline, setTimeline] = useState("2-4 Weeks (Standard)");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const projectTypes = [
    "Product Launch Video",
    "SaaS Explainer Film",
    "UI/UX Motion System",
    "Product Demo & Tour",
    "Brand Motion & Identity",
    "Social Motion Cutdowns",
  ];

  const timelines = [
    "Under 2 Weeks (Sprint)",
    "2-4 Weeks (Standard)",
    "1-2 Months (Full Launch)",
    "Flexible / Ongoing",
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@splinemotion.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-200">
      
      {/* Ambient Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#ff5500]/15 blur-[160px] pointer-events-none" />

      <div className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#0f0f13] border border-white/10 shadow-2xl p-6 sm:p-8 flex flex-col gap-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
          <div>
            <span className="text-[11px] font-mono tracking-widest text-[#ff6b00] uppercase block mb-1">
              START A PROJECT
            </span>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Tell us about your product
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-zinc-400 hover:text-white border border-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-12 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#ff5500] to-[#ffa500] p-1 mb-4 flex items-center justify-center">
              <div className="w-full h-full bg-[#0a0a0c] rounded-full flex items-center justify-center text-emerald-400">
                <Check className="w-8 h-8" />
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">
              Inquiry Received!
            </h3>
            <p className="text-sm text-zinc-400 max-w-md mb-6 leading-relaxed">
              Barun and Hriday will personally review your brief and get back to you within 24 hours with visual thoughts and scope.
            </p>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-3">
              <span className="text-xs text-zinc-400">Direct studio line:</span>
              <button
                onClick={handleCopyEmail}
                className="text-xs font-mono font-medium text-[#ffa500] hover:underline flex items-center gap-1"
              >
                {copied ? "Copied to clipboard!" : "hello@splinemotion.com"}
              </button>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-8 px-6 py-2 rounded-full bg-white/[0.05] hover:bg-white/10 text-xs font-semibold text-zinc-300"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            
            {/* Step 1: Project Type Selection */}
            <div>
              <label className="text-xs font-semibold text-zinc-300 uppercase tracking-wider block mb-2.5">
                1. What do you need motion for?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {projectTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setProjectType(type)}
                    className={`px-3 py-2 rounded-xl text-xs font-medium transition-all text-left border ${
                      projectType === type
                        ? "bg-gradient-to-r from-[#ff5500]/20 to-[#ff7a00]/20 text-[#ffa500] border-[#ff7a00]"
                        : "bg-white/[0.03] text-zinc-400 border-white/[0.06] hover:bg-white/[0.06] hover:text-white"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Timeline Selection */}
            <div>
              <label className="text-xs font-semibold text-zinc-300 uppercase tracking-wider block mb-2.5">
                2. Target launch timeline
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {timelines.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setTimeline(time)}
                    className={`px-3 py-2 rounded-xl text-xs font-medium transition-all text-left border ${
                      timeline === time
                        ? "bg-gradient-to-r from-[#ff5500]/20 to-[#ff7a00]/20 text-[#ffa500] border-[#ff7a00]"
                        : "bg-white/[0.03] text-zinc-400 border-white/[0.06] hover:bg-white/[0.06] hover:text-white"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-zinc-400 block mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Vance"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-[#ff7a00] transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-zinc-400 block mb-1.5">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-[#ff7a00] transition-colors"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs font-medium text-zinc-400 block mb-1.5">
                  Product / Company Website
                </label>
                <input
                  type="url"
                  placeholder="https://yourproduct.com"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-[#ff7a00] transition-colors"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs font-medium text-zinc-400 block mb-1.5">
                  Tell us what you want to communicate
                </label>
                <textarea
                  rows={3}
                  placeholder="Briefly describe your product, new features, or launch goals..."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-[#ff7a00] transition-colors resize-none"
                />
              </div>
            </div>

            {/* Submit & direct line */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="text-xs text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied!" : "or email hello@splinemotion.com"}</span>
              </button>

              <button
                type="submit"
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-gradient-to-r from-[#ff5500] to-[#ff7a00] text-white text-xs font-bold shadow-glow-sm hover:shadow-glow-md flex items-center justify-center gap-2 transition-all hover:scale-105"
              >
                Send Project Brief
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { founders, studioStats } from "@/data/founders";
import { Copy, Check, Mail, Sparkles, UserCheck, ShieldCheck } from "lucide-react";

interface FoundersProps {
  onOpenContact: () => void;
}

export default function Founders({ onOpenContact }: FoundersProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("hello@splinemotion.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="studio" className="py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff5500]/10 blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-3">
            <span className="text-xs font-mono font-semibold tracking-wider text-[#ff6b00] uppercase block">
              05/ the studio
            </span>
          </div>

          <div className="lg:col-span-9">
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight">
              Two Founders. Zero Bloat. <br />
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#ffa500]">
                Built by founders. Made for founders.
              </span>
            </h2>
            <p className="mt-4 text-base text-zinc-400 max-w-2xl leading-relaxed">
              Spline Motion was built by two friends: <strong>Barun Mazumder</strong> and <strong>Hriday Das</strong>. We are not a bloated agency with accounts people and junior handoffs. The people working directly on your project are the people building the studio.
            </p>
          </div>
        </div>

        {/* Studio Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {studioStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded-2xl bg-[#111114] border border-white/[0.08] shadow-card-glow"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff5500] to-[#ffa500] mb-1 font-mono">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-zinc-400">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Two Founders Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-[#101013] border border-white/[0.08] hover:border-[#ff7a00]/30 transition-all duration-300 flex flex-col justify-between group shadow-card-glow"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#ffa500] uppercase block mb-1">
                      {founder.role}
                    </span>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {founder.name}
                    </h3>
                    <p className="text-xs text-zinc-400 font-medium mt-0.5">
                      {founder.title}
                    </p>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#ff5500] to-[#ffa500] p-0.5 shrink-0">
                    <div className="w-full h-full bg-[#0a0a0c] rounded-[14px] flex items-center justify-center font-mono font-bold text-[#ff6b00]">
                      {founder.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                  {founder.bio}
                </p>

                {/* Specialties */}
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                    Core Focus:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {founder.specialty.map((s, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg text-[10px] font-medium bg-white/[0.04] text-zinc-300 border border-white/[0.06]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action row */}
              <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between">
                <button
                  onClick={onOpenContact}
                  className="text-xs font-semibold text-[#ffa500] hover:text-white transition-colors flex items-center gap-1.5"
                >
                  Work with {founder.name.split(" ")[0]}
                  <Sparkles className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={handleCopy}
                  className="text-xs text-zinc-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400 text-[11px]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Mail className="w-3 h-3" />
                      <span className="text-[11px]">hello@splinemotion.com</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

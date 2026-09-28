"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown, Sparkles, Zap, ShieldCheck } from "lucide-react";

interface HeroProps {
  onOpenContact: () => void;
  onOpenVideo: (projectId: string) => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden">
      {/* Ambient Lighting matching inspo-1 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-[#ff5500]/25 via-[#ff7a00]/10 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#ff5500]/15 blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#ff7a00]/10 blur-[140px] pointer-events-none -z-10" />

      {/* Background Dot Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-between">
        
        {/* Top Eyebrow + Studio Info */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 w-fit">
            <span className="w-2 h-2 rounded-full bg-[#ff5500] animate-pulse" />
            <span className="text-[11px] font-semibold tracking-wider uppercase text-zinc-300">
              Motion Design for SaaS, AI & Technology
            </span>
          </div>

          <div className="text-xs text-zinc-400 font-normal max-w-xs sm:text-right hidden md:block">
            Founded by Barun Mazumder & Hriday Das
            <span className="block text-[11px] text-zinc-400">Two-person studio • Direct founder execution</span>
          </div>
        </motion.div>

        {/* Hero Headline Area */}
        <div className="my-auto py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
            
            {/* Main Punchy Typography */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-8"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.08]">
                Motion That <br />
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#ffa500]">
                  Reveals The True
                </span> <br />
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff5500] via-[#ff7a00] to-[#ffa500] drop-shadow-[0_0_40px_rgba(255,85,0,0.35)]">
                  Essence Of Your
                </span> <br />
                Product.
              </h1>
            </motion.div>

            {/* Supporting Pitch & Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-4 flex flex-col justify-end"
            >
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-6">
                We craft high-converting product videos, explainer films, and UI motion design for modern technology companies. Built by founders who speak fluent product.
              </p>

              <div className="flex items-center gap-3">
                <button
                  onClick={onOpenContact}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-[#ff5500] via-[#ff6b00] to-[#ff8500] text-white text-xs sm:text-sm font-bold shadow-glow-md hover:shadow-glow-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  Start a Project
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <a
                  href="#work"
                  className="px-5 py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs sm:text-sm font-medium text-zinc-300 hover:text-white transition-all flex items-center gap-1.5"
                >
                  Explore Work
                  <ArrowDown className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>

          </div>

          {/* Bento Feature Cards Strip (Inspo-1 Style) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            
            {/* Card 1: STRATEGY & FULL-CYCLE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-5 rounded-3xl bg-[#111114]/90 backdrop-blur-xl border border-white/10 shadow-card-glow hover:border-[#ff7a00]/30 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-fit px-3 py-1 rounded-full bg-gradient-to-r from-[#ff5500] to-[#ff7a00] text-white shadow-glow-sm text-[10px] font-bold tracking-wider uppercase mb-4">
                  STRATEGY & STORY
                </div>
                <h3 className="text-base font-bold text-white tracking-tight mb-2">
                  FULL-CYCLE CRAFT
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  From deep-rooted product strategy to flawless motion delivery. We build the core visual asset of your launch.
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                <a
                  href="#services"
                  className="text-xs font-semibold text-zinc-300 hover:text-[#ffa500] flex items-center gap-1 transition-colors"
                >
                  View services
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#ff6b00]" />
                </a>
                <div className="w-8 h-8 rounded-lg overflow-hidden border border-white/10 relative bg-black shrink-0">
                  <Image
                    src="/images/cycle_thumb.jpg"
                    alt="Full Cycle Motion"
                    fill
                    sizes="32px"
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Card 2: FUTURE-READY */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="p-5 rounded-3xl bg-[#111114]/90 backdrop-blur-xl border border-white/10 shadow-card-glow hover:border-[#ff7a00]/30 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/[0.08] text-white">
                    FUTURE-READY
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#ff5500]" />
                </div>
                <h3 className="text-base font-bold text-white tracking-tight mb-2">
                  AI & SAAS SPECIALIZATION
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  Integrating high-end motion design and product storytelling to keep your tech brand ahead of the curve.
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                <button
                  onClick={onOpenContact}
                  className="text-xs font-semibold text-[#ffa500] hover:text-white flex items-center gap-1 transition-colors"
                >
                  Consultation
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <div className="w-8 h-8 rounded-lg overflow-hidden border border-white/10 relative bg-black shrink-0">
                  <Image
                    src="/images/future_art.jpg"
                    alt="Future Ready Motion"
                    fill
                    sizes="32px"
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Card 3: motion agency overlay banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.46 }}
              className="p-5 rounded-3xl bg-gradient-to-br from-[#16161a] to-[#0d0d10] border border-white/10 shadow-card-glow hover:border-[#ff7a00]/30 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-400 block mb-1">
                  BOUTIQUE STUDIO
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tighter leading-none mb-3">
                  motion <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#ffa500]">
                    agency
                  </span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Direct collaboration with founders Barun & Hriday. Zero middle managers, zero generic stock templates.
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-[11px] font-medium text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  Q4/Q1 Booking Open
                </span>
                <button
                  onClick={onOpenContact}
                  className="text-xs font-bold text-[#ff6b00] hover:text-[#ffa500] transition-colors flex items-center gap-1"
                >
                  Book Now
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Bottom Metrics / Capability Badges Ticker */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-6 flex-wrap">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <Sparkles className="w-3.5 h-3.5 text-[#ff6b00]" />
              SaaS Explainer Videos
            </span>
            <span className="hidden sm:inline-block text-zinc-700">•</span>
            <span className="flex items-center gap-1.5 text-zinc-300">
              <Zap className="w-3.5 h-3.5 text-[#ff6b00]" />
              Product & Feature Launches
            </span>
            <span className="hidden sm:inline-block text-zinc-700">•</span>
            <span className="flex items-center gap-1.5 text-zinc-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#ff6b00]" />
              UI/UX & Design Systems
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#work"
              className="text-xs text-[#ffa500] hover:text-white flex items-center gap-1 transition-colors font-medium"
            >
              Watch Featured Projects
              <ArrowDown className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

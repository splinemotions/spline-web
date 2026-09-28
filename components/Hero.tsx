"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Play, Pause, Volume2, VolumeX, Sparkles, Zap, ShieldCheck, Maximize2 } from "lucide-react";

interface HeroProps {
  onOpenContact: () => void;
  onOpenVideo: (projectId: string) => void;
}

export default function Hero({ onOpenContact, onOpenVideo }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-[#ff5500]/25 via-[#ff7a00]/10 to-transparent blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-[#ff5500]/15 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#ff7a00]/10 blur-[130px] pointer-events-none -z-10" />

      {/* Background Dot Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-between">
        
        {/* Top Eyebrow + Studio Info */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 mb-6"
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

        {/* Hero Composition: 3-Column Structured Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-4">
          
          {/* LEFT COLUMN: Headline + Strategy & Full-Cycle Cards */}
          <div className="lg:col-span-5 flex flex-col justify-center z-20">
            
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl xl:text-6xl font-light tracking-tight text-white leading-[1.12]"
            >
              Motion That <br />
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#ffa500]">
                Reveals The True
              </span> <br />
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff5500] via-[#ff7a00] to-[#ffa500] drop-shadow-[0_0_35px_rgba(255,85,0,0.35)]">
                Essence Of Your
              </span> <br />
              Product
            </motion.h1>

            {/* Badges placed safely below the text in natural flow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 flex flex-col gap-3 max-w-[380px]"
            >
              {/* Orange Pill: Strategy & Story */}
              <div className="w-fit px-4 py-2 rounded-2xl bg-gradient-to-r from-[#ff5500] to-[#ff7a00] text-white shadow-glow-sm">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span className="text-[10px] font-bold tracking-widest uppercase">STRATEGY & STORY</span>
                </div>
                <span className="text-xs font-semibold">PRODUCT-LED MOTION DESIGN</span>
              </div>

              {/* Bento Card: FULL-CYCLE */}
              <div className="p-4 rounded-2xl bg-[#121214]/85 backdrop-blur-xl border border-white/10 shadow-card-glow hover:border-[#ff7a00]/30 transition-all duration-300">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                      FULL-CYCLE
                    </h4>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                      From deep-rooted product strategy to flawless motion delivery. We build the core visual asset of your launch.
                    </p>
                  </div>
                  <div className="w-11 h-11 rounded-xl overflow-hidden border border-white/10 shrink-0 relative bg-black">
                    <Image
                      src="/images/cycle_thumb.jpg"
                      alt="Full Cycle Motion"
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-white/[0.06] flex items-center justify-between">
                  <a
                    href="#services"
                    className="text-[11px] font-medium text-zinc-300 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    View services
                    <ArrowUpRight className="w-3 h-3 text-[#ff6b00]" />
                  </a>
                  <span className="text-[10px] text-zinc-400 font-mono">100% Bespoke</span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* CENTER COLUMN: High-Energy Motion Showreel Player (Replacing the portrait) */}
          <div className="lg:col-span-4 flex items-center justify-center relative my-6 lg:my-0">
            {/* Ambient Halo behind Video */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#ff5500]/35 via-[#ff7a00]/15 to-transparent rounded-full blur-3xl scale-95 pointer-events-none" />

            <div className="relative w-full max-w-[360px] aspect-[4/5] sm:aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group bg-[#09090c] flex flex-col justify-between p-3.5">
              
              {/* Background Looping Motion Video */}
              <video
                ref={videoRef}
                src="https://res.cloudinary.com/dn95xxkye/video/upload/v1780144140/RAYCAST_sdv1sb.mp4"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient overlays for cinematic depth and control readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/60 pointer-events-none" />

              {/* Top Bar of the Video Card */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-[#ffa500] border border-white/10 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500] animate-ping" />
                  SHOWREEL PREVIEW
                </span>

                <button
                  onClick={() => onOpenVideo("raycast")}
                  className="p-1.5 rounded-full bg-black/60 hover:bg-white/20 text-white backdrop-blur-md border border-white/10 transition-colors"
                  title="Expand to Fullscreen"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Center Play/Pause Overlay */}
              <div className="relative z-10 my-auto text-center">
                <button
                  onClick={togglePlay}
                  className="w-14 h-14 rounded-full bg-black/55 hover:bg-[#ff5500] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-glow-sm mx-auto group-hover:border-[#ff7a00]"
                  title={isPlaying ? "Pause Video" : "Play Video"}
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 text-white" />
                  ) : (
                    <Play className="w-5 h-5 fill-white text-white ml-0.5" />
                  )}
                </button>
              </div>

              {/* Bottom Video Controls & Info */}
              <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/10 bg-black/40 backdrop-blur-md -mx-3.5 -mb-3.5 p-3 rounded-b-3xl">
                <div>
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">
                    FEATURED PROJECT
                  </span>
                  <span className="text-xs font-bold text-white">
                    Raycast Kinetic UI
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleMute}
                    className="p-1.5 rounded-lg bg-white/[0.08] hover:bg-[#ff5500] text-white border border-white/10 transition-colors"
                    title={isMuted ? "Unmute Audio" : "Mute Audio"}
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    onClick={() => onOpenVideo("raycast")}
                    className="text-[11px] font-semibold text-[#ffa500] hover:text-white flex items-center gap-1 transition-colors px-2 py-1"
                  >
                    Case Study
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Future-Ready Card + "motion agency" Typographic CTA */}
          <div className="lg:col-span-3 flex flex-col justify-between h-full gap-8 z-20">
            
            {/* Future-Ready Card on the Top Right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="p-4 rounded-2xl bg-[#121214]/85 backdrop-blur-xl border border-white/10 shadow-card-glow hover:border-[#ff7a00]/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/[0.08] text-white">
                  FUTURE-READY
                </span>
                <span className="w-2 h-2 rounded-full bg-[#ff5500]" />
              </div>
              <p className="text-[11px] text-zinc-300 leading-relaxed mb-3">
                Integrating high-end motion design and product storytelling to keep your tech brand ahead of the curve.
              </p>
              <div className="flex items-center justify-between pt-2.5 border-t border-white/[0.06]">
                <button
                  onClick={onOpenContact}
                  className="text-[11px] font-semibold text-[#ffa500] hover:text-white transition-colors flex items-center gap-1"
                >
                  Consultation
                  <ArrowUpRight className="w-3 h-3" />
                </button>
                <div className="w-7 h-7 rounded-lg overflow-hidden border border-white/10 relative bg-black">
                  <Image
                    src="/images/future_art.jpg"
                    alt="Future Ready Motion"
                    fill
                    sizes="28px"
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Bottom: "motion agency" + Gradient CTA Button (Directly inspired by inspo-1) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col items-start lg:items-end mt-4"
            >
              <div className="flex flex-col items-start lg:items-end leading-none">
                <span className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tighter">
                  motion
                </span>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tighter">
                    agency
                  </span>
                  
                  {/* Primary Orange Gradient Button */}
                  <button
                    onClick={onOpenContact}
                    className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#ff5500] via-[#ff6b00] to-[#ff8500] text-white text-xs font-bold shadow-glow-md hover:shadow-glow-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-1.5 shrink-0"
                  >
                    Start a Project
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
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
            <button
              onClick={() => onOpenVideo("raycast")}
              className="text-xs text-[#ffa500] hover:text-white flex items-center gap-1 transition-colors font-medium"
            >
              Watch Raycast Case Study
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

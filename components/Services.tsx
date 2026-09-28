"use client";

import React from "react";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import {
  Rocket,
  Layers,
  MonitorPlay,
  Sparkles,
  Film,
  Share2,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

interface ServicesProps {
  onOpenContact: () => void;
}

export default function Services({ onOpenContact }: ServicesProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case "Rocket":
        return <Rocket className="w-5 h-5 text-[#ff6b00]" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-[#ff7a00]" />;
      case "MonitorPlay":
        return <MonitorPlay className="w-5 h-5 text-[#ffa500]" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-[#ff6b00]" />;
      case "Film":
        return <Film className="w-5 h-5 text-[#ff7a00]" />;
      case "Share2":
        return <Share2 className="w-5 h-5 text-[#ffa500]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#ff6b00]" />;
    }
  };

  const clientTypes = [
    "SaaS Companies",
    "AI & ML Products",
    "B2B Technology",
    "Developer Tools & APIs",
    "Product-Led Startups",
    "Software Platforms",
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff5500]/10 blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-3">
            <span className="text-xs font-mono font-semibold tracking-wider text-[#ff6b00] uppercase block">
              03/ capabilities
            </span>
          </div>

          <div className="lg:col-span-9">
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight">
              What Spline Motion Does. <br />
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#ffa500]">
                High-end motion tailored for tech.
              </span>
            </h2>
            <p className="mt-4 text-base text-zinc-400 max-w-2xl leading-relaxed">
              We focus on products that are technically interesting but difficult to explain quickly. We turn new features, developer platforms, and complex architectures into intuitive visual assets.
            </p>

            {/* Who We Work With Badges */}
            <div className="mt-8 flex flex-wrap items-center gap-2">
              <span className="text-xs text-zinc-500 font-mono uppercase mr-2">
                Built For:
              </span>
              {clientTypes.map((client) => (
                <span
                  key={client}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-white/[0.04] text-zinc-300 border border-white/[0.08]"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="p-7 rounded-3xl bg-[#111114] border border-white/[0.08] hover:border-[#ff7a00]/30 transition-all duration-300 flex flex-col justify-between group shadow-card-glow hover:-translate-y-1"
            >
              <div>
                {/* Header Icon + ID */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:bg-[#ff5500]/10 transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-zinc-400">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-[#ffa500] transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs font-medium text-[#ff7a00] mb-3">
                  {service.tagline}
                </p>

                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Points list */}
              <div className="pt-4 border-t border-white/[0.06]">
                <ul className="space-y-2">
                  {service.points.map((pt, i) => (
                    <li key={i} className="text-[11px] text-zinc-400 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#ff6b00] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Direct Scope Consultation CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 text-xs sm:text-sm font-semibold text-zinc-200 hover:text-white transition-all shadow-sm"
          >
            <span>Need a custom scope or specific deliverable?</span>
            <span className="text-[#ffa500] flex items-center gap-1 font-bold">
              Let&apos;s talk <ArrowUpRight className="w-4 h-4" />
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}

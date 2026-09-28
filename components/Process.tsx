"use client";

import React from "react";
import { motion } from "framer-motion";
import { processSteps } from "@/data/services";
import { Check, Compass, FileText, Wand2, Send } from "lucide-react";

export default function Process() {
  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Compass className="w-5 h-5 text-[#ff6b00]" />;
      case 1:
        return <FileText className="w-5 h-5 text-[#ff7a00]" />;
      case 2:
        return <Wand2 className="w-5 h-5 text-[#ffa500]" />;
      case 3:
        return <Send className="w-5 h-5 text-[#ff5500]" />;
      default:
        return <Compass className="w-5 h-5 text-[#ff6b00]" />;
    }
  };

  return (
    <section id="process" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#ff5500]/10 blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-3">
            <span className="text-xs font-mono font-semibold tracking-wider text-[#ff6b00] uppercase block">
              04/ our approach
            </span>
          </div>

          <div className="lg:col-span-9">
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight">
              Strategy + Storytelling + Design + Motion. <br />
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#ffa500]">
                A disciplined 4-step creative workflow.
              </span>
            </h2>
            <p className="mt-4 text-base text-zinc-400 max-w-2xl leading-relaxed">
              We eliminate friction. You communicate directly with the motion designers crafting every frame, ensuring your product vision is never lost in translation.
            </p>
          </div>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-7 rounded-3xl bg-[#111114] border border-white/[0.08] hover:border-[#ff7a00]/30 transition-all duration-300 flex flex-col justify-between group shadow-card-glow relative"
            >
              <div>
                {/* Step Number + Icon */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff5500] to-[#ffa500] font-mono">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getStepIcon(index)}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight mb-1 group-hover:text-[#ffa500] transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs font-medium text-[#ff7a00] mb-3">
                  {step.subtitle}
                </p>

                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Deliverables */}
              <div className="pt-4 border-t border-white/[0.06]">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                  Key Outcomes:
                </span>
                <ul className="space-y-1.5">
                  {step.deliverables.map((item, i) => (
                    <li key={i} className="text-[11px] text-zinc-300 flex items-center gap-1.5">
                      <Check className="w-3 h-3 text-[#ff6b00] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

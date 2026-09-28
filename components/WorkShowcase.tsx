"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { Project } from "@/types";
import VideoPlayer from "./VideoPlayer";
import { ArrowUpRight, Play, Sparkles } from "lucide-react";

interface WorkShowcaseProps {
  onSelectProject: (project: Project) => void;
  onOpenContact: () => void;
}

export default function WorkShowcase({ onSelectProject, onOpenContact }: WorkShowcaseProps) {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Developer Tools", "Fintech / SaaS", "Global Infrastructure", "Editorial & Brand"];

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="work" className="py-24 relative overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#ff7a00]/10 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono font-semibold tracking-wider text-[#ff6b00] uppercase block mb-3">
              02/ selected work
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white">
              Engineered for clarity. <br />
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#ffa500]">
                Animated for impact.
              </span>
            </h2>
          </div>

          <p className="text-sm text-zinc-400 max-w-md">
            We partner directly with founders and product teams to translate complex software into memorable, high-converting product videos.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                filter === cat
                  ? "bg-gradient-to-r from-[#ff5500] to-[#ff7a00] text-white shadow-glow-sm"
                  : "bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid: 2 Columns for spacious, cinematic video presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 sm:p-7 rounded-3xl bg-[#101013] border border-white/[0.08] hover:border-[#ff7a00]/30 transition-all duration-300 flex flex-col justify-between group shadow-card-glow"
            >
              <div>
                {/* Top Video Player Container */}
                <div className="relative mb-6">
                  <VideoPlayer
                    videoUrl={project.videoUrl}
                    title={project.title}
                    onExpand={() => onSelectProject(project)}
                    aspectRatio="16/9"
                  />

                  {/* Corner Badge */}
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-[#ffa500] border border-white/10">
                      {project.tag}
                    </span>
                  </div>
                </div>

                {/* Project Metadata */}
                <div className="flex items-center justify-between gap-4 mb-2">
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                    {project.client}
                  </span>
                  <span className="text-[11px] text-zinc-500 font-medium">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3 group-hover:text-[#ffa500] transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Deliverables & Expand Action */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-4">
                <div className="flex items-center gap-1.5 flex-wrap">
                  {project.deliverables.slice(0, 2).map((del, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg text-[10px] font-medium bg-white/[0.04] text-zinc-300 border border-white/[0.06]"
                    >
                      {del}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onSelectProject(project)}
                  className="px-3.5 py-1.5 rounded-full bg-white/[0.05] hover:bg-[#ff5500] text-zinc-300 hover:text-white border border-white/10 text-xs font-semibold flex items-center gap-1.5 transition-all shrink-0"
                >
                  Watch Full
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner CTA */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#18181c] via-[#141416] to-[#0d0d0f] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#ff5500] to-[#ffa500] p-0.5 flex items-center justify-center shrink-0 shadow-glow-sm">
              <div className="w-full h-full bg-[#0a0a0c] rounded-[14px] flex items-center justify-center text-[#ff6b00]">
                <Sparkles className="w-5 h-5" />
              </div>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Have a product launch or new feature coming up?
              </h4>
              <p className="text-xs text-zinc-400">
                We work directly with founders on tight release cycles. Let&apos;s map out your visual strategy.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenContact}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#ff5500] to-[#ff7a00] text-white text-xs font-bold shadow-glow-sm hover:shadow-glow-md transition-all shrink-0 hover:scale-105"
          >
            Book a Discovery Call
          </button>
        </div>

      </div>
    </section>
  );
}

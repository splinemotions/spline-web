"use client";

import React, { useEffect, useRef, useState } from "react";
import { Project } from "@/types";
import { X, Volume2, VolumeX, ArrowUpRight, CheckCircle, Sparkles } from "lucide-react";

interface VideoModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export default function VideoModal({ project, onClose, onOpenContact }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-200">
      
      {/* Background Amber Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#ff5500]/15 blur-[160px] pointer-events-none" />

      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0e0e11] border border-white/10 shadow-2xl p-6 sm:p-8 flex flex-col gap-6">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-[#ff5500] to-[#ff7a00] text-white">
              {project.category}
            </span>
            <span className="text-zinc-400 text-xs hidden sm:inline">
              Client: <strong className="text-white font-medium">{project.client}</strong>
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-zinc-400 hover:text-white border border-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Display */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black border border-white/10 shadow-inner group">
          <video
            ref={videoRef}
            src={project.videoUrl}
            controls
            autoPlay
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover"
          />

          <button
            onClick={() => setIsMuted(!isMuted)}
            className="absolute top-4 right-4 p-2 rounded-xl bg-black/60 hover:bg-[#ff5500] text-white backdrop-blur-md border border-white/10 transition-colors"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>

        {/* Details & Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-2">
          
          <div className="md:col-span-8 flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {project.longDescription}
            </p>

            {project.metrics && (
              <div className="grid grid-cols-3 gap-3 pt-3">
                {project.metrics.map((m, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 block">
                      {m.label}
                    </span>
                    <span className="text-sm font-bold text-[#ffa500]">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="md:col-span-4 p-5 rounded-2xl bg-[#141418] border border-white/[0.08] flex flex-col justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                <Sparkles className="w-3.5 h-3.5 text-[#ff6b00]" />
                Deliverables
              </div>
              <ul className="space-y-2">
                {project.deliverables.map((item, i) => (
                  <li key={i} className="text-xs text-zinc-300 flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#ff6b00] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="w-full py-3 rounded-full bg-gradient-to-r from-[#ff5500] to-[#ff7a00] text-white text-xs font-bold shadow-glow-sm hover:shadow-glow-md flex items-center justify-center gap-1.5 transition-all"
            >
              Start Similar Project
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

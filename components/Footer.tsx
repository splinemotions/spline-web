"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUp, ArrowUpRight, Copy, Check } from "lucide-react";

interface FooterProps {
  onOpenContact: () => void;
}

export default function Footer({ onOpenContact }: FooterProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("hello@splinemotion.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-24 pb-12 border-t border-white/[0.08] overflow-hidden bg-[#050505]">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-t from-[#ff5500]/15 via-transparent to-transparent blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Massive Call To Action Banner */}
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-[#121215] via-[#0d0d10] to-[#070709] border border-white/10 relative overflow-hidden mb-20 shadow-2xl">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff6b00]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-mono font-semibold tracking-wider text-[#ff6b00] uppercase block mb-4">
              LAUNCH WITH US
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.1] mb-6">
              Ready to make your product <br />
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff5500] via-[#ff7a00] to-[#ffa500]">
                unforgettable?
              </span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-400 max-w-xl mb-8 leading-relaxed">
              We work with SaaS, AI, and developer tools companies to craft launch videos, explainer films, and product motion that accelerates growth.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenContact}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#ff5500] via-[#ff7a00] to-[#ffa500] text-white text-xs sm:text-sm font-bold shadow-glow-md hover:shadow-glow-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                Start a Project
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleCopy}
                className="px-6 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.09] text-zinc-300 hover:text-white border border-white/10 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied to clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-zinc-400" />
                    <span>hello@splinemotion.com</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Footer Navigation & Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/[0.06]">
          
          {/* Col 1: Studio info */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-[#ff5500] to-[#ffa500] p-[1px] flex items-center justify-center shadow-glow-sm">
                  <div className="w-full h-full bg-[#09090b] rounded-[7px] flex items-center justify-center p-1.5">
                    <Image
                      src="/logo-orange.png"
                      alt="Spline Motion Logo"
                      width={22}
                      height={22}
                      className="w-auto h-auto object-contain"
                    />
                  </div>
                </div>
                <span className="text-lg font-bold tracking-tight text-white flex items-center">
                  SPLINE<span className="text-[#ff6b00]">.</span>
                </span>
              </div>
              <p className="text-xs text-zinc-400 max-w-sm leading-relaxed mb-4">
                A two-person motion design agency built by Barun Mazumder & Hriday Das. Crafting high-converting product videos for modern technology companies.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available globally • Direct founder communication</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-4 font-semibold">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  Selected Work
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-white transition-colors">
                  Philosophy
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Capabilities & Services
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  4-Step Workflow
                </a>
              </li>
              <li>
                <a href="#studio" className="hover:text-white transition-colors">
                  The Studio & Founders
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contacts & Founders */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-4 font-semibold">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs text-zinc-400">
              <div>
                <span className="text-zinc-400 block text-[11px]">Primary Studio Email</span>
                <a
                  href="mailto:hello@splinemotion.com"
                  className="text-white hover:text-[#ffa500] font-mono transition-colors"
                >
                  hello@splinemotion.com
                </a>
              </div>
              <div>
                <span className="text-zinc-400 block text-[11px]">Founders</span>
                <span className="text-zinc-300">Barun Mazumder & Hriday Das</span>
              </div>
              <div className="pt-2">
                <span className="text-zinc-400 block text-[11px]">Focus Sectors</span>
                <span className="text-zinc-400">SaaS, AI, DevTools, B2B Tech, Fintech</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>
            © {new Date().getFullYear()} Spline Motion. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors group"
          >
            <span>Back to top</span>
            <div className="p-1 rounded-md bg-white/[0.04] group-hover:bg-white/[0.08] border border-white/10 transition-colors">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}

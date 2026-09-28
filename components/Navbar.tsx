"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Copy, Check, Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("work");

  const navLinks = [
    { id: "work", label: "Work", href: "#work" },
    { id: "philosophy", label: "Philosophy", href: "#philosophy" },
    { id: "services", label: "Services", href: "#services" },
    { id: "process", label: "Process", href: "#process" },
    { id: "studio", label: "Studio", href: "#studio" },
  ];

  // Scroll spy to dynamically change active variant based on active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 250;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].id);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(navLinks[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText("hello@splinemotion.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[#050505]/85 backdrop-blur-xl border-b border-white/[0.08]"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo with Official Spline Motion Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-[#ff5500] to-[#ffa500] p-[1px] flex items-center justify-center shadow-glow-sm">
                <div className="w-full h-full bg-[#09090b] rounded-[7px] flex items-center justify-center p-1.5 transition-transform group-hover:scale-95">
                  <Image
                    src="/logo-orange.png"
                    alt="Spline Motion Logo"
                    width={22}
                    height={22}
                    className="w-auto h-auto object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold tracking-tight text-white text-base sm:text-lg flex items-center gap-0.5">
                  SPLINE<span className="text-[#ff6b00]">.</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase text-zinc-400 font-medium -mt-1">
                  Motion Studio
                </span>
              </div>
            </a>

            {/* Desktop Center Pill Navigation with Dynamic Active Section Variants */}
            <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#121214]/80 backdrop-blur-md border border-white/10 shadow-pill">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setActiveSection(link.id)}
                    className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-[#ff5500] to-[#ff7a00] text-white shadow-glow-sm scale-105"
                        : "text-zinc-400 hover:text-white hover:bg-white/[0.06]"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Right Actions: Availability + Copy Email + Contact CTA */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Availability badge */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-zinc-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] font-medium text-zinc-400">Available for Q4/Q1</span>
              </div>

              {/* Email quick copy */}
              <button
                onClick={handleCopyEmail}
                title="Copy hello@splinemotion.com"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs text-zinc-300 hover:text-white transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-[11px] text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-zinc-400" />
                    <span className="text-[11px]">hello@splinemotion.com</span>
                  </>
                )}
              </button>

              {/* Primary CTA Pill Button */}
              <button
                onClick={onOpenContact}
                className="relative group overflow-hidden px-4 py-1.5 rounded-full bg-gradient-to-r from-[#ff5500] to-[#ff7a00] text-white text-xs font-semibold shadow-glow-sm hover:shadow-glow-md transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-1">
                  Contact Us
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={onOpenContact}
                className="px-3 py-1 rounded-full bg-gradient-to-r from-[#ff5500] to-[#ff7a00] text-white text-xs font-semibold"
              >
                Contact
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-white/[0.05] border border-white/10 text-zinc-300"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-2xl flex flex-col pt-24 px-6 lg:hidden animate-in fade-in duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => {
                    setActiveSection(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-lg font-medium py-2.5 px-3 rounded-xl transition-colors flex items-center justify-between ${
                    isActive
                      ? "bg-gradient-to-r from-[#ff5500]/20 to-[#ff7a00]/20 text-[#ffa500] font-semibold"
                      : "text-zinc-300 hover:text-white"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#ff5500]" />}
                </a>
              );
            })}

            <div className="pt-6 flex flex-col gap-3 border-t border-white/[0.08] mt-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 rounded-full bg-gradient-to-r from-[#ff5500] to-[#ff7a00] text-white font-semibold text-center shadow-glow-sm"
              >
                Start a Project
              </button>

              <button
                onClick={handleCopyEmail}
                className="w-full py-2.5 rounded-full bg-white/[0.05] border border-white/10 text-zinc-300 text-xs flex items-center justify-center gap-2"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-zinc-400" />}
                {copied ? "Copied hello@splinemotion.com" : "Copy hello@splinemotion.com"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import WorkShowcase from "@/components/WorkShowcase";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Founders from "@/components/Founders";
import Footer from "@/components/Footer";
import VideoModal from "@/components/VideoModal";
import ContactModal from "@/components/ContactModal";
import { projects } from "@/data/projects";
import { Project } from "@/types";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenVideoById = (projectId: string) => {
    const found = projects.find((p) => p.id === projectId);
    if (found) {
      setSelectedProject(found);
    }
  };

  return (
    <main className="relative min-h-screen bg-[#050505] text-[#f4f4f5] selection:bg-[#ff5500] selection:text-white">
      {/* Navigation */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Hero Section matching inspo-1 */}
      <Hero
        onOpenContact={() => setIsContactOpen(true)}
        onOpenVideo={handleOpenVideoById}
      />

      {/* Philosophy & 3-Column Bento Section */}
      <Philosophy />

      {/* Selected Work (Cloudinary Videos: Raycast, Fintech, Wise, Classy Endeavours) */}
      <WorkShowcase
        onSelectProject={(project) => setSelectedProject(project)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Services & Capabilities for SaaS, AI & Tech */}
      <Services onOpenContact={() => setIsContactOpen(true)} />

      {/* 4-Step Disciplined Approach */}
      <Process />

      {/* Two Founders Positioning & Bios */}
      <Founders onOpenContact={() => setIsContactOpen(true)} />

      {/* Agency Footer */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Interactive Video Modal for full theater view */}
      <VideoModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={() => {
          setSelectedProject(null);
          setIsContactOpen(true);
        }}
      />

      {/* Interactive Contact & Project Inquiry Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </main>
  );
}

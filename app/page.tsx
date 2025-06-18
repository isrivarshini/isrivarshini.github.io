"use client";

import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { SkillsSection } from '@/components/skills-section';
import { ProjectsSection } from '@/components/projects-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { AnimatedBackground } from '@/components/animated-background';
import { Toaster } from '@/components/ui/sonner';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
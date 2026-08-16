import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CredibilityStrip } from './components/CredibilityStrip';
import { AboutSection } from './components/AboutSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AiInnovationSection } from './components/AiInnovationSection';
import { TechnicalSkillsSection } from './components/TechnicalSkillsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0c10] text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Layout */}
      <main>
        {/* Hero with Interactive Railway DCS Animation */}
        <Hero />

        {/* 4-Item Credibility Metric Strip */}
        <CredibilityStrip />

        {/* Engineering Perspective & Career Evolution */}
        <AboutSection />

        {/* Core Expertise Cards */}
        <ExpertiseSection />

        {/* Vertical Career Experience Timeline */}
        <ExperienceSection />

        {/* Featured Projects & Architecture Studies */}
        <ProjectsSection />

        {/* AI & Innovation in RF Engineering */}
        <AiInnovationSection />

        {/* Categorized Skills Matrix */}
        <TechnicalSkillsSection />

        {/* Academic Education & Certifications */}
        <EducationSection />

        {/* Contact & Professional Networking */}
        <ContactSection />
      </main>

      {/* Minimal Engineering Footer */}
      <Footer />
    </div>
  );
}

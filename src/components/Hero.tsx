import React from 'react';
import { ArrowRight, Linkedin, Radio, ShieldCheck, Terminal, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { RailwayNetworkAnimation } from './RailwayNetworkAnimation';

export const Hero: React.FC = () => {
  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] pt-24 pb-16 md:pt-32 md:pb-24 flex items-center overflow-hidden border-b border-slate-800 bg-[#0a0c10]"
    >
      {/* Background Ambience & Technical Dot Matrix */}
      <div className="absolute inset-0 bg-tech-dots opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Narrative & Hero Positioning */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Eyebrow badge with clean cyan line */}
            <p className="text-cyan-400 font-mono text-xs tracking-wider flex items-center">
              <span className="w-4 h-px bg-cyan-400 mr-2.5"></span>
              RF &bull; WIRELESS &bull; RAILWAY COMMUNICATIONS &bull; AI
            </p>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight text-white tracking-tight">
                Engineering <br className="hidden sm:inline" />
                Connected{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Mobility.
                </span>
              </h1>
              <h2 className="text-lg sm:text-xl font-semibold text-slate-300">
                {PERSONAL_INFO.heroSubheadline}
              </h2>
            </div>

            {/* Short Introduction */}
            <p className="text-base text-slate-400 leading-relaxed font-normal max-w-xl">
              {PERSONAL_INFO.shortIntro}
            </p>

            {/* Professional Badges */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
              <span className="px-3 py-1 rounded-sm bg-[#0d1117] border border-slate-800 text-slate-300">
                Alstom World Class Expert
              </span>
              <span className="px-3 py-1 rounded-sm bg-[#0d1117] border border-slate-800 text-slate-300">
                CBTC DCS Architecture
              </span>
              <span className="px-3 py-1 rounded-sm bg-[#0d1117] border border-slate-800 text-slate-300">
                Train-to-Ground Wireless
              </span>
            </div>

            {/* Action Buttons in High-Contrast Elegant Dark style */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 bg-white text-black hover:bg-slate-200 px-8 py-3.5 font-bold text-xs uppercase tracking-wider rounded-sm transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-[0.98]"
              >
                <span>Explore Architecture</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-slate-700 hover:bg-slate-800/80 px-8 py-3.5 font-bold text-xs uppercase tracking-wider rounded-sm text-white transition-all hover:border-slate-600 active:scale-[0.98]"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Engineering Visualization */}
          <div className="lg:col-span-6 w-full">
            <div className="relative">
              {/* Subtle visual glow accent behind schematic */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-sm blur-lg pointer-events-none"></div>
              <RailwayNetworkAnimation />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

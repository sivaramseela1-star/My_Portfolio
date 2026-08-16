import React from 'react';
import { CAREER_EVOLUTION } from '../data/portfolioData';
import { ShieldCheck, Compass, Radio, Cpu, Network, ArrowRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#0a0c10] relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-cyan-400 font-mono text-xs tracking-wider flex items-center mb-3">
            <span className="w-4 h-px bg-cyan-400 mr-2.5"></span>
            BACKGROUND &bull; PERSPECTIVE &bull; TENETS
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Engineering Perspective
          </h2>
          <p className="text-base sm:text-lg text-slate-400 mt-4 leading-relaxed font-normal">
            With more than 25 years of hands-on and architectural experience, Sivaram Seela operates at the intersection of electromagnetic physics, mission-critical wireless protocols, and large-scale railway transportation systems.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-7 space-y-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            <p>
              Sivaram&apos;s career spans the full spectrum of high-frequency wireless communications—from physical microwave circuit design and multi-band cellular transceivers to complex Communication-Based Train Control (CBTC) and Data Communication Subsystem (DCS) architectures for world-class transit networks.
            </p>
            <p>
              As a designated <strong className="text-white font-semibold">World Class Expert</strong> and <strong className="text-white font-semibold">Senior DCS Architect at Alstom</strong>, he guides technical governance, system specifications, and RF verification for high-speed train-to-ground communication networks where link reliability, safety integrity, and zero packet loss tolerances are paramount.
            </p>
            <p>
              Recognizing that modern transit infrastructure produces massive volumes of time-series telemetry, he actively explores the synthesis of <strong className="text-cyan-400 font-semibold">RF engineering with Machine Learning and AI diagnostics</strong>—enabling predictive fault detection, automated log triage, and intelligent network optimization.
            </p>
          </div>

          {/* Architectural Principles Card */}
          <div className="lg:col-span-5 p-6 rounded-sm bg-[#0d1117] border border-slate-800 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> Architectural Tenets
            </h3>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3.5 rounded-sm bg-[#0a0c10] border border-slate-800">
                <strong className="text-white block mb-1 font-semibold">1. Physics-Grounded System Design</strong>
                <span className="text-slate-400">
                  Every link budget, antenna orientation, and propagation margin is rooted in empirical electromagnetic modeling and spatial track geometry.
                </span>
              </div>

              <div className="p-3.5 rounded-sm bg-[#0a0c10] border border-slate-800">
                <strong className="text-white block mb-1 font-semibold">2. Zero Single Points of Failure</strong>
                <span className="text-slate-400">
                  Mission-critical CBTC DCS demands dual-redundant radio paths (A/B), diverse antenna polarization, and deterministic failover.
                </span>
              </div>

              <div className="p-3.5 rounded-sm bg-[#0a0c10] border border-slate-800">
                <strong className="text-white block mb-1 font-semibold">3. Cross-Layer Visibility & AI Diagnostics</strong>
                <span className="text-slate-400">
                  Bridging Physical RF telemetry with network routing and ATP signalling layers to eliminate diagnostic guesswork.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Visual Timeline: Architectural Evolution */}
        <div className="pt-4 border-t border-slate-800">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 block">
                Career Progression
              </span>
              <h3 className="text-xl font-bold text-white">
                Evolution from Microwave Hardware to Railway AI
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-500">
              2000 — Present (25+ Years of Engineering)
            </span>
          </div>

          {/* Timeline Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
            {CAREER_EVOLUTION.map((milestone, idx) => (
              <div
                key={milestone.year}
                className="relative p-4 rounded-sm bg-[#0d1117] border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs font-bold text-cyan-400 bg-[#0a0c10] px-2 py-0.5 rounded-sm border border-slate-800">
                      {milestone.year}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      0{idx + 1}
                    </span>
                  </div>

                  <h4 className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug">
                    {milestone.title}
                  </h4>
                  <span className="text-[11px] font-mono text-slate-500 block mb-2">
                    {milestone.subtitle}
                  </span>

                  <p className="text-[11px] text-slate-400 leading-normal">
                    {milestone.description}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>{milestone.phase}</span>
                  <ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

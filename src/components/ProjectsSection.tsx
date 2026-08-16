import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';
import {
  FolderGit2,
  Filter,
  CheckCircle2,
  AlertCircle,
  Cpu,
  Layers,
  Sparkles,
  ExternalLink,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeCategory === 'all') return true;
    return proj.category === activeCategory;
  });

  return (
    <section id="projects" className="py-20 bg-[#0a0c10] relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <p className="text-cyan-400 font-mono text-xs tracking-wider flex items-center mb-3">
              <span className="w-4 h-px bg-cyan-400 mr-2.5"></span>
              ARCHITECTURE &bull; CASE STUDIES &bull; SYSTEMS
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Featured Engineering Projects
            </h2>
            <p className="text-base sm:text-lg text-slate-400 mt-2 leading-relaxed font-normal">
              Architectural designs, mission-critical CBTC systems, telemetry analytics, and concept studies in AI-augmented engineering.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-sm bg-[#0d1117] border border-slate-800 self-start md:self-auto">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'railway', label: 'Railway DCS' },
              { id: 'rf', label: 'RF & Propagation' },
              { id: 'ai-simulation', label: 'AI & Simulation' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3.5 py-1.5 rounded-sm text-xs font-mono uppercase tracking-wider transition-all ${
                  activeCategory === tab.id
                    ? 'bg-cyan-600 text-white font-bold shadow-[0_0_10px_rgba(8,145,178,0.4)]'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {filteredProjects.map((project) => {
            const isStudy = project.typeLabel.includes('Concept') || project.typeLabel.includes('Simulation');

            return (
              <div
                key={project.id}
                className="lg:col-span-6 flex flex-col justify-between rounded-sm border border-slate-800 bg-[#0d1117] hover:border-cyan-500/40 transition-all overflow-hidden glow-subtle group"
              >
                <div className="p-6">
                  {/* Top Bar: Category & Type Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span
                      className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-sm border ${
                        isStudy
                          ? 'bg-[#0a0c10] border-amber-500/50 text-amber-300'
                          : 'bg-[#0a0c10] border-cyan-500/50 text-cyan-300'
                      }`}
                    >
                      {project.typeLabel}
                    </span>

                    {project.category === 'railway' && (
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                        Railway DCS
                      </span>
                    )}
                    {project.category === 'rf' && (
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                        RF Physical Layer
                      </span>
                    )}
                    {project.category === 'ai-simulation' && (
                      <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> AI Exploration
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-4">
                    {project.title}
                  </h3>

                  {/* Structured Problem & Approach Cards */}
                  <div className="space-y-3 text-xs sm:text-sm">
                    {/* Problem */}
                    <div className="p-3.5 rounded-sm bg-[#0a0c10] border border-slate-800">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-amber-400 mb-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span className="font-bold uppercase tracking-wider text-[10px]">Engineering Problem</span>
                      </div>
                      <p className="text-slate-400 text-xs leading-relaxed">{project.problem}</p>
                    </div>

                    {/* Approach */}
                    <div className="p-3.5 rounded-sm bg-[#0a0c10] border border-slate-800">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 mb-1">
                        <Cpu className="w-3.5 h-3.5 shrink-0" />
                        <span className="font-bold uppercase tracking-wider text-[10px]">Architectural Approach</span>
                      </div>
                      <p className="text-slate-400 text-xs leading-relaxed">{project.approach}</p>
                    </div>

                    {/* Outcome */}
                    <div className="p-3.5 rounded-sm bg-[#0a0c10] border border-slate-800">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 mb-1">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        <span className="font-bold uppercase tracking-wider text-[10px]">Result & Impact</span>
                      </div>
                      <p className="text-slate-400 text-xs leading-relaxed">{project.outcome}</p>
                    </div>
                  </div>
                </div>

                {/* Footer Metrics & Technologies */}
                <div className="p-6 pt-0 border-t border-slate-800 bg-[#0a0c10]/40">
                  {/* Metrics strip */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="grid grid-cols-2 gap-2 py-3 mb-3 border-b border-slate-800 font-mono text-xs">
                      {project.metrics.map((m, idx) => (
                        <div key={idx} className="bg-[#0d1117] p-2.5 rounded-sm border border-slate-800">
                          <span className="text-[9px] text-slate-500 uppercase tracking-wider block">{m.label}</span>
                          <span className="text-cyan-400 font-bold">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Technologies Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-sm bg-[#0d1117] border border-slate-800 text-slate-400 text-[10px] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

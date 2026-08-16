import React, { useState } from 'react';
import { EXPERIENCE_HISTORY } from '../data/portfolioData';
import { Briefcase, Calendar, ChevronDown, ChevronUp, MapPin, Building, ShieldCheck } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    'alstom-sr-dcs': true,
    'alstom-nt-arch': true,
  });

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAll = () => {
    const allExpanded = EXPERIENCE_HISTORY.reduce((acc, item) => {
      acc[item.id] = true;
      return acc;
    }, {} as Record<string, boolean>);
    setExpandedIds(allExpanded);
  };

  const collapseAll = () => {
    setExpandedIds({});
  };

  return (
    <section id="experience" className="py-20 bg-[#0a0c10] relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div className="max-w-3xl">
            <p className="text-cyan-400 font-mono text-xs tracking-wider flex items-center mb-3">
              <span className="w-4 h-px bg-cyan-400 mr-2.5"></span>
              TRACK RECORD &bull; CAREER TIMELINE
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Professional Experience
            </h2>
            <p className="text-base sm:text-lg text-slate-400 mt-2 leading-relaxed font-normal">
              25+ years of verified industry leadership spanning railway wireless architecture, telecom infrastructure, and RF research.
            </p>
          </div>

          {/* Expand/Collapse All Buttons */}
          <div className="flex items-center gap-2 self-start sm:self-auto font-mono text-[10px] uppercase tracking-wider">
            <button
              onClick={expandAll}
              className="px-3 py-1.5 rounded-sm bg-[#0d1117] border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            >
              Expand All
            </button>
            <button
              onClick={collapseAll}
              className="px-3 py-1.5 rounded-sm bg-[#0d1117] border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 space-y-8 before:absolute before:left-2 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-px before:bg-slate-800">
          {EXPERIENCE_HISTORY.map((item) => {
            const isExpanded = !!expandedIds[item.id];
            const isCurrent = item.isCurrent;

            return (
              <div key={item.id} className="relative group">
                {/* Timeline Dot */}
                <div
                  className={`absolute -left-6 sm:-left-10 top-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 transition-all flex items-center justify-center ${
                    isCurrent
                      ? 'bg-cyan-500 border-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.6)]'
                      : 'bg-[#0a0c10] border-slate-700 group-hover:border-cyan-400'
                  }`}
                >
                  {isCurrent && <div className="w-1 h-1 rounded-full bg-black" />}
                </div>

                {/* Experience Card */}
                <div
                  className={`rounded-sm border transition-all duration-200 overflow-hidden ${
                    isCurrent
                      ? 'bg-[#0d1117] border-cyan-500/40 shadow-[0_0_20px_rgba(34,211,238,0.06)]'
                      : 'bg-[#0d1117] border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {/* Card Header (Clickable for Expand/Collapse) */}
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="w-full text-left p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-900/40 transition-colors"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {item.role}
                        </span>
                        {isCurrent && (
                          <span className="px-2 py-0.5 rounded-sm bg-[#0a0c10] border border-cyan-500/50 text-cyan-400 text-[10px] font-mono uppercase tracking-wider font-semibold">
                            Current Role
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300">
                        <span className="font-semibold text-cyan-400 flex items-center gap-1">
                          <Building className="w-3.5 h-3.5" />
                          {item.company}
                        </span>
                        <span className="text-slate-600">&bull;</span>
                        <span className="text-slate-400 flex items-center gap-1 font-mono text-xs">
                          <Calendar className="w-3.5 h-3.5 text-slate-500" />
                          {item.period}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-auto">
                      <span className="text-xs font-mono text-slate-500 sm:inline hidden uppercase tracking-wider text-[10px]">
                        {isExpanded ? 'Hide Details' : 'View Details'}
                      </span>
                      <div className="p-1.5 rounded-sm bg-[#0a0c10] border border-slate-800 text-slate-400 group-hover:text-white">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </div>
                  </button>

                  {/* Focus summary (Always visible) */}
                  <div className="px-5 sm:px-6 pb-4 pt-1 text-xs sm:text-sm text-slate-300 font-mono border-t border-slate-800/80">
                    <span className="text-cyan-400 font-semibold">Focus: </span>
                    {item.focus}
                  </div>

                  {/* Expanded Content & Detailed Highlights */}
                  {isExpanded && (
                    <div className="px-5 sm:px-6 pb-6 pt-3 space-y-4 border-t border-slate-800 bg-[#0a0c10]/60">
                      {item.highlights && item.highlights.length > 0 && (
                        <div className="space-y-2">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                            Key Architectural Scope
                          </span>
                          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-400">
                            {item.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-cyan-400 select-none font-mono text-xs mt-0.5">&gt;</span>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Technical Skills / Tags */}
                      <div className="pt-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-2">
                          Core Domains & Standards
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {item.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 rounded-sm bg-[#0d1117] border border-slate-800 text-slate-400 text-xs font-mono"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Radio, Train, Cpu, Sparkles, Check, Wrench } from 'lucide-react';

const CATEGORY_ICONS = [Radio, Train, Cpu, Sparkles];

export const TechnicalSkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-[#0a0c10] relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-cyan-400 font-mono text-xs tracking-wider flex items-center mb-3">
            <span className="w-4 h-px bg-cyan-400 mr-2.5"></span>
            COMPETENCIES &bull; TOOLING &bull; STANDARDS
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Technical Skills Matrix
          </h2>
          <p className="text-base sm:text-lg text-slate-400 mt-3 leading-relaxed font-normal">
            Rigorous technical capabilities grounded in 25+ years of RF physics and transit system architecture, alongside emerging AI methodologies.
          </p>
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = CATEGORY_ICONS[idx % CATEGORY_ICONS.length];
            const isEmerging = cat.title.includes('AI') || cat.title.includes('Digital');

            return (
              <div
                key={cat.title}
                className={`p-6 rounded-sm border flex flex-col justify-between transition-all ${
                  isEmerging
                    ? 'bg-[#0d1117] border-cyan-500/40 hover:border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.06)]'
                    : 'bg-[#0d1117] border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`p-2.5 rounded-sm border ${
                        isEmerging
                          ? 'bg-cyan-500 text-black border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.3)]'
                          : 'bg-[#0a0c10] border-slate-800 text-cyan-400'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">{cat.title}</h3>
                      {cat.subtitle && (
                        <p className="text-[11px] text-slate-500 font-mono">{cat.subtitle}</p>
                      )}
                    </div>
                  </div>

                  {isEmerging && (
                    <div className="mb-4">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-sm bg-[#0a0c10] border border-cyan-800 text-cyan-400 text-[10px] font-mono uppercase tracking-wider">
                        <Sparkles className="w-2.5 h-2.5" /> Innovation & Exploration
                      </span>
                    </div>
                  )}

                  {/* Skills List */}
                  <ul className="space-y-2 font-mono text-xs text-slate-300 pt-2">
                    {cat.skills.map((skill, sIdx) => (
                      <li
                        key={sIdx}
                        className="flex items-center justify-between p-2 rounded-sm bg-[#0a0c10] border border-slate-800/90 hover:border-slate-700 transition-colors"
                      >
                        <span className="flex items-center gap-2">
                          <Check className="w-3 h-3 text-cyan-400 shrink-0" />
                          <span className="text-slate-300 text-xs">{skill.name}</span>
                        </span>
                        {skill.isEmerging && (
                          <span className="text-[9px] text-cyan-400 uppercase font-mono px-1 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/60">AI</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

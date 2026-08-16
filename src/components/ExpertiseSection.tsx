import React from 'react';
import { EXPERTISE_CARDS } from '../data/portfolioData';
import {
  TrainTrack,
  Radio,
  Wifi,
  Network,
  Cpu,
  Sparkles,
  CheckCircle,
  Layers
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  TrainTrack,
  Radio,
  Wifi,
  Network,
  Cpu,
  Sparkles,
};

export const ExpertiseSection: React.FC = () => {
  return (
    <section id="expertise" className="py-20 bg-[#0a0c10] relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-cyan-400 font-mono text-xs tracking-wider flex items-center mb-3">
            <span className="w-4 h-px bg-cyan-400 mr-2.5"></span>
            CORE DOMAINS &bull; TECHNICAL AUTHORITY
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Technical Expertise
          </h2>
          <p className="text-base sm:text-lg text-slate-400 mt-4 leading-relaxed font-normal">
            Deep domain mastery across mission-critical railway communications, electromagnetic propagation, systems engineering, and emerging AI telemetry workflows.
          </p>
        </div>

        {/* Expertise Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERTISE_CARDS.map((card) => {
            const Icon = ICON_MAP[card.icon] || Radio;
            const isAi = card.id === 'ai-engineering';

            return (
              <div
                key={card.id}
                className={`relative p-6 rounded-sm border transition-all duration-200 flex flex-col justify-between group ${
                  isAi
                    ? 'bg-[#0d1117] border-cyan-500/40 shadow-[0_0_20px_rgba(34,211,238,0.08)]'
                    : 'bg-[#0d1117] border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  {/* Top Bar: Icon + Category Tag */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div
                      className={`p-2.5 rounded-sm flex items-center justify-center transition-colors border ${
                        isAi
                          ? 'bg-cyan-500 text-black border-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.4)]'
                          : 'bg-[#0a0c10] border-slate-800 text-cyan-400 group-hover:border-cyan-500/40'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-sm bg-[#0a0c10] border border-slate-800 text-slate-400">
                      {card.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 mb-5 leading-relaxed">
                    {card.description}
                  </p>

                  {/* Bullet Points */}
                  <ul className="space-y-2 text-xs text-slate-400 font-mono">
                    {card.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Architectural Boundary Indicator */}
                <div className="pt-4 mt-5 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-slate-500">
                  <span>Domain Focus</span>
                  <span className="text-slate-400 group-hover:text-cyan-400 transition-colors">
                    SME Authority
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

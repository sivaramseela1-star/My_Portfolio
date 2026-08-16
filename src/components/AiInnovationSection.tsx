import React from 'react';
import { AI_USE_CASES } from '../data/portfolioData';
import { AiEngineeringFlow } from './AiEngineeringFlow';
import { RfLinkCalculatorMini } from './RfLinkCalculatorMini';
import {
  Sparkles,
  Cpu,
  BrainCircuit,
  Binary,
  ArrowDown,
  FileCheck2,
  Workflow,
  Zap
} from 'lucide-react';

export const AiInnovationSection: React.FC = () => {
  return (
    <section id="ai-innovation" className="py-20 bg-[#0a0c10] relative border-b border-slate-800">
      {/* Subtle background glow */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-cyan-400 font-mono text-xs tracking-wider flex items-center mb-3">
            <span className="w-4 h-px bg-cyan-400 mr-2.5"></span>
            EMERGING FRONTIERS &bull; RF TELEMETRY &bull; AI DIAGNOSTICS
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Where RF Engineering Meets AI
          </h2>
          <p className="text-base sm:text-lg text-slate-400 mt-3 leading-relaxed font-normal">
            Modern railway communication systems produce continuous streams of gigabytes in drive-test telemetry and onboard packet logs. Integrating AI and Machine Learning accelerates root-cause diagnosis from days to milliseconds.
          </p>
        </div>

        {/* Interactive 6-Stage AI Analysis Pipeline Flow */}
        <div className="mb-16">
          <AiEngineeringFlow />
        </div>

        {/* Concrete AI Use-Cases Matrix */}
        <div className="mb-16">
          <div className="flex items-center justify-between gap-2 mb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 block">
                Applied Innovation
              </span>
              <h3 className="text-2xl font-bold text-white">
                Augmenting Engineering Workflows with AI
              </h3>
            </div>
            <span className="hidden sm:inline-block text-[10px] uppercase font-mono text-slate-500">
              7 Practical Architectures
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {AI_USE_CASES.map((uc) => (
              <div
                key={uc.id}
                className="p-5 rounded-sm bg-[#0d1117] border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-sm bg-[#0a0c10] border border-slate-800 text-cyan-400">
                      {uc.category}
                    </span>
                    <Sparkles className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                    {uc.title}
                  </h4>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {uc.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 text-xs font-mono">
                  <span className="text-cyan-400 font-semibold block text-[10px] uppercase tracking-wider">Engineering Impact:</span>
                  <span className="text-slate-400 text-xs">{uc.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Parametric Engineering Calculator */}
        <div>
          <div className="mb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 block">
              Simulation Study Demonstration
            </span>
            <h3 className="text-xl font-bold text-white">
              Parametric Link Budget & Wayside Spacing Analysis
            </h3>
          </div>
          <RfLinkCalculatorMini />
        </div>
      </div>
    </section>
  );
};

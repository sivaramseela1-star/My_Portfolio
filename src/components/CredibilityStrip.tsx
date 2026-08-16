import React from 'react';
import { CREDIBILITY_METRICS } from '../data/portfolioData';
import { Award, Radio, Train, ShieldCheck } from 'lucide-react';

const METRIC_ICONS = [Radio, Train, ShieldCheck, Award];

export const CredibilityStrip: React.FC = () => {
  return (
    <section id="credibility-strip" className="relative z-20 py-8 bg-[#0a0c10] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {CREDIBILITY_METRICS.map((metric, idx) => {
            const Icon = METRIC_ICONS[idx % METRIC_ICONS.length];
            return (
              <div
                key={metric.label}
                className="relative p-5 rounded-sm bg-[#0a0c10] border border-slate-800 hover:border-cyan-500/40 transition-all group"
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans group-hover:text-cyan-400 transition-colors">
                    {metric.value}
                  </span>
                  <div className="p-2 rounded-sm bg-[#0d1117] border border-slate-800 text-cyan-400 group-hover:border-cyan-500/40 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-0.5">
                  <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-slate-200 transition-colors">
                    {metric.label}
                  </h3>
                  <p className="text-xs text-slate-500 leading-snug">
                    {metric.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

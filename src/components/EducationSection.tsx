import React from 'react';
import { EDUCATION_ITEMS, CERTIFICATIONS } from '../data/portfolioData';
import { GraduationCap, Award, CheckCircle } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-[#0a0c10] relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Education Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="p-2.5 rounded-sm bg-[#0d1117] border border-slate-800 text-cyan-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 block">
                  Academic Foundation
                </span>
                <h3 className="text-2xl font-bold text-white">
                  Education & Qualifications
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              {EDUCATION_ITEMS.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-sm bg-[#0d1117] border border-slate-800 hover:border-slate-700 transition-colors space-y-2"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="text-base sm:text-lg font-bold text-white">
                      {item.degree}
                    </h4>
                    <span className="text-xs font-mono text-cyan-400 bg-[#0a0c10] px-2.5 py-0.5 rounded-sm border border-slate-800 self-start sm:self-auto">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-slate-300">
                    {item.institution}
                  </p>

                  {item.details && (
                    <p className="text-xs text-slate-400 leading-relaxed font-mono pt-1">
                      {item.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="p-2.5 rounded-sm bg-[#0d1117] border border-slate-800 text-cyan-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 block">
                  Continuous Learning
                </span>
                <h3 className="text-2xl font-bold text-white">
                  Certifications & Workshops
                </h3>
              </div>
            </div>

            <div className="space-y-3">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-sm bg-[#0d1117] border border-slate-800 hover:border-slate-700 transition-colors flex items-start gap-3"
                >
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-bold text-white leading-snug">
                      {cert.title}
                    </h4>
                    <span className="text-xs font-mono text-slate-500 block mt-1">
                      {cert.category}
                    </span>
                  </div>
                </div>
              ))}

              {/* World Class Expert Note */}
              <div className="p-4 rounded-sm bg-[#0d1117] border border-cyan-500/40 text-xs font-mono text-slate-300 space-y-1">
                <span className="text-cyan-400 font-bold block uppercase tracking-wider text-[10px]">
                  &bull; Alstom World Class Expert Designation
                </span>
                <p className="text-slate-400 leading-relaxed text-xs">
                  Recognized within Alstom technical governance as a subject matter expert in railway communication architectures and wireless systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

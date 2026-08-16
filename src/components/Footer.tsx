import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Radio, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0c10] border-t border-slate-800 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          {/* Brand & Subtitle */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-8 h-8 rounded-sm bg-[#0d1117] border border-slate-800 flex items-center justify-center text-cyan-400">
              <Radio className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-sm text-white block">
                {PERSONAL_INFO.name}
              </span>
              <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-wider block">
                {PERSONAL_INFO.eyebrow}
              </span>
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-sm bg-[#0d1117] hover:bg-slate-900 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              title="LinkedIn Profile"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-sm bg-[#0d1117] hover:bg-slate-900 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              title="Send an Email"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-sm bg-[#0d1117] hover:bg-slate-900 text-slate-300 hover:text-white border border-slate-800 transition-colors font-mono text-[10px] uppercase tracking-wider"
              title="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Copyright & Technical Subtext */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left font-mono text-[10px] uppercase tracking-wider text-slate-500">
          <p>© 2026 {PERSONAL_INFO.name}. All rights reserved.</p>
          <p>Senior DCS Architect &bull; RF &amp; Railway Wireless Systems</p>
        </div>
      </div>
    </footer>
  );
};

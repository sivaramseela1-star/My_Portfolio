import React, { useState } from 'react';
import { Mail, Linkedin, Copy, Check, ArrowUpRight, MessageSquare, ShieldCheck, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0c10] relative border-b border-slate-800">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <p className="text-cyan-400 font-mono text-xs tracking-wider flex items-center justify-center mb-4">
          <span className="w-4 h-px bg-cyan-400 mr-2.5"></span>
          TECHNICAL CONSULTATION &bull; INDUSTRY DIALOGUE
          <span className="w-4 h-px bg-cyan-400 ml-2.5"></span>
        </p>

        <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Let&apos;s Connect
        </h2>

        <p className="text-base sm:text-lg text-slate-400 mt-4 max-w-2xl mx-auto leading-relaxed font-normal">
          Interested in railway communications, RF engineering, wireless architecture, AI-enabled engineering or technical collaboration?
        </p>

        {/* Contact Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mt-12 text-left">
          {/* Email Direct */}
          <div className="p-6 rounded-sm bg-[#0d1117] border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between group shadow-lg">
            <div>
              <div className="w-10 h-10 rounded-sm bg-[#0a0c10] border border-slate-800 flex items-center justify-center text-cyan-400 mb-4 group-hover:border-cyan-500/40 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-1">
                Direct Email Communication
              </span>
              <h3 className="text-lg font-bold text-white mb-1">
                Send an Email
              </h3>
              <p className="text-xs text-slate-400 font-mono mb-4 break-all">
                {PERSONAL_INFO.email}
              </p>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-slate-800">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-sm bg-cyan-600 hover:bg-cyan-500 text-white font-mono uppercase font-bold text-xs tracking-wider transition-all shadow-[0_0_15px_rgba(8,145,178,0.3)]"
              >
                <span>Email Me</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={copyEmail}
                className="p-2.5 rounded-sm bg-[#0a0c10] hover:bg-slate-900 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* LinkedIn Profile */}
          <div className="p-6 rounded-sm bg-[#0d1117] border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between group shadow-lg">
            <div>
              <div className="w-10 h-10 rounded-sm bg-[#0a0c10] border border-slate-800 flex items-center justify-center text-sky-400 mb-4 group-hover:border-cyan-500/40 transition-colors">
                <Linkedin className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-1">
                Professional Network
              </span>
              <h3 className="text-lg font-bold text-white mb-1">
                LinkedIn Profile
              </h3>
              <p className="text-xs text-slate-400 font-mono mb-4 truncate">
                {PERSONAL_INFO.linkedinDisplay}
              </p>
            </div>

            <div className="pt-2 border-t border-slate-800">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-sm bg-[#0a0c10] hover:bg-slate-900 text-white border border-slate-800 hover:border-cyan-500/40 font-mono uppercase font-bold text-xs tracking-wider transition-all"
              >
                <Linkedin className="w-4 h-4 text-sky-400" />
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Advisory / Consultation Disclaimer */}
        <div className="mt-12 p-3.5 rounded-sm bg-[#0d1117] border border-slate-800 max-w-xl mx-auto text-xs font-mono text-slate-400 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>Available for expert technical discussions, architecture reviews, and professional collaboration.</span>
        </div>
      </div>
    </section>
  );
};

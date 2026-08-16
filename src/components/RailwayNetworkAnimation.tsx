import React, { useState, useEffect } from 'react';
import { Radio, Train, Network, Server, Activity, ShieldCheck, Cpu } from 'lucide-react';

export const RailwayNetworkAnimation: React.FC = () => {
  const [trainPos, setTrainPos] = useState(15);
  const [activeAp, setActiveAp] = useState(1);
  const [rssi, setRssi] = useState(-58);
  const [redundancyActive, setRedundancyActive] = useState(true);
  const [packetCount, setPacketCount] = useState(12480);
  const [isSimulating, setIsSimulating] = useState(true);

  // Train animation loop
  useEffect(() => {
    if (!isSimulating) return;

    const interval = setInterval(() => {
      setTrainPos((prev) => {
        const next = prev >= 85 ? 10 : prev + 0.5;
        // Determine active trackside AP based on position
        if (next < 35) {
          setActiveAp(1);
          setRssi(-54 - Math.abs(next - 22) * 1.2);
        } else if (next < 65) {
          setActiveAp(2);
          setRssi(-52 - Math.abs(next - 50) * 1.1);
        } else {
          setActiveAp(3);
          setRssi(-55 - Math.abs(next - 78) * 1.3);
        }
        return next;
      });

      setPacketCount((p) => p + 3);
    }, 100);

    return () => clearInterval(interval);
  }, [isSimulating]);

  return (
    <div
      id="railway-network-visualization"
      className="relative w-full rounded-sm border border-slate-800 bg-[#0d1117] p-5 md:p-6 backdrop-blur-md overflow-hidden glow-subtle"
    >
      {/* Background technical dot matrix */}
      <div className="absolute inset-0 bg-tech-dots opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar with live technical telemetry */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-800 text-xs">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="font-mono text-cyan-500 font-bold uppercase tracking-widest text-[10px]">
            Railway Network Visualization
          </span>
        </div>

        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-slate-500">
          <span className="hidden sm:inline-flex items-center gap-1">
            <Activity className="w-3 h-3 text-cyan-400" /> RSSI:
            <strong className="text-emerald-400">{Math.round(rssi)} dBm</strong>
          </span>
          <span className="hidden sm:inline-flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-cyan-400" /> PER:
            <strong className="text-cyan-400">0.01%</strong>
          </span>
          <button
            onClick={() => setIsSimulating(!isSimulating)}
            className="px-2 py-0.5 rounded-sm bg-[#0a0c10] hover:bg-slate-800 text-slate-400 hover:text-white transition-colors border border-slate-800 text-[10px] uppercase tracking-wider"
            title="Toggle Live Telemetry Animation"
          >
            {isSimulating ? 'Pause' : 'Resume'}
          </button>
        </div>
      </div>

      {/* Main Architecture Diagram Canvas (SVG & HTML Overlay) */}
      <div className="relative z-10 py-2">
        {/* Layer 1: Architecture Stages Labels */}
        <div className="grid grid-cols-5 gap-1 text-center font-mono text-[10px] text-slate-500 uppercase tracking-wider mb-3 pb-1 border-b border-slate-800/80">
          <div className="text-cyan-400 font-semibold flex items-center justify-center gap-1">
            <Train className="w-3 h-3 inline" /> TRAIN
          </div>
          <div className="text-sky-400 flex items-center justify-center gap-1">
            <Radio className="w-3 h-3 inline" /> RF LINK
          </div>
          <div className="text-blue-400 flex items-center justify-center gap-1">
            <Network className="w-3 h-3 inline" /> TRACKSIDE AP
          </div>
          <div className="text-indigo-400 flex items-center justify-center gap-1">
            <Server className="w-3 h-3 inline" /> BACKBONE
          </div>
          <div className="text-emerald-400 font-semibold flex items-center justify-center gap-1">
            <Cpu className="w-3 h-3 inline" /> OCC / CORE
          </div>
        </div>

        {/* Visual Track & Network Schematic (SVG) */}
        <div className="relative h-44 sm:h-52 w-full select-none">
          <svg className="w-full h-full" viewBox="0 0 600 180" fill="none" preserveAspectRatio="xMidYMid meet">
            <defs>
              {/* Signal Wave Glow Gradient */}
              <linearGradient id="cyanGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
              </linearGradient>

              {/* Data Packet Pulse */}
              <filter id="packetGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Core & Backbone Network Bus (Right Section) */}
            <g id="backbone-network">
              {/* Trackside Backbone Fiber Line */}
              <line x1="120" y1="50" x2="460" y2="50" stroke="#1E293B" strokeWidth="3" strokeDasharray="4 4" />
              <line x1="120" y1="50" x2="460" y2="50" stroke="#0284C7" strokeWidth="1.5" strokeOpacity="0.6" />

              {/* Link from Backbone to Core Network / OCC */}
              <path d="M 460 50 C 490 50, 500 80, 530 80" stroke="#22D3EE" strokeWidth="2" strokeDasharray="6 3" />
              <path d="M 460 50 C 490 50, 500 110, 530 110" stroke="#10B981" strokeWidth="1.5" strokeOpacity="0.7" />

              {/* OCC Operations Control Center Node */}
              <rect x="525" y="65" width="65" height="60" rx="3" fill="#0A0C10" stroke="#10B981" strokeWidth="1.5" />
              <text x="557" y="88" fill="#34D399" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                OCC
              </text>
              <text x="557" y="102" fill="#94A3B8" fontSize="8" textAnchor="middle" fontFamily="monospace">
                Signalling / ATP
              </text>
              <text x="557" y="114" fill="#22D3EE" fontSize="7" textAnchor="middle" fontFamily="monospace">
                Core DCS
              </text>

              {/* Central Core Switch Gateway */}
              <circle cx="460" cy="50" r="10" fill="#0A0C10" stroke="#818CF8" strokeWidth="1.5" />
              <text x="460" y="53" fill="#A5B4FC" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                GW
              </text>
            </g>

            {/* Trackside Access Points (APs) */}
            {/* AP 1 */}
            <g id="ap-1" opacity={activeAp === 1 ? 1 : 0.45}>
              <line x1="130" y1="50" x2="130" y2="85" stroke="#22D3EE" strokeWidth="1.5" />
              <circle cx="130" cy="85" r="7" fill="#0A0C10" stroke="#22D3EE" strokeWidth="1.5" />
              <text x="130" y="103" fill="#E2E8F0" fontSize="8" textAnchor="middle" fontFamily="monospace">
                AP-01
              </text>
              {activeAp === 1 && (
                <circle cx="130" cy="85" r="14" stroke="#22D3EE" strokeWidth="1" strokeDasharray="3 3" opacity="0.8">
                  <animate attributeName="r" values="8;24" dur="1.8s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.9;0" dur="1.8s" repeatCount="indefinite" />
                </circle>
              )}
            </g>

            {/* AP 2 */}
            <g id="ap-2" opacity={activeAp === 2 ? 1 : 0.45}>
              <line x1="280" y1="50" x2="280" y2="85" stroke="#22D3EE" strokeWidth="1.5" />
              <circle cx="280" cy="85" r="7" fill="#0A0C10" stroke="#22D3EE" strokeWidth="1.5" />
              <text x="280" y="103" fill="#E2E8F0" fontSize="8" textAnchor="middle" fontFamily="monospace">
                AP-02
              </text>
              {activeAp === 2 && (
                <circle cx="280" cy="85" r="14" stroke="#22D3EE" strokeWidth="1" strokeDasharray="3 3" opacity="0.8">
                  <animate attributeName="r" values="8;24" dur="1.8s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.9;0" dur="1.8s" repeatCount="indefinite" />
                </circle>
              )}
            </g>

            {/* AP 3 */}
            <g id="ap-3" opacity={activeAp === 3 ? 1 : 0.45}>
              <line x1="420" y1="50" x2="420" y2="85" stroke="#22D3EE" strokeWidth="1.5" />
              <circle cx="420" cy="85" r="7" fill="#0A0C10" stroke="#22D3EE" strokeWidth="1.5" />
              <text x="420" y="103" fill="#E2E8F0" fontSize="8" textAnchor="middle" fontFamily="monospace">
                AP-03
              </text>
              {activeAp === 3 && (
                <circle cx="420" cy="85" r="14" stroke="#22D3EE" strokeWidth="1" strokeDasharray="3 3" opacity="0.8">
                  <animate attributeName="r" values="8;24" dur="1.8s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.9;0" dur="1.8s" repeatCount="indefinite" />
                </circle>
              )}
            </g>

            {/* Railway Tracks (Two Parallel Technical Rails) */}
            <g id="railway-tracks">
              {/* Sleepers / Ties */}
              {Array.from({ length: 28 }).map((_, i) => (
                <line
                  key={`sleeper-${i}`}
                  x1={20 + i * 18}
                  y1="138"
                  x2={20 + i * 18}
                  y2="158"
                  stroke="#1E293B"
                  strokeWidth="2.5"
                />
              ))}

              {/* Upper Rail */}
              <line x1="10" y1="142" x2="520" y2="142" stroke="#334155" strokeWidth="2.5" />
              {/* Lower Rail */}
              <line x1="10" y1="154" x2="520" y2="154" stroke="#334155" strokeWidth="2.5" />

              {/* Track Center Guidance Indicator */}
              <line x1="10" y1="148" x2="520" y2="148" stroke="#0284C7" strokeWidth="0.8" strokeDasharray="3 6" opacity="0.4" />
            </g>

            {/* Dynamic Wireless Beam connecting Moving Train Antennas to Active AP */}
            {(() => {
              const trainX = (trainPos / 100) * 450 + 20;
              const targetApX = activeAp === 1 ? 130 : activeAp === 2 ? 280 : 420;
              return (
                <g id="active-rf-link">
                  {/* Primary Link A */}
                  <line
                    x1={trainX + 25}
                    y1="130"
                    x2={targetApX}
                    y2="85"
                    stroke="#22D3EE"
                    strokeWidth="1.8"
                    strokeDasharray="4 3"
                    opacity="0.9"
                  />
                  {/* Redundant Link B (if enabled) */}
                  {redundancyActive && (
                    <line
                      x1={trainX + 45}
                      y1="130"
                      x2={targetApX}
                      y2="85"
                      stroke="#818CF8"
                      strokeWidth="1.2"
                      strokeDasharray="2 3"
                      opacity="0.6"
                    />
                  )}

                  {/* Flowing Data Pulses from Train to AP */}
                  <circle
                    cx={(trainX + 25 + targetApX) / 2}
                    cy={(130 + 85) / 2}
                    r="3"
                    fill="#22D3EE"
                    filter="url(#packetGlow)"
                  />
                </g>
              );
            })()}

            {/* Moving Trainset Entity */}
            {(() => {
              const trainX = (trainPos / 100) * 450 + 20;
              return (
                <g id="train-entity" transform={`translate(${trainX}, 125)`}>
                  {/* Train Body */}
                  <rect x="0" y="5" width="70" height="22" rx="3" fill="#0A0C10" stroke="#0284C7" strokeWidth="1.5" />
                  {/* Train Windows */}
                  <rect x="12" y="9" width="10" height="7" rx="1" fill="#22D3EE" opacity="0.7" />
                  <rect x="26" y="9" width="10" height="7" rx="1" fill="#22D3EE" opacity="0.7" />
                  <rect x="40" y="9" width="10" height="7" rx="1" fill="#22D3EE" opacity="0.7" />
                  {/* Train Front Nose */}
                  <path d="M 70 10 L 76 16 L 70 24 Z" fill="#0284C7" />
                  {/* Onboard Antennas (Front & Rear Dual Radio) */}
                  <line x1="25" y1="5" x2="25" y2="0" stroke="#22D3EE" strokeWidth="1.5" />
                  <circle cx="25" cy="0" r="2" fill="#22D3EE" />
                  <line x1="45" y1="5" x2="45" y2="0" stroke="#818CF8" strokeWidth="1.5" />
                  <circle cx="45" cy="0" r="2" fill="#818CF8" />
                  {/* Onboard Train Label */}
                  <text x="35" y="23" fill="#E2E8F0" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                    TRAIN-01
                  </text>
                </g>
              );
            })()}
          </svg>
        </div>

        {/* Bottom Status & Diagnostic Info Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 border-t border-slate-800 text-[10px] font-mono">
          <div className="bg-[#0a0c10] p-2.5 rounded-sm border border-slate-800">
            <span className="text-slate-500 block uppercase tracking-wider text-[9px]">Transceiver</span>
            <span className="text-cyan-400 font-semibold">AP-0{activeAp} (5.8 GHz)</span>
          </div>

          <div className="bg-[#0a0c10] p-2.5 rounded-sm border border-slate-800">
            <span className="text-slate-500 block uppercase tracking-wider text-[9px]">Redundancy</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Dual 1+1 Active
            </span>
          </div>

          <div className="bg-[#0a0c10] p-2.5 rounded-sm border border-slate-800">
            <span className="text-slate-500 block uppercase tracking-wider text-[9px]">Handover</span>
            <span className="text-indigo-300 font-semibold">&lt; 20ms Fast Roam</span>
          </div>

          <div className="bg-[#0a0c10] p-2.5 rounded-sm border border-slate-800">
            <span className="text-slate-500 block uppercase tracking-wider text-[9px]">Signalling</span>
            <span className="text-slate-200 font-semibold">{packetCount.toLocaleString()} pkts</span>
          </div>
        </div>
      </div>
    </div>
  );
};

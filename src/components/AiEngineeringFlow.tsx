import React, { useState } from 'react';
import {
  FileSpreadsheet,
  LineChart,
  BrainCircuit,
  Layers,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  RefreshCw,
  Terminal,
  AlertTriangle,
  FileText
} from 'lucide-react';

interface Stage {
  id: number;
  title: string;
  shortLabel: string;
  icon: React.ElementType;
  description: string;
  technicalDetails: string;
  sampleOutput: {
    title: string;
    content: string | string[];
    type: 'code' | 'alert' | 'summary' | 'stats';
  };
}

const FLOW_STAGES: Stage[] = [
  {
    id: 1,
    title: '1. Measurement Data Ingestion',
    shortLabel: 'Data Ingestion',
    icon: FileSpreadsheet,
    description: 'Continuous ingestion of raw time-series RF telemetry from trainborne Onboard Units (OBU) and trackside Access Points (APs).',
    technicalDetails: 'Ingests RSSI (-95 to -40 dBm), SNR (5-35 dB), PER (0-100%), retry frames, GPS odometry, and train speed at 100ms intervals.',
    sampleOutput: {
      title: 'Raw Stream Sample (OBU-04)',
      type: 'code',
      content: [
        'TIMESTAMP=14:22:04.120 | CHAIN=OBU_Radio_A | RSSI=-72dBm | SNR=18dB | PER=0.00% | SPEED=78km/h | TRACK_KP=14.320',
        'TIMESTAMP=14:22:04.220 | CHAIN=OBU_Radio_A | RSSI=-81dBm | SNR=11dB | PER=1.42% | SPEED=78km/h | TRACK_KP=14.342',
        'TIMESTAMP=14:22:04.320 | CHAIN=OBU_Radio_A | RSSI=-89dBm | SNR=06dB | PER=8.80% | SPEED=78km/h | TRACK_KP=14.364 [WARN: SIGNAL_FADE]',
      ],
    },
  },
  {
    id: 2,
    title: '2. RF Signal Analytics & Feature Extraction',
    shortLabel: 'RF Analytics',
    icon: LineChart,
    description: 'Transforming high-frequency noisy telemetry into spatial RF profiles mapped against track chainage and antenna radiation models.',
    technicalDetails: 'Computes moving-window standard deviations, sliding-window packet loss trends, Doppler frequency shifts, and Fresnel zone clearance factors.',
    sampleOutput: {
      title: 'Extracted RF Feature Vectors',
      type: 'stats',
      content: [
        'Spatial Rolling ΔRSSI: -18.4 dB over 45m corridor (KP 14.320 - 14.365)',
        'Fading Gradient: -0.41 dB/meter (exceeds free-space path loss model by 3.2x)',
        'BSSID Target: AP-Track-14 | Azimuth Alignment: 182° | Estimated Multipath Index: 0.68',
      ],
    },
  },
  {
    id: 3,
    title: '3. ML Anomaly Detection Engine',
    shortLabel: 'ML Detection',
    icon: BrainCircuit,
    description: 'Unsupervised and semi-supervised isolation forest & LSTM models trained on historical baseline drive-test signatures.',
    technicalDetails: 'Flags localized signal nulls, uncharacteristic co-channel interference bursts, antenna cable attenuation, and delayed handover triggers.',
    sampleOutput: {
      title: 'Anomaly Classifier Output',
      type: 'alert',
      content: [
        'CRITICAL ANOMALY DETECTED [Confidence: 94.7%]',
        'Anomaly Class: Localized Multipath Deep-Fade / Wayside Physical Obstruction',
        'Impact Zone: KP 14.350 to KP 14.380 (Eastbound Track, Portal Entrance)',
        'Risk Rating: HIGH (Potential CBTC DCS Timeout at speed > 70 km/h)',
      ],
    },
  },
  {
    id: 4,
    title: '4. Cross-Layer Correlation',
    shortLabel: 'Cross-Layer',
    icon: Layers,
    description: 'Cross-referencing Layer 1/2 physical RF metrics with Layer 3 IP routing, Layer 4 TCP/UDP transport, and ATP application heartbeats.',
    technicalDetails: 'Eliminates false alarms by verifying if an RF dip actually caused transport packet loss, switch MAC table thrashing, or ATP safety emergency halts.',
    sampleOutput: {
      title: 'Multi-Layer Correlation Matrix',
      type: 'code',
      content: [
        'L1/L2 PHY: Radio A dropped to -89dBm (Single-link degradation)',
        'L2 DCS: Redundant Radio B maintained -58dBm to AP-Track-15 (Seamless Roaming)',
        'L3/L4 Network: DCS Redundant Gateway filtered 4 lost packets | End-to-End Jitter: 4.2ms',
        'L7 CBTC Application: 0 Signalling Heartbeat Drops | ATP Safety Integrity: SIL-4 Maintained',
      ],
    },
  },
  {
    id: 5,
    title: '5. Engineering Diagnosis & Root Cause',
    shortLabel: 'Diagnosis',
    icon: CheckCircle2,
    description: 'Deterministic rule engine synthesizing physics-based RF propagation models with telecom hardware failure modes.',
    technicalDetails: 'Pinpoints physical root causes: antenna tilt misorientation, coaxial connector moisture ingress, tunnel portal diffraction, or rogue external Wi-Fi emitters.',
    sampleOutput: {
      title: 'Root Cause Synthesis',
      type: 'stats',
      content: [
        'Primary Cause: Tunnel Portal Fresnel Zone Diffraction + Sub-optimal AP-14 Down-tilt (-2° vs required -6°)',
        'Secondary Contributing Factor: Trackside concrete gantry reflector causing 12dB multipath notch at 5.825 GHz',
        'Corrective Action: Re-align AP-14 mechanical tilt to -6.5° and migrate channel plan from CH 165 to CH 157',
      ],
    },
  },
  {
    id: 6,
    title: '6. LLM Engineering Summary & Compliance Report',
    shortLabel: 'LLM Summary',
    icon: Sparkles,
    description: 'Domain-tuned Large Language Model generates structured engineering memos, action items, and CENELEC/IEEE compliance documentation.',
    technicalDetails: 'Generates standardized engineering review packages with executive summaries, technical charts, work orders for track maintenance teams, and verification test scripts.',
    sampleOutput: {
      title: 'Automated Engineering Technical Memo',
      type: 'summary',
      content: [
        'SUBJECT: DCS RF Coverage Investigation Report - East Corridor KP 14.350',
        'SUMMARY: Investigation of drive-test telemetry identified a localized 18dB RF fade on OBU Radio A entering East Portal. Cross-layer analysis confirms zero CBTC service impact due to active 1+1 DCS redundancy.',
        'ACTION REQUIRED: Issue Trackside Work Order #TS-4092 to adjust AP-14 mechanical bracket down-tilt from 2° to 6.5° prior to Phase 2 Revenue Service.',
      ],
    },
  },
];

export const AiEngineeringFlow: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState(1);
  const activeStage = FLOW_STAGES.find((s) => s.id === activeStageId) || FLOW_STAGES[0];

  return (
    <div className="w-full rounded-sm border border-slate-800 bg-[#0d1117] p-5 md:p-8 glow-subtle">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm bg-[#0a0c10] border border-slate-800 text-cyan-400 text-[10px] font-mono uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            AI + RF Telemetry Pipeline
          </div>
          <h3 className="text-xl font-bold text-white">
            Interactive AI Diagnostic Workflow
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            Click through the six-stage intelligent analysis architecture to explore how raw RF telemetry is transformed into actionable engineering decisions.
          </p>
        </div>

        <button
          onClick={() => setActiveStageId((prev) => (prev >= 6 ? 1 : prev + 1))}
          className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3.5 py-2 rounded-sm bg-[#0a0c10] hover:bg-slate-900 text-slate-300 hover:text-white border border-slate-800 text-xs font-mono uppercase tracking-wider transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          Step Next ({activeStageId}/6)
        </button>
      </div>

      {/* Interactive Flow Step Navigational Pipeline */}
      <div className="py-6 overflow-x-auto">
        <div className="flex items-center justify-between min-w-[700px] gap-2">
          {FLOW_STAGES.map((stage, idx) => {
            const Icon = stage.icon;
            const isActive = stage.id === activeStageId;
            const isCompleted = stage.id < activeStageId;

            return (
              <React.Fragment key={stage.id}>
                <button
                  onClick={() => setActiveStageId(stage.id)}
                  className={`flex-1 flex flex-col items-center text-center p-3 rounded-sm border transition-all duration-200 group ${
                    isActive
                      ? 'bg-[#0a0c10] border-cyan-500/80 shadow-[0_0_15px_rgba(34,211,238,0.15)]'
                      : isCompleted
                      ? 'bg-[#0a0c10] border-slate-800 hover:border-slate-700'
                      : 'bg-[#0a0c10]/40 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-sm flex items-center justify-center mb-2 transition-colors border ${
                      isActive
                        ? 'bg-cyan-500 text-black border-cyan-400 font-bold'
                        : isCompleted
                        ? 'bg-[#0a0c10] text-cyan-400 border-slate-800'
                        : 'bg-[#0a0c10] text-slate-500 border-slate-800 group-hover:text-slate-300'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[9px] font-mono uppercase tracking-wider text-slate-500 mb-0.5">
                    Stage 0{stage.id}
                  </span>
                  <span
                    className={`text-xs leading-tight font-mono ${
                      isActive ? 'text-cyan-400 font-semibold' : 'text-slate-400'
                    }`}
                  >
                    {stage.shortLabel}
                  </span>
                </button>

                {idx < FLOW_STAGES.length - 1 && (
                  <div className="flex items-center text-slate-700">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Selected Stage Detail Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4 border-t border-slate-800">
        {/* Left column: Overview & Engineering Context */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-sm bg-[#0a0c10] border border-slate-800 text-cyan-400">
              <activeStage.icon className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400">PHASE {activeStage.id} OF 6</span>
              <h4 className="text-lg font-bold text-white">{activeStage.title}</h4>
            </div>
          </div>

          <p className="text-sm text-slate-400 leading-relaxed">{activeStage.description}</p>

          <div className="p-3.5 rounded-sm bg-[#0a0c10] border border-slate-800">
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-1">
              Engineering Specification & Math
            </span>
            <p className="text-xs text-slate-400 font-mono leading-relaxed">
              {activeStage.technicalDetails}
            </p>
          </div>
        </div>

        {/* Right column: Simulated Live Output Terminal / Diagnostic Card */}
        <div className="lg:col-span-7">
          <div className="rounded-sm border border-slate-800 bg-[#0a0c10] overflow-hidden shadow-inner">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-3.5 py-2 bg-[#0d1117] border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span className="font-mono text-xs text-slate-300 font-medium">
                  {activeStage.sampleOutput.title}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-slate-700 inline-block"></span>
                <span className="w-2 h-2 rounded-full bg-slate-700 inline-block"></span>
                <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block"></span>
              </div>
            </div>

            {/* Terminal Body Output */}
            <div className="p-4 font-mono text-xs space-y-2">
              {activeStage.sampleOutput.type === 'code' && (
                <div className="space-y-1.5 text-slate-400">
                  {Array.isArray(activeStage.sampleOutput.content) &&
                    activeStage.sampleOutput.content.map((line, idx) => (
                      <div key={idx} className="flex gap-2 items-start">
                        <span className="text-cyan-400 select-none">&gt;</span>
                        <span
                          className={
                            line.includes('WARN') || line.includes('SIGNAL_FADE')
                              ? 'text-amber-400 font-semibold'
                              : 'text-slate-300'
                          }
                        >
                          {line}
                        </span>
                      </div>
                    ))}
                </div>
              )}

              {activeStage.sampleOutput.type === 'alert' && (
                <div className="p-3 rounded-sm bg-[#0d1117] border border-amber-500/40 text-amber-200 space-y-1.5">
                  <div className="flex items-center gap-2 font-semibold text-amber-300 pb-1 border-b border-amber-500/20 text-xs">
                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                    <span className="uppercase tracking-wider text-[10px]">ANOMALY DETECTOR NOTIFICATION</span>
                  </div>
                  {Array.isArray(activeStage.sampleOutput.content) &&
                    activeStage.sampleOutput.content.map((line, idx) => (
                      <p key={idx} className="text-xs font-mono">
                        {line}
                      </p>
                    ))}
                </div>
              )}

              {activeStage.sampleOutput.type === 'stats' && (
                <div className="space-y-2 text-slate-400">
                  {Array.isArray(activeStage.sampleOutput.content) &&
                    activeStage.sampleOutput.content.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-sm bg-[#0d1117] border border-slate-800 text-slate-300 text-xs flex items-start gap-2"
                      >
                        <span className="text-cyan-400 font-bold">#0{idx + 1}</span>
                        <span>{item}</span>
                      </div>
                    ))}
                </div>
              )}

              {activeStage.sampleOutput.type === 'summary' && (
                <div className="p-3.5 rounded-sm bg-[#0d1117] border border-cyan-500/30 text-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-cyan-400 font-semibold pb-1.5 border-b border-cyan-500/20 text-xs">
                    <FileText className="w-4 h-4" />
                    <span className="uppercase tracking-wider text-[10px]">CENELEC / TRANSIT ENGINEERING SUMMARY</span>
                  </div>
                  {Array.isArray(activeStage.sampleOutput.content) &&
                    activeStage.sampleOutput.content.map((paragraph, idx) => (
                      <p key={idx} className="text-xs leading-relaxed text-slate-300">
                        {paragraph}
                      </p>
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

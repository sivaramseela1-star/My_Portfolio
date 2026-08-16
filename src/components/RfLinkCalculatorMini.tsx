import React, { useState } from 'react';
import { Calculator, Radio, Sliders, Info, ShieldCheck, Waves } from 'lucide-react';

export const RfLinkCalculatorMini: React.FC = () => {
  // RF Parameters with realistic railway telecom default values
  const [freqGhz, setFreqGhz] = useState<number>(5.8); // 5.8 GHz ISM / Private Rail
  const [txPowerDbm, setTxPowerDbm] = useState<number>(20); // 20 dBm (100mW)
  const [txGainDbi, setTxGainDbi] = useState<number>(14); // 14 dBi directional trackside antenna
  const [rxGainDbi, setRxGainDbi] = useState<number>(5); // 5 dBi omni train roof antenna
  const [rxSensitivityDbm, setRxSensitivityDbm] = useState<number>(-82); // -82 dBm for CBTC QPSK/16QAM
  const [fadeMarginDb, setFadeMarginDb] = useState<number>(15); // +15 dB railway safety fade margin
  const [cableLossDb, setCableLossDb] = useState<number>(3); // 3 dB total jumper/connector loss
  const [environment, setEnvironment] = useState<'open' | 'tunnel'>('open');

  // Math Calculations:
  // EIRP (dBm) = TxPower (dBm) + TxGain (dBi) - CableLoss (dB)
  const eirp = txPowerDbm + txGainDbi - cableLossDb;

  // Max Allowed Path Loss (MAPL in dB) = EIRP + RxGain - RxSensitivity - FadeMargin
  const mapl = eirp + rxGainDbi - rxSensitivityDbm - fadeMarginDb;

  // Free Space Path Loss / Empirical Railway Model:
  // FSPL: PL(d) = 20*log10(d_km) + 20*log10(f_MHz) + 32.44
  // In tunnels: Path loss exponent n is typically 1.6 to 2.2 due to waveguide effect.
  // In open viaducts: Path loss exponent n is ~ 2.4 to 2.8 with ground bounce.
  const nExponent = environment === 'tunnel' ? 2.0 : 2.5;
  const fMhz = freqGhz * 1000;
  
  // d = 10 ^ ((MAPL - 32.44 - 20*log10(f_MHz)) / (10 * n)) in km
  const logTerm = mapl - 32.44 - 20 * Math.log10(fMhz);
  const distanceKm = Math.pow(10, logTerm / (10 * nExponent));
  const maxApCoverageMeters = Math.max(50, Math.min(1800, Math.round(distanceKm * 1000)));
  const recommendedApSpacingMeters = Math.round(maxApCoverageMeters * 0.85); // 15% overlap for seamless BSS roaming

  return (
    <div className="rounded-sm border border-slate-800 bg-[#0d1117] p-5 md:p-6 glow-subtle">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-sm bg-[#0a0c10] border border-slate-800 text-cyan-400">
            <Calculator className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              Railway RF Link Budget & AP Spacing Simulator
              <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded-sm bg-[#0a0c10] text-cyan-400 border border-slate-800">
                Interactive Model
              </span>
            </h4>
            <p className="text-xs text-slate-400">
              Parametric calculations illustrating link margin constraints for CBTC train-to-ground radio design.
            </p>
          </div>
        </div>

        {/* Environment Toggle */}
        <div className="inline-flex rounded-sm border border-slate-800 p-1 bg-[#0a0c10] self-start sm:self-auto text-xs font-mono">
          <button
            onClick={() => setEnvironment('open')}
            className={`px-3 py-1 rounded-sm text-xs font-mono uppercase tracking-wider transition-colors ${
              environment === 'open'
                ? 'bg-cyan-600 text-white font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Open / Viaduct (n=2.5)
          </button>
          <button
            onClick={() => setEnvironment('tunnel')}
            className={`px-3 py-1 rounded-sm text-xs font-mono uppercase tracking-wider transition-colors ${
              environment === 'tunnel'
                ? 'bg-cyan-600 text-white font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Tunnel / Waveguide (n=2.0)
          </button>
        </div>
      </div>

      {/* Sliders & Parameters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
        {/* Param 1: TX Power & Antenna */}
        <div className="p-3.5 rounded-sm bg-[#0a0c10] border border-slate-800 space-y-3">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-300">Trackside TX Power</span>
            <span className="text-cyan-400 font-bold">{txPowerDbm} dBm (100mW)</span>
          </div>
          <input
            type="range"
            min="10"
            max="30"
            step="1"
            value={txPowerDbm}
            onChange={(e) => setTxPowerDbm(Number(e.target.value))}
            className="w-full accent-cyan-400 h-1 bg-slate-800 rounded cursor-pointer"
          />

          <div className="flex items-center justify-between text-xs font-mono pt-1">
            <span className="text-slate-300">Trackside Antenna Gain</span>
            <span className="text-cyan-400 font-bold">{txGainDbi} dBi</span>
          </div>
          <input
            type="range"
            min="6"
            max="18"
            step="1"
            value={txGainDbi}
            onChange={(e) => setTxGainDbi(Number(e.target.value))}
            className="w-full accent-cyan-400 h-1 bg-slate-800 rounded cursor-pointer"
          />
        </div>

        {/* Param 2: Frequency & Onboard Gain */}
        <div className="p-3.5 rounded-sm bg-[#0a0c10] border border-slate-800 space-y-3">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-300">Operating Frequency</span>
            <span className="text-cyan-400 font-bold">{freqGhz.toFixed(1)} GHz</span>
          </div>
          <div className="flex gap-2">
            {[2.4, 5.8].map((f) => (
              <button
                key={f}
                onClick={() => setFreqGhz(f)}
                className={`flex-1 py-1 rounded-sm text-xs font-mono border transition-colors ${
                  freqGhz === f
                    ? 'bg-cyan-950/80 border-cyan-400 text-cyan-300 font-bold'
                    : 'bg-[#0d1117] border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {f} GHz Band
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between text-xs font-mono pt-1">
            <span className="text-slate-300">Train Roof Antenna Gain</span>
            <span className="text-cyan-400 font-bold">{rxGainDbi} dBi</span>
          </div>
          <input
            type="range"
            min="2"
            max="9"
            step="1"
            value={rxGainDbi}
            onChange={(e) => setRxGainDbi(Number(e.target.value))}
            className="w-full accent-cyan-400 h-1 bg-slate-800 rounded cursor-pointer"
          />
        </div>

        {/* Param 3: Safety Margin & Sensitivity */}
        <div className="p-3.5 rounded-sm bg-[#0a0c10] border border-slate-800 space-y-3">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-300">Safety Fade Margin</span>
            <span className="text-emerald-400 font-bold">+{fadeMarginDb} dB</span>
          </div>
          <input
            type="range"
            min="6"
            max="24"
            step="1"
            value={fadeMarginDb}
            onChange={(e) => setFadeMarginDb(Number(e.target.value))}
            className="w-full accent-emerald-400 h-1 bg-slate-800 rounded cursor-pointer"
          />

          <div className="flex items-center justify-between text-xs font-mono pt-1">
            <span className="text-slate-300">Receiver Sensitivity</span>
            <span className="text-slate-200 font-bold">{rxSensitivityDbm} dBm</span>
          </div>
          <input
            type="range"
            min="-90"
            max="-70"
            step="1"
            value={rxSensitivityDbm}
            onChange={(e) => setRxSensitivityDbm(Number(e.target.value))}
            className="w-full accent-cyan-400 h-1 bg-slate-800 rounded cursor-pointer"
          />
        </div>
      </div>

      {/* Calculated Output Matrix */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-sm bg-[#0a0c10] border border-slate-800 text-center font-mono">
        <div className="space-y-1">
          <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Effective EIRP</span>
          <span className="text-lg sm:text-xl font-bold text-cyan-400">+{eirp} dBm</span>
          <span className="text-[9px] text-slate-600 block">Tx + Gain - Cable</span>
        </div>

        <div className="space-y-1">
          <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Max Allowed Loss (MAPL)</span>
          <span className="text-lg sm:text-xl font-bold text-sky-400">{Math.round(mapl)} dB</span>
          <span className="text-[9px] text-slate-600 block">Link budget headroom</span>
        </div>

        <div className="space-y-1">
          <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Calculated AP Coverage</span>
          <span className="text-lg sm:text-xl font-bold text-white">{maxApCoverageMeters} m</span>
          <span className="text-[9px] text-slate-600 block">Line-of-Sight Reach</span>
        </div>

        <div className="space-y-1">
          <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Recommended AP Spacing</span>
          <span className="text-lg sm:text-xl font-bold text-emerald-400">{recommendedApSpacingMeters} m</span>
          <span className="text-[9px] text-emerald-600 block">With 15% Overlap Roaming</span>
        </div>
      </div>
    </div>
  );
};

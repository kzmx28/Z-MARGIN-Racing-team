import React from 'react';
import {
  ArrowRight,
  Compass,
  ShieldAlert,
  Sparkles,
  Calendar,
  Timer,
  CloudRain
} from 'lucide-react';
import { HERO_IMAGE } from '../data/racingData';

interface HeroProps {
  onExploreBackstory: () => void;
  onExploreFleet: () => void;
  onExploreCircuits: () => void;
  onExploreSchedule: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreBackstory,
  onExploreFleet,
  onExploreCircuits,
  onExploreSchedule
}) => {
  return (
    <section className="relative overflow-hidden border-b border-neutral-800">
      {/* Background Picture: The 5-car Riyadh staging ground photo behind the header, permanently blurred a bit (no unblur option) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img
          src={HERO_IMAGE}
          alt="Z-Margin 5 sleeper sedans at dusk staging ground in Riyadh"
          className="w-full h-full object-cover object-center scale-105 filter blur-[4.5px] opacity-40 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Cinematic dark gradients to guarantee crisp text legibility over the blurred background */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/60" />
        <div className="absolute inset-0 bg-neutral-950/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-3xl">
          {/* Metadata line */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono tracking-wider text-amber-400 mb-6 uppercase">
            <span>RIYADH UNDERGROUND SYNDICATE</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>FRIENDS FOR 3 YEARS</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-neutral-200">~142 RACERS FACED · ZERO DEFEATS</span>
          </div>

          {/* Main Header: "Between the Concrete & the Apex lies Zero Margin" */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-100 uppercase leading-[1.08] mb-6 [text-wrap:balance]">
            Between the Concrete & the Apex lies{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-white">
              Zero Margin.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl mb-8 font-sans">
            Welcome to the official domain of <strong>Z-MARGIN (حافة الصفر)</strong>. Anchored by the undefeated founding trio—
            <strong>Khaled Al-Qahtani</strong> (~460 HP Caprice sleeper), <strong>Yusuf Al-Mutairi</strong> (223 HP manual Camry),
            and <strong>Mohammad Al-Quraishi</strong> (233 HP K24 Accord, holder of the <strong>1:13.000</strong> Wadi Hanifah DQ benchmark)—who
            have faced around <strong>142 racers across the Riyadh region</strong> over 3 years of friendship without a single loss, reinforced by specialized team members <strong>Amr Al Balushi</strong> (202 HP Elantra, Al-Naseem reaction specialist) and{' '}
            <strong>Abdullah Al Omair</strong> (214 HP Sonata, veteran pace master).
          </p>

          {/* Syndicate Dispatch Pill in Hero */}
          <div className="mb-8 space-y-2.5 max-w-2xl">
            <div className="p-3 bg-emerald-950/40 border border-emerald-700/60 rounded-xl flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
              </span>
              <CloudRain className="w-4 h-4 text-cyan-400 shrink-0" />
              <div className="text-xs text-neutral-200">
                <span className="font-mono font-bold text-emerald-400 uppercase">OFFICIAL RECORD:</span> Al-Kharj (Nov 11, 2026) conquered in a{' '}
                <strong className="text-amber-400 font-mono">3-0 Clean Sweep</strong> through extreme rain · Next:{' '}
                <strong className="text-white font-mono">Nov 18, 2026</strong>.
              </div>
            </div>

            <div className="p-3 bg-amber-950/30 border border-amber-700/50 rounded-xl flex items-center gap-3">
              <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
              <div className="text-xs text-neutral-200 leading-relaxed">
                <span className="font-mono font-bold text-amber-400 uppercase">LINEUP UPDATE:</span> After Nov 18,{' '}
                <strong className="text-white">Mohammad Al-Quraishi</strong> takes an indefinite hiatus to focus on his studies (May God help him with his hardships, Ameen).{' '}
                <strong className="text-cyan-300">Amr Al Balushi</strong> &amp; <strong className="text-cyan-300">Abdullah Al Omair</strong> step onto the frontlines to defend our undefeated title.
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreSchedule}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors cursor-pointer font-display shadow-lg shadow-amber-400/20"
            >
              <Calendar className="w-4 h-4" />
              <span>Next: Nov 18 &amp; Frontline Lineup</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreBackstory}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-neutral-200 bg-neutral-900/90 hover:bg-neutral-800 hover:text-white border border-neutral-700/80 rounded-md transition-colors cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>How We Met &amp; 3-Yr Legacy</span>
            </button>

            <button
              onClick={onExploreCircuits}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-amber-300 hover:text-amber-200 hover:bg-neutral-900/50 rounded-md transition-colors cursor-pointer border border-transparent hover:border-amber-500/30"
            >
              <Timer className="w-4 h-4" />
              <span>Wadi Hanifah DQ Record (1:13.000)</span>
            </button>
          </div>
        </div>

        {/* Tactical Status Strip */}
        <div className="mt-16 pt-8 border-t border-neutral-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>Next Race Date</span>
            </div>
            <div className="font-display text-xl font-bold text-amber-400 flex items-center gap-1.5">
              <span>NOV 18, 2026</span>
            </div>
            <div className="text-xs text-neutral-400 font-mono">Western Riyadh · Mohammad’s Pre-Hiatus Run</div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
              <Timer className="w-3.5 h-3.5 text-amber-400" />
              <span>DQ Course Benchmark</span>
            </div>
            <div className="font-mono text-xl font-bold text-neutral-100 tabular-nums">1:13.000</div>
            <div className="text-xs text-neutral-500">Mohammad Al-Quraishi · Wadi Hanifah DQ</div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <ShieldAlert className="w-3.5 h-3.5 text-emerald-400" />
              <span>Nov 11 Al-Kharj Record</span>
            </div>
            <div className="font-display text-xl font-bold text-emerald-400">3 - 0 CLEAN SWEEP</div>
            <div className="text-xs text-neutral-500">Mohammad 12:43 · Khaled 14:13 · Abdullah Recruited</div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <Compass className="w-3.5 h-3.5 text-cyan-400" />
              <span>Post-Nov 18 Frontline</span>
            </div>
            <div className="font-display text-xl font-bold text-cyan-300">NEW GUARD STEPS UP</div>
            <div className="text-xs text-neutral-500">Amr &amp; Abdullah take Mohammad’s spot (TBA Races)</div>
          </div>
        </div>
      </div>
    </section>
  );
};

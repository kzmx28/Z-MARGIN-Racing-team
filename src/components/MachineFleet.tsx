import React, { useState } from 'react';
import { TEAM_MEMBERS } from '../data/racingData';
import { StreetRacerProfile } from '../types';
import {
  Gauge,
  Shield,
  Cpu,
  Zap,
  UserCheck,
  EyeOff,
  Heart,
  Crown,
  Users,
  BookOpen,
  Sparkles,
  Crosshair,
  Flame,
  Quote,
  CheckCircle2,
  Activity,
  GraduationCap,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react';

export const MachineFleet: React.FC = () => {
  const [activeDriver, setActiveDriver] = useState<StreetRacerProfile>(TEAM_MEMBERS[0]);
  const [activeTab, setActiveTab] = useState<'storyline' | 'specs'>('storyline');

  return (
    <section id="machines" className="py-20 bg-neutral-900/50 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-2">
            <Users className="w-4 h-4 text-amber-400" />
            <span>Z-MARGIN Roster & Machine Dossiers · تشكيلة الفريق</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-neutral-100">
            Sleeper Machines & Driver Lineup
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2">
            Every car in Z-Margin maintains a 100% factory stock exterior to remain invisible to police patrols.
            The team is anchored by the <strong className="text-amber-400">Founding Main Trio</strong> (Khaled, Yusuf, and Mohammad)
            who have stood undefeated for three years, reinforced by specialized team aces{' '}
            <strong className="text-cyan-300">Amr Al Balushi</strong> (sub-140ms reaction latency) and{' '}
            <strong className="text-cyan-300">Abdullah Al Omair</strong> (12-year relentless pace master).
          </p>
        </div>

        {/* Unified Driver Roster Lineup (All 5 Members Together) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 mb-8">
          {TEAM_MEMBERS.map((member) => {
            const isSelected = member.id === activeDriver.id;
            return (
              <button
                key={member.id}
                onClick={() => setActiveDriver(member)}
                className={`text-left p-4 rounded-xl border transition-all cursor-pointer relative overflow-hidden group flex flex-col justify-between ${
                  isSelected
                    ? member.isCoreTrio
                      ? 'bg-neutral-900 border-amber-400 shadow-lg shadow-amber-500/10 ring-1 ring-amber-400/50'
                      : 'bg-neutral-900 border-cyan-400 shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-400/50'
                    : 'bg-neutral-950/80 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span
                      className={`inline-flex items-center gap-1 text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                        member.isCoreTrio
                          ? 'bg-amber-400/15 text-amber-300 border border-amber-400/30'
                          : 'bg-cyan-950/70 text-cyan-300 border border-cyan-700/50'
                      }`}
                    >
                      {member.isCoreTrio ? (
                        <>
                          <Crown className="w-2.5 h-2.5" />
                          <span>MAIN FOUNDER</span>
                        </>
                      ) : (
                        <>
                          <Users className="w-2.5 h-2.5" />
                          <span>TEAM MEMBER</span>
                        </>
                      )}
                    </span>
                    <span className="text-neutral-500 font-mono text-xs">{member.arabicName}</span>
                  </div>

                  <div className="font-display text-base font-bold text-neutral-100 group-hover:text-amber-300 transition-colors">
                    {member.name}
                  </div>

                  <div className="text-xs text-neutral-300 mt-1 font-mono">
                    {member.car}
                  </div>

                  <div className="mt-2 flex items-baseline gap-1.5">
                    <span
                      className={`font-mono text-sm font-bold ${
                        member.isCoreTrio ? 'text-amber-400' : 'text-cyan-300'
                      }`}
                    >
                      {member.specs.output.split(' @')[0]}
                    </span>
                    <span className="text-[10px] text-neutral-500 font-mono">· Stock Body</span>
                  </div>
                </div>

                <div className="text-[10px] text-neutral-400 mt-3 pt-2 border-t border-neutral-800/80 font-mono flex items-center justify-between gap-1.5">
                  <span className="truncate">{member.specialty.split(',')[0]}</span>
                  {member.activeStatus === 'UPCOMING_HIATUS' && (
                    <span className="shrink-0 text-[9px] px-1.5 py-0.5 rounded bg-amber-950/60 text-amber-300 border border-amber-700/50 font-bold">
                      HIATUS POST-18
                    </span>
                  )}
                  {member.activeStatus === 'FRONTLINE_ROTATION' && (
                    <span className="shrink-0 text-[9px] px-1.5 py-0.5 rounded bg-cyan-950/70 text-cyan-300 border border-cyan-700/50 font-bold">
                      FRONTLINE
                    </span>
                  )}
                </div>

                {isSelected && (
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 ${
                      member.isCoreTrio ? 'bg-amber-400' : 'bg-cyan-400'
                    }`}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Driver Detailed Profile Card (Pure Technical Schematic - Zero Car Pictures) */}
        <div className="bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-xl">
          {/* Left Column: Sleeper Dossier & Core Heart (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 bg-neutral-950 border-b lg:border-b-0 lg:border-r border-neutral-800 flex flex-col justify-between space-y-6 carbon-grid">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span
                  className={`text-xs font-mono uppercase tracking-widest flex items-center gap-1.5 font-bold ${
                    activeDriver.isCoreTrio ? 'text-amber-400' : 'text-cyan-400'
                  }`}
                >
                  <EyeOff className="w-3.5 h-3.5" />
                  <span>
                    {activeDriver.isCoreTrio
                      ? 'MAIN TRIO SLEEPER // ZERO MARGIN'
                      : 'TEAM MEMBER // SLEEPER SPEC'}
                  </span>
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  {activeDriver.age} YRS OLD
                </span>
              </div>

              <div>
                <span className="text-xs font-mono text-neutral-500 uppercase block">Vehicle Chassis</span>
                <h3 className="font-display text-3xl font-bold text-neutral-100 uppercase mt-0.5">
                  {activeDriver.car}
                </h3>
                <span className="text-xs font-mono text-neutral-400 block mt-1">
                  {activeDriver.bodyStyle}
                </span>
              </div>

              {/* Personal Origin Motive Card */}
              <div
                className={`p-4 rounded-xl border space-y-2 ${
                  activeDriver.isCoreTrio
                    ? 'bg-amber-950/20 border-amber-900/40'
                    : 'bg-cyan-950/20 border-cyan-900/40'
                }`}
              >
                <div
                  className={`flex items-center gap-1.5 text-xs font-mono uppercase font-semibold ${
                    activeDriver.isCoreTrio ? 'text-amber-400' : 'text-cyan-400'
                  }`}
                >
                  <Heart className="w-3.5 h-3.5" />
                  <span>Personal Motive & Roots</span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-sans font-medium">
                  "{activeDriver.personalMotive}"
                </p>
              </div>

              {/* Sleeper Engineering Highlights */}
              <div className="space-y-2 text-xs font-mono bg-neutral-900/60 p-4 rounded-xl border border-neutral-800/80">
                <div className="flex justify-between border-b border-neutral-800 pb-1.5">
                  <span className="text-neutral-500">CALIBRATED OUTPUT</span>
                  <span
                    className={`font-bold ${
                      activeDriver.isCoreTrio ? 'text-amber-400' : 'text-cyan-300'
                    }`}
                  >
                    {activeDriver.specs.output}
                  </span>
                </div>
                <div className="flex justify-between border-b border-neutral-800 pb-1.5">
                  <span className="text-neutral-500">TRANSMISSION SETUP</span>
                  <span className="text-neutral-200 font-bold">{activeDriver.specs.transmission}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800 pb-1.5">
                  <span className="text-neutral-500">DRIVETRAIN</span>
                  <span className="text-neutral-200">{activeDriver.specs.drivetrain}</span>
                </div>
                <div className="flex justify-between pt-0.5">
                  <span className="text-neutral-500">EXTERIOR LOOK</span>
                  <span className="text-emerald-400 font-semibold">{activeDriver.specs.exteriorLook.split(' (')[0]}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-neutral-900/40 rounded-lg border border-neutral-800/60 text-[11px] font-mono text-neutral-400 flex items-center justify-between gap-2">
                <span>STATUS:</span>
                <strong
                  className={
                    activeDriver.activeStatus === 'UPCOMING_HIATUS'
                      ? 'text-amber-300 text-right'
                      : activeDriver.isCoreTrio
                      ? 'text-amber-400 text-right'
                      : 'text-cyan-400 text-right'
                  }
                >
                  {activeDriver.activeStatus === 'UPCOMING_HIATUS'
                    ? 'Active Until Nov 18 · Academic Hiatus After'
                    : activeDriver.activeStatus === 'FRONTLINE_ROTATION'
                    ? 'Frontline Rotation Post-Nov 18'
                    : 'Founding Main Trio · Undefeated'}
                </strong>
              </div>

              {activeDriver.statusNote && (
                <div
                  className={`p-3.5 rounded-xl border text-xs leading-relaxed flex items-start gap-2.5 ${
                    activeDriver.activeStatus === 'UPCOMING_HIATUS'
                      ? 'bg-amber-950/25 border-amber-700/50 text-amber-100/90'
                      : 'bg-cyan-950/25 border-cyan-700/50 text-cyan-100/90'
                  }`}
                >
                  {activeDriver.activeStatus === 'UPCOMING_HIATUS' ? (
                    <GraduationCap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  ) : (
                    <Shield className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  )}
                  <span>{activeDriver.statusNote}</span>
                </div>
              )}

              {/* Storyline Quick-Toggle Button on left card */}
              <button
                onClick={() => setActiveTab('storyline')}
                className={`w-full py-2.5 px-4 rounded-lg text-xs font-mono uppercase font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'storyline'
                    ? activeDriver.isCoreTrio
                      ? 'bg-amber-400 text-neutral-950 shadow-md'
                      : 'bg-cyan-400 text-neutral-950 shadow-md'
                    : 'bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-700/80'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>
                  {activeDriver.id === 'abdullah-al-omair'
                    ? 'View 12-Yr Pace Master Storyline'
                    : activeDriver.id === 'amr-al-balushi'
                    ? 'View Al-Naseem Reflex Storyline'
                    : 'Read Driver Storyline & Genesis'}
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Dossier Tabs (Storyline vs Specs) (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
            {/* View Mode Tabs */}
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-neutral-500 uppercase">Driver & Machine Dossier</span>
                  {activeDriver.isCoreTrio ? (
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-amber-400/20 text-amber-300 rounded font-bold">
                      MAIN GUY · CORE TRIO
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-cyan-950 text-cyan-300 rounded border border-cyan-800 font-bold">
                      TEAM MEMBER · SPECIALIST
                    </span>
                  )}
                </div>
                <h4 className="font-display text-2xl sm:text-3xl font-bold text-neutral-100 uppercase">
                  {activeDriver.name} ({activeDriver.arabicName})
                </h4>
                <p className="text-xs text-amber-500 font-mono mt-1">
                  {activeDriver.role} · Racing since age {activeDriver.racingSinceAge} ({activeDriver.drivingYears} years on the street)
                </p>
              </div>

              {/* Tab Selector */}
              <div className="flex items-center gap-1.5 p-1 bg-neutral-900 rounded-lg border border-neutral-800 shrink-0">
                <button
                  onClick={() => setActiveTab('storyline')}
                  className={`px-3 py-1.5 text-xs font-mono rounded-md transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeTab === 'storyline'
                      ? 'bg-amber-400 text-neutral-950 font-bold'
                      : 'text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Storyline & Technique</span>
                </button>
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`px-3 py-1.5 text-xs font-mono rounded-md transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeTab === 'specs'
                      ? 'bg-amber-400 text-neutral-950 font-bold'
                      : 'text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Blueprint Specs</span>
                </button>
              </div>
            </div>

            {/* TAB 1: STORYLINE & DRIVING TECHNIQUE GENESIS */}
            {activeTab === 'storyline' && activeDriver.storyline && (
              <div className="space-y-6 animate-fadeIn">
                {/* Storyline Banner */}
                <div
                  className={`p-5 rounded-2xl border ${
                    activeDriver.isCoreTrio
                      ? 'bg-gradient-to-r from-amber-950/30 via-neutral-900/60 to-neutral-950 border-amber-900/50'
                      : 'bg-gradient-to-r from-cyan-950/30 via-neutral-900/60 to-neutral-950 border-cyan-900/50'
                  } space-y-2`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[11px] font-mono uppercase tracking-wider font-bold flex items-center gap-1.5 ${
                        activeDriver.isCoreTrio ? 'text-amber-400' : 'text-cyan-300'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{activeDriver.storyline.title}</span>
                    </span>
                    <span className="text-xs font-mono text-neutral-500">
                      {activeDriver.storyline.arabicTitle}
                    </span>
                  </div>
                  <h5 className="font-display text-lg font-bold text-neutral-100">
                    {activeDriver.storyline.subtitle}
                  </h5>
                </div>

                {/* Narrative Breakdown: How the Unique Driving Technique Was Achieved */}
                <div className="bg-neutral-900/70 p-5 rounded-xl border border-neutral-800 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase font-bold">
                    <Crosshair className="w-4 h-4 text-amber-400" />
                    <span>How the Driving Mastery Was Forged (قصة نشأة الأسلوب)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-sans font-normal">
                    {activeDriver.storyline.howTechniqueAchieved}
                  </p>
                </div>

                {/* Unique Technique Genesis & Mechanics Box */}
                <div className="p-5 bg-neutral-900/50 border border-neutral-800 rounded-xl space-y-4">
                  <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-emerald-400">
                      <Activity className="w-4 h-4 text-emerald-400" />
                      <span>Technique Genesis: {activeDriver.storyline.techniqueGenesis.name}</span>
                    </div>
                    <span className="text-xs font-mono text-neutral-400">
                      {activeDriver.storyline.techniqueGenesis.arabicName}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-3.5 bg-neutral-950/80 rounded-lg border border-neutral-800/80 space-y-1.5">
                      <div className="text-[10px] font-mono text-neutral-400 uppercase font-semibold flex items-center gap-1.5">
                        <Zap className="w-3 h-3 text-amber-400" />
                        <span>Core Physical Mechanism</span>
                      </div>
                      <p className="text-neutral-300 leading-relaxed">
                        {activeDriver.storyline.techniqueGenesis.coreMechanism}
                      </p>
                    </div>

                    <div className="p-3.5 bg-neutral-950/80 rounded-lg border border-neutral-800/80 space-y-1.5">
                      <div className="text-[10px] font-mono text-neutral-400 uppercase font-semibold flex items-center gap-1.5">
                        <Shield className="w-3 h-3 text-cyan-400" />
                        <span>Psychological Advantage on the Street</span>
                      </div>
                      <p className="text-neutral-300 leading-relaxed">
                        {activeDriver.storyline.techniqueGenesis.psychologicalAdvantage}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3-Act Progression Cards */}
                <div className="space-y-3">
                  <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider font-semibold block">
                    Chronicle Progression // محطات التطور والاحتراف
                  </span>
                  <div className="grid grid-cols-1 gap-3">
                    {activeDriver.storyline.chronicleActs.map((act, aIdx) => (
                      <div
                        key={aIdx}
                        className="p-4 bg-neutral-900/40 rounded-xl border border-neutral-800/80 space-y-2 hover:border-neutral-700 transition-colors"
                      >
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-mono font-bold text-amber-400">{act.actNumber} // {act.title}</span>
                          <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 bg-neutral-950 border border-neutral-800 rounded text-neutral-400">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                            <span>TACTICAL LEAP</span>
                          </span>
                        </div>
                        <p className="text-xs text-neutral-300 leading-relaxed">
                          {act.narrative}
                        </p>
                        <div className="pt-1.5 text-[11px] font-mono text-amber-300/80 border-t border-neutral-800/60 flex items-baseline gap-1.5">
                          <span className="text-neutral-500 uppercase">Key Insight:</span>
                          <span>{act.tacticalInsight}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Driver's Code / Quote */}
                <div className="p-4 bg-neutral-950 rounded-xl border border-neutral-800 flex items-start gap-3">
                  <Quote className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-xs sm:text-sm text-neutral-200 italic leading-relaxed font-sans">
                      "{activeDriver.storyline.quote.text}"
                    </p>
                    <span className="text-[11px] font-mono text-neutral-400 block">
                      — {activeDriver.storyline.quote.speaker}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: TECHNICAL SPECIFICATIONS & SCHEMATIC */}
            {activeTab === 'specs' && (
              <div className="space-y-6 animate-fadeIn">
                {/* Detailed Biography Summary */}
                <div className="bg-neutral-900/60 p-5 rounded-xl border border-neutral-800/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase font-semibold">
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>The Story of the Driver & His Machine</span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                    {activeDriver.biography}
                  </p>
                </div>

                {/* Signature Driving Physics */}
                <div className="p-4 bg-neutral-900/40 border border-neutral-800 rounded-xl space-y-1.5">
                  <span
                    className={`text-xs font-mono uppercase font-bold block ${
                      activeDriver.isCoreTrio ? 'text-amber-400' : 'text-cyan-400'
                    }`}
                  >
                    Signature Technique: {activeDriver.signatureTechnique.name}
                  </span>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {activeDriver.signatureTechnique.description}
                  </p>
                </div>

                {/* Technical Modification Summary */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 bg-neutral-900/30 rounded-lg border border-neutral-800/80 space-y-1">
                    <div className="flex items-center gap-1.5 text-neutral-400 font-mono">
                      <Zap className="w-3.5 h-3.5 text-amber-400" />
                      <span>Engine & Tuning</span>
                    </div>
                    <div className="font-semibold text-neutral-200">{activeDriver.specs.engine}</div>
                    <div className="text-neutral-500 text-[11px]">{activeDriver.specs.keyModifications}</div>
                  </div>

                  <div className="p-3.5 bg-neutral-900/30 rounded-lg border border-neutral-800/80 space-y-1">
                    <div className="flex items-center gap-1.5 text-neutral-400 font-mono">
                      <Gauge className="w-3.5 h-3.5 text-amber-400" />
                      <span>Gearbox & Drivetrain</span>
                    </div>
                    <div className="font-semibold text-neutral-200">{activeDriver.specs.transmission}</div>
                    <div className="text-neutral-500 text-[11px]">{activeDriver.specs.drivetrain}</div>
                  </div>

                  <div className="p-3.5 bg-neutral-900/30 rounded-lg border border-neutral-800/80 space-y-1">
                    <div className="flex items-center gap-1.5 text-neutral-400 font-mono">
                      <Shield className="w-3.5 h-3.5 text-amber-400" />
                      <span>Police Evasion Philosophy</span>
                    </div>
                    <div className="font-semibold text-neutral-200">Factory Sleeper Styling</div>
                    <div className="text-neutral-500 text-[11px]">Zero conspicuous spoilers or loud badging</div>
                  </div>

                  <div className="p-3.5 bg-neutral-900/30 rounded-lg border border-neutral-800/80 space-y-1">
                    <div className="flex items-center gap-1.5 text-neutral-400 font-mono">
                      <Cpu className="w-3.5 h-3.5 text-amber-400" />
                      <span>Driving Discipline</span>
                    </div>
                    <div className="font-semibold text-neutral-200">{activeDriver.specialty.split(',')[0]}</div>
                    <div className="text-neutral-500 text-[11px]">
                      {activeDriver.isCoreTrio
                        ? 'Refined through three undefeated years'
                        : 'Tactical team enforcement in Riyadh'}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Personal Likes & Dislikes (Always Visible in Dossier) */}
            <div className="pt-4 border-t border-neutral-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider font-semibold">
                  Off-Grid Dossier // Likes &amp; Dislikes
                </span>
                <span className="text-[10px] font-mono text-neutral-500">
                  {activeDriver.name.split(' ')[0]}’s Personal Habits &amp; Pet Peeves
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                {/* Likes Card */}
                <div className="p-4 bg-emerald-950/15 border border-emerald-800/40 rounded-xl space-y-2.5">
                  <div className="flex items-center gap-2 font-mono font-bold uppercase text-emerald-400 text-[11px]">
                    <ThumbsUp className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Likes ({activeDriver.likes.length})</span>
                  </div>
                  <ul className="space-y-1.5">
                    {activeDriver.likes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-neutral-200 leading-snug">
                        <span className="text-emerald-400 font-mono font-bold mt-0.5">+</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Dislikes Card */}
                <div className="p-4 bg-red-950/15 border border-red-800/40 rounded-xl space-y-2.5">
                  <div className="flex items-center gap-2 font-mono font-bold uppercase text-red-400 text-[11px]">
                    <ThumbsDown className="w-3.5 h-3.5 text-red-400 shrink-0" />
                    <span>Dislikes ({activeDriver.dislikes.length})</span>
                  </div>
                  <ul className="space-y-1.5">
                    {activeDriver.dislikes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-neutral-200 leading-snug">
                        <span className="text-red-400 font-mono font-bold mt-0.5">−</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

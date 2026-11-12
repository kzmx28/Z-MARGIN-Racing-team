import React, { useState } from 'react';
import { EXPEDITION_SCHEDULE } from '../data/racingData';
import {
  Calendar,
  MapPin,
  AlertOctagon,
  Flame,
  Swords,
  CloudRain,
  Droplets,
  AlertTriangle,
  Wind,
  Trophy,
  CheckCircle2,
  Gauge,
  Timer,
  UserPlus,
  GraduationCap,
  Shield
} from 'lucide-react';

export const RaceSchedule: React.FC = () => {
  const [selectedExpeditionIndex, setSelectedExpeditionIndex] = useState<number>(0);
  const currentExpedition = EXPEDITION_SCHEDULE[selectedExpeditionIndex] || EXPEDITION_SCHEDULE[0];

  return (
    <section id="schedule" className="py-20 bg-neutral-950 border-b border-neutral-800 carbon-grid">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-amber-400" />
            <span>Expedition Calendar & Race Telemetry · سجل وجدول السباقات</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-neutral-100">
            Expedition Records & Schedule
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2">
            Z-MARGIN’s 3-year undefeated legacy. The <strong className="text-emerald-400 font-mono">November 11, 2026</strong> Al-Kharj
            expedition concluded in a historic <strong className="text-amber-400 font-mono">3 - 0 clean sweep</strong> under severe torrential
            desert rainstorms, welcoming Abdullah Al Omair to the team. Next up:{' '}
            <strong className="text-neutral-200 font-mono">November 18, 2026</strong> in Western Riyadh—followed by Mohammad Al-Quraishi’s
            indefinite academic hiatus (May God help him with his hardships, Ameen) as <strong className="text-cyan-300">Amr Al Balushi</strong> &amp;{' '}
            <strong className="text-cyan-300">Abdullah Al Omair</strong> step onto the frontlines for the next races to be announced.
          </p>
        </div>

        {/* Date Selector Tabs */}
        <div className="flex flex-wrap items-center gap-3 p-1.5 bg-neutral-900/90 rounded-xl border border-neutral-800/80 mb-8 max-w-fit">
          {EXPEDITION_SCHEDULE.map((exp, index) => {
            const isSelected = index === selectedExpeditionIndex;
            const isCompleted = exp.status === 'COMPLETED';
            const hasWeatherAlert = !!exp.weatherAlert;
            return (
              <button
                key={exp.id}
                onClick={() => setSelectedExpeditionIndex(index)}
                className={`px-5 py-3 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-2.5 whitespace-nowrap ${
                  isSelected
                    ? 'bg-amber-400 text-neutral-950 shadow-md font-bold'
                    : 'text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/60'
                }`}
              >
                <Calendar className="w-3.5 h-3.5 shrink-0" />
                <span>{exp.date}</span>
                {isCompleted ? (
                  <span
                    className={`inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                      isSelected
                        ? 'bg-neutral-950 text-emerald-400 border border-emerald-500/40'
                        : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    }`}
                  >
                    <CheckCircle2 className="w-3 h-3" />
                    <span>3 - 0 SWEEP</span>
                  </span>
                ) : exp.status === 'TBA' ? (
                  <span
                    className={`inline-flex items-center gap-1 text-[10px] font-mono px-1.5 py-0.5 rounded font-bold ${
                      isSelected
                        ? 'bg-cyan-950 text-cyan-200 border border-cyan-500/40'
                        : 'bg-cyan-950/60 text-cyan-300 border border-cyan-700/50'
                    }`}
                  >
                    <span>FRONTLINE TBA</span>
                  </span>
                ) : (
                  <span
                    className={`inline-flex items-center gap-1 text-[10px] font-mono px-1.5 py-0.5 rounded font-bold ${
                      isSelected
                        ? 'bg-neutral-900 text-amber-900'
                        : 'bg-neutral-800 text-neutral-300 border border-neutral-700'
                    }`}
                  >
                    <span>UPCOMING</span>
                  </span>
                )}
                <span className={`text-[10px] font-mono ${isSelected ? 'text-neutral-900' : 'text-neutral-500'}`}>
                  {exp.arabicLocation}
                </span>
              </button>
            );
          })}
        </div>

        {/* Weather Dispatch Banner */}
        {currentExpedition.weatherAlert && (
          <div className="relative overflow-hidden bg-gradient-to-r from-red-950/40 via-amber-950/30 to-blue-950/30 border-2 border-red-600/70 rounded-2xl p-6 sm:p-7 mb-8 shadow-2xl">
            <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 opacity-10 pointer-events-none">
              <CloudRain className="w-64 h-64 text-red-400" />
            </div>

            <div className="relative z-10 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-red-800/40 pb-3">
                <div className="flex items-center gap-2.5 text-xs font-mono font-bold uppercase tracking-wider text-red-400">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                  <span>METEOROLOGICAL DISPATCH // تحذير طقس استثنائي</span>
                </div>
                <div className="text-[11px] font-mono px-2.5 py-1 bg-red-950/80 border border-red-600 rounded text-red-300 font-bold">
                  {currentExpedition.status === 'COMPLETED' ? 'RUN COMPLETED UNDER TORRENTIAL RAIN' : 'CONDITIONS: CRITICAL HAZARD'}
                </div>
              </div>

              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-neutral-100 flex items-center gap-2">
                  <CloudRain className="w-6 h-6 text-cyan-400 shrink-0" />
                  <span>{currentExpedition.weatherAlert.condition}</span>
                </h3>
                <p className="text-neutral-300 text-sm mt-1 leading-relaxed">
                  {currentExpedition.weatherAlert.forecast}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 bg-neutral-950/80 border border-neutral-800 rounded-xl space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                    <Droplets className="w-3.5 h-3.5" />
                    <span className="uppercase font-bold">Surface Precipitation & Road Grip</span>
                  </div>
                  <div className="text-xs text-neutral-300 font-medium">
                    {currentExpedition.weatherAlert.rainfallForecast}
                  </div>
                  <p className="text-[11px] text-neutral-400 leading-normal">
                    {currentExpedition.weatherAlert.roadSurfaceHazard}
                  </p>
                </div>

                <div className="p-3.5 bg-neutral-950/80 border border-neutral-800 rounded-xl space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                    <Wind className="w-3.5 h-3.5" />
                    <span className="uppercase font-bold">Tactical Implication & Aftermath</span>
                  </div>
                  <p className="text-[11px] text-neutral-300 leading-normal">
                    {currentExpedition.weatherAlert.tacticalImplication}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Expedition Briefing Card */}
        <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6 sm:p-8 mb-8 space-y-4">
          <div className="flex flex-wrap items-baseline justify-between gap-4 pb-4 border-b border-neutral-800">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-400 mb-1">
                <span className="text-amber-400 font-bold">{currentExpedition.date}</span>
                <span aria-hidden="true" className="text-neutral-600">·</span>
                <span className="flex items-center gap-1.5 text-neutral-300">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{currentExpedition.location}</span>
                </span>
                <span aria-hidden="true" className="text-neutral-600">·</span>
                <span className="text-amber-500/80 font-mono">{currentExpedition.arabicLocation}</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-neutral-100 uppercase">
                {currentExpedition.title}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              {currentExpedition.score && (
                <div className="flex items-center gap-2 px-3 py-1 bg-emerald-950/60 border border-emerald-500/60 rounded text-emerald-300 text-xs font-mono font-bold">
                  <Trophy className="w-3.5 h-3.5 text-amber-400" />
                  <span>{currentExpedition.score}</span>
                </div>
              )}
              <div className="text-xs font-mono px-3 py-1 bg-neutral-950 border border-neutral-800 rounded text-neutral-300">
                STATUS:{' '}
                {currentExpedition.status === 'COMPLETED' ? (
                  <strong className="text-emerald-400 font-bold">OFFICIALLY COMPLETED</strong>
                ) : currentExpedition.status === 'TBA' ? (
                  <strong className="text-cyan-400 font-bold">TO BE ANNOUNCED · NEW GUARD FRONTLINE</strong>
                ) : (
                  <strong className="text-amber-400">COORDINATES LOCKED</strong>
                )}
              </div>
            </div>
          </div>

          <p className="text-neutral-300 text-sm leading-relaxed max-w-4xl font-sans">
            {currentExpedition.summary}
          </p>

          {currentExpedition.transitionNote && (
            <div className="p-4 bg-amber-950/25 border border-amber-700/50 rounded-xl flex items-start gap-3">
              <GraduationCap className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="space-y-1 text-xs">
                <span className="font-mono font-bold text-amber-400 uppercase tracking-wider block">
                  Syndicate Roster Transition Notice · إعلان انتقال التشكيلة
                </span>
                <p className="text-neutral-200 leading-relaxed font-sans">
                  {currentExpedition.transitionNote}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* 3 Driver Matchup Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {currentExpedition.matchups.map((match, mIdx) => {
            const isKhaled = match.memberId === 'khaled-al-qahtani';
            const isMohammad = match.memberId === 'mohammad-al-quraishi';
            const isNewGuard = match.memberId === 'amr-al-balushi' || match.memberId === 'abdullah-al-omair';
            const result = match.result;

            return (
              <div
                key={mIdx}
                className={`bg-neutral-950 border ${
                  result
                    ? 'border-emerald-500/40 hover:border-emerald-500/70 shadow-lg shadow-emerald-950/20'
                    : isNewGuard
                    ? 'border-cyan-500/40 hover:border-cyan-400/70'
                    : 'border-neutral-800 hover:border-neutral-700/80'
                } rounded-2xl p-6 flex flex-col justify-between space-y-6 transition-all`}
              >
                {/* Matchup Header */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider font-bold">
                      {currentExpedition.status === 'TBA'
                        ? `FRONTLINE SLOT 0${mIdx + 1} // ${isNewGuard ? 'NEW GUARD' : 'CORE ANCHOR'}`
                        : `MATCH 0${mIdx + 1} // ${isKhaled ? 'LEADER BOUT' : isMohammad ? 'CORNER TRIAL' : 'ALLIANCE TRIAL'}`}
                    </span>
                    {result ? (
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-0.5 rounded border bg-emerald-950/60 text-emerald-300 border-emerald-500/60 font-bold">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        <span>{result.resultType === 'WALKOVER_RECRUITMENT' ? 'RECRUITMENT WIN' : 'VICTORY'}</span>
                      </span>
                    ) : (
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded border inline-flex items-center gap-1 ${
                          match.stakesLevel === 'Survival Threshold'
                            ? 'bg-red-950/40 text-red-400 border-red-800/60'
                            : match.stakesLevel === 'Emotional Duel'
                            ? 'bg-amber-950/40 text-amber-300 border-amber-800/60'
                            : match.stakesLevel === 'Frontline Defense'
                            ? 'bg-cyan-950/50 text-cyan-300 border-cyan-700/60'
                            : 'bg-neutral-900 text-neutral-300 border-neutral-800'
                        }`}
                      >
                        {match.stakesLevel === 'Frontline Defense' && <Shield className="w-2.5 h-2.5" />}
                        <span>{match.stakesLevel}</span>
                      </span>
                    )}
                  </div>

                  {/* Duel Face-Off Block */}
                  <div className="p-4 bg-neutral-900/60 rounded-xl border border-neutral-800 space-y-3">
                    {/* Z-Margin Racer */}
                    <div>
                      <span className="text-[10px] font-mono text-neutral-500 uppercase block">Z-Margin Driver</span>
                      <h4 className="font-display text-lg font-bold text-neutral-100">
                        {match.memberName}
                      </h4>
                      <div className="text-xs font-mono text-amber-400 mt-0.5">
                        {match.memberCar}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-neutral-600 py-1">
                      <Swords className="w-3.5 h-3.5 text-neutral-500" />
                      <span>{result?.resultType === 'WALKOVER_RECRUITMENT' ? 'CONVERTED TO ALLIANCE' : 'HEAD-TO-HEAD VERSUS'}</span>
                    </div>

                    {/* Opponent Racer */}
                    <div>
                      <span className="text-[10px] font-mono text-neutral-500 uppercase block">
                        Rival ({match.opponentRole})
                      </span>
                      <h5 className="font-display text-base font-bold text-neutral-200">
                        {match.opponentCar}
                      </h5>
                    </div>
                  </div>

                  {/* Background Drama & Context */}
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-1.5 font-mono text-neutral-400 uppercase">
                      <AlertOctagon className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Battle Narrative & Drama</span>
                    </div>
                    <p className="text-neutral-300 leading-relaxed font-sans">
                      {match.battleContext}
                    </p>
                  </div>
                </div>

                {/* Match Result Telemetry / Tactical Directives */}
                <div className="space-y-3">
                  {result ? (
                    <div className="space-y-3 pt-2 border-t border-neutral-800/80">
                      {/* Telemetry numbers if available */}
                      {(result.runDistanceKm || result.runTime || result.topSpeedRainKmh) && (
                        <div className="grid grid-cols-3 gap-2 p-3 bg-neutral-900/80 rounded-xl border border-neutral-800">
                          {result.runDistanceKm && (
                            <div className="text-center">
                              <span className="text-[9px] font-mono text-neutral-500 uppercase block">Distance</span>
                              <span className="text-xs font-mono font-bold text-neutral-200">
                                {result.runDistanceKm} km
                              </span>
                            </div>
                          )}
                          {result.runTime && (
                            <div className="text-center border-x border-neutral-800">
                              <div className="flex items-center justify-center gap-1 text-[9px] font-mono text-neutral-500 uppercase">
                                <Timer className="w-2.5 h-2.5 text-amber-400" />
                                <span>Official Time</span>
                              </div>
                              <span className="text-xs font-mono font-bold text-amber-400">
                                {result.runTime}
                              </span>
                            </div>
                          )}
                          {result.topSpeedRainKmh && (
                            <div className="text-center">
                              <div className="flex items-center justify-center gap-1 text-[9px] font-mono text-neutral-500 uppercase">
                                <Gauge className="w-2.5 h-2.5 text-cyan-400" />
                                <span>Rain V-Max</span>
                              </div>
                              <span className="text-xs font-mono font-bold text-cyan-400">
                                {result.topSpeedRainKmh} km/h
                              </span>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Official Run Debrief */}
                      <div className="p-3.5 bg-emerald-950/20 border border-emerald-500/30 rounded-xl text-xs space-y-1.5">
                        <div className="flex items-center gap-1.5 font-mono text-emerald-400 uppercase text-[11px] font-bold">
                          {result.resultType === 'WALKOVER_RECRUITMENT' ? (
                            <UserPlus className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          ) : (
                            <Trophy className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          )}
                          <span>Official Race Debrief</span>
                        </div>
                        <p className="text-neutral-200 leading-relaxed text-[11px]">
                          {result.debrief}
                        </p>
                      </div>

                      {/* Aftermath / Emotional Conclusion */}
                      <div className="p-3 bg-neutral-900/60 rounded-xl border border-neutral-800/80 text-xs space-y-1">
                        <span className="text-[10px] font-mono text-amber-400/90 uppercase font-semibold block">
                          Aftermath & Resolution
                        </span>
                        <p className="text-neutral-400 leading-relaxed text-[11px]">
                          {result.aftermath}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <>
                      {/* Critical Weather Impact if Heavy Rain Active */}
                      {match.weatherImpact && (
                        <div className="p-3.5 bg-blue-950/30 border border-blue-800/50 rounded-xl text-xs space-y-1">
                          <div className="flex items-center gap-1.5 font-mono text-cyan-300 uppercase text-[11px] font-semibold">
                            <CloudRain className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            <span>Rain Hazard // خطر المطر الغزير</span>
                          </div>
                          <p className="text-cyan-100/90 leading-relaxed text-[11px]">
                            {match.weatherImpact}
                          </p>
                        </div>
                      )}

                      {/* Tactical Challenge Box */}
                      <div className="p-3.5 bg-neutral-900/40 rounded-xl border border-neutral-800/70 text-xs space-y-1">
                        <div className="flex items-center gap-1.5 font-mono text-amber-400 uppercase text-[11px] font-semibold">
                          <Flame className="w-3.5 h-3.5" />
                          <span>Tactical Directive</span>
                        </div>
                        <p className="text-neutral-400 leading-relaxed text-[11px]">
                          {match.tacticalChallenge}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


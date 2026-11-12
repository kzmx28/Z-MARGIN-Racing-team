import React, { useState } from 'react';
import { RIYADH_COURSES, TUWAIQ_PASS_IMAGE } from '../data/racingData';
import { RiyadhCourse } from '../types';
import { MapPin, Activity, Sliders, AlertTriangle, Flag, Trophy, Compass, Shield } from 'lucide-react';

export const TougePassViewer: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<RiyadhCourse>(RIYADH_COURSES[0]);

  return (
    <section id="telemetry" className="py-20 bg-neutral-950 border-b border-neutral-800 carbon-grid">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-2">
            <Compass className="w-4 h-4 text-amber-400" />
            <span>Riyadh Racing Grounds & Course Registry · سجل المضامير</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-neutral-100">
            Battlefield Pass Records
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2">
            Official sector benchmarks and record times across Riyadh’s racing corridors: from high-speed midnight
            strips to the fatal cliffside switchbacks of Tuwaiq and Mohammad's benchmark 1:13.000 in Wadi Hanifah DQ.
          </p>
        </div>

        {/* Riyadh Course Selection Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-neutral-900/90 rounded-xl border border-neutral-800/80 mb-8 max-w-fit">
          {RIYADH_COURSES.map((course) => {
            const isSelected = course.id === selectedCourse.id;
            return (
              <button
                key={course.id}
                onClick={() => setSelectedCourse(course)}
                className={`px-4 py-2.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-amber-400 text-neutral-950 font-bold shadow-sm'
                    : 'text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/60'
                }`}
              >
                <span>{course.name.split(' (')[0]}</span>
                <span className={`text-[10px] font-mono ${isSelected ? 'text-neutral-900 font-bold' : 'text-neutral-500'}`}>
                  {course.arabicName}
                </span>
              </button>
            );
          })}
        </div>

        {/* Course Card & Telemetry Data Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Course Profile, Key Benchmarks & Asphalt Character (7 cols) */}
          <div className="lg:col-span-7 bg-neutral-900/70 border border-neutral-800 rounded-2xl p-6 sm:p-7 space-y-6">
            {/* Course Header Info */}
            <div className="flex flex-wrap items-baseline justify-between gap-4 pb-4 border-b border-neutral-800">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{selectedCourse.zone}</span>
                  <span aria-hidden="true" className="text-neutral-600">·</span>
                  <span className="text-amber-500 font-mono">{selectedCourse.arabicName}</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-neutral-100 uppercase mt-1">
                  {selectedCourse.name}
                </h3>
              </div>

              <div className="px-3 py-1 bg-neutral-950 rounded border border-neutral-800 text-xs font-mono text-neutral-300">
                DISCIPLINE: <strong className="text-amber-400">{selectedCourse.type}</strong>
              </div>
            </div>

            {/* Core Metrics: Distance, Danger Classification, Course Record, Record Holder */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-neutral-950/80 rounded-xl border border-neutral-800">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-neutral-400 text-xs font-mono">
                  <Flag className="w-3.5 h-3.5 text-amber-400" />
                  <span>Distance</span>
                </div>
                <div className="font-mono text-neutral-100 text-lg sm:text-xl font-bold tabular-nums">
                  {selectedCourse.lengthKm} <span className="text-xs font-normal text-neutral-400">km</span>
                </div>
                <div className="text-[10px] text-neutral-500 font-mono">Course Length</div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-neutral-400 text-xs font-mono">
                  <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                  <span>Danger Class</span>
                </div>
                <div
                  className={`font-mono text-base sm:text-lg font-bold uppercase ${
                    selectedCourse.dangerLevel === 'Fatal Margin'
                      ? 'text-red-400'
                      : selectedCourse.dangerLevel === 'Extreme'
                      ? 'text-amber-400'
                      : 'text-neutral-200'
                  }`}
                >
                  {selectedCourse.dangerLevel}
                </div>
                <div className="text-[10px] text-neutral-500 font-mono">Asphalt Risk Level</div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-neutral-400 text-xs font-mono">
                  <Trophy className="w-3.5 h-3.5 text-amber-400" />
                  <span>Course Record</span>
                </div>
                <div className="font-mono text-amber-400 text-lg sm:text-xl font-bold tabular-nums">
                  {selectedCourse.recordTime}
                </div>
                <div className="text-[10px] text-neutral-500 font-mono">Benchmark Time</div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-neutral-400 text-xs font-mono">
                  <Activity className="w-3.5 h-3.5 text-amber-400" />
                  <span>Record Holder</span>
                </div>
                <div className="font-sans text-neutral-200 text-xs font-bold truncate mt-1" title={selectedCourse.recordHolder}>
                  {selectedCourse.recordHolder.split(' (')[0]}
                </div>
                <div className="text-[10px] text-neutral-500 font-mono truncate">
                  {selectedCourse.recordHolder.includes('(')
                    ? selectedCourse.recordHolder.split('(')[1].replace(')', '')
                    : 'Z-MARGIN Machine'}
                </div>
              </div>
            </div>

            {/* Course Backdrop / Visualizer */}
            {selectedCourse.id === 'tuwaiq-escarpment' && (
              <div className="relative h-44 rounded-xl overflow-hidden border border-neutral-800">
                <img
                  src={TUWAIQ_PASS_IMAGE}
                  alt="Tuwaiq Mountain Pass winding switchbacks at night"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
                <div className="absolute bottom-2 left-3 text-[11px] font-mono text-amber-300">
                  TUWAIQ ESCARPMENT CLIFF PASS · 26 HAIRPIN CORRIDOR
                </div>
              </div>
            )}

            {/* Course Overview & Asphalt Character */}
            <div className="bg-neutral-950/80 border border-neutral-800 rounded-xl p-5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase font-semibold">
                <Shield className="w-3.5 h-3.5 text-amber-400" />
                <span>Asphalt Character & Risk Assessment</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                {selectedCourse.description}
              </p>
            </div>
          </div>

          {/* Right Column: Standing Record Callout & Sector Directives (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Standing Course Record Callout Card */}
            <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-1.5 text-xs font-mono text-amber-400 uppercase font-semibold">
                <Sliders className="w-4 h-4 text-amber-400" />
                <span>Standing Course Benchmark</span>
              </div>
              <div className="p-4 bg-neutral-950 rounded-xl border border-neutral-800 space-y-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-mono text-neutral-500 uppercase">OFFICIAL TIME</span>
                  <span className="font-mono text-2xl font-bold text-amber-400 tabular-nums">
                    {selectedCourse.recordTime}
                  </span>
                </div>
                <div className="border-t border-neutral-850 pt-2 flex justify-between items-baseline">
                  <span className="text-xs font-mono text-neutral-500 uppercase">DRIVER</span>
                  <span className="text-xs font-bold text-neutral-200">
                    {selectedCourse.recordHolder}
                  </span>
                </div>
              </div>
            </div>

            {/* Key Sector Directives (Clean Text Cards - Zero Topology SVG / Zero Recon Marks) */}
            <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-neutral-800 text-xs font-mono text-neutral-300 uppercase font-semibold">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span>Sector Directives & Target Speeds</span>
              </div>

              <div className="space-y-3">
                {selectedCourse.sectors.map((sector, idx) => (
                  <div
                    key={sector.name}
                    className="p-3.5 bg-neutral-950 rounded-xl border border-neutral-800 space-y-1.5"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-amber-400 font-bold text-[11px]">
                          0{idx + 1}
                        </span>
                        <span className="font-display font-bold text-neutral-100">
                          {sector.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] font-mono">
                        <span className="text-amber-400 font-bold">{sector.targetSpeed} km/h</span>
                        <span className="text-neutral-600">·</span>
                        <span className="text-neutral-400">GEAR {sector.recommendedGear}</span>
                      </div>
                    </div>
                    <p className="text-[11px] text-neutral-400 leading-relaxed font-sans">
                      {sector.tacticalTip}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

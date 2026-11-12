import React, { useState } from 'react';
import { TRIO_BACKSTORY } from '../data/racingData';
import { MapPin, Calendar, Users, Quote, ChevronRight, ShieldCheck, Heart } from 'lucide-react';

export const TrioBackstory: React.FC = () => {
  const [activeActIndex, setActiveActIndex] = useState<number>(0);
  const currentAct = TRIO_BACKSTORY[activeActIndex] || TRIO_BACKSTORY[0];

  return (
    <section id="backstory" className="py-20 bg-neutral-950 border-b border-neutral-800 carbon-grid">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Syndicate Genesis · قصة التأسيس</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-neutral-100">
            How the Trio Met: Three Years of Untouchable Legacy
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2">
            Z-MARGIN was born from pain, devotion, and memory. Three friends who found in each other a brotherhood
            stronger than any family—facing around <strong className="text-amber-400 font-mono">142 racers</strong> throughout
            the Riyadh region over three years of friendship without a single defeat.
          </p>
        </div>

        {/* Act Navigation Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {TRIO_BACKSTORY.map((act, index) => {
            const isSelected = index === activeActIndex;
            return (
              <button
                key={act.id}
                onClick={() => setActiveActIndex(index)}
                className={`text-left p-5 rounded-xl border transition-all cursor-pointer relative overflow-hidden group ${
                  isSelected
                    ? 'bg-neutral-900 border-amber-400/80 shadow-md shadow-amber-500/10'
                    : 'bg-neutral-950/70 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/40'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className={isSelected ? 'text-amber-400 font-bold' : 'text-neutral-500'}>
                    ACT {act.actNumber}
                  </span>
                  <span className="text-neutral-500 font-mono text-[11px]">{act.timeline}</span>
                </div>
                <div className="font-display text-lg font-bold text-neutral-100 group-hover:text-amber-300 transition-colors">
                  {act.title}
                </div>
                <div className="text-xs text-neutral-400 mt-1">
                  {act.arabicTitle}
                </div>
                {isSelected && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Narrative Container */}
        <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6 sm:p-10 space-y-8">
          {/* Act Metadata & Title */}
          <div className="flex flex-wrap items-baseline justify-between gap-4 pb-6 border-b border-neutral-800">
            <div>
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-400 mb-2">
                <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{currentAct.timeline}</span>
                </span>
                <span aria-hidden="true" className="text-neutral-600">·</span>
                <span className="flex items-center gap-1.5 text-neutral-300">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{currentAct.location}</span>
                </span>
                <span aria-hidden="true" className="text-neutral-600">·</span>
                <span className="flex items-center gap-1.5 text-neutral-400">
                  <Users className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{currentAct.characters.join(' & ')}</span>
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-neutral-100 uppercase">
                {currentAct.title}
              </h3>
              <div className="text-sm text-amber-500/80 font-mono mt-1">
                {currentAct.arabicTitle}
              </div>
            </div>
          </div>

          {/* Narrative Paragraphs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
              {currentAct.narrative.map((paragraph, pIdx) => (
                <p key={pIdx} className="font-sans">
                  {paragraph}
                </p>
              ))}

              {/* Turning Point Callout */}
              <div className="p-4 bg-neutral-950 rounded-xl border border-neutral-800 mt-6 flex items-start gap-3">
                <Heart className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 block font-bold mb-0.5">
                    The Human Foundation
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-200 font-medium">
                    {currentAct.keyMoment}
                  </p>
                </div>
              </div>
            </div>

            {/* Quote Callout Column (4 cols) */}
            <div className="lg:col-span-4 bg-neutral-950 p-6 rounded-xl border border-neutral-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase">
                <Quote className="w-4 h-4 text-amber-400" />
                <span>The Voice of the Trio</span>
              </div>

              <blockquote className="text-sm text-neutral-200 italic leading-relaxed">
                "{currentAct.trioQuote.text}"
              </blockquote>

              <div className="pt-3 border-t border-neutral-800 text-xs font-mono text-amber-400 font-semibold">
                — {currentAct.trioQuote.speaker}
              </div>
            </div>
          </div>

          {/* Navigation to next act */}
          <div className="flex justify-between items-center pt-6 border-t border-neutral-800">
            <span className="text-xs font-mono text-neutral-500">
              CHRONICLE STAGE {activeActIndex + 1} OF {TRIO_BACKSTORY.length} · ~142 RACERS FACED · 3 YEARS UNDEFEATED
            </span>

            {activeActIndex + 1 < TRIO_BACKSTORY.length && (
              <button
                onClick={() => setActiveActIndex((prev) => prev + 1)}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors cursor-pointer font-display"
              >
                <span>Read Next Chapter: Act 0{activeActIndex + 2}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

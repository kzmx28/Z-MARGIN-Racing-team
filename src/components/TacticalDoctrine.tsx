import React, { useState } from 'react';
import { ChevronRight, Target, Compass, BookOpen } from 'lucide-react';

interface RiyadhDoctrine {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  driverOrigin: string;
  corePrinciple: string;
  explanation: string;
  telemetryTarget: string;
}

const RIYADH_DOCTRINES: RiyadhDoctrine[] = [
  {
    id: 'doctrine-fwd-pendulum',
    code: '01',
    title: 'The FWD Pendulum Inversion',
    subtitle: 'Liftoff Oversteer & Scandinavian Flick',
    driverOrigin: 'Pioneered by Yusuf Al-Mutairi (2011 Camry · 223 HP Manual)',
    corePrinciple: 'A Front-Wheel-Drive car understeers only if the driver lets the throttle dictate the chassis. The moment you abruptly lift throttle at corner entry, 60% of vehicle weight crashes onto the front axle, freeing the rear to slide freely like a drift car.',
    explanation: 'By entering the corner slightly wide and applying a quick counter-flick followed by immediate throttle release, the rear tires lose lateral adhesion. Yusuf balances this slide using left-foot braking without dropping engine RPM. His 223 HP manual Camry rotates around the front wheels like a compass needle, exiting with full front-drive traction.',
    telemetryTarget: 'Yaw rate of 28 deg/sec achieved during zero-throttle entry phase.'
  },
  {
    id: 'doctrine-mirage-apex',
    code: '02',
    title: 'The Mirage Apex Baiting Trap',
    subtitle: 'Optical Misdirection in High-Speed Turns',
    driverOrigin: 'Mastered by Mohammad Al-Quraishi (2007 Accord · 233 HP K24 Drag Cartel 3.2 Cams & H5 Auto)',
    corePrinciple: 'Driving since age 7 gives you an internal speedometer that opponents do not have. When you dive into an apex at suicidal entry speed, the chasing driver instinctively assumes that if you can make it, they can too.',
    explanation: 'Mohammad waits until the absolute millisecond before terminal understeer before applying trail braking. Chasing drivers who try to match his entry trajectory lack his microscopic tire-slip sensitivity; they panic, lock their front brakes, and understeer into the gravel runoff or concrete barriers while Mohammad glides through.',
    telemetryTarget: 'Brake initiation delayed by 18 meters compared to conventional circuit markers.'
  },
  {
    id: 'doctrine-lsx-slingshot',
    code: '03',
    title: 'The Midnight V8 Slingshot',
    subtitle: 'High-Speed Slipstream Decoupling',
    driverOrigin: 'Perfected by Khaled Al-Qahtani (2016 Caprice · ~460 HP Automatic)',
    corePrinciple: 'On Riyadh’s vast 8-lane highways, raw top speed is useless without timing. The race is won in the transition from the slipstream vacuum to clean air.',
    explanation: 'Khaled tucks within 0.8 meters of an opponent’s bumper at 220 km/h, letting the rival car push through aerodynamic drag while his V8 runs in the low-pressure pocket. At the optimal moment, Khaled cuts the wheel half an inch, unleashes full 460 HP V8 torque through the automatic transmission, and slingshots past before the opponent can respond.',
    telemetryTarget: 'Acceleration surge from 200 to 260 km/h completed in 4.5 seconds.'
  },
  {
    id: 'doctrine-desert-thermal',
    code: '04',
    title: 'Desert Asphalt & Dust Boundary Layer',
    subtitle: 'Thermal Management & Low-Adhesion Margins',
    driverOrigin: 'Z-Margin Field Protocol',
    corePrinciple: 'Riyadh’s desert asphalt carries micro-silica sand blown across the surface. Never rely on cold tire grip on the first two kilometers.',
    explanation: 'The ambient night heat keeps the asphalt warm even at midnight, but the fine dust film creates sudden micro-slips. Drivers must scrub tires during the rolling warmup phase to clear tread channels, keeping the tire core temperature inside the 85°C to 95°C adhesion window.',
    telemetryTarget: 'Tire core pyrometer readings stabilized between 88°C and 94°C.'
  },
  {
    id: 'doctrine-reflex-horizon',
    code: '05',
    title: 'The Sub-Second Reflex Horizon',
    subtitle: 'Human Latency Compression & Gap Seizing',
    driverOrigin: 'Pioneered by Amr Al Balushi (2019 Elantra · Al-Naseem Reaction Ace)',
    corePrinciple: 'In dense multi-lane traffic, higher horsepower is useless if the driver takes half a second to verify an opening. Reaction time compresses space.',
    explanation: 'Amr hones his optical processing on the peripheral micro-movements of surrounding traffic: front wheel angles, brake lamp relays, and vehicle weight shifts. By committing to the gap milliseconds before the opening fully materializes, Amr slips his stock 2019 Elantra through microscopic windows, leaving rivals trapped behind civilian traffic.',
    telemetryTarget: 'Driver reaction initiation latency measured under 0.16 seconds.'
  },
  {
    id: 'doctrine-metronome-pace',
    code: '06',
    title: 'The Metronome Sector Discipline',
    subtitle: 'Endurance Rhythm & Mathematical Consistency',
    driverOrigin: 'Mastered by Abdullah Al Omair (2012 Sonata · Racing Since 15 · Record Veteran)',
    corePrinciple: 'Sprint bursts overheat tires and roast brakes. The driver who runs ten consecutive sectors with near-zero time deviation will break an opponent mentally and mechanically.',
    explanation: 'Racing since he was 15, Abdullah treats Riyadh’s road network as a mathematical grid. Instead of erratic aggressive attacks, he maintains constant tire slip angles and smooth throttle sweeps. Opponents who rush to match his blistering pace overheat their tires and fade, while Abdullah remains relentless.',
    telemetryTarget: 'Sector pace deviation held within ±0.08 seconds across 10 consecutive kilometers.'
  }
];

export const TacticalDoctrine: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(RIYADH_DOCTRINES[0].id);
  const activeDoctrine = RIYADH_DOCTRINES.find((d) => d.id === selectedId) || RIYADH_DOCTRINES[0];

  return (
    <section id="doctrine" className="py-20 bg-neutral-950 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2">
            The Z-Margin Tactical Philosophy
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-neutral-100">
            Street Racing Doctrine
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2">
            Khaled, Yusuf, and Mohammad don’t win by luck. Every victory across the Riyadh underground is governed
            by tested physical principles: weight transfer manipulation, psychological corner traps, and high-speed drafting.
          </p>
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Index (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {RIYADH_DOCTRINES.map((doc) => {
              const isSelected = doc.id === activeDoctrine.id;
              return (
                <button
                  key={doc.id}
                  onClick={() => setSelectedId(doc.id)}
                  className={`w-full text-left p-5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-neutral-900 border-amber-400/80 shadow-md shadow-amber-500/10'
                      : 'bg-neutral-900/30 border-neutral-800/80 hover:bg-neutral-900/60 hover:border-neutral-700'
                  }`}
                >
                  <div className="space-y-1 pr-4">
                    <div className="flex items-center gap-2 text-xs font-mono">
                      <span className={isSelected ? 'text-amber-400 font-bold' : 'text-neutral-500'}>
                        {doc.code}. PRINCIPLE
                      </span>
                      <span className="text-neutral-500">·</span>
                      <span className="text-neutral-400 text-[11px] truncate">{doc.subtitle}</span>
                    </div>
                    <div className="font-display text-base sm:text-lg font-bold text-neutral-100">
                      {doc.title}
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 shrink-0 transition-transform ${
                      isSelected ? 'text-amber-400 translate-x-1' : 'text-neutral-600'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Doctrine Details (7 cols) */}
          <div className="lg:col-span-7 bg-neutral-900/70 border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="pb-4 border-b border-neutral-800">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase mb-1">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{activeDoctrine.driverOrigin}</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-neutral-100 uppercase">
                {activeDoctrine.title}
              </h3>
              <p className="text-xs text-neutral-400 font-mono mt-1">
                Dynamics: {activeDoctrine.subtitle}
              </p>
            </div>

            {/* Core Principle Quote */}
            <div className="p-4 bg-neutral-950 rounded-xl border border-neutral-800/80">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase mb-2">
                <Target className="w-3.5 h-3.5 text-amber-400" />
                <span>Foundational Street Axiom</span>
              </div>
              <blockquote className="text-sm sm:text-base font-semibold text-neutral-200 italic leading-relaxed">
                "{activeDoctrine.corePrinciple}"
              </blockquote>
            </div>

            {/* Tactical Debrief */}
            <div className="space-y-3">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block">
                Execution Mechanics & Technical Breakdown
              </span>
              <p className="text-neutral-300 text-sm leading-relaxed">
                {activeDoctrine.explanation}
              </p>
            </div>

            {/* Telemetry Metric Target */}
            <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 flex items-center gap-3">
              <Compass className="w-5 h-5 text-amber-400 shrink-0" />
              <div className="text-xs font-mono text-neutral-300">
                <strong className="text-amber-400 block mb-0.5">TELEMETRY BENCHMARK:</strong>
                {activeDoctrine.telemetryTarget}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

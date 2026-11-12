import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RaceSchedule } from './components/RaceSchedule';
import { MachineFleet } from './components/MachineFleet';
import { TrioBackstory } from './components/TrioBackstory';
import { TougePassViewer } from './components/TougePassViewer';
import { TacticalDoctrine } from './components/TacticalDoctrine';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col selection:bg-amber-500 selection:text-neutral-950 font-sans">
      {/* Top Bar Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onExploreBackstory={() => handleNavigate('backstory')}
          onExploreFleet={() => handleNavigate('machines')}
          onExploreCircuits={() => handleNavigate('telemetry')}
          onExploreSchedule={() => handleNavigate('schedule')}
        />

        {/* Upcoming Race Schedule: Nov 11, 2026 (Al-Kharj Torrential Rain Alert) & Nov 18 (Western Riyadh) */}
        <RaceSchedule />

        {/* The Z-Margin Trio & Sleeper Specs (No Car Pictures, Exact Specs, No Colors) */}
        <MachineFleet />

        {/* The Backstory: 3 Years of Brotherhood & How the Trio Met */}
        <TrioBackstory />

        {/* Riyadh Circuits & Telemetry (Features Mohammad's 1:13.000 DQ Record) */}
        <TougePassViewer />

        {/* Tactical Racing Doctrine */}
        <TacticalDoctrine />
      </main>

      {/* Quiet Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

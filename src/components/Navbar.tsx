import React from 'react';
import { Sparkles } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate
}) => {
  const navLinks = [
    { id: 'schedule', label: 'Race Schedule' },
    { id: 'machines', label: 'The Trio & Team' },
    { id: 'backstory', label: 'How We Met' },
    { id: 'telemetry', label: 'Riyadh Circuits' },
    { id: 'doctrine', label: 'Racing Doctrine' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/80 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => onNavigate('hero')}
          className="text-left group cursor-pointer focus:outline-none flex items-baseline gap-2"
        >
          <span className="font-display text-xl font-bold tracking-wider text-neutral-100 uppercase whitespace-nowrap shrink-0 group-hover:text-amber-400 transition-colors">
            Z-MARGIN
          </span>
          <span className="text-xs text-amber-500/80 font-mono tracking-normal">
            حافة الصفر
          </span>
        </button>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-400">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`whitespace-nowrap shrink-0 transition-colors py-1 hover:text-neutral-100 cursor-pointer ${
                activeSection === link.id
                  ? 'text-amber-400 border-b border-amber-400 font-semibold'
                  : 'text-neutral-400'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: 1 primary action (Sound effects completely removed as requested) */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onNavigate('backstory')}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-sm shadow-amber-500/20"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Origin Story</span>
          </button>
        </div>
      </div>
    </header>
  );
};

import React from 'react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="font-display text-lg font-bold tracking-wider text-neutral-100 uppercase">
              Z-MARGIN
            </span>
            <span className="text-xs text-amber-500/80 font-mono">
              حافة الصفر
            </span>
          </div>
          <p className="text-xs text-neutral-500 max-w-sm">
            Riyadh Underground Street Racing Syndicate. Led by Khaled Al-Qahtani, Yusuf Al-Mutairi,
            and Mohammad Al-Quraishi. Dedicated to zero-margin precision on midnight asphalt.
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
          <button onClick={() => onNavigate('schedule')} className="hover:text-amber-400 transition-colors cursor-pointer">
            Race Schedule
          </button>
          <button onClick={() => onNavigate('machines')} className="hover:text-amber-400 transition-colors cursor-pointer">
            The Trio & Team
          </button>
          <button onClick={() => onNavigate('backstory')} className="hover:text-amber-400 transition-colors cursor-pointer">
            How We Met
          </button>
          <button onClick={() => onNavigate('telemetry')} className="hover:text-amber-400 transition-colors cursor-pointer">
            Riyadh Circuits
          </button>
          <button onClick={() => onNavigate('doctrine')} className="hover:text-amber-400 transition-colors cursor-pointer">
            Racing Doctrine
          </button>
        </nav>

        <div className="text-xs text-neutral-600 font-mono text-center md:text-right">
          <span>AL-FALAH WORKSHOP · RIYADH DIVISION</span>
          <div className="text-[11px] text-neutral-700 mt-0.5">
            © {new Date().getFullYear()} Z-MARGIN Syndicate. Central Region Reign.
          </div>
        </div>
      </div>
    </footer>
  );
};

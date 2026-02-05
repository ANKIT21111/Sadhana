
import React from 'react';
import { Screen } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeScreen, onNavigate }) => {
  return (
    <div className="flex flex-col h-screen w-full max-w-md mx-auto bg-background-dark overflow-hidden shadow-2xl relative">
      <main className="flex-1 overflow-y-auto custom-scrollbar">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="h-20 bg-card-dark/80 backdrop-blur-xl border-t border-white/5 grid grid-cols-4 items-center z-50">
        <NavButton
          icon="prayer_times"
          label="नाम जप"
          isActive={activeScreen === Screen.JAAP}
          onClick={() => onNavigate(Screen.JAAP)}
        />
        <NavButton
          icon="calendar_month"
          label="कैलेंडर"
          isActive={activeScreen === Screen.CALENDAR}
          onClick={() => onNavigate(Screen.CALENDAR)}
        />
        <NavButton
          icon="home"
          label="मुख्य"
          isActive={activeScreen === Screen.HOME}
          onClick={() => onNavigate(Screen.HOME)}
          isCenter={true}
        />
        <NavButton
          icon="alarm"
          label="अलार्म"
          isActive={activeScreen === Screen.ALARMS}
          onClick={() => onNavigate(Screen.ALARMS)}
        />
      </nav>
    </div>
  );
};

interface NavButtonProps {
  icon: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
  isCenter?: boolean;
}

const NavButton: React.FC<NavButtonProps> = ({ icon, label, isActive, onClick, isCenter }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center gap-1 transition-all duration-300 w-full relative h-full justify-center mx-auto ${isActive ? 'text-primary' : 'text-text-gold hover:text-white'
      } ${isCenter && isActive ? 'drop-shadow-[0_0_8px_rgba(236,146,19,0.3)]' : ''}`}
  >
    {isCenter && isActive && (
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-primary rounded-full blur-[2px]" />
    )}
    <span className={`material-symbols-outlined text-2xl ${isActive ? 'fill-1 font-bold scale-110' : ''}`}>{icon}</span>
    <span className="text-[10px] font-bold tracking-wider uppercase">{label}</span>
  </button>
);

export default Layout;

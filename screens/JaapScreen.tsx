
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { MANTRAS, toHindiDigits } from '../constants';

const JaapScreen: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [count, setCount] = useState(108);
  const [malas, setMalas] = useState(5);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedMantra, setSelectedMantra] = useState(MANTRAS[0].id);
  const containerRef = useRef<HTMLDivElement>(null);

  const incrementCount = useCallback(() => {
    if (isPaused) return;
    
    // Haptic effect mockup
    if (window.navigator.vibrate) {
      window.navigator.vibrate(20);
    }

    setCount(prev => {
      if (prev >= 108) {
        setMalas(m => m + 1);
        return 1;
      }
      return prev + 1;
    });
  }, [isPaused]);

  const handleTap = (e: React.MouseEvent | React.TouchEvent) => {
    // Create ripple effect
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = ('touches' in e ? e.touches[0].clientX : e.clientX) - rect.left;
    const y = ('touches' in e ? e.touches[0].clientY : e.clientY) - rect.top;

    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    container.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);

    incrementCount();
  };

  return (
    <div className="flex flex-col h-full bg-background-dark relative">
      {/* App Bar */}
      <div className="p-4 flex items-center justify-between">
        <button onClick={onBack} className="p-2 text-white">
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <h2 className="text-xl font-bold">Naam Jaap</h2>
        <button className="p-2 text-white">
          <span className="material-symbols-outlined">settings</span>
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6 space-y-12">
        {/* Main Counter Display */}
        <div className="relative w-80 h-80 flex items-center justify-center">
          {/* Animated Rings */}
          <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_10s_linear_infinite]"></div>
          <div className="absolute inset-4 rounded-full border border-dashed border-primary/40 animate-[spin_15s_linear_infinite_reverse]"></div>
          <div className="absolute inset-0 rounded-full border-4 border-primary/10 animate-pulse"></div>
          
          <div className="z-10 text-center space-y-2">
            <h1 className="text-[100px] font-bold leading-none tracking-tight">
              {toHindiDigits(count)}
            </h1>
            <p className="text-primary text-xl font-bold tracking-[0.2em] uppercase">Counts</p>
          </div>
        </div>

        {/* Stats */}
        <div className="text-center space-y-3">
          <p className="text-text-gold text-lg">Total Malas Completed: {toHindiDigits(malas)}</p>
          <div className="w-16 h-1 bg-primary/40 mx-auto rounded-full"></div>
        </div>

        {/* Mantra Selection */}
        <div className="w-full max-w-xs space-y-2">
          <label className="text-text-gold/60 text-[10px] font-bold uppercase tracking-[0.2em] block text-center">
            Select Mantra
          </label>
          <div className="relative">
            <select 
              value={selectedMantra}
              onChange={(e) => setSelectedMantra(e.target.value)}
              className="w-full h-14 bg-card-dark border border-white/10 rounded-2xl px-6 appearance-none text-center font-bold focus:ring-1 focus:ring-primary/50"
            >
              {MANTRAS.map(m => (
                <option key={m.id} value={m.id}>{m.name}</option>
              ))}
            </select>
            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none">
              expand_more
            </span>
          </div>
        </div>
      </div>

      {/* Tap Trigger Area */}
      <div className="px-6 pb-6" ref={containerRef}>
        <button 
          onMouseDown={handleTap}
          onTouchStart={handleTap}
          className="w-full h-24 bg-primary/5 border-2 border-primary/20 rounded-3xl flex flex-col items-center justify-center active:bg-primary/15 active:scale-[0.98] transition-all duration-75 relative overflow-hidden"
        >
          <span className="material-symbols-outlined text-primary text-4xl">touch_app</span>
          <p className="text-primary text-xs font-black tracking-widest mt-1">TAP TO COUNT</p>
        </button>
      </div>

      {/* Footer Controls */}
      <div className="bg-card-dark/50 backdrop-blur-xl rounded-t-[40px] p-8 flex items-center justify-around border-t border-white/5">
        <button onClick={() => setCount(0)} className="flex flex-col items-center gap-2 text-text-gold hover:text-white transition-colors">
          <div className="p-4 rounded-full bg-white/5">
            <span className="material-symbols-outlined text-2xl">refresh</span>
          </div>
          <span className="text-xs font-bold uppercase tracking-wider">Reset</span>
        </button>

        <button 
          onClick={() => setIsPaused(!isPaused)}
          className="size-20 rounded-full bg-primary text-background-dark shadow-2xl shadow-primary/30 flex items-center justify-center active:scale-90 transition-transform"
        >
          <span className="material-symbols-outlined text-4xl fill-1">
            {isPaused ? 'play_arrow' : 'pause'}
          </span>
        </button>

        <button className="flex flex-col items-center gap-2 text-text-gold hover:text-white transition-colors">
          <div className="p-4 rounded-full bg-white/5">
            <span className="material-symbols-outlined text-2xl">history</span>
          </div>
          <span className="text-xs font-bold uppercase tracking-wider">History</span>
        </button>
      </div>
    </div>
  );
};

export default JaapScreen;

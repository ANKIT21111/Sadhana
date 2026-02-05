
import React, { useState } from 'react';
import { toHindiDigits } from '../constants';

interface Alarm {
  id: string;
  time: string;
  label: string;
  sound: string;
  note?: string;
  enabled: boolean;
}

const AlarmScreen: React.FC = () => {
  const [alarms, setAlarms] = useState<Alarm[]>([
    { id: '1', time: '04:24', label: 'Muhurat Start', sound: 'Shankh', note: '5 mins of Dhyana', enabled: true },
    { id: '2', time: '05:00', label: 'Naam Jaap', sound: 'Om Mantra', enabled: false },
    { id: '3', time: '05:12', label: 'Muhurat End', sound: 'Temple Bell', enabled: true },
  ]);

  const toggleAlarm = (id: string) => {
    setAlarms(prev => prev.map(a => a.id === id ? { ...a, enabled: !a.enabled } : a));
  };

  return (
    <div className="flex flex-col h-full bg-background-dark pb-32">
      {/* App Bar */}
      <div className="p-4 flex items-center justify-between sticky top-0 bg-background-dark z-20 border-b border-primary/10">
        <span className="material-symbols-outlined text-primary text-2xl">temple_hindu</span>
        <h2 className="text-xl font-bold">Brahma Muhurat Alarms</h2>
        <button className="p-2 text-white">
          <span className="material-symbols-outlined">settings</span>
        </button>
      </div>

      <div className="p-6 space-y-8">
        {/* Info Box */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined">auto_awesome</span>
            <h3 className="font-bold text-lg">Precision Calculations</h3>
          </div>
          <p className="text-text-gold text-sm leading-relaxed">
            Your spiritual windows are automatically adjusted daily based on your current location's sunrise to ensure precise alignment for Sadhana.
          </p>
          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-5 space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-primary/10">
              <span className="text-primary font-bold text-sm">Today's Muhurat</span>
              <span className="font-bold">{toHindiDigits('4:24')} AM - {toHindiDigits('5:12')} AM</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-primary font-bold text-sm">Tomorrow's Muhurat</span>
              <span className="font-bold">{toHindiDigits('4:25')} AM - {toHindiDigits('5:13')} AM</span>
            </div>
          </div>
        </div>

        {/* Alarms List */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold">Your Alarms</h3>
          <div className="space-y-4">
            {alarms.map(alarm => (
              <div 
                key={alarm.id} 
                className={`bg-white/5 border border-white/10 rounded-3xl p-6 transition-all duration-300 ${!alarm.enabled ? 'opacity-40 grayscale' : 'opacity-100 shadow-xl shadow-black/20'}`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="space-y-1">
                    <h4 className="text-4xl font-light tracking-tight">{toHindiDigits(alarm.time)} AM</h4>
                    <p className={`text-[10px] font-black uppercase tracking-[0.2em] ${alarm.enabled ? 'text-primary' : 'text-text-gold'}`}>
                      {alarm.label}
                    </p>
                  </div>
                  <button 
                    onClick={() => toggleAlarm(alarm.id)}
                    className={`w-14 h-8 rounded-full transition-all duration-300 relative ${alarm.enabled ? 'bg-primary' : 'bg-white/10'}`}
                  >
                    <div className={`absolute top-1 size-6 rounded-full bg-white transition-all duration-300 ${alarm.enabled ? 'left-7' : 'left-1'}`}></div>
                  </button>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-text-gold">
                    <span className="material-symbols-outlined text-lg">music_note</span>
                    <span className="text-sm font-medium">Sound: <span className="text-white">{alarm.sound}</span></span>
                  </div>
                  {alarm.note && (
                    <div className="flex items-center gap-3 text-text-gold">
                      <span className="material-symbols-outlined text-lg">snooze</span>
                      <span className="text-sm italic">"{alarm.note}"</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAB */}
      <div className="fixed bottom-28 left-1/2 -translate-x-1/2 z-30">
        <button className="bg-primary hover:bg-primary/90 text-background-dark flex items-center gap-3 px-10 py-4 rounded-full shadow-2xl shadow-primary/40 font-black tracking-widest transition-transform active:scale-95 whitespace-nowrap">
          <span className="material-symbols-outlined">add</span>
          NEW ALARM
        </button>
      </div>
    </div>
  );
};

export default AlarmScreen;

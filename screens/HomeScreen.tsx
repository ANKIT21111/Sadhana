
import React, { useState } from 'react';
import { toHindiDigits } from '../constants';

const HomeScreen: React.FC<{ onJaapStart: () => void }> = ({ onJaapStart }) => {
  const [alarmEnabled, setAlarmEnabled] = useState(true);

  return (
    <div className="flex flex-col pb-8">
      {/* Header */}
      <header className="p-6 text-center space-y-2">
        <div className="flex justify-center mb-4">
          <span className="material-symbols-outlined text-primary text-4xl">temple_hindu</span>
        </div>
        <h2 className="text-text-gold text-lg font-medium tracking-wide">आज का पंचांग</h2>
        <h1 className="text-4xl font-bold tracking-tight">
          {toHindiDigits(14)} कार्तिक, {toHindiDigits(2080)}
        </h1>
      </header>

      {/* Daily Progress */}
      <div className="px-6 mb-8">
        <div className="bg-card-dark p-5 rounded-2xl border border-white/5 space-y-3">
          <div className="flex justify-between items-center">
            <h3 className="text-white font-bold">दैनिक साधना प्रगति</h3>
            <span className="text-primary font-bold text-lg">{toHindiDigits(91)}%</span>
          </div>
          <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full" style={{ width: '91%' }}></div>
          </div>
          <p className="text-text-gold text-xs">सिद्धि के करीब: {toHindiDigits(992)} मंत्र शेष</p>
        </div>
      </div>

      {/* Naam Jaap Card */}
      <div className="px-6 mb-8">
        <div className="bg-card-dark rounded-3xl overflow-hidden border border-white/5 shadow-xl transition-transform active:scale-95 cursor-pointer" onClick={onJaapStart}>
          <div className="h-48 relative">
            <img
              src="https://picsum.photos/seed/mala/600/400"
              alt="Mala"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card-dark to-transparent"></div>
            <div className="absolute bottom-4 right-4 text-primary">
              <span className="material-symbols-outlined text-3xl animate-pulse">auto_awesome</span>
            </div>
          </div>
          <div className="p-5 space-y-4">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold">नाम जप</h2>
              <p className="text-text-gold text-sm font-medium">आज का जाप: {toHindiDigits('10,008')}</p>
              <p className="text-text-gold/60 text-xs">लक्ष्य: {toHindiDigits('11,000')} | निरंतरता: {toHindiDigits(15)} दिन 🔥</p>
            </div>
            <button className="w-full h-14 bg-primary text-background-dark font-bold text-lg rounded-xl flex items-center justify-center gap-3">
              <span className="material-symbols-outlined fill-1">radio_button_checked</span>
              जाप शुरू करें
            </button>
          </div>
        </div>
      </div>

      {/* Brahma Muhurat */}
      <div className="px-6">
        <h3 className="text-text-gold font-bold uppercase tracking-widest text-xs mb-4">ब्रह्म मुहूर्त (Brahma Muhurat)</h3>
        <div className="bg-card-dark p-4 rounded-2xl border border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="size-14 bg-primary/20 rounded-2xl flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-3xl">sunny</span>
            </div>
            <div>
              <p className="text-2xl font-bold">{toHindiDigits('04:22')} पूर्वाह्न</p>
              <p className="text-text-gold text-xs">अगला मुहूर्त अलार्म</p>
            </div>
          </div>
          <button
            onClick={() => setAlarmEnabled(!alarmEnabled)}
            className={`w-14 h-8 rounded-full transition-all duration-300 relative ${alarmEnabled ? 'bg-primary' : 'bg-white/10'}`}
          >
            <div className={`absolute top-1 size-6 rounded-full bg-white transition-all duration-300 ${alarmEnabled ? 'left-7' : 'left-1 shadow-sm'}`}></div>
          </button>
        </div>
      </div>

      {/* Extra Grid */}
      <div className="grid grid-cols-2 gap-4 px-6 mt-8">
        <div className="bg-card-dark p-6 rounded-2xl border border-white/5 flex flex-col items-center gap-3">
          <span className="material-symbols-outlined text-primary text-4xl">menu_book</span>
          <span className="font-bold">भगवत गीता</span>
        </div>
        <div className="bg-card-dark p-6 rounded-2xl border border-white/5 flex flex-col items-center gap-3">
          <span className="material-symbols-outlined text-primary text-4xl">self_improvement</span>
          <span className="font-bold">ध्यान</span>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;

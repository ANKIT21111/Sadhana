
import React, { useState } from 'react';
import { toHindiDigits, MOCK_HISTORY } from '../constants';

const CalendarScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState('tithi');
  const [selectedDay, setSelectedDay] = useState<number | null>(11);

  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const emptyPre = Array.from({ length: 3 }, (_, i) => i);

  return (
    <div className="flex flex-col h-full bg-background-dark">
      {/* App Bar */}
      <div className="p-4 flex items-center justify-between sticky top-0 bg-background-dark z-20">
        <span className="material-symbols-outlined text-primary text-2xl">calendar_month</span>
        <h2 className="text-xl font-bold">विक्रम संवत कैलेंडर</h2>
        <button className="p-2 text-white">
          <span className="material-symbols-outlined">notifications</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex px-4 border-b border-white/10">
        {['तिथि', 'साधना', 'आंकड़े'].map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab === 'तिथि' ? 'tithi' : tab)}
            className={`flex-1 py-4 text-sm font-bold tracking-wider relative transition-colors ${
              (tab === 'तिथि' && activeTab === 'tithi') || activeTab === tab ? 'text-white' : 'text-text-gold'
            }`}
          >
            {tab}
            {((tab === 'तिथि' && activeTab === 'tithi') || activeTab === tab) && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Month Picker */}
      <div className="flex items-center justify-between p-6">
        <button className="text-primary p-2">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <h3 className="text-primary text-xl font-bold">फाल्गुन २०८०</h3>
        <button className="text-primary p-2">
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="px-6 space-y-6">
        <div className="grid grid-cols-7 text-center mb-2 border-b border-white/10 pb-4">
          {['रवि', 'सोम', 'मंगल', 'बुध', 'गुरु', 'शुक्र', 'शनि'].map(d => (
            <span key={d} className="text-text-gold/60 text-[10px] font-bold uppercase">{d}</span>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-y-6 text-center">
          {emptyPre.map(i => <div key={`empty-${i}`} />)}
          {days.map(day => {
            const isSpecial = [5, 26].includes(day); // Ekadashi
            const isPurnima = day === 15;
            const isAmavasya = day === 30;
            const isSelected = selectedDay === day;
            const hasJaap = day % 3 === 0;

            return (
              <button 
                key={day} 
                onClick={() => setSelectedDay(day)}
                className="flex flex-col items-center gap-1 group relative"
              >
                <div className={`size-10 flex items-center justify-center rounded-full transition-all duration-300 font-hindi relative ${
                  isSelected ? 'bg-primary text-background-dark scale-110 shadow-lg shadow-primary/30' : 
                  isPurnima ? 'bg-white/10' :
                  isAmavasya ? 'bg-black/50 border border-white/10' :
                  isSpecial ? 'border-2 border-primary' :
                  'hover:bg-white/5'
                }`}>
                  <span className="text-base font-bold">{toHindiDigits(day)}</span>
                </div>
                {isSpecial && <span className="text-[8px] text-primary font-bold">एकादशी</span>}
                {isPurnima && <span className="text-[8px] text-text-gold font-bold">पूर्णिमा</span>}
                {isAmavasya && <span className="text-[8px] text-text-gold font-bold">अमावस्या</span>}
                {hasJaap && !isSpecial && !isPurnima && !isAmavasya && (
                  <span className="material-symbols-outlined text-[10px] text-primary absolute -bottom-4">prayer_times</span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Stats Overlay/Card */}
      {selectedDay && (
        <div className="mt-12 px-6">
          <div className="bg-[#2d2419] rounded-3xl p-6 border border-primary/20 shadow-2xl space-y-6 animate-[slideUp_0.4s_ease-out]">
            <div className="flex justify-between items-center">
              <h4 className="text-xl font-bold">{toHindiDigits(selectedDay)} फाल्गुन - विवरण</h4>
              <button onClick={() => setSelectedDay(null)} className="text-text-gold hover:text-white">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-white/5">
                <span className="text-text-gold">कुल जाप</span>
                <span className="text-2xl font-bold text-primary">{toHindiDigits('5,400')}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/5">
                <span className="text-text-gold">समय व्यतीत</span>
                <span className="text-lg font-bold">{toHindiDigits(45)} मिनट</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-text-gold">एकाग्रता</span>
                <div className="flex gap-1 text-primary">
                  {[1,2,3,4].map(i => <span key={i} className="material-symbols-outlined fill-1">star</span>)}
                  <span className="material-symbols-outlined">star</span>
                </div>
              </div>
            </div>

            <button className="w-full h-14 bg-primary text-background-dark font-bold rounded-xl shadow-lg transition-transform active:scale-95">
              विवरण साझा करें
            </button>
          </div>
        </div>
      )}

      {/* Bottom Padding for scroll */}
      <div className="h-12" />
    </div>
  );
};

export default CalendarScreen;

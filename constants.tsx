
import React from 'react';
import { Mantra, DayStats } from './types';

export const MANTRAS: Mantra[] = [
  { id: 'shivaya', name: 'Om Namah Shivaya', hindiName: 'ॐ नमः शिवाय' },
  { id: 'ram', name: 'Jai Shree Ram', hindiName: 'जय श्री राम' },
  { id: 'ganesh', name: 'Om Gan Ganpataye Namah', hindiName: 'ॐ गं गणपतये नमः' },
  { id: 'gayatri', name: 'Gayatri Mantra', hindiName: 'गायत्री मंत्र' }
];

export const MOCK_HISTORY: DayStats[] = [
  { date: '2024-03-15', tithi: '१५ फाल्गुन', jaapCount: 5400, malas: 50, meditationMinutes: 45, concentration: 4, special: 'purnima' },
  { date: '2024-03-11', tithi: '११ फाल्गुन', jaapCount: 1108, malas: 10, meditationMinutes: 20, concentration: 5 },
  { date: '2024-03-05', tithi: '५ फाल्गुन', jaapCount: 3240, malas: 30, meditationMinutes: 35, concentration: 4, special: 'ekadashi' }
];

export const HINDI_DIGITS = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];

export const toHindiDigits = (num: number | string): string => {
  return num.toString().split('').map(char => {
    const digit = parseInt(char);
    return isNaN(digit) ? char : HINDI_DIGITS[digit];
  }).join('');
};

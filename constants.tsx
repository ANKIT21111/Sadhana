
import { Mantra, DayStats } from './types';

export const THEME = {
  primary: "#ec9213",
  background: "#221a10",
  card: "#332819",
  cardLight: "#3d3221",
  textGold: "#c9b292",
  textWhite: "#ffffff",
  textMuted: "#a08d75",
};

export const MANTRAS: Mantra[] = [
  { id: 'shivaya', name: 'Om Namah Shivaya', hindiName: 'ॐ नमः शिवाय' },
  { id: 'ram', name: 'Jai Shree Ram', hindiName: 'जय श्री राम' },
  { id: 'ganesh', name: 'Om Gan Ganpataye Namah', hindiName: 'ॐ गं गणपतये नमः' },
  { id: 'gayatri', name: 'Gayatri Mantra', hindiName: 'गायत्री मंत्र' }
];

export const HINDI_DIGITS = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];

export const toHindiDigits = (num: number | string): string => {
  return num.toString().split('').map(char => {
    const digit = parseInt(char);
    return isNaN(digit) ? char : HINDI_DIGITS[digit];
  }).join('');
};

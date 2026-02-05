
export enum Screen {
  HOME = 'home',
  JAAP = 'jaap',
  CALENDAR = 'calendar',
  ALARMS = 'alarms'
}

export interface Mantra {
  id: string;
  name: string;
  hindiName: string;
}

export interface DayStats {
  date: string;
  tithi: string;
  jaapCount: number;
  malas: number;
  meditationMinutes: number;
  concentration: number;
  special?: 'ekadashi' | 'purnima' | 'amavasya';
}

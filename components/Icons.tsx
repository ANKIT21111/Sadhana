
import React from 'react';
import { Text } from 'react-native';
import { THEME } from '../constants';

const ICON_MAP: Record<string, string> = {
  home: '🏠',
  prayer_times: '📿',
  calendar_month: '🗓️',
  alarm: '⏰',
  temple_hindu: '🛕',
  sunny: '☀️',
  menu_book: '📖',
  self_improvement: '🧘',
  arrow_back_ios: '⟨',
  settings: '⚙️',
  refresh: '🔄',
  history: '📜',
  play_arrow: '▶️',
  pause: '⏸️',
  add: '＋',
  close: '✕',
  chevron_left: '⟨',
  chevron_right: '⟩',
  star: '⭐',
  notifications: '🔔',
  touch_app: '👆'
};

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  style?: any;
}

export const Icon: React.FC<IconProps> = ({ name, size = 24, color = THEME.textWhite, style }) => (
  <Text style={[{ fontSize: size, color }, style]}>
    {ICON_MAP[name] || '?'}
  </Text>
);

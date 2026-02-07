
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Platform } from 'react-native';
import { Screen } from '../types';
import { THEME } from '../constants';
import { Icon } from './Icons';

interface LayoutProps {
  children: React.ReactNode;
  activeScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeScreen, onNavigate }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {children}
      </View>
      
      {/* Bottom Navigation */}
      <View style={styles.navBar}>
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
      </View>
    </SafeAreaView>
  );
};

const NavButton = ({ icon, label, isActive, onClick, isCenter }: any) => (
  <TouchableOpacity 
    onPress={onClick}
    activeOpacity={0.7}
    style={[styles.navButton, isCenter && isActive && styles.centerActive]}
  >
    {isCenter && isActive && <View style={styles.activeIndicator} />}
    <Icon 
      name={icon} 
      size={24} 
      color={isActive ? THEME.primary : THEME.textGold} 
    />
    <Text style={[styles.navLabel, { color: isActive ? THEME.primary : THEME.textGold }]}>
      {label}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.background,
  },
  content: {
    flex: 1,
  },
  navBar: {
    height: 70,
    flexDirection: 'row',
    backgroundColor: THEME.card,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.05)',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: Platform.OS === 'ios' ? 10 : 0,
  },
  navButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    gap: 4,
  },
  navLabel: {
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  centerActive: {
    transform: [{ scale: 1.1 }],
  },
  activeIndicator: {
    position: 'absolute',
    top: -15,
    width: 30,
    height: 3,
    backgroundColor: THEME.primary,
    borderRadius: 2,
  }
});

export default Layout;

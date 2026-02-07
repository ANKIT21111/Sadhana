
import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Vibration, Platform, SafeAreaView } from 'react-native';
import { THEME, toHindiDigits, MANTRAS } from '../constants';
import { Icon } from '../components/Icons';

const JaapScreen: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [count, setCount] = useState(0);
  const [malas, setMalas] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleTap = useCallback(() => {
    if (isPaused) return;
    
    Vibration.vibrate(25);
    setCount(prev => {
      if (prev >= 107) {
        setMalas(m => m + 1);
        Vibration.vibrate([0, 100, 50, 100]); // Long success vibration
        return 0;
      }
      return prev + 1;
    });
  }, [isPaused]);

  return (
    <SafeAreaView style={styles.container}>
      {/* App Bar */}
      <View style={styles.appBar}>
        <TouchableOpacity onPress={onBack} style={styles.appBarBtn}>
          <Icon name="arrow_back_ios" size={20} />
        </TouchableOpacity>
        <Text style={styles.appBarTitle}>Naam Jaap</Text>
        <TouchableOpacity style={styles.appBarBtn}>
          <Icon name="settings" size={20} />
        </TouchableOpacity>
      </View>

      <View style={styles.main}>
        {/* Counter Display */}
        <View style={styles.counterCircle}>
          <View style={styles.innerCircle}>
            <Text style={styles.countText}>{toHindiDigits(count)}</Text>
            <Text style={styles.countLabel}>COUNTS</Text>
          </View>
        </View>

        <View style={styles.statsContainer}>
          <Text style={styles.statsText}>Malas Completed: {toHindiDigits(malas)}</Text>
          <View style={styles.statsLine} />
        </View>
      </View>

      {/* Tap Area */}
      <View style={styles.footer}>
        <TouchableOpacity 
          activeOpacity={0.8}
          onPress={handleTap}
          style={styles.tapArea}
        >
          <Icon name="touch_app" size={40} color={THEME.primary} />
          <Text style={styles.tapLabel}>TAP TO COUNT</Text>
        </TouchableOpacity>

        <View style={styles.controls}>
          <TouchableOpacity onPress={() => setCount(0)} style={styles.controlBtn}>
            <View style={styles.controlIconBg}><Icon name="refresh" /></View>
            <Text style={styles.controlLabel}>Reset</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => setIsPaused(!isPaused)} 
            style={styles.playBtn}
          >
            <Icon 
              name={isPaused ? "play_arrow" : "pause"} 
              size={36} 
              color={THEME.background} 
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.controlBtn}>
            <View style={styles.controlIconBg}><Icon name="history" /></View>
            <Text style={styles.controlLabel}>History</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.background,
  },
  appBar: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  appBarBtn: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appBarTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: THEME.textWhite,
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterCircle: {
    width: 280,
    height: 280,
    borderRadius: 140,
    borderWidth: 1,
    borderColor: 'rgba(236,146,19,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  innerCircle: {
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: THEME.card,
    borderWidth: 4,
    borderColor: 'rgba(236,146,19,0.05)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  countText: {
    fontSize: 80,
    fontWeight: '800',
    color: THEME.textWhite,
    lineHeight: 80,
  },
  countLabel: {
    fontSize: 16,
    color: THEME.primary,
    fontWeight: '800',
    letterSpacing: 4,
    marginTop: 10,
  },
  statsContainer: {
    alignItems: 'center',
    gap: 8,
  },
  statsText: {
    color: THEME.textGold,
    fontSize: 18,
  },
  statsLine: {
    width: 60,
    height: 4,
    backgroundColor: 'rgba(236,146,19,0.3)',
    borderRadius: 2,
  },
  footer: {
    padding: 24,
    gap: 30,
  },
  tapArea: {
    height: 100,
    backgroundColor: 'rgba(236,146,19,0.05)',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(236,146,19,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tapLabel: {
    color: THEME.primary,
    fontWeight: '900',
    fontSize: 12,
    letterSpacing: 2,
    marginTop: 5,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 20,
  },
  controlBtn: {
    alignItems: 'center',
    gap: 8,
  },
  controlIconBg: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255,255,255,0.05)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlLabel: {
    fontSize: 10,
    color: THEME.textGold,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  playBtn: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: THEME.primary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: THEME.primary,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  }
});

export default JaapScreen;

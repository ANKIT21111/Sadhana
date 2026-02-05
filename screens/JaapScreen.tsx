import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Vibration,
  Platform,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { MANTRAS, toHindiDigits } from '../constants';

const THEME = {
  primary: '#ec9213',
  background: '#0f1115',
  card: '#1a1d23',
  text: '#c19b67',
  white: '#ffffff',
};

const JaapScreen: React.FC = () => {
  const [count, setCount] = useState(0);
  const [malas, setMalas] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedMantra, setSelectedMantra] = useState(MANTRAS[0].id);

  const incrementCount = useCallback(() => {
    if (isPaused) return;

    // Haptic effect
    Vibration.vibrate(20);

    setCount(prev => {
      if (prev >= 108) {
        setMalas(m => m + 1);
        return 1;
      }
      return prev + 1;
    });
  }, [isPaused]);

  return (
    <View style={styles.container}>
      {/* App Bar */}
      <View style={styles.appBar}>
        <TouchableOpacity style={styles.iconButton}>
          <MaterialIcons name="settings" size={24} color={THEME.white} />
        </TouchableOpacity>
        <Text style={styles.appTitle}>नाम जप</Text>
        <TouchableOpacity style={styles.iconButton}>
          <MaterialIcons name="help-outline" size={24} color={THEME.white} />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        {/* Main Counter Display */}
        <View style={styles.counterCircle}>
          <View style={styles.innerCircle}>
            <Text style={styles.countText}>{toHindiDigits(count)}</Text>
            <Text style={styles.countLabel}>जाप संख्या</Text>
          </View>
        </View>

        {/* Stats */}
        <View style={styles.statsContainer}>
          <Text style={styles.statsText}>कुल मालाएं पूर्ण: {toHindiDigits(malas)}</Text>
          <View style={styles.statsUnderline} />
        </View>

        {/* Mantra Selection */}
        <View style={styles.pickerContainer}>
          <Text style={styles.pickerLabel}>मंत्र का चुनाव करें</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={selectedMantra}
              onValueChange={(itemValue) => setSelectedMantra(itemValue)}
              style={styles.picker}
              dropdownIconColor={THEME.primary}
              mode="dropdown"
            >
              {MANTRAS.map(m => (
                <Picker.Item key={m.id} label={m.hindiName} value={m.id} color={Platform.OS === 'ios' ? THEME.white : THEME.text} />
              ))}
            </Picker>
          </View>
        </View>
      </View>

      {/* Tap Trigger Area */}
      <View style={styles.tapAreaContainer}>
        <Pressable
          onPress={incrementCount}
          android_ripple={{ color: 'rgba(236,146,19,0.2)' }}
          style={({ pressed }) => [
            styles.tapButton,
            pressed && styles.tapButtonPressed
          ]}
        >
          <MaterialIcons name="touch-app" size={40} color={THEME.primary} />
          <Text style={styles.tapButtonText}>जाप करने के लिए यहाँ स्पर्श करें</Text>
        </Pressable>
      </View>

      {/* Footer Controls */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => setCount(0)} style={styles.footerButton}>
          <View style={styles.footerIconBg}>
            <MaterialIcons name="refresh" size={24} color={THEME.text} />
          </View>
          <Text style={styles.footerText}>रीसेट</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setIsPaused(!isPaused)}
          style={styles.pauseButton}
        >
          <MaterialIcons
            name={isPaused ? 'play-arrow' : 'pause'}
            size={40}
            color={THEME.background}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton}>
          <View style={styles.footerIconBg}>
            <MaterialIcons name="history" size={24} color={THEME.text} />
          </View>
          <Text style={styles.footerText}>इतिहास</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.background,
  },
  appBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  appTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: THEME.white,
  },
  iconButton: {
    padding: 8,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  counterCircle: {
    width: 280,
    height: 280,
    borderRadius: 140,
    borderWidth: 2,
    borderColor: 'rgba(236,146,19,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  innerCircle: {
    alignItems: 'center',
  },
  countText: {
    fontSize: 80,
    fontWeight: 'bold',
    color: THEME.white,
  },
  countLabel: {
    color: THEME.primary,
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginTop: -10,
  },
  statsContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  statsText: {
    color: THEME.text,
    fontSize: 18,
  },
  statsUnderline: {
    width: 60,
    height: 2,
    backgroundColor: 'rgba(236,146,19,0.4)',
    marginTop: 8,
    borderRadius: 1,
  },
  pickerContainer: {
    width: '100%',
    maxWidth: 300,
  },
  pickerLabel: {
    color: 'rgba(193,155,103,0.6)',
    fontSize: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
    textAlign: 'center',
    marginBottom: 8,
  },
  pickerWrapper: {
    backgroundColor: THEME.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    overflow: 'hidden',
  },
  picker: {
    color: THEME.white,
    height: 56,
  },
  tapAreaContainer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  tapButton: {
    height: 100,
    backgroundColor: 'rgba(236,146,19,0.05)',
    borderWidth: 2,
    borderColor: 'rgba(236,146,19,0.2)',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tapButtonPressed: {
    backgroundColor: 'rgba(236,146,19,0.15)',
    transform: [{ scale: 0.98 }],
  },
  tapButtonText: {
    color: THEME.primary,
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 1,
    marginTop: 4,
  },
  footer: {
    backgroundColor: 'rgba(26,29,35,0.5)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderTopWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerIconBg: {
    padding: 12,
    borderRadius: 100,
    backgroundColor: 'rgba(255,255,255,0.05)',
    marginBottom: 4,
  },
  footerText: {
    color: THEME.text,
    fontSize: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  pauseButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: THEME.primary,
    alignItems: 'center',
    justifyContent: 'center',
    // Shadow for Android
    elevation: 8,
    // Shadow for iOS
    shadowColor: THEME.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
});

export default JaapScreen;

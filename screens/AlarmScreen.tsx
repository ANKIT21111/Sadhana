import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { toHindiDigits } from '../constants';

const THEME = {
  primary: '#ec9213',
  background: '#0f1115',
  card: '#1a1d23',
  text: '#c19b67',
  white: '#ffffff',
};

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
    { id: '1', time: '04:24', label: 'मुहूर्त प्रारंभ', sound: 'शंख', note: '५ मिनट का ध्यान', enabled: true },
    { id: '2', time: '05:00', label: 'नाम जप', sound: 'ओम् मंत्र', enabled: false },
    { id: '3', time: '05:12', label: 'मुहूर्त समाप्ति', sound: 'मंदिर की घंटी', enabled: true },
  ]);

  const toggleAlarm = (id: string) => {
    setAlarms(prev => prev.map(a => a.id === id ? { ...a, enabled: !a.enabled } : a));
  };

  return (
    <View style={styles.container}>
      {/* App Bar */}
      <View style={styles.appBar}>
        <MaterialIcons name="temple-hindu" size={24} color={THEME.primary} />
        <Text style={styles.appTitle}>ब्रह्म मुहूर्त अलार्म</Text>
        <TouchableOpacity style={styles.iconButton}>
          <MaterialIcons name="settings" size={24} color={THEME.white} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Info Box */}
        <View style={styles.infoBox}>
          <View style={styles.infoTitleRow}>
            <MaterialIcons name="auto-awesome" size={20} color={THEME.primary} />
            <Text style={styles.infoTitle}>सटीक गणना (Precision)</Text>
          </View>
          <Text style={styles.infoText}>
            आपकी आध्यात्मिक साधना की अवधि आपके स्थान के सूर्योदय के अनुसार प्रतिदिन स्वचालित रूप से समायोजित की जाती है ताकि साधना का सही मुहूर्त मिल सके।
          </Text>
          <View style={styles.muhuratTable}>
            <View style={styles.muhuratRow}>
              <Text style={styles.muhuratRowLabel}>आज का मुहूर्त</Text>
              <Text style={styles.muhuratRowValue}>{toHindiDigits('4:24')} पूर्वाह्न - {toHindiDigits('5:12')} पूर्वाह्न</Text>
            </View>
            <View style={[styles.muhuratRow, { borderBottomWidth: 0 }]}>
              <Text style={styles.muhuratRowLabel}>कल का मुहूर्त</Text>
              <Text style={styles.muhuratRowValue}>{toHindiDigits('4:25')} पूर्वाह्न - {toHindiDigits('5:13')} पूर्वाह्न</Text>
            </View>
          </View>
        </View>

        {/* Alarms List */}
        <View style={styles.alarmsHeader}>
          <Text style={styles.alarmsHeaderText}>आपके अलार्म</Text>
        </View>
        <View style={styles.alarmsList}>
          {alarms.map(alarm => (
            <View
              key={alarm.id}
              style={[styles.alarmCard, !alarm.enabled && styles.alarmDisabled]}
            >
              <View style={styles.alarmCardHeader}>
                <View style={styles.alarmTimeContainer}>
                  <View style={styles.timeRow}>
                    <Text style={styles.alarmTime}>{toHindiDigits(alarm.time)}</Text>
                    <Text style={styles.alarmPeriod}>{parseInt(alarm.time.split(':')[0]) < 12 ? 'पूर्वाह्न' : 'अपराह्न'}</Text>
                  </View>
                  <Text style={[styles.alarmLabel, alarm.enabled ? styles.alarmLabelActive : styles.alarmLabelInactive]}>
                    {alarm.label}
                  </Text>
                </View>
                <Switch
                  value={alarm.enabled}
                  onValueChange={() => toggleAlarm(alarm.id)}
                  trackColor={{ false: 'rgba(255,255,255,0.1)', true: THEME.primary }}
                  thumbColor={THEME.white}
                />
              </View>

              <View style={styles.alarmMeta}>
                <View style={styles.metaRow}>
                  <MaterialIcons name="music-note" size={18} color={THEME.text} />
                  <Text style={styles.metaText}>ध्वनि: <Text style={styles.metaValue}>{alarm.sound}</Text></Text>
                </View>
                {alarm.note && (
                  <View style={styles.metaRow}>
                    <MaterialIcons name="snooze" size={18} color={THEME.text} />
                    <Text style={styles.metaNote}>"{alarm.note}"</Text>
                  </View>
                )}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* FAB */}
      <TouchableOpacity style={styles.fab}>
        <MaterialIcons name="add" size={24} color={THEME.background} />
        <Text style={styles.fabText}>नया अलार्म जोड़ें</Text>
      </TouchableOpacity>
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
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(236,146,19,0.1)',
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
  scrollContent: {
    padding: 24,
    paddingBottom: 120, // To make space for the FAB
  },
  infoBox: {
    marginBottom: 32,
  },
  infoTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  infoTitle: {
    color: THEME.primary,
    fontWeight: 'bold',
    fontSize: 18,
  },
  infoText: {
    color: THEME.text,
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 16,
  },
  muhuratTable: {
    backgroundColor: 'rgba(236,146,19,0.1)',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(236,146,19,0.2)',
  },
  muhuratRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(236,146,19,0.1)',
  },
  muhuratRowLabel: {
    color: THEME.primary,
    fontWeight: 'bold',
    fontSize: 14,
  },
  muhuratRowValue: {
    color: THEME.white,
    fontWeight: 'bold',
    fontSize: 14,
  },
  alarmsHeader: {
    marginBottom: 16,
  },
  alarmsHeaderText: {
    color: THEME.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  alarmsList: {
    gap: 16,
  },
  alarmCard: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  alarmDisabled: {
    opacity: 0.4,
  },
  alarmCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  alarmTimeContainer: {
    gap: 4,
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 4,
  },
  alarmTime: {
    color: THEME.white,
    fontSize: 40,
    fontWeight: '300',
  },
  alarmPeriod: {
    color: 'rgba(193,155,103,0.5)',
    fontSize: 10,
    fontWeight: 'bold',
  },
  alarmLabel: {
    fontSize: 10,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  alarmLabelActive: {
    color: THEME.primary,
  },
  alarmLabelInactive: {
    color: THEME.text,
  },
  alarmMeta: {
    gap: 12,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  metaText: {
    color: THEME.text,
    fontSize: 14,
  },
  metaValue: {
    color: THEME.white,
  },
  metaNote: {
    color: THEME.text,
    fontSize: 14,
    fontStyle: 'italic',
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    alignSelf: 'center',
    backgroundColor: THEME.primary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 100,
    elevation: 8, // Android shadow
    shadowColor: THEME.primary, // iOS shadow
    shadowOffset: { width: 0, height: 4 }, // iOS shadow
    shadowOpacity: 0.3, // iOS shadow
    shadowRadius: 8, // iOS shadow
  },
  fabText: {
    color: THEME.background,
    fontWeight: '900',
    letterSpacing: 1,
    marginLeft: 12,
  },
});

export default AlarmScreen;


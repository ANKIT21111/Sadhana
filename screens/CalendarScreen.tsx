import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { toHindiDigits } from '../constants';

const { width } = Dimensions.get('window');

const THEME = {
  primary: '#ec9213',
  background: '#0f1115',
  card: '#1a1d23',
  text: '#c19b67',
  white: '#ffffff',
};

const CalendarScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState('tithi');
  const [selectedDay, setSelectedDay] = useState<number | null>(11);

  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const emptyPre = Array.from({ length: 3 }, (_, i) => i);

  return (
    <View style={styles.container}>
      {/* App Bar */}
      <View style={styles.appBar}>
        <MaterialIcons name="calendar-month" size={24} color={THEME.primary} />
        <Text style={styles.appTitle}>विक्रम संवत कैलेंडर</Text>
        <TouchableOpacity style={styles.iconButton}>
          <MaterialIcons name="notifications" size={24} color={THEME.white} />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        {['तिथि', 'साधना', 'आंकड़े'].map((tab) => {
          const tabId = tab === 'तिथि' ? 'tithi' : tab;
          const isActive = activeTab === tabId;
          return (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tabId)}
              style={styles.tab}
            >
              <Text style={[styles.tabText, isActive && styles.tabTextActive]}>{tab}</Text>
              {isActive && <View style={styles.tabIndicator} />}
            </TouchableOpacity>
          );
        })}
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Month Picker */}
        <View style={styles.monthPicker}>
          <TouchableOpacity>
            <MaterialIcons name="chevron-left" size={32} color={THEME.primary} />
          </TouchableOpacity>
          <Text style={styles.monthTitle}>फाल्गुन २०८०</Text>
          <TouchableOpacity>
            <MaterialIcons name="chevron-right" size={32} color={THEME.primary} />
          </TouchableOpacity>
        </View>

        {/* Calendar Grid */}
        <View style={styles.calendarContainer}>
          <View style={styles.weekHeader}>
            {['रवि', 'सोम', 'मंगल', 'बुध', 'गुरु', 'शुक्र', 'शनि'].map(d => (
              <Text key={d} style={styles.weekDayText}>{d}</Text>
            ))}
          </View>

          <View style={styles.daysGrid}>
            {emptyPre.map(i => <View key={`empty-${i}`} style={styles.dayCell} />)}
            {days.map(day => {
              const isSpecial = [5, 26].includes(day);
              const isPurnima = day === 15;
              const isAmavasya = day === 30;
              const isSelected = selectedDay === day;
              const hasJaap = day % 3 === 0;

              return (
                <TouchableOpacity
                  key={day}
                  onPress={() => setSelectedDay(day)}
                  style={styles.dayCell}
                >
                  <View style={[
                    styles.dayNumberBg,
                    isSelected && styles.daySelected,
                    isPurnima && styles.dayPurnima,
                    isAmavasya && styles.dayAmavasya,
                    isSpecial && styles.daySpecial,
                  ]}>
                    <Text style={[
                      styles.dayText,
                      isSelected && styles.dayTextSelected,
                    ]}>
                      {toHindiDigits(day)}
                    </Text>
                  </View>
                  <View style={styles.dayLabelContainer}>
                    {isSpecial && <Text style={styles.dayLabel}>एकादशी</Text>}
                    {isPurnima && <Text style={styles.dayLabelGold}>पूर्णिमा</Text>}
                    {isAmavasya && <Text style={styles.dayLabelGold}>अमावस्या</Text>}
                  </View>
                  {hasJaap && !isSpecial && !isPurnima && !isAmavasya && (
                    <MaterialIcons name="self-improvement" size={12} color={THEME.primary} style={styles.jaapIcon} />
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Stats Card Overlay (Simulated with View in scroll) */}
        {selectedDay && (
          <View style={styles.statsCard}>
            <View style={styles.statsCardHeader}>
              <Text style={styles.statsCardTitle}>{toHindiDigits(selectedDay)} फाल्गुन - विवरण</Text>
              <TouchableOpacity onPress={() => setSelectedDay(null)}>
                <MaterialIcons name="close" size={24} color={THEME.text} />
              </TouchableOpacity>
            </View>

            <View style={styles.statsList}>
              <View style={styles.statsRow}>
                <Text style={styles.statsLabel}>कुल जाप</Text>
                <Text style={styles.statsValueMain}>{toHindiDigits('5,400')}</Text>
              </View>
              <View style={styles.statsRow}>
                <Text style={styles.statsLabel}>समय व्यतीत</Text>
                <Text style={styles.statsValue}>{toHindiDigits(45)} मिनट</Text>
              </View>
              <View style={[styles.statsRow, { borderBottomWidth: 0 }]}>
                <Text style={styles.statsLabel}>एकाग्रता</Text>
                <View style={styles.rating}>
                  {[1, 2, 3, 4].map(i => <MaterialIcons key={i} name="star" size={20} color={THEME.primary} />)}
                  <MaterialIcons name="star-outline" size={20} color={THEME.primary} />
                </View>
              </View>
            </View>

            <TouchableOpacity style={styles.shareButton}>
              <Text style={styles.shareButtonText}>विवरण साझा करें</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
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
  tabs: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
    position: 'relative',
  },
  tabText: {
    color: THEME.text,
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  tabTextActive: {
    color: THEME.white,
  },
  tabIndicator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 3,
    backgroundColor: THEME.primary,
    borderRadius: 1.5,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  monthPicker: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 24,
  },
  monthTitle: {
    color: THEME.primary,
    fontSize: 24,
    fontWeight: 'bold',
  },
  calendarContainer: {
    paddingHorizontal: 24,
  },
  weekHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
    paddingBottom: 16,
    marginBottom: 16,
  },
  weekDayText: {
    flex: 1,
    color: 'rgba(193,155,103,0.6)',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  daysGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dayCell: {
    width: (width - 48) / 7,
    height: 80,
    alignItems: 'center',
    marginBottom: 12,
  },
  dayNumberBg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayText: {
    color: THEME.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  daySelected: {
    backgroundColor: THEME.primary,
    elevation: 8,
    shadowColor: THEME.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  dayTextSelected: {
    color: THEME.background,
  },
  dayPurnima: {
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  dayAmavasya: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  daySpecial: {
    borderWidth: 2,
    borderColor: THEME.primary,
  },
  dayLabelContainer: {
    marginTop: 4,
    height: 12,
  },
  dayLabel: {
    color: THEME.primary,
    fontSize: 8,
    fontWeight: 'bold',
  },
  dayLabelGold: {
    color: THEME.text,
    fontSize: 8,
    fontWeight: 'bold',
  },
  jaapIcon: {
    marginTop: 4,
  },
  statsCard: {
    backgroundColor: '#2d2419',
    margin: 24,
    padding: 24,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: 'rgba(236,146,19,0.2)',
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
  },
  statsCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  statsCardTitle: {
    color: THEME.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  statsList: {
    marginBottom: 24,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.05)',
  },
  statsLabel: {
    color: THEME.text,
    fontSize: 14,
  },
  statsValue: {
    color: THEME.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  statsValueMain: {
    color: THEME.primary,
    fontSize: 24,
    fontWeight: 'bold',
  },
  rating: {
    flexDirection: 'row',
    gap: 4,
  },
  shareButton: {
    backgroundColor: THEME.primary,
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  shareButtonText: {
    color: THEME.background,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CalendarScreen;

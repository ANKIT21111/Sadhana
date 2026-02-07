
import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, Switch } from 'react-native';
import { THEME, toHindiDigits } from '../constants';
import { Icon } from '../components/Icons';

const HomeScreen: React.FC<{ onJaapStart: () => void }> = ({ onJaapStart }) => {
  const [alarmEnabled, setAlarmEnabled] = useState(true);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      {/* Header */}
      <View style={styles.header}>
        <Icon name="temple_hindu" size={40} color={THEME.primary} />
        <Text style={styles.subtitle}>आज का पंचांग</Text>
        <Text style={styles.title}>
          {toHindiDigits(14)} कार्तिक, {toHindiDigits(2080)}
        </Text>
      </View>

      {/* Daily Progress */}
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>दैनिक साधना प्रगति</Text>
            <Text style={styles.percentage}>{toHindiDigits(91)}%</Text>
          </View>
          <View style={styles.progressBarBg}>
            <View style={[styles.progressBarFill, { width: '91%' }]} />
          </View>
          <Text style={styles.cardFooter}>सिद्धि के करीब: {toHindiDigits(992)} मंत्र शेष</Text>
        </View>
      </View>

      {/* Naam Jaap CTA */}
      <TouchableOpacity style={styles.jaapCard} onPress={onJaapStart} activeOpacity={0.9}>
        <Image 
          source={{ uri: 'https://picsum.photos/seed/mala/600/400' }} 
          style={styles.jaapImage}
        />
        <View style={styles.jaapOverlay}>
          <Text style={styles.jaapTitle}>नाम जप (Naam Jaap)</Text>
          <Text style={styles.jaapStats}>आज का जाप: {toHindiDigits('10,008')}</Text>
          <View style={styles.jaapBtn}>
            <Icon name="play_arrow" size={20} color={THEME.background} />
            <Text style={styles.jaapBtnText}>जाप शुरू करें</Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* Brahma Muhurat */}
      <View style={styles.muhuratContainer}>
        <Text style={styles.sectionLabel}>ब्रह्म मुहूर्त (Brahma Muhurat)</Text>
        <View style={styles.muhuratCard}>
          <View style={styles.muhuratInfo}>
            <View style={styles.muhuratIcon}>
              <Icon name="sunny" size={28} color={THEME.primary} />
            </View>
            <View>
              <Text style={styles.muhuratTime}>{toHindiDigits('04:22')} AM</Text>
              <Text style={styles.muhuratLabel}>अगला मुहूर्त अलार्म</Text>
            </View>
          </View>
          <Switch 
            value={alarmEnabled} 
            onValueChange={setAlarmEnabled}
            trackColor={{ false: '#555', true: THEME.primary }}
            thumbColor={THEME.textWhite}
          />
        </View>
      </View>

      {/* Grid */}
      <View style={styles.grid}>
        <TouchableOpacity style={styles.gridItem}>
          <Icon name="menu_book" size={32} color={THEME.primary} />
          <Text style={styles.gridLabel}>भगवत गीता</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <Icon name="self_improvement" size={32} color={THEME.primary} />
          <Text style={styles.gridLabel}>ध्यान</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    padding: 24,
    gap: 8,
  },
  subtitle: {
    color: THEME.textGold,
    fontSize: 16,
    fontWeight: '500',
  },
  title: {
    color: THEME.textWhite,
    fontSize: 32,
    fontWeight: '800',
  },
  cardContainer: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  card: {
    backgroundColor: THEME.card,
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  cardTitle: {
    color: THEME.textWhite,
    fontWeight: '700',
    fontSize: 16,
  },
  percentage: {
    color: THEME.primary,
    fontWeight: '800',
    fontSize: 18,
  },
  progressBarBg: {
    height: 8,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 10,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: THEME.primary,
  },
  cardFooter: {
    color: THEME.textGold,
    fontSize: 12,
  },
  jaapCard: {
    marginHorizontal: 20,
    height: 220,
    borderRadius: 30,
    overflow: 'hidden',
    marginBottom: 24,
    backgroundColor: THEME.card,
  },
  jaapImage: {
    width: '100%',
    height: '100%',
    opacity: 0.5,
  },
  jaapOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: 'rgba(34,26,16,0.6)',
  },
  jaapTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: THEME.textWhite,
  },
  jaapStats: {
    fontSize: 14,
    color: THEME.textGold,
    marginBottom: 15,
  },
  jaapBtn: {
    backgroundColor: THEME.primary,
    height: 50,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  jaapBtnText: {
    color: THEME.background,
    fontWeight: '800',
    fontSize: 16,
  },
  muhuratContainer: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionLabel: {
    color: THEME.textGold,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 12,
  },
  muhuratCard: {
    backgroundColor: THEME.card,
    borderRadius: 20,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  muhuratInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  muhuratIcon: {
    width: 50,
    height: 50,
    backgroundColor: 'rgba(236,146,19,0.15)',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  muhuratTime: {
    fontSize: 20,
    fontWeight: '800',
    color: THEME.textWhite,
  },
  muhuratLabel: {
    fontSize: 12,
    color: THEME.textGold,
  },
  grid: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 15,
  },
  gridItem: {
    flex: 1,
    backgroundColor: THEME.card,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    gap: 10,
  },
  gridLabel: {
    fontWeight: '700',
    color: THEME.textWhite,
  }
});

export default HomeScreen;

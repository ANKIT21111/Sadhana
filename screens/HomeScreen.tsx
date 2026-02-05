import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Switch,
  Dimensions,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import { toHindiDigits } from '../constants';

const { width } = Dimensions.get('window');

const THEME = {
  primary: '#ec9213',
  background: '#0f1115',
  card: '#1a1d23',
  text: '#c19b67',
  white: '#ffffff',
};

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [alarmEnabled, setAlarmEnabled] = useState(true);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      {/* Header */}
      <View style={styles.header}>
        <MaterialIcons name="temple-hindu" size={40} color={THEME.primary} style={styles.headerIcon} />
        <Text style={styles.headerTitle}>आज का पंचांग</Text>
        <Text style={styles.headerDate}>
          {toHindiDigits(14)} कार्तिक, {toHindiDigits(2080)}
        </Text>
      </View>

      {/* Daily Progress */}
      <View style={styles.card}>
        <View style={styles.progressHeader}>
          <Text style={styles.cardTitle}>दैनिक साधना प्रगति</Text>
          <Text style={styles.progressPercent}>{toHindiDigits(91)}%</Text>
        </View>
        <View style={styles.progressBarBg}>
          <View style={[styles.progressBarFill, { width: '91%' }]} />
        </View>
        <Text style={styles.progressNote}>सिद्धि के करीब: {toHindiDigits(992)} मंत्र शेष</Text>
      </View>

      {/* Naam Jaap Card */}
      <TouchableOpacity
        style={styles.jaapCard}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('जप')}
      >
        <View style={styles.jaapImageContainer}>
          <Image
            source={{ uri: 'https://picsum.photos/seed/mala/600/400' }}
            style={styles.jaapImage}
          />
          <LinearGradient
            colors={['transparent', THEME.card]}
            style={styles.gradient}
          />
          <MaterialIcons name="auto-awesome" size={30} color={THEME.primary} style={styles.jaapPulseIcon} />
        </View>
        <View style={styles.jaapCardContent}>
          <Text style={styles.jaapTitle}>नाम जप</Text>
          <Text style={styles.jaapStats}>आज का जाप: {toHindiDigits('10,008')}</Text>
          <Text style={styles.jaapNote}>लक्ष्य: {toHindiDigits('11,000')} | निरंतरता: {toHindiDigits(15)} दिन 🔥</Text>
          <View style={styles.jaapButton}>
            <MaterialIcons name="radio-button-checked" size={20} color={THEME.background} />
            <Text style={styles.jaapButtonText}>जाप शुरू करें</Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* Brahma Muhurat */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>ब्रह्म मुहूर्त (Brahma Muhurat)</Text>
      </View>
      <View style={styles.muhuratCard}>
        <View style={styles.muhuratLeft}>
          <View style={styles.muhuratIconBg}>
            <MaterialIcons name="wb-sunny" size={30} color={THEME.primary} />
          </View>
          <View>
            <Text style={styles.muhuratTime}>{toHindiDigits('04:22')} पूर्वाह्न</Text>
            <Text style={styles.muhuratLabel}>अगला मुहूर्त अलार्म</Text>
          </View>
        </View>
        <Switch
          value={alarmEnabled}
          onValueChange={setAlarmEnabled}
          trackColor={{ false: 'rgba(255,255,255,0.1)', true: THEME.primary }}
          thumbColor={THEME.white}
        />
      </View>

      {/* Extra Grid */}
      <View style={styles.grid}>
        <View style={styles.gridItem}>
          <MaterialIcons name="menu-book" size={40} color={THEME.primary} />
          <Text style={styles.gridText}>भगवत गीता</Text>
        </View>
        <View style={styles.gridItem}>
          <MaterialIcons name="self-improvement" size={40} color={THEME.primary} />
          <Text style={styles.gridText}>ध्यान</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.background,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    padding: 24,
    alignItems: 'center',
  },
  headerIcon: {
    marginBottom: 16,
  },
  headerTitle: {
    color: THEME.text,
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 1,
  },
  headerDate: {
    color: THEME.white,
    fontSize: 32,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: THEME.card,
    marginHorizontal: 24,
    padding: 20,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
    marginBottom: 24,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardTitle: {
    color: THEME.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  progressPercent: {
    color: THEME.primary,
    fontSize: 18,
    fontWeight: 'bold',
  },
  progressBarBg: {
    height: 12,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 6,
    overflow: 'hidden',
    marginBottom: 12,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: THEME.primary,
    borderRadius: 6,
  },
  progressNote: {
    color: THEME.text,
    fontSize: 12,
  },
  jaapCard: {
    backgroundColor: THEME.card,
    marginHorizontal: 24,
    borderRadius: 32,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    marginBottom: 24,
  },
  jaapImageContainer: {
    height: 200,
    position: 'relative',
  },
  jaapImage: {
    width: '100%',
    height: '100%',
    opacity: 0.8,
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
  },
  jaapPulseIcon: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
  jaapCardContent: {
    padding: 20,
  },
  jaapTitle: {
    color: THEME.white,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  jaapStats: {
    color: THEME.text,
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  jaapNote: {
    color: 'rgba(193,155,103,0.6)',
    fontSize: 12,
    marginBottom: 16,
  },
  jaapButton: {
    backgroundColor: THEME.primary,
    height: 56,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  jaapButtonText: {
    color: THEME.background,
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionHeader: {
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  sectionHeaderText: {
    color: THEME.text,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontSize: 12,
  },
  muhuratCard: {
    backgroundColor: THEME.card,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  muhuratLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  muhuratIconBg: {
    width: 56,
    height: 56,
    backgroundColor: 'rgba(236,146,19,0.2)',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  muhuratTime: {
    color: THEME.white,
    fontSize: 24,
    fontWeight: 'bold',
  },
  muhuratLabel: {
    color: THEME.text,
    fontSize: 12,
  },
  grid: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    gap: 16,
    marginTop: 24,
  },
  gridItem: {
    flex: 1,
    backgroundColor: THEME.card,
    padding: 24,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
    alignItems: 'center',
    gap: 12,
  },
  gridText: {
    color: THEME.white,
    fontWeight: 'bold',
  },
});

export default HomeScreen;


import React, { useState } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { Screen } from './types';
import Layout from './components/Layout';
import HomeScreen from './screens/HomeScreen';
import JaapScreen from './screens/JaapScreen';
import CalendarScreen from './screens/CalendarScreen';
import AlarmScreen from './screens/AlarmScreen';
import { THEME } from './constants';

const App: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<Screen>(Screen.HOME);

  const handleStartJaap = () => setActiveScreen(Screen.JAAP);
  const handleBackFromJaap = () => setActiveScreen(Screen.HOME);

  const renderScreen = () => {
    switch (activeScreen) {
      case Screen.HOME:
        return <HomeScreen onJaapStart={handleStartJaap} />;
      case Screen.JAAP:
        return <JaapScreen onBack={handleBackFromJaap} />;
      case Screen.CALENDAR:
        // Basic placeholder for brevity, usually matches HomeScreen structure
        return <View style={styles.center}><HomeScreen onJaapStart={handleStartJaap} /></View>;
      case Screen.ALARMS:
        return <View style={styles.center}><HomeScreen onJaapStart={handleStartJaap} /></View>;
      default:
        return <HomeScreen onJaapStart={handleStartJaap} />;
    }
  };

  // Full-screen takeover for Jaap
  if (activeScreen === Screen.JAAP) {
    return (
      <View style={styles.root}>
        <StatusBar barStyle="light-content" />
        <JaapScreen onBack={handleBackFromJaap} />
      </View>
    );
  }

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <Layout activeScreen={activeScreen} onNavigate={setActiveScreen}>
        {renderScreen()}
      </Layout>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: THEME.background,
  },
  center: {
    flex: 1,
  }
});

export default App;

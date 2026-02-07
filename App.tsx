
import React, { useState } from 'react';
import { Screen } from './types';
import Layout from './components/Layout';
import HomeScreen from './screens/HomeScreen';
import JaapScreen from './screens/JaapScreen';
import CalendarScreen from './screens/CalendarScreen';
import AlarmScreen from './screens/AlarmScreen';

const App: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<Screen>(Screen.HOME);

  // Navigate to Jaap from Home special button
  const handleStartJaap = () => setActiveScreen(Screen.JAAP);
  const handleBackFromJaap = () => setActiveScreen(Screen.HOME);

  const renderScreen = () => {
    switch (activeScreen) {
      case Screen.HOME:
        return <HomeScreen onJaapStart={handleStartJaap} />;
      case Screen.JAAP:
        return <JaapScreen onBack={handleBackFromJaap} />;
      case Screen.CALENDAR:
        return <CalendarScreen />;
      case Screen.ALARMS:
        return <AlarmScreen />;
      default:
        return <HomeScreen onJaapStart={handleStartJaap} />;
    }
  };

  // Special full-screen handling for Jaap if we wanted, but Layout works too
  if (activeScreen === Screen.JAAP) {
    return (
      <div className="flex flex-col h-screen w-full max-w-md mx-auto bg-background-dark overflow-hidden shadow-2xl">
        <JaapScreen onBack={handleBackFromJaap} />
      </div>
    );
  }

  return (
    <Layout activeScreen={activeScreen} onNavigate={setActiveScreen}>
      {renderScreen()}
    </Layout>
  );
};

export default App;

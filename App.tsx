import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from './screens/HomeScreen';
import JaapScreen from './screens/JaapScreen';
import CalendarScreen from './screens/CalendarScreen';
import AlarmScreen from './screens/AlarmScreen';

const Tab = createBottomTabNavigator();

const THEME = {
  primary: '#ec9213',
  background: '#0f1115',
  card: '#1a1d23',
  text: '#c19b67',
  white: '#ffffff',
};

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {
              backgroundColor: THEME.card,
              borderTopWidth: 1,
              borderTopColor: 'rgba(255,255,255,0.05)',
              height: 70,
              paddingBottom: 10,
              paddingTop: 10,
            },
            tabBarActiveTintColor: THEME.primary,
            tabBarInactiveTintColor: THEME.text,
            tabBarIcon: ({ color, size }) => {
              let iconName = 'home';
              if (route.name === 'जप') iconName = 'prayer-times'; // Need to map correctly
              else if (route.name === 'कैलेंडर') iconName = 'calendar-month';
              else if (route.name === 'मुख्य') iconName = 'home';
              else if (route.name === 'अलार्म') iconName = 'alarm';

              // Mapping material symbols to MaterialIcons names
              const iconMap: Record<string, string> = {
                'prayer-times': 'self-improvement',
                'calendar-month': 'calendar-today',
                'home': 'home',
                'alarm': 'alarm',
              };

              return <MaterialIcons name={iconMap[iconName] || 'home'} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="जप" component={JaapScreen} />
          <Tab.Screen name="कैलेंडर" component={CalendarScreen} />
          <Tab.Screen name="मुख्य" component={HomeScreen} />
          <Tab.Screen name="अलार्म" component={AlarmScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

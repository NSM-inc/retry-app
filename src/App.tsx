import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import * as Updates from 'expo-updates';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HomeStack, SettingsScreen } from 'screens';

const Tab = createBottomTabNavigator();

function App() {
  useEffect(() => {
    async function checkUpdate() {
      const update = await Updates.checkForUpdateAsync();
      if (update?.isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    }

    checkUpdate();
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="HomeStack" options={{ title: '홈' }} component={HomeStack} />
          <Tab.Screen
            name="SettingsScreen"
            options={{ title: '설정' }}
            component={SettingsScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default registerRootComponent(App);

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'components/atoms';
import { TabBarIcon } from 'components/molecules';
import { registerRootComponent } from 'expo';
import * as Updates from 'expo-updates';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { COLOR } from 'resources/constants';
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
        <Tab.Navigator
          screenOptions={({ route }) => {
            const style = {
              iconBgColor: route.name === 'HomeStack' ? COLOR.RED_PC : COLOR.YELLOW_PC,
              tabBarBgColor: route.name === 'HomeStack' ? COLOR.RED_PCT : COLOR.YELLOW_PCT,
            };

            return {
              tabBarIcon: ({ focused }) => {
                return (
                  <TabBarIcon
                    routeName={route.name}
                    backgroundColor={style.iconBgColor}
                    focused={focused}
                  />
                );
              },
              tabBarStyle: {
                backgroundColor: `${style.tabBarBgColor}`,
              },
              tabBarActiveTintColor: `${COLOR.MAGNET}`,
              tabBarInactiveTintColor: `${COLOR.MAGNET}`,
            };
          }}>
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

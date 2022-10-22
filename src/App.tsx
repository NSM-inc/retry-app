import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import * as Updates from 'expo-updates';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as pkg from '../package.json';

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
    <View style={styles.container}>
      <Text>안녕</Text>
      <Text>안녕</Text>
      <Text>{pkg.version}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default registerRootComponent(App);

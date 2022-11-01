import { Button, Text, View } from 'components/atoms';
import TextInput from 'components/atoms/TextInput';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import * as Updates from 'expo-updates';
import React, { useEffect } from 'react';
import { COLOR } from 'resources/constants';

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
    <View flex={1} backgroundColor="#fff" alignItems="center" justifyContent="center">
      <Text color={COLOR.BLUE} fontSize="48px">
        {pkg.version}
      </Text>
      <StatusBar style="auto" />
      <View flexDirection="row">
        <Button
          designType="yellow"
          sizeType="large"
          title="판매"
          width="96px"
          onPress={() => {
            alert('click');
          }}
        />
        <Button
          designType="yellowReverse"
          sizeType="large"
          title="구매"
          onPress={() => {
            alert('click');
          }}
        />
      </View>
      <TextInput designType="default" />
    </View>
  );
}

export default registerRootComponent(App);

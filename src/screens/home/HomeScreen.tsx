import { Button, SafeView, View } from 'components/atoms';
import { OutLineTextInput } from 'components/molecules';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { COLOR } from 'resources/constants';

export default function Home() {
  const [color, setColor] = useState(COLOR.YELLOW_OPC);

  return (
    <SafeView height="100%" justifyContent="center" alignItems="center">
      <StatusBar style="light" backgroundColor={color} />
      <View>
        <Button
          designType="yellow"
          sizeType="large"
          title="노란색"
          width="96px"
          marginBottom="12px"
          onPress={() => {
            setColor(COLOR.YELLOW_PC);
            alert('click');
          }}
        />
        <Button
          designType="yellowReverse"
          sizeType="large"
          title="갈색"
          onPress={() => {
            setColor(COLOR.YELLOW_OPC);
            alert('click');
          }}
        />
      </View>
      <View width="100%" padding={20}>
        <OutLineTextInput label="전화번호" />
      </View>
    </SafeView>
  );
}

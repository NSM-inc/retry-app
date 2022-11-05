import { Button, SafeView, View } from 'components/atoms';
import Tag from 'components/molecules';
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
          width="96px"
          marginBottom="12px"
          onPress={() => {
            setColor(COLOR.YELLOW_PC);
            alert('click');
          }}>
          노란색
        </Button>
        <Button
          designType="yellowReverse"
          sizeType="large"
          onPress={() => {
            setColor(COLOR.YELLOW_OPC);
            alert('click');
          }}>
          갈색
        </Button>
      </View>
      <View marginTop="12px" flexDirection="row">
        <Tag isDisable={false} marginRight="10px">
          태그
        </Tag>
        <Tag isDisable>태그</Tag>
      </View>
    </SafeView>
  );
}

import View from 'components/atoms/View';
import React from 'react';
import { View as RNView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LayoutProps, SpaceProps, ColorProps, FlexboxProps } from 'styled-system';

const SafeView = (
  props: LayoutProps & SpaceProps & ColorProps & FlexboxProps & typeof RNView['prototype']['props']
) => {
  return (
    <SafeAreaView style={{ backgroundColor: String(props?.backgroundColor ?? 'white') }}>
      <View {...props}>{props?.children}</View>
    </SafeAreaView>
  );
};

export default SafeView;

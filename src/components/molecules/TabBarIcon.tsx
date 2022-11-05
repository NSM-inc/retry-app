import { Text, View } from 'components/atoms';
import { useCallback } from 'react';

interface TabBarIconProps {
  backgroundColor?: string;
  routeName: string;
  focused: boolean;
}

const TabBarIcon = ({ backgroundColor, routeName, focused }: TabBarIconProps) => {
  return (
    <View
      width="48px"
      height="24px"
      alignItems="center"
      justifyContent="center"
      backgroundColor={focused ? backgroundColor : ''}
      borderRadius="14px">
      <Text>{routeName === 'HomeStack' ? '1' : '2'}</Text>
    </View>
  );
};

export default TabBarIcon;

import { SafeView, Text } from 'components/atoms';
import React from 'react';
import { COLOR } from 'resources/constants';

import * as pkg from '../../../package.json';

export default function SettingsScreen() {
  return (
    <SafeView height="100%" justifyContent="center" alignItems="center">
      <Text color={COLOR.BLUE} fontSize="48px">
        {pkg.version}
      </Text>
    </SafeView>
  );
}

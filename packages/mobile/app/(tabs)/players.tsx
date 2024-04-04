import React from 'react';
import { SafeAreaView } from 'react-native';

import { AvailableGolfersList } from 'src/team-page/components/available-golfers';

export default function TabTwoScreen() {
  return (
    <SafeAreaView>
      <AvailableGolfersList />
    </SafeAreaView>
  );
}

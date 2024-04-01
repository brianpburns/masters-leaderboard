import React from 'react';
import { ScrollView } from 'react-native';

import { AvailableGolfersList } from 'src/team-page/components/available-golfers';

export default function TabTwoScreen() {
  return (
    <ScrollView>
      {/* <HeroImage /> */}
      <AvailableGolfersList />
    </ScrollView>
  );
}

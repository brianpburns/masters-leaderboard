import React from 'react';
import { ScrollView } from 'react-native';

import { HeroImage } from 'src/shared/components/hero-image';
import Leaderboard from '../../components/edit-screen';

export default function TabTwoScreen() {
  return (
    <ScrollView>
      <HeroImage />
      <Leaderboard path="app/tabs/two.tsx" />
    </ScrollView>
  );
}

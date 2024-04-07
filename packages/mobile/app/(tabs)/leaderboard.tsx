import React from 'react';
import { ScrollView } from 'react-native';

import { Leaderboard } from 'src/leaderboard/components/leaderboard';
import { HeroImage } from 'src/shared/components/hero-image';

export default function LeaderboardScreen() {
  return (
    <ScrollView>
      <HeroImage />
      <Leaderboard />
    </ScrollView>
  );
}

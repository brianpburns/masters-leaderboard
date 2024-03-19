import React from 'react';
import { ScrollView } from 'react-native';
import { HeroImage } from 'src/shared/hero-image';
import { TeamPage } from '../../components/team';

export const mastersLogoSrc =
  'http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/augusta-masters-2019/d05d1861-masters-logo-masters-gimp_0ds03p0dq03p000000001.png';

export default function TabOneScreen() {
  return (
    <ScrollView>
      <HeroImage />
      <TeamPage />
    </ScrollView>
  );
}

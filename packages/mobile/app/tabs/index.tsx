import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Login } from 'src/login/components/login';
import { selectAuthToken } from 'src/store';
import { TeamPage } from '../../src/team-page';

export const mastersLogoSrc =
  'http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/augusta-masters-2019/d05d1861-masters-logo-masters-gimp_0ds03p0dq03p000000001.png';

export default function TabOneScreen() {
  const authToken = useSelector(selectAuthToken);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>{authToken ? <TeamPage /> : <Login />}</View>
    </SafeAreaView>
  );
}

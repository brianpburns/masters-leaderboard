import { Redirect, Tabs } from 'expo-router';
import React, { useCallback, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { useFocusEffect } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { useGetAppConfig } from 'src/api/hooks/use-get-app-config';
import { useGetTeam } from 'src/api/hooks/use-get-team';
import { useInitializeState } from 'src/data/hooks/use-initialize-state';
import { ProfileMenu } from 'src/header/profile-menu';
import { selectAuthToken } from 'src/store';
import { colors } from '../../../constants/color';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  useInitializeState();
  const authToken = useSelector(selectAuthToken);
  const loadConfig = useGetAppConfig();
  const { fetchTeam } = useGetTeam();

  useFocusEffect(
    useCallback(() => {
      loadConfig();
      console.log('useFocusEffect');
    }, [loadConfig]),
  );

  useEffect(() => {
    fetchTeam();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!authToken) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors[colorScheme ?? 'light'].tint,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Team',
          tabBarIcon: ({ color }) => <AntDesignIcons name="team" color={color} size={25} />,
          headerRight: () => <ProfileMenu />,
        }}
      />
      <Tabs.Screen
        name="players"
        options={{
          title: 'Players',
          tabBarIcon: ({ color }) => <Ionicons name="body" color={color} size={25} />,
          headerRight: () => <ProfileMenu />,
        }}
      />
      <Tabs.Screen
        name="leaderboard"
        options={{
          title: 'Leaderboard',
          tabBarIcon: ({ color }) => <MaterialIcons name="leaderboard" size={25} color={color} />,
          headerRight: () => <ProfileMenu />,
        }}
      />
    </Tabs>
  );
}

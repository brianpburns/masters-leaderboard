import FontAwesome from '@expo/vector-icons/FontAwesome';
import React, { useState } from 'react';
import { Text, useColorScheme } from 'react-native';
import { colors } from '../../constants/colors';

export const ProfileMenu = () => {
  const colorScheme = useColorScheme();
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <>
      <FontAwesome
        name="info-circle"
        size={25}
        color={colors[colorScheme ?? 'light'].text}
        style={{ marginRight: 15, opacity: profileOpen ? 0.5 : 1 }}
        onPress={() => setProfileOpen(true)}
        onPressOut={() => setProfileOpen(false)}
      />
      {profileOpen && <Text>Open</Text>}
    </>
  );
};

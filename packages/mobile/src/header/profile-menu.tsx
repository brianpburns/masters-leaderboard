import React from 'react';

import { Pressable, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { useLogout } from 'src/login/hooks/use-logout';
import { selectAuthToken } from 'src/store';

export const ProfileMenu = () => {
  const authToken = useSelector(selectAuthToken);
  const logout = useLogout();

  return (
    authToken && (
      <>
        <Pressable onPress={logout}>
          <Text style={styles.text}>Logout</Text>
        </Pressable>
      </>
    )
  );
};

const styles = StyleSheet.create({
  text: {
    marginRight: 5,
  },
});

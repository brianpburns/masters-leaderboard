import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

export const Loader = () => (
  <View style={[styles.container]}>
    <ActivityIndicator size="large" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  label: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
}

export const Checkbox = ({ label, value, onValueChange }: Props) => {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <CheckBox style={styles.checkbox} value={value} onValueChange={onValueChange} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }],
  },
});

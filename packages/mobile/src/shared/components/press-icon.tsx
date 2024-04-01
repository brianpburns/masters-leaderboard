import React from 'react';
import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  onPress: () => void;
  name: string;
  size?: number;
  color?: string;
  disabled?: boolean;
}

export const PressIcon = ({ onPress, name, size = 25, color = 'black', disabled = false }: Props) => (
  <Pressable onPress={onPress} disabled={disabled}>
    <Icon name={name} size={size} color={disabled ? 'grey' : color} />
  </Pressable>
);

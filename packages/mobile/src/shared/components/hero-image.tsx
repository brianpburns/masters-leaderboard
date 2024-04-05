import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

export const thirteenthTeeBox =
  'https://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/dadd721f-48ec-497c-974d-ce09c0297264/masters-13th-hole.jpeg';

export const HeroImage = () => {
  return <ImageBackground source={{ uri: thirteenthTeeBox }} resizeMode="cover" style={styles.heroImage} />;
};

const styles = StyleSheet.create({
  heroImage: {
    alignSelf: 'stretch',
    height: 150,
  },
});

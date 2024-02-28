import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

const golfers = [
  {
    countryCode: 'IRL',
    name: 'Rory McIlroy',
  },
  {
    countryCode: 'USA',
    name: 'Tiger Woods',
  },
];

export const TeamPage = () => {
  return (
    <View>
      <FlatList
        style={styles.listContainer}
        data={golfers}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <View style={styles.flagContainer}>
              <Image
                style={styles.flag}
                source={{ uri: `https://www.masters.com/assets/images/flags/${item.countryCode}_sm.gif` }}
              />
            </View>
            <Text style={styles.golferName}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    borderWidth: 1,
    borderColor: 'silver',
    borderRadius: 5,
    padding: 0,
    margin: 10,
  },
  listItem: {
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    padding: 2,
    paddingLeft: 8,
    borderBottomWidth: 1,
    borderColor: 'silver',
    paddingTop: 5,
    paddingBottom: 5,
  },
  flagContainer: {
    marginRight: 8,
    justifyContent: 'center',
  },
  flag: {
    resizeMode: 'stretch',
    width: 18,
    height: 14,
  },
  golferName: {
    fontSize: 20,
  },
});

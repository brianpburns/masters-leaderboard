import React from 'react';
import { FlatList, Image, ListRenderItem, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Player } from 'src/types';

interface Props {
  data: Player[];
}

const renderGolfer: ListRenderItem<Player> = ({ item }: { item: Player }) => {
  return (
    <View style={styles.listItem}>
      <View style={styles.flagContainer}>
        <Image
          style={styles.flag}
          source={{ uri: `https://www.masters.com/assets/images/flags/${item.countryCode}_sm.gif` }}
        />
      </View>
      <Text style={styles.golferName}>{item.name}</Text>
    </View>
  );
};

export const GolfersList = ({ data }: Props) => {
  return (
    <ScrollView>
      <FlatList style={styles.listContainer} data={data} renderItem={renderGolfer} />
    </ScrollView>
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

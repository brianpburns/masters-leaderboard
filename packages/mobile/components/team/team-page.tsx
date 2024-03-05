import React from 'react';
import { FlatList, Image, ListRenderItem, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { selectCurrentTeam } from 'src/team-page/state/selectors';

type Player = {
  countryCode: string;
  name: string;
};

const player: Player[] = [
  {
    countryCode: 'IRL',
    name: 'Rory McIlroy',
  },
  {
    countryCode: 'USA',
    name: 'Tiger Woods',
  },
];

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

export const TeamPage = () => {
  const currentTeam = useSelector(selectCurrentTeam);
  console.log('currentTeam', currentTeam);

  return (
    <View>
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList style={styles.listContainer} data={player} renderItem={renderGolfer} />
      </SafeAreaView>
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

import React from 'react';
import { FlatList, Image, ListRenderItem, ScrollView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
import { top10Ids } from 'src/data/golfers-data';
import { selectPhaseSelection } from 'src/store';
import { Player } from 'src/types';

interface Props {
  data: Player[];
}

interface ListItemProps {
  selectionPhase: boolean;
  selectedView: boolean;
}

const generateRenderList = ({ selectedView, selectionPhase }: ListItemProps): ListRenderItem<Player> => {
  return ({ item }: { item: Player }) => {
    const rookie = item.First === '1';
    const amateur = item.Amateur === '1';
    const top10 = top10Ids.includes(item.id);

    return (
      <View style={styles.listItem}>
        <View style={styles.flagContainer}>
          <Image
            style={styles.flag}
            source={{ uri: `https://www.masters.com/assets/images/flags/${item.countryCode}_sm.gif` }}
          />
        </View>
        <Text style={styles.golferName}>{item.name}</Text>

        <View style={styles.iconsContainer}>
          <View style={styles.iconsWrapper}>
            <Text style={top10 ? styles.top10 : amateur ? styles.amateur : rookie ? styles.rookie : {}}>
              {' '}
              {top10 ? '10' : amateur ? 'A' : rookie && 'R'}{' '}
            </Text>
            {selectedView && selectionPhase && <Icon name="minus" />}
            {!selectedView && <Icon name="plus" size={15} />}
          </View>
        </View>
      </View>
    );
  };
};

export const GolfersList = ({ data }: Props) => {
  const selectionPhase = useSelector(selectPhaseSelection);
  const selectedView = false;

  const renderGolfer = generateRenderList({ selectedView, selectionPhase });

  return (
    <ScrollView>
      <FlatList style={styles.listContainer} data={data} renderItem={(item) => renderGolfer(item)} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    borderWidth: 1,
    borderColor: 'silver',
    borderRadius: 5,
    padding: 0,
    margin: 0,
    marginTop: 10,
    marginBottom: 50,
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
  iconsContainer: {
    flex: 1,
    marginRight: 5,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  iconsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  top10: {
    fontWeight: 'bold',
    color: 'gold',
  },
  amateur: {
    fontWeight: 'bold',
    color: 'orange',
  },
  rookie: {
    fontWeight: 'bold',
    color: 'green',
  },
});

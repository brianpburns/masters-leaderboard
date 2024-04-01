import React from 'react';
import { FlatList, Image, ListRenderItem, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { top10Ids } from 'src/data/golfers-data';
import { PressIcon } from 'src/shared/components/press-icon';
import { useManageGolfers } from 'src/shared/hooks/use-manage-golfers';
import { selectPhaseSelection } from 'src/store';
import { Player } from 'src/types';
import { useSelectionLimits } from '../hooks/use-selection-limits';

interface Props {
  data: Player[];
  selectedView: boolean;
}

interface ListItemProps {
  selectionPhase: boolean;
  selectedView: boolean;
  addGolfer: (id: number) => void;
  removeGolfer: (id: number) => void;
  disabled: {
    all: boolean;
    top10: boolean;
    other: boolean;
  };
}

const generateRenderList = ({
  selectedView,
  selectionPhase,
  addGolfer,
  removeGolfer,
  disabled,
}: ListItemProps): ListRenderItem<Player> => {
  return ({ item }: { item: Player }) => {
    const rookie = item.First === '1';
    const amateur = item.Amateur === '1';
    const top10 = top10Ids.includes(item.id);
    const other = !rookie && !amateur && !top10;
    const addDisabled = disabled.all || (top10 && disabled.top10) || (other && disabled.other);

    const teamPickedMessage = 'Team full';
    const rookieMessage = 'Must pick A/rookie';
    const top10Text = disabled.other ? rookieMessage : disabled.top10 ? 'At top 10 limit' : 'Top 10';
    const otherText = disabled.all ? teamPickedMessage : addDisabled ? rookieMessage : '';
    const text = disabled.all ? teamPickedMessage : top10 ? top10Text : amateur ? 'A' : rookie ? 'R' : otherText;
    const textStyle = top10 ? styles.top10 : amateur ? styles.amateur : rookie ? styles.rookie : styles.error;

    return (
      <View style={[styles.listItem, addDisabled ? styles.disabled : {}]}>
        <View style={styles.iconsWrapper}>
          {selectedView && selectionPhase && (
            <PressIcon onPress={() => removeGolfer(parseInt(item.id))} name="minus-square-o" color="red" />
          )}
          {!selectedView && (
            <PressIcon
              onPress={() => addGolfer(parseInt(item.id))}
              disabled={addDisabled}
              name="plus-square-o"
              color="green"
            />
          )}
        </View>
        <View style={styles.flagContainer}>
          <Image
            style={styles.flag}
            source={{ uri: `https://www.masters.com/assets/images/flags/${item.countryCode}_sm.gif` }}
          />
        </View>
        <Text style={styles.golferName}>{item.name}</Text>

        <View style={styles.iconsContainer}>
          <View style={styles.iconsWrapper}>
            <Text style={[textStyle, addDisabled ? { color: 'red' } : {}]}>{text}</Text>
          </View>
        </View>
      </View>
    );
  };
};

export const GolfersList = ({ data, selectedView }: Props) => {
  const selectionPhase = useSelector(selectPhaseSelection);
  const { addGolfer, removeGolfer } = useManageGolfers();
  const disabled = useSelectionLimits(selectedView);

  const renderGolfer = generateRenderList({ selectedView, selectionPhase, removeGolfer, addGolfer, disabled });

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
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  top10: {
    fontWeight: 'bold',
    color: 'green',
  },
  amateur: {
    fontWeight: 'bold',
    color: 'orange',
  },
  rookie: {
    fontWeight: 'bold',
    color: 'blue',
  },
  error: {
    fontWeight: 'bold',
    color: 'red',
  },
  disabled: {
    backgroundColor: 'lightgrey',
  },
});

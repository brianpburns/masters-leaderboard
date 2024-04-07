import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { top10Ids } from 'src/data/golfers-data';
import { selectPhaseSelection } from 'src/store';
import { Player } from 'src/types';
import { useSelectionLimits } from '../hooks/use-selection-limits';
import { AddRemoveButton } from './add-remove-button';

interface Props {
  data: Player[];
  selectedView: boolean;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export const GolfersList = ({ data, selectedView, loading, setLoading }: Props) => {
  const disabled = useSelectionLimits(selectedView);
  const selectionPhase = useSelector(selectPhaseSelection);

  return (
    <ScrollView>
      {data.map((golfer) => {
        const rookie = golfer.First === '1';
        const amateur = golfer.Amateur === '1';
        const top10 = top10Ids.includes(golfer.id);
        const other = !rookie && !amateur && !top10;
        const addDisabled = !selectionPhase || disabled.all || (top10 && disabled.top10) || (other && disabled.other);

        const deadlineMessage = 'Deadline passed';
        const teamPickedMessage = 'Team full';
        const rookieMessage = 'Must pick A/rookie';
        const top10Text = disabled.other ? rookieMessage : disabled.top10 ? 'At top 10 limit' : 'Top 10';
        const otherText = disabled.all ? teamPickedMessage : addDisabled ? rookieMessage : '';
        const playerType = top10 ? top10Text : amateur ? 'A' : rookie ? 'R' : '';
        const typeText = top10 ? top10Text : amateur ? 'A' : rookie ? 'R' : otherText;
        const textWithWarnings = !selectionPhase ? deadlineMessage : disabled.all ? teamPickedMessage : typeText;
        const finalText = selectedView ? playerType : textWithWarnings;
        const textStyle = top10 ? styles.top10 : amateur ? styles.amateur : rookie ? styles.rookie : styles.error;

        return (
          <View key={golfer.id} style={[styles.listItem, addDisabled ? styles.disabled : {}]}>
            <AddRemoveButton
              golfer={golfer}
              selectedView={selectedView}
              addDisabled={addDisabled}
              loading={loading}
              setLoading={setLoading}
            />
            <View style={styles.flagContainer}>
              <Image
                style={styles.flag}
                source={{ uri: `https://www.masters.com/assets/images/flags/${golfer.countryCode}_sm.gif` }}
              />
            </View>
            <Text style={styles.golferName}>{golfer.name}</Text>
            <View style={styles.iconsContainer}>
              <View style={styles.iconsWrapper}>
                <Text style={[textStyle, addDisabled && !selectedView ? { color: 'red' } : {}]}>{finalText}</Text>
              </View>
            </View>
          </View>
        );
      })}
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
    height: 16,
  },
  golferName: {
    fontSize: 18,
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

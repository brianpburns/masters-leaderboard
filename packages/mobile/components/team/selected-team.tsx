import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { useDeleteTeam } from 'src/api/hooks/use-delete-team';
import { useGetGolferData } from 'src/data/hooks/use-get-golfer-data';
import { selectCurrentTeam } from 'src/team-page/state/selectors';
import { GolfersList } from './golfers-list';

interface Props {
  selectedGolfers: number[];
}

export const SelectedTeam = ({ selectedGolfers }: Props) => {
  const deleteTeam = useDeleteTeam();
  const currentTeam = useSelector(selectCurrentTeam);
  const { getGolfersData } = useGetGolferData();
  const { golfers } = getGolfersData(selectedGolfers);

  return (
    <View style={styles.container}>
      <Text>{currentTeam.name}</Text>
      <GolfersList data={golfers} />
      <Button
        onPress={() => deleteTeam(currentTeam.id)}
        title="Delete Team"
        color="black"
        accessibilityLabel="Delete team"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'silver',
    borderRadius: 5,
    padding: 0,
    margin: 10,
  },
});

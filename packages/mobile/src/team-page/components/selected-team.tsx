import React, { useState } from 'react';
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
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      {golfers.length > 0 ? (
        <GolfersList data={golfers} selectedView={true} loading={loading} setLoading={setLoading} />
      ) : (
        <Text>Pick golfers from the list below.</Text>
      )}
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

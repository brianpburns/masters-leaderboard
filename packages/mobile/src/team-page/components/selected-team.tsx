import { Link } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useGetGolferData } from 'src/data/hooks/use-get-golfer-data';
import { GolfersList } from './golfers-list';

interface Props {
  selectedGolfers: number[];
}

export const SelectedTeam = ({ selectedGolfers }: Props) => {
  // const deleteTeam = useDeleteTeam();
  // const currentTeam = useSelector(selectCurrentTeam);
  const { getGolfersData } = useGetGolferData();
  const { golfers } = getGolfersData(selectedGolfers);
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      {golfers.length > 0 ? (
        <GolfersList data={golfers} selectedView={true} loading={loading} setLoading={setLoading} />
      ) : (
        <Link href={'/players'} style={styles.text}>
          <Text style={styles.linkText}>Go to players tab</Text>
        </Link>
      )}
      {/* <Button
        onPress={() => deleteTeam(currentTeam.id)}
        title="Delete Team"
        color="black"
        accessibilityLabel="Delete team"
      /> */}
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
  text: {
    padding: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

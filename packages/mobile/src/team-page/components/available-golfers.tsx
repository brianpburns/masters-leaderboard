import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useGetGolferData } from 'src/data/hooks/use-get-golfer-data';
import { Checkbox } from 'src/shared/components/checkbox';
import { useManageGolfers } from 'src/shared/hooks/use-manage-golfers';
import { useFilter } from '../hooks/use-filter';
import { GolfersList } from './golfers-list';

export const AvailableGolfersList = () => {
  const { addGolfer } = useManageGolfers();
  const { selectedGolfers } = useManageGolfers();
  const { searchTerm, setSearchTerm, searchResults } = useGetGolferData();
  const { filter, setFilter, results } = useFilter(searchResults, searchTerm);
  const remainingPicks = 10 - selectedGolfers.length;

  return (
    <View style={styles.listContainer}>
      {/* <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}
      <View style={styles.filtersContainer}>
        <Checkbox
          label="Top 10"
          value={filter === 'top10'}
          onValueChange={(checked) => setFilter(checked ? 'top10' : 'none')}
        />
        <Checkbox
          label="(A)/Rookie"
          value={filter === 'rookies'}
          onValueChange={(checked) => setFilter(checked ? 'rookies' : 'none')}
        />
        <Checkbox
          label="Other"
          value={filter === 'other'}
          onValueChange={(checked) => setFilter(checked ? 'other' : 'none')}
        />

        <Text style={remainingPicks === 0 ? styles.noPicksLeft : {}}>Picks Left: {remainingPicks}</Text>
      </View>
      <GolfersList data={results} />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: 'white',
    padding: 5,
    marginTop: 0,
  },
  filtersContainer: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
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
  noPicksLeft: {
    color: 'red',
  },
});

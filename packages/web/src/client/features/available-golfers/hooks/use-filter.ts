import { useEffect, useState } from 'react';
import { top10Ids } from 'src/client/data/golfers-data';
import { Player } from 'src/types';
import { Filter } from '../../team-page/types';

export const useFilter = (players: Player[], searchTerm: string) => {
  const [filter, setFilter] = useState<Filter>('none');
  const [filteredResults, setFilteredResults] = useState<Player[]>([]);

  useEffect(() => {
    if (searchTerm !== '') setFilter('none');
  }, [searchTerm]);

  useEffect(() => {
    if (filter === 'rookies') {
      const rookies = players.filter(
        (golfer) => !top10Ids.includes(golfer.id) && (golfer.First === '1' || golfer.Amateur === '1'),
      );
      setFilteredResults(rookies);
    } else if (filter === 'top10') {
      const top10 = players.filter((golfer) => top10Ids.includes(golfer.id));
      setFilteredResults(top10);
    } else if (filter === 'other') {
      const other = players.filter((golfer) => !top10Ids.includes(golfer.id) && golfer.First !== '1');
      setFilteredResults(other);
    } else {
      setFilteredResults(players);
    }
  }, [filter, players]);

  return { filter, setFilter, results: filteredResults };
};

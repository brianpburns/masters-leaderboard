import { useEffect, useState } from 'react';
import { Player } from 'src/types';
import { Filter } from '../types';

export const useFilter = (players: Player[]) => {
  const [filter, setFilter] = useState<Filter>('none');
  const [filteredResults, setFilteredResults] = useState<Player[]>([]);

  useEffect(() => {
    if (filter === 'rookies') {
      const rookies = players.filter((golfer) => golfer.First === '1');
      setFilteredResults(rookies);
    } else if (filter === 'top10') {
      const top10 = players.filter((golfer) => golfer.top10 === true);
      setFilteredResults(top10);
    } else {
      setFilteredResults(players);
    }
  }, [filter, players]);

  return { filter, setFilter, results: filteredResults };
};

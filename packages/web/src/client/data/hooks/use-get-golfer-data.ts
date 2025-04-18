import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useManageGolfers } from 'src/client/features/shared';
import { selectGofersData } from 'src/client/store/global-slice/selectors';
import { Player } from 'src/types';
import { top10Ids } from '../golfers-data';

export const useGetGolferData = () => {
  const allGolfers = useSelector(selectGofersData);
  const { unselectedGolfers } = useManageGolfers();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Player[]>([]);

  const sortResults = (resultsToSort: Player[]) => {
    const compare = (playerA: Player, playerB: Player) => {
      if (top10Ids.includes(playerA.id)) {
        return -1;
      }
      if (!top10Ids.includes(playerB.id) && !playerA.first_masters) {
        return -1;
      }
      if (!top10Ids.includes(playerB.id) && !playerB.first_masters && playerA.Amateur === '1') {
        return -1;
      }
      return 0;
    };

    return resultsToSort.slice().sort(compare);
  };

  useEffect(() => {
    if (searchTerm !== '') {
      const matches = allGolfers.filter((golfer) => {
        const { first_name, last_name } = golfer;
        const fullName = `${first_name} ${last_name}`.toLowerCase();

        return fullName.includes(searchTerm.toLowerCase());
      });
      setSearchResults(sortResults(matches));
    } else {
      setSearchResults(sortResults(unselectedGolfers));
    }
  }, [unselectedGolfers, searchTerm, allGolfers]);

  const getGolferData = (id: number) => {
    const matchingGolfer = allGolfers.find((golfer) => golfer.id === id.toString());

    if (!matchingGolfer) {
      throw new Error(`Golfer with ID ${id} not found`);
    }

    return matchingGolfer;
  };

  const getGolfersData = (ids: number[]) => {
    const golfers = ids.map((id) => getGolferData(id));
    const rookieCount = golfers.filter(
      (golfer) => golfer.first_masters && golfer.Amateur !== '1' && !top10Ids.includes(golfer.id),
    ).length;
    const amateurCount = golfers.filter((golfer) => golfer.Amateur === '1').length;
    const top10Count = golfers.filter((golfer) => top10Ids.includes(golfer.id)).length;

    return { golfers, rookieCount, top10Count, amateurCount };
  };

  return {
    getGolferData,
    getGolfersData,
    searchTerm,
    setSearchTerm,
    searchResults,
    sortResults,
  };
};

import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { inviteesState } from 'src/client/api';
import { useManageGolfers } from 'src/client/team';
import { Player } from 'src/types';

export const useGetGolferData = () => {
  const allGolfers = useRecoilValue(inviteesState);
  const { unselectedGolfers } = useManageGolfers();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Player[]>([]);

  const sortResults = (resultsToSort: Player[]) => {
    const compare = (playerA: Player, playerB: Player) => {
      if (playerA.top10) {
        return -1;
      }
      if (playerB.top10 !== true && playerA.First === '') {
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
    const matchingGolfer = allGolfers.find(
      (golfer) => golfer.id === id.toString()
    );

    if (!matchingGolfer) throw new Error(`Golfer with ID ${id} not found`);

    return matchingGolfer;
  };

  const getGolfersData = (ids: number[]) => {
    const golfers = ids.map((id) => getGolferData(id));
    const rookieCount = golfers.filter((golfer) => golfer.First === '1').length;
    const top10Count = golfers.filter((golfer) => golfer.top10 === true).length;

    return { golfers, rookieCount, top10Count };
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

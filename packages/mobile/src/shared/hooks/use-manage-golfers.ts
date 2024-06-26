import { useEffect, useState } from 'react';
import { golfersData } from 'src/data/golfers-data';
import { useAppSelector } from 'src/store';
import { Player } from 'src/types';
import { useCurrentTeamGolferIds } from '../../team-page/state/hooks';
import { selectCurrentTeamGolferIds } from '../../team-page/state/selectors';

export const useManageGolfers = () => {
  const allGolfers = golfersData.players;
  const [unselectedGolfers, setUnselectedGolfers] = useState<Player[]>([]);
  const { addGolfer, removeGolfer, setGolfers } = useCurrentTeamGolferIds();
  const selectedGolfers = useAppSelector(selectCurrentTeamGolferIds);

  useEffect(() => {
    const unpickedGolfers = allGolfers.filter((golfer) => !selectedGolfers.includes(parseInt(golfer.id)));
    setUnselectedGolfers(unpickedGolfers);
  }, [allGolfers, selectedGolfers]);

  return {
    allGolfers,
    selectedGolfers,
    unselectedGolfers,
    addGolfer,
    removeGolfer,
    setGolfers,
  };
};

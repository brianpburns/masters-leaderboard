import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppSelector } from 'src/client/store';
import { selectGofersData } from 'src/client/store/global-slice/selectors';
import { Player } from '../../../../types';
import { useCurrentTeamGolferIds } from '../../team-page/state/hooks';
import { selectCurrentTeamGolferIds } from '../../team-page/state/selectors';

export const useManageGolfers = () => {
  const allGolfers = useSelector(selectGofersData);
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

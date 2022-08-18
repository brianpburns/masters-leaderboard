import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { inviteesState } from 'src/client/api/state/atoms';
import { useAppSelector } from 'src/client/store';
import { Player } from '../../../../types';
import { useCurrentTeamGolferIds } from '../state/hooks';
import { selectCurrentTeamGolferIds } from '../state/selectors';

export const useManageGolfers = () => {
  const allGolfers = useRecoilValue(inviteesState);
  const [unselectedGolfers, setUnselectedGolfers] = useState<Player[]>([]);
  const { addGolfer, removeGolfer, setGolfers } = useCurrentTeamGolferIds();
  const selectedGolfers = useAppSelector(selectCurrentTeamGolferIds);

  useEffect(() => {
    const unpickedGolfers = allGolfers.filter(
      (golfer) => !selectedGolfers.includes(parseInt(golfer.id))
    );
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

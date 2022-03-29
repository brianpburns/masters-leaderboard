import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { inviteesState } from 'src/client/api/state/atoms';
import { Player } from '../../../types';
import { teamGolfersIdsState } from '../state/atoms';

export const useManageGolfers = () => {
  const [selectedGolfers, setSelectedGolfers] =
    useRecoilState(teamGolfersIdsState);
  const allGolfers = useRecoilValue(inviteesState);
  const teamGolfers = useRecoilValue(teamGolfersIdsState);
  const [unselectedGolfers, setUnselectedGolfers] = useState<Player[]>([]);

  useEffect(() => {
    const unpickedGolfers = allGolfers.filter(
      (golfer) => !teamGolfers.includes(parseInt(golfer.id))
    );
    setUnselectedGolfers(unpickedGolfers);
  }, [allGolfers, teamGolfers]);

  const addGolfer = (golferId: number) => {
    setSelectedGolfers([...selectedGolfers, golferId]);
  };

  const removeGolfer = (golferId: number) => {
    setSelectedGolfers(
      selectedGolfers.filter((selectedGolfer) => selectedGolfer !== golferId)
    );
  };

  return {
    allGolfers,
    unselectedGolfers,
    addGolfer,
    removeGolfer,
  };
};

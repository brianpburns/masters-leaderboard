import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { GolferData } from '../../../types';
import { golfersState } from '../../api';

import { teamGolfersIdsState } from '../state/atoms';

export const useManageGolfers = () => {
  const [selectedGolfers, setSelectedGolfers] =
    useRecoilState(teamGolfersIdsState);
  const allGolfers = useRecoilValue(golfersState);
  const teamGolfers = useRecoilValue(teamGolfersIdsState);
  const [unselectedGolfers, setUnselectedGolfers] = useState<GolferData[]>([]);

  useEffect(() => {
    const golfers = Object.values(allGolfers).filter(
      (golfer) => !teamGolfers.includes(golfer.id)
    );
    setUnselectedGolfers(golfers);
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
    allGolfers: Object.values(allGolfers),
    unselectedGolfers,
    addGolfer,
    removeGolfer,
  };
};

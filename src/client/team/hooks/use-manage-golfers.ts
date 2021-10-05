import { useRecoilState, useRecoilValue } from 'recoil';
import { golfersState } from '../../app';

import { teamGolfersIdsState } from '../state/atoms';

export const useManageGolfers = () => {
  const [selectedGolfers, setSelectedGolfers] =
    useRecoilState(teamGolfersIdsState);
  const allGolfers = useRecoilValue(golfersState);
  const teamGolfers = useRecoilValue(teamGolfersIdsState);

  const availableGolfers = Object.values(allGolfers).filter(
    (golfer) => !teamGolfers.includes(golfer.id)
  );

  const addGolfer = (golferId: number) => {
    setSelectedGolfers([...selectedGolfers, golferId]);
  };

  const removeGolfer = (golferId: number) => {
    setSelectedGolfers(
      selectedGolfers.filter((selectedGolfer) => selectedGolfer !== golferId)
    );
  };

  return { availableGolfers, addGolfer, removeGolfer };
};

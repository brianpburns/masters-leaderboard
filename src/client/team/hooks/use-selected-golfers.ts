import { useRecoilState } from 'recoil';

import { teamGolfersIdsState } from '../state/atoms';

export const useManageGolfers = () => {
  const [selectedGolfers, setSelectedGolfers] =
    useRecoilState(teamGolfersIdsState);

  const addGolfer = (golferId: number) => {
    setSelectedGolfers([...selectedGolfers, golferId]);
  };

  const removeGolfer = (golferId: number) => {
    setSelectedGolfers(
      selectedGolfers.filter((selectedGolfer) => selectedGolfer !== golferId)
    );
  };

  return { addGolfer, removeGolfer };
};

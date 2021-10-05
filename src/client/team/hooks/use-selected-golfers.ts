import { useRecoilState } from 'recoil';
import { GolferData } from '../../../types';

import { selectedGolfersState } from '../state/selectors';

export const useSelectedGolfers = () => {
  const [selectedGolfers, setSelectedGolfers] =
    useRecoilState(selectedGolfersState);

  const addGolfer = (golfer: GolferData) => {
    setSelectedGolfers([...selectedGolfers, golfer]);
  };

  const removeGolfer = (golfer: GolferData) => {
    setSelectedGolfers(
      selectedGolfers.filter(
        (selectedGolfer) => selectedGolfer.id !== golfer.id
      )
    );
  };

  return { addGolfer, removeGolfer };
};

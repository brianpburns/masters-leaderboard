import { useRecoilValue } from 'recoil';
import { useGolferPosition } from 'src/client/api';
import { prizeMoneyState } from '../../api/state/atoms';

export const useGolferPrizeMoney = (golferId: number) => {
  const position = useGolferPosition(golferId);
  const prizeMoney = useRecoilValue(prizeMoneyState);

  return prizeMoney[position].prizeMoney;
};

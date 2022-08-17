import { useRecoilValue } from 'recoil';
import { useGolferPosition } from 'src/client/api';
import { golferMoneyRankingsState } from '../../../api/state/atoms';

export const useGolferPrizeMoney = (golferId: number) => {
  const position = useGolferPosition(golferId);
  const prizeMoney = useRecoilValue(golferMoneyRankingsState);

  if (!prizeMoney) return 0;

  return prizeMoney[position].prizeMoney;
};

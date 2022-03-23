import { useRecoilValue } from 'recoil';
import { useGolferPosition } from 'src/client/api';
import { golferMoneyRankingsState } from '../../api/state/atoms';

export const useGolferPrizeMoney = (golferId: number) => {
  const position = useGolferPosition(golferId);
  const prizeMoney = useRecoilValue(golferMoneyRankingsState);

  return prizeMoney[position].prizeMoney;
};

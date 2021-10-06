import { useRecoilValue } from 'recoil';
import { prizeMoneyState } from '../../api/state/atoms';
import { golfersState } from '../../app';

export const useGolferPrizeMoney = () => {
  const golfers = useRecoilValue(golfersState);
  const prizeMoney = useRecoilValue(prizeMoneyState);

  return (golferId: number) =>
    prizeMoney[golfers[golferId].position].prizeMoney;
};

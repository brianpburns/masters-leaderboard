import { useRecoilValue } from 'recoil';
import { golfersState } from '../state/atoms';

export const useGolferPosition = (golferId: number) => {
  const golfers = useRecoilValue(golfersState);

  return golfers[golferId].position;
};

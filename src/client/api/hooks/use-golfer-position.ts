import { useRecoilValue } from 'recoil';
import { golfersState } from '../state/atoms';

export const useGolferPosition = (golferId: number) => {
  const golfers = useRecoilValue(golfersState);

  if (!golfers) return 0;

  return golfers[golferId].position;
};

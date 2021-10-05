import { useRecoilValue } from 'recoil';

import { golfersState } from '../../app';

export const usePosition = () => {
  const golfers = useRecoilValue(golfersState);

  return (golferId: number) => golfers[golferId].position;
};

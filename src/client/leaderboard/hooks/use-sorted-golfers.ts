import { useRecoilValue } from 'recoil';
import { golfersState } from 'src/client/api';
import { Team } from '../../../types';

export const useSortedGolfers = (row: Team) => {
  const golfers = useRecoilValue(golfersState);

  const positionsSortKey = (aId: number, bId: number) => {
    const aPos = golfers[aId].position;
    const bPos = golfers[bId].position;
    return aPos > 0 && bPos > 0 ? aPos - bPos : bPos - aPos;
  };

  return row.golfer_ids.slice().sort(positionsSortKey);
};

import { TeamType } from '../../../types';
import { usePosition } from './use-position';

export const useSortedGolfers = (row: TeamType) => {
  const getPosition = usePosition();
  const positionsSortKey = (aId: number, bId: number) => {
    const aPos = getPosition(aId);
    const bPos = getPosition(bId);
    return aPos > 0 && bPos > 0 ? aPos - bPos : bPos - aPos;
  };

  return row.golfer_ids.slice().sort(positionsSortKey);
};

import { useSelector } from 'react-redux';
import { selectGolfersList } from 'src/client/store';
import { Team } from '../../../../types';

export const useSortedGolfers = (row: Team) => {
  const golfers = useSelector(selectGolfersList);

  if (Object.keys(golfers).length === 0) return row.golfer_ids;

  const positionsSortKey = (aId: number, bId: number) => {
    const aPos = golfers[aId].position;
    const bPos = golfers[bId].position;
    return aPos > 0 && bPos > 0 ? aPos - bPos : bPos - aPos;
  };

  return row.golfer_ids.slice().sort(positionsSortKey);
};
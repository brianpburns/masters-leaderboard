import { useSelector } from 'react-redux';
import { selectGolfersList } from 'src/store';
import { Team } from 'src/types';

export const useSortedGolfers = (row: Team) => {
  const golfers = useSelector(selectGolfersList);

  if (!golfers) return row.golfer_ids;

  if (Object.keys(golfers).length === 0) return row.golfer_ids;

  const positionsSortKey = (aId: number, bId: number) => {
    try {
      const aPos = golfers[aId].position;
      const bPos = golfers[bId].position;
      return aPos > 0 && bPos > 0 ? aPos - bPos : bPos - aPos;
    } catch (err) {
      // This should only be possible with mock data
      console.error(`Failed to get a position for golfer. Either ${aId} or ${bId} 'is not a valid ID`);
      return 0;
    }
  };

  return row.golfer_ids.slice().sort(positionsSortKey);
};

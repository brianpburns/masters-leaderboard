import { useSelector } from 'react-redux';
import { selectGolfersList } from 'src/client/store';

export const useGolferPosition = (golferId: number) => {
  const golfers = useSelector(selectGolfersList);

  if (!golfers || Object.keys(golfers).length === 0) return 0;

  return golfers[golferId].position;
};

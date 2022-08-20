import { useGolferPosition } from 'src/client/api';
import { useAppSelector } from 'src/client/store';
import { selectGolferRankings } from 'src/client/store/global-slice/selectors';

export const useGolferPrizeMoney = (golferId: number) => {
  const position = useGolferPosition(golferId);
  const prizeMoney = useAppSelector(selectGolferRankings);

  if (!prizeMoney || Object.keys(prizeMoney).length === 0) return 0;

  return prizeMoney[position].prizeMoney;
};

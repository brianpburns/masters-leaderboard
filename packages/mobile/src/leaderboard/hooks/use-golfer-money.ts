import { useSelector } from 'react-redux';
import { selectGolferRankings, selectGolfersList, useAppSelector } from 'src/store';

export const useGolferMoney = () => {
  const golfers = useSelector(selectGolfersList);
  const prizeMoney = useAppSelector(selectGolferRankings);

  return (golferId: number) => {
    if (!golfers || Object.keys(golfers).length === 0) return 0;
    const position = golfers[golferId].position;

    if (!prizeMoney || Object.keys(prizeMoney).length === 0) return 0;

    return prizeMoney[position].prizeMoney;
  };
};

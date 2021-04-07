import { Entrant } from '../../types';
import { usePrizeMoney } from './use-prize-money';

export const useSortedGolfers = (row: Entrant) => {
  const getPrizeMoney = usePrizeMoney();
  const positionsSortKey = (aId: number, bId: number) => {
    return getPrizeMoney(aId) < getPrizeMoney(bId) ? 1 : -1;
  };

  return row.players_ids.slice().sort(positionsSortKey);
};

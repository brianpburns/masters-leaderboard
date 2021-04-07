import type { LeaderboardJsonResponse } from '../../types';
import { normaliseCutLine, getGolferStats } from '../../util/stats';
import {
  addPrizeMoney,
  calculateAllEntrantsMoney,
} from '../../util/prize-money';
import { getLeaderboard } from './fetch';

export const fetchData = async () => {
  const response = await getLeaderboard();
  const { data }: LeaderboardJsonResponse = await response.json();

  const { golfers, golferRankings } = getGolferStats(data);
  const cutLine = normaliseCutLine(data.cutLine);

  const rankingsWithPrizeMoney = addPrizeMoney(golferRankings);

  const entrantsMoney = calculateAllEntrantsMoney(
    golfers,
    rankingsWithPrizeMoney
  );

  return { cutLine, golfers, rankingsWithPrizeMoney, entrantsMoney };
};

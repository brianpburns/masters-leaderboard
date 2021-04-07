import type { LeaderboardJsonResponse } from '../types';
import { normaliseCutLine } from '../util/stats';
import { addPrizeMoney, calculateAllEntrantsMoney } from '../util/prize-money';
import { getLeaderboard } from './fetch/fetch';
import { generateRankings } from './utils/generate-rankings';

export const fetchData = async () => {
  const response = await getLeaderboard();
  const { data }: LeaderboardJsonResponse = await response.json();

  console.log('data', data);

  const { golfers, golferRankings } = generateRankings(data);
  const cutLine = normaliseCutLine(data.cutLine);

  console.log('golfers', golfers);
  console.log('golferRankings', golferRankings);
  console.log('cutLine', cutLine);

  const rankingsWithPrizeMoney = addPrizeMoney(golferRankings);

  const entrantsMoney = calculateAllEntrantsMoney(
    golfers,
    rankingsWithPrizeMoney
  );

  console.log('rankingsWithPrizeMoney', rankingsWithPrizeMoney);
  console.log('entrantsMoney', entrantsMoney);

  return { cutLine, golfers, rankingsWithPrizeMoney, entrantsMoney };
};

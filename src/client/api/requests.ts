import type { LeaderboardJsonResponse } from '../../types';
import { normaliseCutLine } from '../util/stats';
import { addPrizeMoney, allTeamsMoney } from '../util/prize-money';
import { getLeaderboard } from './fetch/get-leaderboard';
import { generateRankings } from './utils/generate-rankings';

export const fetchData = async () => {
  const response = await getLeaderboard();
  const { data }: LeaderboardJsonResponse = await response.json();

  const currentRound = data.currentRound;
  const { golfers, golferRankings } = generateRankings(data);
  const cutLine = normaliseCutLine(data.cutLine);

  const rankingsWithPrizeMoney = addPrizeMoney(golferRankings, currentRound);

  const teamsMoney = allTeamsMoney(golfers, rankingsWithPrizeMoney);

  return { cutLine, golfers, rankingsWithPrizeMoney, teamsMoney };
};

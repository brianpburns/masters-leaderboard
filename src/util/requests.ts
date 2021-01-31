import sampleData from '../data/stats-2019.json';
import type { LeaderboardData, LeaderboardJsonResponse } from '../types/types';
import { normaliseCutLine, getGolferStats } from './stats';
import { addGolferMoney, playerPrizeMoney } from './prizeMoney';

const leaderboarUrl = 'https://www.masters.com/en_US/scores/feeds/scores.json';

export const getLeaderboardData = async () => fetch(leaderboarUrl);

export const generateLeaderboard = async () => {
  const leaderboardRequest = await getLeaderboardData();
  const { data }: LeaderboardJsonResponse = await leaderboardRequest.json();

  const golferStats = getGolferStats(data);
  const cutline = normaliseCutLine(data.cutLine);
  const playerMoney = playerPrizeMoney(golferStats, cutline);
  
  const entrantsMoney = addGolferMoney(playerMoney);

  const rankedEntrants = entrantsMoney.sort((player1, player2) =>
    player1.prizeMoney > player2.prizeMoney ? -1 : 1
  );

  return rankedEntrants;
};

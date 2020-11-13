import sampleData from '../data/stats-2019.json';
import poolData from '../data/data.json';
import type { LeaderboardData } from '../types/types';
import { getCutLine, getGolferStats } from './stats';
import { addGolferMoney, playerPrizeMoney } from './prizeMoney';

export const getLeaderboardData = async () => {
  const leaderboarUrl =
    'https://www.masters.com/en_US/scores/feeds/scores.json';

  const request = (await fetch(leaderboarUrl)).json();
  return request;
};

export const generateLeaderboard = async () => {
  // const leaderboard: LeaderboardResponse = await getLeaderboardData();
  const leaderboardData: LeaderboardData = sampleData.data;

  const golferStats = getGolferStats(leaderboardData);
  const cutline = getCutLine(leaderboardData.cutLine);
  const playerMoney = playerPrizeMoney(golferStats, cutline);
  const entrantsMoney = addGolferMoney(playerMoney);

  return entrantsMoney;
};

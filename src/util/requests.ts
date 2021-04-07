import { mockMastersLeaderboard } from '../data/mockLeaderboard';
import type { LeaderboardJsonResponse } from '../types';
import { normaliseCutLine, getGolferStats } from './stats';
import { addGolferMoney, playerPrizeMoney } from './prize-money';

const leaderboarUrl =
  'https://www.masters.com/en_US/scores/feeds/2021/scores.json';

export const getLeaderboardData = async () => fetch(leaderboarUrl);

// export const generateLeaderboard = async () => {
//   // const leaderboardRequest = await getLeaderboardData();
//   // const { data }: LeaderboardJsonResponse = await leaderboardRequest.json();
//   const { data } = mockMastersLeaderboard as LeaderboardJsonResponse;

//   const golferStats = getGolferStats(data);
//   const cutline = normaliseCutLine(data.cutLine);
//   const playerMoney = playerPrizeMoney(golferStats, cutline);

//   const entrantsMoney = addGolferMoney(playerMoney);

//   const rankedEntrants = entrantsMoney.sort((player1, player2) =>
//     player1.prizeMoney > player2.prizeMoney ? -1 : 1
//   );

//   return rankedEntrants;
// };

export const fetchData = async () => {
  // const leaderboardRequest = await getLeaderboardData();
  // const { data }: LeaderboardJsonResponse = await leaderboardRequest.json();
  const { data } = mockMastersLeaderboard as LeaderboardJsonResponse;

  const { golfers, golfersLeaderboard } = getGolferStats(data);
  const cutLine = normaliseCutLine(data.cutLine);

  return { cutLine, golfers, golfersLeaderboard };
};

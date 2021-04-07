import { mockMastersLeaderboard } from '../../mocks/data/leaderboard';
import type { LeaderboardJsonResponse } from '../../types';
import { normaliseCutLine, getGolferStats } from '../../util/stats';
import {
  addGolferMoney,
  addPrizeMoney,
  playerPrizeMoney,
} from '../../util/prize-money';
import { getLeaderboard } from './fetch';

const leaderboarUrl =
  'https://www.masters.com/en_US/scores/feeds/2021/scores.json';

export const getLeaderboardData = async () => fetch(leaderboarUrl);

// export const generateLeaderboard = async () => {
//   // const leaderboardRequest = await getLeaderboardData();
//   // const { data }: LeaderboardJsonResponse = await leaderboardRequest.json();
//   const { data } = mockMastersLeaderboard as LeaderboardJsonResponse;

//   const { golfers, golferRankings } = getGolferStats(data);
//   const cutline = normaliseCutLine(data.cutLine);

//   const playerMoney = playerPrizeMoney(golfers, cutline);

//   const entrantsMoney = addGolferMoney(playerMoney);

//   const rankedEntrants = entrantsMoney.sort((player1, player2) =>
//     player1.prizeMoney > player2.prizeMoney ? -1 : 1
//   );

//   return rankedEntrants;
// };

export const fetchData = async () => {
  const response = await getLeaderboard();
  const { data }: LeaderboardJsonResponse = await response.json();

  const { golfers, golferRankings } = getGolferStats(data);
  const cutLine = normaliseCutLine(data.cutLine);

  const rankingsWithPrizeMoney = addPrizeMoney(golferRankings, cutLine);

  return { cutLine, golfers, rankingsWithPrizeMoney };
};

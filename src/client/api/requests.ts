// TODO: Uncomment request processing once real url is live
// import type { LeaderboardData } from '../../types';
import { addPrizeMoney } from '../util/prize-money';
import { normaliseCutLine } from './utils/normalise-cut-line';
import { getLeaderboard } from './fetch/get-leaderboard';
import { generateRankings } from './utils/generate-rankings';

export const fetchLeaderboardData = async () => {
  try {
    const response = await getLeaderboard();
    // const { data }: {data: LeaderboardData} = await response.json();
    const { data } = response;
    const { currentRound, player: dirtyGolfersData } = data;
    const cutLine = normaliseCutLine(data.cutLine);

    return { cutLine, dirtyGolfersData, currentRound };
  } catch (err) {
    throw new Error('Failed to fetch leaderboard data');
  }
};

export const generateLeaderboardData = async () => {
  const { cutLine, dirtyGolfersData, currentRound } =
    await fetchLeaderboardData();
  const { golfers, golferRankings } = generateRankings(dirtyGolfersData);

  const rankingsWithPrizeMoney = addPrizeMoney(golferRankings, currentRound);

  return { golfers, rankingsWithPrizeMoney, cutLine };
};

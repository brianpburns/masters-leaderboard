// TODO: Uncomment request processing once real url is live
import type { LeaderboardData } from '../../../types';
import { addPrizeMoney } from '../../util/prize-money';
import { normaliseCutLine } from './normalise-cut-line';
import { getLeaderboard } from '../fetch/get-leaderboard';
import { generateRankings } from './generate-rankings';

export const fetchLeaderboardData = async () => {
  try {
    const response = await getLeaderboard();
    // const { data }: {data: LeaderboardData} = await response.json();
    const { data }: { data: LeaderboardData } = response;
    const { currentRound } = data;

    return {
      cutLine: normaliseCutLine(data.cutLine),
      rawGolfersData: [],
      currentRound,
    };
  } catch (err) {
    throw new Error('Failed to fetch leaderboard data');
  }
};

export const generateGolferData = async () => {
  const { cutLine, rawGolfersData, currentRound } =
    await fetchLeaderboardData();

  if (rawGolfersData.length === 0) {
    return {
      golfers: null,
      golferMoneyRankings: null,
      cutLine: 0,
    };
  }

  const { golfers, golferRankings } = generateRankings(rawGolfersData);

  const golferMoneyRankings = addPrizeMoney(golferRankings, currentRound);

  return { golfers, golferMoneyRankings, cutLine };
};

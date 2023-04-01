import type { LeaderboardData, RawGolferData } from '../../../types';
import { addPrizeMoney } from '../../util/prize-money';
import { getLeaderboard } from '../fetch/get-leaderboard';
import { generateRankings } from './generate-rankings';
import { normaliseCutLine } from './normalise-cut-line';

export const fetchLeaderboardData = async () => {
  try {
    const response = await getLeaderboard();
    // const { data }: { data: LeaderboardData } = await response.json();
    // Used when the Masters URL isn't live yet
    const { data }: { data: LeaderboardData } = response;
    const { currentRound, player } = data;

    return {
      cutLine: normaliseCutLine(data.cutLine),
      rawGolfersData: player,
      currentRound,
    };
  } catch (err) {
    throw new Error('Failed to fetch leaderboard data');
  }
};

export const processLeaderBoardData = (
  cutLine: number,
  rawGolfersData: RawGolferData[],
  currentRound: string
) => {
  if (rawGolfersData.length === 0) {
    return {
      golfers: [],
      golferMoneyRankings: [],
      cutLine: 0,
    };
  }

  const { golfers, golferRankings } = generateRankings(rawGolfersData);

  const golferMoneyRankings = addPrizeMoney(golferRankings, currentRound);

  return { golfers, golferMoneyRankings, cutLine };
};

export const generateGolferData = async () => {
  const { cutLine, rawGolfersData, currentRound } =
    await fetchLeaderboardData();

  return processLeaderBoardData(cutLine, rawGolfersData, currentRound);
};

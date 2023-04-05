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
    const { currentRound, player, cutLine } = data;
    // const currentRound = data.currentRound ? data.currentRound : '1000';
    // const player = data.player ? data.player : [];
    // const cutLine = data.cutLine ? data.cutLine : ' 0';

    return {
      cutLine: normaliseCutLine(cutLine),
      rawGolfersData: player || [],
      currentRound: currentRound,
    };
  } catch (err) {
    console.error(`Failed to fetch leaderboard data, ${err}`);
    return {
      cutLine: 0,
      rawGolfersData: [],
      currentRound: '1000',
    };
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

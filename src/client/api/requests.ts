import type {
  Golfer,
  GolferMoneyRankings,
  Golfers,
  LeaderboardJsonResponse,
  Team,
} from '../../types';
import { normaliseCutLine } from '../util/stats';
import { addPrizeMoney, allTeamsMoney } from '../util/prize-money';
import { getLeaderboard } from './fetch/get-leaderboard';
import { generateRankings } from './utils/generate-rankings';

export const fetchLeaderboardData = async () => {
  const response = await getLeaderboard();
  const { data }: LeaderboardJsonResponse = await response.json();
  const { currentRound, player } = data;
  const cutLine = normaliseCutLine(data.cutLine);

  return { cutLine, player, currentRound };
};

export const golfersLeaderboard = (players: Golfer[], currentRound: string) => {
  const { golfers, golferRankings } = generateRankings(players);

  const rankingsWithPrizeMoney = addPrizeMoney(golferRankings, currentRound);

  return { golfers, rankingsWithPrizeMoney };
};

export const teamsPrizeMoney = (
  golfers: Golfers,
  rankingsWithPrizeMoney: GolferMoneyRankings,
  teams: Team[]
) => {
  const teamsWithMoney = allTeamsMoney(golfers, rankingsWithPrizeMoney, teams);

  return teamsWithMoney;
};

import { LeaderboardData, Golfers, GolferMoneyRankings } from '../../../types';
import { generateGolferStats } from './generate-golfer-stats';

export const generateRankings = (leaderboardData: LeaderboardData) => {
  const golfers: Golfers = {};
  const golferRankings: GolferMoneyRankings = {};

  leaderboardData.player.map((golfer) => {
    const cleanGolferData = generateGolferStats(golfer);
    const { id, position, topar } = cleanGolferData;

    golfers[id] = cleanGolferData;

    if (golferRankings[position]) {
      golferRankings[position].golfers.push(id);
    } else {
      golferRankings[position] = {
        golfers: [id],
        prizeMoney: 0,
        topar,
      };
    }
  });

  return { golfers, golferRankings };
};

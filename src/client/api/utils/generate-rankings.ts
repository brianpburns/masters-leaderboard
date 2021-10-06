import { Golfers, GolferMoneyRankings, Golfer } from '../../../types';
import { cleanGolferData } from './generate-golfer-stats';

export const generateRankings = (players: Golfer[]) => {
  const golfers: Golfers = {};
  const golferRankings: GolferMoneyRankings = {};

  players.map((golfer) => {
    const cleanData = cleanGolferData(golfer);
    const { id, position, topar } = cleanData;

    golfers[id] = cleanData;

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

import { Golfers, GolferMoneyRankings, RawGolferData } from '../../../types';
import { cleanGolferData } from './clean-golfer-data';

/**
 * Returns clean golfer data and leaderboard
 * golfers: {
 *  '27644': {
      id: 27644,
      name: 'Brian Harman',
      position: 4,
      topar: -3,
      thru: 'F',
      today: '-3',
      teetime: '9:00 AM'
    },
 * } 
 * 
 * golferRankings: {
 *  '4': { golfers: [ 27644 ], prizeMoney: 0, topar: -3 },
 *  '5': { golfers: [ 47483, 45522 ], prizeMoney: 0, topar: -2 }
 * } 
 */
export const generateRankings = (players: RawGolferData[]) => {
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

import {
  LeaderboardData,
  Golfer,
  GolferData,
  Golfers,
  GolferMoneyRankings,
} from '../types';

const normalisePosition = (position: string) =>
  position ? parseInt(position.replace('T', '')) : 0;

const generateGolferStats = (golfer: Golfer): GolferData => {
  const {
    id,
    first_name,
    last_name,
    pos,
    topar,
    thru,
    today,
    teetime,
  } = golfer;
  return {
    id,
    name: `${first_name} ${last_name}`,
    position: normalisePosition(pos),
    topar: topar === 'E' || topar === '' ? 0 : parseInt(topar),
    thru: thru ? thru : '-',
    today: today ? today : '-',
    teetime,
  };
};

export const getGolferStats = (leaderboardData: LeaderboardData) => {
  let golfers: Golfers = {};
  let golferRankings: GolferMoneyRankings = {};

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

export const generateGolferRankings = (leaderboardData: LeaderboardData) => {};

export function normaliseCutLine(cutLine: LeaderboardData['cutLine']) {
  return cutLine === 'E' || cutLine === '' ? 0 : parseInt(cutLine);
}

import {
  LeaderboardData,
  Golfer,
  GolferData,
  Golfers,
  GolfersLeaderboard,
} from '../ui/types';

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
    prizeMoney: 0,
    topar: topar === 'E' ? 0 : parseInt(topar),
    thru: thru ? thru : '-',
    today: today ? today : '-',
    teetime,
  };
};

export const getGolferStats = (leaderboardData: LeaderboardData) => {
  let golfers: Golfers = {};
  let golfersLeaderboard: GolfersLeaderboard = {};

  leaderboardData.player.map((golfer) => {
    golfers[golfer.id] = generateGolferStats(golfer);
    const position = normalisePosition(golfer.pos);
    if (golfersLeaderboard[position]) {
      golfersLeaderboard[position].push(golfer.id);
    } else {
      golfersLeaderboard[position] = [golfer.id];
    }
  });
  return { golfers, golfersLeaderboard };
};

export function normaliseCutLine(cutLine: LeaderboardData['cutLine']) {
  return cutLine === 'E' || cutLine === '' ? 0 : parseInt(cutLine);
}

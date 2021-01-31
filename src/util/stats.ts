import { LeaderboardData, Golfer, GolferData } from '../types/types';

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
    position: pos || '-',
    prizeMoney: 0,
    topar: topar === 'E' ? 0 : parseInt(topar),
    thru: thru ? thru : '-',
    today: today ? today : '-',
    teetime,
  };
};

export const getGolferStats = (leaderboardData: LeaderboardData) =>
  leaderboardData.player.map((golfer) => generateGolferStats(golfer));

export function normaliseCutLine(cutLine: LeaderboardData['cutLine']) {
  return cutLine === 'E' || cutLine === '' ? 0 : parseInt(cutLine);
}

import type { LeaderboardData } from '../types/types';

export const getGolferStats = (leaderboardData: LeaderboardData) => {
  return leaderboardData.player.map((player) => {
    const {
      id,
      first_name,
      last_name,
      pos,
      topar,
      thru,
      today,
      teetime,
    } = player;
    return {
      id,
      name: `${first_name} ${last_name}`,
      position: pos || '-',
      topar: topar === 'E' ? 0 : parseInt(topar),
      thru: thru ? thru : '-',
      today: today ? player.today : '-',
      teetime,
    };
  });
};

export function getCutLine(cutLine: LeaderboardData['cutLine']) {
  return cutLine === 'E' || cutLine === '' ? 0 : parseInt(cutLine);
}

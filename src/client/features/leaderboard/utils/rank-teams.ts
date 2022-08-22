import { TeamWithPrizeMoney } from 'src/types';

export const rankTeams = (teams: TeamWithPrizeMoney[]) => {
  const prizeMoneySortKey = (a: TeamWithPrizeMoney, b: TeamWithPrizeMoney) =>
    (a.prizeMoney || 0) < (b.prizeMoney || 0) ? 1 : -1;

  return teams.slice().sort(prizeMoneySortKey);
};

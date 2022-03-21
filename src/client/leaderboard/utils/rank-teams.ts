import { TeamType } from 'src/types';

export const rankTeams = (teams: TeamType[]) => {
  const prizeMoneySortKey = (a: TeamType, b: TeamType) =>
    (a.prizeMoney || 0) < (b.prizeMoney || 0) ? 1 : -1;

  return teams.slice().sort(prizeMoneySortKey);
};

import { Team } from 'src/types';

export const rankTeams = (teams: Team[]) => {
  const prizeMoneySortKey = (a: Team, b: Team) =>
    (a.prizeMoney || 0) < (b.prizeMoney || 0) ? 1 : -1;

  return teams.slice().sort(prizeMoneySortKey);
};

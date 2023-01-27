import { Team } from 'src/types';

interface GetTeamResponse {
  team: Team;
  new_team: boolean;
}

export const getTeam = async (token: string) => {
  const res = await fetch('/api/team', {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });

  if (![200, 201].includes(res.status)) {
    throw new Error(
      `Failed to get team. Server responded with a ${res.status} code`
    );
  }

  return (await res.json()) as GetTeamResponse;
};

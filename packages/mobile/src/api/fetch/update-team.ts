import { Team } from 'src/types';
import { baseUrl } from '../config';

export const updateTeam = async ({ owner, name, golfer_ids }: Team, token: string) => {
  const res = await fetch(`${baseUrl}/api/team`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${token}`,
    },
    body: JSON.stringify({ owner, name, golfer_ids }),
  });

  if (res.status !== 200) {
    throw new Error(`Failed to update team. Server responded with a ${res.status} code`);
  }
};

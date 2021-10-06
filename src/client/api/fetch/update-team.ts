import { Team } from '../../../types';

export const updateTeam = async ({ id, owner, name, golferIds }: Team) => {
  const res = await fetch(`/api/teams/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ owner, name, golfer_ids: golferIds }),
  });

  if (res.status !== 200) {
    throw new Error(
      `Failed to update team. Server responded with a ${res.status} code`
    );
  }
};

import { baseUrl } from '../config';

export const listTeams = async () => {
  const res = await fetch(`${baseUrl}/api/teams`);

  if (res.status !== 200) {
    throw new Error(`Failed to get teams. Server responded with a ${res.status} code`);
  }

  return await res.json();
};

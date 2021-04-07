import { LeaderboardJsonResponse } from '../../types';
import { getLeaderboard } from '../fetch/fetch';

export const useLeaderboard = async () => {
  const response = await getLeaderboard();

  if (response.status !== 200)
    throw new Error(`Failed to get leaderboard data`);

  const { data }: LeaderboardJsonResponse = await response.json();

  return data;
};

import { baseUrl } from '../config';

// const LEADERBOARD_URL = 'https://www.masters.com/en_US/scores/feeds/2023/scores.json';
const LEADERBOARD_URL = `${baseUrl}/api/masters-leaderboard`;

export const getLeaderboard = async () => fetch(LEADERBOARD_URL);

// Used when the Masters URL isn't live yet
// export const getLeaderboard = async () => mockLeaderboardData;

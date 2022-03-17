import { mockLeaderboardData } from 'src/client/mock-server/data/leaderboard';

// const LEADERBOARD_URL =
//   'https://www.masters.com/en_US/scores/feeds/2021/scores.json';

// export const getLeaderboard = async () => fetch(LEADERBOARD_URL);

export const getLeaderboard = async () => mockLeaderboardData;

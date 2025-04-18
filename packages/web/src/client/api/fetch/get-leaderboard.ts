const LEADERBOARD_URL = 'https://www.masters.com/en_US/scores/feeds/2025/scores.json';

export const getLeaderboard = async () => fetch(LEADERBOARD_URL);

// Used when the Masters URL isn't live yet
// export const getLeaderboard = async () => mockLeaderboardData;

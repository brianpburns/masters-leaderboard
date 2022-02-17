export const getHost = () =>
  process.env.NODE_ENV === 'production'
    ? 'https://augusta-masters-leaderboard.herokuapp.com'
    : 'http://localhost:8080';

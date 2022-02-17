export const getServerHost = () =>
  process.env.NODE_ENV === 'production'
    ? 'https://augusta-masters-leaderboard.herokuapp.com'
    : 'http://localhost:8080';

export const getUIHost = () =>
  process.env.NODE_ENV === 'production'
    ? 'https://augusta-masters-leaderboard.herokuapp.com'
    : 'http://localhost:8082';

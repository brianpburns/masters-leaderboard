import queryString from 'query-string';

export const googleConfig = {
  clientId: process.env.GOOGLE_CLIENT_ID,
  // clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  // redirect: 'http://localhost:5000/google-auth',
  redirect: 'http://localhost:8080/google-auth',
  // redirect: 'https://augusta-masters-leaderboard.herokuapp.com/google-auth',
};

export const defaultScope = [
  'https://www.googleapis.com/auth/userinfo.email',
  'https://www.googleapis.com/auth/userinfo.profile',
];

const stringifiedParams = queryString.stringify({
  client_id: googleConfig.clientId,
  redirect_uri: googleConfig.redirect,
  scope: defaultScope.join(' '), // space seperated string
  response_type: 'code',
  access_type: 'offline',
  prompt: 'consent',
});

export const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`;

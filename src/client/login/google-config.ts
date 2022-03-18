import queryString from 'query-string';
import { getServerHost } from 'src/shared';

const baseUri = getServerHost();

export const googleConfig = {
  clientId:
    '723926103233-g005d40jcth75hr0o09r088n2ug2cqv8.apps.googleusercontent.com',
  redirect: `${baseUri}/google-auth`,
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

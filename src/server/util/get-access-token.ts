import fetch from 'node-fetch';
import { getServerHost } from '../../shared';

export async function getAccessToken(code: string) {
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    body: JSON.stringify({
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: `${getServerHost()}/google-auth`,
      grant_type: 'authorization_code',
      code,
    }),
  });

  const { access_token }: { access_token: string } = await res.json();

  return access_token;
}

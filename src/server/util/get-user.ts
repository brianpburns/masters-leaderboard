import fetch from 'node-fetch';

export async function getGoogleUserId(accessToken: string) {
  const res = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
    method: 'get',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const { id }: { id: string } = await res.json();

  return id;
}

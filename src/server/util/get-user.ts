import fetch from 'node-fetch';

export async function getGoogleUser(accessToken: string) {
  const res = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
    method: 'get',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const {
    id,
    name,
    family_name,
  }: { id: string; name: string; family_name: string } = await res.json();

  return { id, name, familyName: family_name };
}

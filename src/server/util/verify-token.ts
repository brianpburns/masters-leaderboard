import { OAuth2Client, TokenPayload } from 'google-auth-library';

export const verifyToken = async (token: string) => {
  const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.GOOGLE_CLIENT_ID,
  });

  return ticket.getPayload() as TokenPayload;
};

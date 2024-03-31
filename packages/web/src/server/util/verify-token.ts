import { OAuth2Client, TokenPayload } from 'google-auth-library';

export const verifyToken = async (token: string) => {
  const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
  const webClientId = process.env.GOOGLE_WEB_CLIENT_ID as string;
  const iosClientId = process.env.GOOGLE_IOS_CLIENT_ID as string;

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: webClientId,
    });

    return ticket.getPayload() as TokenPayload;
  } catch {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: iosClientId,
    });

    return ticket.getPayload() as TokenPayload;
  }
};

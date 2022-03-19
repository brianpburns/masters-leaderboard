import asyncHandler from 'express-async-handler';
import { OAuth2Client } from 'google-auth-library';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export function googleAuthLogin() {
  return asyncHandler(async (req, res) => {
    const token = res.locals.token;

    console.log('googleAuthLogin token', token);

    if (!token) {
      res.status(401).send('Missing token');
      return;
    }

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();

    console.log('payload', payload);

    res.status(200).send(payload);
  });
}

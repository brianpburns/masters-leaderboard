import asyncHandler from 'express-async-handler';
import { getAccessToken } from '../util/get-access-token';

export function authCallback() {
  return asyncHandler(async (req, res) => {
    const code =
      typeof req.query.code === 'string'
        ? decodeURIComponent(req.query.code)
        : '';

    if (!code) {
      return res.status(403).send('Failed to complete OAuth flow');
    }

    const accessToken = await getAccessToken(code);

    res.status(200).send({ accessToken });
  });
}

import asyncHandler from 'express-async-handler';
import { getUIHost } from '../../shared';
import { TeamType } from '../../types';
import { Team } from '../masters-db';
import { getAccessToken } from '../util/get-access-token';
import { getGoogleUserId } from '../util/get-user';

export function authCallback() {
  return asyncHandler(async (req, res) => {
    const code =
      typeof req.query.code === 'string'
        ? decodeURIComponent(req.query.code)
        : '';

    if (!code) {
      res.status(403).send('Failed to complete OAuth flow');
    }

    const accessToken = await getAccessToken(code);
    const googleUserId = await getGoogleUserId(accessToken);

    const team = (await Team.findOne({
      where: { google_id: googleUserId },
    })) as unknown as TeamType;

    if (!team) {
      const newTeam = await Team.create({ google_id: googleUserId });
      return res
        .status(200)
        .redirect(`${getUIHost()}/team/${newTeam._attributes.id}`);
    } else {
      res.status(200).redirect(`${getUIHost()}/team/${team.id}`);
    }
  });
}

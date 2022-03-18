import asyncHandler from 'express-async-handler';
import { getUIHost } from '../../shared';
import { TeamType } from '../../types';
import { Team } from '../masters-db';
import { getAccessToken } from '../util/get-access-token';
import { getGoogleUser } from '../util/get-user';

export function authCallback() {
  return asyncHandler(async (req, res) => {
    const code = decodeURIComponent(req.query.code as string);

    if (!code) {
      res.status(403).send('Failed to complete OAuth flow');
    }

    const accessToken = await getAccessToken(code);

    if (!accessToken) {
      res.status(403).send('Failed to retrieve Google access token');
      return;
    }

    const { id, name, familyName } = await getGoogleUser(accessToken);

    const team = (await Team.findOne({
      where: { google_id: id },
    })) as unknown as TeamType;

    if (!team) {
      await Team.create({
        google_id: id,
        owner: name,
        name: `Team ${familyName}`,
        golfer_ids: [],
      });

      const newTeam = (await Team.findOne({
        where: { google_id: id },
      })) as unknown as TeamType;

      return res.status(200).redirect(`${getUIHost()}/team/${newTeam.id}`);
    } else {
      res.status(200).redirect(`${getUIHost()}/team/${team.id}`);
    }
  });
}

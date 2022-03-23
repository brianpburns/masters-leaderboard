import asyncHandler from 'express-async-handler';
import { Team as TeamType } from '../../types';
import { Team } from '../masters-db';
import { verifyToken } from '../util/verify-token';

export function getTeam() {
  return asyncHandler(async (req, res) => {
    const token = res.locals.token;

    if (!token) {
      res.status(401).send('Missing token');
      return;
    }

    const { sub } = await verifyToken(token);

    const team = (await Team.findOne({
      where: { google_id: sub },
    })) as unknown as TeamType;

    if (!team) {
      res.status(404).send('Team does not exist');
      return;
    }

    res.status(200).send(team);
  });
}

import asyncHandler from 'express-async-handler';
import { UpdateTeamRequestBody } from '../types';
import { Team } from '../masters-db';
import { verifyToken } from '../util/verify-token';

export function updateTeam() {
  return asyncHandler(async (req, res) => {
    const token = res.locals.token;
    const { owner, name, golfer_ids }: UpdateTeamRequestBody = req.body;

    if (!token) {
      res.status(401).send('Missing token');
      return;
    }

    const { sub } = await verifyToken(token);

    const team = await Team.update(
      { owner, name, golfer_ids },
      { where: { google_id: sub } }
    );

    res.status(200).send(team);
  });
}

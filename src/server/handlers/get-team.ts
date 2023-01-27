import asyncHandler from 'express-async-handler';
import { Team as TeamType } from '../../types';
import { Team } from '../db';
import { verifyToken } from '../util/verify-token';

export function getTeam() {
  return asyncHandler(async (_req, res) => {
    const token = res.locals.token;

    if (!token) {
      res.status(401).send('Missing token');
      return;
    }

    const { sub, name, family_name } = await verifyToken(token);

    const team = (await Team.findOne({
      where: { google_id: sub },
    })) as unknown as TeamType;

    try {
      if (!team) {
        await Team.create({
          google_id: sub,
          owner: name,
          name: `Team ${family_name}`,
          golfer_ids: [],
        });

        const newTeam = (await Team.findOne({
          where: { google_id: sub },
        })) as unknown as TeamType;

        res.status(201).send({ team: newTeam, new_team: true });
      }
    } catch (_err) {
      res.status(400).send('Failed create new team');
    }

    res.status(200).send({ team, new_team: false });
  });
}

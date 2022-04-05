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

    const { sub, name, family_name } = await verifyToken(token);

    const team = (await Team.findOne({
      where: { google_id: sub },
    })) as unknown as TeamType;

    if (!team) {
      if (process.env.SELECTION_PHASE === 'true') {
        await Team.create({
          google_id: sub,
          owner: name,
          name: `Team ${family_name}`,
          golfer_ids: [],
        });

        const newTeam = (await Team.findOne({
          where: { google_id: sub },
        })) as unknown as TeamType;

        res.status(200).send(newTeam);
        return;
      } else {
        res.status(404).send('Team not found');
        return;
      }
    }

    res.status(200).send(team);
  });
}

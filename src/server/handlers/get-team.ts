import asyncHandler from 'express-async-handler';
import { Team } from '../masters-db';

export function getTeam() {
  return asyncHandler(async (req, res) => {
    const { id } = req.params;

    const team = await Team.findByPk(id);

    if (!team) {
      res.status(404).send('Team does not exist');
      return;
    }

    res.status(200).send(team);
  });
}

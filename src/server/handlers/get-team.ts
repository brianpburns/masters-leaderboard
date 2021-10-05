import asyncHandler from 'express-async-handler';
import { Team } from '../masters-db';

export function getTeam() {
  return asyncHandler(async (req, res) => {
    const { id } = req.params;

    const team = await Team.findAll({ where: { id } });

    res.status(200).send(team);
  });
}

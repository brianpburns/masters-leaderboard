import asyncHandler from 'express-async-handler';
import { Team } from '../masters-db';

export function deleteTeam() {
  return asyncHandler(async (req, res) => {
    const { id } = req.params;

    await Team.destroy({ where: { id } });

    res.status(200).send();
  });
}

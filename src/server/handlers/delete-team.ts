import asyncHandler from 'express-async-handler';
import { Team } from '../db';

export function deleteTeam() {
  return asyncHandler(async (req, res) => {
    const { id } = req.params;

    await Team.destroy({ where: { id } });

    res.status(200).send();
  });
}

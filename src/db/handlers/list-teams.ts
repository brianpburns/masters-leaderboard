import * as asyncHandler from 'express-async-handler';
import { Team } from '../masters-db';

export function listTeams() {
  return asyncHandler(async (_req, res) => {
    const teams = await Team.findAll();

    res.status(200).send(teams);
  });
}

import asyncHandler from 'express-async-handler';
import { Team } from '../masters-db';

const isError = (error: unknown): error is Error =>
  (error as Error).message !== undefined;

export function listTeams() {
  return asyncHandler(async (_req, res) => {
    try {
      const teams = await Team.findAll();

      res.status(200).send(teams);
    } catch (error) {
      // DB table doesn't exist yet so create it
      if (isError(error) && error.name === 'SequelizeDatabaseError') {
        await Team.sync();
      }

      throw error;
    }
  });
}

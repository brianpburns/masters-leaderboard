import * as asyncHandler from 'express-async-handler';
import { UpdateTeamRequestBody } from 'src/types';
import { Team } from '../masters-db';

export function updateTeam() {
  return asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { name, golfer_ids }: UpdateTeamRequestBody = req.body;

    const team = await Team.update({ name, golfer_ids }, { where: { id } });

    res.status(200).send(team);
  });
}

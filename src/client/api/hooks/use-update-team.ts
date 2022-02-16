import { TeamType } from '../../../types';
import { updateTeam } from '../fetch/update-team';

export const useUpdateTeam = () => {
  const updateTeamDetails = async (team: TeamType) => {
    try {
      await updateTeam(team);
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(`Failed to update team. Error message: ${err.message}`);
      }
    }
  };

  return updateTeamDetails;
};

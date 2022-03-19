import { useRecoilValue } from 'recoil';
import { tokenState } from 'src/client/login/state/atoms';
import { TeamType } from '../../../types';
import { updateTeam } from '../fetch/update-team';

export const useUpdateTeam = () => {
  const token = useRecoilValue(tokenState);

  const updateTeamDetails = async (team: TeamType) => {
    try {
      await updateTeam(team, token);
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(`Failed to update team. Error message: ${err.message}`);
      }
    }
  };

  return updateTeamDetails;
};

import { useRecoilValue } from 'recoil';
import { tokenState } from 'src/client/login/state/atoms';
import { useSendAlert } from 'src/client/shared';
import { Team } from '../../../types';
import { updateTeam } from '../fetch/update-team';

export const useUpdateTeam = () => {
  const token = useRecoilValue(tokenState);
  const sendAlert = useSendAlert();

  const updateTeamDetails = async (team: Team) => {
    try {
      await updateTeam(team, token);
      sendAlert('Save Success', 'success');
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(`Failed to update team. Error message: ${err.message}`);
      }
    }
  };

  return updateTeamDetails;
};

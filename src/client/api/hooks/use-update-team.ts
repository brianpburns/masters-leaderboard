import { useSendAlert } from 'src/client/shared';
import { useAuthToken } from 'src/client/store';
import { Team } from '../../../types';
import { updateTeam } from '../fetch/update-team';

export const useUpdateTeam = () => {
  const { authToken } = useAuthToken();
  const sendAlert = useSendAlert();

  const updateTeamDetails = async (team: Team) => {
    try {
      await updateTeam(team, authToken);
      const picksRemaining = 10 - team.golfer_ids.length;
      const picksMessage =
        picksRemaining > 0
          ? ` ${picksRemaining} pick${picksRemaining > 1 ? 's' : ''} left.`
          : '';
      sendAlert(`Save Success. ${picksMessage}`, 'success');
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(`Failed to update team. Error message: ${err.message}`);
      }
    }
  };

  return updateTeamDetails;
};

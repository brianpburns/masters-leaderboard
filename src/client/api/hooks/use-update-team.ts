import { useSendAlert } from 'src/client/features/shared';
import { useAuthToken } from 'src/client/store';
import { Team } from '../../../types';
import { updateTeam } from '../fetch/update-team';

const generateMessage = (picksRemaining: number) => {
  if (picksRemaining > 0) {
    return ` ${picksRemaining} pick${picksRemaining > 1 ? 's' : ''} left.`;
  }

  return '';
};

export const useUpdateTeam = () => {
  const { authToken } = useAuthToken();
  const sendAlert = useSendAlert();

  const updateTeamDetails = async (team: Team) => {
    try {
      await updateTeam(team, authToken);
      const picksMessage = generateMessage(10 - team.golfer_ids.length);

      sendAlert(`Save Success. ${picksMessage}`, 'success');
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(`Failed to update team. Error message: ${err.message}`);
      }
    }
  };

  return updateTeamDetails;
};

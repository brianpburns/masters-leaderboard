import { useSendAlert } from 'src/client/features/shared';
import { TeamState } from 'src/client/features/team';
import { useAuthToken } from 'src/client/store';
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

  const updateTeamDetails = async (team: TeamState) => {
    const { golferIds, ...rest } = team;
    try {
      await updateTeam({ golfer_ids: golferIds, ...rest }, authToken);
      const picksMessage = generateMessage(10 - golferIds.length);

      sendAlert(`Save Success. ${picksMessage}`, 'success');
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(`Failed to update team. Error message: ${err.message}`);
      }
    }
  };

  return updateTeamDetails;
};

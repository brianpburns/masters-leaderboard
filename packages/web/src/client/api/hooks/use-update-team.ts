import { useSelector } from 'react-redux';
import { useSendAlert } from 'src/client/features/shared';
import { TeamState } from 'src/client/features/team-page';
import { selectAuthToken } from 'src/client/store';
import { updateTeam } from '../fetch/update-team';

const generateMessage = (picksRemaining: number) => {
  if (picksRemaining < 0) return '';

  return ` ${picksRemaining} pick${picksRemaining > 1 ? 's' : ''} left.`;
};

export const useUpdateTeam = () => {
  const authToken = useSelector(selectAuthToken);
  const sendAlert = useSendAlert();

  const updateTeamDetails = async (team: TeamState) => {
    if (!authToken) return;

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

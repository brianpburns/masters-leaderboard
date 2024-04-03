import { useSelector } from 'react-redux';
import { selectAuthToken } from 'src/store';
import { selectCurrentTeam } from 'src/team-page/state/selectors';
import { updateTeam } from '../fetch/update-team';

export const useUpdateTeam = () => {
  const currentTeam = useSelector(selectCurrentTeam);
  const authToken = useSelector(selectAuthToken);

  return async () => {
    if (!authToken) return;

    const { golferIds, ...rest } = currentTeam;
    try {
      await updateTeam({ golfer_ids: golferIds, ...rest }, authToken);
      // const picksMessage = generateMessage(10 - golferIds.length);

      // sendAlert(`Save Success. ${picksMessage}`, 'success');
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(`Failed to update team. Error message: ${err.message}`);
      }
    }
  };
};

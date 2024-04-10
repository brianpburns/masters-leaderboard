import { useSelector } from 'react-redux';
import { selectAuthToken } from 'src/store';
import { selectCurrentTeam } from 'src/team-page/state/selectors';
import { updateTeam } from '../fetch/update-team';

export const useUpdateTeam = () => {
  const currentTeam = useSelector(selectCurrentTeam);
  const authToken = useSelector(selectAuthToken);

  const addGolferApi = async (id: string) => {
    if (!authToken) return;

    const { golferIds, ...rest } = currentTeam;
    const newGolferIds = [...golferIds.filter((gid) => gid !== parseInt(id)), parseInt(id)];

    try {
      await updateTeam({ golfer_ids: newGolferIds, ...rest }, authToken);
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(`Failed to add golfer to team. Error message: ${err.message}`);
      }
    }
  };

  const removeGolferApi = async (id: string) => {
    if (!authToken) return;

    const { golferIds, ...rest } = currentTeam;
    const newGolferIds = golferIds.filter((gid) => gid !== parseInt(id));

    try {
      await updateTeam({ golfer_ids: newGolferIds, ...rest }, authToken);
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(`Failed to add golfer to team. Error message: ${err.message}`);
      }
    }
  };

  return {
    addGolferApi,
    removeGolferApi,
  };
};

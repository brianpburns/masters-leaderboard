import { useHistory } from 'react-router-dom';
import { useDeleteTeamMutation } from '../api-slice';

export const useDeleteTeam = () => {
  const history = useHistory();
  const [deleteTeam] = useDeleteTeamMutation();

  const deleteTeamDetails = async (id: number) => {
    try {
      await deleteTeam(id);
      history.push('/leaderboard');
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(`Failed to delete team. Error message: ${err.message}`);
      }
    }
  };

  return deleteTeamDetails;
};

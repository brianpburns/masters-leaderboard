import { useHistory } from 'react-router-dom';
import { deleteTeam } from '../fetch/delete-team';

export const useDeleteTeam = () => {
  const history = useHistory();

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

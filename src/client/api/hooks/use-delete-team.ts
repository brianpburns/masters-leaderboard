import { useLogout } from 'src/client/features/login';
import { useDeleteTeamMutation } from '../api-slice';

export const useDeleteTeam = () => {
  const [deleteTeam] = useDeleteTeamMutation();
  const logout = useLogout();

  return async (id: number) => {
    try {
      logout();
      await deleteTeam(id);
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(`Failed to delete team. Error message: ${err.message}`);
      }
    }
  };
};

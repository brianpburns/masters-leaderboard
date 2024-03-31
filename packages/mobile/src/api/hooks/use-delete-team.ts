import { useLogout } from 'src/login/hooks/use-logout';
import { useDeleteTeamMutation } from '../state/api-slice';

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

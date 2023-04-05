import { useEffect, useState } from 'react';
import { useTeamState } from 'src/client/features/leaderboard/state/hooks';
import { useSendAlert } from 'src/client/features/shared';
import { Team } from 'src/types';
import { listTeams } from '../fetch/list-teams';

export const useLoadTeams = () => {
  const setTeams = useTeamState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const sendAlert = useSendAlert();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const teamsData: Team[] = await listTeams();
        setTeams(teamsData);
        setLoading(false);
      } catch (err) {
        sendAlert('Failed to load team', 'error');
        setError(true);
        if (err instanceof Error) {
          throw new Error(
            `Failed to retrieve teams. Error message: ${err.message}`
          );
        }
      }
    };

    fetchData();
  }, [sendAlert, setTeams]);

  return { loading, error };
};

import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useSendAlert } from 'src/client/shared';
import { Team } from 'src/types';
import { listTeams } from '../fetch/list-teams';
import { teamsState } from '../state/atoms';

export const useLoadTeams = () => {
  const setTeams = useSetRecoilState(teamsState);
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

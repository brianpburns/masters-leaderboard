import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { useSendAlert } from 'src/client/shared';
import { useAuthToken } from 'src/client/store';
import { teamState } from '../../team/state/selectors';
import { getTeam } from '../fetch/get-team';

export const useGetTeam = () => {
  const setTeamData = useSetRecoilState(teamState);
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const sendAlert = useSendAlert();
  const { authToken } = useAuthToken();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const teamData = await getTeam(authToken);
        setTeamData(teamData);
        setLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          history.push('/leaderboard');
          sendAlert('Failed to retrieve team', 'error', 5000);
        }
      }
    };

    fetchData();
  }, [history, sendAlert, setTeamData, authToken]);

  return { loading };
};

import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { tokenState } from 'src/client/login/state/atoms';
import { useSendAlert } from 'src/client/shared';
import { teamState } from '../../team/state/selectors';
import { getTeam } from '../fetch/get-team';

export const useGetTeam = () => {
  const token = useRecoilValue(tokenState);
  const setTeamData = useSetRecoilState(teamState);
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const sendAlert = useSendAlert();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const teamData = await getTeam(token);
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
  }, [history, sendAlert, setTeamData, token]);

  return { loading };
};

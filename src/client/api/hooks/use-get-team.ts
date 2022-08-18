import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { useSendAlert } from 'src/client/features/shared';
import { useAuthToken } from 'src/client/store';
import { teamState } from '../../features/team/state/selectors';
import { useGetTeamQuery } from '../api-slice';

export const useGetTeam = () => {
  const setTeamData = useSetRecoilState(teamState);
  const { authToken } = useAuthToken();
  const history = useHistory();
  const sendAlert = useSendAlert();
  const { data, isFetching, isSuccess, isError } = useGetTeamQuery(authToken);

  useEffect(() => {
    if (isSuccess) {
      setTeamData(data);
    }
  }, [isSuccess, setTeamData, data]);

  useEffect(() => {
    if (isError) {
      history.push('/leaderboard');
      sendAlert('Failed to retrieve team', 'error', 5000);
    }
  }, [history, isError, sendAlert]);

  return { isFetching, data, isSuccess };
};

import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSendAlert } from 'src/client/features/shared';
import { useSetCurrentTeam } from 'src/client/features/team/state/hooks';
import { useAuthToken } from 'src/client/store';
import { useGetTeamQuery } from '../api-slice';

export const useGetTeam = () => {
  const { setCurrentTeam } = useSetCurrentTeam();
  const { authToken } = useAuthToken();
  const history = useHistory();
  const sendAlert = useSendAlert();
  const { data, isFetching, isSuccess, isError } = useGetTeamQuery(authToken);

  useEffect(() => {
    if (isSuccess) {
      const { golfer_ids, ...rest } = data;

      setCurrentTeam({ golferIds: golfer_ids, savedRef: golfer_ids, ...rest });
    }
  }, [isSuccess, data, setCurrentTeam]);

  useEffect(() => {
    if (isError) {
      history.push('/leaderboard');
      sendAlert('Failed to retrieve team', 'error', 5000);
    }
  }, [history, isError, sendAlert]);

  return { isFetching, data, isSuccess };
};

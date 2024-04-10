import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useSendAlert } from 'src/client/features/shared';
import { setIsNewTeam } from 'src/client/features/team-page/state/current-team-slice';
import { useSetCurrentTeam } from 'src/client/features/team-page/state/hooks';
import { selectAuthToken } from 'src/client/store';
import { selectCurrentTeam } from '../../features/team-page/state/selectors';
import { getTeam } from '../fetch/get-team';

export const useGetTeam = () => {
  const currentTeam = useSelector(selectCurrentTeam);
  const { setCurrentTeam } = useSetCurrentTeam();
  const [loading, setLoading] = useState(true);
  const authToken = useSelector(selectAuthToken);
  const history = useHistory();
  const sendAlert = useSendAlert();

  const fetchTeam = async () => {
    if (!authToken) {
      setLoading(false);
      return;
    }

    setLoading(true);

    try {
      const { team, new_team } = await getTeam(authToken);
      const { golfer_ids, ...rest } = team;

      setCurrentTeam({
        ...rest,
        golferIds: golfer_ids,
        savedRef: golfer_ids,
      });
      setIsNewTeam(new_team);

      setLoading(false);
    } catch (err) {
      history.push('/leaderboard');
      sendAlert('Failed to retrieve team', 'error', 5000);
    }
  };

  return { loading, fetchTeam, currentTeam };
};

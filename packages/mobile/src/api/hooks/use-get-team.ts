import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAuthToken } from 'src/store';
import { setIsNewTeam } from 'src/team-page/state/current-team-slice';
import { useSetCurrentTeam } from 'src/team-page/state/hooks';
import { selectCurrentTeam } from 'src/team-page/state/selectors';
import { getTeam } from '../fetch/get-team';
// import { useSendAlert } from 'src/client/features/shared';

export const useGetTeam = () => {
  const currentTeam = useSelector(selectCurrentTeam);
  const { setCurrentTeam } = useSetCurrentTeam();
  const [loading, setLoading] = useState(true);
  const authToken = useSelector(selectAuthToken);
  // const sendAlert = useSendAlert();

  const fetchTeam = async () => {
    console.log('fetchTeam');
    if (!authToken) {
      setLoading(false);
      return;
    }

    setLoading(true);

    try {
      const { team, new_team } = await getTeam(authToken);
      const { golfer_ids, ...rest } = team;

      console.log('setCurrentTeam', {
        ...rest,
        golferIds: golfer_ids,
        savedRef: golfer_ids,
      });

      setCurrentTeam({
        ...rest,
        golferIds: golfer_ids,
        savedRef: golfer_ids,
      });
      setIsNewTeam(new_team);

      setLoading(false);
    } catch (err) {
      console.log('err', err);
      // router.replace('/leaderboard');
      // sendAlert('Failed to retrieve team', 'error', 5000);
    }
  };

  return { loading, fetchTeam, currentTeam };
};

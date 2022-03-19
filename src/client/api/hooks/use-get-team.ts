import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { tokenState } from 'src/client/login/state/atoms';
import { teamState } from '../../team/state/selectors';
import { getTeam } from '../fetch/get-team';

export const useGetTeam = () => {
  const token = useRecoilValue(tokenState);
  const setTeamData = useSetRecoilState(teamState);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const teamData = await getTeam(token);
        setTeamData(teamData);
      } catch (err) {
        if (err instanceof Error) {
          history.push('/leaderboard');
          throw new Error(
            `Failed to retrieve team. Error message: ${err.message}`
          );
        }
      }
    };

    fetchData();
  }, [history, setTeamData, token]);
};

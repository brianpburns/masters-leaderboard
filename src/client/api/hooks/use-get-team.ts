import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { tokenState } from 'src/client/login/state/atoms';
import { teamState } from '../../team/state/selectors';
import { getTeam } from '../fetch/get-team';

export const useGetTeam = () => {
  const token = useRecoilValue(tokenState);
  const setTeamData = useSetRecoilState(teamState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const teamData = await getTeam(token);
        setTeamData(teamData);
        setLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          throw new Error(
            `Failed to retrieve team. Error message: ${err.message}`
          );
        }
      }
    };

    fetchData();
  }, [setTeamData, token]);

  return { loading };
};

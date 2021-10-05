import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { teamState } from '../../team/state/selectors';
import { getTeam } from '../fetch/get-team';

export const useGetTeam = (id: number) => {
  console.log('useGetTeam');

  const setTeamData = useSetRecoilState(teamState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const team = await getTeam(id);

        console.log('team', team);

        setTeamData(team);
      } catch (err) {
        if (err instanceof Error) {
          throw new Error(
            `Failed to retrieve team. Error message: ${err.message}`
          );
        }
      }
    };

    fetchData();
  }, []);
};

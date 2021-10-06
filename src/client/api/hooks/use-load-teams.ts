import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { listTeams } from '../fetch/list-teams';
import { teamsState } from '../state/atoms';

export const useLoadTeams = () => {
  const setTeams = useSetRecoilState(teamsState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const teams = await listTeams();

        console.log('teams', teams);

        setTeams(teams);
      } catch (err) {
        if (err instanceof Error) {
          throw new Error(
            `Failed to retrieve teams. Error message: ${err.message}`
          );
        }
      }
    };

    fetchData();
  }, [setTeams]);
};

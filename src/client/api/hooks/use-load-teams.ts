import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { listTeams } from '../fetch/list-teams';
import { teamsState } from '../state/atoms';

export const useLoadTeams = () => {
  const [teams, setTeams] = useRecoilState(teamsState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const teamsData = await listTeams();
        setTeams(teamsData);
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

  return teams;
};

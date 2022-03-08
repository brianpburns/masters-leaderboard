import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { TeamType } from 'src/types';
import { listTeams } from '../fetch/list-teams';
import { teamsState } from '../state/atoms';

export const useLoadTeams = () => {
  const setTeams = useSetRecoilState(teamsState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const teamsData: TeamType[] = await listTeams();
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
};

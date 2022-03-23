import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { Team } from 'src/types';
import { listTeams } from '../fetch/list-teams';
import { teamsState } from '../state/atoms';

export const useLoadTeams = () => {
  const setTeams = useSetRecoilState(teamsState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const teamsData: Team[] = await listTeams();
        setTeams(teamsData);
        setLoading(false);
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

  return { loading };
};

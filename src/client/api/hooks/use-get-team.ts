import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { teamState } from '../../team/state/selectors';
import { getTeam } from '../fetch/get-team';

export const useGetTeam = (id: number) => {
  const setTeamData = useSetRecoilState(teamState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { golfer_ids, ...rest } = await getTeam(id);

        setTeamData({ ...rest, golferIds: golfer_ids });
      } catch (err) {
        if (err instanceof Error) {
          throw new Error(
            `Failed to retrieve team. Error message: ${err.message}`
          );
        }
      }
    };

    fetchData();
  }, [id, setTeamData]);
};

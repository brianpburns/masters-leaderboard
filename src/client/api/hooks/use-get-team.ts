import { useEffect, useState } from 'react';
import { Team } from '../../../types';
import { getTeam } from '../fetch/get-team';

export const useGetTeam = (id: number): Team => {
  const [team, setTeam] = useState<Team>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setTeam(await getTeam(id));
      } catch (err) {
        if (err instanceof Error) {
          throw new Error(
            `Failed to retrieve team. Error message: ${err.message}`
          );
        }
      }
    };

    fetchData();
  });

  return team;
};

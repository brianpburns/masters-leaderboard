import React, { useEffect } from 'react';
import { useGetTeam } from 'src/client/api';
import { Loader } from 'src/client/features/shared';
import { AvailableGolfersList } from './available-golfers-list';
import { TeamSectionContainer } from './team-section-container';

interface Props {
  selectionPhase: boolean;
}

export const TeamContent = ({ selectionPhase }: Props) => {
  const { loading, fetchTeam } = useGetTeam();

  useEffect(() => {
    const fetchData = async () => fetchTeam();

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Loader open={loading} />
      {selectionPhase && <AvailableGolfersList />}
      <TeamSectionContainer />
    </>
  );
};

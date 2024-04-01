import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { useGetTeam } from 'src/api/hooks/use-get-team';
import { HeroImage } from 'src/shared/components/hero-image';
import { Loader } from 'src/shared/components/loader';
import { useManageGolfers } from 'src/shared/hooks/use-manage-golfers';
import { selectPhaseSelection } from 'src/store';
import { AvailableGolfersList } from './available-golfers';
import { SelectedTeam } from './selected-team';

export const TeamPage = () => {
  const selectionPhase = useSelector(selectPhaseSelection);
  const { loading, fetchTeam } = useGetTeam();
  const { selectedGolfers } = useManageGolfers();

  useEffect(() => {
    fetchTeam();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      {!selectionPhase && <HeroImage />}
      <View>
        <>
          <SelectedTeam selectedGolfers={selectedGolfers} />
          <Text>{`Team Page, selection phase: ${selectionPhase}`}</Text>
          {selectionPhase && <AvailableGolfersList />}
        </>
      </View>
    </>
  );
};

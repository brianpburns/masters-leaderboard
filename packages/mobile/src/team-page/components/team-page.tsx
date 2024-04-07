import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { useGetTeam } from 'src/api/hooks/use-get-team';
import { HeroImage } from 'src/shared/components/hero-image';
import { Loader } from 'src/shared/components/loader';
import { useManageGolfers } from 'src/shared/hooks/use-manage-golfers';
import { selectPhaseSelection } from 'src/store';
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
    <ScrollView>
      <HeroImage />
      <SelectedTeam selectedGolfers={selectedGolfers} />
      {selectionPhase && (
        <Text>
          Requirements: {'\n'} - 10 players.{'\n'} - Max 4 top 10.{'\n'} - 1 rookie.{'\n'} - 1 amateur
        </Text>
      )}
    </ScrollView>
  );
};

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { useUpdateTeam } from 'src/api/hooks/use-update-team';
import { PressIcon } from 'src/shared/components/press-icon';
import { useManageGolfers } from 'src/shared/hooks/use-manage-golfers';
import { selectPhaseSelection } from 'src/store';
import { Player } from 'src/types';

interface Props {
  selectedView: boolean;
  addDisabled: boolean;
  golfer: Player;
}

export const AddRemoveButton = ({ selectedView, golfer, addDisabled }: Props) => {
  const selectionPhase = useSelector(selectPhaseSelection);
  const { addGolfer, removeGolfer } = useManageGolfers();
  const updateTeamDetails = useUpdateTeam();

  return (
    <View style={styles.iconsWrapper}>
      {selectedView && selectionPhase && (
        <PressIcon
          onPress={() => {
            removeGolfer(parseInt(golfer.id));
            updateTeamDetails();
          }}
          name="minus-square-o"
          color="red"
        />
      )}
      {!selectedView && (
        <PressIcon
          onPress={() => {
            addGolfer(parseInt(golfer.id));
            updateTeamDetails();
          }}
          disabled={addDisabled}
          name="plus-square-o"
          color="green"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  iconsWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
});

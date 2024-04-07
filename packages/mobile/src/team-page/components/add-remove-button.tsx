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
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export const AddRemoveButton = ({ selectedView, golfer, addDisabled, loading, setLoading }: Props) => {
  const selectionPhase = useSelector(selectPhaseSelection);
  const { addGolfer, removeGolfer } = useManageGolfers();
  const updateTeamDetails = useUpdateTeam();
  const addColor = loading ? 'gray' : 'green';
  const removeColor = loading ? 'gray' : 'red';

  const handleRemove = () => {
    setLoading(true);
    removeGolfer(parseInt(golfer.id));
    updateTeamDetails();
    setLoading(false);
  };

  const handleAdd = () => {
    setLoading(true);
    addGolfer(parseInt(golfer.id));
    updateTeamDetails();
    setLoading(false);
  };

  return (
    <View style={styles.iconsWrapper}>
      {selectedView && selectionPhase && (
        <PressIcon onPress={handleRemove} name="minus-square-o" color={removeColor} disabled={loading} />
      )}
      {!selectedView && (
        <PressIcon onPress={handleAdd} disabled={addDisabled || loading} name="plus-square-o" color={addColor} />
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

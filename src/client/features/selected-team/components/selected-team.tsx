import React from 'react';
import { useSelector } from 'react-redux';
import { useGetGolferData } from 'src/client/data/hooks/use-get-golfer-data';
import { selectPhaseSelection } from 'src/client/store';
import { useManageGolfers } from '../shared/hooks/use-manage-golfers';
import { GolfersListItem } from '../team/components/golfers-list-item';
import { StyledGolfersList, TeamContainer } from '../team/components/styled';
import { Name } from './name';
import { SelectionControls } from './selection-controls';

export const SelectedTeam = () => {
  const { getGolfersData } = useGetGolferData();
  const { selectedGolfers, removeGolfer } = useManageGolfers();
  const { golfers } = getGolfersData(selectedGolfers);
  const selectionPhase = useSelector(selectPhaseSelection);

  return (
    <TeamContainer>
      <Name />
      <StyledGolfersList data-testid='selected-golfers-list'>
        {golfers.map((g) => (
          <GolfersListItem
            key={g.id}
            golfer={g}
            availableView={false}
            onIconClick={removeGolfer}
          />
        ))}
      </StyledGolfersList>
      {selectionPhase && <SelectionControls />}
    </TeamContainer>
  );
};

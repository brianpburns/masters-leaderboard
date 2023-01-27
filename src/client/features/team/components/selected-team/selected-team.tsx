import React from 'react';
import { useSelector } from 'react-redux';
import { useGetGolferData } from 'src/client/data/hooks/use-get-golfer-data';
import { selectPhaseSelection } from 'src/client/store';
import { useManageGolfers } from '../../hooks/use-manage-golfers';
import { GolfersListItem } from '../golfers-list-item';
import { StyledGolfersList, TeamContainer } from '../styled';
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

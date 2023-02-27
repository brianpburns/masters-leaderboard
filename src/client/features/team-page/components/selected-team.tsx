import React from 'react';
import { useSelector } from 'react-redux';
import { useGetGolferData } from 'src/client/data/hooks/use-get-golfer-data';
import { selectPhaseSelection } from 'src/client/store';
import { StyledGolfersList } from '../../available-golfers/components/styled';
import { GolfersListItem, useManageGolfers } from '../../shared';
import { Name } from './name';
import { SelectionControls } from './selection-controls';
import { TeamContainer } from './styled';

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

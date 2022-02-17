import React from 'react';
import AddIcon from '@material-ui/icons/Add';

import { useManageGolfers } from '../hooks/use-manage-golfers';
import {
  GolfersListContainer,
  GolferListItem,
  StyledIcon,
  StyledGolfersList,
  SearchBar,
} from './styled';
import { Icon } from 'src/client/shared';

export const GolfersList = () => {
  const { availableGolfers, addGolfer } = useManageGolfers();

  return (
    <GolfersListContainer>
      <SearchBar>
        <div>Search</div>
      </SearchBar>
      <StyledGolfersList>
        {availableGolfers.map((golfer, i) => (
          <GolferListItem key={i}>
            {golfer.name}
            <StyledIcon
              onClick={() => addGolfer(golfer.id)}
              data-testid='add-golfer'
            >
              <Icon color='black'>
                <AddIcon fontSize='small' />
              </Icon>
            </StyledIcon>
          </GolferListItem>
        ))}
      </StyledGolfersList>
    </GolfersListContainer>
  );
};

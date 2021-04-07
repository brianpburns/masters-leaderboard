import React from 'react';
import styled from 'styled-components';
import RemoveIcon from '@material-ui/icons/Remove';

import { GolferData } from '../../types';

interface Props {
  selectedGolfers: GolferData[];
  removeGolfer: (golfer: GolferData) => void;
}

const StyledGolfer = styled.div`
  display: flex;
  padding-left: 5px;
  background-color: green;
  color: white;
`;

const StyledIcon = styled.div`
  margin-left: 5px;
`;

export const TeamList = ({ selectedGolfers, removeGolfer }: Props) => (
  <>
    {selectedGolfers.map((golfer, i) => (
      <StyledGolfer key={i}>
        {golfer.name}
        <StyledIcon
          onClick={() => removeGolfer(golfer)}
          data-testid='remove-golfer'
        >
          <RemoveIcon fontSize='small' />
        </StyledIcon>
      </StyledGolfer>
    ))}
  </>
);

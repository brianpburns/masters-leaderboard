import React from 'react';
import styled from 'styled-components';
import RemoveIcon from '@material-ui/icons/Remove';

import { useSelectedGolfers } from '../hooks/useSelectedGolfers';
import { useRecoilValue } from 'recoil';
import { selectedGolfersState } from '../state/selectors';

const StyledTeamList = styled.div`
  background-color: white;
  margin-left: 15px;
  max-width: 400px;
  width: 100%;
  height: 100px;
  border-radius: 10px;
`;

const StyledGolfer = styled.div`
  display: flex;
  padding-left: 5px;
  background-color: green;
  color: white;
`;

const StyledIcon = styled.div`
  margin-left: 5px;
`;

export const TeamList = () => {
  const selectedGolfers = useRecoilValue(selectedGolfersState);
  const { removeGolfer } = useSelectedGolfers();

  return (
    <StyledTeamList>
      {selectedGolfers.map((golfer, i) => (
        <StyledGolfer key={i}>
          {golfer.name}
          <StyledIcon onClick={() => removeGolfer(golfer)}>
            <RemoveIcon fontSize="small" />
          </StyledIcon>
        </StyledGolfer>
      ))}
    </StyledTeamList>
  );
};

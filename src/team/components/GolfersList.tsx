import React from 'react';
import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';

import { useRecoilValue } from 'recoil';
import { availableGolfersState } from '../state/selectors';
import { useSelectedGolfers } from '../hooks/useSelectedGolfers';

const Container = styled.div`
  background-color: white;
  width: 100%;
  border-radius: 10px;
  padding: 10px;
`;

const StyledTopBar = styled.div`
  background-color: red;
  width: 100%;
`;

const StyledList = styled.div`
  background-color: blue;
  padding: 5px;
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

export const GolfersList = () => {
  const availableGolfers = useRecoilValue(availableGolfersState);
  const { addGolfer } = useSelectedGolfers();

  return (
    <Container>
      <StyledTopBar>
        <div>Search</div>
      </StyledTopBar>
      <StyledList>
        {availableGolfers.map((golfer, i) => (
          <StyledGolfer key={i}>
            {golfer.name}
            <StyledIcon onClick={() => addGolfer(golfer)}>
              <AddIcon fontSize="small" />
            </StyledIcon>
          </StyledGolfer>
        ))}
      </StyledList>
    </Container>
  );
};

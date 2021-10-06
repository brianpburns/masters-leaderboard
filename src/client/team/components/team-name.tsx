import React from 'react';
import styled from 'styled-components';

import EditIcon from '@material-ui/icons/Edit';

interface Props {
  teamName: string;
  setEditMode: (isEditMode: boolean) => void;
}

const StyledName = styled.div``;

export const TeamName = ({ teamName, setEditMode }: Props) => {
  return (
    <>
      <StyledName>
        {teamName}
        <EditIcon
          fontSize='small'
          onClick={() => setEditMode(true)}
          data-testid='edit-name-btn'
        />
      </StyledName>
    </>
  );
};

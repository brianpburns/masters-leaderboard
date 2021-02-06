import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { golfersState } from '../../app';
import { teamsState } from '../../app/atoms';

import { GolfersList } from './GolfersList';
import { TeamList } from './TeamList';

const Container = styled.div`
  padding: 25px;
  height: 100vh;
  display: flex;
`;

export const TeamPage = () => {
  const allGolfers = useRecoilValue(golfersState);
  const [teams, setTeams] = useRecoilState(teamsState);
  const teamsGolfers = teams['0'].golfers;

  const updateGolfers = (golferIds: string[]) => {
    setTeams({ ...teams, '0': { ...teams['0'], golfers: golferIds } });
  };

  return (
    <Container>
      <GolfersList
        allGolfers={allGolfers}
        selectedGolferIds={teamsGolfers}
        updateGolfers={updateGolfers}
      />
      <TeamList
        allGolfers={allGolfers}
        selectedGolferIds={teamsGolfers}
        updateGolfers={updateGolfers}
      />
    </Container>
  );
};

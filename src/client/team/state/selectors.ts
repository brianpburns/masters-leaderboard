import { DefaultValue, selector } from 'recoil';
import { golfersState } from '../../app';

import { GolferData } from '../../../types';

import { Team } from '../types';
import { activeTeamIdState, allTeamsState } from './atoms';

export const activeTeamState = selector<Team>({
  key: '@team/activeTeamState',
  get: ({ get }) => {
    const activeTeam = get(activeTeamIdState);
    const teams = get(allTeamsState);
    return { ...teams[activeTeam] };
  },
  set: ({ get, set }, newActiveTeamState) => {
    if (newActiveTeamState instanceof DefaultValue) return;
    const oldState = get(allTeamsState);
    const activeTeamId = get(activeTeamIdState);
    const newState = {
      ...oldState,
      [activeTeamId]: newActiveTeamState,
    };

    set(allTeamsState, newState);
  },
});

export const selectedGolfersState = selector<GolferData[]>({
  key: '@team/selectedGolfers',
  get: ({ get }) => {
    const allGolfers = get(golfersState);
    const { selectedGolferIds } = get(activeTeamState);
    return Object.values(allGolfers).filter((golfer) =>
      selectedGolferIds.includes(golfer.id)
    );
  },
  set: ({ get, set }, newSelectedGolfers) => {
    if (newSelectedGolfers instanceof DefaultValue) return;
    const activeTeam = get(activeTeamState);
    const newSelectedGolferIds = newSelectedGolfers.map((golfer) => golfer.id);
    set(activeTeamState, {
      ...activeTeam,
      selectedGolferIds: newSelectedGolferIds,
    });
  },
});

export const availableGolfersState = selector<GolferData[]>({
  key: '@team/availableGolfers',
  get: ({ get }) => {
    const allGolfers = get(golfersState);
    const { selectedGolferIds } = get(activeTeamState);
    return Object.values(allGolfers).filter(
      (golfer) => !selectedGolferIds.includes(golfer.id)
    );
  },
});

export const teamNameState = selector<string>({
  key: '@team/name',
  get: ({ get }) => {
    const { teamName } = get(activeTeamState);
    return teamName;
  },
  set: ({ get, set }, newName) => {
    if (newName instanceof DefaultValue) return;
    const oldState = get(activeTeamState);
    set(activeTeamState, { ...oldState, teamName: newName });
  },
});

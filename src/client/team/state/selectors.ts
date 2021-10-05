import { DefaultValue, selector } from 'recoil';

import { Team } from '../../../types';

import {
  teamIdState,
  teamOwnerState,
  teamGolfersIdsState,
  teamNameState,
} from './atoms';

export const teamState = selector<Team>({
  key: '@team/activeTeamState',
  get: ({ get }) => {
    const id = get(teamIdState);
    const owner = get(teamOwnerState);
    const name = get(teamNameState);
    const golferIds = get(teamGolfersIdsState);

    return { id, owner, name, golferIds };
  },
  set: ({ set }, newActiveTeamState) => {
    if (newActiveTeamState instanceof DefaultValue) return;

    const { id, owner, name, golferIds } = newActiveTeamState;

    set(teamIdState, id);
    set(teamOwnerState, owner);
    set(teamNameState, name);
    set(teamGolfersIdsState, golferIds);
  },
});

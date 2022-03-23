import { DefaultValue, selector } from 'recoil';

import { Team } from '../../../types';

import {
  teamIdState,
  teamOwnerState,
  teamGolfersIdsState,
  teamNameState,
  savedGolfersIdsRefState,
} from './atoms';

export const teamState = selector<Team>({
  key: '@team/activeTeamState',
  get: ({ get }) => {
    const id = get(teamIdState);
    const owner = get(teamOwnerState);
    const name = get(teamNameState);
    const golfer_ids = get(teamGolfersIdsState);

    return { id, owner, name, golfer_ids };
  },
  set: ({ set }, newActiveTeamState) => {
    if (newActiveTeamState instanceof DefaultValue) return;

    const { id, owner, name, golfer_ids } = newActiveTeamState;

    set(teamIdState, id);
    set(teamOwnerState, owner);
    set(teamNameState, name);
    set(teamGolfersIdsState, golfer_ids);
    set(savedGolfersIdsRefState, golfer_ids);
  },
});

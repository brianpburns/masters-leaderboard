import { recoilHookTestWrapper } from 'src/client/__test__';
import { useSortedGolfers } from './use-sorted-golfers';

import { golfersState } from 'src/client/app';

const mockGolfersData = {
  1226: {
    id: 1226,
    name: 'Fred Couples',
    position: 10,
    topar: 13,
    thru: '-',
    today: '-',
    teetime: '',
  },
  21528: {
    id: 21528,
    name: 'Henrik Stenson',
    position: 38,
    topar: 3,
    thru: 'F',
    today: '+4',
    teetime: '1:30 PM',
  },
};

const mockTeam = {
  id: 0,
  owner: 'Logan',
  name: 'Team Logan',
  golfer_ids: [21528, 1226],
  google_id: '',
};

const renderHook = () =>
  recoilHookTestWrapper(
    () => useSortedGolfers(mockTeam),
    ({ set }) => {
      set(golfersState, mockGolfersData);
    }
  );

describe('useSortedGolfers', () => {
  test('correctly orders based on position', () => {
    const { result } = renderHook();

    expect(result.current).toEqual([1226, 21528]);
  });
});

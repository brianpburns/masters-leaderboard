import {
  golferMoneyRankingsState,
  teamsState,
  golfersState,
} from 'src/client/api';
import { recoilHookTestWrapper } from 'src/client/__test__';
import { GolferMoneyRankings } from 'src/types';
import { useAddPrizeMoney } from './use-add-prize-money';

const mockTeams = [
  {
    id: 1,
    owner: 'burns',
    name: 'burnsing it up',
    golfer_ids: [1226, 21528],
  },
];

const mockPrizeMoney: GolferMoneyRankings = {
  38: {
    golfers: [21528],
    prizeMoney: 20,
    topar: -1,
  },
  10: {
    golfers: [1226],
    prizeMoney: 20,
    topar: -1,
  },
};

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

const renderHook = (prizeMoney = mockPrizeMoney) =>
  recoilHookTestWrapper(useAddPrizeMoney, ({ set }) => {
    set(teamsState, mockTeams);
    set(golferMoneyRankingsState, prizeMoney);
    set(golfersState, mockGolfersData);
  });

describe('useAddPrizeMoney', () => {
  test('sets correct team money', () => {
    const { result } = renderHook();

    expect(result.current[0].prizeMoney).toEqual(40);
  });

  test('throws error if player ID does not exist', () => {
    const { result } = renderHook({
      38: {
        golfers: [1],
        prizeMoney: 20,
        topar: -1,
      },
    });

    expect(() => result.current).toThrowError('No ID for 1226');
  });
});

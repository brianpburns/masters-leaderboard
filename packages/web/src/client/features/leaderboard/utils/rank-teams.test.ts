import { TeamWithPrizeMoney } from 'src/types';
import { rankTeams } from './rank-teams';

describe('Rank Teams', () => {
  test('is correct when a team has no prize money set', () => {
    const teams = [{}, { prizeMoney: 10 }] as TeamWithPrizeMoney[];
    const ranked = rankTeams(teams);

    const expected = [{ prizeMoney: 10 }, {}];

    expect(ranked).toEqual(expected);
  });

  test('is correct when one team has more money', () => {
    const teams = [
      { prizeMoney: 1 },
      { prizeMoney: 10 },
    ] as TeamWithPrizeMoney[];
    const ranked = rankTeams(teams);

    const expected = [{ prizeMoney: 10 }, { prizeMoney: 1 }];

    expect(ranked).toEqual(expected);
  });

  test('is correct when both teams have the same money', () => {
    const teams = [
      { name: 'a', prizeMoney: 1 },
      { name: 'b', prizeMoney: 1 },
    ] as TeamWithPrizeMoney[];
    const ranked = rankTeams(teams);

    const expected = [
      { name: 'b', prizeMoney: 1 },
      { name: 'a', prizeMoney: 1 },
    ];

    expect(ranked).toEqual(expected);
  });
});
